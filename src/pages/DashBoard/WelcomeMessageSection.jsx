import React from 'react';

export const WelcomeMessageSection = () => {
  // Get current date to make the dashboard feel "live"
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="w-full flex flex-col gap-1">
      {/* GREETING LINE */}
      <div className="flex items-center gap-3">
        <h2 className="text-[#003366] text-[32px] lg:text-[40px] font-bold font-['Calistoga'] leading-tight">
          Student Dashboard
        </h2>
        {/* Small decorative wave emoji or icon if you like */}
        <span className="text-3xl animate-bounce">👋</span>
      </div>

      {/* DATE & SUBTEXT */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
        <p className="text-gray-600 text-[16px] lg:text-[18px] font-medium font-sans">
          {formattedDate}
        </p>
        <span className="hidden lg:block text-gray-300">|</span>
        <p className="text-[#003366]/70 text-[16px] lg:text-[18px] italic font-['Calistoga']">
          Ready to track your academic journey at USTP?
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessageSection;