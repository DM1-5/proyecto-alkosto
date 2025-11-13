import apiAdapter from './services/api-adapter.js';
import CATEGORY_MAPPING from './config/category-mapping.js';
import productFilters from './components/product-filters.js';

class UniversalCategoryLoader {
  constructor() {
    this.currentCategory = null;
    this.isLoading = false;
    this.todosLosProductos = [];
  }

  detectCategory() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '').replace('index-', '');
    
    for (const [key, config] of Object.entries(CATEGORY_MAPPING)) {
      if (filename.includes(key)) {
        return config;
      }
    }
    
    return null;
  }

  async inicializar() {
    if (this.isLoading) return;
    this.isLoading = true;

    const categoryConfig = this.detectCategory();
    if (!categoryConfig) {
      console.log('No se detecto una categoria valida para cargar desde la API');
      this.isLoading = false;
      return;
    }

    const gridElement = document.getElementById('products-grid');
    if (gridElement) {
      gridElement.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
            <span class="sr-only">Cargando...</span>
          </div>
          <p class="mt-3 text-muted">Cargando productos desde el servidor...</p>
        </div>
      `;
    }

    try {
      const productosAPI = await apiAdapter.cargarProductosDeAPI(categoryConfig.slug);
      
      if (productosAPI.length === 0) {
        console.warn(`No se encontraron productos para la categoria: ${categoryConfig.slug}`);
        
        if (gridElement) {
          gridElement.innerHTML = `
            <div class="col-12">
              <div class="alert alert-info text-center">
                <h4>No hay productos disponibles</h4>
                <p>Esta categoria aun no tiene productos cargados</p>
              </div>
            </div>
          `;
        }
        this.isLoading = false;
        return;
      }

      // Guardar todos los productos
      this.todosLosProductos = productosAPI;

      const globalArrayName = categoryConfig.arrayName || `${categoryConfig.slug}Productos`;
      
      if (window[globalArrayName]) {
        window[globalArrayName].length = 0;
        window[globalArrayName].push(...productosAPI);
        console.log(`${productosAPI.length} productos cargados en window.${globalArrayName}`);
      }

      if (window.productosFiltrados) {
        window.productosFiltrados.length = 0;
        window.productosFiltrados.push(...productosAPI);
      }

      // Inicializar filtros si existe el contenedor
      const filtersContainer = document.querySelector('#filters-container');
      if (filtersContainer) {
        productFilters.inicializar(productosAPI, '#filters-container');
        
        // Callback cuando cambien los filtros
        productFilters.onFilterChange = (productosFiltrados) => {
          console.log(`Filtrados: ${productosFiltrados.length} productos`);
          
          // Actualizar array global
          if (window.productosFiltrados) {
            window.productosFiltrados.length = 0;
            window.productosFiltrados.push(...productosFiltrados);
          }
          
          // Re-renderizar productos
          if (typeof window.renderizarProductos === 'function') {
            window.renderizarProductos();
          }
        };
      }

      if (typeof window.renderizarProductos === 'function') {
        window.renderizarProductos();
      }

      if (typeof window.actualizarContadores === 'function') {
        window.actualizarContadores();
      }

      if (gridElement && gridElement.querySelector('.spinner-border')) {
        gridElement.innerHTML = '';
      }

      console.log(`Categoria "${categoryConfig.slug}" inicializada correctamente con ${productosAPI.length} productos`);
      
    } catch (error) {
      console.error('Error al cargar productos:', error);
      
      if (gridElement) {
        gridElement.innerHTML = `
          <div class="col-12">
            <div class="alert alert-danger text-center">
              <h4>Error al cargar productos</h4>
              <p>No se pudo conectar con el servidor. Por favor, recarga la pagina.</p>
              <button class="btn btn-primary mt-2" onclick="window.location.reload()">Recargar</button>
            </div>
          </div>
        `;
      }
    } finally {
      this.isLoading = false;
    }
  }

  async agregarAlCarrito(productoId) {
    return await apiAdapter.agregarAlCarrito(productoId);
  }
}

const universalLoader = new UniversalCategoryLoader();

window.universalLoader = universalLoader;
window.agregarAlCarritoAPI = (id) => universalLoader.agregarAlCarrito(id);

export default universalLoader;
