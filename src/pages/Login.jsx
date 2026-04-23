import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';

export const LogInPageStudent = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-full max-w-[480px]">
        
        <div className="mb-6">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#003366] leading-tight mb-1 font-['Calistoga'] tracking-tight">
            Welcome Back, Kuago
          </h2>
          <p className="text-[#003366] font-bold text-base lg:text-lg font-['Calistoga']">Sign in to your account</p>
        </div>

        <div className="flex bg-[#E9EBEF] rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 lg:py-2.5 text-base lg:text-lg font-bold rounded-full transition-all ${
              activeTab === 'student' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-2 lg:py-2.5 text-base lg:text-lg font-bold rounded-full transition-all ${
              activeTab === 'admin' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
            }`}
          >
            Admin
          </button>
        </div>

        <form className="space-y-4">
          
          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">
              {activeTab === 'student' ? 'ID Number' : 'Admin Number'}
            </label>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] px-6 pr-12 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
              >
                <img src="/privacy.svg" alt="Toggle Password" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-[13px] lg:text-[14px] font-extrabold text-black font-['Calistoga'] tracking-wide">Remember me</span>
            </label>
            <button 
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-[13px] lg:text-[14px] font-extrabold text-[#003366] font-['Calistoga'] hover:underline tracking-wide bg-transparent border-none p-0 cursor-pointer"
            >
            Forgot Password?
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full h-[52px] bg-[#003366] text-white text-[18px] lg:text-[20px] font-bold rounded-full mt-2 hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
          >
            SIGN IN
          </button>

          <div className="flex items-center gap-4 my-4 lg:my-5 px-4">
            <div className="flex-1 border-t border-black/30"></div>
            <span className="text-[14px] lg:text-[16px] font-extrabold text-black font-['Calistoga'] tracking-wide">or</span>
            <div className="flex-1 border-t border-black/30"></div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/signup')} 
            className="w-full h-[52px] bg-[#003366] text-white text-[18px] lg:text-[20px] font-bold rounded-full hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
          >
            SIGN UP
          </button>
        </form>

        <div className="text-center mt-4 lg:mt-6">
          <p className="text-[11px] lg:text-[12px] text-black">
            Need help? Contact <a href="mailto:registrar@ustp.ph" className="text-[#003366] hover:underline font-bold">registrar@ustp.ph</a>
          </p>
        </div>
        
      </div>
    </AuthLayout>
  );
};

export default LogInPageStudent;