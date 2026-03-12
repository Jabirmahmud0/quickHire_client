import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-[#F8F8FD] pt-20 pb-12 px-4 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-[#202430] leading-tight font-serif">
            Discover <br /> more than <br /> 
            <span className="text-[#4540DB] relative">
              5000+ Jobs
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
                <path d="M5 15Q100 5 200 15T395 15" stroke="#4540DB" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-[#515B6F] text-lg max-w-lg leading-relaxed">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>
          
          <div className="bg-white p-4 shadow-xl flex flex-col md:flex-row gap-4 max-w-2xl border border-gray-100 rounded-xl md:rounded-full">
            <div className="flex items-center flex-1 gap-3 px-2 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0">
              <Search className="text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                className="w-full outline-none text-[#202430] placeholder-gray-400"
              />
            </div>
            <div className="flex items-center flex-1 gap-3 px-2">
              <MapPin className="text-gray-400" size={20} />
              <select className="w-full outline-none text-[#202430] bg-transparent appearance-none">
                <option>Florence, Italy</option>
                <option>New York, USA</option>
                <option>London, UK</option>
              </select>
            </div>
            <button className="bg-[#4540DB] text-white font-bold py-4 px-10 hover:bg-opacity-90 transition-all rounded-lg md:rounded-full whitespace-nowrap">
              Search my job
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-400">Popular :</span>
            <span className="text-[#202430] font-semibold underline underline-offset-4 decoration-gray-200">UI Designer</span>
            <span className="text-[#202430] font-semibold underline underline-offset-4 decoration-gray-200">UX Researcher</span>
            <span className="text-[#202430] font-semibold underline underline-offset-4 decoration-gray-200">Android</span>
            <span className="text-[#202430] font-semibold underline underline-offset-4 decoration-gray-200">Admin</span>
          </div>
        </div>
        
        <div className="flex-1 w-full flex justify-center h-full">
           <div className="relative">
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative mt-10 md:mt-0">
                <div className="absolute top-0 right-0 w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-tl-[100px] rounded-br-[100px] rounded-tr-xl rounded-bl-xl shadow-2xl z-10 border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800" alt="Job Seeker" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#4540DB] to-indigo-400 rounded-full z-0 opacity-10"></div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gray-100 rounded-full z-0 opacity-80"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
