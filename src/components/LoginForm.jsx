import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  Loader2Icon,
  UserCircleIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/api";
import useAuthStore from "../store/authStore";
import Logo from "./Logo";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user || response.data;

      if (!user.role) {
        setError(
          "Gagal membaca role. Cek tab Console (F12) untuk melihat data aslinya!",
        );
        setLoading(false);
        return;
      }

      if (user.role.toUpperCase() !== role.toUpperCase()) {
        const roleAsli =
          user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase();
        setError(`Akses ditolak! Akun Anda terdaftar sebagai ${roleAsli}.`);
        setLoading(false);
        return;
      }
      login(user, token);

      const namaPanggilan = user.firstName || user.name || "Sayang";
      toast.success(`Selamat datang kembali, ${namaPanggilan}!`);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950"></div>

      <div className="w-full max-w-sm sm:max-w-md animate-fade-in relative z-10 flex flex-col">
        {/* Card Form */}
        <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-xs sm:text-sm transition-colors group"
            >
              <div className="p-1.5 rounded-full bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                <ArrowLeftIcon
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
              </div>
              <span className="font-medium">Kembali</span>
            </Link>

            {/* Indikator Role Kecil */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-[10px] sm:text-xs font-medium text-zinc-400 uppercase tracking-wider">
              {role === "ADMIN" ? (
                <ShieldCheckIcon size={12} />
              ) : (
                <UserCircleIcon size={12} />
              )}
              {role}
            </div>
          </div>

          <div className="mb-8">
            <Logo showText={true} />
            {/* <h1 className="text-xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
              {title}
            </h1> */}
            {/* <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              {title}
            </p> */}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              <p className="leading-relaxed">{error}</p>
            </div>
          )}

          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-zinc-400 mb-2">
                Alamat Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="user123@gmail.com"
                className="w-full p-3.5 sm:p-4 bg-zinc-950/50 border border-zinc-800/80 rounded-xl text-zinc-100 text-sm sm:text-base placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              />
            </div>

            <div>
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-zinc-400 mb-2">
                  Kata Sandi
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3.5 sm:p-4 pr-12 bg-zinc-950/50 border border-zinc-800/80 rounded-xl text-zinc-100 text-sm sm:text-base placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-4 top-[38px] sm:top-[42px] text-zinc-500 hover:text-zinc-300 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              // Mengganti tombol Indigo menjadi Putih (High Contrast)
              className="w-full py-3.5 sm:py-4 mt-2 sm:mt-4 bg-zinc-100 text-zinc-950 rounded-xl text-sm font-bold hover:bg-white disabled:opacity-50 transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
            >
              {loading ? (
                <Loader2Icon className="animate-spin h-5 w-5 text-zinc-950" />
              ) : (
                "Masuk ke Portal"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
