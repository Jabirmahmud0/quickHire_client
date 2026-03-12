import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';
import JobCard from './JobCard';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        setJobs(res.data.slice(0, 8));
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202430]">
            Featured <span className="text-[#4540DB]">jobs</span>
          </h2>
          <a href="/jobs" className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
            Show all jobs <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array(8).fill(0).map((_, idx) => (
              <div key={idx} className="h-80 bg-gray-50 animate-pulse rounded-2xl"></div>
            ))
          ) : (
            jobs.map((job, idx) => (
              <JobCard
                key={job._id || idx}
                title={job.title}
                type={job.type}
                company={job.company}
                location={job.location}
                description={job.description}
                tags={job.tags}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
