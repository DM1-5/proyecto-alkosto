"""
Modelos de la API de Alkosto
"""
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from decimal import Decimal


class CustomUser(AbstractUser):
    """
    Modelo de usuario personalizado extendiendo el modelo de Django
    """
    email = models.EmailField(unique=True, verbose_name='Correo electrónico')
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name='Teléfono')
    address = models.TextField(blank=True, null=True, verbose_name='Dirección')
    city = models.CharField(max_length=100, blank=True, null=True, verbose_name='Ciudad')
    department = models.CharField(max_length=100, blank=True, null=True, verbose_name='Departamento')
    postal_code = models.CharField(max_length=10, blank=True, null=True, verbose_name='Código Postal')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.username} ({self.email})"


class Category(models.Model):
    """
    Modelo de categorías de productos
    """
    name = models.CharField(max_length=100, unique=True, verbose_name='Nombre')
    slug = models.SlugField(max_length=100, unique=True, verbose_name='Slug')
    description = models.TextField(blank=True, null=True, verbose_name='Descripción')
    image = models.ImageField(upload_to='categories/', blank=True, null=True, verbose_name='Imagen')
    
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Categoría'
        verbose_name_plural = 'Categorías'
        ordering = ['name']
    
    def __str__(self):
        return self.name


class Brand(models.Model):
    """
    Modelo de marcas de productos
    """
    name = models.CharField(max_length=100, unique=True, verbose_name='Nombre')
    slug = models.SlugField(max_length=100, unique=True, verbose_name='Slug')
    description = models.TextField(blank=True, null=True, verbose_name='Descripción')
    logo = models.ImageField(upload_to='brands/', blank=True, null=True, verbose_name='Logo')
    
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Marca'
        verbose_name_plural = 'Marcas'
        ordering = ['name']
    
    def __str__(self):
        return self.name


class Product(models.Model):
    """
    Modelo de productos
    """
    # Información básica
    name = models.CharField(max_length=255, verbose_name='Nombre')
    slug = models.SlugField(max_length=255, unique=True, verbose_name='Slug')
    sku = models.CharField(max_length=100, unique=True, verbose_name='SKU')
    
    # Relaciones
    category = models.ForeignKey(
        Category, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='products',
        verbose_name='Categoría'
    )
    brand = models.ForeignKey(
        Brand, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='products',
        verbose_name='Marca'
    )
    
    # Descripción y detalles
    description = models.TextField(verbose_name='Descripción')
    short_description = models.TextField(
        max_length=500, 
        blank=True, 
        null=True,
        verbose_name='Descripción corta'
    )
    
    # Precios
    price = models.DecimalField(
        max_digits=10, 
        decimal_places=0, 
        validators=[MinValueValidator(Decimal('0.00'))],
        verbose_name='Precio'
    )
    original_price = models.DecimalField(
        max_digits=10, 
        decimal_places=0, 
        blank=True, 
        null=True,
        validators=[MinValueValidator(Decimal('0.00'))],
        verbose_name='Precio original'
    )
    discount_percentage = models.IntegerField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        verbose_name='Porcentaje de descuento'
    )
    
    # Inventario
    stock = models.IntegerField(
        default=0,
        validators=[MinValueValidator(0)],
        verbose_name='Stock'
    )
    
    # Calificación
    rating = models.DecimalField(
        max_digits=2, 
        decimal_places=1, 
        default=0.0,
        validators=[MinValueValidator(Decimal('0.0')), MaxValueValidator(Decimal('5.0'))],
        verbose_name='Calificación'
    )
    reviews_count = models.IntegerField(
        default=0,
        validators=[MinValueValidator(0)],
        verbose_name='Número de reseñas'
    )
    
    # Imagen
    image = models.URLField(max_length=500, blank=True, null=True, verbose_name='URL de imagen')
    
    # Tags y características
    tags = models.JSONField(default=list, blank=True, verbose_name='Etiquetas')
    specs = models.JSONField(default=dict, blank=True, verbose_name='Especificaciones')
    
    # Estado
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_featured = models.BooleanField(default=False, verbose_name='Destacado')
    
    # Fechas
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['sku']),
            models.Index(fields=['category', '-created_at']),
            models.Index(fields=['brand', '-created_at']),
            models.Index(fields=['is_featured', '-created_at']),
        ]
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Calcular descuento automáticamente si hay precio original
        if self.original_price and self.original_price > self.price:
            discount = ((self.original_price - self.price) / self.original_price) * 100
            self.discount_percentage = int(discount)
        super().save(*args, **kwargs)


class ProductImage(models.Model):
    """
    Modelo para imágenes adicionales de productos
    """
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE, 
        related_name='images',
        verbose_name='Producto'
    )
    image = models.ImageField(upload_to='products/', verbose_name='Imagen')
    alt_text = models.CharField(max_length=255, blank=True, null=True, verbose_name='Texto alternativo')
    is_primary = models.BooleanField(default=False, verbose_name='Imagen principal')
    order = models.IntegerField(default=0, verbose_name='Orden')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    
    class Meta:
        verbose_name = 'Imagen de producto'
        verbose_name_plural = 'Imágenes de productos'
        ordering = ['order', '-is_primary']
    
    def __str__(self):
        return f"Imagen de {self.product.name}"


class Cart(models.Model):
    """
    Modelo de carrito de compras
    """
    user = models.ForeignKey(
        CustomUser, 
        on_delete=models.CASCADE, 
        related_name='carts',
        verbose_name='Usuario'
    )
    session_key = models.CharField(max_length=255, blank=True, null=True, verbose_name='Clave de sesión')
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Carrito'
        verbose_name_plural = 'Carritos'
        ordering = ['-updated_at']
    
    def __str__(self):
        return f"Carrito de {self.user.username}"
    
    @property
    def total_items(self):
        return sum(item.quantity for item in self.items.all())
    
    @property
    def total_price(self):
        return sum(item.subtotal for item in self.items.all())


class CartItem(models.Model):
    """
    Modelo de items del carrito
    """
    cart = models.ForeignKey(
        Cart, 
        on_delete=models.CASCADE, 
        related_name='items',
        verbose_name='Carrito'
    )
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE,
        verbose_name='Producto'
    )
    quantity = models.IntegerField(
        default=1,
        validators=[MinValueValidator(1)],
        verbose_name='Cantidad'
    )
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Item del carrito'
        verbose_name_plural = 'Items del carrito'
        unique_together = [['cart', 'product']]
    
    def __str__(self):
        return f"{self.quantity}x {self.product.name}"
    
    @property
    def subtotal(self):
        return self.product.price * self.quantity


class Order(models.Model):
    """
    Modelo de órdenes de compra
    """
    STATUS_CHOICES = [
        ('pending', 'Pendiente'),
        ('processing', 'Procesando'),
        ('shipped', 'Enviado'),
        ('delivered', 'Entregado'),
        ('cancelled', 'Cancelado'),
    ]
    
    # Información del cliente
    user = models.ForeignKey(
        CustomUser, 
        on_delete=models.SET_NULL, 
        null=True,
        related_name='orders',
        verbose_name='Usuario'
    )
    
    # Información de la orden
    order_number = models.CharField(max_length=100, unique=True, verbose_name='Número de orden')
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='pending',
        verbose_name='Estado'
    )
    
    # Totales
    subtotal = models.DecimalField(
        max_digits=10, 
        decimal_places=0,
        verbose_name='Subtotal'
    )
    tax = models.DecimalField(
        max_digits=10, 
        decimal_places=0, 
        default=0,
        verbose_name='Impuestos'
    )
    shipping = models.DecimalField(
        max_digits=10, 
        decimal_places=0, 
        default=0,
        verbose_name='Envío'
    )
    total = models.DecimalField(
        max_digits=10, 
        decimal_places=0,
        verbose_name='Total'
    )
    
    # Información de envío
    shipping_address = models.TextField(verbose_name='Dirección de envío')
    shipping_city = models.CharField(max_length=100, verbose_name='Ciudad')
    shipping_department = models.CharField(max_length=100, verbose_name='Departamento')
    shipping_postal_code = models.CharField(max_length=10, verbose_name='Código postal')
    
    # Notas
    notes = models.TextField(blank=True, null=True, verbose_name='Notas')
    
    # Fechas
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Última actualización')
    
    class Meta:
        verbose_name = 'Orden'
        verbose_name_plural = 'Órdenes'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Orden {self.order_number}"


class OrderItem(models.Model):
    """
    Modelo de items de la orden
    """
    order = models.ForeignKey(
        Order, 
        on_delete=models.CASCADE, 
        related_name='items',
        verbose_name='Orden'
    )
    product = models.ForeignKey(
        Product, 
        on_delete=models.SET_NULL, 
        null=True,
        verbose_name='Producto'
    )
    product_name = models.CharField(max_length=255, verbose_name='Nombre del producto')
    product_price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name='Precio')
    quantity = models.IntegerField(validators=[MinValueValidator(1)], verbose_name='Cantidad')
    
    class Meta:
        verbose_name = 'Item de orden'
        verbose_name_plural = 'Items de orden'
    
    def __str__(self):
        return f"{self.quantity}x {self.product_name}"
    
    @property
    def subtotal(self):
        return self.product_price * self.quantity
