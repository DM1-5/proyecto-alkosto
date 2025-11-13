import httpService from './http-service.js';
import API_CONFIG from '../config/api-config.js';

class ProductService {
  transformProduct(apiProduct) {
    return {
      id: apiProduct.id,
      name: apiProduct.name,
      brand: apiProduct.brand_name,
      category: apiProduct.category_name,
      price: parseFloat(apiProduct.price),
      originalPrice: parseFloat(apiProduct.original_price),
      discount: apiProduct.discount_percentage,
      rating: parseFloat(apiProduct.rating),
      reviews: apiProduct.reviews_count,
      image: apiProduct.image,
      stock: apiProduct.stock,
      featured: apiProduct.is_featured,
      tags: apiProduct.tags || [],
      slug: apiProduct.slug,
      sku: apiProduct.sku
    };
  }

  async getAllProducts(page = 1, pageSize = 20) {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS, {
        page,
        page_size: pageSize
      });

      return {
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: response.results.map(p => this.transformProduct(p))
      };
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const product = await httpService.get(
        API_CONFIG.ENDPOINTS.PRODUCT_DETAIL(id)
      );
      
      return {
        ...this.transformProduct(product),
        description: product.description,
        specs: product.specifications || {},
        images: product.images || []
      };
    } catch (error) {
      console.error('Error al obtener producto:', error);
      throw error;
    }
  }

  async searchProducts(query) {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS_SEARCH, {
        q: query
      });

      return response.results.map(p => this.transformProduct(p));
    } catch (error) {
      console.error('Error en busqueda:', error);
      throw error;
    }
  }

  async getFeaturedProducts() {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS_FEATURED);
      return response.results.map(p => this.transformProduct(p));
    } catch (error) {
      console.error('Error al obtener destacados:', error);
      throw error;
    }
  }

  async getProductsByCategory(categoryId) {
    try {
      const response = await httpService.get(
        API_CONFIG.ENDPOINTS.CATEGORY_PRODUCTS(categoryId)
      );
      
      return response.results.map(p => this.transformProduct(p));
    } catch (error) {
      console.error('Error al filtrar por categoria:', error);
      throw error;
    }
  }

  async getProductsByCategorySlug(categorySlug) {
    try {
      const categories = await this.getCategories();
      const category = categories.find(c => c.slug === categorySlug);
      
      if (category) {
        return await this.getProductsByCategory(category.id);
      }
      
      return [];
    } catch (error) {
      console.error('Error al filtrar por slug de categoria:', error);
      throw error;
    }
  }

  async getProductsByBrand(brandId) {
    try {
      const response = await httpService.get(
        API_CONFIG.ENDPOINTS.BRAND_PRODUCTS(brandId)
      );
      
      return response.results.map(p => this.transformProduct(p));
    } catch (error) {
      console.error('Error al filtrar por marca:', error);
      throw error;
    }
  }

  async filterByPrice(minPrice, maxPrice) {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.PRODUCTS, {
        min_price: minPrice,
        max_price: maxPrice
      });

      return response.results.map(p => this.transformProduct(p));
    } catch (error) {
      console.error('Error al filtrar por precio:', error);
      throw error;
    }
  }

  async getCategories() {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.CATEGORIES);
      return response.results || response;
    } catch (error) {
      console.error('Error al obtener categorias:', error);
      throw error;
    }
  }

  async getBrands() {
    try {
      const response = await httpService.get(API_CONFIG.ENDPOINTS.BRANDS);
      return response.results || response;
    } catch (error) {
      console.error('Error al obtener marcas:', error);
      throw error;
    }
  }
}

export default new ProductService();
