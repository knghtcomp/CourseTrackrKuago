import React from 'react';

export const CompletedCoursesStatsSection = () => {
  return (
    <div className="w-full max-w-[425px] h-[176px] bg-white/60 rounded-3xl border border-black/30 p-6 flex flex-col justify-between relative shadow-sm">
      {/* Icon Placeholder (Top Right) */}
      <div className="absolute top-5 right-6">
        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
          <img src="/checkmark.svg" alt="" className="w-5 h-5" />
        </div>
      </div>

      <p className="text-black/80 text-sm font-medium font-['Inter'] uppercase tracking-wider">
        Completed Course
      </p>
      
      <h3 className="text-black text-5xl font-semibold font-['Inter']">
        9
      </h3>
      
      <p className="text-black/60 text-sm font-medium font-['Inter']">
        Out of 62 courses
      </p>
    </div>
  );
};