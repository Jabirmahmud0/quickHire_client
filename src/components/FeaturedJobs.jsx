import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiRevolut, SiDropbox, SiCanva, SiGodaddy } from 'react-icons/si';

// Map company names to their react-icon component with brand colors
const companyIcons = {
  'Revolut': () => <SiRevolut size={32} color="#000000" />,
  'Dropbox': () => <SiDropbox size={32} color="#0061FF" />,
  'Pitch': () => <div className="text-2xl font-black text-[#4540DB]">P</div>,
  'Blinklist': () => <div className="text-2xl font-black text-[#56CDAD]">B</div>,
  'ClassPass': () => <div className="text-2xl font-black text-[#00B1A7]">C</div>,
  'Canva': () => <SiCanva size={32} color="#00C4CC" />,
  'GoDaddy': () => <SiGodaddy size={32} color="#1BDBDB" />,
  'Twitter': () => <div className="text-2xl font-black text-[#1DA1F2]">X</div>,
};

const JobCard = ({ title, type, company, location, description, tags }) => {
  const Icon = companyIcons[company] || (() => <div className="text-2xl font-bold">{company[0]}</div>);
  
  return (
    <div className="p-8 border border-gray-100 bg-white hover:shadow-2xl transition-all group flex flex-col h-full rounded-2xl cursor-pointer">
      <div className="flex justify-between items-start mb-8 w-full">
        <div className="w-16 h-16 flex items-center justify-center p-3 border border-gray-50 shadow-sm bg-gray-50 group-hover:bg-white transition-colors overflow-hidden rounded-xl">
          <Icon />
        </div>
        <span className="text-[#56CDAD] border border-[#56CDAD]/20 px-5 py-2 text-sm font-bold rounded-full bg-[#56CDAD]/10">{type}</span>
      </div>
      
      <div className="space-y-4 flex-grow">
        <h3 className="text-2xl font-black text-[#202430] group-hover:text-[#4540DB] transition-colors">{title}</h3>
        <div className="flex items-center gap-2 text-[#515B6F] text-lg font-medium opacity-70">
          <span>{company}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span>{location}</span>
        </div>
        <p className="text-[#515B6F] text-lg leading-relaxed line-clamp-2">{description}</p>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map((tag, idx) => {
          let colorClass = 'bg-[#4540DB]/10 text-[#4540DB] border-[#4540DB]/20';
          if (tag === 'Marketing') colorClass = 'bg-[#FFB836]/10 text-[#FFB836] border-[#FFB836]/20';
          else if (tag === 'Design') colorClass = 'bg-[#56CDAD]/10 text-[#56CDAD] border-[#56CDAD]/20';
          else if (tag === 'Business' || tag === 'Technology') colorClass = 'bg-[#4540DB]/10 text-[#4540DB] border-[#4540DB]/20';
          
          return (
            <span key={idx} className={`px-5 py-1.5 text-sm font-bold border rounded-full ${colorClass}`}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const FeaturedJobs = () => {
  const jobs = [
    {
      title: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma ...',
      tags: ['Marketing', 'Design'],
      type: 'Full Time'
    },
    {
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, USA',
      description: 'Dropbox is looking for Brand Designer to help the team t ...',
      tags: ['Design', 'Business'],
      type: 'Full Time'
    },
    {
        title: 'Email Marketing',
        company: 'Pitch',
        location: 'Berlin, Germany',
        description: 'Pitch is looking for Customer Manager to join marketing t ...',
        tags: ['Marketing'],
        type: 'Full Time'
    },
    {
        title: 'Visual Designer',
        company: 'Blinklist',
        location: 'Granada, Spain',
        description: 'Blinklist is looking for Visual Designer to help team desi ...',
        tags: ['Design'],
        type: 'Full Time'
    },
    {
        title: 'Product Designer',
        company: 'ClassPass',
        location: 'Manchester, UK',
        description: 'ClassPass is looking for Product Designer to help us ...',
        tags: ['Marketing', 'Design'],
        type: 'Full Time'
    },
    {
        title: 'Lead Designer',
        company: 'Canva',
        location: 'Ontario, Canada',
        description: 'Canva is looking for Lead Engineer to help develop n ...',
        tags: ['Design', 'Business'],
        type: 'Full Time'
    },
    {
        title: 'Brand Strategist',
        company: 'GoDaddy',
        location: 'Marseille, France',
        description: 'GoDaddy is looking for Brand Strategist to join the team...',
        tags: ['Marketing'],
        type: 'Full Time'
    },
    {
        title: 'Data Analyst',
        company: 'Twitter',
        location: 'San Diego, US',
        description: 'Twitter is looking for Data Analyst to help team desi ...',
        tags: ['Technology'],
        type: 'Full Time'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202430]">
            Featured <span className="text-[#4540DB]">jobs</span>
          </h2>
          <button className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
