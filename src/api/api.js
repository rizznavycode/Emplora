import axios from 'axios';
import useAuthStore from '../store/authStore';

// 1. Buat instance Axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ganti nanti kalau sudah deploy
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Interceptor Request (Satpam Pintu Keluar)
// Sebelum request dikirim, satpam ini akan mengecek apakah ada token di brankas (Zustand)
api.interceptors.request.use(
  (config) => {
    // Ambil token langsung dari state Zustand (lebih fresh daripada localStorage)
    const token = useAuthStore.getState().token;
    
    if (token) {
      // Jika ada, pasang token di header Authorization
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptor Response (Satpam Pintu Masuk - Opsional tapi direkomendasikan)
// Kalau token expired (misal backend membalas 401 Unauthorized), otomatis paksa logout
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Token expired atau tidak valid. Memaksa logout...");
      useAuthStore.getState().logout(); // Hapus data dari brankas
      window.location.href = '/login'; // Tendang balik ke halaman login
    }
    return Promise.reject(error);
  }
);

export default api;