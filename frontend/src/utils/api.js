import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const submitHealthData = async (data) => {
  const response = await axios.post(`${API_URL}/health/`, data);
  return response.data;
};

export const predictHealthRisk = async (data) => {
  const response = await axios.post(`${API_URL}/predictions/`, data);
  return response.data;
};