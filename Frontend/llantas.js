// Llantas JavaScript - Automotive Tire Category
document.addEventListener('DOMContentLoaded', function() {
    // Product data for tires and automotive products
    const llantasProducts = [
        // Auto Tires
        { id: 'l001', name: 'Llanta Bridgestone Turanza T005 195/65 R15', brand: 'Bridgestone', price: 245000, originalPrice: 325000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 156, category: 'automovil', vehiculo: 'automovil', medida: 'R15', temporada: 'cuatro-estaciones', features: ['bajo-ruido', 'eco-friendly', 'larga-duracion'], discount: 25 },
        { id: 'l002', name: 'Llanta Michelin Primacy 4 205/55 R16', brand: 'Michelin', price: 289000, originalPrice: 389000, image: 'templates/c-llantas.webp', rating: 4.9, reviews: 203, category: 'automovil', vehiculo: 'automovil', medida: 'R16', temporada: 'verano', features: ['alta-velocidad', 'bajo-ruido', 'larga-duracion'], discount: 26 },
        { id: 'l003', name: 'Llanta Goodyear EfficientGrip 185/60 R14', brand: 'Goodyear', price: 189000, originalPrice: 249000, image: 'templates/c-llantas.webp', rating: 4.6, reviews: 134, category: 'automovil', vehiculo: 'automovil', medida: 'R14', temporada: 'cuatro-estaciones', features: ['eco-friendly', 'bajo-ruido'], discount: 24 },
        { id: 'l004', name: 'Llanta Continental PremiumContact 6 225/50 R17', brand: 'Continental', price: 359000, originalPrice: 459000, image: 'templates/c-llantas.webp', rating: 4.7, reviews: 89, category: 'automovil', vehiculo: 'automovil', medida: 'R17', temporada: 'verano', features: ['alta-velocidad', 'run-flat', 'bajo-ruido'], discount: 22 },
        { id: 'l005', name: 'Llanta Pirelli Cinturato P7 215/55 R16', brand: 'Pirelli', price: 329000, originalPrice: 429000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 167, category: 'automovil', vehiculo: 'automovil', medida: 'R16', temporada: 'cuatro-estaciones', features: ['eco-friendly', 'alta-velocidad'], discount: 23 },
        { id: 'l006', name: 'Llanta Hankook Ventus V12 Evo2 245/40 R18', brand: 'Hankook', price: 389000, originalPrice: 499000, image: 'templates/c-llantas.webp', rating: 4.5, reviews: 78, category: 'automovil', vehiculo: 'automovil', medida: 'R18', temporada: 'verano', features: ['alta-velocidad', 'deportivo'], discount: 22 },
        
        // SUV/Truck Tires
        { id: 'l007', name: 'Llanta Bridgestone Dueler H/T 684 235/65 R17', brand: 'Bridgestone', price: 399000, originalPrice: 529000, image: 'templates/c-llantas.webp', rating: 4.7, reviews: 124, category: 'camioneta', vehiculo: 'camioneta', medida: 'R17', temporada: 'todo-terreno', features: ['todo-terreno', 'larga-duracion'], discount: 25 },
        { id: 'l008', name: 'Llanta Michelin Latitude Tour HP 255/55 R18', brand: 'Michelin', price: 449000, originalPrice: 589000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 98, category: 'camioneta', vehiculo: 'camioneta', medida: 'R18', temporada: 'cuatro-estaciones', features: ['bajo-ruido', 'confort', 'larga-duracion'], discount: 24 },
        { id: 'l009', name: 'Llanta Goodyear Wrangler AT Adventure 225/75 R16', brand: 'Goodyear', price: 359000, originalPrice: 459000, image: 'templates/c-llantas.webp', rating: 4.6, reviews: 145, category: 'camioneta', vehiculo: 'camioneta', medida: 'R16', temporada: 'todo-terreno', features: ['todo-terreno', 'off-road'], discount: 22 },
        { id: 'l010', name: 'Llanta Continental CrossContact LX20 265/65 R17', brand: 'Continental', price: 419000, originalPrice: 549000, image: 'templates/c-llantas.webp', rating: 4.7, reviews: 76, category: 'camioneta', vehiculo: 'camioneta', medida: 'R17', temporada: 'cuatro-estaciones', features: ['eco-friendly', 'confort'], discount: 24 },
        { id: 'l011', name: 'Llanta Pirelli Scorpion Verde 235/60 R18', brand: 'Pirelli', price: 479000, originalPrice: 629000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 67, category: 'camioneta', vehiculo: 'camioneta', medida: 'R18', temporada: 'verano', features: ['eco-friendly', 'bajo-ruido'], discount: 24 },
        { id: 'l012', name: 'Llanta Hankook Dynapro AT2 245/70 R16', brand: 'Hankook', price: 329000, originalPrice: 429000, image: 'templates/c-llantas.webp', rating: 4.5, reviews: 112, category: 'camioneta', vehiculo: 'camioneta', medida: 'R16', temporada: 'todo-terreno', features: ['todo-terreno', 'resistente'], discount: 23 },
        
        // Motorcycle Tires
        { id: 'l013', name: 'Llanta Moto Michelin Road 5 120/70 ZR17', brand: 'Michelin', price: 189000, originalPrice: 249000, image: 'templates/c-llantas.webp', rating: 4.9, reviews: 234, category: 'moto', vehiculo: 'moto', medida: 'R17', temporada: 'verano', features: ['alta-velocidad', 'deportivo', 'grip'], discount: 24 },
        { id: 'l014', name: 'Llanta Moto Pirelli Angel GT 180/55 ZR17', brand: 'Pirelli', price: 229000, originalPrice: 299000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 187, category: 'moto', vehiculo: 'moto', medida: 'R17', temporada: 'cuatro-estaciones', features: ['touring', 'larga-duracion'], discount: 23 },
        { id: 'l015', name: 'Llanta Moto Bridgestone Battlax BT-45 110/70-17', brand: 'Bridgestone', price: 159000, originalPrice: 209000, image: 'templates/c-llantas.webp', rating: 4.6, reviews: 156, category: 'moto', vehiculo: 'moto', medida: 'R17', temporada: 'cuatro-estaciones', features: ['urbano', 'economico'], discount: 24 },
        { id: 'l016', name: 'Llanta Moto Continental ContiRoadAttack 3 190/50 ZR17', brand: 'Continental', price: 269000, originalPrice: 349000, image: 'templates/c-llantas.webp', rating: 4.7, reviews: 98, category: 'moto', vehiculo: 'moto', medida: 'R17', temporada: 'verano', features: ['deportivo', 'alta-velocidad'], discount: 23 },
        { id: 'l017', name: 'Llanta Moto Hankook Z207 Tire 130/70-12', brand: 'Hankook', price: 89000, originalPrice: 119000, image: 'templates/c-llantas.webp', rating: 4.4, reviews: 203, category: 'moto', vehiculo: 'moto', medida: 'R12', temporada: 'cuatro-estaciones', features: ['scooter', 'urbano'], discount: 25 },
        { id: 'l018', name: 'Llanta Moto Goodyear Eagle F1 SuperSport 200/55 ZR17', brand: 'Goodyear', price: 319000, originalPrice: 419000, image: 'templates/c-llantas.webp', rating: 4.9, reviews: 67, category: 'moto', vehiculo: 'moto', medida: 'R17', temporada: 'verano', features: ['racing', 'alta-velocidad'], discount: 24 },
        
        // Commercial Tires
        { id: 'l019', name: 'Llanta Comercial Bridgestone M840 215/75 R17.5', brand: 'Bridgestone', price: 589000, originalPrice: 759000, image: 'templates/c-llantas.webp', rating: 4.6, reviews: 89, category: 'comercial', vehiculo: 'comercial', medida: 'R17', temporada: 'cuatro-estaciones', features: ['resistente', 'larga-duracion', 'carga-pesada'], discount: 22 },
        { id: 'l020', name: 'Llanta Comercial Michelin XZE2+ 11R22.5', brand: 'Michelin', price: 789000, originalPrice: 999000, image: 'templates/c-llantas.webp', rating: 4.8, reviews: 56, category: 'comercial', vehiculo: 'comercial', medida: 'R22', temporada: 'cuatro-estaciones', features: ['recauchable', 'economia-combustible'], discount: 21 },
        { id: 'l021', name: 'Llanta Comercial Continental HSR2 295/80 R22.5', brand: 'Continental', price: 849000, originalPrice: 1099000, image: 'templates/c-llantas.webp', rating: 4.7, reviews: 34, category: 'comercial', vehiculo: 'comercial', medida: 'R22', temporada: 'cuatro-estaciones', features: ['direccional', 'larga-duracion'], discount: 23 },
        { id: 'l022', name: 'Llanta Comercial Goodyear Marathon LHT 245/70 R19.5', brand: 'Goodyear', price: 659000, originalPrice: 859000, image: 'templates/c-llantas.webp', rating: 4.5, reviews: 67, category: 'comercial', vehiculo: 'comercial', medida: 'R19', temporada: 'cuatro-estaciones', features: ['traccion', 'resistente'], discount: 23 },
        
        // Services and Accessories
        { id: 'l023', name: 'Servicio Instalación Completa 4 Llantas', brand: 'Alkosto', price: 85000, originalPrice: 120000, image: 'templates/c-llantas.webp', rating: 4.9, reviews: 456, category: 'servicios', vehiculo: 'todos', medida: 'todos', temporada: 'servicio', features: ['instalacion', 'balanceado', 'garantia'], discount: 29 },
        { id: 'l024', name: 'Kit Reparación Pinchazos Emergencia', brand: 'Continental', price: 45000, originalPrice: 65000, image: 'templates/c-llantas.webp', rating: 4.4, reviews: 234, category: 'servicios', vehiculo: 'todos', medida: 'todos', temporada: 'accesorio', features: ['emergencia', 'portatil', 'facil-uso'], discount: 31 },
        { id: 'l025', name: 'Medidor Digital Presión Llantas Premium', brand: 'Michelin', price: 35000, originalPrice: 49000, image: 'templates/c-llantas.webp', rating: 4.6, reviews: 187, category: 'servicios', vehiculo: 'todos', medida: 'todos', temporada: 'accesorio', features: ['digital', 'precision', 'led'], discount: 29 }
    ];

    let filteredProducts = [...llantasProducts];
    let currentPage = 1;
    const productsPerPage = 12;

    // Initialize filters
    function initializeFilters() {
        // Populate filter counts
        updateFilterCounts();
        
        // Add event listeners to filters
        document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', applyFilters);
        });

        // Price range filter
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            priceRange.addEventListener('input', function() {
                document.getElementById('priceValue').textContent = 
                    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(this.value);
                applyFilters();
            });
        }

        // Sort functionality
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', applySorting);
        }

        // Clear filters button
        const clearFilters = document.getElementById('clearFilters');
        if (clearFilters) {
            clearFilters.addEventListener('click', clearAllFilters);
        }
    }

    // Update filter counts
    function updateFilterCounts() {
        // Count products by category
        const counts = {};
        llantasProducts.forEach(product => {
            // Count by vehicle type
            counts[product.vehiculo] = (counts[product.vehiculo] || 0) + 1;
            
            // Count by brand
            counts[product.brand] = (counts[product.brand] || 0) + 1;
            
            // Count by size
            counts[product.medida] = (counts[product.medida] || 0) + 1;
            
            // Count by season
            counts[product.temporada] = (counts[product.temporada] || 0) + 1;
            
            // Count by features
            if (product.features) {
                product.features.forEach(feature => {
                    counts[feature] = (counts[feature] || 0) + 1;
                });
            }
        });

        // Update count displays
        Object.keys(counts).forEach(key => {
            const countElement = document.querySelector(`[data-count="${key}"]`);
            if (countElement) {
                countElement.textContent = counts[key];
            }
        });
    }

    // Apply filters
    function applyFilters() {
        const selectedVehicles = getCheckedValues('vehiculo');
        const selectedBrands = getCheckedValues('marca');
        const selectedSizes = getCheckedValues('medida');
        const selectedSeasons = getCheckedValues('temporada');
        const selectedFeatures = getCheckedValues('caracteristicas');
        const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : Infinity;

        filteredProducts = llantasProducts.filter(product => {
            // Vehicle filter
            if (selectedVehicles.length > 0 && !selectedVehicles.includes(product.vehiculo)) return false;
            
            // Brand filter
            if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
            
            // Size filter
            if (selectedSizes.length > 0 && !selectedSizes.includes(product.medida)) return false;
            
            // Season filter
            if (selectedSeasons.length > 0 && !selectedSeasons.includes(product.temporada)) return false;
            
            // Features filter
            if (selectedFeatures.length > 0 && product.features && !selectedFeatures.some(feat => product.features.includes(feat))) return false;
            
            // Price filter
            if (product.price > maxPrice) return false;

            return true;
        });

        currentPage = 1;
        applySorting();
    }

    // Get checked values from filter group
    function getCheckedValues(filterGroup) {
        const checkboxes = document.querySelectorAll(`input[name="${filterGroup}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Apply sorting
    function applySorting() {
        const sortValue = document.getElementById('sortSelect')?.value || 'relevancia';

        switch (sortValue) {
            case 'precio-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'precio-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'descuento':
                filteredProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
                break;
            case 'nombre':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Relevancia - por rating y descuento
                filteredProducts.sort((a, b) => {
                    const scoreA = a.rating * 20 + (a.discount || 0);
                    const scoreB = b.rating * 20 + (b.discount || 0);
                    return scoreB - scoreA;
                });
        }

        displayProducts();
        updateResultsInfo();
    }

    // Display products
    function displayProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);

        productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
        
        // Add event listeners to "Add to Cart" buttons
        productsGrid.querySelectorAll('.btn-add-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                addToCart(productId);
            });
        });

        updatePagination();
    }

    // Create product card HTML
    function createProductCard(product) {
        const formattedPrice = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.price);
        const formattedOriginalPrice = product.originalPrice ? 
            new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.originalPrice) : '';

        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

        const featureBadges = product.features ? product.features.slice(0, 3).map(feature => {
            let badgeClass = 'feature-badge';
            if (['alta-velocidad', 'deportivo', 'racing'].includes(feature)) badgeClass += ' performance';
            else if (['todo-terreno', 'off-road', 'resistente'].includes(feature)) badgeClass += ' highlight';
            else if (product.medida) badgeClass += ' size';
            else if (product.temporada) badgeClass += ' season';
            
            return `<span class="${badgeClass}">${getFeatureLabel(feature)}</span>`;
        }).join('') : '';

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.discount ? `<div class="discount-badge">-${product.discount}%</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h5 class="product-name">${product.name}</h5>
                    <div class="product-features">${featureBadges}</div>
                    <div class="price-section">
                        <span class="current-price">${formattedPrice}</span>
                        ${product.originalPrice ? `<span class="original-price">${formattedOriginalPrice}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <button class="btn btn-add-cart" data-product-id="${product.id}">
                        <i class="bi bi-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }

    // Get feature label in Spanish
    function getFeatureLabel(feature) {
        const labels = {
            'bajo-ruido': 'Bajo Ruido',
            'eco-friendly': 'Eco Friendly',
            'larga-duracion': 'Larga Duración',
            'alta-velocidad': 'Alta Velocidad',
            'run-flat': 'Run Flat',
            'deportivo': 'Deportivo',
            'todo-terreno': 'Todo Terreno',
            'off-road': 'Off Road',
            'confort': 'Confort',
            'resistente': 'Resistente',
            'grip': 'Mejor Grip',
            'touring': 'Touring',
            'urbano': 'Urbano',
            'economico': 'Económico',
            'scooter': 'Scooter',
            'racing': 'Racing',
            'carga-pesada': 'Carga Pesada',
            'recauchable': 'Recauchable',
            'economia-combustible': 'Ahorro Combustible',
            'direccional': 'Direccional',
            'traccion': 'Tracción',
            'instalacion': 'Instalación',
            'balanceado': 'Balanceado',
            'garantia': 'Garantía',
            'emergencia': 'Emergencia',
            'portatil': 'Portátil',
            'facil-uso': 'Fácil Uso',
            'digital': 'Digital',
            'precision': 'Precisión',
            'led': 'LED'
        };
        return labels[feature] || feature;
    }

    // Update results info
    function updateResultsInfo() {
        const resultsInfo = document.getElementById('resultsInfo');
        if (resultsInfo) {
            const total = filteredProducts.length;
            const start = (currentPage - 1) * productsPerPage + 1;
            const end = Math.min(currentPage * productsPerPage, total);
            resultsInfo.textContent = `Mostrando ${start}-${end} de ${total} productos`;
        }
    }

    // Update pagination
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const pagination = document.getElementById('pagination');
        
        if (!pagination || totalPages <= 1) {
            if (pagination) pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous button
        paginationHTML += `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage - 1}">Anterior</a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                paginationHTML += `
                    <li class="page-item ${i === currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="${i}">${i}</a>
                    </li>
                `;
            } else if (i === currentPage - 3 || i === currentPage + 3) {
                paginationHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>';
            }
        }

        // Next button
        paginationHTML += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage + 1}">Siguiente</a>
            </li>
        `;

        pagination.innerHTML = paginationHTML;

        // Add event listeners to pagination links
        pagination.querySelectorAll('.page-link[data-page]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page && page !== currentPage) {
                    currentPage = page;
                    displayProducts();
                    document.querySelector('.results-header').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Clear all filters
    function clearAllFilters() {
        // Uncheck all checkboxes
        document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset price range
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            priceRange.value = priceRange.max;
            document.getElementById('priceValue').textContent = 
                new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(priceRange.max);
        }

        // Reset sort
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.value = 'relevancia';
        }

        // Apply filters (which will show all products)
        applyFilters();
    }

    // Add to cart functionality
    function addToCart(productId) {
        const product = llantasProducts.find(p => p.id === productId);
        if (!product) return;

        // Get existing cart or initialize
        let cart = JSON.parse(localStorage.getItem('alkostoCart') || '[]');
        
        // Check if product already exists in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                quantity: 1,
                category: 'llantas'
            });
        }
        
        // Save to localStorage
        localStorage.setItem('alkostoCart', JSON.stringify(cart));
        
        // Show success message
        showAddToCartMessage(product.name);
        
        // Update cart counter if it exists
        updateCartCounter();
    }

    // Show add to cart message
    function showAddToCartMessage(productName) {
        // Create or update message element
        let message = document.getElementById('cartMessage');
        if (!message) {
            message = document.createElement('div');
            message.id = 'cartMessage';
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--llantas-secondary);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 1000;
                transform: translateX(300px);
                transition: transform 0.3s ease;
                font-weight: 600;
            `;
            document.body.appendChild(message);
        }
        
        message.innerHTML = `
            <i class="bi bi-check-circle"></i>
            <strong>¡Agregado al carrito!</strong><br>
            <small>${productName}</small>
        `;
        
        // Show message
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 100);
        
        // Hide message after 3 seconds
        setTimeout(() => {
            message.style.transform = 'translateX(300px)';
        }, 3000);
    }

    // Update cart counter
    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('alkostoCart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCounter = document.getElementById('cartCounter');
        if (cartCounter) {
            cartCounter.textContent = totalItems;
            cartCounter.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Category button functionality
    function setupCategoryButtons() {
        document.querySelectorAll('.llantas-cat-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                document.querySelectorAll('.llantas-cat-btn').forEach(btn => 
                    btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                if (category === 'todos') {
                    // Show all products
                    clearAllFilters();
                } else {
                    // Filter by category
                    clearAllFilters();
                    const categoryCheckbox = document.querySelector(`input[value="${category}"]`);
                    if (categoryCheckbox) {
                        categoryCheckbox.checked = true;
                        applyFilters();
                    }
                }
                
                // Scroll to results
                document.querySelector('.results-header').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });
    }

    // Initialize everything
    function init() {
        initializeFilters();
        setupCategoryButtons();
        displayProducts();
        updateResultsInfo();
        updateCartCounter();
        
        // Set initial price display
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            document.getElementById('priceValue').textContent = 
                new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(priceRange.value);
        }
    }

    // Start the application
    init();
});

// Category navigation (for external use)
function navigateToCategory(category) {
    // Remove active class from all buttons
    document.querySelectorAll('.llantas-cat-btn').forEach(btn => 
        btn.classList.remove('active'));
    
    // Add active class to selected category
    const targetButton = document.querySelector(`.llantas-cat-btn[data-category="${category}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Clear filters first
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    if (category !== 'todos') {
        // Check the corresponding filter
        const categoryCheckbox = document.querySelector(`input[value="${category}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
        }
    }
    
    // Trigger filter application
    if (typeof applyFilters === 'function') {
        applyFilters();
    }
}