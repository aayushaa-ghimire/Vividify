

import React from 'react';

function TrustedService() {
  return (
    <section className="bg-white py-12 px-6 lg:py-20 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-[2.2rem] lg:text-[2.8rem] font-bold leading-tight text-[#333] mb-8">
              Trusted solutions <span className="text-[#0c5adb]">for your <br />digital needs </span>
            </h1>
            <button className="rounded-full bg-[#0c5adb] text-white px-10 py-4 text-sm font-bold transition-all duration-200 hover:bg-[#0a4bb3] active:scale-95">
              Get in touch
            </button>
          </div>

          {/* 2x2 Grid - Original Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 01 */}
            <div className="group flex flex-col border border-gray-100 rounded-[2.5rem] p-10 min-h-[220px] bg-white transition-all duration-300 hover:border-[#0c5adb] hover:shadow-md">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">01</p>
              <h4 className="mb-6 text-xl font-bold text-[#444]">Custom Software Solutions</h4>
              <a href="#" className="w-fit text-sm font-bold underline underline-offset-8 text-[#666] group-hover:text-[#0c5adb] transition-colors">
                Learn More
              </a>
            </div>

            {/* Card 02 */}
            <div className="group flex flex-col border border-gray-100 rounded-[2.5rem] p-10 min-h-[220px] bg-white transition-all duration-300 hover:border-[#0c5adb] hover:shadow-md">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">02</p>
              <h4 className="mb-6 text-xl font-bold text-[#444]">Business Web Platforms</h4>
              <a href="#" className="w-fit text-sm font-bold underline underline-offset-8 text-[#666] group-hover:text-[#0c5adb] transition-colors">
                Learn More
              </a>
            </div>

            {/* Card 03 */}
            <div className="group flex flex-col border border-gray-100 rounded-[2.5rem] p-10 min-h-[220px] bg-white transition-all duration-300 hover:border-[#0c5adb] hover:shadow-md">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">03</p>
              <h4 className="mb-6 text-xl font-bold text-[#444]">Smart Automation Systems</h4>
              <a href="#" className="w-fit text-sm font-bold underline underline-offset-8 text-[#666] group-hover:text-[#0c5adb] transition-colors">
                Learn More
              </a>
            </div>

            {/* Card 04 */}
            <div className="group flex flex-col border border-gray-100 rounded-[2.5rem] p-10 min-h-[220px] bg-white transition-all duration-300 hover:border-[#0c5adb] hover:shadow-md">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">04</p>
              <h4 className="mb-6 text-xl font-bold text-[#444]">Scalable Cloud Infrastructure</h4>
              <a href="#" className="w-fit text-sm font-bold underline underline-offset-8 text-[#666] group-hover:text-[#0c5adb] transition-colors">
                Learn More
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN - Fixed height matching the Left Column */}
        <div className="w-full lg:w-[42%] flex">
          <div className="w-full min-h-[400px] overflow-hidden rounded-[3rem] shadow-sm flex-grow">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital solutions team" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustedService;