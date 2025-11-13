/**
 * PRODUCT FILTERS - Sistema completo de filtrado y ordenamiento
 * Filtros por precio, marca, rating, categoría y ordenamiento
 */

class ProductFilters {
    constructor() {
        this.productos = [];
        this.productosFiltrados = [];
        this.filtros = {
            precioMin: 0,
            precioMax: Infinity,
            marcas: [],
            ratingMin: 0,
            categorias: [],
            ordenamiento: 'relevancia' // relevancia, precio_asc, precio_desc, nombre, rating
        };
        this.onFilterChange = null; // Callback cuando cambian filtros
    }

    /**
     * Inicializar filtros con productos
     */
    inicializar(productos, containerSelector = '#filters-container') {
        this.productos = productos || [];
        this.productosFiltrados = [...this.productos];
        
        const container = document.querySelector(containerSelector);
        if (container) {
            this.renderizarFiltros(container);
        }

        return this.productosFiltrados;
    }

    /**
     * Renderizar panel de filtros
     */
    renderizarFiltros(container) {
        const marcas = this.obtenerMarcasUnicas();
        const categorias = this.obtenerCategoriasUnicas();
        const rangoPrecios = this.obtenerRangoPrecios();

        container.innerHTML = `
            <div class="filters-panel">
                <!-- Header de filtros -->
                <div class="filters-header">
                    <h3><i class="bi bi-funnel"></i> Filtros</h3>
                    <button class="btn-clear-filters" onclick="window.productFilters.limpiarFiltros()">
                        <i class="bi bi-x-circle"></i> Limpiar
                    </button>
                </div>

                <!-- Ordenamiento -->
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-sort-down"></i> Ordenar por
                    </h4>
                    <select class="form-select" id="filter-ordenamiento" onchange="window.productFilters.aplicarOrdenamiento(this.value)">
                        <option value="relevancia">Más relevantes</option>
                        <option value="precio_asc">Menor precio</option>
                        <option value="precio_desc">Mayor precio</option>
                        <option value="nombre">Nombre A-Z</option>
                        <option value="rating">Mejor calificados</option>
                        <option value="descuento">Mayor descuento</option>
                        <option value="recientes">Más recientes</option>
                    </select>
                </div>

                <!-- Filtro de Precio -->
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-currency-dollar"></i> Precio
                    </h4>
                    <div class="price-range-inputs">
                        <div class="input-group mb-2">
                            <span class="input-group-text">$</span>
                            <input type="number" 
                                   class="form-control" 
                                   id="filter-precio-min" 
                                   placeholder="Mínimo"
                                   value="${rangoPrecios.min}"
                                   min="0">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text">$</span>
                            <input type="number" 
                                   class="form-control" 
                                   id="filter-precio-max" 
                                   placeholder="Máximo"
                                   value="${rangoPrecios.max}"
                                   min="0">
                        </div>
                        <button class="btn btn-sm btn-primary w-100" onclick="window.productFilters.aplicarFiltroPrecio()">
                            Aplicar
                        </button>
                    </div>
                    
                    <!-- Rangos rápidos -->
                    <div class="price-quick-filters mt-2">
                        <button class="btn-price-range" onclick="window.productFilters.aplicarRangoPrecio(0, 500000)">
                            Hasta $500.000
                        </button>
                        <button class="btn-price-range" onclick="window.productFilters.aplicarRangoPrecio(500000, 1000000)">
                            $500.000 - $1M
                        </button>
                        <button class="btn-price-range" onclick="window.productFilters.aplicarRangoPrecio(1000000, 2000000)">
                            $1M - $2M
                        </button>
                        <button class="btn-price-range" onclick="window.productFilters.aplicarRangoPrecio(2000000, Infinity)">
                            Más de $2M
                        </button>
                    </div>
                </div>

                <!-- Filtro de Marca -->
                ${marcas.length > 0 ? `
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-tag"></i> Marca
                    </h4>
                    <div class="filter-options">
                        ${marcas.map(marca => `
                            <div class="form-check">
                                <input class="form-check-input" 
                                       type="checkbox" 
                                       value="${marca}" 
                                       id="marca-${marca.replace(/\s+/g, '-')}"
                                       onchange="window.productFilters.toggleMarca('${marca}')">
                                <label class="form-check-label" for="marca-${marca.replace(/\s+/g, '-')}">
                                    ${marca} (${this.contarProductosPorMarca(marca)})
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- Filtro de Rating -->
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-star"></i> Calificación
                    </h4>
                    <div class="filter-options">
                        ${[5, 4, 3, 2].map(rating => `
                            <div class="form-check">
                                <input class="form-check-input" 
                                       type="radio" 
                                       name="rating" 
                                       value="${rating}" 
                                       id="rating-${rating}"
                                       onchange="window.productFilters.aplicarFiltroRating(${rating})">
                                <label class="form-check-label" for="rating-${rating}">
                                    ${this.renderizarEstrellas(rating)} y más
                                </label>
                            </div>
                        `).join('')}
                        <div class="form-check">
                            <input class="form-check-input" 
                                   type="radio" 
                                   name="rating" 
                                   value="0" 
                                   id="rating-0"
                                   checked
                                   onchange="window.productFilters.aplicarFiltroRating(0)">
                            <label class="form-check-label" for="rating-0">
                                Todas las calificaciones
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Filtro de Disponibilidad -->
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-box-seam"></i> Disponibilidad
                    </h4>
                    <div class="form-check">
                        <input class="form-check-input" 
                               type="checkbox" 
                               id="filter-stock"
                               onchange="window.productFilters.toggleFiltroStock(this.checked)">
                        <label class="form-check-label" for="filter-stock">
                            Solo con stock disponible
                        </label>
                    </div>
                </div>

                <!-- Filtro de Descuentos -->
                <div class="filter-section">
                    <h4 class="filter-title">
                        <i class="bi bi-percent"></i> Descuentos
                    </h4>
                    <div class="form-check">
                        <input class="form-check-input" 
                               type="checkbox" 
                               id="filter-descuento"
                               onchange="window.productFilters.toggleFiltroDescuento(this.checked)">
                        <label class="form-check-label" for="filter-descuento">
                            Solo productos en oferta
                        </label>
                    </div>
                </div>

                <!-- Filtros activos -->
                <div id="active-filters" class="active-filters-container"></div>
            </div>
        `;

        this.agregarEstilos();
    }

    /**
     * Aplicar todos los filtros
     */
    aplicarFiltros() {
        let resultados = [...this.productos];

        // Filtro de precio
        if (this.filtros.precioMin > 0 || this.filtros.precioMax < Infinity) {
            resultados = resultados.filter(p => {
                const precio = parseFloat(p.price) || 0;
                return precio >= this.filtros.precioMin && precio <= this.filtros.precioMax;
            });
        }

        // Filtro de marcas
        if (this.filtros.marcas.length > 0) {
            resultados = resultados.filter(p => 
                this.filtros.marcas.includes(p.brand || p.brand_name)
            );
        }

        // Filtro de rating
        if (this.filtros.ratingMin > 0) {
            resultados = resultados.filter(p => 
                parseFloat(p.rating) >= this.filtros.ratingMin
            );
        }

        // Filtro de stock
        if (this.filtros.soloConStock) {
            resultados = resultados.filter(p => p.stock > 0);
        }

        // Filtro de descuentos
        if (this.filtros.soloConDescuento) {
            resultados = resultados.filter(p => 
                p.discount_percentage > 0 || p.original_price > p.price
            );
        }

        // Aplicar ordenamiento
        resultados = this.ordenarProductos(resultados);

        this.productosFiltrados = resultados;
        this.actualizarContador();
        this.mostrarFiltrosActivos();

        // Callback
        if (this.onFilterChange) {
            this.onFilterChange(this.productosFiltrados);
        }

        return this.productosFiltrados;
    }

    /**
     * Ordenar productos según el criterio seleccionado
     */
    ordenarProductos(productos) {
        const sorted = [...productos];

        switch (this.filtros.ordenamiento) {
            case 'precio_asc':
                return sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            
            case 'precio_desc':
                return sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            
            case 'nombre':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            
            case 'rating':
                return sorted.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
            
            case 'descuento':
                return sorted.sort((a, b) => 
                    (b.discount_percentage || 0) - (a.discount_percentage || 0)
                );
            
            case 'recientes':
                return sorted.sort((a, b) => b.id - a.id);
            
            case 'relevancia':
            default:
                return sorted;
        }
    }

    /**
     * Métodos de filtrado individuales
     */
    aplicarOrdenamiento(valor) {
        this.filtros.ordenamiento = valor;
        this.aplicarFiltros();
    }

    aplicarFiltroPrecio() {
        const min = parseInt(document.getElementById('filter-precio-min').value) || 0;
        const max = parseInt(document.getElementById('filter-precio-max').value) || Infinity;
        
        this.filtros.precioMin = min;
        this.filtros.precioMax = max;
        this.aplicarFiltros();
    }

    aplicarRangoPrecio(min, max) {
        document.getElementById('filter-precio-min').value = min;
        document.getElementById('filter-precio-max').value = max === Infinity ? '' : max;
        
        this.filtros.precioMin = min;
        this.filtros.precioMax = max;
        this.aplicarFiltros();
    }

    toggleMarca(marca) {
        const index = this.filtros.marcas.indexOf(marca);
        if (index > -1) {
            this.filtros.marcas.splice(index, 1);
        } else {
            this.filtros.marcas.push(marca);
        }
        this.aplicarFiltros();
    }

    aplicarFiltroRating(rating) {
        this.filtros.ratingMin = parseFloat(rating);
        this.aplicarFiltros();
    }

    toggleFiltroStock(activo) {
        this.filtros.soloConStock = activo;
        this.aplicarFiltros();
    }

    toggleFiltroDescuento(activo) {
        this.filtros.soloConDescuento = activo;
        this.aplicarFiltros();
    }

    /**
     * Limpiar todos los filtros
     */
    limpiarFiltros() {
        this.filtros = {
            precioMin: 0,
            precioMax: Infinity,
            marcas: [],
            ratingMin: 0,
            categorias: [],
            ordenamiento: 'relevancia',
            soloConStock: false,
            soloConDescuento: false
        };

        // Limpiar UI
        document.getElementById('filter-precio-min').value = '';
        document.getElementById('filter-precio-max').value = '';
        document.getElementById('filter-ordenamiento').value = 'relevancia';
        
        document.querySelectorAll('.form-check-input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.querySelectorAll('.form-check-input[type="radio"]').forEach(radio => {
            radio.checked = radio.value === '0';
        });

        this.aplicarFiltros();
    }

    /**
     * Utilidades
     */
    obtenerMarcasUnicas() {
        const marcas = new Set();
        this.productos.forEach(p => {
            const marca = p.brand || p.brand_name;
            if (marca) marcas.add(marca);
        });
        return Array.from(marcas).sort();
    }

    obtenerCategoriasUnicas() {
        const categorias = new Set();
        this.productos.forEach(p => {
            const cat = p.category || p.category_name;
            if (cat) categorias.add(cat);
        });
        return Array.from(categorias).sort();
    }

    obtenerRangoPrecios() {
        const precios = this.productos
            .map(p => parseFloat(p.price))
            .filter(p => !isNaN(p) && p > 0);
        
        return {
            min: precios.length > 0 ? Math.floor(Math.min(...precios)) : 0,
            max: precios.length > 0 ? Math.ceil(Math.max(...precios)) : 999999999
        };
    }

    contarProductosPorMarca(marca) {
        return this.productos.filter(p => 
            (p.brand || p.brand_name) === marca
        ).length;
    }

    renderizarEstrellas(rating) {
        return '⭐'.repeat(rating);
    }

    actualizarContador() {
        const total = this.productos.length;
        const filtrados = this.productosFiltrados.length;
        
        let contadorEl = document.getElementById('filter-results-count');
        if (!contadorEl) {
            contadorEl = document.createElement('div');
            contadorEl.id = 'filter-results-count';
            contadorEl.className = 'filter-results-count';
            document.querySelector('.filters-header')?.appendChild(contadorEl);
        }

        contadorEl.innerHTML = `
            <span class="badge bg-primary">
                ${filtrados} de ${total} productos
            </span>
        `;
    }

    mostrarFiltrosActivos() {
        const container = document.getElementById('active-filters');
        if (!container) return;

        const activos = [];

        // Precio
        if (this.filtros.precioMin > 0 || this.filtros.precioMax < Infinity) {
            const min = this.filtros.precioMin.toLocaleString('es-CO');
            const max = this.filtros.precioMax === Infinity ? '∞' : this.filtros.precioMax.toLocaleString('es-CO');
            activos.push({
                texto: `Precio: $${min} - $${max}`,
                accion: () => this.aplicarRangoPrecio(0, Infinity)
            });
        }

        // Marcas
        this.filtros.marcas.forEach(marca => {
            activos.push({
                texto: `Marca: ${marca}`,
                accion: () => this.toggleMarca(marca)
            });
        });

        // Rating
        if (this.filtros.ratingMin > 0) {
            activos.push({
                texto: `Rating: ${this.filtros.ratingMin}+ ⭐`,
                accion: () => this.aplicarFiltroRating(0)
            });
        }

        if (activos.length === 0) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = `
            <div class="active-filters">
                <small class="text-muted">Filtros activos:</small>
                ${activos.map(filtro => `
                    <span class="badge bg-secondary">
                        ${filtro.texto}
                        <i class="bi bi-x" onclick="(${filtro.accion.toString()})()"></i>
                    </span>
                `).join('')}
            </div>
        `;
    }

    agregarEstilos() {
        if (document.getElementById('product-filters-styles')) return;

        const style = document.createElement('style');
        style.id = 'product-filters-styles';
        style.textContent = `
            .filters-panel {
                background: white;
                border-radius: 8px;
                padding: 1.5rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }

            .filters-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #f0f0f0;
            }

            .filters-header h3 {
                margin: 0;
                font-size: 1.25rem;
                color: #333;
            }

            .btn-clear-filters {
                background: transparent;
                border: 1px solid #dc3545;
                color: #dc3545;
                padding: 0.4rem 1rem;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }

            .btn-clear-filters:hover {
                background: #dc3545;
                color: white;
            }

            .filter-section {
                margin-bottom: 1.5rem;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid #e0e0e0;
            }

            .filter-section:last-child {
                border-bottom: none;
            }

            .filter-title {
                font-size: 1rem;
                font-weight: 600;
                color: #333;
                margin-bottom: 0.75rem;
            }

            .filter-options {
                max-height: 200px;
                overflow-y: auto;
            }

            .form-check {
                margin-bottom: 0.5rem;
            }

            .form-check-label {
                cursor: pointer;
                font-size: 0.9rem;
            }

            .btn-price-range {
                display: block;
                width: 100%;
                text-align: left;
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                background: #f8f9fa;
                border: 1px solid #e0e0e0;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s;
                font-size: 0.9rem;
            }

            .btn-price-range:hover {
                background: #e9ecef;
                border-color: #ff6600;
            }

            .active-filters {
                margin-top: 1rem;
            }

            .active-filters .badge {
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                padding: 0.5rem 0.75rem;
                cursor: pointer;
            }

            .active-filters .badge i {
                margin-left: 0.5rem;
                cursor: pointer;
            }

            .filter-results-count {
                font-size: 0.9rem;
            }

            @media (max-width: 768px) {
                .filters-panel {
                    position: fixed;
                    top: 0;
                    left: -100%;
                    width: 80%;
                    height: 100vh;
                    z-index: 9999;
                    transition: left 0.3s;
                    overflow-y: auto;
                }

                .filters-panel.active {
                    left: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Instancia global
const productFilters = new ProductFilters();
window.productFilters = productFilters;

export default productFilters;
