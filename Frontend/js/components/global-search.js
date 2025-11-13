// ===== COMPONENTE GLOBAL SEARCH - ALKOSTO ECOMMERCE =====
// Búsqueda global moderna con auto-suggest, debounce y manejo de errores

class GlobalSearch {
  constructor(options = {}) {
    this.options = {
      containerId: 'global-search-container',
      placeholder: 'Buscar productos en Alkosto...',
      debounceTime: 300,
      minQueryLength: 2,
      maxSuggestions: 6,
      enableHistory: true,
      enableCategories: true,
      ...options
    };

    this.state = {
      query: '',
      isSearching: false,
      showSuggestions: false,
      suggestions: [],
      searchHistory: [],
      recentSearches: this.loadSearchHistory(),
      selectedSuggestionIndex: -1
    };

    this.debounceTimer = null;
    this.suggestionsList = null;
    this.searchInput = null;
    this.searchContainer = null;
    
    this.init();
  }

  // Inicializar el componente
  init() {
    this.createSearchComponent();
    this.bindEvents();
    this.loadInitialData();
  }

  // Crear la estructura HTML del componente
  createSearchComponent() {
    const container = document.getElementById(this.options.containerId);
    if (!container) {
      console.error(`Container with ID '${this.options.containerId}' not found`);
      return;
    }

    container.innerHTML = `
      <div class="global-search-wrapper">
        <form class="global-search-form" role="search">
          <div class="search-input-group">
            <div class="search-input-wrapper">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="21 21l-4.35-4.35" stroke="currentColor" stroke-width="2"/>
              </svg>
              <input 
                type="search" 
                class="search-input" 
                placeholder="${this.options.placeholder}"
                autocomplete="off"
                spellcheck="false"
                aria-label="Buscar productos"
              >
              <button type="button" class="search-clear" title="Limpiar búsqueda" style="display: none;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="X6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </button>
              <div class="search-loading" style="display: none;">
                <div class="loading-spinner"></div>
              </div>
            </div>
            <button type="submit" class="search-submit-btn">
              <span class="btn-text">Buscar</span>
              <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="21 21l-4.35-4.35" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </form>

        <!-- Dropdown de sugerencias -->
        <div class="search-suggestions-dropdown" style="display: none;">
          <div class="suggestions-content">
            <!-- Contenido dinámico -->
          </div>
        </div>
      </div>
    `;

    // Referencias a elementos
    this.searchContainer = container.querySelector('.global-search-wrapper');
    this.searchInput = container.querySelector('.search-input');
    this.searchForm = container.querySelector('.global-search-form');
    this.clearButton = container.querySelector('.search-clear');
    this.loadingIndicator = container.querySelector('.search-loading');
    this.suggestionsDropdown = container.querySelector('.search-suggestions-dropdown');
    this.suggestionsContent = container.querySelector('.suggestions-content');
  }

  // Vincular eventos
  bindEvents() {
    if (!this.searchInput) return;

    // Evento de input con debounce
    this.searchInput.addEventListener('input', (e) => {
      this.handleInputChange(e.target.value);
    });

    // Evento de focus para mostrar sugerencias
    this.searchInput.addEventListener('focus', () => {
      if (this.state.query.length >= this.options.minQueryLength || this.state.recentSearches.length > 0) {
        this.showSuggestions();
      }
    });

    // Navegación con teclado
    this.searchInput.addEventListener('keydown', (e) => {
      this.handleKeyNavigation(e);
    });

    // Submit del formulario
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.executeSearch(this.state.query);
    });

    // Botón limpiar
    this.clearButton.addEventListener('click', () => {
      this.clearSearch();
    });

    // Cerrar sugerencias al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!this.searchContainer.contains(e.target)) {
        this.hideSuggestions();
      }
    });

    // Cerrar sugerencias con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideSuggestions();
      }
    });
  }

  // Manejar cambios en el input
  handleInputChange(value) {
    this.state.query = value;
    this.updateClearButton();

    // Limpiar timer anterior
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    // Si el query está vacío, mostrar búsquedas recientes
    if (value.length === 0) {
      this.showRecentSearches();
      return;
    }

    // Si es muy corto, ocultar sugerencias
    if (value.length < this.options.minQueryLength) {
      this.hideSuggestions();
      return;
    }

    // Debounce para búsqueda de sugerencias
    this.debounceTimer = setTimeout(() => {
      this.fetchSuggestions(value);
    }, this.options.debounceTime);
  }

  // Navegación con teclado
  handleKeyNavigation(e) {
    const suggestions = this.suggestionsContent.querySelectorAll('.suggestion-item:not(.disabled)');
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.state.selectedSuggestionIndex = Math.min(
          this.state.selectedSuggestionIndex + 1,
          suggestions.length - 1
        );
        this.highlightSuggestion();
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.state.selectedSuggestionIndex = Math.max(
          this.state.selectedSuggestionIndex - 1,
          -1
        );
        this.highlightSuggestion();
        break;

      case 'Enter':
        if (this.state.selectedSuggestionIndex >= 0 && suggestions[this.state.selectedSuggestionIndex]) {
          e.preventDefault();
          this.selectSuggestion(suggestions[this.state.selectedSuggestionIndex]);
        }
        break;

      case 'Tab':
        // Auto-completar con la primera sugerencia
        if (suggestions.length > 0 && this.state.selectedSuggestionIndex === -1) {
          e.preventDefault();
          const firstSuggestion = suggestions[0];
          const suggestionText = firstSuggestion.querySelector('.suggestion-text').textContent;
          this.searchInput.value = suggestionText;
          this.state.query = suggestionText;
          this.hideSuggestions();
        }
        break;
    }
  }

  // Resaltar sugerencia seleccionada
  highlightSuggestion() {
    const suggestions = this.suggestionsContent.querySelectorAll('.suggestion-item');
    suggestions.forEach((item, index) => {
      item.classList.toggle('highlighted', index === this.state.selectedSuggestionIndex);
    });
  }

  // Obtener sugerencias de la API
  async fetchSuggestions(query) {
    if (!window.ProductsAPI) {
      console.error('ProductsAPI not available');
      return;
    }

    this.setState({ isSearching: true });
    this.showLoading();

    try {
      const response = await window.ProductsAPI.search(query, { limit: this.options.maxSuggestions });
      
      if (response.success) {
        this.setState({ 
          suggestions: response.data.products,
          isSearching: false 
        });
        this.renderSuggestions(response.data.products, response.suggestions);
      } else {
        throw new Error(response.error || 'Error en la búsqueda');
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      this.setState({ isSearching: false });
      this.showErrorState();
    } finally {
      this.hideLoading();
    }
  }

  // Renderizar sugerencias
  renderSuggestions(products, textSuggestions = []) {
    if (!this.suggestionsContent) return;

    let content = '';

    // Sugerencias de texto
    if (textSuggestions.length > 0) {
      content += `
        <div class="suggestions-section">
          <div class="suggestions-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="21 21l-4.35-4.35" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Búsquedas sugeridas</span>
          </div>
          ${textSuggestions.map(suggestion => `
            <div class="suggestion-item suggestion-text-item" data-type="text" data-value="${suggestion}">
              <svg class="suggestion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                <path d="21 21l-4.35-4.35" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="suggestion-text">${this.highlightQuery(suggestion)}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Productos sugeridos
    if (products.length > 0) {
      content += `
        <div class="suggestions-section">
          <div class="suggestions-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
              <path d="21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Productos</span>
          </div>
          ${products.map(product => `
            <div class="suggestion-item suggestion-product-item" data-type="product" data-id="${product.id}">
              <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-name">${this.highlightQuery(product.name)}</div>
                <div class="product-details">
                  <span class="product-brand">${product.brand}</span>
                  <span class="product-category">${product.categoryName}</span>
                </div>
                <div class="product-price">
                  ${product.discount ? `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : ''}
                  <span class="current-price">$${product.price.toLocaleString()}</span>
                  ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                </div>
              </div>
              <div class="product-rating">
                <div class="stars">${this.renderStars(product.rating)}</div>
                <span class="rating-count">(${product.reviews})</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Ver todos los resultados
    if (this.state.query.length >= this.options.minQueryLength) {
      content += `
        <div class="suggestions-footer">
          <div class="suggestion-item suggestion-view-all" data-type="view-all" data-query="${this.state.query}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="suggestion-text">Ver todos los resultados para "<strong>${this.state.query}</strong>"</span>
            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
        </div>
      `;
    }

    this.suggestionsContent.innerHTML = content;
    this.bindSuggestionEvents();
    this.showSuggestions();
  }

  // Mostrar búsquedas recientes
  showRecentSearches() {
    if (!this.options.enableHistory || this.state.recentSearches.length === 0) {
      this.hideSuggestions();
      return;
    }

    const content = `
      <div class="suggestions-section">
        <div class="suggestions-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>Búsquedas recientes</span>
          <button class="clear-history-btn" title="Limpiar historial">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="X6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
        </div>
        ${this.state.recentSearches.map(search => `
          <div class="suggestion-item suggestion-history-item" data-type="history" data-value="${search}">
            <svg class="suggestion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="suggestion-text">${search}</span>
          </div>
        `).join('')}
      </div>
    `;

    this.suggestionsContent.innerHTML = content;
    this.bindSuggestionEvents();
    this.showSuggestions();
  }

  // Vincular eventos a sugerencias
  bindSuggestionEvents() {
    // Click en sugerencias
    this.suggestionsContent.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        this.selectSuggestion(item);
      });
    });

    // Botón limpiar historial
    const clearHistoryBtn = this.suggestionsContent.querySelector('.clear-history-btn');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearSearchHistory();
      });
    }
  }

  // Seleccionar sugerencia
  selectSuggestion(item) {
    const type = item.dataset.type;
    const value = item.dataset.value;
    const productId = item.dataset.id;
    const query = item.dataset.query;

    switch (type) {
      case 'text':
      case 'history':
        this.searchInput.value = value;
        this.state.query = value;
        this.executeSearch(value);
        break;

      case 'product':
        this.navigateToProduct(productId);
        break;

      case 'view-all':
        this.executeSearch(query || this.state.query);
        break;
    }

    this.hideSuggestions();
  }

  // Ejecutar búsqueda
  executeSearch(query) {
    if (!query || query.trim().length === 0) return;

    const trimmedQuery = query.trim();
    
    // Guardar en historial
    this.addToSearchHistory(trimmedQuery);
    
    // Navegar a página de resultados
    const searchUrl = `search.html?q=${encodeURIComponent(trimmedQuery)}`;
    window.location.href = searchUrl;
  }

  // Navegar a producto específico
  navigateToProduct(productId) {
    // Por ahora, ejecutar búsqueda del producto
    // En una implementación real, esto navegaría a la página del producto
    const product = this.state.suggestions.find(p => p.id === productId);
    if (product) {
      this.executeSearch(product.name);
    }
  }

  // Métodos de utilidad
  highlightQuery(text) {
    if (!this.state.query) return text;
    const regex = new RegExp(`(${this.escapeRegex(this.state.query)})`, 'gi');
    return text.replace(regex, '<mark class="highlight">$1</mark>');
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
  }

  // Manejo del estado
  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  // UI Controls
  updateClearButton() {
    if (this.clearButton) {
      this.clearButton.style.display = this.state.query.length > 0 ? 'flex' : 'none';
    }
  }

  showLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = 'flex';
    }
  }

  hideLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = 'none';
    }
  }

  showSuggestions() {
    if (this.suggestionsDropdown) {
      this.suggestionsDropdown.style.display = 'block';
      this.state.showSuggestions = true;
      this.state.selectedSuggestionIndex = -1;
    }
  }

  hideSuggestions() {
    if (this.suggestionsDropdown) {
      this.suggestionsDropdown.style.display = 'none';
      this.state.showSuggestions = false;
      this.state.selectedSuggestionIndex = -1;
    }
  }

  clearSearch() {
    this.searchInput.value = '';
    this.state.query = '';
    this.updateClearButton();
    this.hideSuggestions();
    this.searchInput.focus();
  }

  showErrorState() {
    this.suggestionsContent.innerHTML = `
      <div class="suggestions-error">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2"/>
        </svg>
        <h4>Error de conexión</h4>
        <p>No se pudieron cargar las sugerencias. Verifica tu conexión e intenta nuevamente.</p>
      </div>
    `;
    this.showSuggestions();
  }

  // Manejo del historial de búsquedas
  addToSearchHistory(query) {
    if (!this.options.enableHistory) return;

    // Remover si ya existe
    this.state.recentSearches = this.state.recentSearches.filter(item => item !== query);
    
    // Agregar al inicio
    this.state.recentSearches.unshift(query);
    
    // Limitar a 10 elementos
    if (this.state.recentSearches.length > 10) {
      this.state.recentSearches = this.state.recentSearches.slice(0, 10);
    }
    
    // Guardar en localStorage
    this.saveSearchHistory();
  }

  loadSearchHistory() {
    if (!this.options.enableHistory) return [];
    
    try {
      const history = localStorage.getItem('alkosto-search-history');
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error loading search history:', error);
      return [];
    }
  }

  saveSearchHistory() {
    if (!this.options.enableHistory) return;
    
    try {
      localStorage.setItem('alkosto-search-history', JSON.stringify(this.state.recentSearches));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }

  clearSearchHistory() {
    this.state.recentSearches = [];
    this.saveSearchHistory();
    this.hideSuggestions();
  }

  // Cargar datos iniciales
  async loadInitialData() {
    // Precargar categorías si es necesario
    if (this.options.enableCategories && window.ProductsAPI) {
      try {
        this.categories = await window.ProductsAPI.getCategories();
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    }
  }

  // API pública
  focus() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  setQuery(query) {
    if (this.searchInput) {
      this.searchInput.value = query;
      this.state.query = query;
      this.updateClearButton();
    }
  }

  getQuery() {
    return this.state.query;
  }

  destroy() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    if (this.searchContainer) {
      this.searchContainer.remove();
    }
  }
}

// Auto-inicialización si existe el contenedor
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('global-search-container');
  if (container) {
    window.globalSearch = new GlobalSearch();
  }
});

// Exportar para uso global
window.GlobalSearch = GlobalSearch;