import React, { useState, useEffect } from "react";
import {
  UsersIcon,
  BuildingIcon,
  UserCheckIcon,
  CalendarClockIcon,
  TrendingUpIcon,
  ClockIcon,
  Loader2Icon,
} from "lucide-react";
import api from "../api/api";

const DashboardPage = () => {
  // STATE UNTUK MENYIMPAN DATA DARI BACKEND
  const [dashboardData, setDashboardData] = useState({
    totalEmployees: 0,
    presentToday: 0,
    pendingLeaves: 0,
    totalDepartments: 0,
  });
  const [loading, setLoading] = useState(true);

  // PANGGIL API SAAT HALAMAN DIBUKA
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [statsRes, deptsRes] = await Promise.all([
          api.get("/employees/stats"),
          api.get("/departments"),
        ]);

        if (statsRes.data.success && deptsRes.data.success) {
          setDashboardData({
            ...statsRes.data.data,
            totalDepartments: deptsRes.data.data.length, // Hitung jumlah array departemen
          });
        }
      } catch (error) {
        console.error("Gagal mengambil data dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // UPDATE STATS ARRAY DENGAN DATA ASLI
  const stats = [
    {
      title: "Total Karyawan",
      value: loading ? "..." : dashboardData.totalEmployees.toString(),
      description: "Pegawai aktif",
      trend: "Sinkron",
      icon: UsersIcon,
      trendUp: true,
    },
    {
      title: "Departemen",
      value: loading ? "..." : dashboardData.totalDepartments.toString(), // Gunakan data asli!
      description: "Divisi terdaftar",
      trend: "Tetap",
      icon: BuildingIcon,
      trendUp: true,
    },
    {
      title: "Presensi Hari Ini",
      value: loading ? "..." : dashboardData.presentToday.toString(),
      description: "Telah absen masuk",
      trend: "Real-time",
      icon: UserCheckIcon,
      trendUp: true,
    },
    {
      title: "Cuti Menunggu",
      value: loading ? "..." : dashboardData.pendingLeaves.toString(),
      description: "Perlu ditinjau",
      trend: dashboardData.pendingLeaves > 0 ? "Mendesak" : "Aman",
      icon: CalendarClockIcon,
      trendUp: dashboardData.pendingLeaves === 0,
    },
  ];

  const recentActivities = [
    {
      name: "Sarah Jenkins",
      action: "melakukan presensi masuk",
      time: "10 menit yang lalu",
    },
    {
      name: "David Chen",
      action: "mengajukan cuti tahunan",
      time: "1 jam yang lalu",
    },
    {
      name: "Departemen IT",
      action: "menambahkan pegawai baru",
      time: "3 jam yang lalu",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-zinc-500 mt-1.5">
            Ringkasan informasi sistem dan metrik manajemen HR hari ini.
          </p>
        </div>
        <div className="text-xs font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg w-fit">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-5 hover:bg-zinc-900/50 hover:border-zinc-700/60 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800/50 shadow-inner">
                <stat.icon
                  size={20}
                  className="text-zinc-300"
                  strokeWidth={1.5}
                />
              </div>
              <div
                className={`flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-md ${
                  stat.trendUp
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {stat.trendUp && <TrendingUpIcon size={12} />}
                <span>{stat.trend}</span>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-zinc-400">{stat.title}</p>
              <p className="text-xs text-zinc-600 mt-1">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Area Bawah: Grafik / Aktivitas (Contoh Layout Tambahan) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        <div className="lg:col-span-2 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center mb-4">
            <TrendingUpIcon
              className="text-zinc-600 w-8 h-8"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-zinc-300 font-medium mb-1">
            Statistik Kehadiran Bulanan
          </h3>
          <p className="text-xs text-zinc-600 max-w-xs">
            Area ini dapat digunakan untuk memasukkan komponen grafik (seperti
            Chart.js atau Recharts) nantinya.
          </p>
        </div>

        {/* Aktivitas Terkini */}
        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-6">
            Aktivitas Terkini
          </h3>
          <div className="space-y-5">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-indigo-500/10" />
                </div>
                <div>
                  <p className="text-sm text-zinc-300 leading-snug">
                    <span className="font-medium text-zinc-100">
                      {activity.name}
                    </span>{" "}
                    {activity.action}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-zinc-600">
                    <ClockIcon size={12} />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
