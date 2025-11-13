import httpService from './http-service.js';
import API_CONFIG from '../config/api-config.js';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.checkAuthStatus();
  }

  isAuthenticated() {
    return !!httpService.getToken();
  }

  checkAuthStatus() {
    if (this.isAuthenticated()) {
      const userData = localStorage.getItem('user_data');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
  }

  async register(userData) {
    try {
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.REGISTER,
        userData
      );

      if (response.access && response.refresh) {
        httpService.saveToken(response.access, response.refresh);
        this.currentUser = response.user;
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  async login(username, password) {
    try {
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.LOGIN,
        { username, password }
      );

      if (response.access && response.refresh) {
        httpService.saveToken(response.access, response.refresh);
        this.currentUser = response.user;
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  logout() {
    httpService.clearTokens();
    this.currentUser = null;
    window.location.href = '/index.html';
  }

  async loadUserProfile() {
    try {
      const profile = await httpService.get(
        API_CONFIG.ENDPOINTS.PROFILE,
        {},
        true
      );

      this.currentUser = profile;
      localStorage.setItem('user_data', JSON.stringify(profile));
      return profile;
    } catch (error) {
      console.error('Error al cargar perfil:', error);
      this.logout();
      throw error;
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      
      const response = await httpService.post(
        API_CONFIG.ENDPOINTS.REFRESH,
        { refresh: refreshToken }
      );

      localStorage.setItem('access_token', response.access);
      
      return response;
    } catch (error) {
      console.error('Error al renovar token:', error);
      this.logout();
      throw error;
    }
  }
}

export default new AuthService();
