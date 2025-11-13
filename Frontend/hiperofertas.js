// Hiperofertas Page JavaScript

// Flash Deals Data
const flashDeals = [
    {
        id: 'samsung-tv-75-flash',
        name: 'Samsung Smart TV 75" Crystal UHD 4K',
        brand: 'Samsung',
        category: 'tecnologia',
        dealType: 'flash',
        currentPrice: 2399000,
        originalPrice: 3999000,
        discount: 40,
        savings: 1600000,
        image: 'templates/tv tcl 50.webp',
        rating: 4.8,
        reviews: 2341,
        stock: 15,
        maxStock: 50,
        timeLeft: {
            hours: 23,
            minutes: 45,
            seconds: 30
        },
        urgency: 'Solo quedan 15 unidades',
        features: ['4K Crystal UHD', 'Smart TV', 'HDR10+', 'Control por Voz'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'iphone-14-liquidacion',
        name: 'iPhone 14 128GB - Liquidación Final',
        brand: 'Apple',
        category: 'tecnologia',
        dealType: 'liquidacion',
        currentPrice: 3299000,
        originalPrice: 4599000,
        discount: 28,
        savings: 1300000,
        image: 'templates/celulares.webp',
        rating: 4.9,
        reviews: 5432,
        stock: 8,
        maxStock: 25,
        timeLeft: {
            hours: 12,
            minutes: 30,
            seconds: 15
        },
        urgency: 'Últimas 8 unidades disponibles',
        features: ['128GB', 'Cámara Dual', 'A15 Bionic', 'Face ID'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'nevera-lg-combo',
        name: 'LG Nevera Side by Side + Lavadora Combo',
        brand: 'LG',
        category: 'hogar',
        dealType: 'bundle',
        currentPrice: 4599000,
        originalPrice: 6899000,
        discount: 33,
        savings: 2300000,
        image: 'templates/lavadora.webp',
        rating: 4.7,
        reviews: 1876,
        stock: 22,
        maxStock: 40,
        timeLeft: {
            hours: 48,
            minutes: 15,
            seconds: 45
        },
        urgency: 'Combo exclusivo por tiempo limitado',
        features: ['Nevera 635L', 'Lavadora 17kg', 'Inverter', 'Smart Diagnosis'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'macbook-pro-oferta',
        name: 'MacBook Pro 13" M2 - Oferta Especial',
        brand: 'Apple',
        category: 'tecnologia',
        dealType: 'exclusive',
        currentPrice: 5799000,
        originalPrice: 7299000,
        discount: 21,
        savings: 1500000,
        image: 'templates/macbook.webp',
        rating: 4.9,
        reviews: 987,
        stock: 12,
        maxStock: 30,
        timeLeft: {
            hours: 36,
            minutes: 20,
            seconds: 10
        },
        urgency: 'Descuento exclusivo web',
        features: ['Chip M2', '8GB RAM', '256GB SSD', 'Touch Bar'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'sony-audifonos-flash',
        name: 'Sony WH-1000XM4 Cancelación Ruido',
        brand: 'Sony',
        category: 'tecnologia',
        dealType: 'flash',
        currentPrice: 699000,
        originalPrice: 1199000,
        discount: 42,
        savings: 500000,
        image: 'templates/c-audifonos.webp',
        rating: 4.8,
        reviews: 3654,
        stock: 5,
        maxStock: 20,
        timeLeft: {
            hours: 6,
            minutes: 45,
            seconds: 20
        },
        urgency: '¡Solo 5 unidades restantes!',
        features: ['Cancelación Ruido', '30h Batería', 'Bluetooth 5.0', 'Hi-Res Audio'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'whirlpool-combo-cocina',
        name: 'Whirlpool Estufa + Microondas + Campana',
        brand: 'Whirlpool',
        category: 'hogar',
        dealType: 'bundle',
        currentPrice: 2899000,
        originalPrice: 4299000,
        discount: 33,
        savings: 1400000,
        image: 'templates/tostadora.webp',
        rating: 4.6,
        reviews: 1234,
        stock: 18,
        maxStock: 35,
        timeLeft: {
            hours: 72,
            minutes: 10,
            seconds: 30
        },
        urgency: 'Pack completo para tu cocina',
        features: ['Estufa 6 Puestos', 'Microondas 1.1 CF', 'Campana 60cm', 'Instalación Gratis'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'nintendo-switch-oled',
        name: 'Nintendo Switch OLED + 3 Juegos',
        brand: 'Nintendo',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 1899000,
        originalPrice: 2599000,
        discount: 27,
        savings: 700000,
        image: 'templates/consola.webp',
        rating: 4.9,
        reviews: 4567,
        stock: 25,
        maxStock: 50,
        timeLeft: {
            hours: 24,
            minutes: 30,
            seconds: 45
        },
        urgency: 'Bundle gamer imperdible',
        features: ['Pantalla OLED 7"', 'Mario Kart 8', 'Zelda BOTW', 'Super Mario Odyssey'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'samsung-galaxy-s23',
        name: 'Samsung Galaxy S23 Ultra 256GB',
        brand: 'Samsung',
        category: 'tecnologia',
        dealType: 'flash',
        currentPrice: 4299000,
        originalPrice: 5799000,
        discount: 26,
        savings: 1500000,
        image: 'templates/celulares.webp',
        rating: 4.8,
        reviews: 2987,
        stock: 10,
        maxStock: 40,
        timeLeft: {
            hours: 18,
            minutes: 15,
            seconds: 55
        },
        urgency: 'Oferta flash - Pocas unidades',
        features: ['256GB', 'Cámara 200MP', 'S Pen', 'Snapdragon 8 Gen 2'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'lg-oled-55-liquidacion',
        name: 'LG OLED 55" C3 4K - Fin de Stock',
        brand: 'LG',
        category: 'tecnologia',
        dealType: 'final-stock',
        currentPrice: 4599000,
        originalPrice: 6999000,
        discount: 34,
        savings: 2400000,
        image: 'templates/tv tcl 50.webp',
        rating: 4.9,
        reviews: 1654,
        stock: 3,
        maxStock: 15,
        timeLeft: {
            hours: 96,
            minutes: 45,
            seconds: 12
        },
        urgency: '¡Últimas 3 unidades en stock!',
        features: ['OLED 4K', 'Dolby Vision', 'webOS 23', 'HDMI 2.1'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'dyson-v15-aspiradora',
        name: 'Dyson V15 Detect Aspiradora Inalámbrica',
        brand: 'Dyson',
        category: 'hogar',
        dealType: 'exclusive',
        currentPrice: 2299000,
        originalPrice: 2999000,
        discount: 23,
        savings: 700000,
        image: 'templates/electrohogar.webp',
        rating: 4.8,
        reviews: 876,
        stock: 14,
        maxStock: 25,
        timeLeft: {
            hours: 60,
            minutes: 30,
            seconds: 25
        },
        urgency: 'Tecnología láser exclusiva',
        features: ['Detección Láser', '60min Autonomía', 'Filtración HEPA', '5 Accesorios'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'playstation-5-bundle',
        name: 'PlayStation 5 + Spider-Man 2 + Control Extra',
        brand: 'Sony',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 3299000,
        originalPrice: 4199000,
        discount: 21,
        savings: 900000,
        image: 'templates/consola.webp',
        rating: 4.9,
        reviews: 3421,
        stock: 8,
        maxStock: 20,
        timeLeft: {
            hours: 30,
            minutes: 45,
            seconds: 15
        },
        urgency: 'Bundle PS5 muy limitado',
        features: ['PlayStation 5', 'Spider-Man 2', 'Control DualSense Extra', 'Garantía 1 año'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'airpods-pro-2-flash',
        name: 'Apple AirPods Pro 2da Gen - Flash Sale',
        brand: 'Apple',
        category: 'tecnologia',
        dealType: 'flash',
        currentPrice: 899000,
        originalPrice: 1299000,
        discount: 31,
        savings: 400000,
        image: 'templates/c-audifonos.webp',
        rating: 4.9,
        reviews: 5432,
        stock: 20,
        maxStock: 50,
        timeLeft: {
            hours: 8,
            minutes: 20,
            seconds: 40
        },
        urgency: 'Flash sale - 8 horas restantes',
        features: ['Cancelación Adaptativa', 'Audio Espacial', 'MagSafe Case', 'Resistente al Agua'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'robot-aspiradora-xiaomi',
        name: 'Xiaomi Robot Aspiradora S10+ Con Base',
        brand: 'Xiaomi',
        category: 'hogar',
        dealType: 'flash',
        currentPrice: 1599000,
        originalPrice: 2299000,
        discount: 30,
        savings: 700000,
        image: 'templates/electrohogar.webp',
        rating: 4.7,
        reviews: 2145,
        stock: 12,
        maxStock: 30,
        timeLeft: {
            hours: 14,
            minutes: 55,
            seconds: 30
        },
        urgency: 'Limpieza automática inteligente',
        features: ['Mapeo Láser', 'Base Auto-vaciado', 'App Control', '5200Pa Succión'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'monitor-gaming-asus',
        name: 'ASUS ROG Gaming Monitor 27" 144Hz',
        brand: 'ASUS',
        category: 'tecnologia',
        dealType: 'exclusive',
        currentPrice: 1299000,
        originalPrice: 1799000,
        discount: 28,
        savings: 500000,
        image: 'templates/c-computadores.webp',
        rating: 4.8,
        reviews: 1876,
        stock: 16,
        maxStock: 25,
        timeLeft: {
            hours: 48,
            minutes: 10,
            seconds: 20
        },
        urgency: 'Monitor gamer profesional',
        features: ['27" QHD', '144Hz', '1ms Response', 'G-Sync Compatible'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'cafetera-nespresso-vertuo',
        name: 'Nespresso Vertuo Next + 100 Cápsulas',
        brand: 'Nespresso',
        category: 'hogar',
        dealType: 'bundle',
        currentPrice: 599000,
        originalPrice: 899000,
        discount: 33,
        savings: 300000,
        image: 'templates/tostadora.webp',
        rating: 4.6,
        reviews: 3210,
        stock: 35,
        maxStock: 60,
        timeLeft: {
            hours: 120,
            minutes: 30,
            seconds: 45
        },
        urgency: 'Café premium en casa',
        features: ['Vertuo Next', '100 Cápsulas', '5 Tamaños Café', 'Bluetooth Connect'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'tablet-ipad-air-5',
        name: 'iPad Air 5ta Gen 64GB WiFi + Teclado',
        brand: 'Apple',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 2799000,
        originalPrice: 3599000,
        discount: 22,
        savings: 800000,
        image: 'templates/c-computadores.webp',
        rating: 4.9,
        reviews: 1654,
        stock: 18,
        maxStock: 40,
        timeLeft: {
            hours: 42,
            minutes: 25,
            seconds: 10
        },
        urgency: 'Bundle productividad completo',
        features: ['Chip M1', '64GB', 'Pantalla 10.9"', 'Magic Keyboard incluido'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'smart-watch-galaxy-6',
        name: 'Samsung Galaxy Watch6 44mm + Correas Extra',
        brand: 'Samsung',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 899000,
        originalPrice: 1299000,
        discount: 31,
        savings: 400000,
        image: 'templates/reloj HUAWEI.webp',
        rating: 4.7,
        reviews: 2987,
        stock: 24,
        maxStock: 45,
        timeLeft: {
            hours: 66,
            minutes: 40,
            seconds: 55
        },
        urgency: 'Smartwatch premium con extras',
        features: ['44mm', 'GPS + Bluetooth', '3 Correas Extra', 'Sensor Salud Avanzado'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'freidora-aire-philips',
        name: 'Philips Airfryer XXL 7.3L Digital',
        brand: 'Philips',
        category: 'hogar',
        dealType: 'flash',
        currentPrice: 699000,
        originalPrice: 999000,
        discount: 30,
        savings: 300000,
        image: 'templates/tostadora.webp',
        rating: 4.8,
        reviews: 4321,
        stock: 28,
        maxStock: 50,
        timeLeft: {
            hours: 10,
            minutes: 15,
            seconds: 35
        },
        urgency: 'Cocina saludable para toda la familia',
        features: ['7.3L Capacidad', 'Tecnología TurboStar', 'App NutriU', '90% Menos Grasa'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'bose-soundbar-700',
        name: 'Bose Soundbar 700 + Módulo Bass',
        brand: 'Bose',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 2299000,
        originalPrice: 3199000,
        discount: 28,
        savings: 900000,
        image: 'templates/c-audio.webp',
        rating: 4.9,
        reviews: 876,
        stock: 11,
        maxStock: 20,
        timeLeft: {
            hours: 54,
            minutes: 30,
            seconds: 20
        },
        urgency: 'Audio premium para tu hogar',
        features: ['Soundbar 700', 'Bass Module 700', 'Alexa Built-in', 'AdaptIQ Audio'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'gopro-hero-12-kit',
        name: 'GoPro HERO12 Black + Accesorios Travel Kit',
        brand: 'GoPro',
        category: 'tecnologia',
        dealType: 'bundle',
        currentPrice: 1899000,
        originalPrice: 2599000,
        discount: 27,
        savings: 700000,
        image: 'templates/c-camera-2.webp',
        rating: 4.8,
        reviews: 1543,
        stock: 19,
        maxStock: 35,
        timeLeft: {
            hours: 78,
            minutes: 45,
            seconds: 15
        },
        urgency: 'Kit aventura completo',
        features: ['HERO12 Black', 'Travel Kit', 'MicroSD 128GB', 'Batería Extra'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'auriculares-beats-studio-3',
        name: 'Beats Studio3 Wireless Noise Cancelling',
        brand: 'Beats',
        category: 'tecnologia',
        dealType: 'liquidacion',
        currentPrice: 899000,
        originalPrice: 1399000,
        discount: 36,
        savings: 500000,
        image: 'templates/c-audifonos.webp',
        rating: 4.7,
        reviews: 2765,
        stock: 7,
        maxStock: 15,
        timeLeft: {
            hours: 20,
            minutes: 10,
            seconds: 45
        },
        urgency: 'Liquidación final - Quedan 7',
        features: ['Noise Cancelling', 'Chip W1', '40h Batería', 'Fast Fuel 10min = 3h'],
        flashDeal: false,
        exclusive: false
    },
    {
        id: 'aspiradora-robot-roomba',
        name: 'iRobot Roomba j7+ Auto-Empty',
        brand: 'iRobot',
        category: 'hogar',
        dealType: 'exclusive',
        currentPrice: 3299000,
        originalPrice: 4299000,
        discount: 23,
        savings: 1000000,
        image: 'templates/electrohogar.webp',
        rating: 4.9,
        reviews: 987,
        stock: 9,
        maxStock: 15,
        timeLeft: {
            hours: 90,
            minutes: 20,
            seconds: 30
        },
        urgency: 'Tecnología IA más avanzada',
        features: ['IA Obstacle Avoidance', 'Auto-Empty Base', 'App Control', 'Pet Owner Promise'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'projector-epson-4k',
        name: 'Epson Home Cinema 4K PRO-UHD',
        brand: 'Epson',
        category: 'tecnologia',
        dealType: 'flash',
        currentPrice: 2799000,
        originalPrice: 3999000,
        discount: 30,
        savings: 1200000,
        image: 'templates/proyectores-2.webp',
        rating: 4.8,
        reviews: 654,
        stock: 6,
        maxStock: 12,
        timeLeft: {
            hours: 16,
            minutes: 35,
            seconds: 50
        },
        urgency: 'Cine en casa 4K real',
        features: ['4K PRO-UHD', '3000 Lumens', 'HDR10', '3LCD Technology'],
        flashDeal: true,
        exclusive: false
    },
    {
        id: 'silla-gamer-secretlab',
        name: 'Secretlab TITAN Evo 2022 Gaming Chair',
        brand: 'Secretlab',
        category: 'moda',
        dealType: 'exclusive',
        currentPrice: 1899000,
        originalPrice: 2399000,
        discount: 21,
        savings: 500000,
        image: 'templates/c-muebles.webp',
        rating: 4.9,
        reviews: 3210,
        stock: 13,
        maxStock: 25,
        timeLeft: {
            hours: 72,
            minutes: 15,
            seconds: 25
        },
        urgency: 'Silla gamer profesional',
        features: ['NEO Hybrid Leatherette', 'Magnetic Head Pillow', '4-Way L-ADAPT', 'Cold-Cure Foam'],
        flashDeal: false,
        exclusive: true
    },
    {
        id: 'lavadora-secadora-lg',
        name: 'LG Lavadora-Secadora All-in-One 22kg',
        brand: 'LG',
        category: 'hogar',
        dealType: 'liquidacion',
        currentPrice: 4599000,
        originalPrice: 6299000,
        discount: 27,
        savings: 1700000,
        image: 'templates/lavadora.webp',
        rating: 4.7,
        reviews: 1432,
        stock: 4,
        maxStock: 10,
        timeLeft: {
            hours: 36,
            minutes: 50,
            seconds: 40
        },
        urgency: 'Últimas 4 unidades disponibles',
        features: ['22kg Capacidad', 'AI DD Motor', 'Steam Technology', 'Smart Diagnosis'],
        flashDeal: false,
        exclusive: false
    }
];

// State management
let filteredDeals = [...flashDeals];
let currentPage = 1;
const dealsPerPage = 12;

// DOM elements
const dealsGrid = document.getElementById('dealsGrid');
const categoryButtons = document.querySelectorAll('.hiperofertas-cat-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');

// Timer elements
const countdownTimer = document.getElementById('countdownTimer');
const flashCountdown = document.getElementById('flashCountdown');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderDeals();
    setupEventListeners();
    startCountdownTimers();
    updateTimeDisplays();
    
    // Activate first category
    if (categoryButtons.length > 0) {
        categoryButtons[0].classList.add('active');
        filterByCategory(categoryButtons[0].dataset.category);
    }
    
    // Update timers every second
    setInterval(updateCountdowns, 1000);
    setInterval(updateTimeDisplays, 60000); // Update "updated time" every minute
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
            
            // Filter deals
            filterByCategory(btn.dataset.category);
        });
    });

    // Sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', sortDeals);
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchDeals(e.target.value);
        });
    }

    // Checkbox filters
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Timer functions
function startCountdownTimers() {
    // Main hero countdown
    updateMainCountdown();
    
    // Flash alert countdown
    updateFlashCountdown();
}

function updateMainCountdown() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    if (hours && minutes && seconds) {
        // Get current values and decrement
        let h = parseInt(hours.textContent);
        let m = parseInt(minutes.textContent);
        let s = parseInt(seconds.textContent);
        
        s--;
        if (s < 0) {
            s = 59;
            m--;
            if (m < 0) {
                m = 59;
                h--;
                if (h < 0) {
                    h = 0;
                    m = 0;
                    s = 0;
                }
            }
        }
        
        hours.textContent = h.toString().padStart(2, '0');
        minutes.textContent = m.toString().padStart(2, '0');
        seconds.textContent = s.toString().padStart(2, '0');
    }
}

function updateFlashCountdown() {
    const flashElement = document.getElementById('flashCountdown');
    if (flashElement) {
        // Parse current time (format: HH:MM:SS)
        const timeStr = flashElement.textContent;
        const [h, m, s] = timeStr.split(':').map(Number);
        
        let totalSeconds = h * 3600 + m * 60 + s - 1;
        
        if (totalSeconds < 0) totalSeconds = 0;
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        flashElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateCountdowns() {
    updateMainCountdown();
    updateFlashCountdown();
    
    // Update individual deal countdowns
    document.querySelectorAll('.timer-value').forEach(timer => {
        const timeStr = timer.textContent;
        if (timeStr.includes(':')) {
            const [h, m, s] = timeStr.split(':').map(Number);
            let totalSeconds = h * 3600 + m * 60 + s - 1;
            
            if (totalSeconds < 0) totalSeconds = 0;
            
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            timer.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    });
}

function updateTimeDisplays() {
    const updateTimeElement = document.getElementById('updateTime');
    if (updateTimeElement) {
        const currentTime = parseInt(updateTimeElement.textContent);
        updateTimeElement.textContent = `${currentTime + 1} min`;
    }
}

// Filter functions
function filterByCategory(category) {
    if (category === 'todos') {
        filteredDeals = [...flashDeals];
    } else {
        filteredDeals = flashDeals.filter(deal => 
            deal.category === category || deal.dealType === category
        );
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredDeals];

    // Apply discount filters
    const selectedDiscounts = getSelectedFilters('discount');
    if (selectedDiscounts.length > 0) {
        filtered = filtered.filter(deal => {
            return selectedDiscounts.some(discountRange => {
                const discount = deal.discount;
                switch(discountRange) {
                    case '70': return discount >= 70;
                    case '50': return discount >= 50 && discount < 70;
                    case '30': return discount >= 30 && discount < 50;
                    case '15': return discount >= 15 && discount < 30;
                    default: return false;
                }
            });
        });
    }

    // Apply price range filters
    const selectedPriceRanges = getSelectedFilters('price-range');
    if (selectedPriceRanges.length > 0) {
        filtered = filtered.filter(deal => {
            return selectedPriceRanges.some(range => {
                const price = deal.currentPrice;
                switch(range) {
                    case '100000': return price < 100000;
                    case '500000': return price >= 100000 && price < 500000;
                    case '1000000': return price >= 500000 && price < 1000000;
                    case '1000001': return price >= 1000000;
                    default: return false;
                }
            });
        });
    }

    // Apply brand filters
    const selectedBrands = getSelectedFilters('brand');
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(deal => 
            selectedBrands.includes(deal.brand.toLowerCase())
        );
    }

    // Apply deal type filters
    const selectedDealTypes = getSelectedFilters('deal-type');
    if (selectedDealTypes.length > 0) {
        filtered = filtered.filter(deal =>
            selectedDealTypes.includes(deal.dealType)
        );
    }

    // Apply stock filters
    const selectedStock = getSelectedFilters('stock');
    if (selectedStock.length > 0) {
        filtered = filtered.filter(deal => {
            const stockPercentage = (deal.stock / deal.maxStock) * 100;
            return selectedStock.some(stockType => {
                switch(stockType) {
                    case 'available': return stockPercentage > 20;
                    case 'low': return stockPercentage <= 20 && stockPercentage > 10;
                    case 'last': return stockPercentage <= 10;
                    default: return false;
                }
            });
        });
    }

    filteredDeals = filtered;
    currentPage = 1;
    sortDeals();
}

function getSelectedFilters(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
}

// Search functionality
function searchDeals(query) {
    if (!query) {
        filteredDeals = [...flashDeals];
    } else {
        const searchTerm = query.toLowerCase();
        filteredDeals = flashDeals.filter(deal => 
            deal.name.toLowerCase().includes(searchTerm) ||
            deal.brand.toLowerCase().includes(searchTerm) ||
            deal.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderDeals();
}

// Sorting
function sortDeals() {
    const sortValue = sortSelect ? sortSelect.value : 'featured';
    
    switch (sortValue) {
        case 'discount':
            filteredDeals.sort((a, b) => b.discount - a.discount);
            break;
        case 'price-low':
            filteredDeals.sort((a, b) => a.currentPrice - b.currentPrice);
            break;
        case 'price-high':
            filteredDeals.sort((a, b) => b.currentPrice - a.currentPrice);
            break;
        case 'ending-soon':
            filteredDeals.sort((a, b) => {
                const aTime = a.timeLeft.hours * 60 + a.timeLeft.minutes;
                const bTime = b.timeLeft.hours * 60 + b.timeLeft.minutes;
                return aTime - bTime;
            });
            break;
        case 'newest':
            // Simulate newest by reversing order
            filteredDeals.reverse();
            break;
        case 'rating':
            filteredDeals.sort((a, b) => b.rating - a.rating);
            break;
        default: // featured
            filteredDeals.sort((a, b) => {
                // Prioritize flash deals and high discounts
                const aScore = (a.flashDeal ? 100 : 0) + a.discount + (a.rating * 10);
                const bScore = (b.flashDeal ? 100 : 0) + b.discount + (b.rating * 10);
                return bScore - aScore;
            });
    }
    
    renderDeals();
}

// Rendering functions
function renderDeals() {
    if (!dealsGrid) return;

    const startIndex = (currentPage - 1) * dealsPerPage;
    const endIndex = startIndex + dealsPerPage;
    const dealsToShow = filteredDeals.slice(startIndex, endIndex);

    if (dealsToShow.length === 0) {
        dealsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">No se encontraron ofertas</h3>
                <p class="text-muted">Intenta ajustar los filtros o revisa más tarde para nuevas ofertas.</p>
            </div>
        `;
        updateResultsCount(0);
        return;
    }

    dealsGrid.innerHTML = dealsToShow.map(deal => createDealCard(deal)).join('');
    updateResultsCount(filteredDeals.length);
    renderPagination();
    
    // Add event listeners to new cards
    setupDealCardListeners();
}

function createDealCard(deal) {
    const stockPercentage = (deal.stock / deal.maxStock) * 100;
    const timeLeft = `${deal.timeLeft.hours.toString().padStart(2, '0')}:${deal.timeLeft.minutes.toString().padStart(2, '0')}:${deal.timeLeft.seconds.toString().padStart(2, '0')}`;
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="deal-card" data-deal-id="${deal.id}">
                <div class="deal-image">
                    <img src="${deal.image}" alt="${deal.name}" loading="lazy">
                    <div class="discount-badge">${deal.discount}% OFF</div>
                    <div class="deal-type-badge ${deal.dealType}">${getDealTypeLabel(deal.dealType)}</div>
                    <div class="deal-urgency">${deal.urgency}</div>
                </div>
                <div class="deal-info">
                    <div class="deal-brand">${deal.brand}</div>
                    <h5 class="deal-name">${deal.name}</h5>
                    
                    <div class="price-section">
                        <span class="current-price">$${deal.currentPrice.toLocaleString()}</span>
                        <span class="original-price">$${deal.originalPrice.toLocaleString()}</span>
                        <span class="savings">Ahorras $${deal.savings.toLocaleString()}</span>
                    </div>
                    
                    <div class="deal-timer">
                        <div class="timer-label">⏰ Termina en:</div>
                        <div class="timer-value">${timeLeft}</div>
                    </div>
                    
                    <div class="stock-indicator">
                        <div class="stock-bar">
                            <div class="stock-fill" style="width: ${stockPercentage}%"></div>
                        </div>
                        <div class="stock-text">${deal.stock} disponibles</div>
                    </div>
                    
                    <button class="btn btn-buy-now" onclick="buyNow('${deal.id}')">
                        <i class="bi bi-lightning-charge-fill me-2"></i>¡Comprar Ahora!
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getDealTypeLabel(type) {
    const labels = {
        'flash': 'FLASH',
        'liquidacion': 'LIQUIDACIÓN',
        'exclusive': 'EXCLUSIVA',
        'bundle': 'COMBO',
        'final-stock': 'FIN STOCK'
    };
    return labels[type] || type.toUpperCase();
}

// Utility functions
function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `${count} hiperofertas disponibles`;
    }
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredDeals.length / dealsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<nav aria-label="Navegación de ofertas"><ul class="pagination justify-content-center">';
    
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
    const totalPages = Math.ceil(filteredDeals.length / dealsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderDeals();
        // Scroll to top of deals
        document.getElementById('dealsGrid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Deal interaction
function setupDealCardListeners() {
    // Add hover effects and click handlers
    document.querySelectorAll('.deal-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function buyNow(dealId) {
    const deal = flashDeals.find(d => d.id === dealId);
    if (!deal) return;
    
    // Add to cart logic
    addToCart(deal);
    
    // Show urgency notification
    showUrgencyNotification(deal);
}

function addToCart(deal) {
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
    
    // Check if deal already exists in cart
    const existingItem = cart.find(item => item.id === deal.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: deal.id,
            name: deal.name,
            brand: deal.brand,
            price: deal.currentPrice,
            originalPrice: deal.originalPrice,
            image: deal.image,
            quantity: 1,
            dealType: deal.dealType,
            discount: deal.discount
        });
    }
    
    // Save cart
    localStorage.setItem('alkosto-cart', JSON.stringify(cart));
    updateCartCount();
}

function showUrgencyNotification(deal) {
    // Create and show urgent notification
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = `
        top: 20px; right: 20px; z-index: 9999;
        background: var(--hiperofertas-gradient);
        border: 3px solid var(--hiperofertas-flash) !important;
    `;
    
    const timeLeft = `${deal.timeLeft.hours}h ${deal.timeLeft.minutes}m`;
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <div style="font-weight: 900; font-size: 0.9rem;">
                    <i class="bi bi-lightning-charge-fill me-2"></i>
                    ¡${deal.name} agregado!
                </div>
                <small style="opacity: 0.9;">
                    🔥 ${deal.discount}% OFF - Solo ${deal.stock} unidades - Termina en ${timeLeft}
                </small>
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: 5000 });
    bsToast.show();
    
    // Remove element after hiding
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('alkosto-cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart badge in header
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
    showNewsletterSuccess(email);
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNewsletterSuccess(email) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white border-0 position-fixed';
    toast.style.cssText = `
        top: 20px; right: 20px; z-index: 9999;
        background: var(--hiperofertas-gradient);
    `;
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-envelope-heart me-2"></i>
                ¡Suscripción exitosa! Recibirás las mejores ofertas en ${email}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, { delay: 4000 });
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);