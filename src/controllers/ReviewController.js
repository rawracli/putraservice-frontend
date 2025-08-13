import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // dari .env

// Untuk header authorization, misalnya pake token Bearer
// Sesuaikan cara kamu menyimpan token (localStorage/sessionStorage/cookies)
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // contoh
  return {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  };
};

const ReviewController = {
  // Show Review
  show: async () => {
    try {
      const response = await axios.get(`${API_URL}/show/review`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create review
  createReview: async ({ komentar, rating }) => {
    try {
      const response = await axios.post(
        `${API_URL}/create/review`,
        { komentar, rating },
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      // Bisa return error response agar bisa ditangani di UI
      throw error.response?.data || error;
    }
  },

  // Validasi review by ID
  validasiReview: async (id) => {
    try {
      const response = await axios.post(
        `${API_URL}/validasi/review/${id}`,
        {},
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Edit review by ID
  editReview: async (id, { komentar, rating }) => {
    try {
      const response = await axios.post(
        `${API_URL}/edit/review/${id}`,
        { komentar, rating },
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete review by ID
  deleteReview: async (id) => {
    try {
      const response = await axios.post(
        `${API_URL}/delete/review/${id}`,
        {},
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default ReviewController;
