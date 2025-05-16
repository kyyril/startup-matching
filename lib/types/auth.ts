export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'investor' | 'founder';
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  bio?: string;
  company?: string;
  website?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}
