// Accesorios Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Products data
    const products = [
        {
            id: 1,
            name: "Anker PowerPort III 65W Cargador USB-C",
            brand: "Anker",
            price: 129900,
            originalPrice: 159900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["universal", "laptop", "tablet", "android"],
            conexion: ["usb-c"],
            caracteristicas: ["carga-rapida", "portatil"],
            material: ["plastico"],
            rating: 4.7,
            reviews: 342,
            discount: 19
        },
        {
            id: 2,
            name: "Belkin 3-in-1 Cargador Inalámbrico MagSafe",
            brand: "Belkin",
            price: 349900,
            originalPrice: 429900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["iphone", "smartwatch"],
            conexion: ["inalambrico", "magnetico"],
            caracteristicas: ["carga-inalambrica", "ajustable"],
            material: ["aluminio"],
            rating: 4.5,
            reviews: 189,
            discount: 19
        },
        {
            id: 3,
            name: "UGREEN Cable USB-C a USB-C 100W",
            brand: "UGREEN",
            price: 45900,
            originalPrice: 59900,
            image: "templates/accesorios.webp",
            category: "cables",
            compatibilidad: ["universal", "laptop", "tablet", "android"],
            conexion: ["usb-c"],
            caracteristicas: ["carga-rapida", "portatil"],
            material: ["aluminio"],
            rating: 4.6,
            reviews: 456,
            discount: 23
        },
        {
            id: 4,
            name: "Spigen Tough Armor Funda iPhone 15 Pro",
            brand: "Spigen",
            price: 89900,
            originalPrice: 119900,
            image: "templates/accesorios.webp",
            category: "fundas",
            compatibilidad: ["iphone"],
            conexion: [],
            caracteristicas: ["resistente-agua"],
            material: ["plastico", "silicona"],
            rating: 4.4,
            reviews: 678,
            discount: 25
        },
        {
            id: 5,
            name: "OtterBox Defender Series Samsung Galaxy S24",
            brand: "OtterBox",
            price: 149900,
            originalPrice: 199900,
            image: "templates/accesorios.webp",
            category: "fundas",
            compatibilidad: ["android"],
            conexion: [],
            caracteristicas: ["resistente-agua"],
            material: ["plastico", "silicona"],
            rating: 4.8,
            reviews: 234,
            discount: 25
        },
        {
            id: 6,
            name: "MOFT Laptop Stand Soporte Portátil",
            brand: "MOFT",
            price: 179900,
            originalPrice: 229900,
            image: "templates/accesorios.webp",
            category: "soportes",
            compatibilidad: ["laptop", "universal"],
            conexion: [],
            caracteristicas: ["ajustable", "portatil", "plegable"],
            material: ["aluminio"],
            rating: 4.6,
            reviews: 345,
            discount: 22
        },
        {
            id: 7,
            name: "Anker Wireless Charger PowerWave 15",
            brand: "Anker",
            price: 79900,
            originalPrice: 99900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["iphone", "android", "universal"],
            conexion: ["inalambrico"],
            caracteristicas: ["carga-inalambrica", "portatil"],
            material: ["plastico"],
            rating: 4.3,
            reviews: 567,
            discount: 20
        },
        {
            id: 8,
            name: "SanDisk Ultra USB-C Flash Drive 128GB",
            brand: "SanDisk",
            price: 89900,
            originalPrice: 109900,
            image: "templates/accesorios.webp",
            category: "almacenamiento",
            compatibilidad: ["universal", "laptop", "tablet"],
            conexion: ["usb-c"],
            caracteristicas: ["portatil"],
            material: ["aluminio"],
            rating: 4.5,
            reviews: 289,
            discount: 18
        },
        {
            id: 9,
            name: "Belkin Cable Lightning a USB-A 1.2m",
            brand: "Belkin",
            price: 49900,
            originalPrice: 69900,
            image: "templates/accesorios.webp",
            category: "cables",
            compatibilidad: ["iphone"],
            conexion: ["lightning"],
            caracteristicas: ["portatil"],
            material: ["plastico"],
            rating: 4.2,
            reviews: 378,
            discount: 29
        },
        {
            id: 10,
            name: "UGREEN Soporte de Mesa para Tablet",
            brand: "UGREEN",
            price: 65900,
            originalPrice: 85900,
            image: "templates/accesorios.webp",
            category: "soportes",
            compatibilidad: ["tablet", "universal"],
            conexion: [],
            caracteristicas: ["ajustable", "plegable"],
            material: ["aluminio"],
            rating: 4.4,
            reviews: 156,
            discount: 23
        },
        {
            id: 11,
            name: "Anker PowerCore 10000mAh Power Bank",
            brand: "Anker",
            price: 159900,
            originalPrice: 199900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["universal", "iphone", "android"],
            conexion: ["usb-c", "lightning"],
            caracteristicas: ["carga-rapida", "portatil"],
            material: ["plastico"],
            rating: 4.7,
            reviews: 892,
            discount: 20
        },
        {
            id: 12,
            name: "Kit de Limpieza para Pantallas TechClean",
            brand: "TechClean",
            price: 29900,
            originalPrice: 39900,
            image: "templates/accesorios.webp",
            category: "limpieza",
            compatibilidad: ["universal"],
            conexion: [],
            caracteristicas: ["portatil"],
            material: ["tela"],
            rating: 4.1,
            reviews: 234,
            discount: 25
        },
        {
            id: 13,
            name: "Spigen ArmorGear Protector MacBook Air",
            brand: "Spigen",
            price: 119900,
            originalPrice: 149900,
            image: "templates/accesorios.webp",
            category: "fundas",
            compatibilidad: ["laptop"],
            conexion: [],
            caracteristicas: ["resistente-agua"],
            material: ["plastico"],
            rating: 4.3,
            reviews: 123,
            discount: 20
        },
        {
            id: 14,
            name: "UGREEN Cable HDMI 4K 2m",
            brand: "UGREEN",
            price: 39900,
            originalPrice: 54900,
            image: "templates/accesorios.webp",
            category: "cables",
            compatibilidad: ["universal", "laptop"],
            conexion: [],
            caracteristicas: ["portatil"],
            material: ["aluminio"],
            rating: 4.5,
            reviews: 467,
            discount: 27
        },
        {
            id: 15,
            name: "MOFT Phone Stand Invisible Soporte",
            brand: "MOFT",
            price: 89900,
            originalPrice: 119900,
            image: "templates/accesorios.webp",
            category: "soportes",
            compatibilidad: ["iphone", "android", "universal"],
            conexion: [],
            caracteristicas: ["ajustable", "portatil", "plegable"],
            material: ["aluminio"],
            rating: 4.2,
            reviews: 278,
            discount: 25
        },
        {
            id: 16,
            name: "SanDisk Extreme Portable SSD 1TB",
            brand: "SanDisk",
            price: 459900,
            originalPrice: null,
            image: "templates/accesorios.webp",
            category: "almacenamiento",
            compatibilidad: ["universal", "laptop"],
            conexion: ["usb-c"],
            caracteristicas: ["resistente-agua", "portatil"],
            material: ["aluminio"],
            rating: 4.8,
            reviews: 345,
            discount: 0
        },
        {
            id: 17,
            name: "Anker Magnetic Wireless Charger",
            brand: "Anker",
            price: 109900,
            originalPrice: 139900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["iphone"],
            conexion: ["inalambrico", "magnetico"],
            caracteristicas: ["carga-inalambrica", "portatil"],
            material: ["aluminio"],
            rating: 4.4,
            reviews: 234,
            discount: 21
        },
        {
            id: 18,
            name: "OtterBox Symmetry Clear iPad Case",
            brand: "OtterBox",
            price: 179900,
            originalPrice: 229900,
            image: "templates/accesorios.webp",
            category: "fundas",
            compatibilidad: ["tablet"],
            conexion: [],
            caracteristicas: ["resistente-agua"],
            material: ["plastico"],
            rating: 4.6,
            reviews: 167,
            discount: 22
        },
        {
            id: 19,
            name: "Belkin Car Charger Dual USB 24W",
            brand: "Belkin",
            price: 59900,
            originalPrice: 79900,
            image: "templates/accesorios.webp",
            category: "cargadores",
            compatibilidad: ["universal"],
            conexion: ["usb-c", "lightning"],
            caracteristicas: ["carga-rapida", "portatil"],
            material: ["plastico"],
            rating: 4.2,
            reviews: 298,
            discount: 25
        },
        {
            id: 20,
            name: "UGREEN Cable Micro USB 2m",
            brand: "UGREEN",
            price: 25900,
            originalPrice: 35900,
            image: "templates/accesorios.webp",
            category: "cables",
            compatibilidad: ["android"],
            conexion: ["micro-usb"],
            caracteristicas: ["portatil"],
            material: ["plastico"],
            rating: 4.1,
            reviews: 456,
            discount: 28
        },
        {
            id: 21,
            name: "MOFT Z Laptop Stand Ergonómico",
            brand: "MOFT",
            price: 249900,
            originalPrice: 319900,
            image: "templates/accesorios.webp",
            category: "soportes",
            compatibilidad: ["laptop", "universal"],
            conexion: [],
            caracteristicas: ["ajustable", "plegable"],
            material: ["aluminio"],
            rating: 4.7,
            reviews: 189,
            discount: 22
        },
        {
            id: 22,
            name: "SanDisk iXpand Flash Drive 256GB",
            brand: "SanDisk",
            price: 199900,
            originalPrice: 249900,
            image: "templates/accesorios.webp",
            category: "almacenamiento",
            compatibilidad: ["iphone"],
            conexion: ["lightning"],
            caracteristicas: ["portatil"],
            material: ["aluminio"],
            rating: 4.3,
            reviews: 234,
            discount: 20
        },
        {
            id: 23,
            name: "Kit Limpieza Completo para Dispositivos",
            brand: "CleanTech",
            price: 45900,
            originalPrice: 59900,
            image: "templates/accesorios.webp",
            category: "limpieza",
            compatibilidad: ["universal"],
            conexion: [],
            caracteristicas: ["portatil"],
            material: ["tela"],
            rating: 4.2,
            reviews: 345,
            discount: 23
        },
        {
            id: 24,
            name: "Anker USB-C Hub 7-en-1",
            brand: "Anker",
            price: 189900,
            originalPrice: 239900,
            image: "templates/accesorios.webp",
            category: "cables",
            compatibilidad: ["laptop", "universal"],
            conexion: ["usb-c"],
            caracteristicas: ["portatil"],
            material: ["aluminio"],
            rating: 4.6,
            reviews: 278,
            discount: 21
        },
        {
            id: 25,
            name: "Limpiador de Lentes para Cámaras",
            brand: "LensPen",
            price: 35900,
            originalPrice: 45900,
            image: "templates/accesorios.webp",
            category: "limpieza",
            compatibilidad: ["universal"],
            conexion: [],
            caracteristicas: ["portatil"],
            material: ["plastico"],
            rating: 4.4,
            reviews: 156,
            discount: 22
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
    const categoryButtons = document.querySelectorAll('.accesorios-cat-btn');

    // Filter elements
    const categoryFilters = document.querySelectorAll('input[name="categoria"]');
    const brandFilters = document.querySelectorAll('input[name="marca"]');
    const compatibilityFilters = document.querySelectorAll('input[name="compatibilidad"]');
    const connectionFilters = document.querySelectorAll('input[name="conexion"]');
    const characteristicFilters = document.querySelectorAll('input[name="caracteristicas"]');
    const materialFilters = document.querySelectorAll('input[name="material"]');

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
        compatibilityFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        connectionFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        characteristicFilters.forEach(filter => filter.addEventListener('change', applyFilters));
        materialFilters.forEach(filter => filter.addEventListener('change', applyFilters));

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

            // Compatibility filter
            const selectedCompatibility = Array.from(compatibilityFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedCompatibility.length > 0 && 
                !selectedCompatibility.some(comp => product.compatibilidad.includes(comp))) {
                return false;
            }

            // Connection filter
            const selectedConnections = Array.from(connectionFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedConnections.length > 0 && 
                !selectedConnections.some(conn => product.conexion.includes(conn))) {
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

            // Material filter
            const selectedMaterials = Array.from(materialFilters)
                .filter(filter => filter.checked)
                .map(filter => filter.value);
            
            if (selectedMaterials.length > 0 && 
                !selectedMaterials.some(mat => product.material.includes(mat))) {
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
            case 'compatibilidad':
                filteredProducts.sort((a, b) => b.compatibilidad.length - a.compatibilidad.length);
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
        const compatibilityFeatures = product.compatibilidad.slice(0, 2).map(comp => {
            const compNames = {
                'iphone': 'iPhone',
                'android': 'Android',
                'universal': 'Universal',
                'laptop': 'Laptop',
                'tablet': 'Tablet',
                'smartwatch': 'Watch'
            };
            return `<span class="feature-badge compatibility-badge">${compNames[comp] || comp}</span>`;
        }).join('');

        const connectionFeatures = product.conexion.slice(0, 2).map(conn => {
            const connNames = {
                'usb-c': 'USB-C',
                'lightning': 'Lightning',
                'micro-usb': 'Micro USB',
                'inalambrico': 'Wireless',
                'magnetico': 'MagSafe'
            };
            return `<span class="feature-badge connection-badge">${connNames[conn] || conn}</span>`;
        }).join('');

        const specialFeatures = product.caracteristicas.slice(0, 1).map(char => {
            const charNames = {
                'carga-rapida': 'Fast Charge',
                'carga-inalambrica': 'Wireless',
                'resistente-agua': 'Water Resistant',
                'ajustable': 'Adjustable',
                'portatil': 'Portable',
                'plegable': 'Foldable'
            };
            return `<span class="feature-badge special-badge">${charNames[char] || char}</span>`;
        }).join('');

        const materialFeature = product.material.length > 0 ? 
            `<span class="feature-badge material-badge">${product.material[0]}</span>` : '';

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
                        ${compatibilityFeatures}
                        ${connectionFeatures}
                        ${specialFeatures}
                        ${materialFeature}
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