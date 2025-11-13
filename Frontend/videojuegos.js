// ===== VIDEOJUEGOS PRODUCTS DATA =====
const videojuegosProductos = [
  {
    id: 1,
    nombre: "PlayStation 5 Console Standard Edition",
    marca: "sony",
    plataforma: "ps5",
    tipo: "consolas",
    genero: "hardware",
    edad: "e",
    precio: 2299000,
    precioOriginal: 2499000,
    descuento: 8,
    imagen: "templates/consola.webp",
    rating: 4.8,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["SSD 825GB", "Ray Tracing", "4K Gaming", "DualSense"],
    lanzamiento: "2020-11-12",
    disponible: true
  },
  {
    id: 2,
    nombre: "Spider-Man 2 PS5",
    marca: "sony",
    plataforma: "ps5",
    tipo: "juegos",
    genero: "accion",
    edad: "t",
    precio: 279000,
    precioOriginal: 299000,
    descuento: 7,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.9,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Exclusivo PS5", "Ray Tracing", "60fps", "Multijugador"],
    lanzamiento: "2023-10-20",
    disponible: true
  },
  {
    id: 3,
    nombre: "Xbox Series X 1TB",
    marca: "microsoft",
    plataforma: "xbox",
    tipo: "consolas",
    genero: "hardware",
    edad: "e",
    precio: 2199000,
    precioOriginal: 2399000,
    descuento: 8,
    imagen: "templates/consola.webp",
    rating: 4.7,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["1TB SSD", "4K 120fps", "Game Pass", "Quick Resume"],
    lanzamiento: "2020-11-10",
    disponible: true
  },
  {
    id: 4,
    nombre: "Nintendo Switch OLED",
    marca: "nintendo",
    plataforma: "nintendo",
    tipo: "consolas",
    genero: "hardware",
    edad: "e",
    precio: 1699000,
    precioOriginal: 1799000,
    descuento: 6,
    imagen: "templates/consola.webp",
    rating: 4.6,
    reviews: 1456,
    envioGratis: true,
    caracteristicas: ["Pantalla OLED", "Portátil", "64GB", "Dock incluido"],
    lanzamiento: "2021-10-08",
    disponible: true
  },
  {
    id: 5,
    nombre: "Call of Duty: Modern Warfare III",
    marca: "activision",
    plataforma: "pc",
    tipo: "juegos",
    genero: "shooter",
    edad: "m",
    precio: 299000,
    precioOriginal: 349000,
    descuento: 14,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.3,
    reviews: 2341,
    envioGratis: true,
    caracteristicas: ["Multijugador", "Campaign", "Zombies", "Cross-platform"],
    lanzamiento: "2023-11-10",
    disponible: true
  },
  {
    id: 6,
    nombre: "DualSense Wireless Controller",
    marca: "sony",
    plataforma: "ps5",
    tipo: "controles",
    genero: "hardware",
    edad: "e",
    precio: 289000,
    precioOriginal: 319000,
    descuento: 9,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.7,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Haptic Feedback", "Triggers Adaptativos", "Mic integrado", "USB-C"],
    lanzamiento: "2020-11-12",
    disponible: true
  },
  {
    id: 7,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    marca: "nintendo",
    plataforma: "nintendo",
    tipo: "juegos",
    genero: "aventura",
    edad: "e10",
    precio: 259000,
    precioOriginal: 279000,
    descuento: 7,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.9,
    reviews: 1834,
    envioGratis: true,
    caracteristicas: ["Mundo Abierto", "Exclusivo Switch", "Física avanzada", "Construcción"],
    lanzamiento: "2023-05-12",
    disponible: true
  },
  {
    id: 8,
    nombre: "Xbox Wireless Controller",
    marca: "microsoft",
    plataforma: "xbox",
    tipo: "controles",
    genero: "hardware",
    edad: "e",
    precio: 259000,
    precioOriginal: 289000,
    descuento: 10,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.5,
    reviews: 453,
    envioGratis: true,
    caracteristicas: ["Wireless", "Bluetooth", "Cross-platform", "D-pad mejorado"],
    lanzamiento: "2020-11-10",
    disponible: true
  },
  {
    id: 9,
    nombre: "PlayStation 5 Pulse 3D Headset",
    marca: "sony",
    plataforma: "ps5",
    tipo: "headsets",
    genero: "hardware",
    edad: "e",
    precio: 389000,
    precioOriginal: 429000,
    descuento: 9,
    imagen: "templates/c-audio.webp",
    rating: 4.4,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Audio 3D", "Wireless", "Noise Cancelling", "Mic ajustable"],
    lanzamiento: "2020-11-12",
    disponible: true
  },
  {
    id: 10,
    nombre: "Forza Horizon 5 Xbox/PC",
    marca: "microsoft",
    plataforma: "xbox",
    tipo: "juegos",
    genero: "racing",
    edad: "e10",
    precio: 189000,
    precioOriginal: 229000,
    descuento: 17,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.8,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Game Pass", "Mexico", "Multijugador", "4K"],
    lanzamiento: "2021-11-09",
    disponible: true
  },
  {
    id: 11,
    nombre: "FIFA 24 Standard Edition",
    marca: "ea",
    plataforma: "ps5",
    tipo: "juegos",
    genero: "deportes",
    edad: "e",
    precio: 239000,
    precioOriginal: 279000,
    descuento: 14,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.2,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["HyperMotion V", "Ultimate Team", "Career Mode", "VOLTA"],
    lanzamiento: "2023-09-29",
    disponible: true
  },
  {
    id: 12,
    nombre: "Nintendo Pro Controller",
    marca: "nintendo",
    plataforma: "nintendo",
    tipo: "controles",
    genero: "hardware",
    edad: "e",
    precio: 289000,
    precioOriginal: 319000,
    descuento: 9,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.6,
    reviews: 734,
    envioGratis: true,
    caracteristicas: ["Wireless", "40 horas batería", "D-pad tradicional", "HD Rumble"],
    lanzamiento: "2017-03-03",
    disponible: true
  },
  {
    id: 13,
    nombre: "Grand Theft Auto VI",
    marca: "rockstar",
    plataforma: "ps5",
    tipo: "juegos",
    genero: "accion",
    edad: "m",
    precio: 319000,
    precioOriginal: 349000,
    descuento: 9,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.9,
    reviews: 2845,
    envioGratis: true,
    caracteristicas: ["Mundo abierto", "Ray Tracing", "Online", "Vice City"],
    lanzamiento: "2025-03-15",
    disponible: true
  },
  {
    id: 14,
    nombre: "Retro Game Console 620 Juegos",
    marca: "retro",
    plataforma: "retro",
    tipo: "consolas",
    genero: "hardware",
    edad: "e",
    precio: 189000,
    precioOriginal: 229000,
    descuento: 17,
    imagen: "templates/consola.webp",
    rating: 4.1,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["620 juegos", "2 controles", "HDMI", "Plug & Play"],
    lanzamiento: "2023-01-15",
    disponible: true
  },
  {
    id: 15,
    nombre: "PlayStation Gift Card $50 USD",
    marca: "sony",
    plataforma: "ps5",
    tipo: "tarjetas",
    genero: "digital",
    edad: "e",
    precio: 189000,
    precioOriginal: 199000,
    descuento: 5,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.8,
    reviews: 1245,
    envioGratis: true,
    caracteristicas: ["Digital", "$50 USD", "PS Store", "Inmediato"],
    lanzamiento: "2020-01-01",
    disponible: true
  },
  {
    id: 16,
    nombre: "Cyberpunk 2077 Phantom Liberty",
    marca: "cdprojekt",
    plataforma: "pc",
    tipo: "juegos",
    genero: "rpg",
    edad: "m",
    precio: 179000,
    precioOriginal: 209000,
    descuento: 14,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.5,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["RPG", "Cyberpunk", "DLC", "Ray Tracing"],
    lanzamiento: "2023-09-26",
    disponible: true
  },
  {
    id: 17,
    nombre: "Xbox Game Pass Ultimate 3 Meses",
    marca: "microsoft",
    plataforma: "xbox",
    tipo: "tarjetas",
    genero: "digital",
    edad: "e",
    precio: 149000,
    precioOriginal: 169000,
    descuento: 12,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 890,
    envioGratis: true,
    caracteristicas: ["3 meses", "Game Pass", "EA Play", "Cloud Gaming"],
    lanzamiento: "2020-01-01",
    disponible: true
  },
  {
    id: 18,
    nombre: "SteelSeries Arctis 7P Wireless",
    marca: "steelseries",
    plataforma: "ps5",
    tipo: "headsets",
    genero: "hardware",
    edad: "e",
    precio: 599000,
    precioOriginal: 669000,
    descuento: 10,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Wireless", "24hrs batería", "PS5 optimizado", "ClearCast"],
    lanzamiento: "2020-10-29",
    disponible: true
  },
  {
    id: 19,
    nombre: "Super Mario Bros Wonder",
    marca: "nintendo",
    plataforma: "nintendo",
    tipo: "juegos",
    genero: "aventura",
    edad: "e",
    precio: 239000,
    precioOriginal: 259000,
    descuento: 8,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.8,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["Plataformas", "Wonder Effects", "Multijugador", "Nintendo Switch"],
    lanzamiento: "2023-10-20",
    disponible: true
  },
  {
    id: 20,
    nombre: "PlayStation 4 Slim 1TB",
    marca: "sony",
    plataforma: "ps4",
    tipo: "consolas",
    genero: "hardware",
    edad: "e",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/consola.webp",
    rating: 4.5,
    reviews: 2567,
    envioGratis: true,
    caracteristicas: ["1TB HDD", "HDR", "Slim Design", "DualShock 4"],
    lanzamiento: "2016-09-15",
    disponible: true
  }
];

let productosFiltrados = [...videojuegosProductos];
let paginaActual = 1;
const productosPorPagina = 12;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  inicializarFiltros();
  renderizarProductos();
  actualizarContadores();
});

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de plataforma superiores
  document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const plataforma = this.dataset.platform;
      sincronizarFiltrosPlataforma(plataforma);
      aplicarFiltros();
    });
  });

  // Filtros de tipo
  document.querySelectorAll('.type-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      aplicarFiltros();
    });
  });

  // Filtros de sidebar
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.name === 'plataforma') {
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

function sincronizarFiltrosPlataforma(plataformaSeleccionada) {
  // Sincronizar checkboxes del sidebar
  document.querySelectorAll('input[name="plataforma"]').forEach(checkbox => {
    checkbox.checked = checkbox.value === plataformaSeleccionada;
  });
}

function sincronizarFiltrosHorizontales() {
  const plataformasSeleccionadas = Array.from(document.querySelectorAll('input[name="plataforma"]:checked'))
    .map(cb => cb.value);
  
  // Si solo hay una plataforma seleccionada, activar el botón correspondiente
  if (plataformasSeleccionadas.length === 1) {
    document.querySelectorAll('.platform-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.platform === plataformasSeleccionadas[0]);
    });
  } else {
    // Si hay múltiples plataformas o ninguna, desactivar todos los botones
    document.querySelectorAll('.platform-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
  productosFiltrados = videojuegosProductos.filter(producto => {
    // Filtro de plataforma
    const plataformasSeleccionadas = Array.from(document.querySelectorAll('input[name="plataforma"]:checked'))
      .map(cb => cb.value);
    if (plataformasSeleccionadas.length > 0 && !plataformasSeleccionadas.includes(producto.plataforma)) {
      return false;
    }

    // Filtro de tipo
    const tipoSeleccionado = document.querySelector('.type-filter-btn.active').dataset.type;
    if (tipoSeleccionado !== 'all' && producto.tipo !== tipoSeleccionado) {
      return false;
    }

    // Filtro de género
    const generosSeleccionados = Array.from(document.querySelectorAll('input[name="genero"]:checked'))
      .map(cb => cb.value);
    if (generosSeleccionados.length > 0 && !generosSeleccionados.includes(producto.genero)) {
      return false;
    }

    // Filtro de clasificación de edad
    const edadesSeleccionadas = Array.from(document.querySelectorAll('input[name="edad"]:checked'))
      .map(cb => cb.value);
    if (edadesSeleccionadas.length > 0 && !edadesSeleccionadas.includes(producto.edad)) {
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
    case 'lanzamiento':
      productosFiltrados.sort((a, b) => new Date(b.lanzamiento) - new Date(a.lanzamiento));
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
    <div class="product-card ${producto.tipo === 'consolas' ? 'console-card' : ''}" data-id="${producto.id}">
      <div class="platform-badge">${getPlatformName(producto.plataforma)}</div>
      <div class="age-rating">${producto.edad.toUpperCase()}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="game-specs">
          <span class="spec-tag">${getTypeTag(producto.tipo)}</span>
          <span class="spec-tag">${getGenreTag(producto.genero)}</span>
          ${producto.lanzamiento ? `<span class="spec-tag">${new Date(producto.lanzamiento).getFullYear()}</span>` : ''}
        </div>
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
        ${producto.envioGratis ? '<div class="product-shipping">Envío gratis</div>' : ''}
        <button class="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  `).join('');
}

// ===== FUNCIONES AUXILIARES =====
function getPlatformName(platform) {
  const platforms = {
    'ps5': 'PS5',
    'xbox': 'Xbox',
    'nintendo': 'Switch',
    'pc': 'PC',
    'ps4': 'PS4',
    'retro': 'Retro'
  };
  return platforms[platform] || platform.toUpperCase();
}

function getTypeTag(type) {
  const types = {
    'consolas': 'Console',
    'juegos': 'Game',
    'accesorios': 'Accessory',
    'controles': 'Controller',
    'headsets': 'Headset',
    'tarjetas': 'Gift Card'
  };
  return types[type] || type;
}

function getGenreTag(genre) {
  const genres = {
    'accion': 'Action',
    'aventura': 'Adventure',
    'deportes': 'Sports',
    'racing': 'Racing',
    'rpg': 'RPG',
    'shooter': 'Shooter',
    'hardware': 'Hardware',
    'digital': 'Digital'
  };
  return genres[genre] || genre;
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
  // Contar productos por plataforma
  const conteoPlataformas = {};
  productosFiltrados.forEach(producto => {
    conteoPlataformas[producto.plataforma] = (conteoPlataformas[producto.plataforma] || 0) + 1;
  });

  document.querySelectorAll('input[name="plataforma"]').forEach(checkbox => {
    const plataforma = checkbox.value;
    const count = conteoPlataformas[plataforma] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por género
  const conteoGeneros = {};
  productosFiltrados.forEach(producto => {
    conteoGeneros[producto.genero] = (conteoGeneros[producto.genero] || 0) + 1;
  });

  document.querySelectorAll('input[name="genero"]').forEach(checkbox => {
    const genero = checkbox.value;
    const count = conteoGeneros[genero] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por edad
  const conteoEdades = {};
  productosFiltrados.forEach(producto => {
    conteoEdades[producto.edad] = (conteoEdades[producto.edad] || 0) + 1;
  });

  document.querySelectorAll('input[name="edad"]').forEach(checkbox => {
    const edad = checkbox.value;
    const count = conteoEdades[edad] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}