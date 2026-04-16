import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { LayoutDashboard, Users, Clock, Settings, LogOut } from 'lucide-react'

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Sederhana */}
      <aside className="w-64 bg-indigo-900 text-white p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-10 tracking-wider">EMPLORA</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center gap-3 hover:text-indigo-300 transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/employees" className="flex items-center gap-3 hover:text-indigo-300 transition-colors">
            <Users size={20} /> Employees
          </Link>
          <Link to="/attendance" className="flex items-center gap-3 hover:text-indigo-300 transition-colors">
            <Clock size={20} /> Attendance
          </Link>
          <Link to="/settings" className="flex items-center gap-3 hover:text-indigo-300 transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {/* Di sinilah isi dari DashboardPage atau EmployeesPage akan muncul */}
        <Outlet /> 
      </main>
    </div>
  )
}

export default Layout