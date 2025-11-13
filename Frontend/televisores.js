// ===== TELEVISORES PRODUCTS DATA =====
const televisoresProductos = [
  {
    id: 1,
    nombre: "Samsung 55 QLED 4K QN90C Neo QLED",
    marca: "samsung",
    tamaño: "50-55",
    resolucion: "4k",
    tipo: "neo-qled",
    precio: 3299000,
    precioOriginal: 3799000,
    descuento: 13,
    imagen: "templates/c-televisores.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["4K", "HDR10+", "Smart TV", "Gaming"],
    specs: {
      tamaño: "55\"",
      resolucion: "4K UHD",
      panel: "Neo QLED",
      smartTV: "Tizen OS"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 2,
    nombre: "LG 65 OLED C3 4K Smart TV",
    marca: "lg",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "oled",
    precio: 4799000,
    precioOriginal: 5499000,
    descuento: 13,
    imagen: "templates/c-televisores.webp",
    rating: 4.9,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["OLED", "Dolby Vision", "webOS", "α9 Gen6"],
    specs: {
      tamaño: "65\"",
      resolucion: "4K UHD",
      panel: "OLED",
      smartTV: "webOS 23"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 3,
    nombre: "Sony 50 Bravia XR X90L 4K Google TV",
    marca: "sony",
    tamaño: "50-55",
    resolucion: "4k",
    tipo: "led",
    precio: 2899000,
    precioOriginal: 3299000,
    descuento: 12,
    imagen: "templates/c-televisores.webp",
    rating: 4.6,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["XR", "Cognitive", "Google TV", "HDMI 2.1"],
    specs: {
      tamaño: "50\"",
      resolucion: "4K UHD",
      panel: "Full Array LED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 4,
    nombre: "TCL 43 4K UHD Google TV C635",
    marca: "tcl",
    tamaño: "32-43",
    resolucion: "4k",
    tipo: "led",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/tv tcl 50.webp",
    rating: 4.3,
    reviews: 298,
    envioGratis: true,
    caracteristicas: ["HDR10+", "Google TV", "Dolby Audio", "Game"],
    specs: {
      tamaño: "43\"",
      resolucion: "4K UHD",
      panel: "LED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 5,
    nombre: "Hisense 55 ULED 4K U7H Quantum Dot",
    marca: "hisense",
    tamaño: "50-55",
    resolucion: "4k",
    tipo: "qled",
    precio: 2199000,
    precioOriginal: 2599000,
    descuento: 15,
    imagen: "templates/c-televisores.webp",
    rating: 4.4,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["ULED", "Quantum", "Dolby Vision", "120Hz"],
    specs: {
      tamaño: "55\"",
      resolucion: "4K UHD",
      panel: "QLED",
      smartTV: "VIDAA U6"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 6,
    nombre: "Xiaomi TV A2 32 HD Ready Smart TV",
    marca: "xiaomi",
    tamaño: "32-43",
    resolucion: "hd",
    tipo: "led",
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/c-televisores.webp",
    rating: 4.1,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Android TV", "Google", "Chromecast", "DTS"],
    specs: {
      tamaño: "32\"",
      resolucion: "HD Ready",
      panel: "LED",
      smartTV: "Android TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 7,
    nombre: "Samsung 75 Crystal 4K UHD DU7000",
    marca: "samsung",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "led",
    precio: 3999000,
    precioOriginal: 4499000,
    descuento: 11,
    imagen: "templates/c-televisores.webp",
    rating: 4.5,
    reviews: 134,
    envioGratis: true,
    caracteristicas: ["Crystal", "HDR", "Tizen", "Gaming Hub"],
    specs: {
      tamaño: "75\"",
      resolucion: "4K UHD",
      panel: "Crystal LED",
      smartTV: "Tizen OS"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 8,
    nombre: "LG 43 Full HD Smart TV 43LQ63",
    marca: "lg",
    tamaño: "32-43",
    resolucion: "fhd",
    tipo: "led",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-televisores.webp",
    rating: 4.2,
    reviews: 278,
    envioGratis: true,
    caracteristicas: ["Full HD", "webOS", "ThinQ AI", "HDR10"],
    specs: {
      tamaño: "43\"",
      resolucion: "Full HD",
      panel: "LED",
      smartTV: "webOS 22"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 9,
    nombre: "Sony 85 Bravia XR X95L 4K Mini LED",
    marca: "sony",
    tamaño: "85+",
    resolucion: "4k",
    tipo: "led",
    precio: 8999000,
    precioOriginal: 9999000,
    descuento: 10,
    imagen: "templates/c-televisores.webp",
    rating: 4.9,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["XR", "Mini LED", "Cognitive", "HDMI 2.1"],
    specs: {
      tamaño: "85\"",
      resolucion: "4K UHD",
      panel: "Mini LED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 10,
    nombre: "TCL 65 QLED 4K C745 Google TV",
    marca: "tcl",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "qled",
    precio: 2799000,
    precioOriginal: 3199000,
    descuento: 13,
    imagen: "templates/tv tcl 50.webp",
    rating: 4.4,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["QLED", "HDR10+", "Game Master", "120Hz"],
    specs: {
      tamaño: "65\"",
      resolucion: "4K UHD",
      panel: "QLED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 11,
    nombre: "Hisense 75 ULED 4K U8H Mini LED",
    marca: "hisense",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "qled",
    precio: 4299000,
    precioOriginal: 4899000,
    descuento: 12,
    imagen: "templates/c-televisores.webp",
    rating: 4.6,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["Mini LED", "Quantum", "144Hz", "Game Pro"],
    specs: {
      tamaño: "75\"",
      resolucion: "4K UHD",
      panel: "Mini LED QLED",
      smartTV: "VIDAA U7"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 12,
    nombre: "Kalley 40 Full HD LED K-LED40FHD",
    marca: "kalley",
    tamaño: "32-43",
    resolucion: "fhd",
    tipo: "led",
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-televisores.webp",
    rating: 3.9,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Full HD", "LED", "HDMI", "USB"],
    specs: {
      tamaño: "40\"",
      resolucion: "Full HD",
      panel: "LED",
      smartTV: "No"
    },
    disponible: true,
    smartTV: false
  },
  {
    id: 13,
    nombre: "Samsung 65 Neo QLED 8K QN900C",
    marca: "samsung",
    tamaño: "65-75",
    resolucion: "8k",
    tipo: "neo-qled",
    precio: 7999000,
    precioOriginal: 8999000,
    descuento: 11,
    imagen: "templates/c-televisores.webp",
    rating: 4.8,
    reviews: 45,
    envioGratis: true,
    caracteristicas: ["8K", "Neo QLED", "AI Upscaling", "Object Sound"],
    specs: {
      tamaño: "65\"",
      resolucion: "8K UHD",
      panel: "Neo QLED",
      smartTV: "Tizen OS"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 14,
    nombre: "LG 77 OLED G3 Gallery 4K evo",
    marca: "lg",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "oled",
    precio: 8299000,
    precioOriginal: 9299000,
    descuento: 11,
    imagen: "templates/c-televisores.webp",
    rating: 4.9,
    reviews: 78,
    envioGratis: true,
    caracteristicas: ["OLED evo", "Gallery", "α9 Gen6", "Dolby Vision"],
    specs: {
      tamaño: "77\"",
      resolucion: "4K UHD",
      panel: "OLED evo",
      smartTV: "webOS 23"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 15,
    nombre: "Xiaomi TV Q2 55 QLED 4K Smart TV",
    marca: "xiaomi",
    tamaño: "50-55",
    resolucion: "4k",
    tipo: "qled",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-televisores.webp",
    rating: 4.3,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["QLED", "Dolby Vision", "Android TV", "120Hz"],
    specs: {
      tamaño: "55\"",
      resolucion: "4K UHD",
      panel: "QLED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 16,
    nombre: "Panasonic 50 4K UHD LED TC-50MX700",
    marca: "panasonic",
    tamaño: "50-55",
    resolucion: "4k",
    tipo: "led",
    precio: 1799000,
    precioOriginal: 2099000,
    descuento: 14,
    imagen: "templates/c-televisores.webp",
    rating: 4.2,
    reviews: 134,
    envioGratis: true,
    caracteristicas: ["4K", "HDR10", "My Home Screen", "Hexa Chroma"],
    specs: {
      tamaño: "50\"",
      resolucion: "4K UHD",
      panel: "LED",
      smartTV: "My Home Screen"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 17,
    nombre: "TCL 32 HD Ready Smart TV 32S5400A",
    marca: "tcl",
    tamaño: "32-43",
    resolucion: "hd",
    tipo: "led",
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/tv tcl 50.webp",
    rating: 4.0,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Android TV", "HDR", "Dolby Audio", "Chromecast"],
    specs: {
      tamaño: "32\"",
      resolucion: "HD Ready",
      panel: "LED",
      smartTV: "Android TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 18,
    nombre: "Sony 65 Bravia XR A80L OLED 4K",
    marca: "sony",
    tamaño: "65-75",
    resolucion: "4k",
    tipo: "oled",
    precio: 5499000,
    precioOriginal: 6199000,
    descuento: 11,
    imagen: "templates/c-televisores.webp",
    rating: 4.8,
    reviews: 98,
    envioGratis: true,
    caracteristicas: ["OLED", "XR", "Acoustic Surface", "Perfect"],
    specs: {
      tamaño: "65\"",
      resolucion: "4K UHD",
      panel: "OLED",
      smartTV: "Google TV"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 19,
    nombre: "Hisense 43 4K UHD Smart TV A6G",
    marca: "hisense",
    tamaño: "32-43",
    resolucion: "4k",
    tipo: "led",
    precio: 1399000,
    precioOriginal: 1599000,
    descuento: 13,
    imagen: "templates/c-televisores.webp",
    rating: 4.1,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["4K", "HDR10", "VIDAA", "Game Mode"],
    specs: {
      tamaño: "43\"",
      resolucion: "4K UHD",
      panel: "LED",
      smartTV: "VIDAA U5"
    },
    disponible: true,
    smartTV: true
  },
  {
    id: 20,
    nombre: "Samsung 98 Neo QLED 4K QN90C",
    marca: "samsung",
    tamaño: "85+",
    resolucion: "4k",
    tipo: "neo-qled",
    precio: 15999000,
    precioOriginal: 17999000,
    descuento: 11,
    imagen: "templates/c-televisores.webp",
    rating: 4.9,
    reviews: 23,
    envioGratis: true,
    caracteristicas: ["98\"", "Neo QLED", "AI Upscaling", "Gaming Hub"],
    specs: {
      tamaño: "98\"",
      resolucion: "4K UHD",
      panel: "Neo QLED",
      smartTV: "Tizen OS"
    },
    disponible: true,
    smartTV: true
  }
];

let productosFiltrados = [...televisoresProductos];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal = null;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el buscador global
  if (typeof SearchEngine !== 'undefined') {
    buscadorGlobal = new SearchEngine(televisoresProductos, 'televisores', crearTarjetaProducto);
    buscadorGlobal.inicializar();
  }
  
  inicializarFiltros();
  renderizarProductos();
  actualizarContadores();
});

// ===== FUNCIÓN PARA CREAR TARJETA DE PRODUCTO =====
function crearTarjetaProducto(producto) {
  return `
    <div class="product-card" data-id="${producto.id}">
      <div class="tv-size-badge">${producto.specs.tamaño}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="tv-specs">
          <div class="spec-item">
            <span class="spec-label">Tamaño</span>
            <span class="spec-value">${producto.specs.tamaño}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Resolución</span>
            <span class="spec-value">${producto.specs.resolucion}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Panel</span>
            <span class="spec-value">${producto.specs.panel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Smart TV</span>
            <span class="spec-value">${producto.specs.smartTV}</span>
          </div>
        </div>
        <div class="product-price">
          <span class="price-current">$${producto.precio.toLocaleString()}</span>
          ${producto.precioOriginal ? `<span class="price-original">$${producto.precioOriginal.toLocaleString()}</span>` : ''}
          ${producto.descuento ? `<span class="price-discount">${producto.descuento}% OFF</span>` : ''}
        </div>
        <div class="product-features">
          ${producto.caracteristicas.map(car => `<span class="feature-tag">${car}</span>`).join('')}
          ${producto.smartTV ? '<span class="smart-tv-badge">Smart TV</span>' : ''}
        </div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(producto.rating))}${'☆'.repeat(5-Math.floor(producto.rating))}</span>
          <span class="rating-text">(${producto.reviews})</span>
        </div>
        ${producto.envioGratis ? '<div class="product-shipping">Envío e instalación gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `;
}

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de marca superiores
  document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const marca = this.dataset.brand;
      sincronizarFiltrosMarca(marca);
      aplicarFiltros();
    });
  });

  // Filtros de tamaño
  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-filter-btn').forEach(b => b.classList.remove('active'));
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
  let productosBase = televisoresProductos;
  
  // Si hay una búsqueda activa, usar esos resultados como base
  if (buscadorGlobal && buscadorGlobal.hayBusquedaActiva()) {
    productosBase = buscadorGlobal.obtenerResultadosBusqueda();
    
    // Si no hay resultados de búsqueda, mostrar mensaje y salir
    if (productosBase.length === 0) {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = buscadorGlobal.generarMensajeSinResultados('televisores');
      document.getElementById('showing-count').textContent = '0';
      document.getElementById('total-count').textContent = '0';
      return;
    }
  }
  
  productosFiltrados = productosBase.filter(producto => {
    // Filtro de marca
    const marcasSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
      .map(cb => cb.value);
    if (marcasSeleccionadas.length > 0 && !marcasSeleccionadas.includes(producto.marca)) {
      return false;
    }

    // Filtro de tamaño
    const tamañoSeleccionado = document.querySelector('.size-filter-btn.active').dataset.size;
    if (tamañoSeleccionado !== 'all' && producto.tamaño !== tamañoSeleccionado) {
      return false;
    }

    // Filtro de resolución
    const resolucionesSeleccionadas = Array.from(document.querySelectorAll('input[name="resolution"]:checked'))
      .map(cb => cb.value);
    if (resolucionesSeleccionadas.length > 0 && !resolucionesSeleccionadas.includes(producto.resolucion)) {
      return false;
    }

    // Filtro de tipo de panel
    const tiposSeleccionados = Array.from(document.querySelectorAll('input[name="type"]:checked'))
      .map(cb => cb.value);
    if (tiposSeleccionados.length > 0 && !tiposSeleccionados.includes(producto.tipo)) {
      return false;
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

  grid.innerHTML = productosEnPagina.map(producto => `
    <div class="product-card" data-id="${producto.id}">
      <div class="tv-size-badge">${producto.specs.tamaño}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="tv-specs">
          <div class="spec-item">
            <span class="spec-label">Tamaño</span>
            <span class="spec-value">${producto.specs.tamaño}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Resolución</span>
            <span class="spec-value">${producto.specs.resolucion}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Panel</span>
            <span class="spec-value">${producto.specs.panel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Smart TV</span>
            <span class="spec-value">${producto.specs.smartTV}</span>
          </div>
        </div>
        <div class="product-price">
          <span class="price-current">$${producto.precio.toLocaleString()}</span>
          ${producto.precioOriginal ? `<span class="price-original">$${producto.precioOriginal.toLocaleString()}</span>` : ''}
          ${producto.descuento ? `<span class="price-discount">${producto.descuento}% OFF</span>` : ''}
        </div>
        <div class="product-features">
          ${producto.caracteristicas.map(car => `<span class="feature-tag">${car}</span>`).join('')}
          ${producto.smartTV ? '<span class="smart-tv-badge">Smart TV</span>' : ''}
        </div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(producto.rating))}${'☆'.repeat(5-Math.floor(producto.rating))}</span>
          <span class="rating-text">(${producto.reviews})</span>
        </div>
        ${producto.envioGratis ? '<div class="product-shipping">Envío e instalación gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `).join('');
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

  // Contar productos por resolución
  const conteoResoluciones = {};
  productosFiltrados.forEach(producto => {
    conteoResoluciones[producto.resolucion] = (conteoResoluciones[producto.resolucion] || 0) + 1;
  });

  document.querySelectorAll('input[name="resolution"]').forEach(checkbox => {
    const resolution = checkbox.value;
    const count = conteoResoluciones[resolution] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por tipo
  const conteoTipos = {};
  productosFiltrados.forEach(producto => {
    conteoTipos[producto.tipo] = (conteoTipos[producto.tipo] || 0) + 1;
  });

  document.querySelectorAll('input[name="type"]').forEach(checkbox => {
    const type = checkbox.value;
    const count = conteoTipos[type] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}
