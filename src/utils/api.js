import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Fix CORS trailing slash issue
  withCredentials: false,
});

// Add interceptor to handle trailing slashes
api.interceptors.request.use(config => {
  // Ensure URL doesn't have double slashes
  config.url = config.url?.replace(/\/+/g, '/');
  return config;
});

export default api;
