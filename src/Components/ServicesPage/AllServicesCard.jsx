import React from 'react';

const AllServicesCard = ({ title, shortDesc, longDesc, image, number }) => {
  return (
    <div className="mx-auto w-[95%] max-w-6xl overflow-hidden rounded-[3.5rem] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_32px_80px_rgba(12,90,219,0.1)] flex flex-col md:flex-row min-h-[520px] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(12,90,219,0.15)]">
      
      {/* Left Section: Image with Inset Shadow */}
      <div 
        className="w-full md:w-[45%] min-h-[400px] md:min-h-[520px] overflow-hidden relative shrink-0"
        data-swiper-parallax="-400"
      >
        <div className="absolute inset-0 p-8">
          <div className="h-full w-full rounded-[3rem] overflow-hidden shadow-inner border border-white/20">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700" 
            />
          </div>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-col justify-center p-12 md:p-20 text-left w-full relative">
        {/* Decorative Background Number */}
        <div 
          className="absolute top-10 right-10 text-9xl font-black text-blue-500/5 select-none"
          data-swiper-parallax="-500"
        >
          {number}
        </div>

        <div data-swiper-parallax="-350">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0c5adb]/10 text-[#0c5adb] text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c5adb] mr-2 animate-pulse"></span>
            Service {number}
          </span>
        </div>
        
        <h3 
          className="text-4xl md:text-6xl font-black text-[#111] tracking-tight leading-[1.1]"
          data-swiper-parallax="-250"
        >
          {title}
        </h3>
        
        <p 
          className="mt-4 mb-10 text-xl md:text-2xl font-medium text-[#444] leading-relaxed"
          data-swiper-parallax="-180"
        >
          {shortDesc}
        </p>

        {/* Description Box with Glass Effect */}
        <div 
          className="relative border-l-8 border-[#0c5adb] bg-gradient-to-r from-blue-50/50 to-transparent p-8 rounded-r-[2rem]"
          data-swiper-parallax="-120"
        >
          <p className="text-base md:text-lg leading-relaxed text-[#555] font-normal italic">
            "{longDesc}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;