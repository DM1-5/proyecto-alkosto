// ===== DOMOTICA PRODUCTS DATA =====
const domoticaProductos = [
  {
    id: 1,
    nombre: "Amazon Echo Dot (5ta Gen)",
    marca: "amazon",
    categoria: "asistentes",
    compatibilidad: ["alexa", "wifi", "bluetooth"],
    precio: 189000,
    precioOriginal: 229000,
    descuento: 17,
    imagen: "templates/c-audio.webp",
    rating: 4.7,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["Alexa Built-in", "WiFi", "Bluetooth", "Sonido mejorado"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Philips Hue Smart Bulb Starter Kit",
    marca: "philips",
    categoria: "iluminacion",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit", "wifi"],
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.8,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["16M Colores", "Dimeable", "Control Remoto", "Puente incluido"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Google Nest Hub (2da Gen)",
    marca: "google",
    categoria: "asistentes",
    compatibilidad: ["google-assistant", "wifi"],
    precio: 389000,
    precioOriginal: 449000,
    descuento: 13,
    imagen: "templates/c-audio.webp",
    rating: 4.6,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Pantalla 7\"", "Google Assistant", "Control de Casa", "Soli Sensor"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Ring Video Doorbell Pro 2",
    marca: "amazon",
    categoria: "seguridad",
    compatibilidad: ["alexa", "wifi"],
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-camera-2.webp",
    rating: 4.5,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["1536p HD", "3D Motion Detection", "Head-to-Toe", "Audio bidireccional"],
    disponible: true
  },
  {
    id: 5,
    nombre: "TP-Link Kasa Smart Plug Mini",
    marca: "tp-link",
    categoria: "electrodomesticos",
    compatibilidad: ["alexa", "google-assistant", "wifi"],
    precio: 89000,
    precioOriginal: 109000,
    descuento: 18,
    imagen: "templates/accesorios.webp",
    rating: 4.4,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["Control Remoto", "Timer", "Away Mode", "Compacto"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Nest Thermostat",
    marca: "google",
    categoria: "climatizacion",
    compatibilidad: ["google-assistant", "wifi"],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.7,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Auto-Schedule", "Energy Star", "Remote Control", "Eco Mode"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Xiaomi Mi Smart Sensor Set",
    marca: "xiaomi",
    categoria: "sensores",
    compatibilidad: ["wifi", "bluetooth"],
    precio: 259000,
    precioOriginal: 299000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.3,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Motion", "Door/Window", "Temperature", "Mi Home App"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Amazon Echo Show 8 (3ra Gen)",
    marca: "amazon",
    categoria: "asistentes",
    compatibilidad: ["alexa", "wifi"],
    precio: 659000,
    precioOriginal: 749000,
    descuento: 12,
    imagen: "templates/c-audio.webp",
    rating: 4.8,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Pantalla 8\"", "Cámara 13MP", "Hub Zigbee", "Audio espacial"],
    disponible: true
  },
  {
    id: 9,
    nombre: "TP-Link Tapo C200 Security Camera",
    marca: "tp-link",
    categoria: "seguridad",
    compatibilidad: ["wifi"],
    precio: 179000,
    precioOriginal: 219000,
    descuento: 18,
    imagen: "templates/c-camera-2.webp",
    rating: 4.5,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["1080p", "Pan/Tilt", "Night Vision", "Two-way Audio"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Philips Hue Motion Sensor",
    marca: "philips",
    categoria: "sensores",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit"],
    precio: 229000,
    precioOriginal: 259000,
    descuento: 12,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Motion Detection", "Daylight Sensor", "Battery", "Hue Bridge"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Samsung SmartThings Hub",
    marca: "samsung",
    categoria: "electrodomesticos",
    compatibilidad: ["alexa", "google-assistant", "wifi"],
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.4,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Zigbee", "Z-Wave", "WiFi", "SmartThings App"],
    disponible: true
  },
  {
    id: 12,
    nombre: "TP-Link Kasa Smart Light Switch",
    marca: "tp-link",
    categoria: "iluminacion",
    compatibilidad: ["alexa", "google-assistant", "wifi"],
    precio: 149000,
    precioOriginal: 179000,
    descuento: 17,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.3,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Dimmer", "Schedule", "Away Mode", "No Hub Required"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Ring Alarm Security Kit",
    marca: "amazon",
    categoria: "seguridad",
    compatibilidad: ["alexa", "wifi"],
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.7,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["Base Station", "Keypad", "Contact Sensors", "Motion Detector"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Ecobee SmartThermostat",
    marca: "ecobee",
    categoria: "climatizacion",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit", "wifi"],
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.8,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["Built-in Alexa", "Room Sensor", "Energy Reports", "SmartSensor"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Philips Hue Lightstrip Plus 2m",
    marca: "philips",
    categoria: "iluminacion",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit"],
    precio: 329000,
    precioOriginal: 389000,
    descuento: 15,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.6,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["16M Colores", "Sincronización", "Cortable", "Adhesivo"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Xiaomi Mi Robot Vacuum",
    marca: "xiaomi",
    categoria: "electrodomesticos",
    compatibilidad: ["wifi", "google-assistant", "alexa"],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Mapeo LDS", "2100Pa", "150min", "Mi Home App"],
    disponible: true
  },
  {
    id: 17,
    nombre: "TP-Link Deco M4 Mesh System",
    marca: "tp-link",
    categoria: "sensores",
    compatibilidad: ["wifi"],
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.4,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["WiFi 6", "Mesh", "Parental Controls", "Antivirus"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Samsung Smart Refrigerator Module",
    marca: "samsung",
    categoria: "electrodomesticos",
    compatibilidad: ["wifi", "alexa", "google-assistant"],
    precio: 199000,
    precioOriginal: 239000,
    descuento: 17,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.3,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["SmartThings", "Energy Monitor", "Remote Control", "Alerts"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Philips Hue Dimmer Switch",
    marca: "philips",
    categoria: "iluminacion",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit"],
    precio: 129000,
    precioOriginal: 149000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.5,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Wireless", "Battery", "4 Scenes", "Magnetic Mount"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Google Nest Protect Smoke Detector",
    marca: "google",
    categoria: "seguridad",
    compatibilidad: ["google-assistant", "wifi"],
    precio: 659000,
    precioOriginal: 759000,
    descuento: 13,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.7,
    reviews: 267,
    envioGratis: true,
    caracteristicas: ["Smoke & CO", "App Alerts", "Voice Alerts", "Pathlight"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Honeywell T6 Pro Smart Thermostat",
    marca: "honeywell",
    categoria: "climatizacion",
    compatibilidad: ["alexa", "google-assistant", "wifi"],
    precio: 729000,
    precioOriginal: 849000,
    descuento: 14,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.4,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["7-Day Schedule", "Geofencing", "Energy Reports", "Touchscreen"],
    disponible: true
  },
  {
    id: 22,
    nombre: "TP-Link Kasa Smart Outlet",
    marca: "tp-link",
    categoria: "electrodomesticos",
    compatibilidad: ["alexa", "google-assistant", "wifi"],
    precio: 119000,
    precioOriginal: 139000,
    descuento: 14,
    imagen: "templates/accesorios.webp",
    rating: 4.6,
    reviews: 890,
    envioGratis: true,
    caracteristicas: ["2 Outlets", "USB Ports", "Voice Control", "Kasa App"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Philips Hue Smart Button",
    marca: "philips",
    categoria: "iluminacion",
    compatibilidad: ["alexa", "google-assistant", "apple-homekit"],
    precio: 89000,
    precioOriginal: 109000,
    descuento: 18,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.3,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["One Touch", "Portable", "Magnetic", "Hue Bridge"],
    disponible: true
  }
];

let productosFiltrados = [...domoticaProductos];
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
  document.querySelectorAll('.smart-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.smart-cat-btn').forEach(b => b.classList.remove('active'));
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
    document.querySelectorAll('.smart-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay múltiples categorías o ninguna, activar "Todo"
    document.querySelectorAll('.smart-cat-btn').forEach(btn => {
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
  productosFiltrados = domoticaProductos.filter(producto => {
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

    // Filtro de compatibilidad
    const compatibilidadesSeleccionadas = Array.from(document.querySelectorAll('input[name="compatibilidad"]:checked'))
      .map(cb => cb.value);
    if (compatibilidadesSeleccionadas.length > 0) {
      const tieneCompatibilidad = compatibilidadesSeleccionadas.some(c => producto.compatibilidad.includes(c));
      if (!tieneCompatibilidad) return false;
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
      <div class="smart-badge">${getCategoryName(producto.categoria)}</div>
      ${producto.compatibilidad.includes('alexa') ? '<div class="compatibility-badge">Alexa</div>' : ''}
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="smart-specs">
          <span class="spec-tag">${getCategoryTag(producto.categoria)}</span>
          ${producto.compatibilidad.includes('wifi') ? '<span class="spec-tag">WiFi</span>' : ''}
          ${producto.compatibilidad.includes('bluetooth') ? '<span class="spec-tag">Bluetooth</span>' : ''}
          ${producto.compatibilidad.includes('google-assistant') ? '<span class="spec-tag">Google</span>' : ''}
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
function getCategoryName(category) {
  const categories = {
    'asistentes': 'Smart Assistant',
    'iluminacion': 'Smart Light',
    'seguridad': 'Security',
    'climatizacion': 'Climate',
    'electrodomesticos': 'Smart Appliance',
    'sensores': 'Sensor'
  };
  return categories[category] || category;
}

function getCategoryTag(category) {
  const categories = {
    'asistentes': 'Assistant',
    'iluminacion': 'Lighting',
    'seguridad': 'Security',
    'climatizacion': 'Climate',
    'electrodomesticos': 'Appliance',
    'sensores': 'Sensor'
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
  domoticaProductos.forEach(producto => {
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
  domoticaProductos.forEach(producto => {
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

  // Contar productos por compatibilidad
  const conteoCompatibilidad = {};
  domoticaProductos.forEach(producto => {
    producto.compatibilidad.forEach(c => {
      conteoCompatibilidad[c] = (conteoCompatibilidad[c] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="compatibilidad"]').forEach(checkbox => {
    const compatibilidad = checkbox.value;
    const count = conteoCompatibilidad[compatibilidad] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}