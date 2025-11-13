// --- Render dinámico de estrellas según data-rating ---
function renderRatings() {
  const cards = document.querySelectorAll('.product-card[data-rating]');
  cards.forEach(card => {
    const rating = parseFloat(card.dataset.rating) || 0;
    const reviews = card.dataset.reviews || '0';
    const starsContainer = card.querySelector('.stars');
    const reviewsSpan = card.querySelector('.reviews');
    if (!starsContainer) return;

    const full = Math.floor(rating);
    const fraction = rating - full;
    const half = fraction >= 0.25 && fraction < 0.75;
    const extraFull = fraction >= 0.75 ? 1 : 0;
    const totalFull = full + extraFull;
    const empty = 5 - totalFull - (half ? 1 : 0);

    let html = '';
    for (let i = 0; i < totalFull; i++) html += '<i class="bi bi-star-fill"></i>';
    if (half) html += '<i class="bi bi-star-half"></i>';
    for (let i = 0; i < empty; i++) html += '<i class="bi bi-star"></i>';

    starsContainer.innerHTML = html;
    if (reviewsSpan) reviewsSpan.textContent = `(${reviews})`;
    const ratingValueSpan = card.querySelector('.rating-value');
    if (ratingValueSpan) {
      ratingValueSpan.textContent = rating.toFixed(1);
    }
    starsContainer.setAttribute('aria-label', `Calificación ${rating.toFixed(1)} de 5`);
  });
}

renderRatings();

// --- Funcionalidad para botones de categoría ---
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script cargado correctamente');
  
  const categoryButtons = document.querySelectorAll('.category-btn');
  console.log('Botones encontrados:', categoryButtons.length);
  
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const category = btn.dataset.category;
      console.log(`Categoría seleccionada: ${category}`);
      
      // Agregar efecto visual al botón seleccionado
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Navegación a páginas específicas según la categoría
      const categoryPages = {
        'celulares': 'index-celulares.html',
        'electro': 'index-electro.html',
        'computadores': 'index-computadores.html',
        'televisores': 'index-televisores.html',
        'videojuegos': 'index-videojuegos.html',
        'gaming': 'index-gaming.html',
        'domotica': 'index-domotica.html',
        'pines': 'index-pines.html',
        'audio': 'index-audio.html',
        'smartwatch': 'index-smartwatch.html',
        'audifonos': 'index-audifonos.html',
        'accesorios': 'index-accesorios.html',
        'camaras': 'index-camaras.html',
        'electrohogar': 'index-electrohogar.html',
        'juguetes': 'index-juguetes.html',
        'deportes': 'index-deportes.html',
        'muebles': 'index-muebles.html',
        'colchones': 'index-colchones.html',
        'llantas': 'index-llantas.html',
        'hogar': 'index-hogar.html',
        'ropa-hogar': 'index-ropa-hogar.html',
        'proyectores': 'index-proyectores.html',
        'ofertas-bancos': 'index-ofertas-bancos.html',
        'hiperofertas': 'index-hiperofertas.html'
      };
      
      // Pequeño delay para mostrar el efecto visual
      setTimeout(() => {
        if (categoryPages[category]) {
          console.log(`Navegando a: ${categoryPages[category]}`);
          window.location.href = categoryPages[category];
        } else {
          alert(`Página de ${category} en construcción`);
          btn.classList.remove('active');
        }
      }, 200);
    });
  });
});

// (Opcional) acción para el botón +
document.querySelectorAll('.product-card .btn-add').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    // Aquí podrías disparar evento de "añadir al carrito"
    btn.classList.add('pulse-add');
    setTimeout(() => btn.classList.remove('pulse-add'), 500);
  });
});
