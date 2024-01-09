import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from './baseUrl';

// Get the token from localStorage or set it to null if not found
const token: string | null = localStorage.getItem('token');

// Create a base configuration object with the base URL
const baseConfig: AxiosRequestConfig = {
  baseURL: baseUrl,
};

// Create an Axios instance with the base configuration
const axiosInstance = axios.create(baseConfig);

// Check if a token exists and set the Authorization header
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Add a response interceptor for error handling and logging
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data, if needed
    return response;
  },
  (error) => {
    // Handle response errors, log them, and reject the promise
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

// Export the configured Axios instance
export { axiosInstance };
