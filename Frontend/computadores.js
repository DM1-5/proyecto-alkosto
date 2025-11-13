// ===== COMPUTADORES PRODUCTS DATA =====
const computadoresProductos = [
  {
    id: 1,
    nombre: "MacBook Pro M3 Pro 14 pulgadas",
    marca: "apple",
    tipo: "laptops",
    ram: "16gb",
    storage: "512gb",
    precio: 8999000,
    precioOriginal: 9999000,
    descuento: 10,
    imagen: "templates/macbook.webp",
    rating: 4.9,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["M3 Pro", "Retina XDR", "Touch ID"],
    specs: {
      procesador: "M3 Pro",
      pantalla: "14.2\"",
      graficos: "M3 Pro GPU"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 2,
    nombre: "HP Pavilion Gaming 15 RTX 4060",
    marca: "hp",
    tipo: "gaming",
    ram: "16gb",
    storage: "512gb",
    precio: 3899000,
    precioOriginal: 4399000,
    descuento: 11,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.6,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["RTX 4060", "Intel i7", "144Hz"],
    specs: {
      procesador: "Intel i7-13700H",
      pantalla: "15.6\" 144Hz",
      graficos: "RTX 4060"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 3,
    nombre: "Dell Inspiron 15 3000 Business",
    marca: "dell",
    tipo: "laptops",
    ram: "8gb",
    storage: "256gb",
    precio: 1899000,
    precioOriginal: 2199000,
    descuento: 14,
    imagen: "templates/c-computadores.webp",
    rating: 4.2,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["Intel i5", "SSD", "Windows 11"],
    specs: {
      procesador: "Intel i5-1235U",
      pantalla: "15.6\" FHD",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 4,
    nombre: "ASUS ROG Strix G15 RTX 4070",
    marca: "asus",
    tipo: "gaming",
    ram: "32gb",
    storage: "1tb",
    precio: 5299000,
    precioOriginal: 5999000,
    descuento: 12,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.8,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["RTX 4070", "AMD Ryzen 9", "RGB"],
    specs: {
      procesador: "AMD Ryzen 9 7940HS",
      pantalla: "15.6\" 165Hz",
      graficos: "RTX 4070"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 5,
    nombre: "Lenovo ThinkPad E14 Professional",
    marca: "lenovo",
    tipo: "laptops",
    ram: "8gb",
    storage: "512gb",
    precio: 2599000,
    precioOriginal: 2899000,
    descuento: 10,
    imagen: "templates/c-computadores.webp",
    rating: 4.4,
    reviews: 134,
    envioGratis: true,
    caracteristicas: ["Intel i5", "Business", "14 hrs"],
    specs: {
      procesador: "Intel i5-1335U",
      pantalla: "14\" FHD",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 6,
    nombre: "Acer Aspire 5 Slim AMD Ryzen 5",
    marca: "acer",
    tipo: "laptops",
    ram: "8gb",
    storage: "256gb",
    precio: 1699000,
    precioOriginal: 1999000,
    descuento: 15,
    imagen: "templates/c-computadores.webp",
    rating: 4.1,
    reviews: 298,
    envioGratis: true,
    caracteristicas: ["Ryzen 5", "Ligero", "Full HD"],
    specs: {
      procesador: "AMD Ryzen 5 7530U",
      pantalla: "15.6\" FHD",
      graficos: "AMD Radeon"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 7,
    nombre: "MSI Katana 15 RTX 4050 Gaming",
    marca: "msi",
    tipo: "gaming",
    ram: "16gb",
    storage: "512gb",
    precio: 3299000,
    precioOriginal: 3799000,
    descuento: 13,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.5,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["RTX 4050", "Intel i7", "Katana"],
    specs: {
      procesador: "Intel i7-13620H",
      pantalla: "15.6\" 144Hz",
      graficos: "RTX 4050"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 8,
    nombre: "HP All-in-One 24 Touch AMD Ryzen",
    marca: "hp",
    tipo: "all-in-one",
    ram: "8gb",
    storage: "256gb",
    precio: 2299000,
    precioOriginal: 2699000,
    descuento: 15,
    imagen: "templates/c-computadores.webp",
    rating: 4.3,
    reviews: 123,
    envioGratis: true,
    caracteristicas: ["Touch", "All-in-One", "Webcam"],
    specs: {
      procesador: "AMD Ryzen 5 7530U",
      pantalla: "24\" Touch FHD",
      graficos: "AMD Radeon"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 9,
    nombre: "Dell Optiplex 7000 Micro PC",
    marca: "dell",
    tipo: "mini-pc",
    ram: "16gb",
    storage: "512gb",
    precio: 2899000,
    precioOriginal: 3299000,
    descuento: 12,
    imagen: "templates/c-computadores.webp",
    rating: 4.4,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["Micro", "Intel i7", "Business"],
    specs: {
      procesador: "Intel i7-13700T",
      pantalla: "Sin pantalla",
      graficos: "Intel UHD"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 10,
    nombre: "Alienware m15 R7 RTX 4080",
    marca: "alienware",
    tipo: "gaming",
    ram: "32gb",
    storage: "1tb",
    precio: 8499000,
    precioOriginal: 9299000,
    descuento: 9,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.9,
    reviews: 67,
    envioGratis: true,
    caracteristicas: ["RTX 4080", "Intel i9", "Alien"],
    specs: {
      procesador: "Intel i9-13900HF",
      pantalla: "15.6\" 360Hz",
      graficos: "RTX 4080"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 11,
    nombre: "ASUS ZenBook 14 OLED Intel Evo",
    marca: "asus",
    tipo: "laptops",
    ram: "16gb",
    storage: "512gb",
    precio: 3599000,
    precioOriginal: 3999000,
    descuento: 10,
    imagen: "templates/c-computadores.webp",
    rating: 4.7,
    reviews: 145,
    envioGratis: true,
    caracteristicas: ["OLED", "Intel Evo", "Ultra"],
    specs: {
      procesador: "Intel i7-1360P",
      pantalla: "14\" OLED 2.8K",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 12,
    nombre: "Lenovo Legion 5 Pro RTX 4060",
    marca: "lenovo",
    tipo: "gaming",
    ram: "16gb",
    storage: "1tb",
    precio: 4199000,
    precioOriginal: 4699000,
    descuento: 11,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.6,
    reviews: 189,
    envioGratis: true,
    caracteristicas: ["RTX 4060", "AMD Ryzen 7", "Legion"],
    specs: {
      procesador: "AMD Ryzen 7 7735H",
      pantalla: "16\" 165Hz",
      graficos: "RTX 4060"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 13,
    nombre: "Acer Predator Helios 300 RTX 4070",
    marca: "acer",
    tipo: "gaming",
    ram: "32gb",
    storage: "1tb",
    precio: 5799000,
    precioOriginal: 6399000,
    descuento: 9,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.7,
    reviews: 134,
    envioGratis: true,
    caracteristicas: ["RTX 4070", "Intel i7", "Predator"],
    specs: {
      procesador: "Intel i7-13700HX",
      pantalla: "15.6\" 165Hz",
      graficos: "RTX 4070"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 14,
    nombre: "HP EliteBook 850 G10 Business",
    marca: "hp",
    tipo: "laptops",
    ram: "16gb",
    storage: "512gb",
    precio: 4299000,
    precioOriginal: 4799000,
    descuento: 10,
    imagen: "templates/c-computadores.webp",
    rating: 4.5,
    reviews: 98,
    envioGratis: true,
    caracteristicas: ["Business", "Intel i7", "Security"],
    specs: {
      procesador: "Intel i7-1355U",
      pantalla: "15.6\" FHD",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 15,
    nombre: "Dell XPS 13 Plus Ultra Portable",
    marca: "dell",
    tipo: "laptops",
    ram: "16gb",
    storage: "512gb",
    precio: 5299000,
    precioOriginal: 5799000,
    descuento: 9,
    imagen: "templates/c-computadores.webp",
    rating: 4.8,
    reviews: 167,
    envioGratis: true,
    caracteristicas: ["Ultra", "Intel i7", "Premium"],
    specs: {
      procesador: "Intel i7-1360P",
      pantalla: "13.4\" 3.5K OLED",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 16,
    nombre: "ASUS TUF Gaming A15 RTX 4050",
    marca: "asus",
    tipo: "gaming",
    ram: "8gb",
    storage: "512gb",
    precio: 2899000,
    precioOriginal: 3299000,
    descuento: 12,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.4,
    reviews: 234,
    envioGratis: true,
    caracteristicas: ["RTX 4050", "AMD Ryzen 5", "TUF"],
    specs: {
      procesador: "AMD Ryzen 5 7535HS",
      pantalla: "15.6\" 144Hz",
      graficos: "RTX 4050"
    },
    disponible: true,
    gaming: true
  },
  {
    id: 17,
    nombre: "Lenovo IdeaPad 3 AMD Student",
    marca: "lenovo",
    tipo: "laptops",
    ram: "8gb",
    storage: "256gb",
    precio: 1599000,
    precioOriginal: 1899000,
    descuento: 16,
    imagen: "templates/c-computadores.webp",
    rating: 4.0,
    reviews: 345,
    envioGratis: true,
    caracteristicas: ["Student", "AMD Ryzen 5", "Budget"],
    specs: {
      procesador: "AMD Ryzen 5 5500U",
      pantalla: "15.6\" FHD",
      graficos: "AMD Radeon"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 18,
    nombre: "MSI Creator Z16P RTX 4070 Studio",
    marca: "msi",
    tipo: "laptops",
    ram: "32gb",
    storage: "1tb",
    precio: 6899000,
    precioOriginal: 7599000,
    descuento: 9,
    imagen: "templates/c-computadores.webp",
    rating: 4.8,
    reviews: 89,
    envioGratis: true,
    caracteristicas: ["RTX 4070", "Creator", "16\" QHD+"],
    specs: {
      procesador: "Intel i7-13700H",
      pantalla: "16\" QHD+ 165Hz",
      graficos: "RTX 4070"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 19,
    nombre: "Acer Swift 3 Intel Evo Ultrabook",
    marca: "acer",
    tipo: "laptops",
    ram: "16gb",
    storage: "512gb",
    precio: 2999000,
    precioOriginal: 3399000,
    descuento: 12,
    imagen: "templates/c-computadores.webp",
    rating: 4.3,
    reviews: 156,
    envioGratis: true,
    caracteristicas: ["Intel Evo", "Ultrabook", "14\""],
    specs: {
      procesador: "Intel i7-1355U",
      pantalla: "14\" FHD IPS",
      graficos: "Intel Iris"
    },
    disponible: true,
    gaming: false
  },
  {
    id: 20,
    nombre: "HP Omen 16 RTX 4060 Gaming",
    marca: "hp",
    tipo: "gaming",
    ram: "16gb",
    storage: "1tb",
    precio: 4599000,
    precioOriginal: 5099000,
    descuento: 10,
    imagen: "templates/portatiles-gaming-2.webp",
    rating: 4.6,
    reviews: 178,
    envioGratis: true,
    caracteristicas: ["RTX 4060", "Intel i7", "16.1\""],
    specs: {
      procesador: "Intel i7-13700HX",
      pantalla: "16.1\" 165Hz",
      graficos: "RTX 4060"
    },
    disponible: true,
    gaming: true
  }
];

let productosFiltrados = [...computadoresProductos];
let paginaActual = 1;
const productosPorPagina = 12;
let buscadorGlobal = null;

// ===== INICIALIZACIÃ“N =====
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el buscador global
  if (typeof SearchEngine !== 'undefined') {
    buscadorGlobal = new SearchEngine(computadoresProductos, 'computadores', crearTarjetaProducto);
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
        <div class="computer-specs">
          <div class="spec-item">
            <span class="spec-label">Procesador</span>
            <span class="spec-value">${producto.specs.procesador}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">RAM</span>
            <span class="spec-value">${producto.ram.toUpperCase()}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Almacenamiento</span>
            <span class="spec-value">${producto.storage.toUpperCase()}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Pantalla</span>
            <span class="spec-value">${producto.specs.pantalla}</span>
          </div>
        </div>
        <div class="product-price">
          <span class="price-current">$${producto.precio.toLocaleString()}</span>
          ${producto.precioOriginal ? `<span class="price-original">$${producto.precioOriginal.toLocaleString()}</span>` : ''}
          ${producto.descuento ? `<span class="price-discount">${producto.descuento}% OFF</span>` : ''}
        </div>
        <div class="product-features">
          ${producto.caracteristicas.map(car => `<span class="feature-tag">${car}</span>`).join('')}
          ${producto.gaming ? '<span class="gaming-badge">Gaming</span>' : ''}
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
  
  // Si solo hay una marca seleccionada, activar el botÃ³n correspondiente
  if (marcasSeleccionadas.length === 1) {
    document.querySelectorAll('.brand-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.brand === marcasSeleccionadas[0]);
    });
  } else {
    // Si hay mÃºltiples marcas o ninguna, desactivar todos los botones
    document.querySelectorAll('.brand-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
  let productosBase = computadoresProductos;
  
  // Si hay una bÃºsqueda activa, usar esos resultados como base
  if (buscadorGlobal && buscadorGlobal.hayBusquedaActiva()) {
    productosBase = buscadorGlobal.obtenerResultadosBusqueda();
    
    // Si no hay resultados de bÃºsqueda, mostrar mensaje y salir
    if (productosBase.length === 0) {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = buscadorGlobal.generarMensajeSinResultados('computadores');
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

    // Filtro de tipo
    const tipoSeleccionado = document.querySelector('.type-filter-btn.active').dataset.type;
    if (tipoSeleccionado !== 'all' && producto.tipo !== tipoSeleccionado) {
      return false;
    }

    // Filtro de RAM
    const ramSeleccionada = Array.from(document.querySelectorAll('input[name="ram"]:checked'))
      .map(cb => cb.value);
    if (ramSeleccionada.length > 0 && !ramSeleccionada.includes(producto.ram)) {
      return false;
    }

    // Filtro de almacenamiento
    const storageSeleccionado = Array.from(document.querySelectorAll('input[name="storage"]:checked'))
      .map(cb => cb.value);
    if (storageSeleccionado.length > 0 && !storageSeleccionado.includes(producto.storage)) {
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
      ${producto.gaming ? '<div class="gaming-badge">Gaming</div>' : ''}
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${producto.marca.toUpperCase()}</div>
        <h3 class="product-title">${producto.nombre}</h3>
        <div class="product-specs">
          <div class="spec-item">
            <span class="spec-label">Procesador:</span>
            <span class="spec-value">${producto.specs.procesador}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Pantalla:</span>
            <span class="spec-value">${producto.specs.pantalla}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">GrÃ¡ficos:</span>
            <span class="spec-value">${producto.specs.graficos}</span>
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

  // Contar productos por RAM
  const conteoRAM = {};
  productosFiltrados.forEach(producto => {
    conteoRAM[producto.ram] = (conteoRAM[producto.ram] || 0) + 1;
  });

  document.querySelectorAll('input[name="ram"]').forEach(checkbox => {
    const ram = checkbox.value;
    const count = conteoRAM[ram] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });

  // Contar productos por almacenamiento
  const conteoStorage = {};
  productosFiltrados.forEach(producto => {
    conteoStorage[producto.storage] = (conteoStorage[producto.storage] || 0) + 1;
  });

  document.querySelectorAll('input[name="storage"]').forEach(checkbox => {
    const storage = checkbox.value;
    const count = conteoStorage[storage] || 0;
    const countSpan = checkbox.closest('.filter-option').querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${count})`;
    }
  });
}
