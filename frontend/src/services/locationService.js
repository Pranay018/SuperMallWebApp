import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getLocations = async () => {
  const { data } = await axios.get(`${API}/locations`);
  return data;
};


export const createLocation = async (locationData, token) => {
  const { data } = await axios.post(API_URL, locationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateLocation = async (id, locationData, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, locationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteLocation = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
