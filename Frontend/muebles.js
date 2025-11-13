// Muebles Page JavaScript
class MueblesApp {
    constructor() {
        this.products = [
            // Sala
            {
                id: 'm001',
                name: 'Sofá Seccional L-Shape Premium',
                brand: 'Ashley',
                price: 2850000,
                originalPrice: 3200000,
                image: 'templates/muebles/sofa-seccional-ashley.webp',
                category: 'sala',
                material: 'tela',
                style: 'moderno',
                size: 'grande',
                features: ['7 plazas', 'Chaise lounge', 'Cojines reversibles'],
                rating: 4.8,
                reviews: 156,
                discount: 11
            },
            {
                id: 'm002',
                name: 'Sillón Reclinable La-Z-Boy',
                brand: 'La-Z-Boy',
                price: 1650000,
                originalPrice: 1850000,
                image: 'templates/muebles/sillon-lazyboy.webp',
                category: 'sala',
                material: 'cuero',
                style: 'clasico',
                size: 'mediano',
                features: ['Reclinación eléctrica', 'Masaje incorporado', 'Puerto USB'],
                rating: 4.9,
                reviews: 234,
                discount: 11
            },
            {
                id: 'm003',
                name: 'Mesa de Centro Industrial',
                brand: 'West Elm',
                price: 850000,
                originalPrice: 950000,
                image: 'templates/muebles/mesa-centro-industrial.webp',
                category: 'sala',
                material: 'metal',
                style: 'industrial',
                size: 'mediano',
                features: ['Estructura de hierro', 'Tapa de vidrio', 'Almacenamiento'],
                rating: 4.6,
                reviews: 189,
                discount: 11
            },

            // Comedor
            {
                id: 'm004',
                name: 'Mesa de Comedor Extensible Roble',
                brand: 'Pottery Barn',
                price: 2200000,
                originalPrice: 2600000,
                image: 'templates/muebles/mesa-comedor-roble.webp',
                category: 'comedor',
                material: 'madera',
                style: 'rustico',
                size: 'grande',
                features: ['Extensible 6-8 personas', 'Madera de roble', 'Acabado natural'],
                rating: 4.7,
                reviews: 127,
                discount: 15
            },
            {
                id: 'm005',
                name: 'Sillas de Comedor Tapizadas x6',
                brand: 'Crate & Barrel',
                price: 1680000,
                originalPrice: 1920000,
                image: 'templates/muebles/sillas-comedor-tapizadas.webp',
                category: 'comedor',
                material: 'tela',
                style: 'contemporaneo',
                size: 'mediano',
                features: ['Set de 6 sillas', 'Tapizado premium', 'Respaldo ergonómico'],
                rating: 4.5,
                reviews: 203,
                discount: 13
            },
            {
                id: 'm006',
                name: 'Buffet Moderno con Vinoteca',
                brand: 'West Elm',
                price: 1950000,
                originalPrice: 2250000,
                image: 'templates/muebles/buffet-vinoteca.webp',
                category: 'comedor',
                material: 'madera',
                style: 'moderno',
                size: 'grande',
                features: ['Vinoteca incorporada', '4 puertas', 'Iluminación LED'],
                rating: 4.8,
                reviews: 98,
                discount: 13
            },

            // Dormitorio
            {
                id: 'm007',
                name: 'Cama King Size Acolchada',
                brand: 'Ashley',
                price: 1800000,
                originalPrice: 2100000,
                image: 'templates/muebles/cama-king-acolchada.webp',
                category: 'dormitorio',
                material: 'tela',
                style: 'moderno',
                size: 'extra-grande',
                features: ['Cabecero acolchado', 'Base con almacenamiento', 'King size'],
                rating: 4.7,
                reviews: 176,
                discount: 14
            },
            {
                id: 'm008',
                name: 'Cómoda 6 Cajones Minimalista',
                brand: 'IKEA',
                price: 650000,
                originalPrice: 750000,
                image: 'templates/muebles/comoda-minimalista.webp',
                category: 'dormitorio',
                material: 'madera',
                style: 'minimalista',
                size: 'mediano',
                features: ['6 cajones', 'Rieles suaves', 'Diseño escandinavo'],
                rating: 4.4,
                reviews: 298,
                discount: 13
            },
            {
                id: 'm009',
                name: 'Armario Walk-in Closet',
                brand: 'Pottery Barn',
                price: 3200000,
                originalPrice: 3800000,
                image: 'templates/muebles/armario-walkin.webp',
                category: 'dormitorio',
                material: 'madera',
                style: 'clasico',
                size: 'extra-grande',
                features: ['Sistema modular', 'Isla central', 'Iluminación LED'],
                rating: 4.9,
                reviews: 67,
                discount: 16
            },

            // Oficina
            {
                id: 'm010',
                name: 'Escritorio Ejecutivo L-Shape',
                brand: 'West Elm',
                price: 1450000,
                originalPrice: 1650000,
                image: 'templates/muebles/escritorio-ejecutivo.webp',
                category: 'oficina',
                material: 'madera',
                style: 'contemporaneo',
                size: 'grande',
                features: ['Forma en L', 'Cajones con llave', 'Superficie antirayas'],
                rating: 4.6,
                reviews: 145,
                discount: 12
            },
            {
                id: 'm011',
                name: 'Silla Ergonómica Ejecutiva',
                brand: 'Herman Miller',
                price: 2800000,
                originalPrice: 3200000,
                image: 'templates/muebles/silla-ergonomica.webp',
                category: 'oficina',
                material: 'tela',
                style: 'moderno',
                size: 'mediano',
                features: ['Soporte lumbar', 'Reposabrazos ajustables', 'Malla transpirable'],
                rating: 4.9,
                reviews: 189,
                discount: 13
            },
            {
                id: 'm012',
                name: 'Biblioteca Modular 5 Niveles',
                brand: 'IKEA',
                price: 850000,
                originalPrice: 980000,
                image: 'templates/muebles/biblioteca-modular.webp',
                category: 'oficina',
                material: 'madera',
                style: 'minimalista',
                size: 'grande',
                features: ['5 estantes', 'Sistema modular', 'Fácil ensamble'],
                rating: 4.5,
                reviews: 267,
                discount: 13
            },

            // Exterior
            {
                id: 'm013',
                name: 'Set de Terraza Ratán Sintético',
                brand: 'Pottery Barn',
                price: 1950000,
                originalPrice: 2300000,
                image: 'templates/muebles/set-terraza-ratan.webp',
                category: 'exterior',
                material: 'plastico',
                style: 'contemporaneo',
                size: 'grande',
                features: ['4 sillas + mesa', 'Resistente al clima', 'Cojines impermeables'],
                rating: 4.7,
                reviews: 123,
                discount: 15
            },
            {
                id: 'm014',
                name: 'Pérgola de Aluminio con Techo',
                brand: 'West Elm',
                price: 4200000,
                originalPrice: 4800000,
                image: 'templates/muebles/pergola-aluminio.webp',
                category: 'exterior',
                material: 'metal',
                style: 'moderno',
                size: 'extra-grande',
                features: ['3x4 metros', 'Techo regulable', 'Resistente UV'],
                rating: 4.8,
                reviews: 56,
                discount: 13
            },
            {
                id: 'm015',
                name: 'Hamaca Doble con Soporte',
                brand: 'Crate & Barrel',
                price: 680000,
                originalPrice: 780000,
                image: 'templates/muebles/hamaca-doble.webp',
                category: 'exterior',
                material: 'tela',
                style: 'rustico',
                size: 'grande',
                features: ['Para 2 personas', 'Soporte de acero', 'Tela resistente'],
                rating: 4.6,
                reviews: 198,
                discount: 13
            },

            // Almacenamiento
            {
                id: 'm016',
                name: 'Estantería Industrial 6 Niveles',
                brand: 'IKEA',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/muebles/estanteria-industrial.webp',
                category: 'almacenamiento',
                material: 'metal',
                style: 'industrial',
                size: 'grande',
                features: ['6 estantes', 'Estructura metálica', 'Capacidad 200kg'],
                rating: 4.5,
                reviews: 234,
                discount: 13
            },
            {
                id: 'm017',
                name: 'Baúl Organizador Tapizado',
                brand: 'Ashley',
                price: 380000,
                originalPrice: 420000,
                image: 'templates/muebles/baul-organizador.webp',
                category: 'almacenamiento',
                material: 'tela',
                style: 'clasico',
                size: 'mediano',
                features: ['Doble función', 'Tapa acolchada', 'Bisagras suaves'],
                rating: 4.4,
                reviews: 167,
                discount: 10
            },
            {
                id: 'm018',
                name: 'Closet Portátil de Tela',
                brand: 'IKEA',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/muebles/closet-portatil.webp',
                category: 'almacenamiento',
                material: 'tela',
                style: 'minimalista',
                size: 'grande',
                features: ['Fácil armado', 'Múltiples compartimentos', 'Cremallera resistente'],
                rating: 4.2,
                reviews: 298,
                discount: 13
            },

            // Decoración
            {
                id: 'm019',
                name: 'Espejo Decorativo Marco Dorado',
                brand: 'West Elm',
                price: 420000,
                originalPrice: 480000,
                image: 'templates/muebles/espejo-marco-dorado.webp',
                category: 'decoracion',
                material: 'metal',
                style: 'clasico',
                size: 'mediano',
                features: ['80cm diámetro', 'Marco dorado', 'Cristal biselado'],
                rating: 4.7,
                reviews: 145,
                discount: 13
            },
            {
                id: 'm020',
                name: 'Cuadros Abstractos Set x3',
                brand: 'Pottery Barn',
                price: 580000,
                originalPrice: 650000,
                image: 'templates/muebles/cuadros-abstractos.webp',
                category: 'decoracion',
                material: 'tela',
                style: 'moderno',
                size: 'mediano',
                features: ['Set de 3 piezas', 'Canvas premium', 'Colores vibrantes'],
                rating: 4.6,
                reviews: 189,
                discount: 11
            },
            {
                id: 'm021',
                name: 'Jarrones Decorativos Cerámica x2',
                brand: 'Crate & Barrel',
                price: 320000,
                originalPrice: 380000,
                image: 'templates/muebles/jarrones-ceramica.webp',
                category: 'decoracion',
                material: 'plastico',
                style: 'contemporaneo',
                size: 'pequeño',
                features: ['Set de 2 jarrones', 'Cerámica artesanal', 'Diferentes alturas'],
                rating: 4.5,
                reviews: 234,
                discount: 16
            },

            // Iluminación
            {
                id: 'm022',
                name: 'Lámpara de Techo Moderna LED',
                brand: 'West Elm',
                price: 680000,
                originalPrice: 780000,
                image: 'templates/muebles/lampara-techo-moderna.webp',
                category: 'iluminacion',
                material: 'metal',
                style: 'moderno',
                size: 'mediano',
                features: ['LED integrado', 'Regulable', 'Control remoto'],
                rating: 4.8,
                reviews: 123,
                discount: 13
            },
            {
                id: 'm023',
                name: 'Lámpara de Mesa Industrial',
                brand: 'Pottery Barn',
                price: 350000,
                originalPrice: 400000,
                image: 'templates/muebles/lampara-mesa-industrial.webp',
                category: 'iluminacion',
                material: 'metal',
                style: 'industrial',
                size: 'pequeño',
                features: ['Base de hierro', 'Pantalla ajustable', 'Bombillo incluido'],
                rating: 4.6,
                reviews: 167,
                discount: 13
            },
            {
                id: 'm024',
                name: 'Lámpara de Pie Trípode',
                brand: 'IKEA',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/muebles/lampara-pie-tripode.webp',
                category: 'iluminacion',
                material: 'madera',
                style: 'minimalista',
                size: 'mediano',
                features: ['Patas de madera', 'Pantalla de lino', 'Interruptor de pie'],
                rating: 4.4,
                reviews: 198,
                discount: 13
            },
            {
                id: 'm025',
                name: 'Candelabro Cristal 8 Luces',
                brand: 'Crate & Barrel',
                price: 1200000,
                originalPrice: 1400000,
                image: 'templates/muebles/candelabro-cristal.webp',
                category: 'iluminacion',
                material: 'vidrio',
                style: 'clasico',
                size: 'grande',
                features: ['8 puntos de luz', 'Cristales K9', 'Cadena ajustable'],
                rating: 4.9,
                reviews: 87,
                discount: 14
            }
        ];

        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.activeFilters = {
            categories: [],
            materials: [],
            styles: [],
            brands: [],
            sizes: [],
            priceRange: [0, 5000000]
        };

        this.initializeApp();
    }

    initializeApp() {
        this.setupFilters();
        this.setupEventListeners();
        this.renderProducts();
        this.updateResultsCount();
    }

    setupFilters() {
        // Populate filter counts
        this.updateFilterCounts();
        
        // Initialize price range
        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.min = 0;
            priceSlider.max = 5000000;
            priceSlider.value = 5000000;
            this.updatePriceDisplay();
        }
    }

    updateFilterCounts() {
        // Categories
        const categoryCounts = {};
        this.products.forEach(product => {
            categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
        });

        // Materials
        const materialCounts = {};
        this.products.forEach(product => {
            materialCounts[product.material] = (materialCounts[product.material] || 0) + 1;
        });

        // Styles
        const styleCounts = {};
        this.products.forEach(product => {
            styleCounts[product.style] = (styleCounts[product.style] || 0) + 1;
        });

        // Brands
        const brandCounts = {};
        this.products.forEach(product => {
            brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1;
        });

        // Sizes
        const sizeCounts = {};
        this.products.forEach(product => {
            sizeCounts[product.size] = (sizeCounts[product.size] || 0) + 1;
        });

        // Update counts in DOM
        this.updateCountsInDOM('category', categoryCounts);
        this.updateCountsInDOM('material', materialCounts);
        this.updateCountsInDOM('style', styleCounts);
        this.updateCountsInDOM('brand', brandCounts);
        this.updateCountsInDOM('size', sizeCounts);
    }

    updateCountsInDOM(filterType, counts) {
        Object.keys(counts).forEach(key => {
            const element = document.querySelector(`input[value="${key}"]`);
            if (element) {
                const countElement = element.parentElement.querySelector('.count');
                if (countElement) {
                    countElement.textContent = counts[key];
                }
            }
        });
    }

    setupEventListeners() {
        // Category buttons
        document.querySelectorAll('.muebles-cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCategoryFilter(btn.dataset.category);
            });
        });

        // Filter checkboxes
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleFilterChange(e.target);
            });
        });

        // Price range
        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.addEventListener('input', () => {
                this.activeFilters.priceRange[1] = parseInt(priceSlider.value);
                this.updatePriceDisplay();
                this.applyFilters();
            });
        }

        // Sort selector
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                this.sortProducts(sortSelect.value);
            });
        }

        // Clear filters
        const clearFiltersBtn = document.getElementById('clearFilters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                this.clearAllFilters();
            });
        }
    }

    toggleCategoryFilter(category) {
        const btn = document.querySelector(`[data-category="${category}"]`);
        
        if (this.activeFilters.categories.includes(category)) {
            this.activeFilters.categories = this.activeFilters.categories.filter(c => c !== category);
            btn.classList.remove('active');
        } else {
            this.activeFilters.categories.push(category);
            btn.classList.add('active');
        }
        
        this.applyFilters();
    }

    handleFilterChange(checkbox) {
        const filterType = checkbox.dataset.filter;
        const value = checkbox.value;

        if (checkbox.checked) {
            if (!this.activeFilters[filterType].includes(value)) {
                this.activeFilters[filterType].push(value);
            }
        } else {
            this.activeFilters[filterType] = this.activeFilters[filterType].filter(item => item !== value);
        }

        this.applyFilters();
    }

    applyFilters() {
        this.filteredProducts = this.products.filter(product => {
            // Category filter
            if (this.activeFilters.categories.length > 0 && 
                !this.activeFilters.categories.includes(product.category)) {
                return false;
            }

            // Material filter
            if (this.activeFilters.materials.length > 0 && 
                !this.activeFilters.materials.includes(product.material)) {
                return false;
            }

            // Style filter
            if (this.activeFilters.styles.length > 0 && 
                !this.activeFilters.styles.includes(product.style)) {
                return false;
            }

            // Brand filter
            if (this.activeFilters.brands.length > 0 && 
                !this.activeFilters.brands.includes(product.brand)) {
                return false;
            }

            // Size filter
            if (this.activeFilters.sizes.length > 0 && 
                !this.activeFilters.sizes.includes(product.size)) {
                return false;
            }

            // Price filter
            if (product.price < this.activeFilters.priceRange[0] || 
                product.price > this.activeFilters.priceRange[1]) {
                return false;
            }

            return true;
        });

        this.currentPage = 1;
        this.renderProducts();
        this.updateResultsCount();
    }

    sortProducts(sortBy) {
        switch (sortBy) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                this.filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                this.filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'brand':
                this.filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
            default:
                break;
        }

        this.renderProducts();
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        productsGrid.innerHTML = productsToShow.map(product => this.createProductCard(product)).join('');
        
        this.renderPagination();
    }

    createProductCard(product) {
        const discountBadge = product.discount ? 
            `<div class="discount-badge">-${product.discount}%</div>` : '';

        const originalPrice = product.originalPrice ? 
            `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : '';

        // Create feature badges based on product properties
        const badges = [];
        badges.push(`<span class="room-badge">${this.getCategoryName(product.category)}</span>`);
        badges.push(`<span class="material-badge">${this.getMaterialName(product.material)}</span>`);
        badges.push(`<span class="style-badge">${this.getStyleName(product.style)}</span>`);
        badges.push(`<span class="size-badge">${this.getSizeName(product.size)}</span>`);

        const stars = '★'.repeat(Math.floor(product.rating)) + 
                     (product.rating % 1 !== 0 ? '☆' : '') + 
                     '☆'.repeat(5 - Math.ceil(product.rating));

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    ${discountBadge}
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='templates/placeholder.webp'">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    
                    <div class="product-features">
                        ${badges.join('')}
                    </div>
                    
                    <div class="price-section">
                        <span class="current-price">$${product.price.toLocaleString()}</span>
                        ${originalPrice}
                    </div>
                    
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    
                    <button class="btn btn-add-cart" onclick="mueblesApp.addToCart('${product.id}')">
                        <i class="bi bi-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }

    getCategoryName(category) {
        const names = {
            'sala': 'Sala',
            'comedor': 'Comedor',
            'dormitorio': 'Dormitorio',
            'oficina': 'Oficina',
            'exterior': 'Exterior',
            'almacenamiento': 'Almacenamiento',
            'decoracion': 'Decoración',
            'iluminacion': 'Iluminación'
        };
        return names[category] || category;
    }

    getMaterialName(material) {
        const names = {
            'madera': 'Madera',
            'metal': 'Metal',
            'tela': 'Tela',
            'cuero': 'Cuero',
            'vidrio': 'Vidrio',
            'plastico': 'Plástico'
        };
        return names[material] || material;
    }

    getStyleName(style) {
        const names = {
            'moderno': 'Moderno',
            'clasico': 'Clásico',
            'minimalista': 'Minimalista',
            'industrial': 'Industrial',
            'rustico': 'Rústico',
            'contemporaneo': 'Contemporáneo'
        };
        return names[style] || style;
    }

    getSizeName(size) {
        const names = {
            'pequeño': 'Pequeño',
            'mediano': 'Mediano',
            'grande': 'Grande',
            'extra-grande': 'XL'
        };
        return names[size] || size;
    }

    renderPagination() {
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '<nav><ul class="pagination justify-content-center">';
        
        // Previous button
        paginationHTML += `
            <li class="page-item ${this.currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="mueblesApp.goToPage(${this.currentPage - 1})">Anterior</a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <li class="page-item ${i === this.currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="mueblesApp.goToPage(${i})">${i}</a>
                    </li>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>';
            }
        }

        // Next button
        paginationHTML += `
            <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="mueblesApp.goToPage(${this.currentPage + 1})">Siguiente</a>
            </li>
        `;

        paginationHTML += '</ul></nav>';
        paginationContainer.innerHTML = paginationHTML;
    }

    goToPage(page) {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        if (page < 1 || page > totalPages) return;

        this.currentPage = page;
        this.renderProducts();
        
        // Scroll to top of products
        document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
    }

    updateResultsCount() {
        const resultsInfo = document.getElementById('resultsInfo');
        if (resultsInfo) {
            const total = this.filteredProducts.length;
            const startIndex = (this.currentPage - 1) * this.productsPerPage + 1;
            const endIndex = Math.min(startIndex + this.productsPerPage - 1, total);
            
            resultsInfo.textContent = total > 0 ? 
                `Mostrando ${startIndex}-${endIndex} de ${total} muebles` :
                'No se encontraron muebles con los filtros seleccionados';
        }
    }

    updatePriceDisplay() {
        const priceSlider = document.getElementById('priceRange');
        const priceDisplay = document.getElementById('priceDisplay');
        
        if (priceSlider && priceDisplay) {
            const maxPrice = parseInt(priceSlider.value);
            priceDisplay.textContent = `$${maxPrice.toLocaleString()}`;
        }
    }

    clearAllFilters() {
        // Reset active filters
        this.activeFilters = {
            categories: [],
            materials: [],
            styles: [],
            brands: [],
            sizes: [],
            priceRange: [0, 5000000]
        };

        // Clear UI
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        document.querySelectorAll('.muebles-cat-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.value = 5000000;
            this.updatePriceDisplay();
        }

        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.value = 'featured';
        }

        // Apply filters (which will show all products)
        this.applyFilters();
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            // Add to cart logic here
            console.log('Agregado al carrito:', product.name);
            
            // Show success message
            this.showNotification(`${product.name} agregado al carrito`, 'success');
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} notification`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;
        notification.innerHTML = `
            <i class="bi bi-check-circle"></i> ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.mueblesApp = new MueblesApp();
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        animation: slideIn 0.3s ease-out;
    }
`;
document.head.appendChild(style);