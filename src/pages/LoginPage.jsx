import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-6 md:px-20">
        <Link to="/" className="flex items-center gap-2 text-[#4540DB] font-bold hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 py-16">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[#4540DB] rounded-full"></div>
            </div>
            <h1 className="text-3xl font-black text-[#202430]">Welcome back</h1>
            <p className="text-[#515B6F] font-medium">Sign in to your QuickHire account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#515B6F]">Email Address</label>
              <input
                required
                type="email"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-medium rounded-xl focus:border-[#4540DB] transition-colors"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#515B6F]">Password</label>
              <input
                required
                type="password"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-medium rounded-xl focus:border-[#4540DB] transition-colors"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#4540DB]" />
                <span className="text-sm font-medium text-[#515B6F]">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-[#4540DB] hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4540DB] text-white py-4 font-black text-lg rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-[#4540DB]/20"
            >
              Sign In
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100">
             <Link 
                to="/admin/login" 
                className="w-full flex items-center justify-center gap-2 p-4 bg-gray-50 text-[#515B6F] font-bold rounded-xl hover:bg-gray-100 transition-all"
             >
                Login as Admin
             </Link>
          </div>

          <p className="text-center text-[#515B6F] font-medium">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#4540DB] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
