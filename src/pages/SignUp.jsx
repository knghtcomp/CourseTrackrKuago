import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthLayout } from '../components/AuthLayout'; 

export const SignUpStudent = () => {
  const [activeTab, setActiveTab] = useState("student");
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", idNumber: "",
    email: "", password: "", confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Account Created:", formData, "Role:", activeTab);
    navigate('/success'); 
  };

  return (
    <AuthLayout>
      
      {/* Back Button */}
      <button 
        type="button"
        onClick={() => navigate('/')} 
        className="absolute top-6 left-6 lg:top-12 lg:left-12 text-[#003366] hover:opacity-70 transition-opacity"
        aria-label="Back to Login"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      {/* CLONED WIDTH: Set exactly to 480px and removed the 'mt' so it aligns perfectly with Login */}
      <div className="w-full max-w-[480px]">
        
        <div className="mb-6">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#003366] leading-tight mb-1 font-['Calistoga'] tracking-tight">
            Welcome to CourseTrackr
          </h2>
          <p className="text-[#003366] font-bold text-base lg:text-lg font-['Calistoga']">Create your account</p>
        </div>

        <div className="flex bg-[#E9EBEF] rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 lg:py-2.5 text-base lg:text-lg font-bold rounded-full transition-all ${
              activeTab === 'student' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-2 lg:py-2.5 text-base lg:text-lg font-bold rounded-full transition-all ${
              activeTab === 'admin' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">First Name</label>
              {/* CLONED INPUT: Restored to h-[48px] to match Login rectangles exactly */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
              />
            </div>

            <div className="flex-1">
              <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">
              {activeTab === 'student' ? 'ID Number' : 'Admin Number'}
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg border border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                spellCheck="false"
                autoComplete="off"
                className="w-full h-[48px] px-6 pr-12 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
              >
                <img src="/privacy.svg" alt="Toggle" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-black font-extrabold mb-1 lg:mb-2 font-['Calistoga'] text-base lg:text-lg tracking-wide">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                spellCheck="false"
                autoComplete="off"
                className="w-full h-[48px] px-6 pr-12 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg"
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
              >
                <img src="/privacy.svg" alt="Toggle" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[52px] bg-[#003366] text-white text-[18px] lg:text-[20px] font-bold rounded-full mt-4 hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
          >
            SIGN UP
          </button>
        </form>
        
      </div>
    </AuthLayout>
  );
};

export default SignUpStudent;