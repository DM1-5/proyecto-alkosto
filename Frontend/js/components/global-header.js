/**
 * GLOBAL HEADER - Sistema de autenticación en header
 * Maneja login, registro, y estado de usuario en toda la aplicación
 */

import authService from '../services/auth-service.js';
import cartService from '../services/cart-service.js';

class GlobalHeader {
    constructor() {
        this.modal = null;
        this.accountBtn = null;
        this.isLoginMode = true;
        this.currentUser = null;
    }

    async inicializar() {
        console.log('🔐 Inicializando GlobalHeader...');
        
        // Obtener elementos del DOM
        this.modal = document.getElementById('account-modal');
        this.accountBtn = document.getElementById('account-btn');
        const closeBtn = document.getElementById('close-modal');

        if (!this.modal || !this.accountBtn) {
            console.warn('⚠️ Elementos del modal no encontrados');
            return;
        }

        // Verificar si hay sesión activa
        this.currentUser = await authService.obtenerPerfilUsuario();
        
        if (this.currentUser) {
            this.actualizarUIUsuarioLogueado();
        }

        // Event Listeners
        this.accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.currentUser) {
                this.mostrarMenuUsuario();
            } else {
                this.mostrarModal();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.cerrarModal());
        }

        // Cerrar modal al hacer clic fuera
        this.modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.cerrarModal();
            }
        });

        // Actualizar contador del carrito
        await this.actualizarContadorCarrito();

        console.log('✅ GlobalHeader inicializado');
    }

    mostrarModal() {
        if (this.modal) {
            this.modal.style.display = 'block';
            this.renderizarFormulario();
        }
    }

    cerrarModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
        }
    }

    renderizarFormulario() {
        const modalBody = this.modal.querySelector('.modal-body');
        
        if (this.isLoginMode) {
            modalBody.innerHTML = `
                <h2>Ingresar</h2>
                <p class="subtitle">Accede a tu cuenta de Alkosto</p>
                
                <form class="login-form" id="auth-form">
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" id="email" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="form-control" required>
                    </div>
                    
                    <div id="error-message" class="alert alert-danger" style="display: none;"></div>
                    
                    <button type="submit" class="btn-continue">Iniciar sesión</button>
                </form>

                <div class="divider">
                    <span>o</span>
                </div>

                <div class="text-center">
                    <p>¿No tienes cuenta? 
                        <a href="#" id="toggle-mode" style="color: #ff6600; font-weight: 500;">Crear cuenta</a>
                    </p>
                </div>
            `;
        } else {
            modalBody.innerHTML = `
                <h2>Crear cuenta</h2>
                <p class="subtitle">Únete a Alkosto y disfruta de beneficios exclusivos</p>
                
                <form class="login-form" id="auth-form">
                    <div class="form-group">
                        <label for="first_name">Nombre</label>
                        <input type="text" id="first_name" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="last_name">Apellido</label>
                        <input type="text" id="last_name" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" id="email" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" class="form-control" required>
                        <small class="text-muted">Mínimo 8 caracteres</small>
                    </div>

                    <div class="form-group">
                        <label for="password_confirm">Confirmar contraseña</label>
                        <input type="password" id="password_confirm" class="form-control" required>
                    </div>
                    
                    <div id="error-message" class="alert alert-danger" style="display: none;"></div>
                    
                    <button type="submit" class="btn-continue">Crear cuenta</button>
                </form>

                <div class="divider">
                    <span>o</span>
                </div>

                <div class="text-center">
                    <p>¿Ya tienes cuenta? 
                        <a href="#" id="toggle-mode" style="color: #ff6600; font-weight: 500;">Iniciar sesión</a>
                    </p>
                </div>
            `;
        }

        // Agregar event listeners
        const form = document.getElementById('auth-form');
        const toggleBtn = document.getElementById('toggle-mode');

        if (form) {
            form.addEventListener('submit', (e) => this.manejarSubmit(e));
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.isLoginMode = !this.isLoginMode;
                this.renderizarFormulario();
            });
        }
    }

    async manejarSubmit(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('error-message');

        try {
            if (this.isLoginMode) {
                // LOGIN
                console.log('🔐 Intentando login...');
                const resultado = await authService.login(email, password);
                
                if (resultado.success) {
                    console.log('✅ Login exitoso');
                    this.currentUser = resultado.user;
                    this.actualizarUIUsuarioLogueado();
                    this.cerrarModal();
                    
                    // Sincronizar carrito
                    await cartService.sincronizarCarrito();
                    await this.actualizarContadorCarrito();
                    
                    this.mostrarNotificacion('¡Bienvenido de nuevo!', 'success');
                } else {
                    this.mostrarError('Credenciales incorrectas', errorDiv);
                }
            } else {
                // REGISTRO
                const firstName = document.getElementById('first_name').value;
                const lastName = document.getElementById('last_name').value;
                const passwordConfirm = document.getElementById('password_confirm').value;

                if (password !== passwordConfirm) {
                    this.mostrarError('Las contraseñas no coinciden', errorDiv);
                    return;
                }

                if (password.length < 8) {
                    this.mostrarError('La contraseña debe tener al menos 8 caracteres', errorDiv);
                    return;
                }

                console.log('📝 Intentando registro...');
                const resultado = await authService.registrar(email, password, firstName, lastName);
                
                if (resultado.success) {
                    console.log('✅ Registro exitoso');
                    this.mostrarNotificacion('¡Cuenta creada exitosamente!', 'success');
                    
                    // Auto-login después del registro
                    await authService.login(email, password);
                    this.currentUser = await authService.obtenerPerfilUsuario();
                    this.actualizarUIUsuarioLogueado();
                    this.cerrarModal();
                    
                    await this.actualizarContadorCarrito();
                } else {
                    this.mostrarError(resultado.error || 'Error al crear cuenta', errorDiv);
                }
            }
        } catch (error) {
            console.error('❌ Error en autenticación:', error);
            this.mostrarError('Error de conexión. Verifica que el servidor esté activo.', errorDiv);
        }
    }

    mostrarError(mensaje, errorDiv) {
        if (errorDiv) {
            errorDiv.textContent = mensaje;
            errorDiv.style.display = 'block';
        }
    }

    actualizarUIUsuarioLogueado() {
        if (this.accountBtn && this.currentUser) {
            this.accountBtn.innerHTML = `
                <i class="bi bi-person-check-fill"></i> 
                Hola, ${this.currentUser.first_name || this.currentUser.email}
            `;
        }
    }

    mostrarMenuUsuario() {
        // Crear menú desplegable para usuario logueado
        const menu = document.createElement('div');
        menu.className = 'user-dropdown-menu';
        menu.style.cssText = `
            position: absolute;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            min-width: 200px;
        `;

        menu.innerHTML = `
            <div style="border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                <strong>${this.currentUser.first_name} ${this.currentUser.last_name}</strong><br>
                <small style="color: #666;">${this.currentUser.email}</small>
            </div>
            <a href="#" id="ver-pedidos" style="display: block; padding: 0.5rem 0; color: #333; text-decoration: none;">
                <i class="bi bi-box-seam"></i> Mis pedidos
            </a>
            <a href="#" id="ver-perfil" style="display: block; padding: 0.5rem 0; color: #333; text-decoration: none;">
                <i class="bi bi-person"></i> Mi perfil
            </a>
            <hr style="margin: 0.5rem 0;">
            <a href="#" id="logout-btn" style="display: block; padding: 0.5rem 0; color: #dc3545; text-decoration: none;">
                <i class="bi bi-box-arrow-right"></i> Cerrar sesión
            </a>
        `;

        // Posicionar cerca del botón
        const rect = this.accountBtn.getBoundingClientRect();
        menu.style.top = `${rect.bottom + 5}px`;
        menu.style.right = `20px`;

        document.body.appendChild(menu);

        // Cerrar al hacer clic fuera
        const cerrarMenu = (e) => {
            if (!menu.contains(e.target) && e.target !== this.accountBtn) {
                menu.remove();
                document.removeEventListener('click', cerrarMenu);
            }
        };

        setTimeout(() => {
            document.addEventListener('click', cerrarMenu);
        }, 100);

        // Event listeners del menú
        menu.querySelector('#logout-btn').addEventListener('click', async (e) => {
            e.preventDefault();
            await this.cerrarSesion();
            menu.remove();
        });
    }

    async cerrarSesion() {
        await authService.logout();
        this.currentUser = null;
        
        if (this.accountBtn) {
            this.accountBtn.innerHTML = '<i class="bi bi-person"></i> Mi cuenta';
        }
        
        await this.actualizarContadorCarrito();
        this.mostrarNotificacion('Sesión cerrada', 'info');
        
        // Recargar página si estamos en una página protegida
        if (window.location.pathname.includes('carrito') || window.location.pathname.includes('checkout')) {
            window.location.href = '/';
        }
    }

    async actualizarContadorCarrito() {
        const badge = document.getElementById('cart-badge');
        if (!badge) return;

        try {
            const items = await cartService.obtenerCarrito();
            const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
            
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.style.display = 'inline';
            } else {
                badge.style.display = 'none';
            }
        } catch (error) {
            console.error('Error al actualizar contador:', error);
            badge.style.display = 'none';
        }
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
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = mensaje;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Instancia global
const globalHeader = new GlobalHeader();

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => globalHeader.inicializar());
} else {
    globalHeader.inicializar();
}

export default globalHeader;
