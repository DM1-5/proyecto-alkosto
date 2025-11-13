// ===== BASE DE DATOS DE PRODUCTOS - ALKOSTO ECOMMERCE =====
// Sistema centralizado de productos para búsqueda global

const PRODUCTS_DATABASE = {
  // CELULARES Y SMARTPHONES
  celulares: [
    {
      id: 'cel_001',
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      category: 'celulares',
      price: 5499000,
      originalPrice: 6199000,
      discount: 11,
      rating: 4.8,
      reviews: 1247,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
      description: 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7"',
      specs: {
        storage: '256GB',
        ram: '8GB',
        screen: '6.7" Super Retina XDR',
        camera: '48MP + 12MP + 12MP',
        battery: 'Hasta 29 horas de video'
      },
      tags: ['5g', 'ios', 'premium', 'camara-pro', 'titanio'],
      stock: 45,
      featured: true
    },
    {
      id: 'cel_002',
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      category: 'celulares',
      price: 4899000,
      originalPrice: 5299000,
      discount: 8,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300',
      description: 'Galaxy S24 Ultra con S Pen, cámara de 200MP y pantalla Dynamic AMOLED 2X',
      specs: {
        storage: '512GB',
        ram: '12GB',
        screen: '6.8" Dynamic AMOLED 2X',
        camera: '200MP + 50MP + 12MP + 10MP',
        battery: '5000mAh'
      },
      tags: ['5g', 'android', 's-pen', 'camara-zoom', 'ai'],
      stock: 67,
      featured: true
    },
    {
      id: 'cel_003',
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      category: 'celulares',
      price: 3899000,
      originalPrice: 4199000,
      discount: 7,
      rating: 4.6,
      reviews: 534,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
      description: 'Pixel 8 Pro con inteligencia artificial Tensor G3 y cámara computacional avanzada',
      specs: {
        storage: '256GB',
        ram: '12GB',
        screen: '6.7" LTPO OLED',
        camera: '50MP + 48MP + 48MP',
        battery: '5050mAh'
      },
      tags: ['5g', 'android', 'ai-photography', 'google', 'pure-android'],
      stock: 23,
      featured: false
    }
  ],

  // GAMING Y CONSOLAS
  gaming: [
    {
      id: 'gam_001',
      name: 'PlayStation 5 Pro',
      brand: 'Sony',
      category: 'gaming',
      price: 3499000,
      originalPrice: 3799000,
      discount: 8,
      rating: 4.9,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300',
      description: 'PlayStation 5 Pro con GPU mejorada para gaming en 8K y ray tracing avanzado',
      specs: {
        storage: '2TB SSD',
        gpu: 'RDNA 3 Custom',
        cpu: 'AMD Zen 4',
        resolution: '8K ready',
        features: 'Ray Tracing, 3D Audio'
      },
      tags: ['8k', 'ray-tracing', 'ssd', 'exclusivos', 'vr-ready'],
      stock: 12,
      featured: true
    },
    {
      id: 'gam_002',
      name: 'Xbox Series X',
      brand: 'Microsoft',
      category: 'gaming',
      price: 2899000,
      originalPrice: 3199000,
      discount: 9,
      rating: 4.7,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=300',
      description: 'Xbox Series X con 12 teraflops de potencia y compatibilidad con 4 generaciones de juegos',
      specs: {
        storage: '1TB SSD',
        gpu: '12 Teraflops RDNA 2',
        cpu: 'AMD Zen 2',
        resolution: '4K a 120fps',
        features: 'Game Pass, Smart Delivery'
      },
      tags: ['4k', '120fps', 'gamepass', 'retrocompatible', 'quick-resume'],
      stock: 34,
      featured: true
    },
    {
      id: 'gam_003',
      name: 'Nintendo Switch OLED',
      brand: 'Nintendo',
      category: 'gaming',
      price: 1699000,
      originalPrice: 1899000,
      discount: 11,
      rating: 4.8,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      description: 'Nintendo Switch OLED con pantalla vibrante de 7" y audio mejorado',
      specs: {
        storage: '64GB + microSD',
        screen: '7" OLED',
        battery: 'Hasta 9 horas',
        modes: 'TV, Sobremesa, Portátil',
        features: 'Joy-Con HD Rumble'
      },
      tags: ['portatil', 'oled', 'exclusivos', 'familia', 'hibrida'],
      stock: 89,
      featured: false
    }
  ],

  // TELEVISORES
  televisores: [
    {
      id: 'tv_001',
      name: 'Samsung Neo QLED 75" QN95C',
      brand: 'Samsung',
      category: 'televisores',
      price: 8999000,
      originalPrice: 9999000,
      discount: 10,
      rating: 4.9,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300',
      description: 'Samsung Neo QLED 75" con Quantum Matrix Technology y Object Tracking Sound+',
      specs: {
        size: '75 pulgadas',
        resolution: '4K Ultra HD',
        technology: 'Neo QLED',
        hdr: 'HDR10+ / Dolby Vision',
        refresh: '120Hz VRR'
      },
      tags: ['4k', 'qled', 'gaming', 'smart-tv', 'hdr'],
      stock: 15,
      featured: true
    },
    {
      id: 'tv_002',
      name: 'LG OLED C3 65"',
      brand: 'LG',
      category: 'televisores',
      price: 6499000,
      originalPrice: 7299000,
      discount: 11,
      rating: 4.8,
      reviews: 623,
      image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=300',
      description: 'LG OLED C3 65" con tecnología α9 Gen6 AI Processor y Dolby Vision IQ',
      specs: {
        size: '65 pulgadas',
        resolution: '4K Ultra HD',
        technology: 'OLED',
        hdr: 'Dolby Vision IQ',
        refresh: '120Hz G-SYNC'
      },
      tags: ['4k', 'oled', 'dolby-vision', 'gaming', 'webos'],
      stock: 28,
      featured: true
    }
  ],

  // COMPUTADORES
  computadores: [
    {
      id: 'comp_001',
      name: 'MacBook Pro 16" M3 Max',
      brand: 'Apple',
      category: 'computadores',
      price: 12999000,
      originalPrice: 14299000,
      discount: 9,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300',
      description: 'MacBook Pro 16" con chip M3 Max, pantalla Liquid Retina XDR y batería de hasta 22 horas',
      specs: {
        processor: 'Apple M3 Max',
        ram: '36GB',
        storage: '1TB SSD',
        screen: '16.2" Liquid Retina XDR',
        graphics: '40-core GPU'
      },
      tags: ['m3-max', 'pro', 'video-editing', 'retina', 'macos'],
      stock: 8,
      featured: true
    },
    {
      id: 'comp_002',
      name: 'Dell XPS 15 9530',
      brand: 'Dell',
      category: 'computadores',
      price: 7899000,
      originalPrice: 8599000,
      discount: 8,
      rating: 4.7,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
      description: 'Dell XPS 15 con Intel Core i7-13700H y NVIDIA RTX 4070 para trabajo profesional',
      specs: {
        processor: 'Intel Core i7-13700H',
        ram: '32GB DDR5',
        storage: '1TB SSD',
        screen: '15.6" 4K OLED',
        graphics: 'NVIDIA RTX 4070'
      },
      tags: ['intel', 'rtx', '4k-oled', 'creative', 'windows'],
      stock: 23,
      featured: false
    }
  ],

  // AUDIO
  audio: [
    {
      id: 'aud_001',
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      category: 'audio',
      price: 1299000,
      originalPrice: 1499000,
      discount: 13,
      rating: 4.8,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300',
      description: 'Audífonos inalámbricos con cancelación de ruido líder en la industria',
      specs: {
        type: 'Over-ear',
        connectivity: 'Bluetooth 5.2',
        battery: '30 horas',
        features: 'ANC, LDAC, Multipoint',
        microphones: '8 micrófonos'
      },
      tags: ['noise-cancelling', 'bluetooth', 'premium', 'travel', 'ldac'],
      stock: 67,
      featured: true
    },
    {
      id: 'aud_002',
      name: 'Apple AirPods Pro 2',
      brand: 'Apple',
      category: 'audio',
      price: 899000,
      originalPrice: 999000,
      discount: 10,
      rating: 4.7,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300',
      description: 'AirPods Pro de segunda generación con chip H2 y cancelación adaptativa',
      specs: {
        type: 'In-ear',
        connectivity: 'Bluetooth 5.3',
        battery: '6h + 30h estuche',
        features: 'ANC Adaptativo, Audio Espacial',
        compatibility: 'iOS, macOS'
      },
      tags: ['true-wireless', 'anc', 'spatial-audio', 'ios', 'h2-chip'],
      stock: 145,
      featured: true
    }
  ],

  // ELECTROHOGAR
  electrohogar: [
    {
      id: 'elec_001',
      name: 'Nevera Samsung RF28T5001SR',
      brand: 'Samsung',
      category: 'electrohogar',
      price: 4299000,
      originalPrice: 4799000,
      discount: 10,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300',
      description: 'Nevera French Door 28 pies con tecnología Twin Cooling Plus y dispensador',
      specs: {
        capacity: '28 pies cúbicos',
        type: 'French Door',
        features: 'Twin Cooling Plus, Dispensador',
        energy: 'Eficiencia A+',
        warranty: '10 años compresor'
      },
      tags: ['french-door', 'dispensador', 'eficiente', 'familia', 'twin-cooling'],
      stock: 12,
      featured: false
    }
  ],

  // SMARTWATCH
  smartwatch: [
    {
      id: 'smart_001',
      name: 'Apple Watch Ultra 2',
      brand: 'Apple',
      category: 'smartwatch',
      price: 3499000,
      originalPrice: 3799000,
      discount: 8,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300',
      description: 'Apple Watch Ultra 2 con caja de titanio y resistencia extrema para aventuras',
      specs: {
        display: '49mm Always-On Retina',
        battery: 'Hasta 72 horas',
        water: 'Resistente 100m',
        features: 'GPS Dual, Celular, Sirena',
        materials: 'Titanio grado aeroespacial'
      },
      tags: ['titanio', 'ultra', 'gps-dual', 'extremo', 'celular'],
      stock: 23,
      featured: true
    },
    {
      id: 'smart_002',
      name: 'Samsung Galaxy Watch 6 Classic',
      brand: 'Samsung',
      category: 'smartwatch',
      price: 1299000,
      originalPrice: 1499000,
      discount: 13,
      rating: 4.7,
      reviews: 834,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
      description: 'Galaxy Watch 6 Classic con bisel giratorio y monitoreo avanzado de salud',
      specs: {
        display: '47mm Super AMOLED',
        battery: 'Hasta 40 horas',
        water: 'IP68 + 5ATM',
        features: 'Bisel giratorio, Samsung Health',
        os: 'Wear OS powered by Samsung'
      },
      tags: ['bisel-giratorio', 'wear-os', 'samsung-health', 'clasico', '5atm'],
      stock: 45,
      featured: false
    }
  ]
};

// API SIMULADA PARA BÚSQUEDA DE PRODUCTOS
class ProductsAPI {
  constructor() {
    this.allProducts = this.flattenProducts();
    this.searchHistory = [];
  }

  // Aplanar todos los productos en un solo array
  flattenProducts() {
    const products = [];
    Object.keys(PRODUCTS_DATABASE).forEach(category => {
      PRODUCTS_DATABASE[category].forEach(product => {
        products.push({
          ...product,
          categoryName: this.getCategoryDisplayName(category)
        });
      });
    });
    return products;
  }

  getCategoryDisplayName(category) {
    const displayNames = {
      'celulares': 'Celulares',
      'gaming': 'Gaming',
      'televisores': 'Televisores',
      'computadores': 'Computadores',
      'audio': 'Audio',
      'electrohogar': 'Electrohogar',
      'smartwatch': 'Smartwatch'
    };
    return displayNames[category] || category;
  }

  // Endpoint principal: /api/products?query=texto
  async search(query, options = {}) {
    return new Promise((resolve) => {
      // Simular latencia de red
      setTimeout(() => {
        try {
          const {
            limit = 20,
            offset = 0,
            category = null,
            sortBy = 'relevance',
            minPrice = 0,
            maxPrice = Infinity,
            minRating = 0
          } = options;

          let results = [];

          if (!query || query.trim().length === 0) {
            // Sin query, retornar productos destacados
            results = this.allProducts.filter(p => p.featured);
          } else {
            // Búsqueda con query
            results = this.searchProducts(query.trim());
          }

          // Aplicar filtros
          if (category) {
            results = results.filter(p => p.category === category);
          }

          results = results.filter(p => 
            p.price >= minPrice && 
            p.price <= maxPrice && 
            p.rating >= minRating
          );

          // Ordenamiento
          results = this.sortResults(results, sortBy);

          // Paginación
          const total = results.length;
          const paginatedResults = results.slice(offset, offset + limit);

          // Guardar en historial
          if (query && query.trim().length > 0) {
            this.addToSearchHistory(query.trim());
          }

          resolve({
            success: true,
            data: {
              products: paginatedResults,
              total,
              page: Math.floor(offset / limit) + 1,
              totalPages: Math.ceil(total / limit),
              query,
              filters: { category, minPrice, maxPrice, minRating, sortBy }
            },
            suggestions: query ? this.generateSuggestions(query) : []
          });

        } catch (error) {
          resolve({
            success: false,
            error: 'Error interno del servidor',
            data: { products: [], total: 0 }
          });
        }
      }, Math.random() * 300 + 100); // 100-400ms de latencia simulada
    });
  }

  // Búsqueda inteligente de productos
  searchProducts(query) {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(word => word.length > 0);

    return this.allProducts.filter(product => {
      const searchableText = [
        product.name,
        product.brand,
        product.description,
        product.category,
        product.categoryName,
        ...product.tags,
        ...Object.values(product.specs || {})
      ].join(' ').toLowerCase();

      // Puntuación de relevancia
      let score = 0;

      // Coincidencia exacta en nombre (máxima prioridad)
      if (product.name.toLowerCase().includes(queryLower)) {
        score += 100;
      }

      // Coincidencia en marca
      if (product.brand.toLowerCase().includes(queryLower)) {
        score += 50;
      }

      // Coincidencias por palabras individuales
      queryWords.forEach(word => {
        if (searchableText.includes(word)) {
          score += 10;
        }
      });

      // Coincidencias en tags (relevancia media)
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower)) {
          score += 20;
        }
      });

      // Agregar relevancia por popularidad
      score += Math.min(product.reviews / 100, 10);
      score += product.rating * 2;

      // Almacenar score para ordenamiento posterior
      product._searchScore = score;

      return score > 0;
    }).sort((a, b) => b._searchScore - a._searchScore);
  }

  // Generar sugerencias de búsqueda
  generateSuggestions(query) {
    const suggestions = new Set();
    const queryLower = query.toLowerCase();

    // Sugerencias basadas en nombres de productos
    this.allProducts.forEach(product => {
      const name = product.name.toLowerCase();
      if (name.includes(queryLower) && name !== queryLower) {
        suggestions.add(product.name);
      }
    });

    // Sugerencias basadas en marcas
    this.allProducts.forEach(product => {
      const brand = product.brand.toLowerCase();
      if (brand.includes(queryLower) && brand !== queryLower) {
        suggestions.add(product.brand);
      }
    });

    // Sugerencias basadas en categorías
    Object.values(PRODUCTS_DATABASE).forEach((categoryProducts, index) => {
      const categoryName = this.getCategoryDisplayName(Object.keys(PRODUCTS_DATABASE)[index]);
      if (categoryName.toLowerCase().includes(queryLower)) {
        suggestions.add(categoryName);
      }
    });

    return Array.from(suggestions).slice(0, 5);
  }

  // Ordenar resultados
  sortResults(products, sortBy) {
    switch (sortBy) {
      case 'price_asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price_desc':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'popularity':
        return products.sort((a, b) => b.reviews - a.reviews);
      case 'name':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
        return products.sort((a, b) => b.id.localeCompare(a.id)); // Asumiendo que IDs más altos = más nuevos
      case 'relevance':
      default:
        return products; // Ya ordenados por relevancia en searchProducts
    }
  }

  // Historial de búsquedas
  addToSearchHistory(query) {
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query);
      if (this.searchHistory.length > 10) {
        this.searchHistory = this.searchHistory.slice(0, 10);
      }
    }
  }

  getSearchHistory() {
    return this.searchHistory;
  }

  // Obtener categorías disponibles
  getCategories() {
    return Object.keys(PRODUCTS_DATABASE).map(key => ({
      id: key,
      name: this.getCategoryDisplayName(key),
      count: PRODUCTS_DATABASE[key].length
    }));
  }

  // Obtener productos por categoría
  async getByCategory(category, limit = 20) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = PRODUCTS_DATABASE[category] || [];
        resolve({
          success: true,
          data: {
            products: products.slice(0, limit),
            total: products.length,
            category: this.getCategoryDisplayName(category)
          }
        });
      }, 100);
    });
  }

  // Obtener producto por ID
  async getById(productId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = this.allProducts.find(p => p.id === productId);
        if (product) {
          resolve({
            success: true,
            data: { product }
          });
        } else {
          resolve({
            success: false,
            error: 'Producto no encontrado'
          });
        }
      }, 100);
    });
  }
}

// Instancia global de la API
window.ProductsAPI = new ProductsAPI();

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS_DATABASE, ProductsAPI };
}