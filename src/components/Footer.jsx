import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-white pt-32 pb-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4540DB] rounded-full"></div>
              <span className="text-2xl font-bold tracking-tight">QuickHire</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold">About</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-xl font-bold">Get job notifications</h4>
            <p className="text-gray-400 text-lg">The latest job news, articles, sent to your inbox weekly.</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white p-4 text-[#202430] outline-none rounded-none"
              />
              <button className="bg-[#4540DB] text-white px-8 py-4 font-bold hover:bg-opacity-90 transition-all rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
          <p className="text-lg">2026 @ QuickHire. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#4540DB] hover:text-white transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#4540DB] hover:text-white transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#4540DB] hover:text-white transition-all"><Linkedin size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#4540DB] hover:text-white transition-all"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
