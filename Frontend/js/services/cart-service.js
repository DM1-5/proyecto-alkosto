import httpService from './http-service.js';
import authService from './auth-service.js';
import API_CONFIG from '../config/api-config.js';

class CartService {
  async getCart() {
    try {
      if (!authService.isAuthenticated()) {
        return this.getLocalCart();
      }

      const response = await httpService.get(
        API_CONFIG.ENDPOINTS.CART,
        {},
        true
      );

      const cart = {
        items: response.items || [],
        total_items: response.total_items || 0,
        total_price: parseFloat(response.total_price || 0)
      };

      // Agregar cálculos de descuentos
      return this.calcularTotalesCarrito(cart);
    } catch (error) {
      console.error('Error al obtener carrito:', error);
      return this.getLocalCart();
    }
  }

  /**
   * Calcular totales del carrito incluyendo descuentos
   */
  calcularTotalesCarrito(cart) {
    let subtotalSinDescuento = 0;
    let totalDescuentos = 0;
    let subtotalConDescuento = 0;

    cart.items.forEach(item => {
      const precioOriginal = parseFloat(item.original_price || item.price);
      const precioFinal = parseFloat(item.price);
      const cantidad = item.quantity;

      // Subtotal sin descuento (precio original * cantidad)
      subtotalSinDescuento += precioOriginal * cantidad;

      // Descuento por item
      const descuentoItem = (precioOriginal - precioFinal) * cantidad;
      totalDescuentos += descuentoItem;

      // Subtotal con descuento
      subtotalConDescuento += precioFinal * cantidad;
    });

    return {
      ...cart,
      subtotal_sin_descuento: subtotalSinDescuento,
      total_descuentos: totalDescuentos,
      subtotal: subtotalConDescuento,
      porcentaje_ahorro: subtotalSinDescuento > 0 
        ? ((totalDescuentos / subtotalSinDescuento) * 100).toFixed(1)
        : 0
    };
  }

  async addItem(productId, quantity = 1) {
    try {
      if (!authService.isAuthenticated()) {
        return this.addItemLocal(productId, quantity);
      }

      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.CART_ADD,
        { product_id: productId, quantity },
        true
      );

      return {
        items: response.items || [],
        total_items: response.total_items || 0,
        total_price: parseFloat(response.total_price || 0)
      };
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      throw error;
    }
  }

  async updateItem(itemId, quantity) {
    try {
      if (!authService.isAuthenticated()) {
        return this.updateItemLocal(itemId, quantity);
      }

      const response = await httpService.put(
        API_CONFIG.ENDPOINTS.CART_UPDATE,
        { item_id: itemId, quantity },
        true
      );

      return {
        items: response.items || [],
        total_items: response.total_items || 0,
        total_price: parseFloat(response.total_price || 0)
      };
    } catch (error) {
      console.error('Error al actualizar carrito:', error);
      throw error;
    }
  }

  async removeItem(itemId) {
    try {
      if (!authService.isAuthenticated()) {
        return this.removeItemLocal(itemId);
      }

      const response = await httpService.delete(
        `${API_CONFIG.ENDPOINTS.CART_REMOVE}?item_id=${itemId}`,
        true
      );

      return {
        items: response.items || [],
        total_items: response.total_items || 0,
        total_price: parseFloat(response.total_price || 0)
      };
    } catch (error) {
      console.error('Error al eliminar del carrito:', error);
      throw error;
    }
  }

  async clearCart() {
    try {
      if (!authService.isAuthenticated()) {
        localStorage.removeItem('cart');
        return { items: [], total_items: 0, total_price: 0 };
      }

      await httpService.delete(
        API_CONFIG.ENDPOINTS.CART_CLEAR,
        true
      );

      return { items: [], total_items: 0, total_price: 0 };
    } catch (error) {
      console.error('Error al vaciar carrito:', error);
      throw error;
    }
  }

  getLocalCart() {
    const cart = localStorage.getItem('cart');
    const cartData = cart ? JSON.parse(cart) : { items: [], total_items: 0, total_price: 0 };
    
    // Calcular totales con descuentos para carrito local
    return this.calcularTotalesCarrito(cartData);
  }

  addItemLocal(productId, quantity) {
    const cart = this.getLocalCart();
    const existingItem = cart.items.find(item => item.product_id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ 
        id: Date.now(),
        product_id: productId, 
        quantity 
      });
    }

    cart.total_items = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    this.saveLocalCart(cart);
    return cart;
  }

  updateItemLocal(itemId, quantity) {
    const cart = this.getLocalCart();
    const item = cart.items.find(item => item.id === itemId || item.product_id === itemId);

    if (item) {
      item.quantity = quantity;
    }

    cart.total_items = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    this.saveLocalCart(cart);
    return cart;
  }

  removeItemLocal(itemId) {
    const cart = this.getLocalCart();
    cart.items = cart.items.filter(item => item.id !== itemId && item.product_id !== itemId);

    cart.total_items = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    this.saveLocalCart(cart);
    return cart;
  }

  saveLocalCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async syncLocalCartWithServer() {
    const localCart = this.getLocalCart();

    if (localCart.items.length > 0 && authService.isAuthenticated()) {
      try {
        for (const item of localCart.items) {
          await this.addItem(item.product_id, item.quantity);
        }

        localStorage.removeItem('cart');
      } catch (error) {
        console.error('Error al sincronizar carrito:', error);
      }
    }
  }
}

export default new CartService();
