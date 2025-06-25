import axios from 'axios';

const API_URL = '/api/offers';

export const getAllOffers = async () => {
  const { data } = await axios.get(API_URL);
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
