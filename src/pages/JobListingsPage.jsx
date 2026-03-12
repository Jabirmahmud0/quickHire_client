import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Grid, List as ListIcon } from 'lucide-react';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    category: ''
  });

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { search, location, category } = filters;
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (location) params.append('location', location);
      if (category) params.append('category', category);
      
      const res = await axios.get(`http://localhost:5000/api/jobs?${params.toString()}`);
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-16 px-4 md:px-20 space-y-12">
        <div className="bg-[#4540DB] p-8 md:p-12 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl font-black">Find your dream job</h1>
            <div className="bg-white p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                    <Search className="text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Job title or keyword" 
                        className="w-full outline-none text-[#202430] placeholder-gray-400"
                        onChange={(e) => setFilters({...filters, search: e.target.value})}
                    />
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 py-3">
                    <MapPin className="text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Florence, Italy" 
                        className="w-full outline-none text-[#202430] placeholder-gray-400"
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                    />
                </div>
                <button className="bg-[#4540DB] text-white font-bold py-4 px-10 hover:bg-opacity-90">
                    Search
                </button>
            </div>
            <p className="text-white/70">Popular: UI Designer, UX Researcher, Android, Admin</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-100 pb-8">
            <div>
                <h2 className="text-3xl font-black text-[#202430]">All Jobs</h2>
                <p className="text-[#515B6F] font-medium opacity-70">Showing {jobs.length} results</p>
            </div>
            <div className="flex items-center gap-6">
                 <div className="flex bg-gray-50 border border-gray-100 p-1">
                     <button 
                        onClick={() => setView('grid')}
                        className={`p-2 transition-all ${view === 'grid' ? 'bg-white shadow-sm text-[#4540DB]' : 'text-gray-400'}`}
                     >
                        <Grid size={20} />
                     </button>
                     <button 
                        onClick={() => setView('list')}
                        className={`p-2 transition-all ${view === 'list' ? 'bg-white shadow-sm text-[#4540DB]' : 'text-gray-400'}`}
                     >
                        <ListIcon size={20} />
                     </button>
                 </div>
                 <select 
                    className="p-3 bg-white border border-gray-100 text-[#202430] font-bold outline-none"
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                 >
                    <option value="">Sort by: Newest</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                 </select>
            </div>
        </div>

        <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {loading ? (
                Array(6).fill(0).map((_, i) => (
                    <div key={i} className="h-64 bg-gray-50 animate-pulse border border-gray-100"></div>
                ))
            ) : jobs.length > 0 ? (
                jobs.map(job => (
                    <div key={job._id} className={`p-8 border border-gray-100 hover:shadow-xl transition-all flex h-full group ${view === 'list' ? 'flex-row items-center gap-8' : 'flex-col'}`}>
                        <div className="w-16 h-16 flex items-center justify-center p-3 border border-gray-50 shadow-sm bg-white shrink-0 mb-6 group-hover:border-[#4540DB]/30 transition-all">
                             <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                        <div className="flex-1 space-y-3">
                             <h3 className="text-2xl font-black text-[#202430] group-hover:text-[#4540DB] transition-all">{job.title}</h3>
                             <p className="text-[#515B6F] font-medium opacity-70">
                                {job.company} <span className="mx-2">•</span> {job.location}
                             </p>
                             <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-5 py-1 text-sm font-bold bg-[#4540DB]/5 text-[#4540DB] border border-[#4540DB]/20 rounded-full">{job.type}</span>
                                {job.tags?.map((tag, idx) => (
                                    <span key={idx} className="px-5 py-1 text-sm font-bold bg-[#56CDAD]/5 text-[#56CDAD] border border-[#56CDAD]/20 rounded-full">{tag}</span>
                                ))}
                             </div>
                        </div>
                        <button className={`bg-[#4540DB] text-white px-8 py-4 font-black transition-all ${view === 'list' ? 'block' : 'mt-8 w-full'}`}>
                            Apply
                        </button>
                    </div>
                ))
            ) : (
                <div className="col-span-full py-20 text-center space-y-4">
                     <p className="text-2xl font-bold text-[#202430]">No jobs found matching your criteria</p>
                     <button onClick={() => setFilters({search: '', location: '', category: ''})} className="text-[#4540DB] font-bold underline">Clear all filters</button>
                </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobListingsPage;
