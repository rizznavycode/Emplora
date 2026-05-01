import React from 'react';
import { ShieldCheckIcon, UserCircleIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const LoginPage = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Administrator",
      description: "Kelola sistem, data pegawai, dan laporan HR.",
      icon: ShieldCheckIcon
    },
    {
      to: "/login/employee",
      title: "Karyawan",
      description: "Akses presensi, slip gaji, dan pengajuan cuti.",
      icon: UserCircleIcon
    }
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-950 relative overflow-hidden'>
      {/* Latar Belakang Minimalis */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950"></div>

      <div className='w-full max-w-sm sm:max-w-md animate-fade-in relative z-10 flex flex-col'>
        
        {/* Brand Header */}
        <div className="mb-12 sm:mb-14 text-center">
          {/* <span className="text-zinc-100 text-xl sm:text-2xl tracking-[0.3em] sm:tracking-[0.4em] ml-3 sm:ml-4 uppercase font-bold">
            Emplora.
          </span> */}
        <Logo showText={true}/>
        </div>

        {/* Portals List */}
        <div className='space-y-8 w-full'>
          {portalOptions.map((portal) => (
            <Link 
              key={portal.to} 
              to={portal.to} 
              className='group block bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-zinc-800/40 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-black/20'
            >
              <div className='flex items-center justify-between gap-3 sm:gap-4'>
                <div className='flex items-center gap-3 sm:gap-5'>
                  
                  {/* Icon */}
                  <div className='p-2.5 sm:p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50 group-hover:border-zinc-600/50 transition-colors shrink-0'>
                    <portal.icon strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className='text-base sm:text-lg font-medium text-zinc-200 group-hover:text-white transition-colors mb-0.5 sm:mb-1'>
                      {portal.title}
                    </h3>
                    <p className='text-[11px] sm:text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2'>
                      {portal.description}
                    </p>
                  </div>

                </div>
                
                {/* Arrow */}
                <div className='shrink-0 pl-1 sm:pl-2'>
                  <ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300' />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default LoginPage;