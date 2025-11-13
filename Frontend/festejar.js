// Festejar Page JavaScript

// Party Products Data
const partyProducts = [
    {
        id: 'decoracion-cumpleanos-unicornio',
        name: 'Kit Decoración Cumpleaños Unicornio Completo',
        brand: 'Party City',
        category: 'decoracion',
        occasion: 'cumpleanos',
        age: 'ninos',
        currentPrice: 45000,
        originalPrice: 59000,
        discount: 24,
        savings: 14000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 567,
        features: ['Kit Completo', 'Incluye Accesorios', 'Reutilizable'],
        description: 'Kit completo con globos, guirnaldas, platos, vasos y decoración temática',
        freeShipping: true
    },
    {
        id: 'globos-numeros-dorados',
        name: 'Globos Números Dorados 40 pulgadas con Helio',
        brand: 'Unique',
        category: 'decoracion',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 25000,
        originalPrice: 35000,
        discount: 29,
        savings: 10000,
        image: 'templates/festejar.webp',
        rating: 4.6,
        reviews: 1234,
        features: ['Incluye Helio', 'Alta Calidad', 'Larga Duración'],
        description: 'Globos de números metálicos dorados con helio incluido',
        freeShipping: false
    },
    {
        id: 'regalo-caja-sorpresa-amor',
        name: 'Caja Sorpresa Romántica con Rosas y Chocolates',
        brand: 'Creative',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 89000,
        originalPrice: 119000,
        discount: 25,
        savings: 30000,
        image: 'templates/festejar.webp',
        rating: 4.9,
        reviews: 432,
        features: ['Personalizable', 'Incluye Accesorios', 'Eco-Friendly'],
        description: 'Caja sorpresa personalizada con rosas preservadas y chocolates premium',
        freeShipping: true
    },
    {
        id: 'decoracion-baby-shower-elefantito',
        name: 'Decoración Baby Shower Elefantito Azul y Rosa',
        brand: 'Amscan',
        category: 'decoracion',
        occasion: 'baby-shower',
        age: 'todas',
        currentPrice: 67000,
        originalPrice: 85000,
        discount: 21,
        savings: 18000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 789,
        features: ['Kit Completo', 'Eco-Friendly', 'Reutilizable'],
        description: 'Kit decorativo completo para baby shower con temática de elefantito',
        freeShipping: true
    },
    {
        id: 'torta-cumpleanos-personalizada',
        name: 'Torta de Cumpleaños Personalizada 2 Pisos',
        brand: 'Creative',
        category: 'cumpleanos',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 125000,
        originalPrice: 155000,
        discount: 19,
        savings: 30000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 345,
        features: ['Personalizable', 'Sabores Variados', 'Incluye Decoración'],
        description: 'Torta personalizada de 2 pisos con decoración temática a elección',
        freeShipping: true
    },
    {
        id: 'piñata-superheroes-batman',
        name: 'Piñata Superhéroes Batman con Dulces Incluidos',
        brand: 'Party City',
        category: 'cumpleanos',
        occasion: 'cumpleanos',
        age: 'ninos',
        currentPrice: 35000,
        originalPrice: 45000,
        discount: 22,
        savings: 10000,
        image: 'templates/festejar.webp',
        rating: 4.5,
        reviews: 678,
        features: ['Incluye Dulces', 'Resistente', 'Fácil de Colgar'],
        description: 'Piñata de Batman resistente con dulces y sorpresas incluidas',
        freeShipping: false
    },
    {
        id: 'regalo-spa-relajacion',
        name: 'Kit Regalo Spa Relajación con Velas Aromáticas',
        brand: 'Beistle',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 78000,
        originalPrice: 98000,
        discount: 20,
        savings: 20000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 456,
        features: ['Kit Completo', 'Aromático', 'Relajante'],
        description: 'Kit completo de spa con velas, aceites y accesorios de relajación',
        freeShipping: true
    },
    {
        id: 'decoracion-halloween-casa-embrujada',
        name: 'Decoración Halloween Casa Embrujada Completa',
        brand: 'Unique',
        category: 'decoracion',
        occasion: 'halloween',
        age: 'todas',
        currentPrice: 95000,
        originalPrice: 125000,
        discount: 24,
        savings: 30000,
        image: 'templates/festejar.webp',
        rating: 4.6,
        reviews: 234,
        features: ['Kit Completo', 'Efectos Especiales', 'Reutilizable'],
        description: 'Decoración completa de Halloween con efectos de sonido y luces',
        freeShipping: true
    },
    {
        id: 'mesa-dulces-quinceanos',
        name: 'Mesa de Dulces Quinceaños Rosa y Dorado',
        brand: 'Creative',
        category: 'eventos',
        occasion: 'cumpleanos',
        age: 'adolescentes',
        currentPrice: 185000,
        originalPrice: 235000,
        discount: 21,
        savings: 50000,
        image: 'templates/festejar.webp',
        rating: 4.9,
        reviews: 167,
        features: ['Personalizable', 'Kit Completo', 'Incluye Dulces'],
        description: 'Mesa de dulces completa para quinceaños con decoración elegante',
        freeShipping: true
    },
    {
        id: 'regalo-cesta-gourmet',
        name: 'Cesta Regalo Gourmet con Vinos y Quesos',
        brand: 'Amscan',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 145000,
        originalPrice: 185000,
        discount: 22,
        savings: 40000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 289,
        features: ['Premium', 'Variedad Gourmet', 'Presentación Elegante'],
        description: 'Cesta gourmet con selección de vinos, quesos y productos premium',
        freeShipping: true
    },
    {
        id: 'decoracion-navidad-arbol-completa',
        name: 'Decoración Navidad Árbol 1.8m con Luces LED',
        brand: 'Party City',
        category: 'decoracion',
        occasion: 'navidad',
        age: 'todas',
        currentPrice: 189000,
        originalPrice: 249000,
        discount: 24,
        savings: 60000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 456,
        features: ['Luces LED', 'Kit Completo', 'Fácil Armado'],
        description: 'Árbol de navidad artificial con decoración completa y luces LED',
        freeShipping: true
    },
    {
        id: 'velas-cumpleanos-musicales',
        name: 'Velas Cumpleaños Musicales que No Se Apagan',
        brand: 'Unique',
        category: 'cumpleanos',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 15000,
        originalPrice: 22000,
        discount: 32,
        savings: 7000,
        image: 'templates/festejar.webp',
        rating: 4.4,
        reviews: 1678,
        features: ['Musicales', 'Divertidas', 'Recargables'],
        description: 'Velas musicales divertidas que se vuelven a encender automáticamente',
        freeShipping: false
    },
    {
        id: 'regalo-joyero-personalizado',
        name: 'Joyero Personalizado con Grabado y Espejo',
        brand: 'Beistle',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 89000,
        originalPrice: 115000,
        discount: 23,
        savings: 26000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 234,
        features: ['Personalizable', 'Grabado Incluido', 'Alta Calidad'],
        description: 'Joyero elegante personalizable con grabado y espejo incluido',
        freeShipping: true
    },
    {
        id: 'photobooth-props-bodas',
        name: 'Photobooth Props Bodas 30 Accesorios Divertidos',
        brand: 'Creative',
        category: 'eventos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 45000,
        originalPrice: 59000,
        discount: 24,
        savings: 14000,
        image: 'templates/festejar.webp',
        rating: 4.6,
        reviews: 567,
        features: ['30 Accesorios', 'Divertidos', 'Reutilizable'],
        description: 'Kit de 30 accesorios divertidos para photobooth de bodas',
        freeShipping: false
    },
    {
        id: 'sorpresa-caja-explosion',
        name: 'Caja Sorpresa Explosión con Fotos y Mensajes',
        brand: 'Amscan',
        category: 'sorpresas',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 65000,
        originalPrice: 85000,
        discount: 24,
        savings: 20000,
        image: 'templates/festejar.webp',
        rating: 4.9,
        reviews: 189,
        features: ['Personalizable', 'Incluye Fotos', 'Sorpresa Única'],
        description: 'Caja sorpresa que explota con fotos y mensajes personalizados',
        freeShipping: true
    },
    {
        id: 'decoracion-primera-comunion',
        name: 'Decoración Primera Comunión Elegante Dorado',
        brand: 'Party City',
        category: 'decoracion',
        occasion: 'cumpleanos',
        age: 'ninos',
        currentPrice: 89000,
        originalPrice: 115000,
        discount: 23,
        savings: 26000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 345,
        features: ['Elegante', 'Kit Completo', 'Dorado'],
        description: 'Decoración elegante para primera comunión con temática dorada',
        freeShipping: true
    },
    {
        id: 'regalo-album-fotos-personalizado',
        name: 'Álbum de Fotos Personalizado con 100 Páginas',
        brand: 'Unique',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 67000,
        originalPrice: 85000,
        discount: 21,
        savings: 18000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 298,
        features: ['Personalizable', '100 Páginas', 'Alta Calidad'],
        description: 'Álbum de fotos personalizable con 100 páginas y acabado premium',
        freeShipping: true
    },
    {
        id: 'mesa-postres-arcoiris',
        name: 'Mesa de Postres Arcoíris para Fiestas Infantiles',
        brand: 'Beistle',
        category: 'cumpleanos',
        occasion: 'cumpleanos',
        age: 'ninos',
        currentPrice: 125000,
        originalPrice: 165000,
        discount: 24,
        savings: 40000,
        image: 'templates/festejar.webp',
        rating: 4.6,
        reviews: 234,
        features: ['Colorida', 'Kit Completo', 'Incluye Dulces'],
        description: 'Mesa de postres temática arcoíris con dulces y decoración incluida',
        freeShipping: true
    },
    {
        id: 'juego-animacion-bingo-musical',
        name: 'Juego Animación Bingo Musical para Fiestas',
        brand: 'Creative',
        category: 'eventos',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 45000,
        originalPrice: 59000,
        discount: 24,
        savings: 14000,
        image: 'templates/festejar.webp',
        rating: 4.5,
        reviews: 456,
        features: ['Musical', 'Interactivo', 'Todas las Edades'],
        description: 'Juego de bingo musical interactivo para animar cualquier fiesta',
        freeShipping: false
    },
    {
        id: 'sorpresa-globo-gigante-revelacion',
        name: 'Globo Gigante Revelación Género Rosa/Azul',
        brand: 'Amscan',
        category: 'sorpresas',
        occasion: 'baby-shower',
        age: 'adultos',
        currentPrice: 35000,
        originalPrice: 45000,
        discount: 22,
        savings: 10000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 567,
        features: ['Revelación Género', 'Gigante', 'Incluye Confeti'],
        description: 'Globo gigante para revelación de género con confeti incluido',
        freeShipping: false
    },
    {
        id: 'decoracion-graduacion-universidad',
        name: 'Decoración Graduación Universidad Elegante',
        brand: 'Party City',
        category: 'decoracion',
        occasion: 'cumpleanos',
        age: 'adultos',
        currentPrice: 78000,
        originalPrice: 98000,
        discount: 20,
        savings: 20000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 189,
        features: ['Elegante', 'Universitaria', 'Kit Completo'],
        description: 'Decoración elegante para celebración de graduación universitaria',
        freeShipping: true
    },
    {
        id: 'regalo-marco-fotos-familia',
        name: 'Marco Fotos Familia Múltiple con Grabado',
        brand: 'Unique',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 56000,
        originalPrice: 72000,
        discount: 22,
        savings: 16000,
        image: 'templates/festejar.webp',
        rating: 4.6,
        reviews: 345,
        features: ['Múltiple', 'Grabado Personalizado', 'Madera Noble'],
        description: 'Marco múltiple para fotos familiares con grabado personalizado',
        freeShipping: true
    },
    {
        id: 'velas-aromaticas-set-relajacion',
        name: 'Set Velas Aromáticas Relajación 6 Aromas',
        brand: 'Beistle',
        category: 'regalos',
        occasion: 'bodas',
        age: 'adultos',
        currentPrice: 45000,
        originalPrice: 59000,
        discount: 24,
        savings: 14000,
        image: 'templates/festejar.webp',
        rating: 4.8,
        reviews: 789,
        features: ['6 Aromas', 'Relajante', 'Larga Duración'],
        description: 'Set de velas aromáticas con 6 aromas diferentes para relajación',
        freeShipping: false
    },
    {
        id: 'corona-cumpleanos-led-personalizada',
        name: 'Corona Cumpleaños LED Personalizada con Nombre',
        brand: 'Creative',
        category: 'cumpleanos',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 29000,
        originalPrice: 39000,
        discount: 26,
        savings: 10000,
        image: 'templates/festejar.webp',
        rating: 4.5,
        reviews: 678,
        features: ['LED', 'Personalizable', 'Recargable'],
        description: 'Corona de cumpleaños con luces LED y nombre personalizado',
        freeShipping: false
    },
    {
        id: 'kit-fiesta-piscina-tropical',
        name: 'Kit Fiesta Piscina Tropical con Flotadores',
        brand: 'Amscan',
        category: 'decoracion',
        occasion: 'cumpleanos',
        age: 'todas',
        currentPrice: 135000,
        originalPrice: 175000,
        discount: 23,
        savings: 40000,
        image: 'templates/festejar.webp',
        rating: 4.7,
        reviews: 234,
        features: ['Kit Completo', 'Flotadores Incluidos', 'Tropical'],
        description: 'Kit completo para fiesta en piscina con temática tropical',
        freeShipping: true
    }
];

// State management
let filteredProducts = [...partyProducts];
let currentPage = 1;
const productsPerPage = 12;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryButtons = document.querySelectorAll('.festejar-cat-btn');
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
        filteredProducts = [...partyProducts];
    } else {
        filteredProducts = partyProducts.filter(product => 
            product.category === category
        );
    }
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredProducts];

    // Apply occasion filters
    const selectedOccasions = getSelectedFilters('occasion');
    if (selectedOccasions.length > 0) {
        filtered = filtered.filter(product => 
            selectedOccasions.includes(product.occasion)
        );
    }

    // Apply age filters
    const selectedAges = getSelectedFilters('age');
    if (selectedAges.length > 0) {
        filtered = filtered.filter(product => 
            selectedAges.includes(product.age)
        );
    }

    // Apply brand filters
    const selectedBrands = getSelectedFilters('brand');
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => 
            selectedBrands.includes(product.brand.toLowerCase().replace(' ', '-'))
        );
    }

    // Apply price range filters
    const selectedPriceRanges = getSelectedFilters('price-range');
    if (selectedPriceRanges.length > 0) {
        filtered = filtered.filter(product => {
            return selectedPriceRanges.some(range => {
                const price = product.currentPrice;
                switch(range) {
                    case '25000': return price <= 25000;
                    case '50000': return price > 25000 && price <= 50000;
                    case '100000': return price > 50000 && price <= 100000;
                    case '200000': return price > 100000 && price <= 200000;
                    case '200001': return price > 200000;
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
                    case 'reutilizable': return product.features.some(f => f.includes('Reutilizable'));
                    case 'eco-friendly': return product.features.some(f => f.includes('Eco-Friendly'));
                    case 'personalizable': return product.features.some(f => f.includes('Personalizable'));
                    case 'incluye-accesorios': return product.features.some(f => f.includes('Incluye Accesorios'));
                    case 'kit-completo': return product.features.some(f => f.includes('Kit Completo'));
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
        filteredProducts = [...partyProducts];
    } else {
        const searchTerm = query.toLowerCase();
        filteredProducts = partyProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
            product.description.toLowerCase().includes(searchTerm)
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
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Simulate newest by reversing order
            filteredProducts.reverse();
            break;
        case 'occasion':
            filteredProducts.sort((a, b) => a.occasion.localeCompare(b.occasion));
            break;
        default: // featured
            filteredProducts.sort((a, b) => {
                // Prioritize rating, discount and features
                const aScore = (a.rating * 10) + (a.discount) + (a.features.length * 5);
                const bScore = (b.rating * 10) + (b.discount) + (b.features.length * 5);
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
                <i class="bi bi-balloon-heart display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">No se encontraron productos</h3>
                <p class="text-muted">Intenta ajustar los filtros o buscar otros términos para festejar.</p>
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
    
    // Determine occasion badge text
    const occasionTexts = {
        'cumpleanos': 'Cumpleaños',
        'bodas': 'Bodas',
        'navidad': 'Navidad',
        'halloween': 'Halloween',
        'baby-shower': 'Baby Shower'
    };
    
    // Determine age badge text
    const ageTexts = {
        'ninos': 'Niños',
        'adolescentes': 'Adolescentes',
        'adultos': 'Adultos',
        'todas': 'Todas'
    };
    
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="occasion-badge">${occasionTexts[product.occasion] || product.occasion}</div>
                    <div class="age-badge">${ageTexts[product.age] || product.age}</div>
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
    const product = partyProducts.find(p => p.id === productId);
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
            category: 'festejar',
            features: product.features
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
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; background: linear-gradient(135deg, var(--festejar-primary), var(--festejar-secondary));';
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="bi bi-balloon-heart me-2"></i>
                ${product.name} agregado a tu fiesta exitosamente
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
                <i class="bi bi-balloon-heart me-2"></i>
                ¡Suscripción exitosa! Prepárate para celebrar con ofertas especiales
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