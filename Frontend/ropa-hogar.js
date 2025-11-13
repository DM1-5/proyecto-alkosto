// Ropa Hogar JavaScript - Home Textiles Category
document.addEventListener('DOMContentLoaded', function() {
    // Product data for home textiles and bedding
    const ropaHogarProducts = [
        // Bedding
        { id: 'rh001', name: 'Juego Sábanas Algodón 100% Queen Blanco', brand: 'Home Collection', price: 89000, originalPrice: 129000, image: 'templates/ropa-hogar-2.webp', rating: 4.8, reviews: 234, category: 'ropa-cama', material: 'algodon', tamaño: 'queen', color: 'blanco', features: ['suave', 'hipoalergenico'], discount: 31 },
        { id: 'rh002', name: 'Edredón Microfibra King Gris Perla', brand: 'Comfort Plus', price: 125000, originalPrice: 179000, image: 'templates/ropa-hogar-2.webp', rating: 4.7, reviews: 167, category: 'ropa-cama', material: 'microfibra', tamaño: 'king', color: 'gris', features: ['antibacterial', 'resistente'], discount: 30 },
        { id: 'rh003', name: 'Sábanas Lino Natural Matrimonial Beige', brand: 'Natural Living', price: 149000, originalPrice: 199000, image: 'templates/ropa-hogar-2.webp', rating: 4.9, reviews: 98, category: 'ropa-cama', material: 'lino', tamaño: 'matrimonial', color: 'beige', features: ['natural', 'transpirable'], discount: 25 },
        { id: 'rh004', name: 'Protector Colchón Impermeable Individual', brand: 'Sleep Guard', price: 45000, originalPrice: 65000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 312, category: 'ropa-cama', material: 'poliester', tamaño: 'individual', color: 'blanco', features: ['impermeable', 'antibacterial'], discount: 31 },
        { id: 'rh005', name: 'Almohadas Memory Foam Par Premium', brand: 'Dream Comfort', price: 95000, originalPrice: 139000, image: 'templates/ropa-hogar-2.webp', rating: 4.8, reviews: 189, category: 'ropa-cama', material: 'microfibra', tamaño: 'estandar', color: 'blanco', features: ['memory-foam', 'ergonomico'], discount: 32 },
        { id: 'rh006', name: 'Cobertor Polar Queen Azul Marino', brand: 'Winter Warm', price: 75000, originalPrice: 105000, image: 'templates/ropa-hogar-2.webp', rating: 4.5, reviews: 145, category: 'ropa-cama', material: 'poliester', tamaño: 'queen', color: 'azul', features: ['calido', 'suave'], discount: 29 },
        
        // Curtains
        { id: 'rh007', name: 'Cortinas Blackout Sala Gris 140x220cm', brand: 'Window Style', price: 89000, originalPrice: 119000, image: 'templates/ropa-hogar-2.webp', rating: 4.7, reviews: 203, category: 'cortinas', material: 'poliester', tamaño: 'estandar', color: 'gris', features: ['blackout', 'aislante'], discount: 25 },
        { id: 'rh008', name: 'Cortinas Lino Dormitorio Beige 120x200cm', brand: 'Elegance Home', price: 115000, originalPrice: 159000, image: 'templates/ropa-hogar-2.webp', rating: 4.8, reviews: 134, category: 'cortinas', material: 'lino', tamaño: 'estandar', color: 'beige', features: ['natural', 'elegante'], discount: 28 },
        { id: 'rh009', name: 'Panel Japonés Bambú Natural 60x245cm', brand: 'Zen Living', price: 65000, originalPrice: 89000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 89, category: 'cortinas', material: 'bambu', tamaño: 'estandar', color: 'beige', features: ['natural', 'minimalista'], discount: 27 },
        { id: 'rh010', name: 'Cortinas Cocina Vichy Rosa 80x150cm', brand: 'Kitchen Style', price: 35000, originalPrice: 49000, image: 'templates/ropa-hogar-2.webp', rating: 4.4, reviews: 167, category: 'cortinas', material: 'algodon', tamaño: 'estandar', color: 'rosa', features: ['lavable', 'decorativo'], discount: 29 },
        { id: 'rh011', name: 'Persianas Enrollables Blancas 100x180cm', brand: 'Light Control', price: 78000, originalPrice: 109000, image: 'templates/ropa-hogar-2.webp', rating: 4.5, reviews: 98, category: 'cortinas', material: 'poliester', tamaño: 'estandar', color: 'blanco', features: ['enrollable', 'funcional'], discount: 28 },
        
        // Towels
        { id: 'rh012', name: 'Juego Toallas Baño Algodón 100% Blanco', brand: 'Spa Collection', price: 65000, originalPrice: 89000, image: 'templates/ropa-hogar-2.webp', rating: 4.8, reviews: 276, category: 'toallas', material: 'algodon', tamaño: 'estandar', color: 'blanco', features: ['absorbente', 'suave'], discount: 27 },
        { id: 'rh013', name: 'Toalla Playa Microfibra Azul 80x160cm', brand: 'Beach Life', price: 45000, originalPrice: 65000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 134, category: 'toallas', material: 'microfibra', tamaño: 'estandar', color: 'azul', features: ['secado-rapido', 'compacta'], discount: 31 },
        { id: 'rh014', name: 'Set Toallas Bambú Antibacterial Gris', brand: 'EcoBamboo', price: 85000, originalPrice: 119000, image: 'templates/ropa-hogar-2.webp', rating: 4.9, reviews: 89, category: 'toallas', material: 'bambu', tamaño: 'estandar', color: 'gris', features: ['antibacterial', 'ecologico'], discount: 29 },
        { id: 'rh015', name: 'Toallitas Faciales Algodón Pack 12', brand: 'Soft Touch', price: 25000, originalPrice: 35000, image: 'templates/ropa-hogar-2.webp', rating: 4.5, reviews: 198, category: 'toallas', material: 'algodon', tamaño: 'estandar', color: 'blanco', features: ['suave', 'hipoalergenico'], discount: 29 },
        { id: 'rh016', name: 'Bata Baño Adulto Algodón Rosa Talla L', brand: 'Comfort Wear', price: 55000, originalPrice: 79000, image: 'templates/ropa-hogar-2.webp', rating: 4.7, reviews: 145, category: 'toallas', material: 'algodon', tamaño: 'estandar', color: 'rosa', features: ['absorbente', 'comoda'], discount: 30 },
        
        // Kitchen Textiles
        { id: 'rh017', name: 'Mantel Antimanchas Rectangular 140x200cm', brand: 'Kitchen Pro', price: 45000, originalPrice: 65000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 167, category: 'cocina', material: 'poliester', tamaño: 'estandar', color: 'blanco', features: ['antimanchas', 'lavable'], discount: 31 },
        { id: 'rh018', name: 'Individuales Bambú Natural Set 6 Piezas', brand: 'Eco Table', price: 35000, originalPrice: 49000, image: 'templates/ropa-hogar-2.webp', rating: 4.5, reviews: 123, category: 'cocina', material: 'bambu', tamaño: 'estandar', color: 'beige', features: ['natural', 'resistente'], discount: 29 },
        { id: 'rh019', name: 'Paños Cocina Microfibra Pack 8 Colores', brand: 'Clean Master', price: 28000, originalPrice: 39000, image: 'templates/ropa-hogar-2.webp', rating: 4.7, reviews: 234, category: 'cocina', material: 'microfibra', tamaño: 'estandar', color: 'gris', features: ['absorbente', 'secado-rapido'], discount: 28 },
        { id: 'rh020', name: 'Delantal Cocina Algodón Chef Beige', brand: 'Chef Style', price: 32000, originalPrice: 45000, image: 'templates/ropa-hogar-2.webp', rating: 4.4, reviews: 89, category: 'cocina', material: 'algodon', tamaño: 'estandar', color: 'beige', features: ['resistente', 'funcional'], discount: 29 },
        { id: 'rh021', name: 'Tapete Cocina Antideslizante 50x80cm', brand: 'Safe Step', price: 38000, originalPrice: 55000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 156, category: 'cocina', material: 'poliester', tamaño: 'estandar', color: 'gris', features: ['antideslizante', 'lavable'], discount: 31 },
        
        // Decorative Textiles
        { id: 'rh022', name: 'Cojines Decorativos Set 4 Piezas Azul', brand: 'Deco Home', price: 65000, originalPrice: 89000, image: 'templates/ropa-hogar-2.webp', rating: 4.7, reviews: 178, category: 'decorativo', material: 'algodon', tamaño: 'estandar', color: 'azul', features: ['decorativo', 'suave'], discount: 27 },
        { id: 'rh023', name: 'Manta Decorativa Chenille Gris 130x170cm', brand: 'Cozy Living', price: 95000, originalPrice: 135000, image: 'templates/ropa-hogar-2.webp', rating: 4.8, reviews: 134, category: 'decorativo', material: 'poliester', tamaño: 'estandar', color: 'gris', features: ['suave', 'decorativo'], discount: 30 },
        { id: 'rh024', name: 'Tapiz Pared Mandala Rosa 150x130cm', brand: 'Boho Style', price: 75000, originalPrice: 105000, image: 'templates/ropa-hogar-2.webp', rating: 4.5, reviews: 98, category: 'decorativo', material: 'poliester', tamaño: 'estandar', color: 'rosa', features: ['decorativo', 'artistico'], discount: 29 },
        { id: 'rh025', name: 'Alfombra Sala Pelo Corto Beige 160x230cm', brand: 'Floor Art', price: 189000, originalPrice: 259000, image: 'templates/ropa-hogar-2.webp', rating: 4.6, reviews: 167, category: 'decorativo', material: 'poliester', tamaño: 'estandar', color: 'beige', features: ['suave', 'antideslizante'], discount: 27 }
    ];

    let filteredProducts = [...ropaHogarProducts];
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
        ropaHogarProducts.forEach(product => {
            // Count by category
            counts[product.category] = (counts[product.category] || 0) + 1;
            
            // Count by material
            counts[product.material] = (counts[product.material] || 0) + 1;
            
            // Count by size
            counts[product.tamaño] = (counts[product.tamaño] || 0) + 1;
            
            // Count by color
            counts[product.color] = (counts[product.color] || 0) + 1;
            
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
        const selectedCategories = getCheckedValues('categoria');
        const selectedMaterials = getCheckedValues('material');
        const selectedSizes = getCheckedValues('tamaño');
        const selectedColors = getCheckedValues('color');
        const selectedFeatures = getCheckedValues('caracteristicas');
        const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : Infinity;

        filteredProducts = ropaHogarProducts.filter(product => {
            // Category filter
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
            
            // Material filter
            if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false;
            
            // Size filter
            if (selectedSizes.length > 0 && !selectedSizes.includes(product.tamaño)) return false;
            
            // Color filter
            if (selectedColors.length > 0 && !selectedColors.includes(product.color)) return false;
            
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
            if (['suave', 'antibacterial', 'hipoalergenico'].includes(feature)) badgeClass += ' highlight';
            else if (product.material) badgeClass += ' material';
            else if (product.tamaño) badgeClass += ' size';
            else if (product.color) badgeClass += ' color';
            
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
            'suave': 'Extra Suave',
            'hipoalergenico': 'Hipoalergénico',
            'antibacterial': 'Antibacterial',
            'resistente': 'Resistente',
            'natural': 'Natural',
            'transpirable': 'Transpirable',
            'memory-foam': 'Memory Foam',
            'ergonomico': 'Ergonómico',
            'calido': 'Cálido',
            'blackout': 'Blackout',
            'aislante': 'Aislante',
            'elegante': 'Elegante',
            'minimalista': 'Minimalista',
            'lavable': 'Lavable',
            'decorativo': 'Decorativo',
            'enrollable': 'Enrollable',
            'funcional': 'Funcional',
            'absorbente': 'Absorbente',
            'secado-rapido': 'Secado Rápido',
            'compacta': 'Compacta',
            'ecologico': 'Ecológico',
            'comoda': 'Cómoda',
            'antimanchas': 'Antimanchas',
            'antideslizante': 'Antideslizante',
            'artistico': 'Artístico',
            'impermeable': 'Impermeable'
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
        const product = ropaHogarProducts.find(p => p.id === productId);
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
                category: 'ropa-hogar'
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
                background: var(--hogar-secondary);
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
        document.querySelectorAll('.ropa-hogar-cat-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                document.querySelectorAll('.ropa-hogar-cat-btn').forEach(btn => 
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
    document.querySelectorAll('.ropa-hogar-cat-btn').forEach(btn => 
        btn.classList.remove('active'));
    
    // Add active class to selected category
    const targetButton = document.querySelector(`.ropa-hogar-cat-btn[data-category="${category}"]`);
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