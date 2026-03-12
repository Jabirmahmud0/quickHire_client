import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { SiNetlify, SiDropbox, SiTerraform, SiPacker, SiWebflow, SiUdacity } from 'react-icons/si';

// Map company names to their react-icon component with brand colors
const companyIcons = {
  'Nomad': () => <div className="text-2xl font-black text-[#56CDAD]">N</div>,
  'Netlify': () => <SiNetlify size={32} color="#00C7B7" />,
  'Dropbox': () => <SiDropbox size={32} color="#0061FF" />,
  'Maze': () => <div className="text-2xl font-black text-[#4540DB]">M</div>,
  'Terraform': () => <SiTerraform size={32} color="#844FBA" />,
  'Udacity': () => <SiUdacity size={32} color="#02B3E4" />,
  'Packer': () => <SiPacker size={32} color="#02A8EF" />,
  'Webflow': () => <SiWebflow size={32} color="#4353FF" />,
};

const LatestJobItem = ({ id, company, title, location, tags }) => {
  const Icon = companyIcons[company] || (() => <div className="text-2xl font-bold">{company[0]}</div>);
  
  return (
    <Link to={`/jobs/${id}`} className="p-8 border border-gray-100/60 bg-white flex items-start gap-6 group hover:shadow-xl transition-all rounded-sm cursor-pointer block">
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-gray-50 rounded-xl group-hover:bg-white transition-colors border border-gray-100">
        <Icon />
      </div>
      <div className="space-y-3">
        <h3 className="text-[22px] font-bold text-[#202430] leading-tight group-hover:text-[#4540DB] transition-colors">{title}</h3>
        <p className="text-[#515B6F] font-medium text-base">
          {company} <span className="mx-1 opacity-50">•</span> {location}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
           <span className="px-3 py-1 text-xs font-bold bg-[#56CDAD]/10 text-[#56CDAD] border border-[#56CDAD]/20 rounded-full">Full-Time</span>
           {tags.map((tag, idx) => {
              let colorClass = 'bg-[#4540DB]/10 text-[#4540DB] border-[#4540DB]/20';
              if (tag === 'Marketing') colorClass = 'bg-[#FFB836]/10 text-[#FFB836] border-[#FFB836]/20';
              else if (tag === 'Design') colorClass = 'bg-[#56CDAD]/10 text-[#56CDAD] border-[#56CDAD]/20';
              else if (tag === 'Developer') colorClass = 'bg-[#4540DB]/10 text-[#4540DB] border-[#4540DB]/20';
              else if (tag === 'Management') colorClass = 'bg-[#FFB836]/10 text-[#FFB836] border-[#FFB836]/20';

              let exactClass = colorClass;
              if (tag === 'Marketing') exactClass = 'bg-white text-[#FFB836] border-[#FFB836]';
              if (tag === 'Design') exactClass = 'bg-white text-[#4540DB] border-[#4540DB]';

              return (
                  <span key={idx} className={`px-3 py-1 text-xs font-bold border rounded-full ${exactClass}`}>
                      {tag}
                  </span>
              );
           })}
        </div>
      </div>
    </Link>
  );
};

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get('/jobs');
        // Get jobs 8 through 16 for variety from Featured Jobs
        setJobs(res.data.slice(8, 16));
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="py-24 px-4 md:px-20 bg-[#F8F8FD]">
      <div className="max-w-7xl mx-auto space-y-12 bg-pattern bg-cover relative z-10">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-[#202430]">
            Latest <span className="text-[#00B1A7]">jobs open</span>
          </h2>
          <button className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            Array(8).fill(0).map((_, idx) => (
              <div key={idx} className="h-40 bg-gray-50 animate-pulse rounded-sm border border-gray-100"></div>
            ))
          ) : (
            jobs.map((job, idx) => (
              <LatestJobItem 
                key={job._id || idx} 
                id={job._id}
                title={job.title}
                company={job.company}
                location={job.location}
                tags={job.tags}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
