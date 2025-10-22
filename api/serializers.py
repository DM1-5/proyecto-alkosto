"""
Serializers para la API REST de Alkosto
"""
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import (
    Category, Brand, Product, ProductImage,
    Cart, CartItem, Order, OrderItem
)

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """Serializer para el modelo de usuario"""
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name',
            'phone', 'address', 'city', 'department', 'postal_code',
            'date_joined', 'last_login'
        ]
        read_only_fields = ['id', 'date_joined', 'last_login']


class UserRegistrationSerializer(serializers.ModelSerializer):
    """Serializer para registro de nuevos usuarios"""
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'}, label='Confirmar contraseña')
    
    class Meta:
        model = User
        fields = [
            'username', 'email', 'password', 'password2',
            'first_name', 'last_name', 'phone'
        ]
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden."})
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user


class CategorySerializer(serializers.ModelSerializer):
    """Serializer para categorías"""
    product_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = [
            'id', 'name', 'slug', 'description', 'image',
            'is_active', 'product_count', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'product_count']
    
    def get_product_count(self, obj):
        return obj.products.filter(is_active=True).count()


class BrandSerializer(serializers.ModelSerializer):
    """Serializer para marcas"""
    product_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Brand
        fields = [
            'id', 'name', 'slug', 'description', 'logo',
            'is_active', 'product_count', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'product_count']
    
    def get_product_count(self, obj):
        return obj.products.filter(is_active=True).count()


class ProductImageSerializer(serializers.ModelSerializer):
    """Serializer para imágenes de productos"""
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'is_primary', 'order']


class ProductListSerializer(serializers.ModelSerializer):
    """Serializer simplificado para lista de productos"""
    category_name = serializers.CharField(source='category.name', read_only=True)
    brand_name = serializers.CharField(source='brand.name', read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'sku', 'category_name', 'brand_name',
            'price', 'original_price', 'discount_percentage',
            'rating', 'reviews_count', 'image', 'stock',
            'is_featured', 'tags'
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    """Serializer detallado para un producto individual"""
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'sku', 'category', 'brand',
            'description', 'short_description',
            'price', 'original_price', 'discount_percentage',
            'stock', 'rating', 'reviews_count', 'image', 'images',
            'tags', 'specs', 'is_active', 'is_featured',
            'created_at', 'updated_at'
        ]


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer para crear/actualizar productos"""
    class Meta:
        model = Product
        fields = [
            'name', 'slug', 'sku', 'category', 'brand',
            'description', 'short_description',
            'price', 'original_price', 'discount_percentage',
            'stock', 'rating', 'reviews_count', 'image',
            'tags', 'specs', 'is_active', 'is_featured'
        ]


class CartItemSerializer(serializers.ModelSerializer):
    """Serializer para items del carrito"""
    product = ProductListSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source='product',
        write_only=True
    )
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)
    
    class Meta:
        model = CartItem
        fields = [
            'id', 'product', 'product_id', 'quantity',
            'subtotal', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'subtotal', 'created_at', 'updated_at']


class CartSerializer(serializers.ModelSerializer):
    """Serializer para carritos de compra"""
    items = CartItemSerializer(many=True, read_only=True)
    total_items = serializers.IntegerField(read_only=True)
    total_price = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)
    
    class Meta:
        model = Cart
        fields = [
            'id', 'user', 'items', 'total_items', 'total_price',
            'created_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'user', 'total_items', 'total_price',
            'created_at', 'updated_at'
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    """Serializer para items de órdenes"""
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)
    
    class Meta:
        model = OrderItem
        fields = [
            'id', 'product', 'product_name', 'product_price',
            'quantity', 'subtotal'
        ]
        read_only_fields = ['id', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    """Serializer para órdenes"""
    items = OrderItemSerializer(many=True, read_only=True)
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'user', 'user_email', 'order_number', 'status',
            'items', 'subtotal', 'tax', 'shipping', 'total',
            'shipping_address', 'shipping_city', 'shipping_department',
            'shipping_postal_code', 'notes',
            'created_at', 'updated_at'
        ]
        read_only_fields = [
            'id', 'order_number', 'created_at', 'updated_at'
        ]


class OrderCreateSerializer(serializers.ModelSerializer):
    """Serializer para crear nuevas órdenes"""
    class Meta:
        model = Order
        fields = [
            'shipping_address', 'shipping_city', 'shipping_department',
            'shipping_postal_code', 'notes'
        ]
