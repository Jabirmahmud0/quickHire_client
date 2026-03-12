import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#4540DB] p-12 md:p-24 relative flex flex-col md:flex-row items-center justify-between gap-12 text-white">
            <div className="space-y-8 max-w-lg z-10 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Start posting <br /> jobs today
                </h2>
                <p className="text-white/80 text-xl font-medium">
                    Start posting jobs for only $10.
                </p>
                <button className="bg-white text-[#4540DB] px-10 py-5 font-black text-lg hover:bg-gray-100 transition-all rounded-xl shadow-xl">
                    Sign Up For Free
                </button>
            </div>
            
            <div className="flex-1 w-full relative mt-12 md:mt-0 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 border-4 border-white">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard Preview" className="w-full h-auto object-cover" />
            </div>
        </div>
    </section>
  );
};

export default CTABanner;
