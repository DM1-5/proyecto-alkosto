# 🔌 Guía de Integración Frontend - Backend

## 📋 Índice
1. [Configuración Inicial](#configuración-inicial)
2. [Servicio de API](#servicio-de-api)
3. [Autenticación](#autenticación)
4. [Productos](#productos)
5. [Carrito de Compras](#carrito-de-compras)
6. [Órdenes](#órdenes)
7. [Manejo de Errores](#manejo-de-errores)

---

## Configuración Inicial

### 1. Crear archivo de configuración API

**Ruta:** `proyecto_alkosto/js/config/api-config.js`

```javascript
// Configuración de la API
const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8000/api',
  TIMEOUT: 10000, // 10 segundos
  
  ENDPOINTS: {
    // Autenticación
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    REFRESH: '/auth/refresh/',
    PROFILE: '/auth/me/',
    
    // Productos
    PRODUCTS: '/products/',
    PRODUCT_DETAIL: (id) => `/products/${id}/`,
    SEARCH: '/products/search/',
    FEATURED: '/products/featured/',
    
    // Categorías
    CATEGORIES: '/categories/',
    CATEGORY_PRODUCTS: (id) => `/categories/${id}/products/`,
    
    // Marcas
    BRANDS: '/brands/',
    BRAND_PRODUCTS: (id) => `/brands/${id}/products/`,
    
    // Carrito
    CART: '/cart/',
    CART_ADD: '/cart/add_item/',
    CART_UPDATE: '/cart/update_item/',
    CART_REMOVE: '/cart/remove_item/',
    CART_CLEAR: '/cart/clear/',
    
    // Órdenes
    ORDERS: '/orders/',
    ORDER_DETAIL: (id) => `/orders/${id}/`,
  }
};

export default API_CONFIG;
```

---

## Servicio de API

### 2. Crear servicio HTTP

**Ruta:** `proyecto_alkosto/js/services/http-service.js`

```javascript
import API_CONFIG from '../config/api-config.js';

class HttpService {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  // Obtener token del localStorage
  getToken() {
    return localStorage.getItem('access_token');
  }

  // Guardar token en localStorage
  saveToken(accessToken, refreshToken) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  // Eliminar tokens
  clearTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  // Headers por defecto
  getHeaders(includeAuth = false) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = this.getToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // GET request
  async get(endpoint, params = {}, requireAuth = false) {
    try {
      const url = new URL(this.baseURL + endpoint);
      Object.keys(params).forEach(key => 
        url.searchParams.append(key, params[key])
      );

      const response = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders(requireAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  }

  // POST request
  async post(endpoint, data = {}, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'POST',
        headers: this.getHeaders(requireAuth),
        body: JSON.stringify(data),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('POST Error:', error);
      throw error;
    }
  }

  // PUT request
  async put(endpoint, data = {}, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'PUT',
        headers: this.getHeaders(requireAuth),
        body: JSON.stringify(data),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('PUT Error:', error);
      throw error;
    }
  }

  // DELETE request
  async delete(endpoint, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'DELETE',
        headers: this.getHeaders(requireAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('DELETE Error:', error);
      throw error;
    }
  }

  // Manejar respuesta
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || error.message || 'Error en la petición');
    }

    // Si no hay contenido (204)
    if (response.status === 204) {
      return { success: true };
    }

    return await response.json();
  }
}

// Exportar instancia única (Singleton)
export default new HttpService();
```

---

## Autenticación

### 3. Servicio de Autenticación

**Ruta:** `proyecto_alkosto/js/services/auth-service.js`

```javascript
import httpService from './http-service.js';
import API_CONFIG from '../config/api-config.js';

class AuthService {
  // Estado de autenticación
  constructor() {
    this.currentUser = null;
    this.checkAuthStatus();
  }

  // Verificar si el usuario está autenticado
  isAuthenticated() {
    return !!httpService.getToken();
  }

  // Verificar estado de autenticación al cargar
  checkAuthStatus() {
    if (this.isAuthenticated()) {
      this.loadUserProfile();
    }
  }

  // Registro de usuario
  async register(userData) {
    try {
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.REGISTER,
        userData
      );

      // Guardar tokens
      httpService.saveToken(response.access, response.refresh);
      this.currentUser = response.user;

      return response;
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  // Login
  async login(username, password) {
    try {
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.LOGIN,
        { username, password }
      );

      // Guardar tokens
      httpService.saveToken(response.access, response.refresh);
      this.currentUser = response.user;

      return response;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  // Logout
  logout() {
    httpService.clearTokens();
    this.currentUser = null;
    window.location.href = '/index.html';
  }

  // Obtener perfil del usuario
  async loadUserProfile() {
    try {
      const profile = await httpService.get(
        API_CONFIG.ENDPOINTS.PROFILE,
        {},
        true // requireAuth
      );

      this.currentUser = profile;
      return profile;
    } catch (error) {
      console.error('Error al cargar perfil:', error);
      this.logout(); // Si falla, cerrar sesión
      throw error;
    }
  }

  // Obtener usuario actual
  getCurrentUser() {
    return this.currentUser;
  }

  // Renovar token (cuando expire)
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.REFRESH,
        { refresh: refreshToken }
      );

      // Actualizar access token
      localStorage.setItem('access_token', response.access);
      
      return response;
    } catch (error) {
      console.error('Error al renovar token:', error);
      this.logout();
      throw error;
    }
  }
}

export default new AuthService();
```

---

## Productos

### 4. Servicio de Productos

**Ruta:** `proyecto_alkosto/js/services/product-service.js`

```javascript
import httpService from './http-service.js';
import API_CONFIG from '../config/api-config.js';

class ProductService {
  // Obtener todos los productos con paginación
  async getAllProducts(page = 1, limit = 20) {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS, {
        page,
        page_size: limit
      });
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  }

  // Obtener producto por ID
  async getProductById(id) {
    try {
      return await httpService.get(
        API_CONFIG.ENDPOINTS.PRODUCT_DETAIL(id)
      );
    } catch (error) {
      console.error('Error al obtener producto:', error);
      throw error;
    }
  }

  // Buscar productos
  async searchProducts(query) {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.SEARCH, {
        q: query
      });
    } catch (error) {
      console.error('Error en búsqueda:', error);
      throw error;
    }
  }

  // Obtener productos destacados
  async getFeaturedProducts() {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.FEATURED);
    } catch (error) {
      console.error('Error al obtener destacados:', error);
      throw error;
    }
  }

  // Filtrar productos por categoría
  async getProductsByCategory(categoryId) {
    try {
      return await httpService.get(
        API_CONFIG.ENDPOINTS.CATEGORY_PRODUCTS(categoryId)
      );
    } catch (error) {
      console.error('Error al filtrar por categoría:', error);
      throw error;
    }
  }

  // Filtrar productos por marca
  async getProductsByBrand(brandId) {
    try {
      return await httpService.get(
        API_CONFIG.ENDPOINTS.BRAND_PRODUCTS(brandId)
      );
    } catch (error) {
      console.error('Error al filtrar por marca:', error);
      throw error;
    }
  }

  // Filtrar productos por precio
  async filterByPrice(minPrice, maxPrice) {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS, {
        min_price: minPrice,
        max_price: maxPrice
      });
    } catch (error) {
      console.error('Error al filtrar por precio:', error);
      throw error;
    }
  }

  // Obtener categorías
  async getCategories() {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.CATEGORIES);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      throw error;
    }
  }

  // Obtener marcas
  async getBrands() {
    try {
      return await httpService.get(API_CONFIG.ENDPOINTS.BRANDS);
    } catch (error) {
      console.error('Error al obtener marcas:', error);
      throw error;
    }
  }
}

export default new ProductService();
```

---

## Carrito de Compras

### 5. Servicio de Carrito

**Ruta:** `proyecto_alkosto/js/services/cart-service.js`

```javascript
import httpService from './http-service.js';
import authService from './auth-service.js';
import API_CONFIG from '../config/api-config.js';

class CartService {
  // Obtener carrito actual
  async getCart() {
    try {
      if (!authService.isAuthenticated()) {
        return this.getLocalCart();
      }

      return await httpService.get(
        API_CONFIG.ENDPOINTS.CART,
        {},
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al obtener carrito:', error);
      throw error;
    }
  }

  // Agregar producto al carrito
  async addItem(productId, quantity = 1) {
    try {
      if (!authService.isAuthenticated()) {
        return this.addItemLocal(productId, quantity);
      }

      return await httpService.post(
        API_CONFIG.ENDPOINTS.CART_ADD,
        { product_id: productId, quantity },
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      throw error;
    }
  }

  // Actualizar cantidad de un producto
  async updateItem(itemId, quantity) {
    try {
      if (!authService.isAuthenticated()) {
        return this.updateItemLocal(itemId, quantity);
      }

      return await httpService.put(
        API_CONFIG.ENDPOINTS.CART_UPDATE,
        { item_id: itemId, quantity },
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al actualizar carrito:', error);
      throw error;
    }
  }

  // Eliminar producto del carrito
  async removeItem(itemId) {
    try {
      if (!authService.isAuthenticated()) {
        return this.removeItemLocal(itemId);
      }

      return await httpService.delete(
        `${API_CONFIG.ENDPOINTS.CART_REMOVE}?item_id=${itemId}`,
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al eliminar del carrito:', error);
      throw error;
    }
  }

  // Vaciar carrito
  async clearCart() {
    try {
      if (!authService.isAuthenticated()) {
        localStorage.removeItem('cart');
        return { success: true };
      }

      return await httpService.delete(
        API_CONFIG.ENDPOINTS.CART_CLEAR,
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al vaciar carrito:', error);
      throw error;
    }
  }

  // === Métodos para carrito local (sin autenticación) ===

  getLocalCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [], total_items: 0, total_price: 0 };
  }

  addItemLocal(productId, quantity) {
    const cart = this.getLocalCart();
    const existingItem = cart.items.find(item => item.product_id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product_id: productId, quantity });
    }

    this.saveLocalCart(cart);
    return cart;
  }

  updateItemLocal(itemId, quantity) {
    const cart = this.getLocalCart();
    const item = cart.items.find(item => item.product_id === itemId);

    if (item) {
      item.quantity = quantity;
    }

    this.saveLocalCart(cart);
    return cart;
  }

  removeItemLocal(itemId) {
    const cart = this.getLocalCart();
    cart.items = cart.items.filter(item => item.product_id !== itemId);

    this.saveLocalCart(cart);
    return cart;
  }

  saveLocalCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Sincronizar carrito local con el servidor (después de login)
  async syncLocalCartWithServer() {
    const localCart = this.getLocalCart();

    if (localCart.items.length > 0) {
      for (const item of localCart.items) {
        await this.addItem(item.product_id, item.quantity);
      }

      // Limpiar carrito local
      localStorage.removeItem('cart');
    }
  }
}

export default new CartService();
```

---

## Órdenes

### 6. Servicio de Órdenes

**Ruta:** `proyecto_alkosto/js/services/order-service.js`

```javascript
import httpService from './http-service.js';
import API_CONFIG from '../config/api-config.js';

class OrderService {
  // Crear orden desde el carrito
  async createOrder(shippingData) {
    try {
      return await httpService.post(
        API_CONFIG.ENDPOINTS.ORDERS,
        {
          shipping_address: shippingData.address,
          shipping_city: shippingData.city,
          shipping_state: shippingData.state,
          shipping_zip: shippingData.zip,
          phone: shippingData.phone,
        },
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al crear orden:', error);
      throw error;
    }
  }

  // Obtener todas las órdenes del usuario
  async getMyOrders() {
    try {
      return await httpService.get(
        API_CONFIG.ENDPOINTS.ORDERS,
        {},
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al obtener órdenes:', error);
      throw error;
    }
  }

  // Obtener detalle de una orden
  async getOrderById(orderId) {
    try {
      return await httpService.get(
        API_CONFIG.ENDPOINTS.ORDER_DETAIL(orderId),
        {},
        true // requireAuth
      );
    } catch (error) {
      console.error('Error al obtener detalle de orden:', error);
      throw error;
    }
  }
}

export default new OrderService();
```

---

## Manejo de Errores

### 7. Manejador de Errores Global

**Ruta:** `proyecto_alkosto/js/utils/error-handler.js`

```javascript
class ErrorHandler {
  // Mostrar mensaje de error
  showError(message, duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #f44336;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Eliminar después del tiempo especificado
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  // Mostrar mensaje de éxito
  showSuccess(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #4CAF50;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  // Manejar errores HTTP
  handleApiError(error) {
    if (error.message.includes('401')) {
      this.showError('Sesión expirada. Por favor, inicia sesión nuevamente.');
      // Redirigir al login
      setTimeout(() => {
        window.location.href = '/login.html';
      }, 2000);
    } else if (error.message.includes('404')) {
      this.showError('Recurso no encontrado');
    } else if (error.message.includes('500')) {
      this.showError('Error del servidor. Intenta nuevamente más tarde.');
    } else {
      this.showError(error.message || 'Error desconocido');
    }
  }
}

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

export default new ErrorHandler();
```

---

## Ejemplo de Uso en HTML

### 8. Ejemplo: Página de Productos

**Ruta:** `proyecto_alkosto/index-productos.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Productos - Alkosto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="products-container"></div>

  <script type="module">
    import productService from './js/services/product-service.js';
    import cartService from './js/services/cart-service.js';
    import errorHandler from './js/utils/error-handler.js';

    // Cargar productos al inicio
    async function loadProducts() {
      try {
        const response = await productService.getAllProducts();
        displayProducts(response.results);
      } catch (error) {
        errorHandler.handleApiError(error);
      }
    }

    // Mostrar productos en el DOM
    function displayProducts(products) {
      const container = document.getElementById('products-container');
      
      products.forEach(product => {
        const productCard = `
          <div class="product-card">
            <img src="${product.main_image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">
              Agregar al Carrito
            </button>
          </div>
        `;
        container.innerHTML += productCard;
      });
    }

    // Agregar al carrito
    window.addToCart = async function(productId) {
      try {
        await cartService.addItem(productId, 1);
        errorHandler.showSuccess('Producto agregado al carrito');
      } catch (error) {
        errorHandler.handleApiError(error);
      }
    };

    // Inicializar
    loadProducts();
  </script>
</body>
</html>
```

---

## 🎯 Próximos Pasos

1. **Copiar los archivos JS** a tu proyecto frontend
2. **Actualizar las importaciones** en tus archivos existentes
3. **Probar la integración** con Postman primero
4. **Reemplazar datos estáticos** por llamadas a la API
5. **Implementar autenticación** en el frontend
6. **Testear funcionalidad completa**

---

## 📝 Notas Importantes

- ✅ Todos los servicios usan **módulos ES6** (`import/export`)
- ✅ El carrito funciona **sin autenticación** (localStorage)
- ✅ Al hacer login, el carrito local **se sincroniza** con el servidor
- ✅ Los tokens JWT se renuevan automáticamente
- ✅ CORS ya está configurado en el backend

---

**¡Integración lista para implementar!** 🚀
