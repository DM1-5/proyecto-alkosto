// Deportes Page JavaScript
class DeportesApp {
    constructor() {
        this.products = [
            // FÃºtbol
            {
                id: 'd001',
                name: 'BalÃ³n de FÃºtbol Nike Strike Team',
                brand: 'Nike',
                price: 85000,
                originalPrice: 95000,
                image: 'templates/deportes/balon-nike-strike.webp',
                category: 'futbol',
                equipment: 'equipos',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['TamaÃ±o 5', 'Cuero sintÃ©tico', 'VÃ¡lvula reforzada'],
                rating: 4.6,
                reviews: 234,
                discount: 11
            },
            {
                id: 'd002',
                name: 'Guayos Adidas Predator Edge',
                brand: 'Adidas',
                price: 320000,
                originalPrice: 380000,
                image: 'templates/deportes/guayos-adidas-predator.webp',
                category: 'futbol',
                equipment: 'calzado',
                skillLevel: 'avanzado',
                ageGroup: 'adultos',
                features: ['Suela FG/AG', 'Upper Primeknit', 'Control preciso'],
                rating: 4.8,
                reviews: 156,
                discount: 16
            },
            {
                id: 'd003',
                name: 'Camiseta SelecciÃ³n Colombia Nike',
                brand: 'Nike',
                price: 180000,
                originalPrice: 200000,
                image: 'templates/deportes/camiseta-colombia.webp',
                category: 'futbol',
                equipment: 'ropa',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['Dri-FIT', 'DiseÃ±o oficial', 'Tallas S-XXL'],
                rating: 4.7,
                reviews: 289,
                discount: 10
            },

            // Basketball
            {
                id: 'd004',
                name: 'BalÃ³n Basketball Spalding NBA Official',
                brand: 'Spalding',
                price: 150000,
                originalPrice: 170000,
                image: 'templates/deportes/balon-spalding-nba.webp',
                category: 'basketball',
                equipment: 'equipos',
                skillLevel: 'profesional',
                ageGroup: 'adultos',
                features: ['TamaÃ±o oficial', 'Cuero genuino', 'Grip mejorado'],
                rating: 4.9,
                reviews: 198,
                discount: 12
            },
            {
                id: 'd005',
                name: 'Tenis Nike Air Jordan 1 Mid',
                brand: 'Nike',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/deportes/nike-jordan-1.webp',
                category: 'basketball',
                equipment: 'calzado',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Air cushioning', 'Cuero premium', 'Soporte de tobillo'],
                rating: 4.8,
                reviews: 345,
                discount: 13
            },
            {
                id: 'd006',
                name: 'Tablero Basketball Spalding Portable',
                brand: 'Spalding',
                price: 1200000,
                originalPrice: 1400000,
                image: 'templates/deportes/tablero-spalding.webp',
                category: 'basketball',
                equipment: 'equipos',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Altura ajustable', 'Base con agua', 'Aro pro-style'],
                rating: 4.7,
                reviews: 87,
                discount: 14
            },

            // Tennis
            {
                id: 'd007',
                name: 'Raqueta Wilson Pro Staff 97',
                brand: 'Wilson',
                price: 380000,
                originalPrice: 450000,
                image: 'templates/deportes/raqueta-wilson-prostaff.webp',
                category: 'tennis',
                equipment: 'equipos',
                skillLevel: 'avanzado',
                ageGroup: 'adultos',
                features: ['315g', 'Braided graphite', 'Head size 97'],
                rating: 4.9,
                reviews: 123,
                discount: 16
            },
            {
                id: 'd008',
                name: 'Pelotas Tennis Wilson Championship',
                brand: 'Wilson',
                price: 45000,
                originalPrice: 50000,
                image: 'templates/deportes/pelotas-wilson.webp',
                category: 'tennis',
                equipment: 'equipos',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['Pack x4', 'ITF approved', 'Extra duty felt'],
                rating: 4.5,
                reviews: 267,
                discount: 10
            },
            {
                id: 'd009',
                name: 'Tenis Adidas Barricade Court',
                brand: 'Adidas',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/deportes/adidas-barricade.webp',
                category: 'tennis',
                equipment: 'calzado',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Adituff', 'Bounce cushioning', 'Clay court'],
                rating: 4.6,
                reviews: 189,
                discount: 13
            },

            // NataciÃ³n
            {
                id: 'd010',
                name: 'Gafas NataciÃ³n Speedo Vanquisher',
                brand: 'Speedo',
                price: 85000,
                originalPrice: 95000,
                image: 'templates/deportes/gafas-speedo.webp',
                category: 'natacion',
                equipment: 'accesorios',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Anti-fog', 'UV protection', 'Ajuste cÃ³modo'],
                rating: 4.7,
                reviews: 234,
                discount: 11
            },
            {
                id: 'd011',
                name: 'Traje de BaÃ±o Arena Carbon AirÂ²',
                brand: 'Arena',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/deportes/traje-arena-carbon.webp',
                category: 'natacion',
                equipment: 'ropa',
                skillLevel: 'profesional',
                ageGroup: 'adultos',
                features: ['FINA approved', 'CompresiÃ³n muscular', 'HidrodinÃ¡mica'],
                rating: 4.9,
                reviews: 67,
                discount: 13
            },
            {
                id: 'd012',
                name: 'Aletas NataciÃ³n Speedo Biofuse',
                brand: 'Speedo',
                price: 120000,
                originalPrice: 140000,
                image: 'templates/deportes/aletas-speedo.webp',
                category: 'natacion',
                equipment: 'accesorios',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['Silicona suave', 'Drain holes', 'Tallas 35-45'],
                rating: 4.6,
                reviews: 178,
                discount: 14
            },

            // Ciclismo
            {
                id: 'd013',
                name: 'Bicicleta de MontaÃ±a Trek X-Caliber 8',
                brand: 'Trek',
                price: 1800000,
                originalPrice: 2000000,
                image: 'templates/deportes/bici-trek-xcaliber.webp',
                category: 'ciclismo',
                equipment: 'equipos',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Aluminio Alpha Gold', 'SuspensiÃ³n RockShox', '29" wheels'],
                rating: 4.8,
                reviews: 89,
                discount: 10
            },
            {
                id: 'd014',
                name: 'Casco Specialized Align II',
                brand: 'Specialized',
                price: 180000,
                originalPrice: 200000,
                image: 'templates/deportes/casco-specialized.webp',
                category: 'ciclismo',
                equipment: 'accesorios',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['MIPS technology', 'Dial Fit System', 'VentilaciÃ³n'],
                rating: 4.7,
                reviews: 156,
                discount: 10
            },
            {
                id: 'd015',
                name: 'Guantes Ciclismo Pearl Izumi Elite',
                brand: 'Pearl Izumi',
                price: 95000,
                originalPrice: 110000,
                image: 'templates/deportes/guantes-pearl-izumi.webp',
                category: 'ciclismo',
                equipment: 'accesorios',
                skillLevel: 'avanzado',
                ageGroup: 'adultos',
                features: ['Gel padding', 'Transpirable', 'Grip silicona'],
                rating: 4.6,
                reviews: 234,
                discount: 14
            },

            // Fitness
            {
                id: 'd016',
                name: 'Mancuernas Ajustables Bowflex 52.5 lbs',
                brand: 'Bowflex',
                price: 850000,
                originalPrice: 980000,
                image: 'templates/deportes/mancuernas-bowflex.webp',
                category: 'fitness',
                equipment: 'maquinas',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['15 pesos en 1', '2.5-52.5 lbs', 'Cambio rÃ¡pido'],
                rating: 4.8,
                reviews: 145,
                discount: 13
            },
            {
                id: 'd017',
                name: 'Colchoneta Yoga Manduka PRO',
                brand: 'Manduka',
                price: 320000,
                originalPrice: 380000,
                image: 'templates/deportes/colchoneta-manduka.webp',
                category: 'fitness',
                equipment: 'accesorios',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['6mm grosor', 'Superior grip', 'Lifetime guarantee'],
                rating: 4.9,
                reviews: 267,
                discount: 16
            },
            {
                id: 'd018',
                name: 'Banda ElÃ¡stica TRX Suspension Trainer',
                brand: 'TRX',
                price: 450000,
                originalPrice: 520000,
                image: 'templates/deportes/trx-suspension.webp',
                category: 'fitness',
                equipment: 'equipos',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Entrenamiento completo', 'PortÃ¡til', 'GuÃ­a incluida'],
                rating: 4.7,
                reviews: 189,
                discount: 13
            },

            // Running
            {
                id: 'd019',
                name: 'Tenis Running Nike Air Zoom Pegasus 39',
                brand: 'Nike',
                price: 380000,
                originalPrice: 420000,
                image: 'templates/deportes/nike-pegasus.webp',
                category: 'running',
                equipment: 'calzado',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Air Zoom units', 'React foam', 'Engineered mesh'],
                rating: 4.8,
                reviews: 456,
                discount: 10
            },
            {
                id: 'd020',
                name: 'Reloj Garmin Forerunner 245',
                brand: 'Garmin',
                price: 850000,
                originalPrice: 950000,
                image: 'templates/deportes/garmin-forerunner.webp',
                category: 'running',
                equipment: 'accesorios',
                skillLevel: 'avanzado',
                ageGroup: 'adultos',
                features: ['GPS integrado', 'AnÃ¡lisis VO2 Max', 'BaterÃ­a 7 dÃ­as'],
                rating: 4.9,
                reviews: 234,
                discount: 11
            },
            {
                id: 'd021',
                name: 'HidrataciÃ³n Under Armour Playmaker',
                brand: 'Under Armour',
                price: 65000,
                originalPrice: 75000,
                image: 'templates/deportes/botella-under-armour.webp',
                category: 'running',
                equipment: 'accesorios',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['946ml capacidad', 'Libre de BPA', 'Tapa deportiva'],
                rating: 4.5,
                reviews: 345,
                discount: 13
            },

            // Outdoor
            {
                id: 'd022',
                name: 'Carpa Coleman Sundome 4 Personas',
                brand: 'Coleman',
                price: 420000,
                originalPrice: 480000,
                image: 'templates/deportes/carpa-coleman.webp',
                category: 'outdoor',
                equipment: 'equipos',
                skillLevel: 'principiante',
                ageGroup: 'adultos',
                features: ['WeatherTec system', 'Armado fÃ¡cil', 'VentilaciÃ³n'],
                rating: 4.6,
                reviews: 167,
                discount: 13
            },
            {
                id: 'd023',
                name: 'Mochila North Face Borealis 28L',
                brand: 'The North Face',
                price: 280000,
                originalPrice: 320000,
                image: 'templates/deportes/mochila-northface.webp',
                category: 'outdoor',
                equipment: 'accesorios',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['FlexVent suspension', 'Laptop compartment', 'Reflective bike light'],
                rating: 4.7,
                reviews: 234,
                discount: 13
            },
            {
                id: 'd024',
                name: 'Linterna Petzl Actik Core 450 Lumens',
                brand: 'Petzl',
                price: 180000,
                originalPrice: 200000,
                image: 'templates/deportes/linterna-petzl.webp',
                category: 'outdoor',
                equipment: 'accesorios',
                skillLevel: 'avanzado',
                ageGroup: 'adultos',
                features: ['BaterÃ­a recargable', '450 lumens', 'IPX4 resistente'],
                rating: 4.8,
                reviews: 123,
                discount: 10
            },
            {
                id: 'd025',
                name: 'Ropa TÃ©rmica Merino Wool Base Layer',
                brand: 'Smartwool',
                price: 220000,
                originalPrice: 250000,
                image: 'templates/deportes/ropa-termica-smartwool.webp',
                category: 'outdoor',
                equipment: 'ropa',
                skillLevel: 'intermedio',
                ageGroup: 'adultos',
                features: ['Merino wool 100%', 'Temperatura regulada', 'Anti-odor'],
                rating: 4.9,
                reviews: 98,
                discount: 12
            }
        ];

        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.activeFilters = {
            categories: [],
            brands: [],
            equipment: [],
            skillLevels: [],
            ageGroups: [],
            priceRange: [0, 2000000]
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
            priceSlider.max = 2000000;
            priceSlider.value = 2000000;
            this.updatePriceDisplay();
        }
    }

    updateFilterCounts() {
        // Categories
        const categoryCounts = {};
        this.products.forEach(product => {
            categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
        });

        // Brands
        const brandCounts = {};
        this.products.forEach(product => {
            brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1;
        });

        // Equipment
        const equipmentCounts = {};
        this.products.forEach(product => {
            equipmentCounts[product.equipment] = (equipmentCounts[product.equipment] || 0) + 1;
        });

        // Skill Levels
        const skillCounts = {};
        this.products.forEach(product => {
            skillCounts[product.skillLevel] = (skillCounts[product.skillLevel] || 0) + 1;
        });

        // Age Groups
        const ageCounts = {};
        this.products.forEach(product => {
            ageCounts[product.ageGroup] = (ageCounts[product.ageGroup] || 0) + 1;
        });

        // Update counts in DOM
        this.updateCountsInDOM('category', categoryCounts);
        this.updateCountsInDOM('brand', brandCounts);
        this.updateCountsInDOM('equipment', equipmentCounts);
        this.updateCountsInDOM('skillLevel', skillCounts);
        this.updateCountsInDOM('ageGroup', ageCounts);
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
        document.querySelectorAll('.deportes-cat-btn').forEach(btn => {
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

            // Brand filter
            if (this.activeFilters.brands.length > 0 && 
                !this.activeFilters.brands.includes(product.brand)) {
                return false;
            }

            // Equipment filter
            if (this.activeFilters.equipment.length > 0 && 
                !this.activeFilters.equipment.includes(product.equipment)) {
                return false;
            }

            // Skill Level filter
            if (this.activeFilters.skillLevels.length > 0 && 
                !this.activeFilters.skillLevels.includes(product.skillLevel)) {
                return false;
            }

            // Age Group filter
            if (this.activeFilters.ageGroups.length > 0 && 
                !this.activeFilters.ageGroups.includes(product.ageGroup)) {
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
        badges.push(`<span class="sport-badge">${this.getCategoryName(product.category)}</span>`);
        badges.push(`<span class="level-badge">${this.getSkillLevelName(product.skillLevel)}</span>`);
        badges.push(`<span class="equipment-badge">${this.getEquipmentName(product.equipment)}</span>`);
        if (product.ageGroup !== 'adultos') {
            badges.push(`<span class="age-badge">${this.getAgeGroupName(product.ageGroup)}</span>`);
        }

        const stars = 'â˜…'.repeat(Math.floor(product.rating)) + 
                     (product.rating % 1 !== 0 ? 'â˜†' : '') + 
                     'â˜†'.repeat(5 - Math.ceil(product.rating));

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
                    
                    <button class="btn btn-add-cart" onclick="deportesApp.addToCart('${product.id}')">
                        <i class="bi bi-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }

    getCategoryName(category) {
        const names = {
            'futbol': 'FÃºtbol',
            'basketball': 'Basketball',
            'tennis': 'Tennis',
            'natacion': 'NataciÃ³n',
            'ciclismo': 'Ciclismo',
            'fitness': 'Fitness',
            'outdoor': 'Outdoor',
            'running': 'Running'
        };
        return names[category] || category;
    }

    getSkillLevelName(level) {
        const names = {
            'principiante': 'Principiante',
            'intermedio': 'Intermedio',
            'avanzado': 'Avanzado',
            'profesional': 'Profesional'
        };
        return names[level] || level;
    }

    getEquipmentName(equipment) {
        const names = {
            'ropa': 'Ropa',
            'calzado': 'Calzado',
            'accesorios': 'Accesorios',
            'equipos': 'Equipos',
            'maquinas': 'MÃ¡quinas'
        };
        return names[equipment] || equipment;
    }

    getAgeGroupName(ageGroup) {
        const names = {
            'niÃ±os': 'NiÃ±os',
            'adolescentes': 'Adolescentes',
            'adultos': 'Adultos'
        };
        return names[ageGroup] || ageGroup;
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
                <a class="page-link" href="#" onclick="deportesApp.goToPage(${this.currentPage - 1})">Anterior</a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <li class="page-item ${i === this.currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="deportesApp.goToPage(${i})">${i}</a>
                    </li>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>';
            }
        }

        // Next button
        paginationHTML += `
            <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="deportesApp.goToPage(${this.currentPage + 1})">Siguiente</a>
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
                `Mostrando ${startIndex}-${endIndex} de ${total} productos deportivos` :
                'No se encontraron productos con los filtros seleccionados';
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
            brands: [],
            equipment: [],
            skillLevels: [],
            ageGroups: [],
            priceRange: [0, 2000000]
        };

        // Clear UI
        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        document.querySelectorAll('.deportes-cat-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.value = 2000000;
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
    window.deportesApp = new DeportesApp();
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
