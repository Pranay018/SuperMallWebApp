import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const login = async (email, password) => {
  const { data } = await axios.post(`${API}/auth/login`, { email, password });
  if (data) localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const register = async (userData) => {
  const { data } = await axios.post(`${API}/auth/register`, userData);
  if (data) localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const getProfile = async (token) => {
  const { data } = await axios.get(`${API}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const logout = () => {
  localStorage.removeItem('userInfo');
};
