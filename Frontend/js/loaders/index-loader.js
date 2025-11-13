/**
 * INDEX LOADER - Carga productos destacados en la página principal
 * Integra la página index.html con la API del backend
 */

import productService from '../services/product-service.js';
import cartService from '../services/cart-service.js';

class IndexLoader {
    constructor() {
        this.productosDestacados = [];
        this.productosRecientes = [];
    }

    async inicializar() {
        console.log('🏠 Inicializando página principal...');
        
        try {
            // Cargar productos destacados
            await this.cargarProductosDestacados();
            
            // Cargar productos recientes (últimos agregados)
            await this.cargarProductosRecientes();
            
            console.log('✅ Página principal cargada');
        } catch (error) {
            console.error('❌ Error al cargar página principal:', error);
            this.mostrarError();
        }
    }

    async cargarProductosDestacados() {
        try {
            console.log('⭐ Cargando productos destacados...');
            
            // Obtener productos destacados desde la API
            const response = await productService.obtenerProductosDestacados();
            
            if (response && response.length > 0) {
                this.productosDestacados = response;
                console.log(`✅ ${response.length} productos destacados cargados`);
                
                // Renderizar en la sección de destacados
                this.renderizarProductosDestacados();
            } else {
                console.warn('⚠️ No hay productos destacados disponibles');
                // Cargar todos los productos como alternativa
                await this.cargarTodosLosProductos();
            }
        } catch (error) {
            console.error('❌ Error al cargar productos destacados:', error);
            await this.cargarTodosLosProductos();
        }
    }

    async cargarTodosLosProductos() {
        try {
            console.log('📦 Cargando todos los productos...');
            const response = await productService.obtenerProductos();
            
            if (response && response.results && response.results.length > 0) {
                this.productosDestacados = response.results.slice(0, 12);
                console.log(`✅ ${this.productosDestacados.length} productos cargados`);
                this.renderizarProductosDestacados();
            }
        } catch (error) {
            console.error('❌ Error al cargar productos:', error);
        }
    }

    async cargarProductosRecientes() {
        try {
            // Los productos más recientes son los últimos del array
            const response = await productService.obtenerProductos();
            
            if (response && response.results) {
                this.productosRecientes = response.results.slice(-8).reverse();
                this.renderizarProductosRecientes();
            }
        } catch (error) {
            console.error('❌ Error al cargar productos recientes:', error);
        }
    }

    renderizarProductosDestacados() {
        // Buscar contenedor de productos destacados
        const contenedor = document.querySelector('#productos-destacados') || 
                          document.querySelector('.products-grid') ||
                          this.crearContenedorDestacados();

        if (!contenedor) {
            console.warn('⚠️ No se encontró contenedor para productos destacados');
            return;
        }

        // Limpiar contenido existente
        contenedor.innerHTML = '';

        // Renderizar cada producto
        this.productosDestacados.forEach(producto => {
            const card = this.crearTarjetaProducto(producto);
            contenedor.appendChild(card);
        });

        console.log(`✅ ${this.productosDestacados.length} productos destacados renderizados`);
    }

    renderizarProductosRecientes() {
        const contenedor = document.querySelector('#productos-recientes');
        
        if (!contenedor) return;

        contenedor.innerHTML = '';

        this.productosRecientes.forEach(producto => {
            const card = this.crearTarjetaProducto(producto);
            contenedor.appendChild(card);
        });
    }

    crearContenedorDestacados() {
        // Buscar un lugar apropiado para insertar productos
        const mainContent = document.querySelector('.main-wrapper') || 
                           document.querySelector('main') ||
                           document.querySelector('.container');

        if (!mainContent) return null;

        const seccion = document.createElement('section');
        seccion.id = 'productos-destacados-section';
        seccion.innerHTML = `
            <div class="container my-5">
                <h2 class="text-center mb-4" style="color: #333; font-weight: 600;">
                    ⭐ Productos Destacados
                </h2>
                <div id="productos-destacados" class="products-grid"></div>
            </div>
        `;

        // Insertar después del slider o al final
        const slider = document.querySelector('.slider-section');
        if (slider && slider.parentNode) {
            slider.parentNode.insertBefore(seccion, slider.nextSibling);
        } else {
            mainContent.appendChild(seccion);
        }

        // Agregar estilos para la grilla
        this.agregarEstilosGrid();

        return seccion.querySelector('#productos-destacados');
    }

    agregarEstilosGrid() {
        if (document.getElementById('index-loader-styles')) return;

        const style = document.createElement('style');
        style.id = 'index-loader-styles';
        style.textContent = `
            .products-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
                padding: 1rem 0;
            }

            @media (max-width: 768px) {
                .products-grid {
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    crearTarjetaProducto(producto) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.rating = producto.rating || 0;
        card.dataset.reviews = producto.reviews_count || 0;

        const descuento = producto.discount_percentage || 0;
        const precioOriginal = producto.original_price || producto.price;
        const precioFinal = producto.price;

        card.innerHTML = `
            ${descuento > 0 ? `<div class="discount-badge">-${descuento}%</div>` : ''}
            
            <img src="${producto.image || 'https://via.placeholder.com/250'}" 
                 alt="${producto.name}" 
                 class="product-image"
                 onerror="this.src='https://via.placeholder.com/250?text=Sin+Imagen'">
            
            <div class="product-info">
                <p class="product-category">${producto.category || 'General'}</p>
                <h3 class="product-title">${producto.name}</h3>
                
                <div class="rating-container">
                    <span class="rating-value">${producto.rating || 0}</span>
                    <div class="stars" aria-label="Calificación ${producto.rating} de 5"></div>
                    <span class="reviews">(${producto.reviews_count || 0})</span>
                </div>
                
                <div class="price-container">
                    ${descuento > 0 ? `
                        <span class="price-original">$${parseInt(precioOriginal).toLocaleString('es-CO')}</span>
                    ` : ''}
                    <span class="price-final">$${parseInt(precioFinal).toLocaleString('es-CO')}</span>
                </div>
                
                ${producto.tags && producto.tags.length > 0 ? `
                    <div class="product-tags">
                        ${producto.tags.slice(0, 3).map(tag => 
                            `<span class="tag">${tag}</span>`
                        ).join('')}
                    </div>
                ` : ''}
                
                <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">
                    <i class="bi bi-cart-plus"></i> Agregar al carrito
                </button>
            </div>
        `;

        // Renderizar estrellas
        this.renderizarEstrellas(card);

        return card;
    }

    renderizarEstrellas(card) {
        const rating = parseFloat(card.dataset.rating) || 0;
        const starsContainer = card.querySelector('.stars');
        
        if (!starsContainer) return;

        const full = Math.floor(rating);
        const fraction = rating - full;
        const half = fraction >= 0.25 && fraction < 0.75;
        const extraFull = fraction >= 0.75 ? 1 : 0;
        const totalFull = full + extraFull;
        const empty = 5 - totalFull - (half ? 1 : 0);

        let html = '';
        for (let i = 0; i < totalFull; i++) html += '<i class="bi bi-star-fill"></i>';
        if (half) html += '<i class="bi bi-star-half"></i>';
        for (let i = 0; i < empty; i++) html += '<i class="bi bi-star"></i>';

        starsContainer.innerHTML = html;
    }

    mostrarError() {
        const contenedor = document.querySelector('#productos-destacados') || 
                          this.crearContenedorDestacados();

        if (contenedor) {
            contenedor.innerHTML = `
                <div class="alert alert-warning text-center p-4">
                    <i class="bi bi-exclamation-triangle" style="font-size: 3rem;"></i>
                    <h4 class="mt-3">No se pudieron cargar los productos</h4>
                    <p>Verifica que el servidor backend esté activo en http://127.0.0.1:8000</p>
                    <button class="btn btn-primary mt-3" onclick="location.reload()">
                        <i class="bi bi-arrow-clockwise"></i> Reintentar
                    </button>
                </div>
            `;
        }
    }
}

// Función global para agregar al carrito (llamada desde los botones)
window.agregarAlCarritoAPI = async function(productoId) {
    try {
        console.log(`🛒 Agregando producto ${productoId} al carrito...`);
        
        const resultado = await cartService.agregarProducto(productoId, 1);
        
        if (resultado.success) {
            // Actualizar contador del carrito
            if (window.globalHeader) {
                await window.globalHeader.actualizarContadorCarrito();
            }
            
            mostrarNotificacion('✅ Producto agregado al carrito', 'success');
        } else {
            mostrarNotificacion('❌ Error al agregar producto', 'danger');
        }
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
        mostrarNotificacion('❌ Error de conexión', 'danger');
    }
};

// Función auxiliar para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${tipo}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <strong>${mensaje}</strong>
        <button type="button" class="btn-close" onclick="this.parentElement.remove()" 
                style="float: right; margin-left: 1rem;"></button>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Crear instancia y exportar
const indexLoader = new IndexLoader();

export default indexLoader;
