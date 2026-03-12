import React from 'react';
import { SiRevolut, SiDropbox, SiCanva, SiGodaddy } from 'react-icons/si';

// Map company names to their react-icon component with brand colors
export const companyIcons = {
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

export default JobCard;
