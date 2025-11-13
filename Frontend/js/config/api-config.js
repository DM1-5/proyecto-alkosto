const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8000/api',
  TIMEOUT: 10000,
  
  ENDPOINTS: {
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    REFRESH: '/auth/refresh/',
    PROFILE: '/auth/me/',
    
    PRODUCTS: '/products/',
    PRODUCT_DETAIL: (id) => `/products/${id}/`,
    PRODUCTS_SEARCH: '/products/search/',
    PRODUCTS_FEATURED: '/products/featured/',
    
    CATEGORIES: '/categories/',
    CATEGORY_DETAIL: (id) => `/categories/${id}/`,
    CATEGORY_PRODUCTS: (id) => `/categories/${id}/products/`,
    
    BRANDS: '/brands/',
    BRAND_DETAIL: (id) => `/brands/${id}/`,
    BRAND_PRODUCTS: (id) => `/brands/${id}/products/`,
    
    CART: '/cart/',
    CART_ADD: '/cart/add_item/',
    CART_UPDATE: '/cart/update_item/',
    CART_REMOVE: '/cart/remove_item/',
    CART_CLEAR: '/cart/clear/',
    
    ORDERS: '/orders/',
    ORDER_DETAIL: (id) => `/orders/${id}/`,
  }
};

export default API_CONFIG;
