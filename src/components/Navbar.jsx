import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-20 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4540DB] rounded-full"></div>
          <span className="text-2xl font-bold text-[#202430] tracking-tight">QuickHire</span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/jobs" className="text-[#515B6F] font-medium hover:text-[#4540DB] transition-colors">Find Jobs</Link>
          <Link to="/companies" className="text-[#515B6F] font-medium hover:text-[#4540DB] transition-colors">Browse Companies</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-[#4540DB] font-bold px-6 py-3 hidden md:block hover:bg-gray-50 rounded-xl transition-all">Login</Link>
        <Link to="/signup" className="bg-[#4540DB] text-white font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-md">Sign Up</Link>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
