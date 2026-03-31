import React from 'react';

function Marketing() {
  return (
    <section className="bg-[#f0f5ff] py-16 px-6 lg:py-24 lg:px-20 mb-[4vw] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl group-hover:bg-blue-300/40 transition-all duration-500"></div>
            <img
              src="/about-thum11.png"
              alt="Marketing"
              className="relative w-full max-w-[500px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
          <div className="space-y-3">
            <p className="text-[#0c5adb] font-bold uppercase tracking-widest text-sm">
              Marketing
            </p>
            <h1 className="text-3xl lg:text-[2.2rem] font-bold text-[#333] leading-tight">
              Why you need <br className="hidden md:block" /> digital marketing
            </h1>
          </div>

          <p className="text-lg text-[#555] leading-relaxed max-w-xl">
            As a highly-rated holistic digital marketing agency, we serve
            thousands of clients with a full spectrum of services. Our expertise
            includes SEO, social media management, website design, web
            development, and app development.
          </p>

          <div className="pt-2">
            <a
              href="#"
              className="rounded-[1vw] bg-[#0c5adb] text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
            >
              Discover More
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
