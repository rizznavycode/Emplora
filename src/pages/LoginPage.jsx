import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const portalOptions = [
    {
      to : "/login/admin",
      title : "Admin Portal",
      descriptions : "Access the admin panel to manage employees, view reports, and configure system settings.",
      icon : ShieldIcon
    },
    {
      to : "/login/employee",
      title : "Employee Portal",
      descriptions : "Access your employee dashboard to view your profile, timesheet, and other relevant information.",
      icon : UserIcon
    }
  ]

  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
      <LoginLeftSide />
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen'>
      <div className='w-full max-w-md animate-fade-in relative z-10'>
      {/* Header */}
      <div className='mb-10 text-center md:text-left'>
        <h2 className='text-3xl font-medium text-slate-900 tracking-tight mb-3'>Welcome Back!</h2>
        <p className='text-slate-500'>Select the portal you want to access.</p>
      </div>

      {/* Portals List */}
      <div className='space-y-4'>
        {portalOptions.map ((portal) =>(
          <Link key={portal.to} to={portal.to} className='group block bg-slate-50 border boder-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-50 '>
            <div className='relative z-10 flex items-center justify-between gap-4 sm:gap-5'>
              <h3 className='text-lg text-slate-800 group-hover:text-indigo-900 mb-1 transition-colors'>{portal.title}</h3>
              <ArrowRightIcon className='w-4 h-4 text-slate-400 group-hover:text-indigo-900 group-hover:transition-x-1 transition-all duration-300 ' />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className='mt-12 text-center md:text-left text-sm text-slate-500'>
        <p> © {new Date().getFullYear()} Core System Solutions.</p>
      </div>

      </div>
      </div>
    </div>
  )
}

export default LoginPage