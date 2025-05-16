
export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getLocalToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};

export const saveUser = (user: any): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getLocalUser = (): any | null => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const removeUser = (): void => {
  localStorage.removeItem('user');
};