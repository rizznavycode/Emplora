import React from "react";
import { AlertTriangleIcon } from "lucide-react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop Blur untuk Modal */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />
      
      {/* Kotak Modal */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 w-full max-w-sm relative z-10 animate-fade-in shadow-2xl shadow-black/50">
        <div className="flex flex-col items-center text-center">
          {/* Icon Peringatan */}
          <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center border border-rose-500/20 mb-5">
            <AlertTriangleIcon className="w-7 h-7 text-rose-500" />
          </div>
          
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            Konfirmasi Keluar
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8">
            Apakah Anda yakin ingin keluar dari sistem? Anda harus memasukkan kredensial kembali untuk mengakses portal.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row w-full gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-700/50"
            >
              Batal
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-lg shadow-rose-500/20"
            >
              Ya, Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;