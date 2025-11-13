// Proyectores Page JavaScript

// Product Data
const proyectoresProducts = [
    {
        id: 'epson-eh-tw7100',
        name: 'Epson EH-TW7100 Proyector 4K PRO-UHD',
        brand: 'Epson',
        category: 'cine-casa',
        price: 3899000,
        originalPrice: 4299000,
        image: 'templates/proyectores-2.webp',
        rating: 4.9,
        reviews: 89,
        features: ['4K PRO-UHD', '3000 lúmenes', 'HDR10', 'Keystone automático'],
        specifications: {
            tipo: 'Cine Casa',
            resolucion: '4K PRO-UHD',
            tecnologia: 'LCD',
            lumenes: '3000',
            contraste: '40,000:1',
            conectividad: ['HDMI', 'WiFi', 'USB']
        },
        tags: ['cine', 'casa', '4k', 'hdr', 'premium'],
        discount: 9
    },
    {
        id: 'benq-tk700sti',
        name: 'BenQ TK700STi Proyector Gaming 4K HDR',
        brand: 'BenQ',
        category: 'gaming',
        price: 2799000,
        originalPrice: 3199000,
        image: 'templates/proyectores-2.webp',
        rating: 4.8,
        reviews: 156,
        features: ['4K', 'Baja latencia', '8.3ms', 'HDR-PRO'],
        specifications: {
            tipo: 'Gaming',
            resolucion: '4K UHD',
            tecnologia: 'DLP',
            lumenes: '3000',
            latencia: '8.3ms',
            conectividad: ['HDMI 2.1', 'USB-C', 'WiFi']
        },
        tags: ['gaming', '4k', 'baja', 'latencia', 'hdr'],
        discount: 13
    },
    {
        id: 'lg-cinebeam-hu70la',
        name: 'LG CineBeam HU70LA Proyector 4K Láser',
        brand: 'LG',
        category: 'cine-casa',
        price: 4599000,
        originalPrice: 5299000,
        image: 'templates/proyectores-2.webp',
        rating: 4.7,
        reviews: 234,
        features: ['Láser 4K', '1500 lúmenes', 'webOS', 'Bluetooth'],
        specifications: {
            tipo: 'Cine Casa',
            resolucion: '4K UHD',
            tecnologia: 'Láser',
            lumenes: '1500',
            sistemaOperativo: 'webOS',
            conectividad: ['HDMI', 'USB', 'WiFi', 'Bluetooth']
        },
        tags: ['4k', 'laser', 'smart', 'webos', 'premium'],
        discount: 13
    },
    {
        id: 'sony-vpl-vw295es',
        name: 'Sony VPL-VW295ES Proyector SXRD 4K HDR',
        brand: 'Sony',
        category: 'cine-casa',
        price: 14999000,
        originalPrice: 16999000,
        image: 'templates/proyectores-2.webp',
        rating: 5.0,
        reviews: 45,
        features: ['SXRD 4K', '1500 lúmenes', 'HDR', 'Reality Creation'],
        specifications: {
            tipo: 'Premium Casa',
            resolucion: '4K SXRD',
            tecnologia: 'SXRD',
            lumenes: '1500',
            contraste: '350,000:1',
            conectividad: ['HDMI 2.1', 'RS-232C']
        },
        tags: ['sxrd', '4k', 'premium', 'hdr', 'sony'],
        discount: 12
    },
    {
        id: 'viewsonic-ls800wu',
        name: 'ViewSonic LS800WU Proyector Láser WUXGA',
        brand: 'ViewSonic',
        category: 'oficina',
        price: 3599000,
        originalPrice: 3999000,
        image: 'templates/proyectores-2.webp',
        rating: 4.6,
        reviews: 178,
        features: ['WUXGA', 'Láser 5500 lúmenes', '20,000h vida', 'HDBaseT'],
        specifications: {
            tipo: 'Oficina/Presentaciones',
            resolucion: 'WUXGA',
            tecnologia: 'Láser',
            lumenes: '5500',
            vidaUtil: '20,000 horas',
            conectividad: ['HDMI', 'VGA', 'HDBaseT', 'USB']
        },
        tags: ['wuxga', 'laser', 'oficina', 'presentaciones', 'profesional'],
        discount: 10
    },
    {
        id: 'optoma-uhd50x',
        name: 'Optoma UHD50X Proyector Gaming 4K 240Hz',
        brand: 'Optoma',
        category: 'gaming',
        price: 2299000,
        originalPrice: 2699000,
        image: 'templates/proyectores-2.webp',
        rating: 4.7,
        reviews: 267,
        features: ['4K UHD', '240Hz', '4.2ms latencia', 'HDR10'],
        specifications: {
            tipo: 'Gaming',
            resolucion: '4K UHD',
            tecnologia: 'DLP',
            lumenes: '3400',
            latencia: '4.2ms',
            conectividad: ['HDMI 2.0', 'VGA', 'USB']
        },
        tags: ['gaming', '4k', '240hz', 'baja', 'latencia'],
        discount: 15
    },
    {
        id: 'epson-eb-2250u',
        name: 'Epson EB-2250U Proyector WUXGA Inalámbrico',
        brand: 'Epson',
        category: 'oficina',
        price: 2899000,
        originalPrice: 3299000,
        image: 'templates/proyectores-2.webp',
        rating: 4.5,
        reviews: 134,
        features: ['WUXGA', '5000 lúmenes', 'WiFi', 'Miracast'],
        specifications: {
            tipo: 'Oficina/Educación',
            resolucion: 'WUXGA',
            tecnologia: 'LCD',
            lumenes: '5000',
            conectividadWifi: 'Dual-band',
            conectividad: ['HDMI', 'VGA', 'WiFi', 'USB']
        },
        tags: ['wuxga', 'wifi', 'oficina', 'inalambrico', 'presentaciones'],
        discount: 12
    },
    {
        id: 'lg-minibeam-ph550g',
        name: 'LG MiniBeam PH550G Proyector Portátil HD',
        brand: 'LG',
        category: 'portatil',
        price: 899000,
        originalPrice: 1099000,
        image: 'templates/proyectores-2.webp',
        rating: 4.3,
        reviews: 445,
        features: ['HD 720p', '550 lúmenes', 'LED', 'Batería integrada'],
        specifications: {
            tipo: 'Portátil',
            resolucion: 'HD 720p',
            tecnologia: 'LED',
            lumenes: '550',
            peso: '0.49 kg',
            conectividad: ['HDMI', 'USB', 'Miracast']
        },
        tags: ['portatil', 'led', 'bateria', 'compacto', 'hd'],
        discount: 18
    },
    {
        id: 'benq-mw632st',
        name: 'BenQ MW632ST Proyector Tiro Corto WXGA',
        brand: 'BenQ',
        category: 'oficina',
        price: 1799000,
        originalPrice: 2099000,
        image: 'templates/proyectores-2.webp',
        rating: 4.4,
        reviews: 89,
        features: ['WXGA', '3200 lúmenes', 'Tiro corto', 'SmartEco'],
        specifications: {
            tipo: 'Tiro Corto',
            resolucion: 'WXGA',
            tecnologia: 'DLP',
            lumenes: '3200',
            distanciaTiro: '0.6m para 100"',
            conectividad: ['HDMI', 'VGA', 'USB']
        },
        tags: ['tiro', 'corto', 'wxga', 'oficina', 'educacion'],
        discount: 14
    },
    {
        id: 'sony-vpl-phz10',
        name: 'Sony VPL-PHZ10 Proyector Láser WUXGA',
        brand: 'Sony',
        category: 'oficina',
        price: 4199000,
        originalPrice: 4799000,
        image: 'templates/proyectores-2.webp',
        rating: 4.8,
        reviews: 67,
        features: ['WUXGA', 'Láser 5000 lúmenes', '20,000h', 'Reality Creation'],
        specifications: {
            tipo: 'Profesional',
            resolucion: 'WUXGA',
            tecnologia: 'Láser',
            lumenes: '5000',
            vidaUtil: '20,000 horas',
            conectividad: ['HDMI', 'HDBaseT', 'LAN']
        },
        tags: ['laser', 'profesional', 'wuxga', 'alta', 'luminosidad'],
        discount: 13
    },
    {
        id: 'viewsonic-m1-mini-plus',
        name: 'ViewSonic M1 mini+ Proyector LED Portátil',
        brand: 'ViewSonic',
        category: 'portatil',
        price: 649000,
        originalPrice: 799000,
        image: 'templates/proyectores-2.webp',
        rating: 4.2,
        reviews: 523,
        features: ['WVGA', '120 lúmenes', 'LED', 'Bluetooth'],
        specifications: {
            tipo: 'Ultraportátil',
            resolucion: 'WVGA',
            tecnologia: 'LED',
            lumenes: '120',
            peso: '0.3 kg',
            conectividad: ['USB-C', 'HDMI', 'WiFi', 'Bluetooth']
        },
        tags: ['ultraportatil', 'led', 'bluetooth', 'compacto'],
        discount: 19
    },
    {
        id: 'optoma-gt1080hdr',
        name: 'Optoma GT1080HDR Proyector Gaming Full HD',
        brand: 'Optoma',
        category: 'gaming',
        price: 1599000,
        originalPrice: 1899000,
        image: 'templates/proyectores-2.webp',
        rating: 4.6,
        reviews: 298,
        features: ['Full HD', '3800 lúmenes', '8.4ms', 'HDR'],
        specifications: {
            tipo: 'Gaming',
            resolucion: 'Full HD 1080p',
            tecnologia: 'DLP',
            lumenes: '3800',
            latencia: '8.4ms',
            conectividad: ['HDMI', 'VGA', 'USB']
        },
        tags: ['gaming', 'full', 'hd', 'hdr', 'baja', 'latencia'],
        discount: 16
    },
    {
        id: 'epson-pro-l1755unl',
        name: 'Epson Pro L1755UNL Proyector Láser WUXGA',
        brand: 'Epson',
        category: 'oficina',
        price: 12999000,
        originalPrice: 14999000,
        image: 'templates/proyectores-2.webp',
        rating: 4.9,
        reviews: 23,
        features: ['WUXGA', 'Láser 15000 lúmenes', 'Sin lente', '4K Enhancement'],
        specifications: {
            tipo: 'Instalación Profesional',
            resolucion: 'WUXGA',
            tecnologia: 'Láser',
            lumenes: '15000',
            lente: 'Intercambiable (vendida por separado)',
            conectividad: ['HDMI', 'HDBaseT', 'SDI', 'LAN']
        },
        tags: ['profesional', 'laser', 'alta', 'luminosidad', 'instalacion'],
        discount: 13
    },
    {
        id: 'lg-hu85la',
        name: 'LG HU85LA CineBeam Láser 4K Ultra Corto',
        brand: 'LG',
        category: 'cine-casa',
        price: 8999000,
        originalPrice: 10499000,
        image: 'templates/proyectores-2.webp',
        rating: 4.8,
        reviews: 112,
        features: ['4K UHD', 'Láser 2700 lúmenes', 'Ultra corto', 'webOS'],
        specifications: {
            tipo: 'Ultra Corto Alcance',
            resolucion: '4K UHD',
            tecnologia: 'Láser',
            lumenes: '2700',
            distanciaTiro: '5.6cm para 90"',
            conectividad: ['HDMI', 'USB', 'WiFi', 'Bluetooth']
        },
        tags: ['4k', 'laser', 'ultra', 'corto', 'smart'],
        discount: 14
    },
    {
        id: 'benq-th671st',
        name: 'BenQ TH671ST Proyector Gaming Full HD Tiro Corto',
        brand: 'BenQ',
        category: 'gaming',
        price: 1899000,
        originalPrice: 2199000,
        image: 'templates/proyectores-2.webp',
        rating: 4.5,
        reviews: 187,
        features: ['Full HD', '3000 lúmenes', 'Tiro corto', '8ms'],
        specifications: {
            tipo: 'Gaming Tiro Corto',
            resolucion: 'Full HD 1080p',
            tecnologia: 'DLP',
            lumenes: '3000',
            latencia: '8ms',
            conectividad: ['HDMI', 'VGA', 'USB']
        },
        tags: ['gaming', 'tiro', 'corto', 'full', 'hd'],
        discount: 14
    },
    {
        id: 'sony-mp-cd1',
        name: 'Sony MP-CD1 Proyector Portátil Pico',
        brand: 'Sony',
        category: 'portatil',
        price: 799000,
        originalPrice: 999000,
        image: 'templates/proyectores-2.webp',
        rating: 4.1,
        reviews: 367,
        features: ['WVGA', '105 lúmenes', 'DLP Pico', 'HDMI'],
        specifications: {
            tipo: 'Pico Portátil',
            resolucion: 'WVGA',
            tecnologia: 'DLP Pico',
            lumenes: '105',
            peso: '0.28 kg',
            conectividad: ['HDMI', 'USB']
        },
        tags: ['pico', 'portatil', 'compacto', 'dlp'],
        discount: 20
    },
    {
        id: 'viewsonic-px747-4k',
        name: 'ViewSonic PX747-4K Proyector Gaming 4K',
        brand: 'ViewSonic',
        category: 'gaming',
        price: 2199000,
        originalPrice: 2599000,
        image: 'templates/proyectores-2.webp',
        rating: 4.6,
        reviews: 234,
        features: ['4K UHD', '3500 lúmenes', '4.2ms', 'HDR'],
        specifications: {
            tipo: 'Gaming 4K',
            resolucion: '4K UHD',
            tecnologia: 'DLP',
            lumenes: '3500',
            latencia: '4.2ms',
            conectividad: ['HDMI 2.0', 'VGA', 'USB']
        },
        tags: ['4k', 'gaming', 'hdr', 'baja', 'latencia'],
        discount: 15
    },
    {
        id: 'epson-powerlite-2247u',
        name: 'Epson PowerLite 2247U Proyector WUXGA Inalámbrico',
        brand: 'Epson',
        category: 'oficina',
        price: 3199000,
        originalPrice: 3699000,
        image: 'templates/proyectores-2.webp',
        rating: 4.4,
        reviews: 156,
        features: ['WUXGA', '4200 lúmenes', 'WiFi dual', 'Miracast'],
        specifications: {
            tipo: 'Instalación/Oficina',
            resolucion: 'WUXGA',
            tecnologia: 'LCD',
            lumenes: '4200',
            conectividadWifi: 'Dual-band',
            conectividad: ['HDMI', 'VGA', 'WiFi', 'USB', 'LAN']
        },
        tags: ['wuxga', 'wifi', 'instalacion', 'inalambrico'],
        discount: 14
    },
    {
        id: 'optoma-ml750st',
        name: 'Optoma ML750ST Proyector LED Tiro Corto',
        brand: 'Optoma',
        category: 'portatil',
        price: 1299000,
        originalPrice: 1599000,
        image: 'templates/proyectores-2.webp',
        rating: 4.3,
        reviews: 278,
        features: ['WXGA', '700 lúmenes', 'LED', 'Tiro corto'],
        specifications: {
            tipo: 'LED Tiro Corto',
            resolucion: 'WXGA',
            tecnologia: 'LED',
            lumenes: '700',
            distanciaTiro: '0.8m para 100"',
            conectividad: ['HDMI', 'VGA', 'USB', 'MicroSD']
        },
        tags: ['led', 'tiro', 'corto', 'portatil', 'wxga'],
        discount: 19
    },
    {
        id: 'lg-bf50nst',
        name: 'LG ProBeam BF50NST Proyector Láser 4K',
        brand: 'LG',
        category: 'oficina',
        price: 5499000,
        originalPrice: 6299000,
        image: 'templates/proyectores-2.webp',
        rating: 4.7,
        reviews: 89,
        features: ['4K UHD', 'Láser 5000 lúmenes', 'webOS', 'HDBaseT'],
        specifications: {
            tipo: 'Profesional 4K',
            resolucion: '4K UHD',
            tecnologia: 'Láser',
            lumenes: '5000',
            sistemaOperativo: 'webOS',
            conectividad: ['HDMI', 'HDBaseT', 'USB', 'LAN']
        },
        tags: ['4k', 'laser', 'profesional', 'webos'],
        discount: 13
    },
    {
        id: 'benq-gv30',
        name: 'BenQ GV30 Proyector LED Portátil con Altavoz',
        brand: 'BenQ',
        category: 'portatil',
        price: 1499000,
        originalPrice: 1799000,
        image: 'templates/proyectores-2.webp',
        rating: 4.4,
        reviews: 345,
        features: ['720p', '300 lúmenes', 'LED', 'Altavoz Bluetooth'],
        specifications: {
            tipo: 'Portátil Multimedia',
            resolucion: 'HD 720p',
            tecnologia: 'LED',
            lumenes: '300',
            audio: 'Altavoz Bluetooth integrado',
            conectividad: ['USB-C', 'HDMI', 'WiFi', 'Bluetooth']
        },
        tags: ['portatil', 'led', 'altavoz', 'bluetooth', '720p'],
        discount: 17
    },
    {
        id: 'sony-vpl-fhz75',
        name: 'Sony VPL-FHZ75 Proyector Láser WUXGA',
        brand: 'Sony',
        category: 'oficina',
        price: 7999000,
        originalPrice: 9199000,
        image: 'templates/proyectores-2.webp',
        rating: 4.8,
        reviews: 45,
        features: ['WUXGA', 'Láser 6500 lúmenes', 'Reality Creation', 'HDBaseT'],
        specifications: {
            tipo: 'Instalación Profesional',
            resolucion: 'WUXGA',
            tecnologia: 'Láser',
            lumenes: '6500',
            vidaUtil: '20,000 horas',
            conectividad: ['HDMI', 'HDBaseT', 'DVI-D', 'LAN']
        },
        tags: ['laser', 'profesional', 'alta', 'luminosidad', 'instalacion'],
        discount: 13
    },
    {
        id: 'viewsonic-pa503w',
        name: 'ViewSonic PA503W Proyector WXGA Básico',
        brand: 'ViewSonic',
        category: 'oficina',
        price: 899000,
        originalPrice: 1099000,
        image: 'templates/proyectores-2.webp',
        rating: 4.2,
        reviews: 267,
        features: ['WXGA', '3600 lúmenes', 'DLP', 'Económico'],
        specifications: {
            tipo: 'Básico/Educación',
            resolucion: 'WXGA',
            tecnologia: 'DLP',
            lumenes: '3600',
            lamparaVida: '15,000 horas (Eco)',
            conectividad: ['HDMI', 'VGA', 'USB', 'Audio']
        },
        tags: ['basico', 'wxga', 'economico', 'educacion'],
        discount: 18
    },
    {
        id: 'epson-ef-100batv',
        name: 'Epson EF-100B Android TV Proyector Láser',
        brand: 'Epson',
        category: 'cine-casa',
        price: 2599000,
        originalPrice: 2999000,
        image: 'templates/proyectores-2.webp',
        rating: 4.6,
        reviews: 178,
        features: ['Full HD', 'Láser 2000 lúmenes', 'Android TV', 'Yamaha Audio'],
        specifications: {
            tipo: 'Smart Láser',
            resolucion: 'Full HD 1080p',
            tecnologia: 'Láser',
            lumenes: '2000',
            sistemaOperativo: 'Android TV',
            conectividad: ['HDMI', 'USB', 'WiFi', 'Bluetooth']
        },
        tags: ['laser', 'android', 'tv', 'smart', 'full', 'hd'],
        discount: 13
    },
    {
        id: 'optoma-zh406st',
        name: 'Optoma ZH406ST Proyector Láser Tiro Corto',
        brand: 'Optoma',
        category: 'oficina',
        price: 4799000,
        originalPrice: 5499000,
        image: 'templates/proyectores-2.webp',
        rating: 4.5,
        reviews: 67,
        features: ['Full HD', 'Láser 4200 lúmenes', 'Tiro corto', '30,000h'],
        specifications: {
            tipo: 'Láser Tiro Corto',
            resolucion: 'Full HD 1080p',
            tecnologia: 'Láser DLP',
            lumenes: '4200',
            distanciaTiro: '0.25:1',
            conectividad: ['HDMI', 'VGA', 'USB', 'LAN']
        },
        tags: ['laser', 'tiro', 'corto', 'profesional', 'full', 'hd'],
        discount: 13
    }
];

// State management
let filteredProducts = [...proyectoresProducts];
let currentPage = 1;
const productsPerPage = 12;

// DOM elements
const productGrid = document.getElementById('productGrid');
const categoryButtons = document.querySelectorAll('.proyectores-cat-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const priceRange = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceDisplay');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderProducts();
    setupEventListeners();
    updatePriceDisplay();
    
    // Activate first category
    if (categoryButtons.length > 0) {
        categoryButtons[0].classList.add('active');
        filterByCategory(categoryButtons[0].dataset.category);
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

    // Price filter
    if (priceRange) {
        priceRange.addEventListener('input', () => {
            updatePriceDisplay();
            applyFilters();
        });
    }

    // Checkbox filters
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Filter functions
function filterByCategory(category) {
    if (category === 'todos') {
        filteredProducts = [...proyectoresProducts];
    } else {
        filteredProducts = proyectoresProducts.filter(product => 
            product.category === category
        );
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredProducts];

    // Apply price filter
    if (priceRange) {
        const maxPrice = parseInt(priceRange.value);
        filtered = filtered.filter(product => product.price <= maxPrice);
    }

    // Apply brand filters
    const selectedBrands = getSelectedFilters('brand');
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => 
            selectedBrands.includes(product.brand.toLowerCase())
        );
    }

    // Apply resolution filters
    const selectedResolutions = getSelectedFilters('resolution');
    if (selectedResolutions.length > 0) {
        filtered = filtered.filter(product =>
            selectedResolutions.some(res => 
                product.specifications.resolucion.toLowerCase().includes(res)
            )
        );
    }

    // Apply technology filters
    const selectedTechnologies = getSelectedFilters('technology');
    if (selectedTechnologies.length > 0) {
        filtered = filtered.filter(product =>
            selectedTechnologies.some(tech => 
                product.specifications.tecnologia.toLowerCase().includes(tech)
            )
        );
    }

    // Apply feature filters
    const selectedFeatures = getSelectedFilters('features');
    if (selectedFeatures.length > 0) {
        filtered = filtered.filter(product =>
            selectedFeatures.some(feature =>
                product.features.some(f => 
                    f.toLowerCase().includes(feature)
                ) ||
                product.tags.some(tag => 
                    tag.toLowerCase().includes(feature)
                )
            )
        );
    }

    filteredProducts = filtered;
    currentPage = 1;
    sortProducts();
}

function getSelectedFilters(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

// Sorting
function sortProducts() {
    const sortValue = sortSelect ? sortSelect.value : 'featured';
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
            break;
        default: // featured
            filteredProducts.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
    }
    
    renderProducts();
}

// Rendering functions
function renderProducts() {
    if (!productGrid) return;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">No se encontraron productos</h3>
                <p class="text-muted">Intenta ajustar los filtros para encontrar lo que buscas.</p>
            </div>
        `;
        updateResultsCount(0);
        return;
    }

    productGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    updateResultsCount(filteredProducts.length);
    renderPagination();
    
    // Add event listeners to new cards
    setupProductCardListeners();
}

function createProductCard(product) {
    const discountBadge = product.discount ? 
        `<div class="discount-badge">${product.discount}% OFF</div>` : '';

    const originalPriceHTML = product.originalPrice ? 
        `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : '';

    return `
        <div class="col">
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h5 class="product-name">${product.name}</h5>
                    <div class="product-features mb-2">
                        ${createFeatureBadges(product)}
                    </div>
                    <div class="price-section">
                        <span class="current-price">$${product.price.toLocaleString()}</span>
                        ${originalPriceHTML}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${createStarRating(product.rating)}
                        </div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <button class="btn btn-add-cart w-100" onclick="addToCart('${product.id}')">
                        <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createFeatureBadges(product) {
    const badges = [];
    
    // Add category-specific badges
    if (product.specifications.tipo) {
        badges.push(`<span class="feature-badge type-badge">${product.specifications.tipo}</span>`);
    }
    
    if (product.specifications.resolucion) {
        badges.push(`<span class="feature-badge resolution-badge">${product.specifications.resolucion}</span>`);
    }
    
    if (product.specifications.tecnologia) {
        badges.push(`<span class="feature-badge tech-badge">${product.specifications.tecnologia}</span>`);
    }
    
    if (product.specifications.lumenes) {
        badges.push(`<span class="feature-badge highlight">${product.specifications.lumenes} lúmenes</span>`);
    }
    
    // Add connectivity badges
    if (product.specifications.conectividad && product.specifications.conectividad.includes('WiFi')) {
        badges.push(`<span class="feature-badge connectivity">WiFi</span>`);
    }
    
    if (product.specifications.conectividad && product.specifications.conectividad.includes('Bluetooth')) {
        badges.push(`<span class="feature-badge connectivity">Bluetooth</span>`);
    }
    
    // Gaming specific badges
    if (product.category === 'gaming' && product.specifications.latencia) {
        badges.push(`<span class="feature-badge highlight">${product.specifications.latencia}</span>`);
    }
    
    return badges.slice(0, 4).join(''); // Limit to 4 badges
}

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="bi bi-star"></i>';
    }
    
    return stars;
}

// Utility functions
function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `${count} productos encontrados`;
    }
}

function updatePriceDisplay() {
    if (priceRange && priceDisplay) {
        const value = parseInt(priceRange.value);
        priceDisplay.innerHTML = `
            <span>Precio máximo:</span>
            <span class="price-current">$${value.toLocaleString()}</span>
        `;
    }
}

function initializeFilters() {
    // Set price range max value
    if (priceRange) {
        const maxPrice = Math.max(...proyectoresProducts.map(p => p.price));
        priceRange.max = maxPrice;
        priceRange.value = maxPrice;
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
    
    let paginationHTML = '<nav aria-label="Navegación de productos"><ul class="pagination justify-content-center">';
    
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
    
    paginationHTML += '</ul></nav>';
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        // Scroll to top of products
        document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Product interaction
function setupProductCardListeners() {
    // Add hover effects and click handlers
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function addToCart(productId) {
    const product = proyectoresProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
    
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
            quantity: 1
        });
    }
    
    // Save cart
    localStorage.setItem('alkosto-cart', JSON.stringify(cart));
    
    // Show feedback
    showAddToCartFeedback(product.name);
    updateCartCount();
}

function showAddToCartFeedback(productName) {
    // Create and show toast notification
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = `
        top: 20px; right: 20px; z-index: 9999;
        background: linear-gradient(135deg, var(--proyectores-secondary), var(--proyectores-accent));
    `;
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-check-circle me-2"></i>
                ${productName} agregado al carrito
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
    
    // Update cart badge in header (if exists)
    const cartBadge = document.querySelector('.cart-count');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Search functionality (if search box exists)
function searchProducts(query) {
    if (!query) {
        filteredProducts = [...proyectoresProducts];
    } else {
        const searchTerm = query.toLowerCase();
        filteredProducts = proyectoresProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderProducts();
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);