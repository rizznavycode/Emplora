import React from 'react'

const DashboardPage = () => {
  // Ambil data user dari localStorage
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-800">
          Selamat Datang kembali, <span className="text-indigo-600">{userData?.name || 'User'}</span>! 👋
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Berikut adalah ringkasan sistem Emplora hari ini.
        </p>
      </header>

      {/* Grid Statistik Sederhana */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <p className="text-slate-500 text-sm font-medium">Jabatan</p>
          <h3 className="text-xl font-bold text-slate-800 mt-1">{userData?.position || '-'}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <p className="text-slate-500 text-sm font-medium">Status Akun</p>
          <h3 className="text-xl font-bold text-green-600 mt-1">Aktif</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <p className="text-slate-500 text-sm font-medium">Email Terdaftar</p>
          <h3 className="text-lg font-bold text-slate-800 mt-1 truncate">{userData?.email}</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage