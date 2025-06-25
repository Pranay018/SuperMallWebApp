import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getShops = async () => {
  const { data } = await axios.get(`${API}/shops`);
  return data;
};

export const createShop = async (shopData, token) => {
  const { data } = await axios.post(API_URL, shopData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateShop = async (id, shopData, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, shopData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteShop = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
