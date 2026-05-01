import {
  BanknoteIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  MenuIcon,
  CalendarCheckIcon,
  CalendarOffIcon,
  LogOutIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import useAuthStore from "../store/authStore"; 
import LogoutModal from "./LogoutModal"; 

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { user, logout } = useAuthStore();
  const role = user?.role || "EMPLOYEE";

  useEffect(() => {
    if (user) {
      const nama = user.firstName
        ? `${user.firstName} ${user.lastName || ""}`.trim()
        : user.email?.split("@")[0];

      const formattedName = nama
        ? nama.charAt(0).toUpperCase() + nama.slice(1)
        : "";

      setUserName(formattedName || "User Emplora");
    }
  }, [user]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    if (mobileOpen) setMobileOpen(false);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
    ...(role === "ADMIN" ? [{ name: "Karyawan", href: "/employees", icon: UsersIcon }] : []),
    { name: "Presensi", href: "/attendance", icon: CalendarCheckIcon },
    { name: "Cuti", href: "/leave", icon: CalendarOffIcon },
    { name: "Slip Gaji", href: "/payslips", icon: BanknoteIcon },
    { name: "Pengaturan", href: "/settings", icon: SettingsIcon },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 pt-6 pb-5 border-b border-zinc-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-lg">
              <UserIcon className="text-zinc-100 size-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-zinc-100 tracking-tight">Emplora .</p>
              <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest"> Management System </p>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} className="lg:hidden text-zinc-500 hover:text-zinc-300 transition-colors p-1">
            <XIcon size={20} />
          </button>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="mx-4 mt-5 mb-2 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700 shrink-0">
            <span className="text-zinc-300 text-xs font-bold uppercase">
              {username ? username.charAt(0) : "U"}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-zinc-200 truncate">{username || "Memuat..."}</p>
            <p className="text-[11px] text-zinc-500 truncate">{role === "ADMIN" ? "Administrator" : "Karyawan"}</p>
          </div>
        </div>
      </div>

      {/* Section Label */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Navigasi Utama</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive ? "bg-zinc-800/80 text-zinc-100 font-medium border border-zinc-700/50 shadow-sm" : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200 border border-transparent"
              }`}
            >
              <item.icon strokeWidth={isActive ? 2 : 1.5} size={18} className={isActive ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300 transition-colors"} />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Trigger Button */}
      <div className="p-4 border-t border-zinc-800/50 mt-auto">
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-zinc-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200 group border border-transparent hover:border-rose-500/20"
        >
          <LogOutIcon size={18} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
          <span className="text-sm font-medium">Keluar Sistem</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-zinc-900 text-zinc-100 rounded-lg shadow-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"
      >
        <MenuIcon size={20} />
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" onClick={() => setMobileOpen(false)} />
      )}

      <aside className="hidden lg:flex flex-col h-screen sticky top-0 w-[260px] bg-zinc-950 text-zinc-400 shrink-0 border-r border-zinc-800/60 z-30">
        {sidebarContent}
      </aside>

      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-zinc-950 text-zinc-400 z-50 flex flex-col transform transition-transform duration-300 ease-in-out border-r border-zinc-800 ${
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* MODAL */}
      <LogoutModal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
        onConfirm={confirmLogout} 
      />
    </>
  );
};

export default Sidebar;