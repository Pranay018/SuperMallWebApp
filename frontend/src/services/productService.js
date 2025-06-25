import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async () => {
  const { data } = await axios.get(`${API}/products`);
  return data;
};
export const createProduct = async (productData, token) => {
  const { data } = await axios.post(API_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateProduct = async (id, productData, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteProduct = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
