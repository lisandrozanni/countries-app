import axios from 'axios';

const API_URL = 'http://localhost:3001';

export default async (req, res) => {
  const { q: query } = req.query;

  try {
    const response = await axios.get(`${API_URL}/countries/?q=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
};
