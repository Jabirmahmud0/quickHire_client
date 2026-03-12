import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-none bg-[#4540DB] p-12 md:p-24 relative flex flex-col md:flex-row items-center justify-between gap-12 text-white">
            <div className="space-y-8 max-w-lg z-10 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Start posting <br /> jobs today
                </h2>
                <p className="text-white/80 text-xl font-medium">
                    Start posting jobs for only $10.
                </p>
                <button className="bg-white text-[#4540DB] px-10 py-5 font-black text-lg hover:bg-gray-100 transition-all rounded-none shadow-xl">
                    Sign Up For Free
                </button>
            </div>
            
            <div className="flex-1 w-full max-w-2xl relative block md:translate-x-12 translate-y-12 shadow-2xl skew-y-3">
                 <div className="bg-white rounded-none p-8 md:p-12 w-full h-[300px] md:h-[450px]">
                     <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-[#4540DB] rounded-full"></div>
                             <div className="space-y-2">
                                 <div className="w-24 h-3 bg-gray-200"></div>
                                 <div className="w-16 h-2 bg-gray-100"></div>
                             </div>
                         </div>
                         <div className="flex gap-2">
                             <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100"></div>
                             <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100"></div>
                         </div>
                     </div>
                     <div className="grid grid-cols-2 gap-8 h-full opacity-50">
                         <div className="space-y-6">
                              <div className="h-6 w-full bg-gray-100"></div>
                              <div className="h-24 w-full bg-[#F8F8FD]"></div>
                              <div className="h-4 w-2/3 bg-gray-100"></div>
                         </div>
                         <div className="space-y-6">
                              <div className="h-6 w-full bg-gray-100"></div>
                              <div className="h-32 w-full bg-[#F8F8FD]"></div>
                              <div className="h-4 w-1/2 bg-gray-100"></div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default CTABanner;
