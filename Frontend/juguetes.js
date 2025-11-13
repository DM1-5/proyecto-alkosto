// Juguetes Page JavaScript
class JuguetesApp {
    constructor() {
        this.products = [
            // Juguetes Educativos 0-2 años
            {
                id: 'j001',
                name: 'Torre de Anillos de Colores',
                brand: 'Fisher Price',
                price: 85000,
                originalPrice: 95000,
                image: 'templates/juguetes/torre-anillos.webp',
                category: 'educativos',
                age: '0-2',
                gender: 'unisex',
                gameType: 'aprendizaje',
                skills: ['motricidad', 'cognitivas'],
                features: ['Texturas variadas', 'Colores brillantes', 'Sonidos suaves'],
                rating: 4.8,
                reviews: 156,
                discount: 11
            },
            {
                id: 'j002',
                name: 'Cubo Didáctico Formas y Colores',
                brand: 'VTech',
                price: 120000,
                originalPrice: 135000,
                image: 'templates/juguetes/cubo-didactico.webp',
                category: 'educativos',
                age: '3-5',
                gender: 'unisex',
                gameType: 'aprendizaje',
                skills: ['motricidad', 'cognitivas', 'lenguaje'],
                features: ['Sonidos', 'Luces', 'Formas encajables'],
                rating: 4.7,
                reviews: 203,
                discount: 11
            },
            {
                id: 'j003',
                name: 'Mesa de Actividades Musical',
                brand: 'Little Tikes',
                price: 320000,
                originalPrice: 380000,
                image: 'templates/juguetes/mesa-musical.webp',
                category: 'educativos',
                age: '6-8',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['motricidad', 'creatividad', 'sociales'],
                features: ['Piano', 'Tambores', 'Luces LED'],
                rating: 4.9,
                reviews: 89,
                discount: 16
            },

            // Construcción
            {
                id: 'j004',
                name: 'LEGO Classic Set Creativo Grande',
                brand: 'LEGO',
                price: 250000,
                originalPrice: 280000,
                image: 'templates/juguetes/lego-classic.webp',
                category: 'construccion',
                age: '6-8',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['motricidad', 'cognitivas', 'creatividad'],
                features: ['790 piezas', 'Guía de construcción', 'Caja organizadora'],
                rating: 4.9,
                reviews: 342,
                discount: 11
            },
            {
                id: 'j005',
                name: 'Mega Bloks First Builders',
                brand: 'Mega Bloks',
                price: 180000,
                originalPrice: 200000,
                image: 'templates/juguetes/mega-bloks.webp',
                category: 'construccion',
                age: '3-5',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['motricidad', 'cognitivas'],
                features: ['Bloques grandes', 'Colores brillantes', '60 piezas'],
                rating: 4.6,
                reviews: 167,
                discount: 10
            },
            {
                id: 'j006',
                name: 'LEGO Technic Grúa Todo Terreno',
                brand: 'LEGO',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/juguetes/lego-technic-grua.webp',
                category: 'construccion',
                age: '9-12',
                gender: 'unisex',
                gameType: 'estrategia',
                skills: ['cognitivas', 'motricidad'],
                features: ['1292 piezas', 'Motor Power Functions', 'Control remoto'],
                rating: 4.8,
                reviews: 98,
                discount: 13
            },

            // Muñecas
            {
                id: 'j007',
                name: 'Barbie Dreamhouse Aventuras',
                brand: 'Barbie',
                price: 380000,
                originalPrice: 450000,
                image: 'templates/juguetes/barbie-dreamhouse.webp',
                category: 'muñecas',
                age: '6-8',
                gender: 'niñas',
                gameType: 'rol',
                skills: ['sociales', 'creatividad', 'lenguaje'],
                features: ['3 pisos', '8 habitaciones', '70+ accesorios'],
                rating: 4.7,
                reviews: 234,
                discount: 16
            },
            {
                id: 'j008',
                name: 'Baby Alive Dulces Lágrimas',
                brand: 'Baby Alive',
                price: 220000,
                originalPrice: 250000,
                image: 'templates/juguetes/baby-alive.webp',
                category: 'muñecas',
                age: '3-5',
                gender: 'niñas',
                gameType: 'rol',
                skills: ['sociales', 'creatividad'],
                features: ['Llora lágrimas reales', 'Sonidos', 'Accesorios incluidos'],
                rating: 4.5,
                reviews: 176,
                discount: 12
            },
            {
                id: 'j009',
                name: 'Enchantimals Casa del Árbol',
                brand: 'Enchantimals',
                price: 180000,
                originalPrice: 210000,
                image: 'templates/juguetes/enchantimals-casa.webp',
                category: 'muñecas',
                age: '6-8',
                gender: 'niñas',
                gameType: 'rol',
                skills: ['sociales', 'creatividad'],
                features: ['Muñeca incluida', 'Mascota', 'Accesorios'],
                rating: 4.6,
                reviews: 143,
                discount: 14
            },

            // Vehículos
            {
                id: 'j010',
                name: 'Hot Wheels Pista Looping Extremo',
                brand: 'Hot Wheels',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/juguetes/hot-wheels-looping.webp',
                category: 'vehiculos',
                age: '6-8',
                gender: 'niños',
                gameType: 'accion',
                skills: ['motricidad', 'cognitivas'],
                features: ['Pista de 2 metros', '2 autos incluidos', 'Looping gigante'],
                rating: 4.8,
                reviews: 298,
                discount: 13
            },
            {
                id: 'j011',
                name: 'Tonka Steel Classics Camión Volqueta',
                brand: 'Tonka',
                price: 150000,
                originalPrice: 170000,
                image: 'templates/juguetes/tonka-volqueta.webp',
                category: 'vehiculos',
                age: '3-5',
                gender: 'niños',
                gameType: 'rol',
                skills: ['motricidad', 'creatividad'],
                features: ['Acero resistente', 'Volqueta funcional', 'Ruedas de goma'],
                rating: 4.7,
                reviews: 187,
                discount: 12
            },
            {
                id: 'j012',
                name: 'Paw Patrol Torre de Control',
                brand: 'Paw Patrol',
                price: 320000,
                originalPrice: 380000,
                image: 'templates/juguetes/paw-patrol-torre.webp',
                category: 'vehiculos',
                age: '3-5',
                gender: 'unisex',
                gameType: 'rol',
                skills: ['sociales', 'creatividad'],
                features: ['Torre de 60cm', '6 figuras', 'Sonidos y luces'],
                rating: 4.9,
                reviews: 156,
                discount: 16
            },

            // Peluches
            {
                id: 'j013',
                name: 'Teddy Bear Gigante Abrazo Suave',
                brand: 'Melissa & Doug',
                price: 180000,
                originalPrice: 200000,
                image: 'templates/juguetes/teddy-gigante.webp',
                category: 'peluches',
                age: '0-2',
                gender: 'unisex',
                gameType: 'aprendizaje',
                skills: ['sociales', 'creatividad'],
                features: ['90cm de altura', 'Súper suave', 'Hipoalergénico'],
                rating: 4.8,
                reviews: 234,
                discount: 10
            },
            {
                id: 'j014',
                name: 'Unicornio Mágico Interactivo',
                brand: 'FurReal Friends',
                price: 250000,
                originalPrice: 290000,
                image: 'templates/juguetes/unicornio-magico.webp',
                category: 'peluches',
                age: '6-8',
                gender: 'niñas',
                gameType: 'rol',
                skills: ['sociales', 'creatividad'],
                features: ['Sonidos mágicos', 'Cuerno que brilla', 'Responde al tacto'],
                rating: 4.7,
                reviews: 189,
                discount: 14
            },
            {
                id: 'j015',
                name: 'Pokemón Pikachu Parlante',
                brand: 'Pokemon',
                price: 120000,
                originalPrice: 140000,
                image: 'templates/juguetes/pikachu-parlante.webp',
                category: 'peluches',
                age: '6-8',
                gender: 'unisex',
                gameType: 'rol',
                skills: ['sociales', 'lenguaje'],
                features: ['20 frases', 'Orejas que se mueven', 'Mejillas que brillan'],
                rating: 4.6,
                reviews: 267,
                discount: 14
            },

            // Juegos de Mesa
            {
                id: 'j016',
                name: 'Monopoly Junior Edición Especial',
                brand: 'Hasbro',
                price: 95000,
                originalPrice: 110000,
                image: 'templates/juguetes/monopoly-junior.webp',
                category: 'juegos-mesa',
                age: '6-8',
                gender: 'unisex',
                gameType: 'estrategia',
                skills: ['cognitivas', 'sociales'],
                features: ['Reglas simplificadas', 'Dinero de juguete', '2-4 jugadores'],
                rating: 4.5,
                reviews: 143,
                discount: 14
            },
            {
                id: 'j017',
                name: 'Jenga Classic Torre de Bloques',
                brand: 'Hasbro',
                price: 65000,
                originalPrice: 75000,
                image: 'templates/juguetes/jenga-classic.webp',
                category: 'juegos-mesa',
                age: '9-12',
                gender: 'unisex',
                gameType: 'estrategia',
                skills: ['motricidad', 'cognitivas'],
                features: ['54 bloques de madera', 'Juego clásico', 'Fácil de transportar'],
                rating: 4.7,
                reviews: 289,
                discount: 13
            },
            {
                id: 'j018',
                name: 'UNO Cards Juego de Cartas',
                brand: 'Mattel',
                price: 35000,
                originalPrice: 40000,
                image: 'templates/juguetes/uno-cards.webp',
                category: 'juegos-mesa',
                age: '6-8',
                gender: 'unisex',
                gameType: 'estrategia',
                skills: ['cognitivas', 'sociales'],
                features: ['108 cartas', 'Reglas incluidas', '2-10 jugadores'],
                rating: 4.8,
                reviews: 456,
                discount: 13
            },

            // Aire Libre
            {
                id: 'j019',
                name: 'Nerf Elite 2.0 Commander Blaster',
                brand: 'Nerf',
                price: 180000,
                originalPrice: 210000,
                image: 'templates/juguetes/nerf-commander.webp',
                category: 'aire-libre',
                age: '9-12',
                gender: 'unisex',
                gameType: 'accion',
                skills: ['motricidad', 'fisico'],
                features: ['Alcance 27 metros', '12 dardos incluidos', 'Mira táctica'],
                rating: 4.9,
                reviews: 234,
                discount: 14
            },
            {
                id: 'j020',
                name: 'Trampolin Infantil con Red',
                brand: 'Little Tikes',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/juguetes/trampolin-infantil.webp',
                category: 'aire-libre',
                age: '6-8',
                gender: 'unisex',
                gameType: 'fisico',
                skills: ['fisico', 'motricidad'],
                features: ['1.5m diámetro', 'Red de seguridad', 'Agarraderas'],
                rating: 4.6,
                reviews: 98,
                discount: 13
            },
            {
                id: 'j021',
                name: 'Bicicleta Balance Sin Pedales',
                brand: 'Strider',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/juguetes/bicicleta-balance.webp',
                category: 'aire-libre',
                age: '3-5',
                gender: 'unisex',
                gameType: 'fisico',
                skills: ['fisico', 'motricidad'],
                features: ['Asiento ajustable', 'Neumáticos de goma', 'Marco ligero'],
                rating: 4.8,
                reviews: 167,
                discount: 13
            },

            // Juguetes Creativos Adicionales
            {
                id: 'j022',
                name: 'Play-Doh Kitchen Creations',
                brand: 'Play-Doh',
                price: 120000,
                originalPrice: 140000,
                image: 'templates/juguetes/playdoh-kitchen.webp',
                category: 'educativos',
                age: '3-5',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['creatividad', 'motricidad'],
                features: ['8 colores de plastilina', 'Herramientas incluidas', 'Moldes variados'],
                rating: 4.5,
                reviews: 198,
                discount: 14
            },
            {
                id: 'j023',
                name: 'Crayola Light-up Tracing Pad',
                brand: 'Crayola',
                price: 85000,
                originalPrice: 95000,
                image: 'templates/juguetes/crayola-tracing.webp',
                category: 'educativos',
                age: '6-8',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['creatividad', 'motricidad', 'cognitivas'],
                features: ['Mesa de luz LED', 'Plantillas incluidas', 'Papel de calcar'],
                rating: 4.7,
                reviews: 156,
                discount: 11
            },
            {
                id: 'j024',
                name: 'Kinetic Sand Castillo Mágico',
                brand: 'Kinetic Sand',
                price: 95000,
                originalPrice: 110000,
                image: 'templates/juguetes/kinetic-sand.webp',
                category: 'educativos',
                age: '3-5',
                gender: 'unisex',
                gameType: 'creativo',
                skills: ['creatividad', 'motricidad'],
                features: ['Arena cinética', 'Moldes de castillo', 'No se seca'],
                rating: 4.6,
                reviews: 223,
                discount: 14
            },
            {
                id: 'j025',
                name: 'LEGO Friends Casa de Emma',
                brand: 'LEGO',
                price: 380000,
                originalPrice: 430000,
                image: 'templates/juguetes/lego-friends-casa.webp',
                category: 'construccion',
                age: '9-12',
                gender: 'niñas',
                gameType: 'creativo',
                skills: ['cognitivas', 'creatividad', 'sociales'],
                features: ['706 piezas', '2 minifiguras', 'Mobiliario detallado'],
                rating: 4.8,
                reviews: 134,
                discount: 12
            }
        ];

        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.activeFilters = {
            categories: [],
            ages: [],
            brands: [],
            genders: [],
            gameTypes: [],
            skills: [],
            priceRange: [0, 600000]
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
            priceSlider.max = 600000;
            priceSlider.value = 600000;
            this.updatePriceDisplay();
        }
    }

    updateFilterCounts() {
        // Categories
        const categoryCounts = {};
        this.products.forEach(product => {
            categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
        });

        // Ages
        const ageCounts = {};
        this.products.forEach(product => {
            ageCounts[product.age] = (ageCounts[product.age] || 0) + 1;
        });

        // Brands
        const brandCounts = {};
        this.products.forEach(product => {
            brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1;
        });

        // Genders
        const genderCounts = {};
        this.products.forEach(product => {
            genderCounts[product.gender] = (genderCounts[product.gender] || 0) + 1;
        });

        // Game Types
        const gameTypeCounts = {};
        this.products.forEach(product => {
            gameTypeCounts[product.gameType] = (gameTypeCounts[product.gameType] || 0) + 1;
        });

        // Skills
        const skillCounts = {};
        this.products.forEach(product => {
            product.skills.forEach(skill => {
                skillCounts[skill] = (skillCounts[skill] || 0) + 1;
            });
        });

        // Update counts in DOM
        this.updateCountsInDOM('category', categoryCounts);
        this.updateCountsInDOM('age', ageCounts);
        this.updateCountsInDOM('brand', brandCounts);
        this.updateCountsInDOM('gender', genderCounts);
        this.updateCountsInDOM('gameType', gameTypeCounts);
        this.updateCountsInDOM('skill', skillCounts);
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
        document.querySelectorAll('.juguetes-cat-btn').forEach(btn => {
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

            // Age filter
            if (this.activeFilters.ages.length > 0 && 
                !this.activeFilters.ages.includes(product.age)) {
                return false;
            }

            // Brand filter
            if (this.activeFilters.brands.length > 0 && 
                !this.activeFilters.brands.includes(product.brand)) {
                return false;
            }

            // Gender filter
            if (this.activeFilters.genders.length > 0 && 
                !this.activeFilters.genders.includes(product.gender)) {
                return false;
            }

            // Game Type filter
            if (this.activeFilters.gameTypes.length > 0 && 
                !this.activeFilters.gameTypes.includes(product.gameType)) {
                return false;
            }

            // Skills filter
            if (this.activeFilters.skills.length > 0 && 
                !this.activeFilters.skills.some(skill => product.skills.includes(skill))) {
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
        badges.push(`<span class="age-badge">${product.age} años</span>`);
        badges.push(`<span class="category-badge">${this.getCategoryName(product.category)}</span>`);
        badges.push(`<span class="skill-badge">${product.skills[0]}</span>`);
        if (product.gender !== 'unisex') {
            badges.push(`<span class="gender-badge">${product.gender}</span>`);
        }

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
                    
                    <button class="btn btn-add-cart" onclick="juguetesApp.addToCart('${product.id}')">
                        <i class="bi bi-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }

    getCategoryName(category) {
        const names = {
            'educativos': 'Educativo',
            'construccion': 'Construcción',
            'muñecas': 'Muñecas',
            'vehiculos': 'Vehículos',
            'peluches': 'Peluches',
            'juegos-mesa': 'Mesa',
            'aire-libre': 'Exterior'
        };
        return names[category] || category;
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
                <a class="page-link" href="#" onclick="juguetesApp.goToPage(${this.currentPage - 1})">Anterior</a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <li class="page-item ${i === this.currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="juguetesApp.goToPage(${i})">${i}</a>
                    </li>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>';
            }
        }

        // Next button
        paginationHTML += `
            <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="juguetesApp.goToPage(${this.currentPage + 1})">Siguiente</a>
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
                `Mostrando ${startIndex}-${endIndex} de ${total} juguetes` :
                'No se encontraron juguetes con los filtros seleccionados';
        }
    }

    updatePriceDisplay() {
        const priceSlider = document.getElementById('priceRange');
        const priceDisplay = document.getElementById('priceDisplay');
        
        if (priceSlider && priceDisplay) {
            const maxPrice = parseInt(priceSlider.value);
            priceDisplay.textContent = `$0 - $${maxPrice.toLocaleString()}`;
        }
    }

    clearAllFilters() {
        // Reset active filters
        this.activeFilters = {
            categories: [],
            ages: [],
            brands: [],
            genders: [],
            gameTypes: [],
            skills: [],
            priceRange: [0, 600000]
        };

        // Clear UI
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        document.querySelectorAll('.juguetes-cat-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.value = 600000;
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
    window.juguetesApp = new JuguetesApp();
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