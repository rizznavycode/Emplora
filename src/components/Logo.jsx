import React from "react";

export const EmploraIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H18"
      className="stroke-zinc-100"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M5 12H13"
      className="stroke-zinc-600"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle 
      cx="17" 
      cy="12" 
      r="2" 
      className="fill-zinc-300" 
    />
  </svg>
);

const Logo = ({ showText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center p-1.5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-xl shadow-lg shadow-black/20">
        <EmploraIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-bold text-lg sm:text-xl text-zinc-100 tracking-[0.2em] uppercase leading-none mt-1">
            Emplora.
          </span>
          <span className="text-[8px] sm:text-[9px] text-zinc-400 font-medium uppercase tracking-[0.3em] mt-1.5 leading-none">
            Employee Management System
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;