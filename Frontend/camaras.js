// Camaras Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Products data
    const products = [
        {
            id: 1,
            name: "Canon EOS R6 Mark II Mirrorless",
            brand: "Canon",
            price: 8499900,
            originalPrice: 9999900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "deportes", "retrato"],
            bateria: "500-fotos",
            rating: 4.8,
            reviews: 145,
            discount: 15
        },
        {
            id: 2,
            name: "Sony Alpha a7 IV Full Frame",
            brand: "Sony",
            price: 9499900,
            originalPrice: 10999900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["32-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "macro", "deportes", "retrato", "timelapse"],
            bateria: "800-fotos",
            rating: 4.9,
            reviews: 234,
            discount: 14
        },
        {
            id: 3,
            name: "Nikon D850 DSLR Profesional",
            brand: "Nikon",
            price: 11999900,
            originalPrice: 13999900,
            image: "templates/c-camera-2.webp",
            category: "dslr",
            resolucion: ["45-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["resistente-clima", "poca-luz", "macro", "deportes", "retrato"],
            bateria: "1000-fotos",
            rating: 4.7,
            reviews: 189,
            discount: 14
        },
        {
            id: 4,
            name: "Fujifilm X-T5 Mirrorless APS-C",
            brand: "Fujifilm",
            price: 6999900,
            originalPrice: 7999900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["32-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "macro", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.6,
            reviews: 167,
            discount: 13
        },
        {
            id: 5,
            name: "GoPro Hero 12 Black",
            brand: "GoPro",
            price: 1999900,
            originalPrice: 2299900,
            image: "templates/c-camera-2.webp",
            category: "accion",
            resolucion: ["24-mp", "4k-video", "8k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["resistente-clima", "deportes", "timelapse"],
            bateria: "200-fotos",
            rating: 4.5,
            reviews: 456,
            discount: 13
        },
        {
            id: 6,
            name: "Canon EOS R8 Full Frame Mirrorless",
            brand: "Canon",
            price: 5999900,
            originalPrice: 6999900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.4,
            reviews: 134,
            discount: 14
        },
        {
            id: 7,
            name: "Sony FX30 Cinema Camera",
            brand: "Sony",
            price: 7999900,
            originalPrice: null,
            image: "templates/c-camera-2.webp",
            category: "profesional",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "deportes", "timelapse"],
            bateria: "800-fotos",
            rating: 4.7,
            reviews: 89,
            discount: 0
        },
        {
            id: 8,
            name: "Nikon Z9 Mirrorless Full Frame",
            brand: "Nikon",
            price: 14999900,
            originalPrice: null,
            image: "templates/c-camera-2.webp",
            category: "profesional",
            resolucion: ["45-mp", "4k-video", "8k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["resistente-clima", "poca-luz", "macro", "deportes", "retrato", "timelapse"],
            bateria: "1000-fotos",
            rating: 4.9,
            reviews: 67,
            discount: 0
        },
        {
            id: 9,
            name: "Fujifilm Instax Mini 12",
            brand: "Fujifilm",
            price: 299900,
            originalPrice: 399900,
            image: "templates/c-camera-2.webp",
            category: "instantanea",
            resolucion: ["12-mp"],
            caracteristicas: ["enfoque-automatico"],
            conectividad: [],
            especiales: ["retrato"],
            bateria: "200-fotos",
            rating: 4.2,
            reviews: 567,
            discount: 25
        },
        {
            id: 10,
            name: "Canon PowerShot G7X Mark III",
            brand: "Canon",
            price: 2199900,
            originalPrice: 2599900,
            image: "templates/c-camera-2.webp",
            category: "compacta",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["poca-luz", "macro", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.3,
            reviews: 234,
            discount: 15
        },
        {
            id: 11,
            name: "Sony Cyber-shot RX100 VII",
            brand: "Sony",
            price: 4499900,
            originalPrice: 4999900,
            image: "templates/c-camera-2.webp",
            category: "compacta",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "macro", "deportes", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.6,
            reviews: 178,
            discount: 10
        },
        {
            id: 12,
            name: "GoPro Hero 11 Black Mini",
            brand: "GoPro",
            price: 1599900,
            originalPrice: 1899900,
            image: "templates/c-camera-2.webp",
            category: "accion",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["resistente-clima", "deportes", "timelapse"],
            bateria: "200-fotos",
            rating: 4.4,
            reviews: 345,
            discount: 16
        },
        {
            id: 13,
            name: "Nikon D780 DSLR Full Frame",
            brand: "Nikon",
            price: 8999900,
            originalPrice: 9999900,
            image: "templates/c-camera-2.webp",
            category: "dslr",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["resistente-clima", "poca-luz", "deportes", "retrato"],
            bateria: "800-fotos",
            rating: 4.5,
            reviews: 123,
            discount: 10
        },
        {
            id: 14,
            name: "Fujifilm X100VI Compacta Premium",
            brand: "Fujifilm",
            price: 4999900,
            originalPrice: 5499900,
            image: "templates/c-camera-2.webp",
            category: "compacta",
            resolucion: ["32-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["poca-luz", "macro", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.8,
            reviews: 89,
            discount: 9
        },
        {
            id: 15,
            name: "Canon EOS 90D DSLR APS-C",
            brand: "Canon",
            price: 4799900,
            originalPrice: 5499900,
            image: "templates/c-camera-2.webp",
            category: "dslr",
            resolucion: ["32-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "macro", "deportes", "retrato"],
            bateria: "800-fotos",
            rating: 4.4,
            reviews: 234,
            discount: 13
        },
        {
            id: 16,
            name: "Sony Alpha a6700 APS-C Mirrorless",
            brand: "Sony",
            price: 4999900,
            originalPrice: 5699900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "deportes", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.5,
            reviews: 167,
            discount: 12
        },
        {
            id: 17,
            name: "GoPro Hero 10 Black",
            brand: "GoPro",
            price: 1299900,
            originalPrice: 1599900,
            image: "templates/c-camera-2.webp",
            category: "accion",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["resistente-clima", "deportes", "timelapse"],
            bateria: "200-fotos",
            rating: 4.3,
            reviews: 289,
            discount: 19
        },
        {
            id: 18,
            name: "Fujifilm Instax Wide 300",
            brand: "Fujifilm",
            price: 399900,
            originalPrice: 499900,
            image: "templates/c-camera-2.webp",
            category: "instantanea",
            resolucion: ["12-mp"],
            caracteristicas: ["enfoque-automatico"],
            conectividad: [],
            especiales: ["retrato"],
            bateria: "200-fotos",
            rating: 4.1,
            reviews: 345,
            discount: 20
        },
        {
            id: 19,
            name: "Canon EOS R50 Mirrorless Entry",
            brand: "Canon",
            price: 2299900,
            originalPrice: 2799900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["poca-luz", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.2,
            reviews: 278,
            discount: 18
        },
        {
            id: 20,
            name: "Nikon Z30 Content Creator",
            brand: "Nikon",
            price: 2699900,
            originalPrice: 2999900,
            image: "templates/c-camera-2.webp",
            category: "mirrorless",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "visor-electronico", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["poca-luz", "retrato", "timelapse"],
            bateria: "500-fotos",
            rating: 4.3,
            reviews: 156,
            discount: 10
        },
        {
            id: 21,
            name: "Sony FX3 Cinema Camera",
            brand: "Sony",
            price: 12999900,
            originalPrice: null,
            image: "templates/c-camera-2.webp",
            category: "profesional",
            resolucion: ["12-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c", "hdmi"],
            especiales: ["resistente-clima", "poca-luz", "deportes", "timelapse"],
            bateria: "800-fotos",
            rating: 4.8,
            reviews: 45,
            discount: 0
        },
        {
            id: 22,
            name: "Canon PowerShot SX740 HS",
            brand: "Canon",
            price: 1499900,
            originalPrice: 1799900,
            image: "templates/c-camera-2.webp",
            category: "compacta",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["poca-luz", "macro", "deportes", "retrato"],
            bateria: "500-fotos",
            rating: 4.1,
            reviews: 234,
            discount: 17
        },
        {
            id: 23,
            name: "GoPro HERO Session 5",
            brand: "GoPro",
            price: 899900,
            originalPrice: 1199900,
            image: "templates/c-camera-2.webp",
            category: "accion",
            resolucion: ["12-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "modo-rafaga"],
            conectividad: ["wifi", "bluetooth"],
            especiales: ["resistente-clima", "deportes"],
            bateria: "200-fotos",
            rating: 4.0,
            reviews: 189,
            discount: 25
        },
        {
            id: 24,
            name: "Fujifilm Instax Square SQ40",
            brand: "Fujifilm",
            price: 549900,
            originalPrice: 649900,
            image: "templates/c-camera-2.webp",
            category: "instantanea",
            resolucion: ["12-mp"],
            caracteristicas: ["enfoque-automatico"],
            conectividad: [],
            especiales: ["retrato"],
            bateria: "200-fotos",
            rating: 4.3,
            reviews: 167,
            discount: 15
        },
        {
            id: 25,
            name: "Nikon D5600 DSLR Entry Level",
            brand: "Nikon",
            price: 2999900,
            originalPrice: 3499900,
            image: "templates/c-camera-2.webp",
            category: "dslr",
            resolucion: ["24-mp", "4k-video"],
            caracteristicas: ["enfoque-automatico", "estabilizacion-imagen", "pantalla-tactil", "modo-rafaga", "hdr"],
            conectividad: ["wifi", "bluetooth", "usb-c"],
            especiales: ["poca-luz", "macro", "retrato"],
            bateria: "800-fotos",
            rating: 4.2,
            reviews: 345,
            discount: 14
        }
    ];

    let filteredProducts = [...products];
    const productsPerPage = 12;
    let currentPage = 1;

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const showingCount = document.getElementById('showing-count');
    const totalCount = document.getElementById('total-count');
    const sortSelect = document.getElementById('sort-select');
    const priceRange = document.getElementById('price-range');
    const categoryButtons = document.querySelectorAll('.camaras-cat-btn');

    // Filter elements
    const categoryFilters = document.querySelectorAll('input[name="categoria"]');
    const brandFilters = document.querySelectorAll('input[name="marca"]');
    const resolutionFilters = document.querySelectorAll('input[name="resolucion"]');
    const characteristicFilters = document.querySelectorAll('input[name="caracteristicas"]');
    const connectivityFilters = document.querySelectorAll('input[name="conectividad"]');
    const specialFilters = document.querySelectorAll('input[name="especiales"]');
    const batteryFilters = document.querySelectorAll('input[name="bateria"]');

    // Initialize page
    function init() {
        renderProducts();
        updateCounts();
        setupEventListeners();
        updatePriceDisplay();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                setActiveCategory(this);
                filterByCategory(category);
            });
        });

        // Filter checkboxes
        categoryFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        brandFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        resolutionFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        characteristicFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        connectivityFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        specialFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        batteryFilters.forEach(filter => filter.addEventListener('change', applyFilters));

        // Sort and price
        sortSelect.addEventListener('change', sortProducts);
        priceRange.addEventListener('input', function() {
            updatePriceDisplay();
            applyFilters();
        });
    }

    // Set active category button
    function setActiveCategory(activeButton) {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    // Filter by category
    function filterByCategory(category) {
        if (category === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }
        
        currentPage = 1;
        renderProducts();
        updateCounts();
    }

    // Apply all filters
    function applyFilters() {
        filteredProducts = products.filter(product => {
            // Category filter
            const selectedCategories = Array.from(categoryFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                return false;
            }

            // Brand filter
            const selectedBrands = Array.from(brandFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand.toLowerCase())) {
                return false;
            }

            // Resolution filter
            const selectedResolutions = Array.from(resolutionFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedResolutions.length > 0 && 
                !selectedResolutions.some(res => product.resolucion.includes(res))) {
                return false;
            }

            // Characteristics filter
            const selectedCharacteristics = Array.from(characteristicFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedCharacteristics.length > 0 && 
                !selectedCharacteristics.some(char => product.caracteristicas.includes(char))) {
                return false;
            }

            // Connectivity filter
            const selectedConnectivity = Array.from(connectivityFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedConnectivity.length > 0 && 
                !selectedConnectivity.some(conn => product.conectividad.includes(conn))) {
                return false;
            }

            // Special features filter
            const selectedSpecial = Array.from(specialFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedSpecial.length > 0 && 
                !selectedSpecial.some(spec => product.especiales.includes(spec))) {
                return false;
            }

            // Battery filter
            const selectedBattery = Array.from(batteryFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedBattery.length > 0 && !selectedBattery.includes(product.bateria)) {
                return false;
            }

            // Price filter
            const maxPrice = parseInt(priceRange.value);
            if (product.price > maxPrice) {
                return false;
            }

            return true;
        });

        currentPage = 1;
        renderProducts();
        updateCounts();
    }

    // Sort products
    function sortProducts() {
        const sortValue = sortSelect.value;
        
        switch(sortValue) {
            case 'precio-menor':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'precio-mayor':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'mejor-valorados':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'mas-vendidos':
                filteredProducts.sort((a, b) => b.reviews - a.reviews);
                break;
            case 'descuento':
                filteredProducts.sort((a, b) => b.discount - a.discount);
                break;
            case 'resolucion':
                filteredProducts.sort((a, b) => {
                    const getResolutionValue = (resolucion) => {
                        if (resolucion.includes('45-mp')) return 45;
                        if (resolucion.includes('32-mp')) return 32;
                        if (resolucion.includes('24-mp')) return 24;
                        if (resolucion.includes('12-mp')) return 12;
                        return 0;
                    };
                    return getResolutionValue(b.resolucion) - getResolutionValue(a.resolucion);
                });
                break;
            default: // relevancia
                filteredProducts.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
        }
        
        renderProducts();
    }

    // Update price display
    function updatePriceDisplay() {
        const priceValue = parseInt(priceRange.value);
        const priceDisplay = document.querySelector('.price-current strong');
        priceDisplay.textContent = '$' + priceValue.toLocaleString();
    }

    // Render products
    function renderProducts() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);

        productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
        renderPagination();
    }

    // Create product card HTML
    function createProductCard(product) {
        const formatPrice = (price) => '$' + price.toLocaleString();
        const discountBadge = product.discount > 0 ? 
            `<div class="discount-badge">-${product.discount}%</div>` : '';
        const originalPrice = product.originalPrice ? 
            `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : '';
        
        const stars = '★'.repeat(Math.floor(product.rating)) + 
                     (product.rating % 1 ? '☆' : '') + 
                     '☆'.repeat(5 - Math.ceil(product.rating));

        // Create feature badges
        const resolutionFeatures = product.resolucion.slice(0, 2).map(res => {
            const resNames = {
                '12-mp': '12MP',
                '24-mp': '24MP',
                '32-mp': '32MP',
                '45-mp': '45MP',
                '4k-video': '4K Video',
                '8k-video': '8K Video'
            };
            return `<span class="feature-badge resolution-badge">${resNames[res] || res}</span>`;
        }).join('');

        const photoFeatures = product.caracteristicas.slice(0, 2).map(char => {
            const charNames = {
                'enfoque-automatico': 'AF',
                'estabilizacion-imagen': 'IS',
                'pantalla-tactil': 'Touch',
                'visor-electronico': 'EVF',
                'modo-rafaga': 'Burst',
                'hdr': 'HDR'
            };
            return `<span class="feature-badge feature-badge-photo">${charNames[char] || char}</span>`;
        }).join('');

        const connectivityFeatures = product.conectividad.slice(0, 1).map(conn => {
            const connNames = {
                'wifi': 'WiFi',
                'bluetooth': 'BT',
                'usb-c': 'USB-C',
                'hdmi': 'HDMI',
                'nfc': 'NFC'
            };
            return `<span class="feature-badge connectivity-badge">${connNames[conn] || conn}</span>`;
        }).join('');

        const specialFeatures = product.especiales.slice(0, 1).map(spec => {
            const specNames = {
                'resistente-clima': 'Weather',
                'poca-luz': 'Low Light',
                'macro': 'Macro',
                'deportes': 'Sports',
                'retrato': 'Portrait',
                'timelapse': 'Timelapse'
            };
            return `<span class="feature-badge special-badge">${specNames[spec] || spec}</span>`;
        }).join('');

        const batteryFeature = product.bateria ? 
            `<span class="feature-badge battery-badge">${product.bateria.replace('-fotos', ' shots')}</span>` : '';

        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-features">
                        ${resolutionFeatures}
                        ${photoFeatures}
                        ${connectivityFeatures}
                        ${specialFeatures}
                        ${batteryFeature}
                    </div>
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="price-section">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${originalPrice}
                    </div>
                    <button class="btn btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }

    // Update counts
    function updateCounts() {
        const showing = Math.min(productsPerPage, filteredProducts.length);
        showingCount.textContent = showing;
        totalCount.textContent = filteredProducts.length;
    }

    // Render pagination
    function renderPagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const pagination = document.getElementById('pagination');
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';
        
        // Previous button
        if (currentPage > 1) {
            paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">
                        <i class="bi bi-chevron-left"></i>
                    </a>
                </li>
            `;
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            paginationHTML += `
                <li class="page-item ${activeClass}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                </li>
            `;
        }

        // Next button
        if (currentPage < totalPages) {
            paginationHTML += `
                <li class="page-item">
                    <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
                        <i class="bi bi-chevron-right"></i>
                    </a>
                </li>
            `;
        }

        pagination.innerHTML = paginationHTML;
    }

    // Change page function (global)
    window.changePage = function(page) {
        currentPage = page;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add to cart function (global)
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            console.log('Agregado al carrito:', product.name);
            // Aquí se implementaría la lógica del carrito
            alert(`${product.name} agregado al carrito`);
        }
    };

    // Initialize the page
    init();
});