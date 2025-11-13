/**
 * CART PAGE LOADER - Sistema completo de carrito de compras
 * Maneja la visualización y gestión del carrito en carrito.html
 */

import cartService from '../services/cart-service.js';
import authService from '../services/auth-service.js';

class CartPageLoader {
    constructor() {
        this.items = [];
        this.subtotal_sin_descuento = 0;
        this.total_descuentos = 0;
        this.subtotal = 0;
        this.porcentaje_ahorro = 0;
        this.envio = 0;
        this.total = 0;
        this.isLoading = false;
    }

    async inicializar() {
        console.log('🛒 Inicializando página de carrito...');
        
        try {
            this.isLoading = true;
            this.mostrarCargando();
            
            // Cargar items del carrito
            await this.cargarCarrito();
            
            // Renderizar carrito
            this.renderizarCarrito();
            
            this.isLoading = false;
            console.log('✅ Carrito cargado');
        } catch (error) {
            console.error('❌ Error al cargar carrito:', error);
            this.mostrarError();
            this.isLoading = false;
        }
    }

    async cargarCarrito() {
        try {
            // El cart-service.js ahora devuelve un objeto con totales calculados
            const carritoCompleto = await cartService.obtenerCarrito();
            
            // Si es un array, es el formato antiguo (solo items)
            if (Array.isArray(carritoCompleto)) {
                this.items = carritoCompleto;
                this.calcularTotalesManual();
            } else {
                // Formato nuevo con totales incluidos
                this.items = carritoCompleto.items || [];
                this.subtotal_sin_descuento = carritoCompleto.subtotal_sin_descuento || 0;
                this.total_descuentos = carritoCompleto.total_descuentos || 0;
                this.subtotal = carritoCompleto.subtotal || 0;
                this.porcentaje_ahorro = carritoCompleto.porcentaje_ahorro || 0;
                
                // Cálculo de envío
                this.envio = this.subtotal > 200000 ? 0 : 15000;
                this.total = this.subtotal + this.envio;
            }
            
            console.log(`📦 ${this.items.length} items en el carrito`);
            console.log(`💰 Totales: Sin desc: $${this.subtotal_sin_descuento.toLocaleString()}, Desc: $${this.total_descuentos.toLocaleString()}, Final: $${this.subtotal.toLocaleString()}`);
        } catch (error) {
            console.error('❌ Error al cargar carrito:', error);
            this.items = [];
        }
    }

    // Método de respaldo por si acaso
    calcularTotalesManual() {
        let subtotalSinDesc = 0;
        let totalDesc = 0;
        let subtotalFinal = 0;

        this.items.forEach(item => {
            const precioOriginal = parseFloat(item.original_price || item.price) || 0;
            const precioFinal = parseFloat(item.price) || 0;
            const cantidad = parseInt(item.quantity) || 0;

            subtotalSinDesc += precioOriginal * cantidad;
            subtotalFinal += precioFinal * cantidad;
            totalDesc += (precioOriginal - precioFinal) * cantidad;
        });

        this.subtotal_sin_descuento = subtotalSinDesc;
        this.total_descuentos = totalDesc;
        this.subtotal = subtotalFinal;
        this.porcentaje_ahorro = subtotalSinDesc > 0 ? (totalDesc / subtotalSinDesc) * 100 : 0;

        // Cálculo de envío
        this.envio = this.subtotal > 200000 ? 0 : 15000;
        this.total = this.subtotal + this.envio;
    }

    mostrarCargando() {
        const container = this.obtenerContenedor();
        if (!container) return;

        container.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                    <span class="visually-hidden">Cargando...</span>
                </div>
                <p class="mt-3 text-muted">Cargando tu carrito...</p>
            </div>
        `;
    }

    renderizarCarrito() {
        const container = this.obtenerContenedor();
        if (!container) {
            console.error('❌ No se encontró contenedor del carrito');
            return;
        }

        // Si el carrito está vacío
        if (this.items.length === 0) {
            this.renderizarCarritoVacio(container);
            return;
        }

        // Carrito con productos
        container.innerHTML = `
            <div class="cart-header">
                <h1 class="cart-title">Mi Carrito</h1>
                <p class="cart-count">${this.items.length} ${this.items.length === 1 ? 'producto' : 'productos'}</p>
            </div>

            <div class="row">
                <!-- Lista de productos -->
                <div class="col-lg-8">
                    <div class="cart-items-list">
                        ${this.items.map(item => this.renderizarItemCarrito(item)).join('')}
                    </div>
                </div>

                <!-- Resumen del pedido -->
                <div class="col-lg-4">
                    <div class="order-summary">
                        <h3 class="summary-title">Resumen del pedido</h3>
                        
                        ${this.total_descuentos > 0 ? `
                        <div class="summary-item">
                            <span>Subtotal sin descuento:</span>
                            <span class="text-muted">
                                <del>$${this.subtotal_sin_descuento.toLocaleString('es-CO')}</del>
                            </span>
                        </div>
                        
                        <div class="summary-item text-success">
                            <span><i class="bi bi-tag-fill"></i> Descuentos aplicados:</span>
                            <span class="fw-bold">
                                -$${this.total_descuentos.toLocaleString('es-CO')}
                            </span>
                        </div>
                        
                        ${this.porcentaje_ahorro > 0 ? `
                        <div class="alert alert-success mt-2 p-2 small d-flex align-items-center">
                            <i class="bi bi-emoji-smile-fill me-2"></i>
                            <span>¡Estás ahorrando ${this.porcentaje_ahorro.toFixed(0)}%!</span>
                        </div>
                        ` : ''}
                        ` : ''}
                        
                        <div class="summary-item">
                            <span>Subtotal:</span>
                            <span class="fw-bold">$${this.subtotal.toLocaleString('es-CO')}</span>
                        </div>
                        
                        <div class="summary-item">
                            <span>Envío:</span>
                            <span class="${this.envio === 0 ? 'text-success' : ''}">
                                ${this.envio === 0 ? 'GRATIS' : '$' + this.envio.toLocaleString('es-CO')}
                            </span>
                        </div>
                        
                        ${this.subtotal < 200000 && this.subtotal > 0 ? `
                            <div class="alert alert-info mt-2 p-2 small">
                                <i class="bi bi-info-circle"></i>
                                Te faltan $${(200000 - this.subtotal).toLocaleString('es-CO')} para envío gratis
                            </div>
                        ` : ''}
                        
                        <hr>
                        
                        <div class="summary-total">
                            <span>Total a pagar:</span>
                            <span class="total-amount">$${this.total.toLocaleString('es-CO')}</span>
                        </div>
                        
                        ${this.total_descuentos > 0 ? `
                        <div class="savings-badge">
                            <i class="bi bi-piggy-bank-fill"></i>
                            ¡Ahorras $${this.total_descuentos.toLocaleString('es-CO')}!
                        </div>
                        ` : ''}
                        
                        <button class="btn-checkout" onclick="window.cartPageLoader.procederAlPago()">
                            <i class="bi bi-credit-card"></i> Proceder al pago
                        </button>
                        
                        <button class="btn-continue-shopping" onclick="window.location.href='index.html'">
                            <i class="bi bi-arrow-left"></i> Seguir comprando
                        </button>

                        <div class="payment-methods mt-4">
                            <p class="text-muted small mb-2">Métodos de pago aceptados:</p>
                            <div class="d-flex gap-2 justify-content-center flex-wrap">
                                <i class="bi bi-credit-card-2-front" style="font-size: 1.5rem; color: #666;"></i>
                                <i class="bi bi-wallet2" style="font-size: 1.5rem; color: #666;"></i>
                                <i class="bi bi-cash-coin" style="font-size: 1.5rem; color: #666;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.agregarEstilosCarrito();
    }

    renderizarItemCarrito(item) {
        const precio = parseFloat(item.price) || 0;
        const subtotal = precio * item.quantity;

        return `
            <div class="cart-item" data-item-id="${item.product_id || item.id}">
                <div class="item-image">
                    <img src="${item.image || 'https://via.placeholder.com/100'}" 
                         alt="${item.name}"
                         onerror="this.src='https://via.placeholder.com/100?text=Sin+Imagen'">
                </div>
                
                <div class="item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <p class="item-brand text-muted">${item.brand || 'Alkosto'}</p>
                    ${item.memory ? `<p class="item-variant small text-muted">Memoria: ${item.memory}</p>` : ''}
                </div>
                
                <div class="item-quantity">
                    <button class="qty-btn" onclick="window.cartPageLoader.cambiarCantidad(${item.product_id || item.id}, -1)">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input type="number" 
                           value="${item.quantity}" 
                           min="1" 
                           max="99"
                           class="qty-input"
                           onchange="window.cartPageLoader.cambiarCantidadDirecta(${item.product_id || item.id}, this.value)">
                    <button class="qty-btn" onclick="window.cartPageLoader.cambiarCantidad(${item.product_id || item.id}, 1)">
                        <i class="bi bi-plus"></i>
                    </button>
                </div>
                
                <div class="item-price">
                    <p class="unit-price text-muted small">$${precio.toLocaleString('es-CO')} c/u</p>
                    <p class="subtotal-price">$${subtotal.toLocaleString('es-CO')}</p>
                </div>
                
                <div class="item-actions">
                    <button class="btn-remove" 
                            onclick="window.cartPageLoader.eliminarProducto(${item.product_id || item.id})"
                            title="Eliminar producto">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    renderizarCarritoVacio(container) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="bi bi-cart-x"></i>
                </div>
                <h2 class="empty-cart-message">Tu carrito está vacío</h2>
                <p class="empty-cart-suggestions">
                    ¡Descubre nuestros productos y comienza a agregar artículos a tu carrito!<br>
                    Tenemos ofertas increíbles esperándote.
                </p>
                <button class="btn-return-home" onclick="window.location.href='index.html'">
                    <i class="bi bi-house-door"></i> Volver al inicio
                </button>
            </div>
        `;
    }

    async cambiarCantidad(productoId, cambio) {
        const item = this.items.find(i => (i.product_id || i.id) === productoId);
        if (!item) return;

        const nuevaCantidad = item.quantity + cambio;
        
        if (nuevaCantidad < 1) {
            // Si la cantidad es 0, eliminar el producto
            await this.eliminarProducto(productoId);
            return;
        }

        try {
            await cartService.actualizarCantidad(productoId, nuevaCantidad);
            await this.cargarCarrito();
            this.renderizarCarrito();
            
            // Actualizar badge del header
            if (window.globalHeader) {
                await window.globalHeader.actualizarContadorCarrito();
            }
        } catch (error) {
            console.error('❌ Error al cambiar cantidad:', error);
            this.mostrarNotificacion('Error al actualizar cantidad', 'danger');
        }
    }

    async cambiarCantidadDirecta(productoId, nuevaCantidad) {
        nuevaCantidad = parseInt(nuevaCantidad);
        
        if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
            await this.cargarCarrito();
            this.renderizarCarrito();
            return;
        }

        try {
            await cartService.actualizarCantidad(productoId, nuevaCantidad);
            await this.cargarCarrito();
            this.renderizarCarrito();
            
            if (window.globalHeader) {
                await window.globalHeader.actualizarContadorCarrito();
            }
        } catch (error) {
            console.error('❌ Error al cambiar cantidad:', error);
            this.mostrarNotificacion('Error al actualizar cantidad', 'danger');
        }
    }

    async eliminarProducto(productoId) {
        if (!confirm('¿Estás seguro de eliminar este producto del carrito?')) {
            return;
        }

        try {
            await cartService.eliminarProducto(productoId);
            await this.cargarCarrito();
            this.renderizarCarrito();
            
            if (window.globalHeader) {
                await window.globalHeader.actualizarContadorCarrito();
            }
            
            this.mostrarNotificacion('Producto eliminado del carrito', 'success');
        } catch (error) {
            console.error('❌ Error al eliminar producto:', error);
            this.mostrarNotificacion('Error al eliminar producto', 'danger');
        }
    }

    async procederAlPago() {
        // Verificar si el usuario está logueado
        const user = await authService.obtenerPerfilUsuario();
        
        if (!user) {
            this.mostrarNotificacion('Debes iniciar sesión para continuar', 'warning');
            // Abrir modal de login
            if (window.globalHeader) {
                window.globalHeader.mostrarModal();
            }
            return;
        }

        // Por ahora, mostrar un mensaje (puedes crear una página de checkout después)
        this.mostrarNotificacion('Redirigiendo al checkout...', 'info');
        
        // Aquí puedes redirigir a una página de checkout
        // window.location.href = 'checkout.html';
        
        // Por ahora, mostrar resumen
        alert(`
Resumen de tu pedido:
• ${this.items.length} productos
• Subtotal: $${this.subtotal.toLocaleString('es-CO')}
• Envío: ${this.envio === 0 ? 'GRATIS' : '$' + this.envio.toLocaleString('es-CO')}
• Total: $${this.total.toLocaleString('es-CO')}

La página de checkout se implementará próximamente.
        `);
    }

    obtenerContenedor() {
        return document.querySelector('.cart-container') || 
               document.querySelector('#cart-container') ||
               document.querySelector('main') ||
               document.querySelector('.container');
    }

    mostrarError() {
        const container = this.obtenerContenedor();
        if (!container) return;

        container.innerHTML = `
            <div class="alert alert-danger text-center p-4">
                <i class="bi bi-exclamation-triangle" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Error al cargar el carrito</h4>
                <p>Verifica que el servidor backend esté activo</p>
                <button class="btn btn-primary mt-3" onclick="location.reload()">
                    <i class="bi bi-arrow-clockwise"></i> Reintentar
                </button>
            </div>
        `;
    }

    mostrarNotificacion(mensaje, tipo = 'info') {
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
        notification.innerHTML = `<strong>${mensaje}</strong>`;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    agregarEstilosCarrito() {
        if (document.getElementById('cart-page-styles')) return;

        const style = document.createElement('style');
        style.id = 'cart-page-styles';
        style.textContent = `
            .cart-item {
                display: grid;
                grid-template-columns: 100px 1fr auto auto auto;
                gap: 1.5rem;
                align-items: center;
                padding: 1.5rem;
                background: white;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                margin-bottom: 1rem;
            }

            .item-image img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 8px;
            }

            .item-details {
                flex: 1;
            }

            .item-name {
                font-size: 1rem;
                font-weight: 600;
                color: #333;
                margin: 0 0 0.5rem 0;
            }

            .item-quantity {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .qty-btn {
                width: 32px;
                height: 32px;
                border: 1px solid #ddd;
                background: white;
                border-radius: 4px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }

            .qty-btn:hover {
                background: #f5f5f5;
                border-color: #ff6600;
            }

            .qty-input {
                width: 60px;
                text-align: center;
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 0.5rem;
            }

            .item-price {
                text-align: right;
            }

            .subtotal-price {
                font-size: 1.25rem;
                font-weight: 600;
                color: #333;
                margin: 0;
            }

            .btn-remove {
                background: transparent;
                border: none;
                color: #dc3545;
                font-size: 1.25rem;
                cursor: pointer;
                padding: 0.5rem;
                transition: all 0.2s;
            }

            .btn-remove:hover {
                color: #bd2130;
                transform: scale(1.1);
            }

            .order-summary {
                background: white;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 1.5rem;
                position: sticky;
                top: 20px;
            }

            .summary-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .summary-item {
                display: flex;
                justify-content: space-between;
                padding: 0.75rem 0;
                border-bottom: 1px solid #f0f0f0;
            }

            .summary-total {
                display: flex;
                justify-content: space-between;
                padding: 1rem 0;
                font-size: 1.25rem;
                font-weight: 600;
            }

            .total-amount {
                color: #ff6600;
            }

            .btn-checkout {
                width: 100%;
                background: #ff6600;
                color: white;
                border: none;
                padding: 1rem;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                margin-bottom: 0.5rem;
            }

            .btn-checkout:hover {
                background: #e55a00;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(255, 102, 0, 0.3);
            }

            .btn-continue-shopping {
                width: 100%;
                background: transparent;
                color: #ff6600;
                border: 2px solid #ff6600;
                padding: 0.75rem;
                border-radius: 8px;
                font-size: 0.95rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;
            }

            .btn-continue-shopping:hover {
                background: #ff6600;
                color: white;
            }

            @media (max-width: 768px) {
                .cart-item {
                    grid-template-columns: 80px 1fr;
                    gap: 1rem;
                }

                .item-quantity, .item-actions {
                    grid-column: span 2;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Crear instancia global
const cartPageLoader = new CartPageLoader();
window.cartPageLoader = cartPageLoader;

export default cartPageLoader;
