import productService from './js/services/product-service.js';
import cartService from './js/services/cart-service.js';

class APIAdapter {
  constructor() {
    this.productos = [];
    this.categorySlug = null;
  }

  async cargarProductosDeAPI(categorySlug) {
    this.categorySlug = categorySlug;
    
    try {
      const categories = await productService.getCategories();
      const category = categories.find(c => 
        c.slug && (c.slug.includes(categorySlug) || c.name.toLowerCase().includes(categorySlug))
      );
      
      let productos = [];
      if (category) {
        productos = await productService.getProductsByCategory(category.id);
      } else {
        const allProducts = await productService.getAllProducts(1, 100);
        productos = allProducts.results;
      }
      
      this.productos = productos.map(p => this.transformarProducto(p));
      return this.productos;
    } catch (error) {
      console.error('Error al cargar productos de la API:', error);
      return [];
    }
  }

  transformarProducto(apiProduct) {
    return {
      id: apiProduct.id,
      nombre: apiProduct.name,
      marca: apiProduct.brand ? apiProduct.brand.toLowerCase() : 'generico',
      memoria: this.extraerMemoria(apiProduct.name),
      precio: apiProduct.price,
      precioOriginal: apiProduct.originalPrice || apiProduct.price,
      descuento: apiProduct.discount || 0,
      imagen: apiProduct.image,
      rating: apiProduct.rating,
      reviews: apiProduct.reviews,
      envioGratis: true,
      caracteristicas: apiProduct.tags ? apiProduct.tags.slice(0, 4) : [],
      disponible: apiProduct.stock > 0
    };
  }

  extraerMemoria(productName) {
    const match = productName.match(/(\d+)\s*(GB|TB)/i);
    if (match) {
      const value = match[1];
      const unit = match[2].toUpperCase();
      return unit === 'TB' ? String(parseInt(value) * 1024) : value;
    }
    return '128';
  }

  async agregarAlCarrito(productoId, cantidad = 1) {
    try {
      await cartService.addItem(productoId, cantidad);
      this.mostrarNotificacion('Producto agregado al carrito', 'success');
      return true;
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      this.mostrarNotificacion('Error al agregar al carrito. Intenta nuevamente', 'error');
      return false;
    }
  }

  mostrarNotificacion(mensaje, tipo) {
    const existingNotifications = document.querySelectorAll('.api-notification');
    existingNotifications.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `api-notification api-notification-${tipo}`;
    notification.textContent = mensaje;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: ${tipo === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 100000;
      font-size: 14px;
      font-weight: 500;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

if (!document.querySelector('#notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
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
}

window.apiAdapter = new APIAdapter();

export default window.apiAdapter;
