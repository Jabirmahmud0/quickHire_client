import React from 'react';

const CompanyStrip = () => {
  const companies = ['Vodafone', 'Intel', 'Tesla', 'AMD', 'Talkit'];
  
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <p className="text-[#202430] text-lg font-medium opacity-50 text-center md:text-left">Companies we helped grow</p>
        <div className="flex flex-wrap justify-between items-center gap-10 grayscale opacity-40">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-8 md:h-12 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 md:h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="Y Combinator" className="h-8 md:h-12 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png" alt="Slack" className="h-8 md:h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Dropbox_Logo.png" alt="Dropbox" className="h-8 md:h-10 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default CompanyStrip;
