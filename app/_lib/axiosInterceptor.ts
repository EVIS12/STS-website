import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
});

export default axiosInterceptorInstance;
