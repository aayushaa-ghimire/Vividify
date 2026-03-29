import React from 'react';
import { FaLightbulb, FaRocket, FaQuoteLeft } from 'react-icons/fa';

function ITSupport() {
  return (
    <div className="mx-[4vw] max-w-7xl px-[5vw] py-10 mb-10">
      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-center">
        
        <div className="relative w-full lg:w-[40%]">
          <div className="relative rounded-[2.5rem] bg-gray-50 p-6 shadow-sm">
            <img 
              src="/about-page.png" 
              alt="IT Support" 
              className="rounded-[2rem] shadow-lg w-full object-cover h-[400px] lg:h-[450px]"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#0c5adb] p-7 text-white shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-90 font-bold">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-[50%]">
          {/* heading */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c5adb]">
              IT Support for Business
            </h4>
            <h1 className="text-[2rem] font-bold leading-tight text-[#111] lg:text-[2.6rem]">
              Empowering Business with <br /> 
              <span className="text-[#0c5adb]">IT Solutions.</span>
            </h1>
          </div>

          {/* paragraphs */}
          <p className="text-[1rem] leading-relaxed text-[#686868]">
            At Vividify Solutions, we are passionate about transforming
            businesses through innovative technology solutions. We provide a 
            comprehensive range of IT and digital services that drive growth, 
            enhance efficiency, and elevate customer experiences.
          </p>

          <div className="grid grid-cols-2 gap-6 border-y border-gray-100 py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f8ff] text-[#0c5adb]">
                <FaRocket size={18} />
              </div>
              <div>
                <p className="text-[0.95rem] font-bold text-[#222]">Innovate Smarter</p>
                <p className="text-[11px] text-[#686868]">Advanced Tech</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f8ff] text-[#0c5adb]">
                <FaLightbulb size={18} />
              </div>
              <div>
                {/* icon */}
                <p className="text-[0.95rem] font-bold text-[#222]">Solution Oriented</p>
                <p className="text-[11px] text-[#686868]">Result Driven</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-[#eff6fd] p-6">
            {/* icon */}
            <FaQuoteLeft className="mt-1 flex-shrink-0 text-[#0c5adb] opacity-50" size={20} />
            <p className="text-[0.95rem] font-medium leading-relaxed text-[#444]">
              If your business faces technical challenges, you deserve the very
              best IT solutions by your side.
            </p>
          </div>

          <div className="mt-2">
            <button className="rounded-full bg-[#0c5adb] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-[#0a4cbd] active:scale-95 shadow-lg shadow-blue-500/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITSupport;