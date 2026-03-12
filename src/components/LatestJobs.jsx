import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestJobItem = ({ logo, title, company, location, tags }) => (
  <div className="p-8 border border-gray-100 bg-white flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-lg transition-all rounded-none">
    <div className="flex items-center gap-8 flex-1 w-full">
      <div className="w-16 h-16 flex items-center justify-center p-3 bg-white border border-gray-50 flex-shrink-0">
        <img src={logo} alt={company} className="w-full h-full object-contain" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-[#202430] group-hover:text-[#4540DB] transition-colors">{title}</h3>
        <p className="text-[#515B6F] font-medium opacity-70 text-lg">
          {company} <span className="mx-2 opacity-30">•</span> {location}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
           <span className="px-5 py-1.5 text-sm font-bold bg-[#56CDAD]/10 text-[#56CDAD] border border-[#56CDAD]/20 rounded-full">Full-Time</span>
           {tags.map((tag, idx) => (
               <span key={idx} className={`px-5 py-1.5 text-sm font-bold border rounded-full ${idx % 2 === 0 ? 'bg-[#FFB836]/10 text-[#FFB836] border-[#FFB836]/20' : 'bg-[#4540DB]/10 text-[#4540DB] border-[#4540DB]/20'}`}>
                   {tag}
               </span>
           ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
        <button className="bg-[#4540DB] text-white px-10 py-4 font-black w-full md:w-auto hover:bg-opacity-90 transition-all rounded-none">
            Apply
        </button>
        <div className="w-full h-2 bg-gray-100 rounded-none overflow-hidden hidden md:block">
            <div className="w-2/3 h-full bg-[#56CDAD]"></div>
        </div>
        <p className="text-sm text-[#515B6F] font-medium hidden md:block">5 applied of 10 capacity</p>
    </div>
  </div>
);

const LatestJobs = () => {
  const jobs = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Nomad_Logo.svg',
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      tags: ['Marketing', 'Design']
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dropbox_Logo.png',
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, USA',
      tags: ['Design']
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Terraform_Logo.svg',
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      tags: ['Developer']
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Packer_Logo.svg',
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      tags: ['Marketing', 'Management']
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Nomad_Logo.svg',
      title: 'Social Media Assistant',
      company: 'Netlify',
      location: 'Paris, France',
      tags: ['Marketing']
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Nomad_Logo.svg',
        title: 'Brand Designer',
        company: 'Maze',
        location: 'San Fransisco, USA',
        tags: ['Marketing', 'Design']
    }
  ];

  return (
    <section className="py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202430]">
            Latest <span className="text-[#4540DB]">jobs open</span>
          </h2>
          <button className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <LatestJobItem key={idx} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
