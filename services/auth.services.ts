
import { AuthResponse, LoginInput, RegisterInput } from '@/lib/types/auth.types';
import axiosClient from './axiosClient';

const authService = {
  register: async (data: RegisterInput): Promise<AuthResponse> => {
    const response = await axiosClient.post('/api/auth/register', data);
    return response.data;
  },
  
  login: async (data: LoginInput): Promise<AuthResponse> => {
    const response = await axiosClient.post('/api/auth/login', data);
    return response.data;
  },
  
  logout: async (): Promise<{ message: string }> => {
    const response = await axiosClient.post('/api/auth/logout');
    return response.data;
  },
  
  getProfile: async (): Promise<{ user: any }> => {
    const response = await axiosClient.get('/api/auth/profile');
    return response.data;
  },
};

export default authService;