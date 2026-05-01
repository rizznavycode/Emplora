import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    // Wrapper utama dengan background gelap murni dan teks terang
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white relative font-sans">
      
      {/* Efek Latar Belakang (Senada dengan Login & Form) */}
      {/* Menggunakan 'fixed' agar gradien tetap diam saat konten di-scroll */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950 z-0"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      {/* z-10 agar konten tampil di atas background gradient */}
      <main className="flex-1 relative z-10 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Container untuk Outlet (Halaman-halaman) */}
        {/* pt-24 di mobile memberi ruang agar konten tidak tertutup tombol Hamburger Menu */}
        {/* lg:pt-8 di desktop akan mengembalikan padding atas menjadi normal */}
        <div className="flex-1 w-full p-5 pt-24 lg:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default Layout;