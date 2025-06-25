import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getOffers = async () => {
  const { data } = await axios.get(`${API}/offers`);
  return data;
};


export const createOffer = async (offerData, token) => {
  const { data } = await axios.post(API_URL, offerData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateOffer = async (id, offerData, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, offerData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteOffer = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
