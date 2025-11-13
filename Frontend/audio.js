// ===== AUDIO PRODUCTS DATA =====
const audioProductos = [
  {
    id: 1,
    nombre: "JBL Charge 5 Parlante Bluetooth PortÃ¡til",
    marca: "jbl",
    categoria: "parlantes",
    conectividad: ["bluetooth", "usb"],
    calidad: ["bass-boost", "hi-fi"],
    potencia: "50-100",
    precio: 549000,
    precioOriginal: 649000,
    descuento: 15,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["Resistente al agua", "20h baterÃ­a", "PowerBank", "JBL Pro Sound"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Sony SRS-XB33 Extra Bass Wireless Speaker",
    marca: "sony",
    categoria: "parlantes",
    conectividad: ["bluetooth", "usb", "aux"],
    calidad: ["bass-boost", "surround"],
    potencia: "50-100",
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Extra Bass", "Luces LED", "24h baterÃ­a", "Resistente agua"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Bose SoundLink Revolve+ Parlante 360Â°",
    marca: "bose",
    categoria: "parlantes",
    conectividad: ["bluetooth", "aux"],
    calidad: ["hi-fi", "surround"],
    potencia: "50-100",
    precio: 899000,
    precioOriginal: 999000,
    descuento: 10,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["Sonido 360Â°", "16h baterÃ­a", "Resistente agua", "Calidad premium"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Samsung HW-Q60T Barra de Sonido 5.1",
    marca: "samsung",
    categoria: "barras-sonido",
    conectividad: ["bluetooth", "hdmi", "optical"],
    calidad: ["dolby", "surround"],
    potencia: "100-200",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Dolby Digital", "Subwoofer", "Acoustic Beam", "Q Symphony"],
    disponible: true
  },
  {
    id: 5,
    nombre: "JBL Bar 5.1 Surround Soundbar InalÃ¡mbrico",
    marca: "jbl",
    categoria: "barras-sonido",
    conectividad: ["bluetooth", "hdmi", "optical", "wifi"],
    calidad: ["dolby", "surround"],
    potencia: "200+",
    precio: 2199000,
    precioOriginal: 2499000,
    descuento: 12,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["5.1 Surround", "Subwoofer inalÃ¡mbrico", "Dolby Digital", "4K Pass-Through"],
    disponible: true
  },
  {
    id: 6,
    nombre: "LG SN8YG Soundbar Dolby Atmos 3.1.2",
    marca: "lg",
    categoria: "barras-sonido",
    conectividad: ["bluetooth", "hdmi", "optical", "wifi"],
    calidad: ["dolby", "surround", "hi-fi"],
    potencia: "200+",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["Dolby Atmos", "DTS:X", "AI Sound Pro", "Google Assistant"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Sony MHC-V73D Sistema de Audio de Alta Potencia",
    marca: "sony",
    categoria: "sistemas-sonido",
    conectividad: ["bluetooth", "usb", "aux", "wifi"],
    calidad: ["bass-boost", "surround", "hi-fi"],
    potencia: "200+",
    precio: 1799000,
    precioOriginal: 1999000,
    descuento: 10,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["MEGA BASS", "Efectos de DJ", "Karaoke", "Luces LED"],
    disponible: true
  },
  {
    id: 8,
    nombre: "JBL PartyBox 310 Sistema de Sonido PortÃ¡til",
    marca: "jbl",
    categoria: "sistemas-sonido",
    conectividad: ["bluetooth", "usb", "aux"],
    calidad: ["bass-boost", "surround"],
    potencia: "200+",
    precio: 2399000,
    precioOriginal: 2699000,
    descuento: 11,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 178,
    envioGratis: true,
    caracteristicas: ["JBL Pro Sound", "Luces sincronizadas", "Karaoke", "18h baterÃ­a"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Yamaha MG10XU Mezcladora de Audio 10 Canales",
    marca: "yamaha",
    categoria: "equipos-dj",
    conectividad: ["usb", "aux"],
    calidad: ["studio", "hi-fi"],
    potencia: "0-50",
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 267,
    envioGratis: true,
    caracteristicas: ["10 canales", "Efectos SPX", "Phantom Power", "USB I/O"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Pioneer DDJ-FLX4 Controlador DJ 2 Canales",
    marca: "pioneer",
    categoria: "equipos-dj",
    conectividad: ["usb", "bluetooth"],
    calidad: ["studio"],
    potencia: "0-50",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["Serato DJ Lite", "djay Pro AI", "Smart Fader", "Jog Wheels"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Sony WH-1000XM4 AudÃ­fonos Noise Cancelling",
    marca: "sony",
    categoria: "parlantes",
    conectividad: ["bluetooth", "aux"],
    calidad: ["hi-fi", "studio"],
    potencia: "0-50",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 2341,
    envioGratis: true,
    caracteristicas: ["Noise Cancelling", "30h baterÃ­a", "LDAC", "Quick Charge"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Audio-Technica AT2020USB+ MicrÃ³fono de Estudio",
    marca: "audio-technica",
    categoria: "micrÃ³fonos",
    conectividad: ["usb"],
    calidad: ["studio", "hi-fi"],
    potencia: "0-50",
    precio: 649000,
    precioOriginal: 749000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Condensador", "Cardioide", "USB", "Plug & Play"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Shure SM58 MicrÃ³fono DinÃ¡mico Vocal",
    marca: "shure",
    categoria: "micrÃ³fonos",
    conectividad: ["aux"],
    calidad: ["studio"],
    potencia: "0-50",
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["DinÃ¡mico", "Cardioide", "Anti-shock", "Legendario"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Blue Yeti MicrÃ³fono USB Multi-PatrÃ³n",
    marca: "blue",
    categoria: "micrÃ³fonos",
    conectividad: ["usb"],
    calidad: ["studio", "hi-fi"],
    potencia: "0-50",
    precio: 799000,
    precioOriginal: 899000,
    descuento: 11,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["4 patrones polares", "Gain control", "Monitor directo", "Plug & Play"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Yamaha A-S301 Amplificador EstÃ©reo Integrado",
    marca: "yamaha",
    categoria: "amplificadores",
    conectividad: ["aux", "optical"],
    calidad: ["hi-fi", "studio"],
    potencia: "100-200",
    precio: 1599000,
    precioOriginal: 1799000,
    descuento: 11,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["60W x 2", "ToP-ART", "Pure Direct", "Phono MM"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Marantz PM6007 Amplificador Integrado Hi-Fi",
    marca: "marantz",
    categoria: "amplificadores",
    conectividad: ["aux", "optical"],
    calidad: ["hi-fi", "studio"],
    potencia: "100-200",
    precio: 2199000,
    precioOriginal: 2499000,
    descuento: 12,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["45W x 2", "HDAM", "Phono EQ", "Source Direct"],
    disponible: true
  },
  {
    id: 17,
    nombre: "JBL Flip 6 Parlante Bluetooth PortÃ¡til",
    marca: "jbl",
    categoria: "parlantes",
    conectividad: ["bluetooth", "usb"],
    calidad: ["bass-boost"],
    potencia: "0-50",
    precio: 349000,
    precioOriginal: 399000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["JBL Pro Sound", "12h baterÃ­a", "IP67", "PartyBoost"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Bose QuietComfort 45 AudÃ­fonos InalÃ¡mbricos",
    marca: "bose",
    categoria: "parlantes",
    conectividad: ["bluetooth", "aux"],
    calidad: ["hi-fi"],
    potencia: "0-50",
    precio: 1399000,
    precioOriginal: 1599000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Noise Cancelling", "24h baterÃ­a", "TriPort", "Aware Mode"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Sony HT-G700 Soundbar 3.1 Dolby Atmos",
    marca: "sony",
    categoria: "barras-sonido",
    conectividad: ["bluetooth", "hdmi", "optical"],
    calidad: ["dolby", "surround"],
    potencia: "100-200",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 178,
    envioGratis: true,
    caracteristicas: ["Dolby Atmos", "DTS:X", "Subwoofer inalÃ¡mbrico", "S-Force PRO"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Pioneer DDJ-SB3 Controlador DJ Serato",
    marca: "pioneer",
    categoria: "equipos-dj",
    conectividad: ["usb"],
    calidad: ["studio"],
    potencia: "0-50",
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Serato DJ Lite", "Pad Scratch", "FX Fade", "Trim knobs"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Yamaha HS5 Monitor de Estudio Activo",
    marca: "yamaha",
    categoria: "parlantes",
    conectividad: ["aux"],
    calidad: ["studio", "hi-fi"],
    potencia: "50-100",
    precio: 899000,
    precioOriginal: 999000,
    descuento: 10,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Monitor activo", "70W", "Respuesta plana", "Room Control"],
    disponible: true
  },
  {
    id: 22,
    nombre: "Rode PodMic MicrÃ³fono DinÃ¡mico Broadcasting",
    marca: "rode",
    categoria: "micrÃ³fonos",
    conectividad: ["aux"],
    calidad: ["studio"],
    potencia: "0-50",
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Broadcasting", "DinÃ¡mico", "Rich tone", "Swivel mount"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Samsung HW-Q950A Soundbar 11.1.4 Atmos",
    marca: "samsung",
    categoria: "barras-sonido",
    conectividad: ["bluetooth", "hdmi", "optical", "wifi"],
    calidad: ["dolby", "surround", "hi-fi"],
    potencia: "200+",
    precio: 4599000,
    precioOriginal: 5299000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.9,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["11.1.4 Dolby Atmos", "Rear speakers", "Q Symphony", "SpaceFit Sound"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Denon AVR-X2700H Receptor AV 7.2 Canales",
    marca: "denon",
    categoria: "amplificadores",
    conectividad: ["hdmi", "bluetooth", "wifi", "aux"],
    calidad: ["dolby", "surround", "hi-fi"],
    potencia: "200+",
    precio: 3299000,
    precioOriginal: 3799000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["7.2 canales", "Dolby Atmos", "HEOS", "8K Ultra HD"],
    disponible: true
  },
  {
    id: 25,
    nombre: "JBL Professional EON612 Monitor Activo",
    marca: "jbl",
    categoria: "sistemas-sonido",
    conectividad: ["aux", "bluetooth"],
    calidad: ["studio", "hi-fi"],
    potencia: "200+",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["1000W", "Professional", "DSP", "Bluetooth Audio"],
    disponible: true
  }
];

let productosFiltrados = [...audioProductos];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal = null;

// ===== INICIALIZACIÃ“N =====
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el buscador global
  if (typeof SearchEngine !== 'undefined') {
    buscadorGlobal = new SearchEngine(audioProductos, 'audio', crearTarjetaProducto);
    buscadorGlobal.inicializar();
  }
  
  inicializarFiltros();
  renderizarProductos();
  actualizarContadores();
});

// ===== FUNCIÃ“N PARA CREAR TARJETA DE PRODUCTO =====
function crearTarjetaProducto(producto) {
  return `
    <div class="product-card" data-id="${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="audio-specs">
          <div class="spec-item">
            <span class="spec-label">CategorÃ­a</span>
            <span class="spec-value">${producto.categoria.replace('-', ' ').toUpperCase()}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Conectividad</span>
            <span class="spec-value">${producto.conectividad.map(c => c.toUpperCase()).join(', ')}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Potencia</span>
            <span class="spec-value">${producto.potencia}W</span>
          </div>
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
          <span class="stars">${'â˜…'.repeat(Math.floor(producto.rating))}${'â˜†'.repeat(5-Math.floor(producto.rating))}</span>
          <span class="rating-text">(${producto.reviews})</span>
        </div>
        ${producto.envioGratis ? '<div class="product-shipping">EnvÃ­o gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `;
}

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de categorÃ­a superiores
  document.querySelectorAll('.audio-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.audio-cat-btn').forEach(b => b.classList.remove('active'));
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
  
  // Si solo hay una categorÃ­a seleccionada, activar el botÃ³n correspondiente
  if (categoriasSeleccionadas.length === 1) {
    document.querySelectorAll('.audio-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay mÃºltiples categorÃ­as o ninguna, activar "Todo"
    document.querySelectorAll('.audio-cat-btn').forEach(btn => {
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
  let productosBase = audioProductos;
  
  // Si hay una bÃºsqueda activa, usar esos resultados como base
  if (buscadorGlobal && buscadorGlobal.hayBusquedaActiva()) {
    productosBase = buscadorGlobal.obtenerResultadosBusqueda();
    
    // Si no hay resultados de bÃºsqueda, mostrar mensaje y salir
    if (productosBase.length === 0) {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = buscadorGlobal.generarMensajeSinResultados('audio');
      document.getElementById('showing-count').textContent = '0';
      document.getElementById('total-count').textContent = '0';
      return;
    }
  }
  
  productosFiltrados = productosBase.filter(producto => {
    // Filtro de categorÃ­a
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

    // Filtro de conectividad
    const conectividadSeleccionada = Array.from(document.querySelectorAll('input[name="conectividad"]:checked'))
      .map(cb => cb.value);
    if (conectividadSeleccionada.length > 0) {
      const tieneConectividad = conectividadSeleccionada.some(c => producto.conectividad.includes(c));
      if (!tieneConectividad) return false;
    }

    // Filtro de calidad
    const calidadSeleccionada = Array.from(document.querySelectorAll('input[name="calidad"]:checked'))
      .map(cb => cb.value);
    if (calidadSeleccionada.length > 0) {
      const tieneCalidad = calidadSeleccionada.some(c => producto.calidad.includes(c));
      if (!tieneCalidad) return false;
    }

    // Filtro de potencia
    const potenciasSeleccionadas = Array.from(document.querySelectorAll('input[name="potencia"]:checked'))
      .map(cb => cb.value);
    if (potenciasSeleccionadas.length > 0 && !potenciasSeleccionadas.includes(producto.potencia)) {
      return false;
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
    case 'potencia':
      productosFiltrados.sort((a, b) => {
        const potenciaA = getPotenciaNumero(a.potencia);
        const potenciaB = getPotenciaNumero(b.potencia);
        return potenciaB - potenciaA;
      });
      break;
    default:
      // Relevancia - orden original
      break;
  }
}

function getPotenciaNumero(potencia) {
  if (potencia === '0-50') return 25;
  if (potencia === '50-100') return 75;
  if (potencia === '100-200') return 150;
  if (potencia === '200+') return 300;
  return 0;
}

// ===== RENDERIZAR PRODUCTOS =====
function renderizarProductos() {
  const grid = document.getElementById('products-grid');
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosEnPagina = productosFiltrados.slice(inicio, fin);

  grid.innerHTML = productosEnPagina.map(producto => `
    <div class="product-card" data-id="${producto.id}">
      <div class="audio-badge">${getCategoryName(producto.categoria)}</div>
      <div class="power-badge">${getPowerDisplay(producto.potencia)}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="audio-specs">
          ${producto.conectividad.slice(0,3).map(conn => `<span class="spec-tag">${getConnectivityName(conn)}</span>`).join('')}
          ${producto.calidad.slice(0,2).map(cal => `<span class="spec-tag">${getQualityName(cal)}</span>`).join('')}
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
          <span class="stars">${'â˜…'.repeat(Math.floor(producto.rating))}${'â˜†'.repeat(5-Math.floor(producto.rating))}</span>
          <span class="rating-text">(${producto.reviews})</span>
        </div>
        ${producto.envioGratis ? '<div class="product-shipping">EnvÃ­o gratis</div>' : ''}
        <button class="add-to-cart-btn" onclick="agregarAlCarritoAPI(${producto.id})">Agregar al carrito</button>
      </div>
    </div>
  `).join('');
}

// ===== FUNCIONES AUXILIARES =====
function getCategoryName(category) {
  const categories = {
    'parlantes': 'Parlantes',
    'barras-sonido': 'Soundbar',
    'sistemas-sonido': 'Sistema',
    'equipos-dj': 'DJ',
    'micrÃ³fonos': 'MicrÃ³fono',
    'amplificadores': 'Amplificador'
  };
  return categories[category] || category;
}

function getConnectivityName(conn) {
  const connectivity = {
    'bluetooth': 'BT',
    'wifi': 'WiFi',
    'usb': 'USB',
    'aux': 'AUX',
    'hdmi': 'HDMI',
    'optical': 'Optical'
  };
  return connectivity[conn] || conn;
}

function getQualityName(quality) {
  const qualities = {
    'hi-fi': 'Hi-Fi',
    'studio': 'Studio',
    'dolby': 'Dolby',
    'surround': '5.1',
    'bass-boost': 'Bass'
  };
  return qualities[quality] || quality;
}

function getPowerDisplay(potencia) {
  const powers = {
    '0-50': 'â‰¤50W',
    '50-100': '50-100W',
    '100-200': '100-200W',
    '200+': '200W+'
  };
  return powers[potencia] || potencia;
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
  // Contar productos por categorÃ­a
  const conteoCategorias = {};
  audioProductos.forEach(producto => {
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
  audioProductos.forEach(producto => {
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

  // Contar productos por conectividad
  const conteoConectividad = {};
  audioProductos.forEach(producto => {
    producto.conectividad.forEach(c => {
      conteoConectividad[c] = (conteoConectividad[c] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="conectividad"]').forEach(checkbox => {
    const conectividad = checkbox.value;
    const count = conteoConectividad[conectividad] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por calidad
  const conteoCalidad = {};
  audioProductos.forEach(producto => {
    producto.calidad.forEach(c => {
      conteoCalidad[c] = (conteoCalidad[c] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="calidad"]').forEach(checkbox => {
    const calidad = checkbox.value;
    const count = conteoCalidad[calidad] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por potencia
  const conteoPotencia = {};
  audioProductos.forEach(producto => {
    conteoPotencia[producto.potencia] = (conteoPotencia[producto.potencia] || 0) + 1;
  });

  document.querySelectorAll('input[name="potencia"]').forEach(checkbox => {
    const potencia = checkbox.value;
    const count = conteoPotencia[potencia] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}
