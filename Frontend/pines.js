// ===== PINES PRODUCTS DATA =====
const pinesProductos = [
  {
    id: 1,
    nombre: "PlayStation Store Gift Card $10 USD",
    marca: "playstation",
    categoria: "gaming",
    plataforma: "playstation",
    valor: "10",
    entrega: ["inmediato", "email", "codigo"],
    precio: 39000,
    precioOriginal: 42000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.8,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["Digital", "Inmediato", "PS Store", "No expira"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Xbox Gift Card $25 USD",
    marca: "xbox",
    categoria: "gaming",
    plataforma: "xbox",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Xbox Live", "Game Pass", "Microsoft Store", "Global"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Nintendo eShop Card $50 USD",
    marca: "nintendo",
    categoria: "gaming",
    plataforma: "nintendo",
    valor: "50",
    entrega: ["inmediato", "email", "codigo"],
    precio: 195000,
    precioOriginal: 210000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.6,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["eShop", "Switch", "Digital Games", "DLC"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Steam Wallet $25 USD",
    marca: "steam",
    categoria: "gaming",
    plataforma: "steam",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 102000,
    descuento: 5,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.9,
    reviews: 2341,
    envioGratis: true,
    caracteristicas: ["PC Gaming", "Steam Store", "Global", "No expira"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Netflix Gift Card $25 USD",
    marca: "netflix",
    categoria: "streaming",
    plataforma: "netflix",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.5,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["Streaming", "Series", "Películas", "Global"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Amazon Gift Card $50 USD",
    marca: "amazon",
    categoria: "tiendas",
    plataforma: "amazon",
    valor: "50",
    entrega: ["inmediato", "email", "codigo"],
    precio: 195000,
    precioOriginal: 210000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.8,
    reviews: 3456,
    envioGratis: true,
    caracteristicas: ["Amazon.com", "Prime", "Kindle", "Audible"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Spotify Premium 3 Meses",
    marca: "spotify",
    categoria: "musica",
    plataforma: "spotify",
    valor: "3-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 29000,
    precioOriginal: 35000,
    descuento: 17,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Sin anuncios", "Descarga", "Calidad HD", "Podcast"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Google Play Gift Card $10 USD",
    marca: "google",
    categoria: "apps",
    plataforma: "google",
    valor: "10",
    entrega: ["inmediato", "email", "codigo"],
    precio: 39000,
    precioOriginal: 42000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.6,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["Play Store", "Apps", "Juegos", "Contenido"],
    disponible: true
  },
  {
    id: 9,
    nombre: "PlayStation Plus 12 Meses",
    marca: "playstation",
    categoria: "suscripciones",
    plataforma: "playstation",
    valor: "12-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 195000,
    precioOriginal: 220000,
    descuento: 11,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.8,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Juegos gratis", "Online", "Descuentos", "Cloud Save"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Disney+ Gift Card $25 USD",
    marca: "disney",
    categoria: "streaming",
    plataforma: "disney",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.4,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["Disney", "Marvel", "Star Wars", "Pixar"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Steam Wallet $100 USD",
    marca: "steam",
    categoria: "gaming",
    plataforma: "steam",
    valor: "100",
    entrega: ["inmediato", "email", "codigo"],
    precio: 390000,
    precioOriginal: 420000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.9,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["PC Gaming", "Steam Sales", "DLC", "Workshop"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Apple App Store $10 USD",
    marca: "apple",
    categoria: "apps",
    plataforma: "apple",
    valor: "10",
    entrega: ["inmediato", "email", "codigo"],
    precio: 39000,
    precioOriginal: 42000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["App Store", "iTunes", "iCloud", "Apple Music"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Xbox Game Pass Ultimate 3 Meses",
    marca: "xbox",
    categoria: "suscripciones",
    plataforma: "xbox",
    valor: "3-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 149000,
    precioOriginal: 169000,
    descuento: 12,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.8,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Game Pass", "EA Play", "Cloud Gaming", "PC + Console"],
    disponible: true
  },
  {
    id: 14,
    nombre: "YouTube Premium 6 Meses",
    marca: "google",
    categoria: "streaming",
    plataforma: "google",
    valor: "6-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 89000,
    precioOriginal: 99000,
    descuento: 10,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.5,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Sin anuncios", "YouTube Music", "Descargas", "Premium"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Mastercard Virtual $25 USD",
    marca: "mastercard",
    categoria: "tiendas",
    plataforma: "mastercard",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 102000,
    descuento: 5,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.6,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Virtual", "Compras online", "Segura", "Global"],
    disponible: true
  },
  {
    id: 16,
    nombre: "PlayStation Store $100 USD",
    marca: "playstation",
    categoria: "gaming",
    plataforma: "playstation",
    valor: "100",
    entrega: ["inmediato", "email", "codigo"],
    precio: 390000,
    precioOriginal: 420000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.9,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["PS5", "PS4", "PSP", "Vita"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Amazon Prime Video $10 USD",
    marca: "amazon",
    categoria: "streaming",
    plataforma: "amazon",
    valor: "10",
    entrega: ["inmediato", "email", "codigo"],
    precio: 39000,
    precioOriginal: 42000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.4,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Prime Video", "Originals", "Movies", "Series"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Apple Music 6 Meses",
    marca: "apple",
    categoria: "musica",
    plataforma: "apple",
    valor: "6-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 59000,
    precioOriginal: 69000,
    descuento: 14,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Sin anuncios", "Spatial Audio", "Lossless", "Playlist"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Epic Games Store $25 USD",
    marca: "epic",
    categoria: "gaming",
    plataforma: "epic",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.5,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Fortnite", "V-Bucks", "PC Games", "Free Games"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Uber Gift Card $50 USD",
    marca: "uber",
    categoria: "apps",
    plataforma: "uber",
    valor: "50",
    entrega: ["inmediato", "email", "codigo"],
    precio: 195000,
    precioOriginal: 210000,
    descuento: 7,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.3,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Rides", "Uber Eats", "Delivery", "Global"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Nintendo Switch Online 12 Meses",
    marca: "nintendo",
    categoria: "suscripciones",
    plataforma: "nintendo",
    valor: "12-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 79000,
    precioOriginal: 89000,
    descuento: 11,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Online Play", "NES Games", "SNES Games", "Cloud Save"],
    disponible: true
  },
  {
    id: 22,
    nombre: "HBO Max Gift Card $25 USD",
    marca: "hbo",
    categoria: "streaming",
    plataforma: "hbo",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.5,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["HBO", "Max Originals", "Movies", "Series"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Tidal Premium 3 Meses",
    marca: "tidal",
    categoria: "musica",
    plataforma: "tidal",
    valor: "3-meses",
    entrega: ["inmediato", "email", "codigo"],
    precio: 39000,
    precioOriginal: 45000,
    descuento: 13,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.4,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["HiFi", "Master Quality", "360 Audio", "Exclusive"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Visa Virtual Prepaid $100 USD",
    marca: "visa",
    categoria: "tiendas",
    plataforma: "visa",
    valor: "100",
    entrega: ["inmediato", "email", "codigo"],
    precio: 390000,
    precioOriginal: 410000,
    descuento: 5,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.7,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Virtual", "Prepagada", "Compras online", "Segura"],
    disponible: true
  },
  {
    id: 25,
    nombre: "Starbucks Gift Card $25 USD",
    marca: "starbucks",
    categoria: "tiendas",
    plataforma: "starbucks",
    valor: "25",
    entrega: ["inmediato", "email", "codigo"],
    precio: 97000,
    precioOriginal: 105000,
    descuento: 8,
    imagen: "templates/c-tarjetas-pines.webp",
    rating: 4.6,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["Starbucks", "Coffee", "Rewards", "Mobile App"],
    disponible: true
  }
];

let productosFiltrados = [...pinesProductos];
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
  // Filtros de categoría superiores
  document.querySelectorAll('.gift-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.gift-cat-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const categoria = this.dataset.category;
      sincronizarFiltrosCategoria(categoria);
      aplicarFiltros();
    });
  });

  // Filtros de sidebar
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.name === 'categoria') {
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

  // Filtro de precio
  document.getElementById('price-range').addEventListener('input', function() {
    aplicarFiltros();
    actualizarPrecioCurrent();
  });
}

function sincronizarFiltrosCategoria(categoriaSeleccionada) {
  // Sincronizar checkboxes del sidebar
  document.querySelectorAll('input[name="categoria"]').forEach(checkbox => {
    checkbox.checked = checkbox.value === categoriaSeleccionada;
  });
}

function sincronizarFiltrosHorizontales() {
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[name="categoria"]:checked'))
    .map(cb => cb.value);
  
  // Si solo hay una categoría seleccionada, activar el botón correspondiente
  if (categoriasSeleccionadas.length === 1) {
    document.querySelectorAll('.gift-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay múltiples categorías o ninguna, activar "Todo"
    document.querySelectorAll('.gift-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });
  }
}

function actualizarPrecioCurrent() {
  const priceRange = document.getElementById('price-range');
  const priceValue = parseInt(priceRange.value);
  document.querySelector('.price-current strong').textContent = `$${priceValue.toLocaleString()}`;
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
  productosFiltrados = pinesProductos.filter(producto => {
    // Filtro de categoría
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[name="categoria"]:checked'))
      .map(cb => cb.value);
    if (categoriasSeleccionadas.length > 0 && !categoriasSeleccionadas.includes(producto.categoria)) {
      return false;
    }

    // Filtro de plataforma
    const plataformasSeleccionadas = Array.from(document.querySelectorAll('input[name="plataforma"]:checked'))
      .map(cb => cb.value);
    if (plataformasSeleccionadas.length > 0 && !plataformasSeleccionadas.includes(producto.plataforma)) {
      return false;
    }

    // Filtro de valor
    const valoresSeleccionados = Array.from(document.querySelectorAll('input[name="valor"]:checked'))
      .map(cb => cb.value);
    if (valoresSeleccionados.length > 0 && !valoresSeleccionados.includes(producto.valor)) {
      return false;
    }

    // Filtro de entrega
    const entregasSeleccionadas = Array.from(document.querySelectorAll('input[name="entrega"]:checked'))
      .map(cb => cb.value);
    if (entregasSeleccionadas.length > 0) {
      const tieneEntrega = entregasSeleccionadas.some(e => producto.entrega.includes(e));
      if (!tieneEntrega) return false;
    }

    // Filtro de precio
    const precioMaximo = parseInt(document.getElementById('price-range').value);
    if (producto.precio > precioMaximo) {
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
    case 'valor':
      productosFiltrados.sort((a, b) => {
        const valorA = parseInt(a.valor) || 0;
        const valorB = parseInt(b.valor) || 0;
        return valorA - valorB;
      });
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
      <div class="gift-badge">${getCategoryName(producto.categoria)}</div>
      <div class="value-badge">${getValueDisplay(producto.valor)}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="gift-specs">
          <span class="spec-tag">${getCategoryTag(producto.categoria)}</span>
          <span class="spec-tag">${getPlatformTag(producto.plataforma)}</span>
          ${producto.entrega.includes('inmediato') ? '<span class="spec-tag">Inmediato</span>' : ''}
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
        ${producto.envioGratis ? '<div class="product-shipping">Entrega inmediata</div>' : ''}
        <button class="add-to-cart-btn">Comprar código</button>
      </div>
    </div>
  `).join('');
}

// ===== FUNCIONES AUXILIARES =====
function getCategoryName(category) {
  const categories = {
    'gaming': 'Gaming',
    'streaming': 'Streaming',
    'tiendas': 'Tienda',
    'musica': 'Música',
    'apps': 'Apps',
    'suscripciones': 'Suscripción'
  };
  return categories[category] || category;
}

function getCategoryTag(category) {
  const categories = {
    'gaming': 'Game',
    'streaming': 'Stream',
    'tiendas': 'Store',
    'musica': 'Music',
    'apps': 'App',
    'suscripciones': 'Sub'
  };
  return categories[category] || category;
}

function getPlatformTag(platform) {
  const platforms = {
    'playstation': 'PS',
    'xbox': 'Xbox',
    'nintendo': 'Switch',
    'steam': 'Steam',
    'google': 'Google',
    'apple': 'Apple',
    'amazon': 'Amazon',
    'netflix': 'Netflix',
    'spotify': 'Spotify',
    'disney': 'Disney',
    'epic': 'Epic',
    'uber': 'Uber',
    'hbo': 'HBO',
    'tidal': 'Tidal',
    'visa': 'Visa',
    'mastercard': 'MC',
    'starbucks': 'Starbucks'
  };
  return platforms[platform] || platform.toUpperCase();
}

function getValueDisplay(valor) {
  if (valor.includes('-')) {
    return valor.replace('-', ' ');
  }
  return `$${valor}`;
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
  // Contar productos por categoría
  const conteoCategorias = {};
  pinesProductos.forEach(producto => {
    conteoCategorias[producto.categoria] = (conteoCategorias[producto.categoria] || 0) + 1;
  });

  document.querySelectorAll('input[name="categoria"]').forEach(checkbox => {
    const categoria = checkbox.value;
    const count = conteoCategorias[categoria] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por plataforma
  const conteoPlataformas = {};
  pinesProductos.forEach(producto => {
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

  // Contar productos por valor
  const conteoValores = {};
  pinesProductos.forEach(producto => {
    conteoValores[producto.valor] = (conteoValores[producto.valor] || 0) + 1;
  });

  document.querySelectorAll('input[name="valor"]').forEach(checkbox => {
    const valor = checkbox.value;
    const count = conteoValores[valor] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por entrega
  const conteoEntrega = {};
  pinesProductos.forEach(producto => {
    producto.entrega.forEach(e => {
      conteoEntrega[e] = (conteoEntrega[e] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="entrega"]').forEach(checkbox => {
    const entrega = checkbox.value;
    const count = conteoEntrega[entrega] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}