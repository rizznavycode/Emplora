import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // Cek apakah ada data di localStorage saat pertama kali load
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,

  // Fungsi untuk menyimpan data saat login sukses
  login: (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    set({ user, token });
  },

  // Fungsi untuk menghapus data saat logout
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));

export default useAuthStore;