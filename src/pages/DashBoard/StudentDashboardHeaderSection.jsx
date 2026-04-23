import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const StudentDashboardHeaderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active state based on the current URL path
  // If the path is /tracker, it's yellow. Otherwise, Dashboard is yellow.
  const isActive = location.pathname === '/tracker' ? 'tracker' : 'dashboard';

  return (
    <header className="w-full h-[90px] bg-[#003366] flex items-center relative shadow-lg z-50">
      <div className="w-full max-w-[1440px] mx-auto flex items-center px-4 lg:px-6 h-full">
        
        {/* GROUP 1: Branding + Left Nav */}
        <div className="flex flex-row items-center -ml-6 lg:-ml-8 gap-6 lg:gap-10">
          
          {/* Logo & Text */}
          <div className="flex flex-row items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-12 h-12 lg:w-14 lg:h-14 -mr-1 drop-shadow-lg" 
            />
            <div className="flex flex-col justify-center ml-2">
              <h1 className="text-[22px] lg:text-[26px] xl:text-[30px] font-bold text-white leading-none font-['Calistoga'] m-0 tracking-tight">
                COURSETRACKR
              </h1>
              <h2 className="text-[12px] lg:text-[14px] xl:text-[16px] text-[#FFCC00] font-['Calistoga'] m-0 mt-0.5 whitespace-nowrap">
                Academic Management Tool
              </h2>
            </div>
          </div>

          {/* Nav Buttons with Conditional Coloring */}
          <div className="flex items-center gap-3 lg:gap-4">
            
            {/* DASHBOARD BUTTON */}
            <button 
              onClick={() => navigate('/dashboard')}
              className={`flex items-center gap-2 px-4 h-9 rounded-lg transition-all shadow-md ${
                isActive === 'dashboard' 
                ? 'bg-[#FFCC00] text-black hover:brightness-110' 
                : 'bg-[#004080] text-white hover:bg-[#0050a0]'
              }`}
            >
              <img 
                src="/dashboard.svg" 
                alt="" 
                className={`w-5 h-5 shrink-0 ${isActive === 'dashboard' ? '' : 'brightness-0 invert'}`} 
              />
              <span className="text-[14px] lg:text-[15px] font-normal font-['Croissant_One'] whitespace-nowrap">
                DASHBOARD
              </span>
            </button>

            {/* TRACKER BUTTON */}
            <button 
              onClick={() => navigate('/tracker')}
              className={`flex items-center gap-2 px-4 h-9 rounded-lg transition-all shadow-md ${
                isActive === 'tracker' 
                ? 'bg-[#FFCC00] text-black hover:brightness-110' 
                : 'bg-[#004080] text-white hover:bg-[#0050a0]'
              }`}
            >
              <img 
                src="/trackr.svg" 
                alt="" 
                className={`w-5 h-5 shrink-0 ${isActive === 'tracker' ? '' : 'brightness-0 invert'}`} 
              />
              <span className="text-[14px] lg:text-[15px] font-normal font-['Croissant_One'] whitespace-nowrap">
                TRACKER
              </span>
            </button>
          </div>
        </div>

        {/* LOGOUT (Always Navy) */}
        <div className="ml-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 h-9 bg-[#004080] text-white rounded-lg hover:bg-red-900 transition-all group shadow-md"
          >
            <img src="/logout.svg" alt="" className="w-5 h-5 shrink-0 brightness-0 invert group-hover:brightness-200 transition-all" />
            <span className="group-hover:text-white text-[14px] lg:text-[15px] font-normal font-['Croissant_One'] whitespace-nowrap">
              Logout
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default StudentDashboardHeaderSection;