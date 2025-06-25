import axios from 'axios';

const API_URL = '/api/shops';

export const getAllShops = async () => {
  const { data } = await axios.get(API_URL);
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
