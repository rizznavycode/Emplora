import React from "react";

const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 relative overflow-hidden bg-slate-900 border-r border-slate-800">
      
      {/* Subtle Accent Background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(120deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>


      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center p-12 lg:p-20 w-full h-full">
        
        {/* Small Label */}
        <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4">
          Emplora
        </span>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
          Employee <br /> Management System
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10">
          A reliable platform to manage employees, monitor performance, and
          streamline operations across your organization.
        </p>

      </div>
    </div>
  );
};

export default LoginLeftSide;