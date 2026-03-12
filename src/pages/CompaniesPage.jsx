import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Briefcase } from 'lucide-react';

const CompaniesPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get('/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Group jobs by company
  const companiesMap = jobs.reduce((acc, job) => {
    if (!acc[job.company]) {
      acc[job.company] = {
        name: job.company,
        logo: job.companyLogo,
        jobs: [],
        locations: new Set()
      };
    }
    acc[job.company].jobs.push(job);
    acc[job.company].locations.add(job.location);
    return acc;
  }, {});

  const companies = Object.values(companiesMap);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto py-16 px-4 md:px-20 space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#202430]">
            Browse <span className="text-[#4540DB]">Companies</span>
          </h1>
          <p className="text-[#515B6F] text-lg max-w-2xl mx-auto">
            Explore top companies hiring now. Find your dream workplace and discover open positions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-100 shadow-lg flex items-center gap-4 p-4 rounded-2xl">
            <Search className="text-gray-400 ml-4" size={20} />
            <input
              type="text"
              placeholder="Search companies..."
              className="flex-1 outline-none text-[#202430] placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-64 bg-gray-50 animate-pulse rounded-3xl border border-gray-100"></div>
            ))
          ) : filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="w-20 h-20 border border-gray-100 bg-gray-50 rounded-2xl flex items-center justify-center p-4 group-hover:border-[#4540DB]/30 transition-all">
                    <img
                      src={company.logo || `https://logo.clearbit.com/${company.name.toLowerCase()}.com`}
                      alt={company.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="text-2xl font-black text-[#4540DB]">${company.name[0]}</div>`;
                      }}
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-[#202430] group-hover:text-[#4540DB] transition-colors">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#515B6F] text-sm font-medium">
                      <Briefcase size={16} />
                      <span>{company.jobs.length} open {company.jobs.length === 1 ? 'position' : 'positions'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#515B6F] text-sm font-medium">
                      <MapPin size={16} />
                      <span>{Array.from(company.locations).slice(0, 2).join(', ')}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {company.jobs.slice(0, 3).map((job, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-bold bg-[#4540DB]/5 text-[#4540DB] border border-[#4540DB]/20 rounded-full"
                        >
                          {job.title}
                        </span>
                      ))}
                      {company.jobs.length > 3 && (
                        <span className="px-3 py-1 text-xs font-bold bg-gray-100 text-gray-600 rounded-full">
                          +{company.jobs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <p className="text-2xl font-bold text-[#202430]">No companies found</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-[#4540DB] font-bold underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompaniesPage;
