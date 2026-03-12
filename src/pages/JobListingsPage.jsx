import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Grid, List as ListIcon, ArrowRight } from 'lucide-react';
import JobCard from '../components/JobCard';

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
        <div className="bg-[#4540DB] p-8 md:p-12 text-white space-y-8 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-black">Find your dream job</h1>
            <div className="bg-white p-2 flex flex-col md:flex-row gap-2 rounded-2xl">
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
                        placeholder="Location"
                        className="w-full outline-none text-[#202430] placeholder-gray-400"
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                    />
                </div>
                <button
                  onClick={fetchJobs}
                  className="bg-[#4540DB] text-white font-bold py-4 px-10 hover:bg-opacity-90 rounded-xl"
                >
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
                 <div className="flex bg-gray-50 border border-gray-100 p-1 rounded-xl">
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
                    className="p-3 bg-white border border-gray-100 text-[#202430] font-bold outline-none rounded-xl"
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                 >
                    <option value="">All Categories</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                    <option value="Human Resource">Human Resource</option>
                 </select>
            </div>
        </div>

        <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {loading ? (
                Array(6).fill(0).map((_, i) => (
                    <div key={i} className="h-80 bg-gray-50 animate-pulse rounded-2xl"></div>
                ))
            ) : jobs.length > 0 ? (
                jobs.map(job => (
                    <JobCard
                      key={job._id}
                      id={job._id}
                      title={job.title}
                      type={job.type}
                      company={job.company}
                      location={job.location}
                      description={job.description}
                      tags={job.tags}
                    />
                ))
            ) : (
                <div className="col-span-full py-20 text-center space-y-4">
                     <p className="text-2xl font-bold text-[#202430]">No jobs found matching your criteria</p>
                     <button onClick={() => setFilters({search: '', location: '', category: ''})} className="text-[#4540DB] font-bold underline">Clear all filters</button>
                </div>
            )}
        </div>

        <div className="flex justify-center pt-8">
          <button className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
            Load more jobs <ArrowRight size={20} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobListingsPage;
