import axios from 'axios';

const API_URL = '/api/products';

export const getAllProducts = async () => {
  const { data } = await axios.get(API_URL);
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
