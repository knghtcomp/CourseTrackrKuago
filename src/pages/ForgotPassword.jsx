import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout'; // <-- Import the wrapper!

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the reset email
    console.log("Reset link sent to:", email);
    alert(`A password reset link has been sent to ${email}`);
    navigate('/'); // Send them back to login after success
  };

  return (
    <AuthLayout>
      
      {/* Back Button: perfectly positioned to match the Sign Up page */}
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

      {/* CLONED WIDTH: Locked to exactly 480px to match Login/Signup */}
      <div className="w-full max-w-[480px]">
        
        {/* Adjusted margins and text sizes to sync perfectly with the other pages */}
        <div className="mb-6">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#003366] leading-tight mb-1 font-['Calistoga'] tracking-tight">
            Forgot Password
          </h2>
          <p className="text-[#003366] font-bold text-base lg:text-lg font-['Calistoga']">
            Enter the email address of your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            {/* CLONED INPUT: Set to h-[48px] with base/lg text */}
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              spellCheck="false"
              autoComplete="email"
              placeholder="Email Address"
              className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-base lg:text-lg placeholder:text-gray-400 placeholder:font-['Calistoga']"
            />
          </div>

          {/* CLONED BUTTON: Set to h-[52px] */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#003366] text-white text-[18px] lg:text-[20px] font-bold rounded-full hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
          >
            Reset Password
          </button>
          
        </form>
        
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;