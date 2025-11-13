// Sistema global de carrito para Alkosto
class GlobalCartManager {
  constructor() {
    this.init();
  }

  init() {
    this.updateCartBadge();
    this.setupCartButtons();
  }

  // Cargar carrito desde localStorage
  loadCart() {
    try {
      const cartData = localStorage.getItem('alkosto-cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  }

  // Guardar carrito en localStorage
  saveCart(cart) {
    try {
      localStorage.setItem('alkosto-cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  // Agregar producto al carrito
  addToCart(product, quantity = 1) {
    let cart = this.loadCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id || Date.now().toString(),
        name: product.name,
        brand: product.brand || 'Alkosto',
        price: product.price,
        image: product.image || 'https://via.placeholder.com/150',
        quantity: quantity,
        addedAt: new Date().toISOString()
      });
    }
    
    this.saveCart(cart);
    this.updateCartBadge();
    this.showNotification(`${product.name} agregado al carrito`, 'success');
    
    return cart;
  }

  // Obtener total de productos en el carrito
  getTotalItems() {
    const cart = this.loadCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Actualizar badge del carrito
  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = this.getTotalItems();
    
    if (badge) {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'inline' : 'none';
    }
  }

  // Configurar botones "Agregar al carrito"
  setupCartButtons() {
    // Buscar todos los botones de agregar al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart, .btn-add-cart');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtener datos del producto desde el botón o elemento padre
        const productElement = button.closest('.product-card, .product-item, .card');
        
        if (productElement) {
          const product = this.extractProductData(productElement, button);
          this.addToCart(product);
        }
      });
    });
  }

  // Extraer datos del producto desde el elemento HTML
  extractProductData(element, button) {
    // Intentar obtener datos desde atributos data-*
    if (button.dataset.product) {
      try {
        return JSON.parse(button.dataset.product);
      } catch (error) {
        console.error('Error parsing product data:', error);
      }
    }

    // Extraer datos desde el DOM
    const nameElement = element.querySelector('.product-name, .card-title, h3, h4, h5');
    const priceElement = element.querySelector('.price, .product-price, .card-text');
    const imageElement = element.querySelector('img');
    const brandElement = element.querySelector('.brand, .product-brand');

    const name = nameElement ? nameElement.textContent.trim() : 'Producto';
    const priceText = priceElement ? priceElement.textContent.trim() : '$0';
    const price = this.extractPrice(priceText);
    const image = imageElement ? imageElement.src : 'https://via.placeholder.com/150';
    const brand = brandElement ? brandElement.textContent.trim() : 'Alkosto';

    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name,
      brand: brand,
      price: price,
      image: image
    };
  }

  // Extraer precio numérico desde texto
  extractPrice(priceText) {
    const match = priceText.match(/[\d,]+/g);
    if (match) {
      return parseInt(match.join('').replace(/,/g, '')) || 0;
    }
    return 0;
  }

  // Mostrar notificación
  showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
      top: 20px;
      right: 20px;
      z-index: 9999;
      min-width: 300px;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    notification.innerHTML = `
      <i class="bi bi-check-circle me-2"></i>${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }

  // Obtener datos del carrito (para páginas externas)
  getCartData() {
    return {
      items: this.loadCart(),
      totalItems: this.getTotalItems(),
      totalPrice: this.loadCart().reduce((total, item) => total + (item.price * item.quantity), 0)
    };
  }
}

// Inicializar gestor global del carrito cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  window.globalCartManager = new GlobalCartManager();
});

// Función global para agregar productos al carrito (compatible con scripts externos)
window.addToCart = function(product, quantity = 1) {
  if (window.globalCartManager) {
    return window.globalCartManager.addToCart(product, quantity);
  } else {
    console.warn('Global cart manager not initialized yet');
    return null;
  }
};

// Función para crear botones de agregar al carrito dinámicamente
window.createAddToCartButton = function(product, className = 'btn btn-primary add-to-cart') {
  const button = document.createElement('button');
  button.className = className;
  button.innerHTML = '<i class="bi bi-cart-plus"></i> Agregar al carrito';
  button.dataset.product = JSON.stringify(product);
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    window.addToCart(product);
  });
  
  return button;
};