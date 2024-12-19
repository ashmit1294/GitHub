import axios from 'axios';
import API_PATHS  from '../constants/path';

const BASE_URL = `http://localhost:${process.env.PORT}${API_PATHS.BASE}`;

export const apiService = {
  // User Registration
  register: async (userData: {
    name: string, 
    email: string, 
    password: string
  }) => {
    try {
      const response = await axios.post(`${BASE_URL}${API_PATHS.AUTH.REGISTER}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // User Login
  login: async (credentials: {
    email: string, 
    password: string
  }) => {
    try {
      const response = await axios.post(`${BASE_URL}${API_PATHS.AUTH.LOGIN}`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Error Handling Interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
    console.error('API Error:', errorMessage);
    throw new Error(errorMessage);
  }
);
