import React from 'react';

const CompanyStrip = () => {
  const companies = ['Vodafone', 'Intel', 'Tesla', 'AMD', 'Talkit'];
  
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <p className="text-[#202430] text-lg font-medium opacity-50 text-center md:text-left">Companies we helped grow</p>
        <div className="flex flex-wrap justify-between items-center gap-10 grayscale opacity-40">
          <span className="text-4xl font-black tracking-tighter">vodafone</span>
          <span className="text-4xl font-black tracking-tighter">intel.</span>
          <span className="text-4xl font-black tracking-tighter">TESLA</span>
          <span className="text-4xl font-black tracking-tighter">AMDA</span>
          <span className="text-4xl font-black tracking-tighter">Talkit</span>
        </div>
      </div>
    </section>
  );
};

export default CompanyStrip;
