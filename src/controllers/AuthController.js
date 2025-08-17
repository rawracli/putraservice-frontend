import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/auth";

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const updateProfile = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${API_URL}/update-profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const updatePassword = async (payload) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/user/password`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch {
    return { success: false, message: "Gagal terhubung ke server" };
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/register`, data);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/login`, data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem("token");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const loginWithGoogle = () => {
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
};

export const resendVerification = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token tidak ditemukan, silakan login dulu.");

    const res = await axios.post(`${API_URL}/email/resend`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    return res.data;
  } catch (err) {
    console.error("Gagal kirim ulang verifikasi:", err.response?.data || err.message);
    throw err.response?.data || { message: err.message };
  }
};

// Kirim email reset password
export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(`${API_URL}/forgot-password`, { email });
    return res.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

// Reset password baru
export const resetPassword = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/reset-password`, payload);
    return res.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};