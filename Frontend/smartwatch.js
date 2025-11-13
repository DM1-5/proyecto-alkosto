// ===== SMARTWATCH PRODUCTS DATA =====
const smartwatchProductos = [
  {
    id: 1,
    nombre: "Apple Watch Series 9 GPS 45mm",
    marca: "apple",
    categoria: "premium",
    compatibilidad: ["ios"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "ecg"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.9,
    reviews: 2341,
    envioGratis: true,
    caracteristicas: ["Always-On Display", "Digital Crown", "Siri", "Apple Pay"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Samsung Galaxy Watch6 44mm Bluetooth",
    marca: "samsung",
    categoria: "premium",
    compatibilidad: ["android", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "1-2-dias",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.7,
    reviews: 1567,
    envioGratis: true,
    caracteristicas: ["Super AMOLED", "Wear OS", "Samsung Pay", "Bixby"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Garmin Forerunner 955 Solar GPS",
    marca: "garmin",
    categoria: "deportivo",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "1-2-semanas",
    precio: 2399000,
    precioOriginal: 2699000,
    descuento: 11,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.8,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Carga Solar", "Maps", "Training Load", "ClimbPro"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Huawei Watch GT 4 46mm",
    marca: "huawei",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-semanas",
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.6,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["AMOLED", "HarmonyOS", "TruSleep", "100+ deportes"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Amazfit GTR 4 Limited Edition",
    marca: "amazfit",
    categoria: "outdoor",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-semanas",
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.5,
    reviews: 445,
    envioGratis: true,
    caracteristicas: ["AMOLED HD", "Alexa", "150+ deportes", "Zepp OS"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Fitbit Versa 4 Health & Fitness",
    marca: "fitbit",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "3-7-dias",
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.4,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Always-On", "Google Assistant", "Fitbit Pay", "40+ apps"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Apple Watch SE 2nd Gen 40mm",
    marca: "apple",
    categoria: "casual",
    compatibilidad: ["ios"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.7,
    reviews: 1234,
    envioGratis: true,
    caracteristicas: ["Retina Display", "Digital Crown", "Siri", "Family Setup"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Samsung Galaxy Watch5 Pro 45mm",
    marca: "samsung",
    categoria: "outdoor",
    compatibilidad: ["android", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "3-7-dias",
    precio: 1699000,
    precioOriginal: 1999000,
    descuento: 15,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.8,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["Titanium", "Sapphire Crystal", "Route Workouts", "590mAh"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Garmin Venu 2 Plus Music GPS",
    marca: "garmin",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "3-7-dias",
    precio: 1799000,
    precioOriginal: 2099000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["AMOLED", "Music Storage", "Voice Calls", "Health Snapshot"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Huawei Watch Fit 2 Active Edition",
    marca: "huawei",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-semanas",
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.5,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["AMOLED Curved", "Quick Workouts", "Healthy Living", "10 dÃ­as baterÃ­a"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Amazfit T-Rex 2 Rugged Outdoor",
    marca: "amazfit",
    categoria: "outdoor",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "3-7-dias",
    precio: 799000,
    precioOriginal: 929000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.7,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Military Grade", "Dual-band GPS", "150+ deportes", "24 dÃ­as baterÃ­a"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Fitbit Charge 5 Advanced Fitness",
    marca: "fitbit",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "monitoreo-estres", "ecg"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "3-7-dias",
    precio: 649000,
    precioOriginal: 749000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.4,
    reviews: 678,
    envioGratis: true,
    caracteristicas: ["Color Display", "ECG App", "Stress Management", "Fitbit Premium"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Fossil Gen 6 Wellness Edition",
    marca: "fossil",
    categoria: "casual",
    compatibilidad: ["android", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.3,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["Wear OS 3", "Snapdragon 4100+", "Google Pay", "Spotify"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Apple Watch Ultra GPS + Cellular",
    marca: "apple",
    categoria: "outdoor",
    compatibilidad: ["ios"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "ecg"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "3-7-dias",
    precio: 3299000,
    precioOriginal: 3799000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.9,
    reviews: 567,
    envioGratis: true,
    caracteristicas: ["Titanium Case", "Action Button", "Ocean Band", "Siren"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Samsung Galaxy Watch4 Classic 46mm",
    marca: "samsung",
    categoria: "casual",
    compatibilidad: ["android", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 999000,
    precioOriginal: 1199000,
    descuento: 17,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.5,
    reviews: 892,
    envioGratis: true,
    caracteristicas: ["Rotating Bezel", "Wear OS", "Body Composition", "Samsung Health"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Garmin Instinct 2 Solar Tactical",
    marca: "garmin",
    categoria: "outdoor",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-mes",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Solar Charging", "Military Standard", "Unlimited Battery", "Night Vision"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Huawei Watch D Blood Pressure",
    marca: "huawei",
    categoria: "premium",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["resistente-agua", "multideporte", "running"],
    bateria: "3-7-dias",
    precio: 1699000,
    precioOriginal: 1999000,
    descuento: 15,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.7,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["Blood Pressure", "Micro-pump", "TruSleep", "Medical Grade"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Amazfit Bip 3 Pro Health Watch",
    marca: "amazfit",
    categoria: "casual",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-semanas",
    precio: 399000,
    precioOriginal: 459000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.4,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Color Display", "Alexa", "60+ deportes", "14 dÃ­as baterÃ­a"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Fitbit Sense 2 Health Management",
    marca: "fitbit",
    categoria: "premium",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "monitoreo-estres", "ecg"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "3-7-dias",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.6,
    reviews: 278,
    envioGratis: true,
    caracteristicas: ["ECG & EDA", "Stress Management", "Google Assistant", "Alexa"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Fossil Gen 6 Hybrid Wellness",
    marca: "fossil",
    categoria: "casual",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno"],
    deportes: ["resistente-agua", "multideporte"],
    bateria: "1-2-semanas",
    precio: 759000,
    precioOriginal: 899000,
    descuento: 16,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.2,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["Hybrid E-Ink", "Wellness Features", "Always-On", "2 semanas baterÃ­a"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Garmin Fenix 7X Solar Sapphire",
    marca: "garmin",
    categoria: "outdoor",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "1-mes",
    precio: 3599000,
    precioOriginal: 4199000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.9,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["Solar Charging", "Sapphire Glass", "TopoActive Maps", "28 dÃ­as GPS"],
    disponible: true
  },
  {
    id: 22,
    nombre: "Amazfit GTR 3 Pro Limited Edition",
    marca: "amazfit",
    categoria: "fitness",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-semanas",
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.6,
    reviews: 267,
    envioGratis: true,
    caracteristicas: ["Ultra HD AMOLED", "Zepp Coach", "150+ deportes", "12 dÃ­as baterÃ­a"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Samsung Galaxy Watch4 40mm Rose Gold",
    marca: "samsung",
    categoria: "casual",
    compatibilidad: ["android", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 799000,
    precioOriginal: 929000,
    descuento: 14,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.5,
    reviews: 456,
    envioGratis: true,
    caracteristicas: ["Wear OS", "Body Composition", "Samsung Health", "Google Pay"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Apple Watch Series 8 GPS 41mm",
    marca: "apple",
    categoria: "premium",
    compatibilidad: ["ios"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "ecg"],
    deportes: ["gps", "resistente-agua", "multideporte", "running"],
    bateria: "1-2-dias",
    precio: 1599000,
    precioOriginal: 1899000,
    descuento: 16,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.8,
    reviews: 789,
    envioGratis: true,
    caracteristicas: ["Always-On Retina", "Temperature Sensing", "Crash Detection", "WatchOS 9"],
    disponible: true
  },
  {
    id: 25,
    nombre: "Garmin Vivoactive 4S Music GPS",
    marca: "garmin",
    categoria: "deportivo",
    compatibilidad: ["android", "ios", "universal"],
    salud: ["frecuencia-cardiaca", "monitoreo-sueno", "oxigeno-sangre", "monitoreo-estres"],
    deportes: ["gps", "resistente-agua", "multideporte", "running", "natacion"],
    bateria: "3-7-dias",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/reloj HUAWEI.webp",
    rating: 4.6,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Music Storage", "Animated Workouts", "Body Battery", "Safe for Women"],
    disponible: true
  }
];

let productosFiltrados = [...smartwatchProductos];
let paginaActual = 1;
const productosPorPagina = 12;

// ===== INICIALIZACIÃ“N =====
document.addEventListener('DOMContentLoaded', function() {
  inicializarFiltros();
  renderizarProductos();
  actualizarContadores();
});

// ===== FILTROS SUPERIORES =====
function inicializarFiltros() {
  // Filtros de categorÃ­a superiores
  document.querySelectorAll('.smartwatch-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.smartwatch-cat-btn').forEach(b => b.classList.remove('active'));
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
    document.querySelectorAll('.smartwatch-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay mÃºltiples categorÃ­as o ninguna, activar "Todo"
    document.querySelectorAll('.smartwatch-cat-btn').forEach(btn => {
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
  productosFiltrados = smartwatchProductos.filter(producto => {
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

    // Filtro de compatibilidad
    const compatibilidadSeleccionada = Array.from(document.querySelectorAll('input[name="compatibilidad"]:checked'))
      .map(cb => cb.value);
    if (compatibilidadSeleccionada.length > 0) {
      const tieneCompatibilidad = compatibilidadSeleccionada.some(c => producto.compatibilidad.includes(c));
      if (!tieneCompatibilidad) return false;
    }

    // Filtro de funciones de salud
    const saludSeleccionada = Array.from(document.querySelectorAll('input[name="salud"]:checked'))
      .map(cb => cb.value);
    if (saludSeleccionada.length > 0) {
      const tieneSalud = saludSeleccionada.some(s => producto.salud.includes(s));
      if (!tieneSalud) return false;
    }

    // Filtro de funciones deportivas
    const deportesSeleccionados = Array.from(document.querySelectorAll('input[name="deportes"]:checked'))
      .map(cb => cb.value);
    if (deportesSeleccionados.length > 0) {
      const tieneDeportes = deportesSeleccionados.some(d => producto.deportes.includes(d));
      if (!tieneDeportes) return false;
    }

    // Filtro de duraciÃ³n de baterÃ­a
    const bateriasSeleccionadas = Array.from(document.querySelectorAll('input[name="bateria"]:checked'))
      .map(cb => cb.value);
    if (bateriasSeleccionadas.length > 0 && !bateriasSeleccionadas.includes(producto.bateria)) {
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
    case 'bateria':
      productosFiltrados.sort((a, b) => {
        const bateriaA = getBateriaNumero(a.bateria);
        const bateriaB = getBateriaNumero(b.bateria);
        return bateriaB - bateriaA;
      });
      break;
    default:
      // Relevancia - orden original
      break;
  }
}

function getBateriaNumero(bateria) {
  if (bateria === '1-2-dias') return 1.5;
  if (bateria === '3-7-dias') return 5;
  if (bateria === '1-2-semanas') return 10;
  if (bateria === '1-mes') return 30;
  return 1;
}

// ===== RENDERIZAR PRODUCTOS =====
function renderizarProductos() {
  const grid = document.getElementById('products-grid');
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosEnPagina = productosFiltrados.slice(inicio, fin);

  grid.innerHTML = productosEnPagina.map(producto => `
    <div class="product-card" data-id="${producto.id}">
      <div class="smartwatch-badge">${getCategoryName(producto.categoria)}</div>
      <div class="battery-badge">${getBatteryDisplay(producto.bateria)}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="smartwatch-specs">
          ${producto.compatibilidad.slice(0,2).map(comp => `<span class="spec-tag">${getCompatibilityName(comp)}</span>`).join('')}
          ${producto.salud.slice(0,2).map(sal => `<span class="spec-tag">${getHealthName(sal)}</span>`).join('')}
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
    'fitness': 'Fitness',
    'premium': 'Premium',
    'deportivo': 'Deportivo',
    'casual': 'Casual',
    'outdoor': 'Outdoor'
  };
  return categories[category] || category;
}

function getBatteryDisplay(bateria) {
  const batteries = {
    '1-2-dias': '1-2d',
    '3-7-dias': '3-7d',
    '1-2-semanas': '1-2sem',
    '1-mes': '1mes'
  };
  return batteries[bateria] || bateria;
}

function getCompatibilityName(comp) {
  const compatibility = {
    'ios': 'iOS',
    'android': 'Android',
    'universal': 'Universal'
  };
  return compatibility[comp] || comp;
}

function getHealthName(health) {
  const healthFeatures = {
    'frecuencia-cardiaca': 'HR',
    'monitoreo-sueno': 'Sleep',
    'oxigeno-sangre': 'SpO2',
    'monitoreo-estres': 'Stress',
    'ecg': 'ECG'
  };
  return healthFeatures[health] || health;
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
  smartwatchProductos.forEach(producto => {
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
  smartwatchProductos.forEach(producto => {
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
  smartwatchProductos.forEach(producto => {
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

  // Contar productos por funciones de salud
  const conteoSalud = {};
  smartwatchProductos.forEach(producto => {
    producto.salud.forEach(s => {
      conteoSalud[s] = (conteoSalud[s] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="salud"]').forEach(checkbox => {
    const salud = checkbox.value;
    const count = conteoSalud[salud] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por funciones deportivas
  const conteoDeportes = {};
  smartwatchProductos.forEach(producto => {
    producto.deportes.forEach(d => {
      conteoDeportes[d] = (conteoDeportes[d] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="deportes"]').forEach(checkbox => {
    const deportes = checkbox.value;
    const count = conteoDeportes[deportes] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por duraciÃ³n de baterÃ­a
  const conteoBateria = {};
  smartwatchProductos.forEach(producto => {
    conteoBateria[producto.bateria] = (conteoBateria[producto.bateria] || 0) + 1;
  });

  document.querySelectorAll('input[name="bateria"]').forEach(checkbox => {
    const bateria = checkbox.value;
    const count = conteoBateria[bateria] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}
