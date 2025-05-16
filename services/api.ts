import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';


// Create an axios instance with default config
export const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
  },
});
