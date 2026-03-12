import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Info } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: 'admin@quickhire.com',
    password: 'admin123'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F8F8FD] flex flex-col">
      <div className="p-6 md:px-20">
        <Link to="/login" className="flex items-center gap-2 text-[#4540DB] font-bold hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to User Login
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 bg-white p-10 md:p-12 shadow-2xl rounded-3xl border border-gray-100">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#4540DB] text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <Lock size={32} />
              </div>
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-[#202430]">Admin Console</h1>
                <p className="text-[#515B6F] font-medium">Access QuickHire management tools</p>
            </div>
          </div>

          <div className="bg-[#4540DB]/5 border border-[#4540DB]/20 p-5 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-[#4540DB] font-black text-xs uppercase tracking-widest">
                <Info size={14} /> Mock Admin Credentials
            </div>
            <p className="text-[#515B6F] text-sm font-bold">
                Email: <span className="text-[#202430]">admin@quickhire.com</span><br/>
                Password: <span className="text-[#202430]">admin123</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Admin Email</label>
              <input
                required
                type="email"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold rounded-xl focus:border-[#4540DB] transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Admin Password</label>
              <input
                required
                type="password"
                className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold rounded-xl focus:border-[#4540DB] transition-all"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#202430] text-white py-5 font-black text-xl rounded-xl hover:bg-black transition-all shadow-xl shadow-gray-200"
            >
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
