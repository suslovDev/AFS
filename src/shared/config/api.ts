import axios, { AxiosError } from 'axios';

export const BASE_URL = 'https://test-task-api.allfuneral.com';

axios.defaults.withCredentials = true;

export const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
    }

    return Promise.reject(error);
  }
);

export default api;
