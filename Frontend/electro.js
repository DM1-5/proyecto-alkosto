// ===== ELECTRO PRODUCTS DATA =====
const electroProductos = [
  {
    id: 1,
    nombre: "Lavadora LG 18 Kg Carga Superior",
    marca: "lg",
    categoria: "lavadoras",
    capacidad: "16-20kg",
    precio: 1299000,
    precioOriginal: 1599000,
    descuento: 19,
    imagen: "templates/lavadora.webp",
    rating: 4.5,
    reviews: 124,
    envioGratis: true,
    caracteristicas: ["Turbo Drum", "Smart Diagnosis", "Vapor"],
    disponible: true
  },
  {
    id: 2,
    nombre: "Refrigerador Samsung French Door 650L",
    marca: "samsung",
    categoria: "refrigeradores",
    capacidad: "600-700L",
    precio: 2899000,
    precioOriginal: 3299000,
    descuento: 12,
    imagen: "templates/c-refrigeracion.webp",
    rating: 4.7,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["No Frost", "Dispensador", "LED"],
    disponible: true
  },
  {
    id: 3,
    nombre: "Estufa Whirlpool 6 Hornillas Gas",
    marca: "whirlpool",
    categoria: "estufas",
    capacidad: "6-hornillas",
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/tostadora.webp",
    rating: 4.3,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["Horno Grande", "Encendido", "Seguro"],
    disponible: true
  },
  {
    id: 4,
    nombre: "Lavavajillas Electrolux 12 Servicios",
    marca: "electrolux",
    categoria: "lavavajillas",
    capacidad: "12-servicios",
    precio: 1599000,
    precioOriginal: 1899000,
    descuento: 16,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.4,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["Aqua Sensor", "Turbo Speed", "Silencioso"],
    disponible: true
  },
  {
    id: 5,
    nombre: "Aire Acondicionado LG 12000 BTU",
    marca: "lg",
    categoria: "aires",
    capacidad: "12000-btu",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.6,
    reviews: 203,
    envioGratis: true,
    caracteristicas: ["Inverter", "WiFi", "Dual Cool"],
    disponible: true
  },
  {
    id: 6,
    nombre: "Microondas Samsung 32L Grill",
    marca: "samsung",
    categoria: "microondas",
    capacidad: "32L",
    precio: 459000,
    precioOriginal: 549000,
    descuento: 16,
    imagen: "templates/tostadora.webp",
    rating: 4.2,
    reviews: 134,
    envioGratis: false,
    caracteristicas: ["Grill", "Sensor", "Niños"],
    disponible: true
  },
  {
    id: 7,
    nombre: "Lavadora Mabe 16 Kg Automática",
    marca: "mabe",
    categoria: "lavadoras",
    capacidad: "16-20kg",
    precio: 1099000,
    precioOriginal: 1299000,
    descuento: 15,
    imagen: "templates/lavadora.webp",
    rating: 4.1,
    reviews: 98,
    envioGratis: true,
    caracteristicas: ["Aqua Save", "15 Programas", "Acero"],
    disponible: true
  },
  {
    id: 8,
    nombre: "Refrigerador Haceb 410L No Frost",
    marca: "haceb",
    categoria: "refrigeradores",
    capacidad: "400-500L",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-refrigeracion.webp",
    rating: 4.0,
    reviews: 76,
    envioGratis: true,
    caracteristicas: ["No Frost", "Multi Flow", "Gavetas"],
    disponible: true
  },
  {
    id: 9,
    nombre: "Estufa Electrolux 4 Hornillas Eléctrica",
    marca: "electrolux",
    categoria: "estufas",
    capacidad: "4-hornillas",
    precio: 699000,
    precioOriginal: 799000,
    descuento: 13,
    imagen: "templates/tostadora.webp",
    rating: 4.3,
    reviews: 112,
    envioGratis: true,
    caracteristicas: ["Vitrocerámica", "Touch", "Timer"],
    disponible: true
  },
  {
    id: 10,
    nombre: "Aire Acondicionado Midea 18000 BTU",
    marca: "midea",
    categoria: "aires",
    capacidad: "18000-btu",
    precio: 1399000,
    precioOriginal: 1699000,
    descuento: 18,
    imagen: "templates/c-domotica-2.webp",
    rating: 4.4,
    reviews: 145,
    envioGratis: true,
    caracteristicas: ["Inverter", "R32", "Self Clean"],
    disponible: true
  },
  {
    id: 11,
    nombre: "Lavadora Whirlpool 12 Kg Digital",
    marca: "whirlpool",
    categoria: "lavadoras",
    capacidad: "11-15kg",
    precio: 989000,
    precioOriginal: 1189000,
    descuento: 17,
    imagen: "templates/lavadora.webp",
    rating: 4.2,
    reviews: 87,
    envioGratis: true,
    caracteristicas: ["6th Sense", "Load & Go", "Steam"],
    disponible: true
  },
  {
    id: 12,
    nombre: "Microondas Bosch 25L Convección",
    marca: "bosch",
    categoria: "microondas",
    capacidad: "25L",
    precio: 599000,
    precioOriginal: 699000,
    descuento: 14,
    imagen: "templates/tostadora.webp",
    rating: 4.5,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["Convección", "Grill", "Auto"],
    disponible: true
  },
  {
    id: 13,
    nombre: "Refrigerador LG 507L Side by Side",
    marca: "lg",
    categoria: "refrigeradores",
    capacidad: "500-600L",
    precio: 3199000,
    precioOriginal: 3799000,
    descuento: 16,
    imagen: "templates/c-refrigeracion.webp",
    rating: 4.6,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["Dispensador", "Smart", "Multi Air"],
    disponible: true
  },
  {
    id: 14,
    nombre: "Lavavajillas Mabe 14 Servicios",
    marca: "mabe",
    categoria: "lavavajillas",
    capacidad: "14-servicios",
    precio: 1799000,
    precioOriginal: 2099000,
    descuento: 14,
    imagen: "templates/c-electrohogar.webp",
    rating: 4.1,
    reviews: 45,
    envioGratis: true,
    caracteristicas: ["Eco Wash", "Delay Start", "Altura"],
    disponible: true
  },
  {
    id: 15,
    nombre: "Estufa Samsung Gas 5 Hornillas",
    marca: "samsung",
    categoria: "estufas",
    capacidad: "5-hornillas",
    precio: 1099000,
    precioOriginal: 1299000,
    descuento: 15,
    imagen: "templates/tostadora.webp",
    rating: 4.4,
    reviews: 178,
    envioGratis: true,
    caracteristicas: ["Wok", "Safety", "Grande"],
    disponible: true
  },
  {
    id: 16,
    nombre: "Aire Acondicionado Haceb 9000 BTU",
    marca: "haceb",
    categoria: "aires",
    capacidad: "9000-btu",
    precio: 899000,
    precioOriginal: 1099000,
    descuento: 18,
    imagen: "templates/c-domotica-2.webp",
    rating: 3.9,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["Eco Mode", "Timer", "Remote"],
    disponible: true
  },
  {
    id: 17,
    nombre: "Lavadora Samsung 10 Kg Eco Bubble",
    marca: "samsung",
    categoria: "lavadoras",
    capacidad: "7-10kg",
    precio: 1199000,
    precioOriginal: 1399000,
    descuento: 14,
    imagen: "templates/lavadora.webp",
    rating: 4.5,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["Eco Bubble", "Digital", "VRT"],
    disponible: true
  },
  {
    id: 18,
    nombre: "Microondas Electrolux 20L Solo",
    marca: "electrolux",
    categoria: "microondas",
    capacidad: "20L",
    precio: 299000,
    precioOriginal: 359000,
    descuento: 17,
    imagen: "templates/tostadora.webp",
    rating: 4.0,
    reviews: 234,
    envioGratis: false,
    caracteristicas: ["Compacto", "Digital", "Fácil"],
    disponible: true
  },
  {
    id: 19,
    nombre: "Refrigerador Midea 320L Two Door",
    marca: "midea",
    categoria: "refrigeradores",
    capacidad: "300-400L",
    precio: 1399000,
    precioOriginal: 1599000,
    descuento: 13,
    imagen: "templates/c-refrigeracion.webp",
    rating: 4.2,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["No Frost", "LED", "Cristal"],
    disponible: true
  },
  {
    id: 20,
    nombre: "Estufa Bosch Gas 4 Hornillas",
    marca: "bosch",
    categoria: "estufas",
    capacidad: "4-hornillas",
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    imagen: "templates/tostadora.webp",
    rating: 4.6,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["FlameSelect", "Wok", "Acero"],
    disponible: true
  }
];

let productosFiltrados = [...electroProductos];
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

  // Filtros de categoría
  document.querySelectorAll('.category-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
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
  productosFiltrados = electroProductos.filter(producto => {
    // Filtro de marca
    const marcasSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
      .map(cb => cb.value);
    if (marcasSeleccionadas.length > 0 && !marcasSeleccionadas.includes(producto.marca)) {
      return false;
    }

    // Filtro de categoría
    const categoriaSeleccionada = document.querySelector('.category-filter-btn.active').dataset.category;
    if (categoriaSeleccionada !== 'all' && producto.categoria !== categoriaSeleccionada) {
      return false;
    }

    // Filtro de capacidad
    const capacidadesSeleccionadas = Array.from(document.querySelectorAll('input[name="capacidad"]:checked'))
      .map(cb => cb.value);
    if (capacidadesSeleccionadas.length > 0 && !capacidadesSeleccionadas.includes(producto.capacidad)) {
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
        ${producto.envioGratis ? '<div class="product-shipping">🚚 Envío gratis</div>' : ''}
        <button class="add-to-cart-btn">Agregar al carrito</button>
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

  // Contar productos por capacidad
  const conteoCapacidades = {};
  productosFiltrados.forEach(producto => {
    conteoCapacidades[producto.capacidad] = (conteoCapacidades[producto.capacidad] || 0) + 1;
  });

  document.querySelectorAll('input[name="capacidad"]').forEach(checkbox => {
    const capacidad = checkbox.value;
    const count = conteoCapacidades[capacidad] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}