import productService from './js/services/product-service.js';
import cartService from './js/services/cart-service.js';

let celularesProductos = [];
let productosFiltrados = [];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal;

document.addEventListener('DOMContentLoaded', async function() {
  await cargarProductos();
  inicializarFiltros();
  inicializarAccountPopup();
  renderizarProductos();
  actualizarContadores();
});

async function cargarProductos() {
  try {
    const response = await productService.getProductsByCategorySlug('celulares-smartphones');
    celularesProductos = response.map(p => ({
      id: p.id,
      nombre: p.name,
      marca: p.brand.toLowerCase(),
      memoria: extractMemory(p.name),
      precio: p.price,
      precioOriginal: p.originalPrice,
      descuento: p.discount,
      imagen: p.image,
      rating: p.rating,
      reviews: p.reviews,
      envioGratis: true,
      caracteristicas: p.tags.slice(0, 4),
      disponible: p.stock > 0
    }));
    
    productosFiltrados = [...celularesProductos];
  } catch (error) {
    console.error('Error al cargar productos:', error);
    celularesProductos = [];
    productosFiltrados = [];
  }
}

function extractMemory(productName) {
  const match = productName.match(/(\d+)\s*(GB|TB)/i);
  if (match) {
    const value = match[1];
    const unit = match[2].toUpperCase();
    return unit === 'TB' ? String(parseInt(value) * 1024) : value;
  }
  return '128';
}
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Ultra 512GB",
    marca: "samsung",
    memoria: "512",
    precio: 3899000,
    precioOriginal: 4299000,
    descuento: 9,
    imagen: "templates/samsung.webp",
    rating: 4.7,
    reviews: 285,
    envioGratis: true,
    caracteristicas: ["5G", "S Pen", "200MP", "One UI 6"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Xiaomi 14 Ultra 512GB",
    marca: "xiaomi",
    memoria: "512",
    precio: 2799000,
    precioOriginal: 3199000,
    descuento: 13,
    imagen: "templates/xiaomi.webp",
    rating: 4.6,
    reviews: 198,
    envioGratis: true,
    caracteristicas: ["5G", "Leica", "HyperOS", "120W"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Honor Magic6 Pro 512GB",
    marca: "honor",
    memoria: "512",
    precio: 2299000,
    precioOriginal: 2599000,
    descuento: 12,
    imagen: "templates/honor.webp",
    rating: 4.5,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["5G", "IA Eye", "MagicOS", "100W"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Google Pixel 8 Pro 256GB",
    marca: "google",
    memoria: "256",
    precio: 2499000,
    precioOriginal: 2799000,
    descuento: 11,
    imagen: "templates/google.webp",
    rating: 4.6,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["5G", "Tensor G3", "Android 14", "Magic Eraser"],
    disponible: true
  },
  {
    id: 6,
    nombre: "OnePlus 12 256GB",
    marca: "oneplus",
    memoria: "256",
    precio: 2199000,
    precioOriginal: 2499000,
    descuento: 12,
    imagen: "templates/celulares.webp",
    rating: 4.4,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["5G", "Hasselblad", "OxygenOS", "100W"],
    disponible: true
  },
  {
    id: 7,
    nombre: "iPhone 14 128GB",
    marca: "apple",
    memoria: "128",
    precio: 2899000,
    precioOriginal: 3199000,
    descuento: 9,
    imagen: "templates/iphone14.webp",
    rating: 4.7,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["5G", "Dual Cámara", "Face ID", "iOS 17"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Samsung Galaxy A55 5G 256GB",
    marca: "samsung",
    memoria: "256",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/samsung.webp",
    rating: 4.3,
    reviews: 356,
    envioGratis: true,
    caracteristicas: ["5G", "Triple Cámara", "Knox", "One UI 6"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Xiaomi Redmi Note 13 Pro 256GB",
    marca: "xiaomi",
    memoria: "256",
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/xiaomi.webp",
    rating: 4.2,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["4G", "200MP", "MIUI 14", "67W"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Honor X9b 5G 256GB",
    marca: "honor",
    memoria: "256",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/honor.webp",
    rating: 4.1,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["5G", "Ultra Bounce", "MagicOS", "35W"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Motorola Edge 40 Neo 256GB",
    marca: "motorola",
    memoria: "256",
    precio: 1099000,
    precioOriginal: 1299000,
    descuento: 15,
    imagen: "templates/motorola.webp",
    rating: 4.0,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["5G", "50MP", "Android 13", "68W"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Google Pixel 7a 128GB",
    marca: "google",
    memoria: "128",
    precio: 1399000,
    precioOriginal: 1599000,
    descuento: 13,
    imagen: "templates/google.webp",
    rating: 4.4,
    reviews: 298,
    envioGratis: true,
    caracteristicas: ["5G", "Tensor G2", "Android 14", "Night Sight"],
    disponible: true
  },
  {
    id: 13,
    nombre: "OnePlus Nord 3 5G 256GB",
    marca: "oneplus",
    memoria: "256",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/celulares.webp",
    rating: 4.3,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["5G", "50MP", "OxygenOS", "80W"],
    disponible: true
  },
  {
    id: 14,
    nombre: "iPhone 13 128GB",
    marca: "apple",
    memoria: "128",
    precio: 2399000,
    precioOriginal: 2699000,
    descuento: 11,
    imagen: "templates/iphone.webp",
    rating: 4.6,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["5G", "Dual Cámara", "Face ID", "iOS 17"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Samsung Galaxy Z Flip5 256GB",
    marca: "samsung",
    memoria: "256",
    precio: 3199000,
    precioOriginal: 3599000,
    descuento: 11,
    imagen: "templates/samsung.webp",
    rating: 4.5,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["5G", "Plegable", "Flex Window", "One UI 6"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Xiaomi 13T Pro 256GB",
    marca: "xiaomi",
    memoria: "256",
    precio: 1799000,
    precioOriginal: 2099000,
    descuento: 14,
    imagen: "templates/xiaomi.webp",
    rating: 4.4,
    reviews: 245,
    envioGratis: true,
    caracteristicas: ["5G", "Leica", "HyperOS", "120W"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Honor 90 5G 256GB",
    marca: "honor",
    memoria: "256",
    precio: 1399000,
    precioOriginal: 1599000,
    descuento: 13,
    imagen: "templates/honor.webp",
    rating: 4.2,
    reviews: 198,
    envioGratis: true,
    caracteristicas: ["5G", "200MP", "MagicOS", "66W"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Motorola Razr 40 Ultra 256GB",
    marca: "motorola",
    memoria: "256",
    precio: 2799000,
    precioOriginal: 3199000,
    descuento: 13,
    imagen: "templates/motorola.webp",
    rating: 4.3,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["5G", "Plegable", "Ready For", "30W"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Google Pixel Fold 256GB",
    marca: "google",
    memoria: "256",
    precio: 4899000,
    precioOriginal: 5399000,
    descuento: 9,
    imagen: "templates/google.webp",
    rating: 4.4,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["5G", "Plegable", "Tensor G2", "Magic Eraser"],
    disponible: true
  },
  {
    id: 20,
    nombre: "OnePlus Open 512GB",
    marca: "oneplus",
    memoria: "512",
    precio: 4199000,
    precioOriginal: 4699000,
    descuento: 11,
    imagen: "templates/celulares.webp",
    rating: 4.5,
    reviews: 45,
    envioGratis: true,
    caracteristicas: ["5G", "Plegable", "Hasselblad", "67W"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Samsung Galaxy A35 5G 128GB",
    marca: "samsung",
    memoria: "128",
    precio: 999000,
    precioOriginal: 1199000,
    descuento: 17,
    imagen: "templates/samsung.webp",
    rating: 4.1,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["5G", "50MP", "Knox", "25W"],
    disponible: true
  },
  {
    id: 22,
    nombre: "Xiaomi Poco X6 Pro 5G 256GB",
    marca: "xiaomi",
    memoria: "256",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/xiaomi.webp",
    rating: 4.3,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["5G", "Gaming", "HyperOS", "67W"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Honor Magic V2 512GB",
    marca: "honor",
    memoria: "512",
    precio: 3999000,
    precioOriginal: 4499000,
    descuento: 11,
    imagen: "templates/honor.webp",
    rating: 4.6,
    reviews: 78,
    envioGratis: true,
    caracteristicas: ["5G", "Plegable", "Titan", "66W"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Motorola Edge 40 Pro 256GB",
    marca: "motorola",
    memoria: "256",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/motorola.webp",
    rating: 4.2,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["5G", "50MP", "Ready For", "125W"],
    disponible: true
  },
  {
    id: 25,
    nombre: "Google Pixel 8a 128GB",
    marca: "google",
    memoria: "128",
    precio: 1599000,
    precioOriginal: 1799000,
    descuento: 11,
    imagen: "templates/google.webp",
    rating: 4.3,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["5G", "Tensor G3", "Android 14", "18W"],
    disponible: true
  },
  // Agregar más productos con diferentes memorias
  {
    id: 26,
    nombre: "Samsung Galaxy A24 64GB",
    marca: "samsung",
    memoria: "64",
    precio: 799000,
    precioOriginal: 899000,
    descuento: 11,
    imagen: "templates/samsung.webp",
    rating: 4.0,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["4G", "50MP", "Knox", "25W"],
    disponible: true
  },
  {
    id: 27,
    nombre: "Xiaomi Redmi 12 64GB",
    marca: "xiaomi",
    memoria: "64",
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/xiaomi.webp",
    rating: 3.9,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["4G", "50MP", "MIUI 14", "18W"],
    disponible: true
  },
  {
    id: 28,
    nombre: "Motorola Moto G54 64GB",
    marca: "motorola",
    memoria: "64",
    precio: 649000,
    precioOriginal: 749000,
    descuento: 13,
    imagen: "templates/motorola.webp",
    rating: 4.0,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["4G", "50MP", "Android 13", "15W"],
    disponible: true
  },
  {
    id: 29,
    nombre: "TECNO Spark 10 Pro 128GB",
    marca: "tecno",
    memoria: "128",
    precio: 729000,
    precioOriginal: 829000,
    descuento: 12,
    imagen: "templates/celulares.webp",
    rating: 4.1,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["4G", "48MP", "HiOS", "18W"],
    disponible: true
  },
  {
    id: 30,
    nombre: "ZTE Blade A72 64GB",
    marca: "zte",
    memoria: "64",
    precio: 449000,
    precioOriginal: 529000,
    descuento: 15,
    imagen: "templates/celulares.webp",
    rating: 3.8,
    reviews: 45,
    envioGratis: true,
    caracteristicas: ["4G", "13MP", "Android 12", "10W"],
    disponible: true
  },
  {
    id: 31,
    nombre: "OPPO A78 256GB",
    marca: "oppo",
    memoria: "256",
    precio: 1099000,
    precioOriginal: 1249000,
    descuento: 12,
    imagen: "templates/celulares.webp",
    rating: 4.2,
    reviews: 134,
    envioGratis: true,
    caracteristicas: ["4G", "50MP", "ColorOS", "33W"],
    disponible: true
  },
  {
    id: 32,
    nombre: "Realme C55 128GB",
    marca: "realme",
    memoria: "128",
    precio: 849000,
    precioOriginal: 949000,
    descuento: 11,
    imagen: "templates/celulares.webp",
    rating: 4.0,
    reviews: 78,
    envioGratis: true,
    caracteristicas: ["4G", "64MP", "Realme UI", "33W"],
    disponible: true
  },
  {
    id: 33,
    nombre: "Kalley Element Pro 64GB",
    marca: "kalley",
    memoria: "64",
    precio: 399000,
    precioOriginal: 459000,
    descuento: 13,
    imagen: "templates/celulares.webp",
    rating: 3.7,
    reviews: 56,
    envioGratis: true,
    caracteristicas: ["4G", "13MP", "Android 11", "10W"],
    disponible: true
  }
];

let productosFiltrados = [...celularesProductos];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  inicializarFiltros();
  inicializarAccountPopup();
  
  // Inicializar búsqueda global
  buscadorGlobal = new SearchEngine(celularesProductos, 'celulares');
  buscadorGlobal.inicializar();
  
  // Sobrescribir función de actualización para integrar con filtros
  buscadorGlobal.actualizarResultados = function() {
    aplicarFiltros();
  };
  
  // Sobrescribir función de creación de tarjetas
  buscadorGlobal.crearTarjetaProducto = crearCardProducto;
  
  renderizarProductos();
  actualizarContadores();
});

// ===== BÚSQUEDA =====
function realizarBusqueda(termino) {
  if (buscadorGlobal) {
    buscadorGlobal.buscar(termino);
  }
}

function mostrarMensajeNoResultados(termino) {
  if (buscadorGlobal) {
    buscadorGlobal.mostrarSinResultados(termino);
  }
}

function buscarProductosSimilares(termino) {
  if (buscadorGlobal) {
    return buscadorGlobal.productosOriginales.filter(producto => {
      const terminosRelacionados = buscadorGlobal.extraerTerminosRelacionados(termino);
      return terminosRelacionados.some(terminoRel => 
        buscadorGlobal.coincideConProducto(producto, terminoRel)
      );
    }).slice(0, 6);
  }
  return [];
}

function crearCardProducto(producto) {
  return `
    <div class="product-card" data-id="${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="product-price">
          <span class="price-current">$${producto.precio.toLocaleString()}</span>
          ${producto.precioOriginal ? `<span class="price-original">$${producto.precioOriginal.toLocaleString()}</span>` : ''}
          ${producto.descuento ? `<span class="price-discount">${producto.descuento}% OFF</span>` : ''}
        </div>
        <div class="product-features">
          ${producto.caracteristicas.map(car => `<span class="feature-tag">${car}</span>`).join('')}
        </div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(producto.rating))}${'☆'.repeat(5-Math.floor(producto.rating))}</span>
          <span class="rating-text">(${producto.reviews})</span>
        </div>
        ${producto.envioGratis ? '<div class="product-shipping">Envio gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `;
}

// ===== ACCOUNT POPUP =====
function inicializarAccountPopup() {
  // Agregar evento al link de "Mi cuenta"
  const accountLinks = document.querySelectorAll('.nav-link');
  accountLinks.forEach(link => {
    if (link.textContent.trim().includes('Mi cuenta')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        toggleAccountPopup();
      });
    }
  });

  // Cerrar popup al hacer click fuera
  document.addEventListener('click', function(e) {
    const popup = document.getElementById('account-popup');
    if (popup && !popup.contains(e.target) && !e.target.closest('.nav-link')) {
      popup.style.display = 'none';
    }
  });
}

function toggleAccountPopup() {
  const popup = document.getElementById('account-popup');
  if (popup) {
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
  }
}

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de marca superiores
  document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Si ya está activo, no hacer nada
      if (this.classList.contains('active')) {
        return;
      }
      
      document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const marca = this.dataset.brand;
      sincronizarFiltrosMarca(marca);
      aplicarFiltros();
    });
  });

  // Filtros de memoria - usar la clase correcta 'memory-btn'
  document.querySelectorAll('.memory-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.memory-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      aplicarFiltros();
    });
  });

  // Filtros de sidebar
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.name === 'marca') {
        sincronizarFiltrosHorizontales();
      }
      aplicarFiltros();
    });
  });

  // Ordenamiento
  document.getElementById('sort-select').addEventListener('change', function() {
    ordenarProductos(this.value);
    renderizarProductos();
  });
}

function sincronizarFiltrosMarca(marcaSeleccionada) {
  // Sincronizar checkboxes del sidebar
  document.querySelectorAll('input[name="marca"]').forEach(checkbox => {
    checkbox.checked = checkbox.value === marcaSeleccionada;
  });
}

function sincronizarFiltrosHorizontales() {
  const marcasSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
    .map(cb => cb.value);
  
  // Si solo hay una marca seleccionada, activar el botón correspondiente
  if (marcasSeleccionadas.length === 1) {
    document.querySelectorAll('.brand-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.brand === marcasSeleccionadas[0]);
    });
  } else {
    // Si hay múltiples marcas o ninguna, desactivar todos los botones
    document.querySelectorAll('.brand-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
  // Obtener productos base del buscador global
  const productosBase = buscadorGlobal ? buscadorGlobal.productos : celularesProductos;
  
  productosFiltrados = productosBase.filter(producto => {
    // Filtro de marca - revisar tanto botones superiores como checkboxes
    const marcasBotonesActivos = Array.from(document.querySelectorAll('.brand-btn.active'))
      .map(btn => btn.dataset.brand);
    const marcasCheckboxSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
      .map(cb => cb.value);
    
    // Combinar ambos tipos de filtros de marca
    const marcasSeleccionadas = [...marcasBotonesActivos, ...marcasCheckboxSeleccionadas];
    
    if (marcasSeleccionadas.length > 0 && !marcasSeleccionadas.includes(producto.marca)) {
      return false;
    }

    // Filtro de memoria - corregir el selector y normalizar valores
    const memoriaBtn = document.querySelector('.memory-btn.active');
    if (memoriaBtn) {
      const memoriaSeleccionada = memoriaBtn.dataset.memory;
      if (memoriaSeleccionada && memoriaSeleccionada !== 'all') {
        // Normalizar formato de memoria (agregar 'gb' si no lo tiene)
        const memoriaProducto = producto.memoria.replace('gb', '');
        const memoriaFiltro = memoriaSeleccionada.replace('gb', '');
        
        if (memoriaProducto !== memoriaFiltro) {
          return false;
        }
      }
    }

    // Filtro de precio (si existe)
    const preciosSeleccionados = Array.from(document.querySelectorAll('input[name="precio"]:checked'))
      .map(cb => cb.value);
    if (preciosSeleccionados.length > 0) {
      const cumplePrecio = preciosSeleccionados.some(rango => {
        switch(rango) {
          case 'menos-1m':
            return producto.precio < 1000000;
          case '1m-2m':
            return producto.precio >= 1000000 && producto.precio < 2000000;
          case '2m-3m':
            return producto.precio >= 2000000 && producto.precio < 3000000;
          case 'mas-3m':
            return producto.precio >= 3000000;
          default:
            return true;
        }
      });
      if (!cumplePrecio) return false;
    }

    return true;
  });

  paginaActual = 1;
  renderizarProductos();
  actualizarContadores();
}

// ===== ORDENAMIENTO =====
function ordenarProductos(criterio) {
  switch(criterio) {
    case 'precio-menor':
      productosFiltrados.sort((a, b) => a.precio - b.precio);
      break;
    case 'precio-mayor':
      productosFiltrados.sort((a, b) => b.precio - a.precio);
      break;
    case 'mejor-valorados':
      productosFiltrados.sort((a, b) => b.rating - a.rating);
      break;
    case 'mas-vendidos':
      productosFiltrados.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'descuento':
      productosFiltrados.sort((a, b) => b.descuento - a.descuento);
      break;
    default:
      // Relevancia - orden original
      break;
  }
}

// ===== RENDERIZAR PRODUCTOS =====
function renderizarProductos() {
  const grid = document.getElementById('products-grid');
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosEnPagina = productosFiltrados.slice(inicio, fin);

  // Si no hay productos y hay una búsqueda activa, el buscador global maneja el mensaje
  if (productosEnPagina.length === 0 && buscadorGlobal && buscadorGlobal.terminoBusqueda) {
    return; // El buscador global ya mostró el mensaje
  }

  // Si no hay productos pero no hay búsqueda, mostrar mensaje de filtros
  if (productosEnPagina.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info text-center">
          <i class="bi bi-funnel" style="font-size: 48px; color: #007bff;"></i>
          <h4 class="mt-3">No hay productos con estos filtros</h4>
          <p class="mb-2">Intenta ajustar los filtros de marca o memoria para ver más resultados.</p>
          <button class="btn btn-outline-primary" onclick="limpiarFiltros()">Limpiar filtros</button>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = productosEnPagina.map(producto => crearCardProducto(producto)).join('');
}

// Función para limpiar filtros
function limpiarFiltros() {
  // Limpiar filtros de marca
  document.querySelectorAll('.brand-btn.active').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('input[name="marca"]:checked').forEach(checkbox => checkbox.checked = false);
  
  // Limpiar filtros de memoria
  document.querySelectorAll('.memory-btn.active').forEach(btn => btn.classList.remove('active'));
  
  // Limpiar búsqueda si existe
  if (buscadorGlobal) {
    buscadorGlobal.limpiar();
  }
  
  // Aplicar filtros vacíos
  aplicarFiltros();
}

// ===== ACTUALIZAR CONTADORES =====
function actualizarContadores() {
  const totalProductos = productosFiltrados.length;
  const inicio = (paginaActual - 1) * productosPorPagina + 1;
  const fin = Math.min(paginaActual * productosPorPagina, totalProductos);
  
  document.getElementById('showing-count').textContent = fin - inicio + 1;
  document.getElementById('total-count').textContent = totalProductos;

  // Actualizar contadores en filtros del sidebar
  actualizarContadoresFiltros();
}

function actualizarContadoresFiltros() {
  // Contar productos por marca
  const conteoMarcas = {};
  productosFiltrados.forEach(producto => {
    conteoMarcas[producto.marca] = (conteoMarcas[producto.marca] || 0) + 1;
  });

  document.querySelectorAll('input[name="marca"]').forEach(checkbox => {
    const marca = checkbox.value;
    const count = conteoMarcas[marca] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por memoria
  const conteoMemoria = {};
  productosFiltrados.forEach(producto => {
    conteoMemoria[producto.memoria] = (conteoMemoria[producto.memoria] || 0) + 1;
  });

  document.querySelectorAll('input[name="memoria"]').forEach(checkbox => {
    const memoria = checkbox.value;
    const count = conteoMemoria[memoria] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por precio
  const conteoPrecio = {
    'menos-1m': 0,
    '1m-2m': 0,
    '2m-3m': 0,
    'mas-3m': 0
  };

  productosFiltrados.forEach(producto => {
    if (producto.precio < 1000000) conteoPrecio['menos-1m']++;
    else if (producto.precio < 2000000) conteoPrecio['1m-2m']++;
    else if (producto.precio < 3000000) conteoPrecio['2m-3m']++;
    else conteoPrecio['mas-3m']++;
  });

  document.querySelectorAll('input[name="precio"]').forEach(checkbox => {
    const precio = checkbox.value;
    const count = conteoPrecio[precio] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}