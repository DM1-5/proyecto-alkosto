// ===== ELECTROHOGAR PRODUCTS DATA =====
const electrohogarProductos = [
  {
    id: 1,
    nombre: "Oster Licuadora ClÃ¡sica 3 Velocidades 1.25L",
    marca: "oster",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["digital", "automatico"],
    precio: 189000,
    precioOriginal: 229000,
    descuento: 17,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.6,
    reviews: 1234,
    envioGratis: true,
    caracteristicasExtra: ["3 velocidades", "Jarra de vidrio", "Base antideslizante", "450W"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Black+Decker Cafetera Programable 12 Tazas",
    marca: "black-decker",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A++",
    tamano: "mediano",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 259000,
    precioOriginal: 299000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 892,
    envioGratis: true,
    caracteristicasExtra: ["Programable 24h", "Filtro permanente", "Jarra tÃ©rmica", "Auto-apagado"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Philips Tostadora Digital 2 Rebanadas",
    marca: "philips",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["digital", "automatico"],
    precio: 159000,
    precioOriginal: 189000,
    descuento: 16,
    imagen: "templates/tostadora.webp",
    rating: 4.4,
    reviews: 567,
    envioGratis: true,
    caracteristicasExtra: ["8 niveles", "FunciÃ³n descongelar", "Bandeja migajas", "850W"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Oster Freidora de Aire 4.2L Digital",
    marca: "oster",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A+++",
    tamano: "mediano",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 449000,
    precioOriginal: 529000,
    descuento: 15,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.8,
    reviews: 1567,
    envioGratis: true,
    caracteristicasExtra: ["Sin aceite", "8 programas", "Pantalla tÃ¡ctil", "1400W"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Black+Decker Microondas Digital 0.9 Cu.Ft",
    marca: "black-decker",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A++",
    tamano: "compacto",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 389000,
    precioOriginal: 449000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.3,
    reviews: 445,
    envioGratis: true,
    caracteristicasExtra: ["10 potencias", "Child lock", "Turntable", "900W"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Oster Batidora de Mano 5 Velocidades",
    marca: "oster",
    categoria: "pequeÃ±os-electrodomesticos",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["inalambrico", "automatico"],
    precio: 129000,
    precioOriginal: 149000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 234,
    envioGratis: true,
    caracteristicasExtra: ["InalÃ¡mbrica", "BaterÃ­a recargable", "5 velocidades", "250W"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Dyson V11 Aspiradora InalÃ¡mbrica",
    marca: "dyson",
    categoria: "aspiradoras",
    eficiencia: "A+++",
    tamano: "mediano",
    caracteristicas: ["inalambrico", "smart", "automatico"],
    precio: 2599000,
    precioOriginal: 2899000,
    descuento: 10,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.9,
    reviews: 567,
    envioGratis: true,
    caracteristicasExtra: ["60min baterÃ­a", "Filtro HEPA", "Pantalla LCD", "Sensor inteligente"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Black+Decker Aspiradora Robot Smart",
    marca: "black-decker",
    categoria: "aspiradoras",
    eficiencia: "A++",
    tamano: "compacto",
    caracteristicas: ["inalambrico", "smart", "automatico"],
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.4,
    reviews: 345,
    envioGratis: true,
    caracteristicasExtra: ["WiFi", "App control", "Auto recarga", "Mapeo inteligente"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Philips Aspiradora Vertical 2 en 1",
    marca: "philips",
    categoria: "aspiradoras",
    eficiencia: "A++",
    tamano: "mediano",
    caracteristicas: ["inalambrico", "automatico"],
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.6,
    reviews: 178,
    envioGratis: true,
    caracteristicasExtra: ["2 en 1", "40min baterÃ­a", "CiclÃ³n", "Filtro lavable"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Dyson V8 Absolute Aspiradora InalÃ¡mbrica",
    marca: "dyson",
    categoria: "aspiradoras",
    eficiencia: "A+++",
    tamano: "mediano",
    caracteristicas: ["inalambrico", "automatico"],
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.8,
    reviews: 234,
    envioGratis: true,
    caracteristicasExtra: ["40min baterÃ­a", "CiclÃ³n V8", "5 accesorios", "Transformable"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Philips Secador de Cabello IÃ³nico 2200W",
    marca: "philips",
    categoria: "cuidado-personal",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["digital", "automatico"],
    precio: 189000,
    precioOriginal: 219000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 678,
    envioGratis: true,
    caracteristicasExtra: ["IÃ³nico", "3 velocidades", "2 temperaturas", "Difusor incluido"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Braun Afeitadora ElÃ©ctrica Series 7",
    marca: "braun",
    categoria: "cuidado-personal",
    eficiencia: "A++",
    tamano: "compacto",
    caracteristicas: ["inalambrico", "smart", "automatico"],
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.7,
    reviews: 345,
    envioGratis: true,
    caracteristicasExtra: ["Wet & Dry", "50min autonomÃ­a", "AutoSense", "EstaciÃ³n limpieza"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Philips Plancha de Cabello CerÃ¡mico",
    marca: "philips",
    categoria: "cuidado-personal",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["digital", "automatico"],
    precio: 229000,
    precioOriginal: 269000,
    descuento: 15,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.4,
    reviews: 456,
    envioGratis: true,
    caracteristicasExtra: ["CerÃ¡mica", "230Â°C max", "Placas flotantes", "Calentamiento rÃ¡pido"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Braun Depiladora Silk-Ã©pil 9 InalÃ¡mbrica",
    marca: "braun",
    categoria: "cuidado-personal",
    eficiencia: "A++",
    tamano: "compacto",
    caracteristicas: ["inalambrico", "automatico"],
    precio: 659000,
    precioOriginal: 759000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.6,
    reviews: 289,
    envioGratis: true,
    caracteristicasExtra: ["Wet & Dry", "40 pinzas", "Luz SensoSmart", "4 accesorios"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Rowenta Plancha de Vapor Microsteam 400",
    marca: "rowenta",
    categoria: "planchado",
    eficiencia: "A++",
    tamano: "mediano",
    caracteristicas: ["automatico"],
    precio: 389000,
    precioOriginal: 449000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.7,
    reviews: 567,
    envioGratis: true,
    caracteristicasExtra: ["Suela cerÃ¡mica", "300ml tanque", "Vapor vertical", "2600W"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Philips Centro de Planchado PerfectCare",
    marca: "philips",
    categoria: "planchado",
    eficiencia: "A+++",
    tamano: "grande",
    caracteristicas: ["digital", "smart", "automatico"],
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.8,
    reviews: 123,
    envioGratis: true,
    caracteristicasExtra: ["OptimalTEMP", "1.8L tanque", "Vapor continuo", "Sin ajustes"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Rowenta Tabla de Planchar Premium",
    marca: "rowenta",
    categoria: "planchado",
    eficiencia: "A+",
    tamano: "grande",
    caracteristicas: ["automatico"],
    precio: 449000,
    precioOriginal: 529000,
    descuento: 15,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 89,
    envioGratis: true,
    caracteristicasExtra: ["124x45cm", "Regulable altura", "Soporte plancha", "Funda incluida"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Honeywell Ventilador Torre Oscilante 42\"",
    marca: "honeywell",
    categoria: "climatizacion",
    eficiencia: "A++",
    tamano: "grande",
    caracteristicas: ["digital", "timer", "inalambrico"],
    precio: 659000,
    precioOriginal: 759000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.6,
    reviews: 234,
    envioGratis: true,
    caracteristicasExtra: ["Control remoto", "Timer 8h", "3 velocidades", "OscilaciÃ³n 80Â°"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Black+Decker Calefactor CerÃ¡mico 1500W",
    marca: "black-decker",
    categoria: "climatizacion",
    eficiencia: "A+",
    tamano: "compacto",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 289000,
    precioOriginal: 339000,
    descuento: 15,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.4,
    reviews: 345,
    envioGratis: true,
    caracteristicasExtra: ["CerÃ¡mico", "Oscilante", "Termostato", "ProtecciÃ³n sobrecalentamiento"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Honeywell Purificador de Aire HEPA",
    marca: "honeywell",
    categoria: "climatizacion",
    eficiencia: "A+++",
    tamano: "mediano",
    caracteristicas: ["digital", "smart", "automatico"],
    precio: 899000,
    precioOriginal: 1049000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.8,
    reviews: 156,
    envioGratis: true,
    caracteristicasExtra: ["Filtro HEPA", "Smart sensor", "4 velocidades", "35mÂ² cobertura"],
    disponible: true
  },
  {
    id: 21,
    nombre: "Philips Humidificador UltrasÃ³nico 2L",
    marca: "philips",
    categoria: "climatizacion",
    eficiencia: "A++",
    tamano: "mediano",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 359000,
    precioOriginal: 419000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 78,
    envioGratis: true,
    caracteristicasExtra: ["UltrasÃ³nico", "13h autonomÃ­a", "Vapor frÃ­o", "Auto-apagado"],
    disponible: true
  },
  {
    id: 22,
    nombre: "Oster Horno Tostador Digital 18L",
    marca: "oster",
    categoria: "cocina",
    eficiencia: "A++",
    tamano: "mediano",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 459000,
    precioOriginal: 529000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.6,
    reviews: 289,
    envioGratis: true,
    caracteristicasExtra: ["18L capacidad", "8 funciones", "ConvecciÃ³n", "1400W"],
    disponible: true
  },
  {
    id: 23,
    nombre: "Black+Decker Plancha de Asar 1800W",
    marca: "black-decker",
    categoria: "cocina",
    eficiencia: "A+",
    tamano: "grande",
    caracteristicas: ["digital", "automatico"],
    precio: 389000,
    precioOriginal: 449000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.5,
    reviews: 167,
    envioGratis: true,
    caracteristicasExtra: ["Antiadherente", "Termostato", "Bandeja goteo", "43x23cm"],
    disponible: true
  },
  {
    id: 24,
    nombre: "Oster Arrocera Digital 10 Tazas",
    marca: "oster",
    categoria: "cocina",
    eficiencia: "A++",
    tamano: "familiar",
    caracteristicas: ["digital", "timer", "automatico"],
    precio: 329000,
    precioOriginal: 379000,
    descuento: 13,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.7,
    reviews: 345,
    envioGratis: true,
    caracteristicasExtra: ["10 tazas", "Keep warm", "Vapor incluido", "Antiadherente"],
    disponible: true
  },
  {
    id: 25,
    nombre: "Philips Procesador de Alimentos 1000W",
    marca: "philips",
    categoria: "cocina",
    eficiencia: "A+++",
    tamano: "familiar",
    caracteristicas: ["digital", "automatico"],
    precio: 799000,
    precioOriginal: 929000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.8,
    reviews: 123,
    envioGratis: true,
    caracteristicasExtra: ["30 funciones", "3.4L bowl", "12 accesorios", "PowerChop"],
    disponible: true
  }
];

let productosFiltrados = [...electrohogarProductos];
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
  document.querySelectorAll('.electrohogar-cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.electrohogar-cat-btn').forEach(b => b.classList.remove('active'));
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
    document.querySelectorAll('.electrohogar-cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === categoriasSeleccionadas[0]);
    });
  } else {
    // Si hay mÃºltiples categorÃ­as o ninguna, activar "Todo"
    document.querySelectorAll('.electrohogar-cat-btn').forEach(btn => {
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
  productosFiltrados = electrohogarProductos.filter(producto => {
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

    // Filtro de eficiencia energÃ©tica
    const eficienciasSeleccionadas = Array.from(document.querySelectorAll('input[name="eficiencia"]:checked'))
      .map(cb => cb.value);
    if (eficienciasSeleccionadas.length > 0 && !eficienciasSeleccionadas.includes(producto.eficiencia)) {
      return false;
    }

    // Filtro de tamaÃ±o
    const tamanosSeleccionados = Array.from(document.querySelectorAll('input[name="tamano"]:checked'))
      .map(cb => cb.value);
    if (tamanosSeleccionados.length > 0 && !tamanosSeleccionados.includes(producto.tamano)) {
      return false;
    }

    // Filtro de caracterÃ­sticas
    const caracteristicasSeleccionadas = Array.from(document.querySelectorAll('input[name="caracteristicas"]:checked'))
      .map(cb => cb.value);
    if (caracteristicasSeleccionadas.length > 0) {
      const tieneCaracteristica = caracteristicasSeleccionadas.some(c => producto.caracteristicas.includes(c));
      if (!tieneCaracteristica) return false;
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
    case 'eficiencia':
      productosFiltrados.sort((a, b) => {
        const eficienciaA = getEficienciaNumero(a.eficiencia);
        const eficienciaB = getEficienciaNumero(b.eficiencia);
        return eficienciaB - eficienciaA;
      });
      break;
    default:
      // Relevancia - orden original
      break;
  }
}

function getEficienciaNumero(eficiencia) {
  if (eficiencia === 'A+++') return 4;
  if (eficiencia === 'A++') return 3;
  if (eficiencia === 'A+') return 2;
  if (eficiencia === 'Inverter') return 5;
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
      <div class="electrohogar-badge">${getCategoryName(producto.categoria)}</div>
      <div class="efficiency-badge">${producto.eficiencia}</div>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="electrohogar-specs">
          <span class="spec-tag">${getSizeName(producto.tamano)}</span>
          ${producto.caracteristicas.slice(0,2).map(car => `<span class="spec-tag">${getFeatureName(car)}</span>`).join('')}
        </div>
        <div class="product-price">
          <span class="price-current">$${producto.precio.toLocaleString()}</span>
          ${producto.precioOriginal ? `<span class="price-original">$${producto.precioOriginal.toLocaleString()}</span>` : ''}
          ${producto.descuento ? `<span class="price-discount">${producto.descuento}% OFF</span>` : ''}
        </div>
        <div class="product-features">
          ${producto.caracteristicasExtra.map(car => `<span class="feature-tag">${car}</span>`).join('')}
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
    'pequeÃ±os-electrodomesticos': 'PequeÃ±o Electro',
    'aspiradoras': 'Aspiradora',
    'cuidado-personal': 'Cuidado Personal',
    'planchado': 'Planchado',
    'climatizacion': 'ClimatizaciÃ³n',
    'cocina': 'Cocina'
  };
  return categories[category] || category;
}

function getSizeName(size) {
  const sizes = {
    'compacto': 'Compacto',
    'mediano': 'Mediano',
    'grande': 'Grande',
    'familiar': 'Familiar'
  };
  return sizes[size] || size;
}

function getFeatureName(feature) {
  const features = {
    'digital': 'Digital',
    'timer': 'Timer',
    'smart': 'Smart',
    'inalambrico': 'InalÃ¡mbrico',
    'automatico': 'Auto'
  };
  return features[feature] || feature;
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
  electrohogarProductos.forEach(producto => {
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
  electrohogarProductos.forEach(producto => {
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

  // Contar productos por eficiencia
  const conteoEficiencia = {};
  electrohogarProductos.forEach(producto => {
    conteoEficiencia[producto.eficiencia] = (conteoEficiencia[producto.eficiencia] || 0) + 1;
  });

  document.querySelectorAll('input[name="eficiencia"]').forEach(checkbox => {
    const eficiencia = checkbox.value;
    const count = conteoEficiencia[eficiencia] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por tamaÃ±o
  const conteoTamanos = {};
  electrohogarProductos.forEach(producto => {
    conteoTamanos[producto.tamano] = (conteoTamanos[producto.tamano] || 0) + 1;
  });

  document.querySelectorAll('input[name="tamano"]').forEach(checkbox => {
    const tamano = checkbox.value;
    const count = conteoTamanos[tamano] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por caracterÃ­sticas
  const conteoCaracteristicas = {};
  electrohogarProductos.forEach(producto => {
    producto.caracteristicas.forEach(c => {
      conteoCaracteristicas[c] = (conteoCaracteristicas[c] || 0) + 1;
    });
  });

  document.querySelectorAll('input[name="caracteristicas"]').forEach(checkbox => {
    const caracteristica = checkbox.value;
    const count = conteoCaracteristicas[caracteristica] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}
