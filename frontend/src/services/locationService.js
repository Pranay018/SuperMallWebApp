import axios from 'axios';

const API_URL = '/api/locations';

export const getAllLocations = async () => {
  const { data } = await axios.get(API_URL);
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
