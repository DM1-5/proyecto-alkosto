// Baterías Page JavaScript

// Battery Products Data
const batteryProducts = [
    {
        id: 'mac-bateria-ns60-12v',
        name: 'MAC Batería NS60 12V 45Ah Libre Mantenimiento',
        brand: 'MAC',
        category: 'automotrices',
        capacity: 'media',
        voltage: '12v',
        currentPrice: 189000,
        originalPrice: 229000,
        discount: 17,
        savings: 40000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.7,
        reviews: 1234,
        specs: ['45Ah', '12V', 'Libre Mantenimiento', '18 meses garantía'],
        features: ['Libre Mantenimiento', 'Arranque en Frío'],
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'moura-bateria-75ah-12v',
        name: 'Moura Batería 75Ah 12V Flotante Ciclo Profundo',
        brand: 'Moura',
        category: 'automotrices',
        capacity: 'alta',
        voltage: '12v',
        currentPrice: 289000,
        originalPrice: 339000,
        discount: 15,
        savings: 50000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 987,
        specs: ['75Ah', '12V', 'Ciclo Profundo', '24 meses garantía'],
        features: ['Ciclo Profundo', 'Tecnología AGM'],
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'anker-powerbank-20000mah',
        name: 'Anker PowerCore 20000mAh Carga Rápida Power Bank',
        brand: 'Anker',
        category: 'power-banks',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 159000,
        originalPrice: 199000,
        discount: 20,
        savings: 40000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.9,
        reviews: 2345,
        specs: ['20000mAh', '22.5W', 'USB-C PD', 'LED Display'],
        features: ['Carga Rápida', 'Display LED', 'Multi-Puerto'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'xiaomi-powerbank-10000mah',
        name: 'Xiaomi Mi Power Bank 3 10000mAh Carga Inalámbrica',
        brand: 'Xiaomi',
        category: 'power-banks',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 89000,
        originalPrice: 119000,
        discount: 25,
        savings: 30000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.6,
        reviews: 1876,
        specs: ['10000mAh', '18W', 'Qi Wireless', 'USB-C'],
        features: ['Carga Inalámbrica', 'Carga Rápida', 'Compacto'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'apc-ups-1500va',
        name: 'APC UPS 1500VA 900W Back-UPS Pro BR1500G',
        brand: 'APC',
        category: 'ups',
        capacity: 'alta',
        voltage: '12v',
        currentPrice: 789000,
        originalPrice: 949000,
        discount: 17,
        savings: 160000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 543,
        specs: ['1500VA', '900W', '10 Tomas', 'Software PowerChute'],
        features: ['Display LCD', 'Software Incluido', 'Protección Línea'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'mac-bateria-solar-100ah',
        name: 'MAC Batería Solar 100Ah 12V Ciclo Profundo AGM',
        brand: 'MAC',
        category: 'solares',
        capacity: 'ultra',
        voltage: '12v',
        currentPrice: 459000,
        originalPrice: 549000,
        discount: 16,
        savings: 90000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.7,
        reviews: 432,
        specs: ['100Ah', '12V', 'AGM', 'Ciclo Profundo'],
        features: ['Panel Solar Compatible', 'Ciclo Profundo', 'Libre Mantenimiento'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'duracell-aa-recargables',
        name: 'Duracell Pilas AA Recargables 2500mAh Pack x8',
        brand: 'Duracell',
        category: 'recargables',
        capacity: 'baja',
        voltage: 'usb',
        currentPrice: 45000,
        originalPrice: 59000,
        discount: 24,
        savings: 14000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.5,
        reviews: 876,
        specs: ['2500mAh', 'NiMH', 'Pack x8', 'Pre-cargadas'],
        features: ['Pre-cargadas', 'Larga Duración', 'Eco-Friendly'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'anker-cargador-wireless-15w',
        name: 'Anker Cargador Inalámbrico 15W PowerWave Stand',
        brand: 'Anker',
        category: 'cargadores',
        capacity: 'baja',
        voltage: 'usb',
        currentPrice: 79000,
        originalPrice: 99000,
        discount: 20,
        savings: 20000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.7,
        reviews: 1234,
        specs: ['15W', 'Qi Compatible', 'LED Indicador', 'Soporte'],
        features: ['Carga Inalámbrica', 'Carga Rápida', 'Soporte Incluido'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'moura-bateria-estacionaria-150ah',
        name: 'Moura Batería Estacionaria 150Ah 12V Clean Energy',
        brand: 'Moura',
        category: 'solares',
        capacity: 'ultra',
        voltage: '12v',
        currentPrice: 689000,
        originalPrice: 799000,
        discount: 14,
        savings: 110000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.9,
        reviews: 234,
        specs: ['150Ah', '12V', 'Estacionaria', 'Clean Energy'],
        features: ['Panel Solar', 'Larga Vida Útil', 'Tecnología Avanzada'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'xiaomi-powerbank-solar-20000mah',
        name: 'Xiaomi Power Bank Solar 20000mAh Resistente Agua',
        brand: 'Xiaomi',
        category: 'power-banks',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 129000,
        originalPrice: 169000,
        discount: 24,
        savings: 40000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.6,
        reviews: 657,
        specs: ['20000mAh', 'Panel Solar', 'IP65', 'Linterna LED'],
        features: ['Panel Solar', 'Resistente al Agua', 'Linterna'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'apc-ups-600va-mini',
        name: 'APC Back-UPS 600VA 360W Compacto BX600C',
        brand: 'APC',
        category: 'ups',
        capacity: 'media',
        voltage: '12v',
        currentPrice: 289000,
        originalPrice: 349000,
        discount: 17,
        savings: 60000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.5,
        reviews: 789,
        specs: ['600VA', '360W', '6 Tomas', 'Indicadores LED'],
        features: ['Compacto', 'Protección de Línea', 'Fácil Instalación'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'mac-bateria-ns40-12v',
        name: 'MAC Batería NS40 12V 32Ah Económica',
        brand: 'MAC',
        category: 'automotrices',
        capacity: 'baja',
        voltage: '12v',
        currentPrice: 129000,
        originalPrice: 159000,
        discount: 19,
        savings: 30000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.4,
        reviews: 1567,
        specs: ['32Ah', '12V', 'Económica', '12 meses garantía'],
        features: ['Precio Económico', 'Confiable', 'Arranque Seguro'],
        installationIncluded: true,
        freeShipping: false
    },
    {
        id: 'anker-powerbank-26800mah-pd',
        name: 'Anker PowerCore 26800mAh PD 30W Power Delivery',
        brand: 'Anker',
        category: 'power-banks',
        capacity: 'alta',
        voltage: 'usb',
        currentPrice: 219000,
        originalPrice: 269000,
        discount: 19,
        savings: 50000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 1432,
        specs: ['26800mAh', '30W PD', 'USB-C', '3 Puertos'],
        features: ['Power Delivery', 'Carga Rápida', '3 Dispositivos'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'xiaomi-cargador-67w-turbo',
        name: 'Xiaomi Cargador Turbo 67W GaN USB-C',
        brand: 'Xiaomi',
        category: 'cargadores',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 69000,
        originalPrice: 89000,
        discount: 22,
        savings: 20000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.7,
        reviews: 987,
        specs: ['67W', 'GaN Tech', 'USB-C', 'Compacto'],
        features: ['Carga Rápida', 'Tecnología GaN', 'Compacto'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'moura-bateria-gel-80ah',
        name: 'Moura Batería Gel 80Ah 12V Ciclo Profundo',
        brand: 'Moura',
        category: 'solares',
        capacity: 'alta',
        voltage: '12v',
        currentPrice: 389000,
        originalPrice: 459000,
        discount: 15,
        savings: 70000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 345,
        specs: ['80Ah', '12V', 'Gel', 'Ciclo Profundo'],
        features: ['Tecnología Gel', 'Sin Mantenimiento', 'Larga Vida'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'energizer-aaa-recargables',
        name: 'Energizer Pilas AAA Recargables 800mAh Pack x4',
        brand: 'Energizer',
        category: 'recargables',
        capacity: 'baja',
        voltage: 'usb',
        currentPrice: 29000,
        originalPrice: 39000,
        discount: 26,
        savings: 10000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.4,
        reviews: 654,
        specs: ['800mAh', 'NiMH', 'Pack x4', 'Pre-cargadas'],
        features: ['Pre-cargadas', '1000 Ciclos', 'Eco-Friendly'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'apc-ups-1000va-sinewave',
        name: 'APC Smart-UPS 1000VA 670W Onda Pura SMT1000',
        brand: 'APC',
        category: 'ups',
        capacity: 'alta',
        voltage: '12v',
        currentPrice: 1289000,
        originalPrice: 1549000,
        discount: 17,
        savings: 260000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.9,
        reviews: 234,
        specs: ['1000VA', '670W', 'Onda Pura', 'LCD Display'],
        features: ['Display LCD', 'Onda Pura', 'Red Management'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'anker-cargador-pared-65w',
        name: 'Anker Cargador Pared 65W PowerPort Atom III',
        brand: 'Anker',
        category: 'cargadores',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 119000,
        originalPrice: 149000,
        discount: 20,
        savings: 30000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 1123,
        specs: ['65W', 'GaN Tech', '2 USB-C', 'Plegable'],
        features: ['Carga Rápida', 'GaN Tech', '2 Puertos'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'mac-bateria-24v-camion',
        name: 'MAC Batería 24V 100Ah Camión Libre Mantenimiento',
        brand: 'MAC',
        category: 'automotrices',
        capacity: 'ultra',
        voltage: '24v',
        currentPrice: 489000,
        originalPrice: 589000,
        discount: 17,
        savings: 100000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.6,
        reviews: 432,
        specs: ['100Ah', '24V', 'Camión', '18 meses garantía'],
        features: ['Para Camiones', 'Libre Mantenimiento', 'Alta Potencia'],
        installationIncluded: true,
        freeShipping: true
    },
    {
        id: 'xiaomi-powerbank-wireless-10000mah',
        name: 'Xiaomi Wireless Power Bank 10000mAh Essential',
        brand: 'Xiaomi',
        category: 'power-banks',
        capacity: 'media',
        voltage: 'usb',
        currentPrice: 79000,
        originalPrice: 99000,
        discount: 20,
        savings: 20000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.5,
        reviews: 789,
        specs: ['10000mAh', '10W Wireless', 'USB-C', 'Qi Compatible'],
        features: ['Carga Inalámbrica', 'USB-C', 'Qi Compatible'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'moura-bateria-moto-12ah',
        name: 'Moura Batería Moto 12Ah 12V MA12-E Gel',
        brand: 'Moura',
        category: 'automotrices',
        capacity: 'baja',
        voltage: '12v',
        currentPrice: 89000,
        originalPrice: 109000,
        discount: 18,
        savings: 20000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.7,
        reviews: 567,
        specs: ['12Ah', '12V', 'Moto', 'Gel'],
        features: ['Para Motos', 'Tecnología Gel', 'Sin Mantenimiento'],
        installationIncluded: true,
        freeShipping: false
    },
    {
        id: 'anker-estacion-carga-powerhouse',
        name: 'Anker PowerHouse 200 Estación Energía Portátil 213Wh',
        brand: 'Anker',
        category: 'power-banks',
        capacity: 'ultra',
        voltage: 'usb',
        currentPrice: 689000,
        originalPrice: 819000,
        discount: 16,
        savings: 130000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.8,
        reviews: 198,
        specs: ['213Wh', '57600mAh', 'AC 110V', 'Panel Solar Compatible'],
        features: ['AC Output', 'Panel Solar', 'Display Digital'],
        installationIncluded: false,
        freeShipping: true
    },
    {
        id: 'duracell-9v-recargables',
        name: 'Duracell Pilas 9V Recargables 170mAh Pack x2',
        brand: 'Duracell',
        category: 'recargables',
        capacity: 'baja',
        voltage: 'usb',
        currentPrice: 35000,
        originalPrice: 45000,
        discount: 22,
        savings: 10000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.6,
        reviews: 432,
        specs: ['170mAh', '9V', 'NiMH', 'Pack x2'],
        features: ['Pre-cargadas', 'Larga Duración', 'Eco-Friendly'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'xiaomi-cargador-auto-67w',
        name: 'Xiaomi Cargador Auto 67W Dual USB-C',
        brand: 'Xiaomi',
        category: 'cargadores',
        capacity: 'media',
        voltage: '12v',
        currentPrice: 49000,
        originalPrice: 69000,
        discount: 29,
        savings: 20000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.5,
        reviews: 876,
        specs: ['67W', 'Dual USB-C', '12V/24V', 'LED Indicador'],
        features: ['Carga Rápida', 'Dual Puerto', 'LED Indicador'],
        installationIncluded: false,
        freeShipping: false
    },
    {
        id: 'apc-ups-500va-basico',
        name: 'APC Back-UPS 500VA 300W Básico BE500G',
        brand: 'APC',
        category: 'ups',
        capacity: 'baja',
        voltage: '12v',
        currentPrice: 189000,
        originalPrice: 229000,
        discount: 17,
        savings: 40000,
        image: 'templates/header-foto-baterias.webp',
        rating: 4.3,
        reviews: 987,
        specs: ['500VA', '300W', '6 Tomas', 'Indicadores LED'],
        features: ['Económico', 'Protección Básica', 'Fácil Uso'],
        installationIncluded: false,
        freeShipping: false
    }
];

// State management
let filteredProducts = [...batteryProducts];
let currentPage = 1;
const productsPerPage = 12;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.baterias-cat-btn');
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
        filteredProducts = [...batteryProducts];
    } else {
        filteredProducts = batteryProducts.filter(product => 
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

    // Apply voltage filters
    const selectedVoltages = getSelectedFilters('voltage');
    if (selectedVoltages.length > 0) {
        filtered = filtered.filter(product => 
            selectedVoltages.includes(product.voltage)
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
                    case '50000': return price <= 50000;
                    case '100000': return price > 50000 && price <= 100000;
                    case '300000': return price > 100000 && price <= 300000;
                    case '500000': return price > 300000 && price <= 500000;
                    case '500001': return price > 500000;
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
                    case 'fast-charge': return product.features.some(f => f.includes('Carga Rápida'));
                    case 'wireless': return product.features.some(f => f.includes('Carga Inalámbrica') || f.includes('Inalámbrica'));
                    case 'solar': return product.features.some(f => f.includes('Panel Solar') || f.includes('Solar'));
                    case 'display': return product.features.some(f => f.includes('Display') || f.includes('LED'));
                    case 'waterproof': return product.features.some(f => f.includes('Resistente') || f.includes('Agua'));
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
        filteredProducts = [...batteryProducts];
    } else {
        const searchTerm = query.toLowerCase();
        filteredProducts = batteryProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.specs.some(spec => spec.toLowerCase().includes(searchTerm)) ||
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
                const capacityOrder = { 'baja': 1, 'media': 2, 'alta': 3, 'ultra': 4 };
                return capacityOrder[b.capacity] - capacityOrder[a.capacity];
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
                // Prioritize high capacity, rating and discount
                const aScore = (a.capacity === 'ultra' ? 100 : 0) + (a.rating * 10) + (a.discount);
                const bScore = (b.capacity === 'ultra' ? 100 : 0) + (b.rating * 10) + (b.discount);
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
                <i class="bi bi-battery-half display-1 text-muted"></i>
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
    
    // Determine capacity badge text
    let capacityText = '';
    if (product.specs.some(spec => spec.includes('mAh'))) {
        capacityText = product.specs.find(spec => spec.includes('mAh'));
    } else if (product.specs.some(spec => spec.includes('Ah'))) {
        capacityText = product.specs.find(spec => spec.includes('Ah'));
    } else if (product.specs.some(spec => spec.includes('VA'))) {
        capacityText = product.specs.find(spec => spec.includes('VA'));
    }

    // Determine voltage badge text
    const voltageText = product.specs.find(spec => spec.includes('V')) || product.voltage.toUpperCase();
    
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${capacityText ? `<div class="capacity-badge">${capacityText}</div>` : ''}
                    ${voltageText ? `<div class="voltage-badge">${voltageText}</div>` : ''}
                    ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h5 class="product-name">${product.name}</h5>
                    
                    <div class="product-specs">
                        ${product.specs.slice(0, 3).map(spec => 
                            `<span class="spec-tag">${spec}</span>`
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
    const product = batteryProducts.find(p => p.id === productId);
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
            category: 'baterias',
            specs: product.specs
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
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; background: linear-gradient(135deg, var(--baterias-primary), var(--baterias-energy));';
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-lightning-charge me-2"></i>
                ${product.name} cargado al carrito exitosamente
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
                <i class="bi bi-battery-charging me-2"></i>
                ¡Suscripción cargada! Recibirás ofertas energizantes
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