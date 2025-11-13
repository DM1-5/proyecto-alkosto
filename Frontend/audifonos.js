// Audifonos Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Products data
    const products = [
        {
            id: 1,
            name: "Sony WH-1000XM5 Auriculares",
            brand: "Sony",
            price: 1299900,
            originalPrice: 1499900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "sonido-adaptativo"],
            caracteristicas: ["microfono-integrado", "controles-tactiles", "asistente-voz"],
            bateria: "30-horas-mas",
            rating: 4.8,
            reviews: 245,
            discount: 13
        },
        {
            id: 2,
            name: "Apple AirPods Pro (2Âª generaciÃ³n)",
            brand: "Apple",
            price: 999900,
            originalPrice: null,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "lightning"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "audio-espacial"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles", "carga-inalambrica"],
            bateria: "5-10-horas",
            rating: 4.7,
            reviews: 1250,
            discount: 0
        },
        {
            id: 3,
            name: "Bose QuietComfort 45",
            brand: "Bose",
            price: 1199900,
            originalPrice: 1399900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "alta-fidelidad"],
            caracteristicas: ["microfono-integrado", "controles-tactiles"],
            bateria: "20-30-horas",
            rating: 4.6,
            reviews: 189,
            discount: 14
        },
        {
            id: 4,
            name: "Samsung Galaxy Buds2 Pro",
            brand: "Samsung",
            price: 599900,
            originalPrice: 749900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "sonido-adaptativo"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles", "carga-inalambrica"],
            bateria: "5-10-horas",
            rating: 4.4,
            reviews: 342,
            discount: 20
        },
        {
            id: 5,
            name: "JBL Tune 760NC",
            brand: "JBL",
            price: 299900,
            originalPrice: 399900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "extra-bass"],
            caracteristicas: ["microfono-integrado"],
            bateria: "30-horas-mas",
            rating: 4.3,
            reviews: 156,
            discount: 25
        },
        {
            id: 6,
            name: "Sennheiser HD 450BT",
            brand: "Sennheiser",
            price: 449900,
            originalPrice: 549900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["alta-fidelidad", "extra-bass"],
            caracteristicas: ["microfono-integrado", "asistente-voz"],
            bateria: "20-30-horas",
            rating: 4.5,
            reviews: 98,
            discount: 18
        },
        {
            id: 7,
            name: "Beats Studio3 Wireless",
            brand: "Beats",
            price: 849900,
            originalPrice: 1099900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "3.5mm"],
            audio: ["cancelacion-ruido", "extra-bass"],
            caracteristicas: ["microfono-integrado", "asistente-voz"],
            bateria: "20-30-horas",
            rating: 4.2,
            reviews: 287,
            discount: 23
        },
        {
            id: 8,
            name: "Sony WF-1000XM4",
            brand: "Sony",
            price: 799900,
            originalPrice: 949900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "audio-espacial"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles", "carga-inalambrica"],
            bateria: "5-10-horas",
            rating: 4.6,
            reviews: 412,
            discount: 16
        },
        {
            id: 9,
            name: "JBL Live 660NC",
            brand: "JBL",
            price: 349900,
            originalPrice: 449900,
            image: "templates/audifonos.webp",
            category: "on-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "extra-bass"],
            caracteristicas: ["microfono-integrado", "asistente-voz"],
            bateria: "30-horas-mas",
            rating: 4.1,
            reviews: 134,
            discount: 22
        },
        {
            id: 10,
            name: "Apple AirPods (3Âª generaciÃ³n)",
            brand: "Apple",
            price: 699900,
            originalPrice: null,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "lightning"],
            audio: ["alta-fidelidad", "audio-espacial"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles", "carga-inalambrica"],
            bateria: "5-10-horas",
            rating: 4.4,
            reviews: 856,
            discount: 0
        },
        {
            id: 11,
            name: "Bose SoundSport Wireless",
            brand: "Bose",
            price: 399900,
            originalPrice: 499900,
            image: "templates/audifonos.webp",
            category: "deportivos",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["alta-fidelidad"],
            caracteristicas: ["resistente-agua", "microfono-integrado"],
            bateria: "5-10-horas",
            rating: 4.3,
            reviews: 167,
            discount: 20
        },
        {
            id: 12,
            name: "Samsung Galaxy Buds FE",
            brand: "Samsung",
            price: 299900,
            originalPrice: 399900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["alta-fidelidad", "extra-bass"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles"],
            bateria: "5-10-horas",
            rating: 4.2,
            reviews: 234,
            discount: 25
        },
        {
            id: 13,
            name: "JBL Quantum 800",
            brand: "JBL",
            price: 599900,
            originalPrice: 749900,
            image: "templates/audifonos.webp",
            category: "gaming",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["alta-fidelidad", "audio-espacial"],
            caracteristicas: ["microfono-integrado", "controles-tactiles"],
            bateria: "10-20-horas",
            rating: 4.5,
            reviews: 123,
            discount: 20
        },
        {
            id: 14,
            name: "Sennheiser Game One",
            brand: "Sennheiser",
            price: 799900,
            originalPrice: 999900,
            image: "templates/audifonos.webp",
            category: "gaming",
            conectividad: ["cableado", "3.5mm"],
            audio: ["alta-fidelidad"],
            caracteristicas: ["microfono-integrado"],
            bateria: null,
            rating: 4.7,
            reviews: 89,
            discount: 20
        },
        {
            id: 15,
            name: "Beats Powerbeats Pro",
            brand: "Beats",
            price: 699900,
            originalPrice: 849900,
            image: "templates/audifonos.webp",
            category: "deportivos",
            conectividad: ["bluetooth", "inalambrico"],
            audio: ["alta-fidelidad", "extra-bass"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles"],
            bateria: "10-20-horas",
            rating: 4.3,
            reviews: 298,
            discount: 18
        },
        {
            id: 16,
            name: "Sony WH-CH720N",
            brand: "Sony",
            price: 399900,
            originalPrice: 499900,
            image: "templates/audifonos.webp",
            category: "on-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "alta-fidelidad"],
            caracteristicas: ["microfono-integrado", "asistente-voz"],
            bateria: "30-horas-mas",
            rating: 4.4,
            reviews: 178,
            discount: 20
        },
        {
            id: 17,
            name: "JBL Endurance Peak II",
            brand: "JBL",
            price: 249900,
            originalPrice: 329900,
            image: "templates/audifonos.webp",
            category: "deportivos",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["extra-bass"],
            caracteristicas: ["resistente-agua", "microfono-integrado"],
            bateria: "20-30-horas",
            rating: 4.1,
            reviews: 145,
            discount: 24
        },
        {
            id: 18,
            name: "Bose QuietComfort Earbuds",
            brand: "Bose",
            price: 899900,
            originalPrice: 1099900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["cancelacion-ruido", "alta-fidelidad"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles"],
            bateria: "5-10-horas",
            rating: 4.5,
            reviews: 267,
            discount: 18
        },
        {
            id: 19,
            name: "Sennheiser Momentum 4 Wireless",
            brand: "Sennheiser",
            price: 1199900,
            originalPrice: 1399900,
            image: "templates/audifonos.webp",
            category: "over-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "sonido-adaptativo"],
            caracteristicas: ["microfono-integrado", "controles-tactiles", "asistente-voz"],
            bateria: "30-horas-mas",
            rating: 4.8,
            reviews: 156,
            discount: 14
        },
        {
            id: 20,
            name: "JBL Tune 230NC TWS",
            brand: "JBL",
            price: 199900,
            originalPrice: 249900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["cancelacion-ruido", "extra-bass"],
            caracteristicas: ["microfono-integrado", "controles-tactiles"],
            bateria: "20-30-horas",
            rating: 4.0,
            reviews: 198,
            discount: 20
        },
        {
            id: 21,
            name: "Beats Fit Pro",
            brand: "Beats",
            price: 649900,
            originalPrice: 799900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico"],
            audio: ["cancelacion-ruido", "alta-fidelidad", "audio-espacial"],
            caracteristicas: ["resistente-agua", "microfono-integrado", "controles-tactiles"],
            bateria: "5-10-horas",
            rating: 4.4,
            reviews: 234,
            discount: 19
        },
        {
            id: 22,
            name: "Sony WH-XB910N Extra Bass",
            brand: "Sony",
            price: 549900,
            originalPrice: 699900,
            image: "templates/audifonos.webp",
            category: "on-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c", "3.5mm"],
            audio: ["cancelacion-ruido", "extra-bass"],
            caracteristicas: ["microfono-integrado", "asistente-voz"],
            bateria: "20-30-horas",
            rating: 4.3,
            reviews: 167,
            discount: 21
        },
        {
            id: 23,
            name: "Samsung Galaxy Buds Live",
            brand: "Samsung",
            price: 399900,
            originalPrice: 499900,
            image: "templates/audifonos.webp",
            category: "in-ear",
            conectividad: ["bluetooth", "inalambrico", "usb-c"],
            audio: ["alta-fidelidad", "extra-bass"],
            caracteristicas: ["microfono-integrado", "controles-tactiles", "carga-inalambrica"],
            bateria: "5-10-horas",
            rating: 4.1,
            reviews: 287,
            discount: 20
        },
        {
            id: 24,
            name: "Sennheiser HD 660 S",
            brand: "Sennheiser",
            price: 1899900,
            originalPrice: null,
            image: "templates/audifonos.webp",
            category: "profesionales",
            conectividad: ["cableado", "3.5mm"],
            audio: ["alta-fidelidad"],
            caracteristicas: [],
            bateria: null,
            rating: 4.9,
            reviews: 67,
            discount: 0
        },
        {
            id: 25,
            name: "JBL Quantum 100",
            brand: "JBL",
            price: 149900,
            originalPrice: 199900,
            image: "templates/audifonos.webp",
            category: "gaming",
            conectividad: ["cableado", "3.5mm"],
            audio: ["alta-fidelidad"],
            caracteristicas: ["microfono-integrado"],
            bateria: null,
            rating: 4.2,
            reviews: 234,
            discount: 25
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
    const categoryButtons = document.querySelectorAll('.audifonos-cat-btn');

    // Filter elements
    const categoryFilters = document.querySelectorAll('input[name="categoria"]');
    const brandFilters = document.querySelectorAll('input[name="marca"]');
    const connectivityFilters = document.querySelectorAll('input[name="conectividad"]');
    const audioFilters = document.querySelectorAll('input[name="audio"]');
    const characteristicFilters = document.querySelectorAll('input[name="caracteristicas"]');
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
        connectivityFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        audioFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        characteristicFilters.forEach(filter => filter.addEventListener('change', applyFilters));
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

            // Connectivity filter
            const selectedConnectivity = Array.from(connectivityFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedConnectivity.length > 0 && 
                !selectedConnectivity.some(conn => product.conectividad.includes(conn))) {
                return false;
            }

            // Audio features filter
            const selectedAudio = Array.from(audioFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedAudio.length > 0 && 
                !selectedAudio.some(audio => product.audio.includes(audio))) {
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

            // Battery filter
            const selectedBattery = Array.from(batteryFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedBattery.length > 0 && product.bateria && 
                !selectedBattery.includes(product.bateria)) {
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
            case 'bateria':
                filteredProducts.sort((a, b) => {
                    const getBatteryValue = (bateria) => {
                        if (!bateria) return 0;
                        if (bateria === '30-horas-mas') return 35;
                        if (bateria === '20-30-horas') return 25;
                        if (bateria === '10-20-horas') return 15;
                        if (bateria === '5-10-horas') return 7;
                        return 0;
                    };
                    return getBatteryValue(b.bateria) - getBatteryValue(a.bateria);
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
        
        const stars = 'â˜…'.repeat(Math.floor(product.rating)) + 
                     (product.rating % 1 ? 'â˜†' : '') + 
                     'â˜†'.repeat(5 - Math.ceil(product.rating));

        // Create feature badges
        const audioFeatures = product.audio.slice(0, 2).map(feature => {
            const featureNames = {
                'cancelacion-ruido': 'ANC',
                'alta-fidelidad': 'Hi-Fi',
                'extra-bass': 'Extra Bass',
                'audio-espacial': 'Espacial',
                'sonido-adaptativo': 'Adaptativo'
            };
            return `<span class="feature-badge audio-badge">${featureNames[feature] || feature}</span>`;
        }).join('');

        const connectivityFeatures = product.conectividad.slice(0, 2).map(conn => {
            const connNames = {
                'bluetooth': 'Bluetooth',
                'inalambrico': 'Wireless',
                'usb-c': 'USB-C',
                'lightning': 'Lightning',
                '3.5mm': '3.5mm',
                'cableado': 'Cable'
            };
            return `<span class="feature-badge connectivity-badge">${connNames[conn] || conn}</span>`;
        }).join('');

        const batteryFeature = product.bateria ? 
            `<span class="feature-badge battery-badge">${product.bateria.replace('-', ' ').replace('horas', 'h').replace('mas', '+')}</span>` : '';

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
                        ${audioFeatures}
                        ${connectivityFeatures}
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
            // AquÃ­ se implementarÃ­a la lÃ³gica del carrito
            alert(`${product.name} agregado al carrito`);
        }
    };

    // Initialize the page
    init();
});
