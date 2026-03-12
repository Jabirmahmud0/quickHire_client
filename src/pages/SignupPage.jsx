import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // TODO: Implement actual registration
    console.log('Signup:', formData);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-6 md:px-20">
        <Link to="/" className="flex items-center gap-2 text-[#4540DB] font-bold hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[#4540DB] rounded-full"></div>
            </div>
            <h1 className="text-3xl font-black text-[#202430]">Create an account</h1>
            <p className="text-[#515B6F] font-medium">Start posting and applying for jobs</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#515B6F]">Full Name</label>
              <input
                required
                type="text"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-medium rounded-xl focus:border-[#4540DB] transition-colors"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

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
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#515B6F]">Confirm Password</label>
              <input
                required
                type="password"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-medium rounded-xl focus:border-[#4540DB] transition-colors"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="w-4 h-4 accent-[#4540DB] mt-1" />
              <span className="text-sm font-medium text-[#515B6F]">
                I agree to the <a href="#" className="text-[#4540DB] font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-[#4540DB] font-bold hover:underline">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4540DB] text-white py-4 font-black text-lg rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-[#4540DB]/20"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-[#515B6F] font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-[#4540DB] font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
