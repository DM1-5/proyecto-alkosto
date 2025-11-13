// Colchones JavaScript - Sleep and Comfort Category
document.addEventListener('DOMContentLoaded', function() {
    // Product data for mattresses and sleep products
    const colchonesProducts = [
        // Memory Foam Mattresses
        { id: 'c001', name: 'Colchón Memory Foam Supreme Comfort 15cm', brand: 'Simmons', price: 899000, originalPrice: 1299000, image: 'templates/colchones.webp', rating: 4.8, reviews: 142, category: 'memory-foam', tipo: 'memory-foam', firmness: 'medio', size: 'queen', sleepPosition: ['lado', 'boca-arriba'], features: ['memory-foam', 'anti-alérgico', 'regulación-temperatura'], discount: 31 },
        { id: 'c002', name: 'Colchón Visco Memory Gel Fresh Breeze', brand: 'Serta', price: 1150000, originalPrice: 1599000, image: 'templates/colchones.webp', rating: 4.9, reviews: 98, category: 'memory-foam', tipo: 'memory-foam', firmness: 'medio-suave', size: 'king', sleepPosition: ['lado', 'combinado'], features: ['gel-cooling', 'memory-foam', 'motion-isolation'], discount: 28 },
        { id: 'c003', name: 'Colchón Memory Foam Ortopédico Plus', brand: 'Tempur-Pedic', price: 1499000, originalPrice: 1999000, image: 'templates/colchones.webp', rating: 4.7, reviews: 76, category: 'ortopédicos', tipo: 'memory-foam', firmness: 'firme', size: 'matrimonial', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['ortopédico', 'memory-foam', 'edge-support'], discount: 25 },
        
        // Spring Mattresses
        { id: 'c004', name: 'Colchón Resortes Ensacados Premium', brand: 'Sealy', price: 750000, originalPrice: 999000, image: 'templates/colchones.webp', rating: 4.6, reviews: 134, category: 'resortes', tipo: 'resortes', firmness: 'medio-firme', size: 'queen', sleepPosition: ['boca-arriba', 'combinado'], features: ['resortes-ensacados', 'transpirable', 'edge-support'], discount: 25 },
        { id: 'c005', name: 'Colchón Pocket Spring Luxury Comfort', brand: 'Simmons', price: 980000, originalPrice: 1349000, image: 'templates/colchones.webp', rating: 4.8, reviews: 156, category: 'resortes', tipo: 'resortes', firmness: 'medio', size: 'king', sleepPosition: ['lado', 'boca-arriba'], features: ['resortes-ensacados', 'anti-alérgico', 'motion-isolation'], discount: 27 },
        { id: 'c006', name: 'Colchón Resortes Bonnell Tradicional', brand: 'Serta', price: 549000, originalPrice: 749000, image: 'templates/colchones.webp', rating: 4.4, reviews: 203, category: 'resortes', tipo: 'resortes', firmness: 'firme', size: 'matrimonial', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['resortes-bonnell', 'económico', 'duradero'], discount: 27 },
        
        // Hybrid Mattresses
        { id: 'c007', name: 'Colchón Híbrido Memory Spring Elite', brand: 'Purple', price: 1299000, originalPrice: 1799000, image: 'templates/colchones.webp', rating: 4.9, reviews: 89, category: 'híbridos', tipo: 'híbrido', firmness: 'medio', size: 'queen', sleepPosition: ['lado', 'boca-arriba', 'combinado'], features: ['híbrido', 'gel-cooling', 'motion-isolation', 'edge-support'], discount: 28 },
        { id: 'c008', name: 'Colchón Híbrido Latex Spring Deluxe', brand: 'Casper', price: 1599000, originalPrice: 2199000, image: 'templates/colchones.webp', rating: 4.8, reviews: 67, category: 'híbridos', tipo: 'híbrido', firmness: 'medio-suave', size: 'king', sleepPosition: ['lado', 'combinado'], features: ['látex-natural', 'híbrido', 'transpirable', 'anti-alérgico'], discount: 27 },
        { id: 'c009', name: 'Colchón Híbrido Comfort Zone Advanced', brand: 'Tempur-Pedic', price: 1899000, originalPrice: 2499000, image: 'templates/colchones.webp', rating: 4.9, reviews: 45, category: 'híbridos', tipo: 'híbrido', firmness: 'medio-firme', size: 'king', sleepPosition: ['boca-arriba', 'combinado'], features: ['zonas-diferenciadas', 'híbrido', 'regulación-temperatura'], discount: 24 },
        
        // Latex Mattresses
        { id: 'c010', name: 'Colchón Látex Natural 100% Orgánico', brand: 'Sealy', price: 1199000, originalPrice: 1699000, image: 'templates/colchones.webp', rating: 4.7, reviews: 92, category: 'látex', tipo: 'látex', firmness: 'medio', size: 'queen', sleepPosition: ['lado', 'boca-arriba'], features: ['látex-natural', 'orgánico', 'anti-alérgico', 'transpirable'], discount: 29 },
        { id: 'c011', name: 'Colchón Látex Sintético Premium Soft', brand: 'Simmons', price: 899000, originalPrice: 1199000, image: 'templates/colchones.webp', rating: 4.6, reviews: 118, category: 'látex', tipo: 'látex', firmness: 'suave', size: 'matrimonial', sleepPosition: ['lado'], features: ['látex-sintético', 'suave', 'anti-bacterial'], discount: 25 },
        { id: 'c012', name: 'Colchón Látex Talalay Luxury Firm', brand: 'Purple', price: 1799000, originalPrice: 2399000, image: 'templates/colchones.webp', rating: 4.9, reviews: 56, category: 'látex', tipo: 'látex', firmness: 'firme', size: 'king', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['talalay-latex', 'firme', 'duradero', 'regulación-temperatura'], discount: 25 },
        
        // Orthopedic Mattresses
        { id: 'c013', name: 'Colchón Ortopédico Therapeutic Support', brand: 'Serta', price: 1049000, originalPrice: 1499000, image: 'templates/colchones.webp', rating: 4.8, reviews: 124, category: 'ortopédicos', tipo: 'ortopédico', firmness: 'firme', size: 'queen', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['ortopédico', 'soporte-lumbar', 'firme'], discount: 30 },
        { id: 'c014', name: 'Colchón Ortopédico Medical Grade Pro', brand: 'Tempur-Pedic', price: 1699000, originalPrice: 2299000, image: 'templates/colchones.webp', rating: 4.9, reviews: 78, category: 'ortopédicos', tipo: 'ortopédico', firmness: 'medio-firme', size: 'king', sleepPosition: ['boca-arriba'], features: ['grado-médico', 'ortopédico', 'certificado'], discount: 26 },
        { id: 'c015', name: 'Colchón Ortopédico Spinal Align', brand: 'Sealy', price: 1249000, originalPrice: 1699000, image: 'templates/colchones.webp', rating: 4.7, reviews: 95, category: 'ortopédicos', tipo: 'ortopédico', firmness: 'firme', size: 'matrimonial', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['alineación-espinal', 'ortopédico', 'soporte-zones'], discount: 26 },
        
        // Box Springs and Bases
        { id: 'c016', name: 'Base Cama Box Spring Premium', brand: 'Simmons', price: 649000, originalPrice: 899000, image: 'templates/colchones.webp', rating: 4.5, reviews: 187, category: 'bases', tipo: 'base', firmness: 'firme', size: 'queen', sleepPosition: ['todos'], features: ['box-spring', 'soporte-extra', 'duradero'], discount: 28 },
        { id: 'c017', name: 'Base Ajustable Eléctrica Smart Bed', brand: 'Casper', price: 2199000, originalPrice: 2899000, image: 'templates/colchones.webp', rating: 4.8, reviews: 34, category: 'bases', tipo: 'base-ajustable', firmness: 'ajustable', size: 'king', sleepPosition: ['todos'], features: ['eléctrica', 'control-remoto', 'masaje', 'usb'], discount: 24 },
        { id: 'c018', name: 'Base de Madera Ecológica Natural', brand: 'Serta', price: 449000, originalPrice: 599000, image: 'templates/colchones.webp', rating: 4.4, reviews: 156, category: 'bases', tipo: 'base-madera', firmness: 'firme', size: 'matrimonial', sleepPosition: ['todos'], features: ['madera-natural', 'ecológico', 'ventilación'], discount: 25 },
        
        // Pillows
        { id: 'c019', name: 'Almohada Memory Foam Cervical', brand: 'Tempur-Pedic', price: 189000, originalPrice: 259000, image: 'templates/colchones.webp', rating: 4.7, reviews: 324, category: 'almohadas', tipo: 'almohada', firmness: 'medio', size: 'estándar', sleepPosition: ['lado', 'boca-arriba'], features: ['cervical', 'memory-foam', 'ergonómica'], discount: 27 },
        { id: 'c020', name: 'Almohada Gel Cooling Fresh Sleep', brand: 'Purple', price: 149000, originalPrice: 199000, image: 'templates/colchones.webp', rating: 4.6, reviews: 267, category: 'almohadas', tipo: 'almohada', firmness: 'suave', size: 'estándar', sleepPosition: ['lado'], features: ['gel-cooling', 'transpirable', 'lavable'], discount: 25 },
        { id: 'c021', name: 'Almohada Látex Natural Orgánica', brand: 'Sealy', price: 219000, originalPrice: 299000, image: 'templates/colchones.webp', rating: 4.8, reviews: 145, category: 'almohadas', tipo: 'almohada', firmness: 'medio-firme', size: 'estándar', sleepPosition: ['boca-arriba', 'boca-abajo'], features: ['látex-natural', 'anti-alérgico', 'duradero'], discount: 27 },
        
        // Sleep Accessories
        { id: 'c022', name: 'Protector de Colchón Impermeable', brand: 'Simmons', price: 89000, originalPrice: 129000, image: 'templates/colchones.webp', rating: 4.5, reviews: 423, category: 'accesorios', tipo: 'protector', firmness: 'flexible', size: 'queen', sleepPosition: ['todos'], features: ['impermeable', 'transpirable', 'anti-ácaros'], discount: 31 },
        { id: 'c023', name: 'Sábanas Bambú Orgánico Set Completo', brand: 'Casper', price: 159000, originalPrice: 219000, image: 'templates/colchones.webp', rating: 4.7, reviews: 298, category: 'accesorios', tipo: 'sábanas', firmness: 'suave', size: 'king', sleepPosition: ['todos'], features: ['bambú-orgánico', 'antibacterial', 'termorregulador'], discount: 27 },
        { id: 'c024', name: 'Topper Memory Foam 5cm Comfort Plus', brand: 'Serta', price: 299000, originalPrice: 399000, image: 'templates/colchones.webp', rating: 4.6, reviews: 167, category: 'accesorios', tipo: 'topper', firmness: 'medio-suave', size: 'matrimonial', sleepPosition: ['lado', 'boca-arriba'], features: ['memory-foam', 'comfort-extra', 'removible'], discount: 25 },
        { id: 'c025', name: 'Regulador de Temperatura Smart Sleep', brand: 'Purple', price: 499000, originalPrice: 699000, image: 'templates/colchones.webp', rating: 4.8, reviews: 89, category: 'accesorios', tipo: 'regulador', firmness: 'adaptable', size: 'queen', sleepPosition: ['todos'], features: ['regulación-inteligente', 'app-control', 'dual-zone'], discount: 29 }
    ];

    let filteredProducts = [...colchonesProducts];
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
        colchonesProducts.forEach(product => {
            // Count by type
            counts[product.tipo] = (counts[product.tipo] || 0) + 1;
            
            // Count by firmness
            counts[product.firmness] = (counts[product.firmness] || 0) + 1;
            
            // Count by size
            counts[product.size] = (counts[product.size] || 0) + 1;
            
            // Count by brand
            counts[product.brand] = (counts[product.brand] || 0) + 1;
            
            // Count by sleep position
            product.sleepPosition.forEach(position => {
                counts[position] = (counts[position] || 0) + 1;
            });
            
            // Count by features
            product.features.forEach(feature => {
                counts[feature] = (counts[feature] || 0) + 1;
            });
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
        const selectedTypes = getCheckedValues('tipo');
        const selectedFirmness = getCheckedValues('firmeza');
        const selectedSizes = getCheckedValues('tamaño');
        const selectedBrands = getCheckedValues('marca');
        const selectedPositions = getCheckedValues('posicion');
        const selectedFeatures = getCheckedValues('caracteristicas');
        const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : Infinity;

        filteredProducts = colchonesProducts.filter(product => {
            // Type filter
            if (selectedTypes.length > 0 && !selectedTypes.includes(product.tipo)) return false;
            
            // Firmness filter
            if (selectedFirmness.length > 0 && !selectedFirmness.includes(product.firmness)) return false;
            
            // Size filter
            if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) return false;
            
            // Brand filter
            if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
            
            // Sleep position filter
            if (selectedPositions.length > 0 && !selectedPositions.some(pos => product.sleepPosition.includes(pos))) return false;
            
            // Features filter
            if (selectedFeatures.length > 0 && !selectedFeatures.some(feat => product.features.includes(feat))) return false;
            
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

        const featureBadges = product.features.slice(0, 3).map(feature => {
            let badgeClass = 'feature-badge';
            if (['memory-foam', 'gel-cooling', 'regulación-temperatura'].includes(feature)) badgeClass += ' comfort';
            else if (['ortopédico', 'soporte-lumbar', 'edge-support'].includes(feature)) badgeClass += ' highlight';
            else if (product.size) badgeClass += ' size';
            else if (product.firmness) badgeClass += ' firmness';
            
            return `<span class="${badgeClass}">${getFeatureLabel(feature)}</span>`;
        }).join('');

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
            'memory-foam': 'Memory Foam',
            'gel-cooling': 'Gel Refrescante',
            'anti-alérgico': 'Antialérgico',
            'regulación-temperatura': 'Control Temp',
            'motion-isolation': 'Sin Movimiento',
            'edge-support': 'Bordes Firmes',
            'resortes-ensacados': 'Resortes Ensacados',
            'transpirable': 'Transpirable',
            'resortes-bonnell': 'Resortes Bonnell',
            'económico': 'Económico',
            'duradero': 'Duradero',
            'híbrido': 'Híbrido',
            'látex-natural': 'Látex Natural',
            'orgánico': 'Orgánico',
            'látex-sintético': 'Látex Sintético',
            'suave': 'Suave',
            'anti-bacterial': 'Antibacterial',
            'talalay-latex': 'Talalay Látex',
            'firme': 'Firme',
            'ortopédico': 'Ortopédico',
            'soporte-lumbar': 'Soporte Lumbar',
            'grado-médico': 'Grado Médico',
            'certificado': 'Certificado',
            'alineación-espinal': 'Alineación Espinal',
            'soporte-zones': 'Zonas de Soporte',
            'box-spring': 'Box Spring',
            'soporte-extra': 'Soporte Extra',
            'eléctrica': 'Eléctrica',
            'control-remoto': 'Control Remoto',
            'masaje': 'Masaje',
            'usb': 'Puerto USB',
            'madera-natural': 'Madera Natural',
            'ecológico': 'Ecológico',
            'ventilación': 'Ventilación',
            'cervical': 'Cervical',
            'ergonómica': 'Ergonómica',
            'lavable': 'Lavable',
            'impermeable': 'Impermeable',
            'anti-ácaros': 'Anti-ácaros',
            'bambú-orgánico': 'Bambú Orgánico',
            'antibacterial': 'Antibacterial',
            'termorregulador': 'Termorregulador',
            'comfort-extra': 'Comfort Extra',
            'removible': 'Removible',
            'regulación-inteligente': 'Regulación Smart',
            'app-control': 'Control App',
            'dual-zone': 'Zona Dual'
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
                    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
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
        const product = colchonesProducts.find(p => p.id === productId);
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
                category: 'colchones'
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
                background: var(--colchones-primary);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 1000;
                transform: translateX(300px);
                transition: transform 0.3s ease;
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
        document.querySelectorAll('.colchones-cat-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                document.querySelectorAll('.colchones-cat-btn').forEach(btn => 
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
                document.querySelector('.results-section').scrollIntoView({ 
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
    document.querySelectorAll('.colchones-cat-btn').forEach(btn => 
        btn.classList.remove('active'));
    
    // Add active class to selected category
    const targetButton = document.querySelector(`.colchones-cat-btn[data-category="${category}"]`);
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