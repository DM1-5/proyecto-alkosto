"""
URLs de la API de Alkosto
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    register_user, get_current_user, update_current_user,
    CategoryViewSet, BrandViewSet, ProductViewSet,
    CartViewSet, OrderViewSet
)

# Router para ViewSets
router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'brands', BrandViewSet, basename='brand')
router.register(r'products', ProductViewSet, basename='product')
router.register(r'cart', CartViewSet, basename='cart')
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns = [
    # Autenticación con JWT
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', register_user, name='register'),
    
    # Usuario actual
    path('user/me/', get_current_user, name='current_user'),
    path('user/update/', update_current_user, name='update_user'),
    
    # Incluir rutas del router
    path('', include(router.urls)),
]
