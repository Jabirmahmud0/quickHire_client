import React from 'react';
import { Palette, BarChart3, Megaphone, DollarSign, Monitor, UserCheck, Briefcase, Users2, ArrowRight } from 'lucide-react';

const CategoryCard = ({ icon: Icon, title, count, isActive }) => (
  <div className={`p-8 border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group rounded-2xl ${isActive ? 'bg-[#4540DB] text-white border-[#4540DB]' : 'bg-white text-[#202430]'}`}>
    <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-xl ${isActive ? 'bg-white/10' : 'bg-[#F8F8FD]'}`}>
      <Icon className={isActive ? 'text-white' : 'text-[#4540DB]'} size={24} />
    </div>
    <div className="space-y-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex justify-between items-center w-full">
         <p className={isActive ? 'text-white/70' : 'text-[#515B6F]'}>{count} jobs available</p>
         <ArrowRight className={`group-hover:translate-x-1 transition-transform ${isActive ? 'text-white/70' : 'text-[#515B6F]'}`} size={20} />
      </div>
    </div>
  </div>
);

const CategorySection = () => {
  const categories = [
    { icon: Palette, title: 'Design', count: 235 },
    { icon: BarChart3, title: 'Sales', count: 756 },
    { icon: Megaphone, title: 'Marketing', count: 140, isActive: true },
    { icon: DollarSign, title: 'Finance', count: 325 },
    { icon: Monitor, title: 'Technology', count: 436 },
    { icon: Briefcase, title: 'Engineering', count: 542 },
    { icon: Briefcase, title: 'Business', count: 211 },
    { icon: Users2, title: 'Human Resource', count: 346 }
  ];

  return (
    <section className="py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-bold text-[#202430]">
            Explore by <span className="text-[#00B1A7]">category</span>
          </h2>
          <button className="text-[#4540DB] font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
            Show all jobs <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
