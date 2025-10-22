"""
Configuración del panel de administración de Django
"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    CustomUser, Category, Brand, Product, ProductImage,
    Cart, CartItem, Order, OrderItem
)


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    """Panel de administración para usuarios personalizados"""
    list_display = ['username', 'email', 'first_name', 'last_name', 'is_staff', 'created_at']
    list_filter = ['is_staff', 'is_superuser', 'is_active', 'created_at']
    search_fields = ['username', 'email', 'first_name', 'last_name']
    ordering = ['-created_at']
    
    fieldsets = UserAdmin.fieldsets + (
        ('Información adicional', {
            'fields': ('phone', 'address', 'city', 'department', 'postal_code')
        }),
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Panel de administración para categorías"""
    list_display = ['name', 'slug', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'slug', 'description']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['name']


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    """Panel de administración para marcas"""
    list_display = ['name', 'slug', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'slug', 'description']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['name']


class ProductImageInline(admin.TabularInline):
    """Inline para imágenes de productos"""
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """Panel de administración para productos"""
    list_display = [
        'name', 'sku', 'category', 'brand', 'price', 
        'discount_percentage', 'stock', 'rating', 'is_active', 'is_featured'
    ]
    list_filter = [
        'is_active', 'is_featured', 'category', 'brand', 'created_at'
    ]
    search_fields = ['name', 'sku', 'description']
    prepopulated_fields = {'slug': ('name',)}
    ordering = ['-created_at']
    
    fieldsets = (
        ('Información básica', {
            'fields': ('name', 'slug', 'sku', 'category', 'brand')
        }),
        ('Descripción', {
            'fields': ('description', 'short_description')
        }),
        ('Precios', {
            'fields': ('price', 'original_price', 'discount_percentage')
        }),
        ('Inventario y calificación', {
            'fields': ('stock', 'rating', 'reviews_count')
        }),
        ('Multimedia', {
            'fields': ('image',)
        }),
        ('Características', {
            'fields': ('tags', 'specs'),
            'classes': ('collapse',)
        }),
        ('Estado', {
            'fields': ('is_active', 'is_featured')
        }),
    )
    
    inlines = [ProductImageInline]


class CartItemInline(admin.TabularInline):
    """Inline para items del carrito"""
    model = CartItem
    extra = 0
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    """Panel de administración para carritos"""
    list_display = ['user', 'total_items', 'total_price', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['user__username', 'user__email']
    ordering = ['-updated_at']
    readonly_fields = ['created_at', 'updated_at', 'total_items', 'total_price']
    
    inlines = [CartItemInline]


class OrderItemInline(admin.TabularInline):
    """Inline para items de la orden"""
    model = OrderItem
    extra = 0
    readonly_fields = ['product_name', 'product_price', 'quantity', 'subtotal']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """Panel de administración para órdenes"""
    list_display = [
        'order_number', 'user', 'status', 'total', 
        'shipping_city', 'created_at'
    ]
    list_filter = ['status', 'created_at', 'shipping_city']
    search_fields = [
        'order_number', 'user__username', 'user__email',
        'shipping_city', 'shipping_department'
    ]
    ordering = ['-created_at']
    readonly_fields = ['order_number', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Información de la orden', {
            'fields': ('order_number', 'user', 'status')
        }),
        ('Totales', {
            'fields': ('subtotal', 'tax', 'shipping', 'total')
        }),
        ('Información de envío', {
            'fields': (
                'shipping_address', 'shipping_city', 
                'shipping_department', 'shipping_postal_code'
            )
        }),
        ('Notas', {
            'fields': ('notes',),
            'classes': ('collapse',)
        }),
        ('Fechas', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    inlines = [OrderItemInline]
