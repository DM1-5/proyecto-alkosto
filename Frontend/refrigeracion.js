// Refrigeración Page JavaScript

// Refrigeration Products Data
const refrigerationProducts = [
    {
        id: 'lg-nevera-635l',
        name: 'LG Nevera Side by Side 635L No Frost Inverter',
        brand: 'LG',
        category: 'neveras',
        capacity: 'grande',
        efficiency: 'a+++',
        currentPrice: 2599000,
        originalPrice: 3299000,
        discount: 21,
        savings: 700000,
        image: 'templates/lavadora.webp',
        rating: 4.8,
        reviews: 1245,
        features: ['No Frost', 'Inverter', 'Smart WiFi', 'Dispensador Agua', 'Display Digital'],
        energyRating: 'A+++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'samsung-french-door-580l',
        name: 'Samsung Nevera French Door 580L Twin Cooling Plus',
        brand: 'Samsung',
        category: 'neveras',
        capacity: 'grande',
        efficiency: 'a++',
        currentPrice: 2899000,
        originalPrice: 3599000,
        discount: 19,
        savings: 700000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.7,
        reviews: 987,
        features: ['No Frost', 'Twin Cooling', 'Display Digital', 'Dispensador Agua'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'whirlpool-nevera-420l',
        name: 'Whirlpool Nevera Top Mount 420L No Frost',
        brand: 'Whirlpool',
        category: 'neveras',
        capacity: 'mediana',
        efficiency: 'a+',
        currentPrice: 1599000,
        originalPrice: 1999000,
        discount: 20,
        savings: 400000,
        image: 'templates/lavadora.webp',
        rating: 4.6,
        reviews: 756,
        features: ['No Frost', 'Control Temperatura', 'Luz LED'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'electrolux-nevera-350l',
        name: 'Electrolux Nevera Bottom Mount 350L Frost Free',
        brand: 'Electrolux',
        category: 'neveras',
        capacity: 'mediana',
        efficiency: 'a+',
        currentPrice: 1399000,
        originalPrice: 1699000,
        discount: 18,
        savings: 300000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.5,
        reviews: 634,
        features: ['Frost Free', 'Luz LED', 'Control Mecánico'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'haceb-nevera-250l',
        name: 'Haceb Nevera Top Mount 250L Manual',
        brand: 'Haceb',
        category: 'neveras',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 899000,
        originalPrice: 1199000,
        discount: 25,
        savings: 300000,
        image: 'templates/lavadora.webp',
        rating: 4.3,
        reviews: 432,
        features: ['Descongelamiento Manual', 'Luz Interior', 'Cajones Verduras'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: false
    },
    {
        id: 'lg-congelador-300l',
        name: 'LG Congelador Vertical 300L No Frost',
        brand: 'LG',
        category: 'congeladores',
        capacity: 'mediana',
        efficiency: 'a++',
        currentPrice: 1799000,
        originalPrice: 2199000,
        discount: 18,
        savings: 400000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.7,
        reviews: 543,
        features: ['No Frost', 'Display Digital', '7 Cajones', 'Alarma Puerta'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'samsung-aire-12000-btu',
        name: 'Samsung Aire Acondicionado 12000 BTU Inverter',
        brand: 'Samsung',
        category: 'aire-acondicionado',
        capacity: 'mediana',
        efficiency: 'a+++',
        currentPrice: 1299000,
        originalPrice: 1599000,
        discount: 19,
        savings: 300000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.8,
        reviews: 876,
        features: ['Inverter', 'Smart WiFi', 'Filtro HEPA', 'Control Remoto'],
        energyRating: 'A+++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'lg-aire-18000-btu',
        name: 'LG Aire Acondicionado 18000 BTU Dual Cool',
        brand: 'LG',
        category: 'aire-acondicionado',
        capacity: 'grande',
        efficiency: 'a++',
        currentPrice: 1699000,
        originalPrice: 2099000,
        discount: 19,
        savings: 400000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.7,
        reviews: 654,
        features: ['Dual Cool', 'Smart WiFi', 'Filtro Gold Fin', 'Low Noise'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'whirlpool-nevecon-400l',
        name: 'Whirlpool Nevecón Horizontal 400L',
        brand: 'Whirlpool',
        category: 'nevecones',
        capacity: 'mediana',
        efficiency: 'a+',
        currentPrice: 1199000,
        originalPrice: 1499000,
        discount: 20,
        savings: 300000,
        image: 'templates/lavadora.webp',
        rating: 4.6,
        reviews: 432,
        features: ['Tapa de Vidrio', 'Canastillas', 'Ruedas', 'Cerradura'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'electrolux-vinoteca-28-botellas',
        name: 'Electrolux Vinoteca 28 Botellas Temperatura Dual',
        brand: 'Electrolux',
        category: 'vinotecas',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 2299000,
        originalPrice: 2799000,
        discount: 18,
        savings: 500000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.9,
        reviews: 156,
        features: ['Temperatura Dual', 'Puerta Vidrio', 'Luz LED', 'Vibración Mínima'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'samsung-minibar-120l',
        name: 'Samsung Minibar 120L Silencioso',
        brand: 'Samsung',
        category: 'minibar',
        capacity: 'pequena',
        efficiency: 'a++',
        currentPrice: 699000,
        originalPrice: 899000,
        discount: 22,
        savings: 200000,
        image: 'templates/lavadora.webp',
        rating: 4.5,
        reviews: 324,
        features: ['Silencioso', 'Luz LED', 'Estantes Ajustables', 'Compacto'],
        energyRating: 'A++',
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'lg-nevera-smart-600l',
        name: 'LG Nevera Smart InstaView 600L Door-in-Door',
        brand: 'LG',
        category: 'neveras',
        capacity: 'extragrande',
        efficiency: 'a+++',
        currentPrice: 4599000,
        originalPrice: 5499000,
        discount: 16,
        savings: 900000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.9,
        reviews: 234,
        features: ['InstaView', 'Door-in-Door', 'Smart WiFi', 'Voice Control', 'No Frost'],
        energyRating: 'A+++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'whirlpool-congelador-200l',
        name: 'Whirlpool Congelador Horizontal 200L',
        brand: 'Whirlpool',
        category: 'congeladores',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 999000,
        originalPrice: 1299000,
        discount: 23,
        savings: 300000,
        image: 'templates/lavadora.webp',
        rating: 4.4,
        reviews: 567,
        features: ['Tapa Balanceada', 'Canastilla', 'Cerradura', 'Indicador Temperatura'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'samsung-aire-split-24000-btu',
        name: 'Samsung Aire Split 24000 BTU Wind-Free',
        brand: 'Samsung',
        category: 'aire-acondicionado',
        capacity: 'extragrande',
        efficiency: 'a+++',
        currentPrice: 2199000,
        originalPrice: 2699000,
        discount: 19,
        savings: 500000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.8,
        reviews: 432,
        features: ['Wind-Free', 'Inverter', 'Smart WiFi', 'Good Sleep Mode'],
        energyRating: 'A+++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'electrolux-nevera-frost-free-380l',
        name: 'Electrolux Nevera Frost Free 380L DFN41',
        brand: 'Electrolux',
        category: 'neveras',
        capacity: 'mediana',
        efficiency: 'a+',
        currentPrice: 1499000,
        originalPrice: 1799000,
        discount: 17,
        savings: 300000,
        image: 'templates/lavadora.webp',
        rating: 4.6,
        reviews: 689,
        features: ['Frost Free', 'Filtro Antibacterial', 'Luz LED', 'Gavetas Transparentes'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'haceb-aire-9000-btu',
        name: 'Haceb Aire Acondicionado 9000 BTU Económico',
        brand: 'Haceb',
        category: 'aire-acondicionado',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 899000,
        originalPrice: 1199000,
        discount: 25,
        savings: 300000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.3,
        reviews: 543,
        features: ['Función Sleep', 'Control Remoto', 'Timer 24h', 'Filtro Lavable'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: false
    },
    {
        id: 'lg-vinoteca-dual-zone-46-botellas',
        name: 'LG Vinoteca Dual Zone 46 Botellas',
        brand: 'LG',
        category: 'vinotecas',
        capacity: 'mediana',
        efficiency: 'a++',
        currentPrice: 3299000,
        originalPrice: 3899000,
        discount: 15,
        savings: 600000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.8,
        reviews: 98,
        features: ['Dual Zone', 'Control Digital', 'Luz LED UV-Free', 'Anti-Vibración'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'samsung-nevecon-500l',
        name: 'Samsung Nevecón Vertical 500L',
        brand: 'Samsung',
        category: 'nevecones',
        capacity: 'grande',
        efficiency: 'a+',
        currentPrice: 1799000,
        originalPrice: 2199000,
        discount: 18,
        savings: 400000,
        image: 'templates/lavadora.webp',
        rating: 4.7,
        reviews: 321,
        features: ['Digital Inverter', 'All Around Cooling', 'Cerradura', 'Indicadores LED'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'whirlpool-minibar-90l',
        name: 'Whirlpool Minibar 90L Compacto',
        brand: 'Whirlpool',
        category: 'minibar',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 599000,
        originalPrice: 799000,
        discount: 25,
        savings: 200000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.4,
        reviews: 456,
        features: ['Ultra Silencioso', 'Estantes Cromados', 'Termostato Ajustable'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'electrolux-aire-portatil-12000-btu',
        name: 'Electrolux Aire Portátil 12000 BTU',
        brand: 'Electrolux',
        category: 'aire-acondicionado',
        capacity: 'mediana',
        efficiency: 'a+',
        currentPrice: 1399000,
        originalPrice: 1699000,
        discount: 18,
        savings: 300000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.5,
        reviews: 387,
        features: ['Portátil', 'Kit Ventana', 'Control Remoto', 'Deshumidificador'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'lg-congelador-dual-400l',
        name: 'LG Congelador Dual 400L Convertible',
        brand: 'LG',
        category: 'congeladores',
        capacity: 'grande',
        efficiency: 'a++',
        currentPrice: 2299000,
        originalPrice: 2799000,
        discount: 18,
        savings: 500000,
        image: 'templates/lavadora.webp',
        rating: 4.7,
        reviews: 234,
        features: ['Convertible', 'Digital Inverter', 'Smart Connect', 'Multi Air Flow'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'samsung-nevera-side-by-side-700l',
        name: 'Samsung Nevera Side by Side 700L RH62K6257SL',
        brand: 'Samsung',
        category: 'neveras',
        capacity: 'extragrande',
        efficiency: 'a++',
        currentPrice: 3199000,
        originalPrice: 3899000,
        discount: 18,
        savings: 700000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.8,
        reviews: 567,
        features: ['Side by Side', 'Digital Inverter', 'Water Dispenser', 'Multi Flow'],
        energyRating: 'A++',
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'haceb-nevecon-250l',
        name: 'Haceb Nevecón 250L Económico',
        brand: 'Haceb',
        category: 'nevecones',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 899000,
        originalPrice: 1199000,
        discount: 25,
        savings: 300000,
        image: 'templates/lavadora.webp',
        rating: 4.2,
        reviews: 432,
        features: ['Tapa de Vidrio', 'Canastillas Metálicas', 'Ruedas', 'Drenaje'],
        energyRating: 'A+',
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'electrolux-minibar-premium-150l',
        name: 'Electrolux Minibar Premium 150L',
        brand: 'Electrolux',
        category: 'minibar',
        capacity: 'pequena',
        efficiency: 'a++',
        currentPrice: 999000,
        originalPrice: 1299000,
        discount: 23,
        savings: 300000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.6,
        reviews: 234,
        features: ['Premium Design', 'Luz LED', 'Control Digital', 'Super Silencioso'],
        energyRating: 'A++',
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'whirlpool-aire-window-8000-btu',
        name: 'Whirlpool Aire Ventana 8000 BTU',
        brand: 'Whirlpool',
        category: 'aire-acondicionado',
        capacity: 'pequena',
        efficiency: 'a+',
        currentPrice: 799000,
        originalPrice: 999000,
        discount: 20,
        savings: 200000,
        image: 'templates/c-refrigeracion.webp',
        rating: 4.4,
        reviews: 678,
        features: ['Ventana', 'Control Mecánico', 'Filtro Lavable', 'Función Sleep'],
        energyRating: 'A+',
        installationIncluded: true,
        freeShipping: false
    }
];

// State management
let filteredProducts = [...refrigerationProducts];
let currentPage = 1;
const productsPerPage = 12;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.refrigeracion-cat-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartCount();
    
    // Activate first category
    if (categoryButtons.length > 0) {
        categoryButtons[0].classList.add('active');
        filterByCategory('todos');
    }
});

// Event listeners
function setupEventListeners() {
    // Category filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            filterByCategory(btn.dataset.category);
        });
    });

    // Sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }

    // Checkbox filters
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Account popup
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-bs-toggle="dropdown"]')) return;
        
        if (e.target.closest('a[href="#"]') && e.target.closest('a').textContent.includes('Mi cuenta')) {
            e.preventDefault();
            document.getElementById('account-popup').style.display = 'flex';
        }
        
        if (e.target.closest('.account-popup') && !e.target.closest('.popup-content')) {
            document.getElementById('account-popup').style.display = 'none';
        }
    });
}

// Filter functions
function filterByCategory(category) {
    if (category === 'todos') {
        filteredProducts = [...refrigerationProducts];
    } else {
        filteredProducts = refrigerationProducts.filter(product => 
            product.category === category
        );
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredProducts];

    // Apply capacity filters
    const selectedCapacities = getSelectedFilters('capacity');
    if (selectedCapacities.length > 0) {
        filtered = filtered.filter(product => 
            selectedCapacities.includes(product.capacity)
        );
    }

    // Apply efficiency filters
    const selectedEfficiencies = getSelectedFilters('efficiency');
    if (selectedEfficiencies.length > 0) {
        filtered = filtered.filter(product => 
            selectedEfficiencies.includes(product.efficiency)
        );
    }

    // Apply brand filters
    const selectedBrands = getSelectedFilters('brand');
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => 
            selectedBrands.includes(product.brand.toLowerCase())
        );
    }

    // Apply price range filters
    const selectedPriceRanges = getSelectedFilters('price-range');
    if (selectedPriceRanges.length > 0) {
        filtered = filtered.filter(product => {
            return selectedPriceRanges.some(range => {
                const price = product.currentPrice;
                switch(range) {
                    case '500000': return price <= 500000;
                    case '1000000': return price > 500000 && price <= 1000000;
                    case '2000000': return price > 1000000 && price <= 2000000;
                    case '3000000': return price > 2000000 && price <= 3000000;
                    case '3000001': return price > 3000000;
                    default: return false;
                }
            });
        });
    }

    // Apply features filters
    const selectedFeatures = getSelectedFilters('features');
    if (selectedFeatures.length > 0) {
        filtered = filtered.filter(product =>
            selectedFeatures.some(feature => {
                switch(feature) {
                    case 'no-frost': return product.features.some(f => f.includes('No Frost') || f.includes('Frost Free'));
                    case 'inverter': return product.features.some(f => f.includes('Inverter'));
                    case 'smart': return product.features.some(f => f.includes('Smart') || f.includes('WiFi'));
                    case 'dispensador': return product.features.some(f => f.includes('Dispensador') || f.includes('Water'));
                    case 'display': return product.features.some(f => f.includes('Display') || f.includes('Digital'));
                    default: return false;
                }
            })
        );
    }

    filteredProducts = filtered;
    currentPage = 1;
    sortProducts();
}

function getSelectedFilters(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Search functionality
function searchProducts(query) {
    if (!query) {
        filteredProducts = [...refrigerationProducts];
    } else {
        const searchTerm = query.toLowerCase();
        filteredProducts = refrigerationProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderProducts();
}

// Sorting
function sortProducts() {
    const sortValue = sortSelect ? sortSelect.value : 'featured';
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.currentPrice - b.currentPrice);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.currentPrice - a.currentPrice);
            break;
        case 'capacity':
            filteredProducts.sort((a, b) => {
                const capacityOrder = { 'pequena': 1, 'mediana': 2, 'grande': 3, 'extragrande': 4 };
                return capacityOrder[b.capacity] - capacityOrder[a.capacity];
            });
            break;
        case 'efficiency':
            filteredProducts.sort((a, b) => {
                const efficiencyOrder = { 'a+++': 3, 'a++': 2, 'a+': 1 };
                return efficiencyOrder[b.efficiency] - efficiencyOrder[a.efficiency];
            });
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Simulate newest by reversing order
            filteredProducts.reverse();
            break;
        default: // featured
            filteredProducts.sort((a, b) => {
                // Prioritize high efficiency and ratings
                const aScore = (a.efficiency === 'a+++' ? 100 : 0) + (a.rating * 10) + (a.discount);
                const bScore = (b.efficiency === 'a+++' ? 100 : 0) + (b.rating * 10) + (b.discount);
                return bScore - aScore;
            });
    }
    
    renderProducts();
}

// Rendering functions
function renderProducts() {
    if (!productsGrid) return;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-thermometer-snow display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">No se encontraron productos</h3>
                <p class="text-muted">Intenta ajustar los filtros o buscar otros términos.</p>
            </div>
        `;
        updateResultsCount(0);
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    updateResultsCount(filteredProducts.length);
    renderPagination();
    
    // Add event listeners to new cards
    setupProductCardListeners();
}

function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '☆' : '');
    
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="efficiency-badge">${product.energyRating}</div>
                    ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h5 class="product-name">${product.name}</h5>
                    
                    <div class="product-features">
                        ${product.features.slice(0, 3).map(feature => 
                            `<span class="feature-tag">${feature}</span>`
                        ).join('')}
                    </div>
                    
                    <div class="price-section">
                        <span class="current-price">$${product.currentPrice.toLocaleString()}</span>
                        ${product.originalPrice > product.currentPrice ? 
                            `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
                        ${product.savings > 0 ? 
                            `<span class="savings">Ahorras $${product.savings.toLocaleString()}</span>` : ''}
                    </div>
                    
                    <div class="product-rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${product.rating} (${product.reviews})</span>
                    </div>
                    
                    <button class="btn btn-add-cart" onclick="addToCart('${product.id}')">
                        <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Utility functions
function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `${count} productos encontrados`;
    }
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<ul class="pagination">';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" tabindex="-1">
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;
    
    paginationHTML += '</ul>';
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        // Scroll to top of products
        document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Product interaction
function setupProductCardListeners() {
    // Add hover effects
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function addToCart(productId) {
    const product = refrigerationProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            brand: product.brand,
            price: product.currentPrice,
            originalPrice: product.originalPrice,
            image: product.image,
            quantity: 1,
            category: 'refrigeracion',
            energyRating: product.energyRating
        });
    }
    
    // Save cart
    localStorage.setItem('alkosto-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    showAddToCartSuccess(product);
}

function showAddToCartSuccess(product) {
    // Create and show toast notification
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; background: var(--refrigeracion-primary);';
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-check-circle me-2"></i>
                ${product.name} agregado al carrito exitosamente
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
    bsToast.show();
    
    // Remove element after hiding
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart badge
    const cartBadge = document.querySelector('.cart-count');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Newsletter subscription
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Por favor ingresa tu correo electrónico');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }
    
    // Simulate newsletter subscription
    showNewsletterSuccess();
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNewsletterSuccess() {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; background: var(--success-color);';
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-envelope-check me-2"></i>
                ¡Suscripción exitosa! Recibirás nuestras ofertas especiales
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}