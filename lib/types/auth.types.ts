// src/lib/types/auth.types.ts
export enum UserRole {
  Admin = 'admin',
  Investor = 'investor',
  Founder = 'founder',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  verified: boolean;
  bio?: string;
  company?: string;
  website?: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}