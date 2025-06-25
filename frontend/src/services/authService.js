import axios from 'axios';

const API_URL = '/api/auth';

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { email, password });
  if (data) localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const register = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);
  if (data) localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const getProfile = async (token) => {
  const { data } = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const logout = () => {
  localStorage.removeItem('userInfo');
};
