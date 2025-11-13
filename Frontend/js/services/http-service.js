import API_CONFIG from '../config/api-config.js';

class HttpService {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  saveToken(accessToken, refreshToken) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  clearTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
  }

  getHeaders(includeAuth = false) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = this.getToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  async get(endpoint, params = {}, requireAuth = false) {
    try {
      const url = new URL(this.baseURL + endpoint);
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          url.searchParams.append(key, params[key]);
        }
      });

      const response = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders(requireAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  }

  async post(endpoint, data = {}, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'POST',
        headers: this.getHeaders(requireAuth),
        body: JSON.stringify(data),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('POST Error:', error);
      throw error;
    }
  }

  async put(endpoint, data = {}, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'PUT',
        headers: this.getHeaders(requireAuth),
        body: JSON.stringify(data),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('PUT Error:', error);
      throw error;
    }
  }

  async delete(endpoint, requireAuth = false) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'DELETE',
        headers: this.getHeaders(requireAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error('DELETE Error:', error);
      throw error;
    }
  }

  async handleResponse(response) {
    if (!response.ok) {
      if (response.status === 401) {
        this.clearTokens();
        window.location.href = '/index.html';
        throw new Error('Sesion expirada');
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const error = await response.json();
        throw new Error(error.detail || error.message || 'Error en la peticion');
      }
      
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    if (response.status === 204) {
      return { success: true };
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return { success: true };
  }
}

export default new HttpService();
