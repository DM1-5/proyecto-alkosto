// ===== GAMING PRODUCTS DATA =====
const gamingProductos = [
  {
    id: 1,
    nombre: "PC Gaming ASUS ROG Strix GT35",
    marca: "asus",
    categoria: "pc-gaming",
    rendimiento: ["4k-gaming", "rgb"],
    precio: 8999000,
    precioOriginal: 9999000,
    descuento: 10,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["RTX 4080", "32GB RAM", "1TB SSD", "Intel i7"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Monitor Gaming ASUS ROG Swift 27\" 240Hz",
    marca: "asus",
    categoria: "monitors",
    rendimiento: ["144hz", "4k-gaming"],
    precio: 2499000,
    precioOriginal: 2799000,
    descuento: 11,
    imagen: "templates/c-computadores.webp",
    rating: 4.9,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["240Hz", "1ms", "G-Sync", "HDR10"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Teclado Gaming Razer BlackWidow V4",
    marca: "razer",
    categoria: "perifericos",
    rendimiento: ["rgb", "wireless"],
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.7,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Mecánico", "RGB", "Wireless", "Green Switch"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Silla Gamer DXRacer Formula Series",
    marca: "dxracer",
    categoria: "sillas",
    rendimiento: ["rgb"],
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-muebles.webp",
    rating: 4.6,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["Ergonómica", "Reclinable", "Lumbar", "4D Armrest"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Tarjeta Gráfica MSI RTX 4070 Gaming X",
    marca: "msi",
    categoria: "componentes",
    rendimiento: ["4k-gaming", "rgb"],
    precio: 3499000,
    precioOriginal: 3899000,
    descuento: 10,
    imagen: "templates/c-computadores.webp",
    rating: 4.8,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["RTX 4070", "12GB GDDR6X", "DLSS 3", "Ray Tracing"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Webcam Logitech C920 HD Pro",
    marca: "logitech",
    categoria: "streaming",
    rendimiento: [],
    precio: 389000,
    precioOriginal: 449000,
    descuento: 13,
    imagen: "templates/c-camera-2.webp",
    rating: 4.5,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["1080p", "30fps", "Autofocus", "Stereo Audio"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Mouse Gaming Razer DeathAdder V3",
    marca: "razer",
    categoria: "perifericos",
    rendimiento: ["wireless", "rgb"],
    precio: 289000,
    precioOriginal: 329000,
    descuento: 12,
    imagen: "templates/c-mouse.webp",
    rating: 4.7,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["30000 DPI", "Wireless", "RGB", "90h Batería"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Laptop Gaming MSI Katana 15",
    marca: "msi",
    categoria: "pc-gaming",
    rendimiento: ["4k-gaming", "rgb"],
    precio: 4599000,
    precioOriginal: 5199000,
    descuento: 12,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["RTX 4060", "16GB RAM", "512GB SSD", "Intel i7"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Monitor Gaming Alienware 34\" Ultrawide",
    marca: "alienware",
    categoria: "monitors",
    rendimiento: ["144hz", "4k-gaming"],
    precio: 3999000,
    precioOriginal: 4499000,
    descuento: 11,
    imagen: "templates/c-computadores.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["34\" UWQHD", "144Hz", "1ms", "HDR600"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Auriculares Gaming SteelSeries Arctis 7",
    marca: "steelseries",
    categoria: "perifericos",
    rendimiento: ["wireless"],
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["Wireless", "7.1 Surround", "24h Batería", "ClearCast"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Silla Gaming Corsair T3 Rush",
    marca: "corsair",
    categoria: "sillas",
    rendimiento: [],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-muebles.webp",
    rating: 4.5,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Transpirable", "Reclinable", "Soporte Lumbar", "Brazos 3D"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Micrófono Blue Yeti USB",
    marca: "blue",
    categoria: "streaming",
    rendimiento: [],
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/c-camera-2.webp",
    rating: 4.8,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["USB", "Cardioide", "Omnidireccional", "Stereo"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Procesador AMD Ryzen 9 7900X",
    marca: "amd",
    categoria: "componentes",
    rendimiento: ["4k-gaming"],
    precio: 2299000,
    precioOriginal: 2599000,
    descuento: 12,
    imagen: "templates/c-computadores.webp",
    rating: 4.9,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["12 Cores", "24 Threads", "5.6GHz", "AM5"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Torre Gaming ASUS ROG Hyperion",
    marca: "asus",
    categoria: "pc-gaming",
    rendimiento: ["rgb", "4k-gaming"],
    precio: 12999000,
    precioOriginal: 14999000,
    descuento: 13,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.9,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["RTX 4090", "64GB RAM", "2TB SSD", "Intel i9"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Monitor Gaming MSI Optix 32\" Curved",
    marca: "msi",
    categoria: "monitors",
    rendimiento: ["144hz"],
    precio: 1799000,
    precioOriginal: 1999000,
    descuento: 10,
    imagen: "templates/c-computadores.webp",
    rating: 4.6,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["32\" Curved", "165Hz", "1ms", "FreeSync"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Mousepad Gaming Razer Goliathus Extended",
    marca: "razer",
    categoria: "perifericos",
    rendimiento: ["rgb"],
    precio: 159000,
    precioOriginal: 189000,
    descuento: 16,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.4,
    reviews: 890,
    envioGratis: true,
    caracteristicas: ["XXL", "RGB", "Control Surface", "Anti-slip"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Silla Gaming Herman Miller x Logitech",
    marca: "logitech",
    categoria: "sillas",
    rendimiento: [],
    precio: 5999000,
    precioOriginal: 6999000,
    descuento: 14,
    imagen: "templates/c-muebles.webp",
    rating: 4.9,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["Premium", "Ergonómica", "12 años garantía", "PostureFit"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Elgato Stream Deck 15 Keys",
    marca: "elgato",
    categoria: "streaming",
    rendimiento: [],
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/c-camera-2.webp",
    rating: 4.8,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["15 Keys", "LCD", "Customizable", "OBS Compatible"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Memoria RAM Corsair Vengeance RGB 32GB",
    marca: "corsair",
    categoria: "componentes",
    rendimiento: ["rgb"],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-computadores.webp",
    rating: 4.7,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["32GB DDR4", "3200MHz", "RGB", "Dual Channel"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Cooler CPU Corsair H150i Elite",
    marca: "corsair",
    categoria: "componentes",
    rendimiento: ["rgb"],
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-computadores.webp",
    rating: 4.8,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["360mm AIO", "RGB", "iCUE", "Magnetic Levitation"],
    disponible: true
  },
  {
    id: 21,
    nombre: "PC Gaming Prebuilt Alienware Aurora R15",
    marca: "alienware",
    categoria: "pc-gaming",
    rendimiento: ["4k-gaming", "rgb"],
    precio: 11999000,
    precioOriginal: 13999000,
    descuento: 14,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.9,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["RTX 4080", "32GB RAM", "1TB SSD", "Intel i9"],
    disponible: true
  },
  {
    id: 22,
    nombre: "Monitor Gaming Samsung Odyssey G7 32\"",
    marca: "samsung",
    categoria: "monitors",
    rendimiento: ["144hz", "4k-gaming"],
    precio: 2899000,
    precioOriginal: 3299000,
    descuento: 12,
    imagen: "templates/c-computadores.webp",
    rating: 4.7,
    reviews: 389,
    envioGratis: true,
    caracteristicas: ["32\" QLED", "240Hz", "1ms", "HDR600"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Teclado Gaming Corsair K95 RGB Platinum",
    marca: "corsair",
    categoria: "perifericos",
    rendimiento: ["rgb"],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-videojuegos.webp",
    rating: 4.6,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Cherry MX", "RGB", "Media Keys", "Aluminum Frame"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Capturadora Elgato HD60 S+",
    marca: "elgato",
    categoria: "streaming",
    rendimiento: [],
    precio: 899000,
    precioOriginal: 999000,
    descuento: 10,
    imagen: "templates/c-camera-2.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["4K60 HDR10", "USB 3.0", "Zero-lag", "OBS Ready"],
    disponible: true
  },
  {
    id: 25,
    nombre: "SSD Gaming Samsung 980 PRO 2TB",
    marca: "samsung",
    categoria: "componentes",
    rendimiento: [],
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-computadores.webp",
    rating: 4.9,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["2TB NVMe", "7000MB/s", "PCIe 4.0", "Gaming Optimized"],
    disponible: true
  }
];

let productosFiltrados = [...gamingProductos];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  inicializarFiltros();
  
  // Inicializar búsqueda global
  buscadorGlobal = new SearchEngine(gamingProductos, 'gaming');
  buscadorGlobal.inicializar();
  
  // Sobrescribir función de actualización para integrar con filtros
  buscadorGlobal.actualizarResultados = function() {
    aplicarFiltros();
  };
  
  // Sobrescribir función de creación de tarjetas
  buscadorGlobal.crearTarjetaProducto = function(producto) {
    return `
      <div class="col-md-4 col-lg-3 mb-4">
        <div class="gaming-product-card" data-id="${producto.id}">
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
      </div>
    `;
  };
  
  renderizarProductos();
  actualizarContadores();
});

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de categoría superiores
  document.querySelectorAll('.gaming-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.gaming-cat-btn').forEach(b => b.classList.remove('active'));
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
    document.querySelectorAll('.gaming-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay múltiples categorías o ninguna, activar "Todo"
    document.querySelectorAll('.gaming-cat-btn').forEach(btn => {
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
  productosFiltrados = gamingProductos.filter(producto => {
    // Filtro de categoría
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[name="categoria"]:checked'))
      .map(cb => cb.value);
    if (categoriasSeleccionadas.length > 0 && !categoriasSeleccionadas.includes(producto.categoria)) {
      return false;
    }

    // Filtro de marca
    const marcasSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
      .map(cb => cb.value);
    if (marcasSeleccionadas.length > 0 && !marcasSeleccionadas.includes(producto.marca)) {
      return false;
    }

    // Filtro de rendimiento
    const rendimientosSeleccionados = Array.from(document.querySelectorAll('input[name="rendimiento"]:checked'))
      .map(cb => cb.value);
    if (rendimientosSeleccionados.length > 0) {
      const tieneRendimiento = rendimientosSeleccionados.some(r => producto.rendimiento.includes(r));
      if (!tieneRendimiento) return false;
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
    case 'novedades':
      productosFiltrados.sort((a, b) => b.id - a.id);
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
      <div class="gaming-badge">${getCategoryName(producto.categoria)}</div>
      ${producto.rendimiento.includes('4k-gaming') ? '<div class="performance-badge">4K</div>' : ''}
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="gaming-specs">
          <span class="spec-tag">${getCategoryTag(producto.categoria)}</span>
          ${producto.rendimiento.includes('rgb') ? '<span class="spec-tag">RGB</span>' : ''}
          ${producto.rendimiento.includes('wireless') ? '<span class="spec-tag">Wireless</span>' : ''}
          ${producto.rendimiento.includes('144hz') ? '<span class="spec-tag">144Hz+</span>' : ''}
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
        ${producto.envioGratis ? '<div class="product-shipping">Envio gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `).join('');
}

// ===== FUNCIONES AUXILIARES =====
function getCategoryName(category) {
  const categories = {
    'pc-gaming': 'PC Gaming',
    'monitors': 'Monitor',
    'perifericos': 'Periférico',
    'sillas': 'Silla Gamer',
    'componentes': 'Componente',
    'streaming': 'Streaming'
  };
  return categories[category] || category;
}

function getCategoryTag(category) {
  const categories = {
    'pc-gaming': 'Gaming PC',
    'monitors': 'Monitor',
    'perifericos': 'Peripheral',
    'sillas': 'Gaming Chair',
    'componentes': 'Component',
    'streaming': 'Stream'
  };
  return categories[category] || category;
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
  gamingProductos.forEach(producto => {
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

  // Contar productos por marca
  const conteoMarcas = {};
  gamingProductos.forEach(producto => {
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

  // Contar productos por rendimiento
  const conteoRendimiento = {};
  gamingProductos.forEach(producto => {
    producto.rendimiento.forEach(r => {
      conteoRendimiento[r] = (conteoRendimiento[r] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="rendimiento"]').forEach(checkbox => {
    const rendimiento = checkbox.value;
    const count = conteoRendimiento[rendimiento] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}