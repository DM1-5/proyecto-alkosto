"""
Views y ViewSets para la API REST de Alkosto
"""
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from django.db.models import Q
from decimal import Decimal
import uuid

from .models import (
    Category, Brand, Product, ProductImage,
    Cart, CartItem, Order, OrderItem
)
from .serializers import (
    UserSerializer, UserRegistrationSerializer,
    CategorySerializer, BrandSerializer,
    ProductListSerializer, ProductDetailSerializer, ProductCreateUpdateSerializer,
    CartSerializer, CartItemSerializer,
    OrderSerializer, OrderCreateSerializer
)

User = get_user_model()


# ===== AUTHENTICATION VIEWS =====

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """
    Endpoint para registro de nuevos usuarios
    POST /api/register/
    """
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user_data = UserSerializer(user).data
        return Response({
            'success': True,
            'message': 'Usuario registrado exitosamente',
            'user': user_data
        }, status=status.HTTP_201_CREATED)
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    """
    Obtener información del usuario actual
    GET /api/user/me/
    """
    serializer = UserSerializer(request.user)
    return Response({
        'success': True,
        'user': serializer.data
    })


@api_view(['PUT', 'PATCH'])
@permission_classes([IsAuthenticated])
def update_current_user(request):
    """
    Actualizar información del usuario actual
    PUT/PATCH /api/user/me/
    """
    serializer = UserSerializer(request.user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'success': True,
            'message': 'Perfil actualizado exitosamente',
            'user': serializer.data
        })
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


# ===== CATEGORY VIEWSET =====

class CategoryViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar categorías
    
    list: GET /api/categories/
    retrieve: GET /api/categories/{id}/
    create: POST /api/categories/
    update: PUT /api/categories/{id}/
    partial_update: PATCH /api/categories/{id}/
    destroy: DELETE /api/categories/{id}/
    """
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAdminUser()]
    
    @action(detail=True, methods=['get'])
    def products(self, request, slug=None):
        """
        Obtener productos de una categoría
        GET /api/categories/{slug}/products/
        """
        category = self.get_object()
        products = Product.objects.filter(
            category=category, 
            is_active=True
        )
        
        # Aplicar filtros opcionales
        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')
        brand = request.query_params.get('brand')
        
        if min_price:
            products = products.filter(price__gte=min_price)
        if max_price:
            products = products.filter(price__lte=max_price)
        if brand:
            products = products.filter(brand__slug=brand)
        
        # Ordenamiento
        ordering = request.query_params.get('ordering', '-created_at')
        products = products.order_by(ordering)
        
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = ProductListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)


# ===== BRAND VIEWSET =====

class BrandViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar marcas
    """
    queryset = Brand.objects.filter(is_active=True)
    serializer_class = BrandSerializer
    lookup_field = 'slug'
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAdminUser()]


# ===== PRODUCT VIEWSET =====

class ProductViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar productos
    
    Endpoints:
    - list: GET /api/products/
    - retrieve: GET /api/products/{slug}/
    - create: POST /api/products/
    - update: PUT /api/products/{slug}/
    - partial_update: PATCH /api/products/{slug}/
    - destroy: DELETE /api/products/{slug}/
    - search: GET /api/products/search/?q=termo
    - featured: GET /api/products/featured/
    """
    queryset = Product.objects.filter(is_active=True)
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'brand__name', 'category__name', 'tags']
    ordering_fields = ['price', 'rating', 'created_at', 'name']
    ordering = ['-created_at']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProductDetailSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        return ProductListSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve', 'search', 'featured']:
            return [AllowAny()]
        return [IsAdminUser()]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtros por query params
        category = self.request.query_params.get('category')
        brand = self.request.query_params.get('brand')
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        min_rating = self.request.query_params.get('min_rating')
        featured = self.request.query_params.get('featured')
        
        if category:
            queryset = queryset.filter(category__slug=category)
        if brand:
            queryset = queryset.filter(brand__slug=brand)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        if min_rating:
            queryset = queryset.filter(rating__gte=min_rating)
        if featured:
            queryset = queryset.filter(is_featured=True)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        Búsqueda avanzada de productos
        GET /api/products/search/?q=iphone&category=celulares&brand=apple
        """
        query = request.query_params.get('q', '')
        
        if not query:
            return Response({
                'success': False,
                'message': 'Se requiere un término de búsqueda'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Búsqueda en múltiples campos
        products = self.get_queryset().filter(
            Q(name__icontains=query) |
            Q(description__icontains=query) |
            Q(brand__name__icontains=query) |
            Q(category__name__icontains=query) |
            Q(tags__contains=[query])
        ).distinct()
        
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response({
                'success': True,
                'query': query,
                'results': serializer.data
            })
        
        serializer = self.get_serializer(products, many=True)
        return Response({
            'success': True,
            'query': query,
            'count': products.count(),
            'results': serializer.data
        })
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """
        Obtener productos destacados
        GET /api/products/featured/
        """
        products = self.get_queryset().filter(is_featured=True)[:20]
        serializer = self.get_serializer(products, many=True)
        return Response({
            'success': True,
            'count': len(products),
            'products': serializer.data
        })


# ===== CART VIEWSET =====

class CartViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar carritos de compra
    """
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)
    
    def get_or_create_cart(self):
        """Obtener o crear carrito del usuario actual"""
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart
    
    @action(detail=False, methods=['get'])
    def current(self, request):
        """
        Obtener carrito actual del usuario
        GET /api/cart/current/
        """
        cart = self.get_or_create_cart()
        serializer = self.get_serializer(cart)
        return Response({
            'success': True,
            'cart': serializer.data
        })
    
    @action(detail=False, methods=['post'])
    def add_item(self, request):
        """
        Agregar producto al carrito
        POST /api/cart/add_item/
        Body: {"product_id": 1, "quantity": 1}
        """
        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 1))
        
        if not product_id:
            return Response({
                'success': False,
                'message': 'Se requiere product_id'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            product = Product.objects.get(id=product_id, is_active=True)
        except Product.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Producto no encontrado'
            }, status=status.HTTP_404_NOT_FOUND)
        
        # Verificar stock
        if product.stock < quantity:
            return Response({
                'success': False,
                'message': f'Stock insuficiente. Disponible: {product.stock}'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        cart = self.get_or_create_cart()
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={'quantity': quantity}
        )
        
        if not created:
            cart_item.quantity += quantity
            if cart_item.quantity > product.stock:
                return Response({
                    'success': False,
                    'message': f'Stock insuficiente. Disponible: {product.stock}'
                }, status=status.HTTP_400_BAD_REQUEST)
            cart_item.save()
        
        serializer = self.get_serializer(cart)
        return Response({
            'success': True,
            'message': 'Producto agregado al carrito',
            'cart': serializer.data
        })
    
    @action(detail=False, methods=['post'])
    def update_item(self, request):
        """
        Actualizar cantidad de un item del carrito
        POST /api/cart/update_item/
        Body: {"item_id": 1, "quantity": 3}
        """
        item_id = request.data.get('item_id')
        quantity = int(request.data.get('quantity', 1))
        
        try:
            cart = self.get_or_create_cart()
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
            
            if quantity <= 0:
                cart_item.delete()
                message = 'Producto eliminado del carrito'
            else:
                if cart_item.product.stock < quantity:
                    return Response({
                        'success': False,
                        'message': f'Stock insuficiente. Disponible: {cart_item.product.stock}'
                    }, status=status.HTTP_400_BAD_REQUEST)
                
                cart_item.quantity = quantity
                cart_item.save()
                message = 'Cantidad actualizada'
            
            serializer = self.get_serializer(cart)
            return Response({
                'success': True,
                'message': message,
                'cart': serializer.data
            })
        except CartItem.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Item no encontrado en el carrito'
            }, status=status.HTTP_404_NOT_FOUND)
    
    @action(detail=False, methods=['post'])
    def remove_item(self, request):
        """
        Eliminar item del carrito
        POST /api/cart/remove_item/
        Body: {"item_id": 1}
        """
        item_id = request.data.get('item_id')
        
        try:
            cart = self.get_or_create_cart()
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
            cart_item.delete()
            
            serializer = self.get_serializer(cart)
            return Response({
                'success': True,
                'message': 'Producto eliminado del carrito',
                'cart': serializer.data
            })
        except CartItem.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Item no encontrado'
            }, status=status.HTTP_404_NOT_FOUND)
    
    @action(detail=False, methods=['post'])
    def clear(self, request):
        """
        Vaciar carrito
        POST /api/cart/clear/
        """
        cart = self.get_or_create_cart()
        cart.items.all().delete()
        
        serializer = self.get_serializer(cart)
        return Response({
            'success': True,
            'message': 'Carrito vaciado',
            'cart': serializer.data
        })


# ===== ORDER VIEWSET =====

class OrderViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar órdenes
    """
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(user=self.request.user)
    
    def get_serializer_class(self):
        if self.action == 'create':
            return OrderCreateSerializer
        return OrderSerializer
    
    def create(self, request):
        """
        Crear orden desde el carrito actual
        POST /api/orders/
        Body: {
            "shipping_address": "Calle 123",
            "shipping_city": "Bogotá",
            "shipping_department": "Cundinamarca",
            "shipping_postal_code": "110111"
        }
        """
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            return Response({
                'success': False,
                'message': 'No hay carrito activo'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        if cart.items.count() == 0:
            return Response({
                'success': False,
                'message': 'El carrito está vacío'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Validar datos de envío
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'success': False,
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Crear orden
        order_data = serializer.validated_data
        order = Order.objects.create(
            user=request.user,
            order_number=f'ALK-{uuid.uuid4().hex[:8].upper()}',
            subtotal=cart.total_price,
            tax=Decimal('0'),
            shipping=Decimal('0'),
            total=cart.total_price,
            **order_data
        )
        
        # Crear items de la orden
        for cart_item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=cart_item.product,
                product_name=cart_item.product.name,
                product_price=cart_item.product.price,
                quantity=cart_item.quantity
            )
            
            # Reducir stock
            product = cart_item.product
            product.stock -= cart_item.quantity
            product.save()
        
        # Vaciar carrito
        cart.items.all().delete()
        
        # Serializar respuesta
        response_serializer = OrderSerializer(order)
        return Response({
            'success': True,
            'message': 'Orden creada exitosamente',
            'order': response_serializer.data
        }, status=status.HTTP_201_CREATED)
