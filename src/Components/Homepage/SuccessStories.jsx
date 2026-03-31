import React from 'react';

function SuccessStories() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Text Content */}
          <div className="flex flex-col justify-between py-6">
            <div className="space-y-6">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0c5adb] uppercase">
                Success Stories
              </p>
              <h1 className="text-4xl lg:text-[2.8rem] font-bold text-[#333] leading-tight">
                Our work propels
                <br />
                businesses forward
              </h1>
              <p className="text-[#666] text-lg leading-relaxed max-w-sm">
                As a five-star-rated, holistic full-service digital agency, we
                proudly serve thousands of clients with expertise across SEO and
                development.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="..."
                className="rounded-[1vw] bg-[#0c5adb] text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
              >
                Discover More
              </a>
            </div>
          </div>

          {/* Column 2: Right Path Education */}
          <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[550px] flex flex-col justify-between p-10 transition-all duration-500 hover:shadow-2xl">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 bg-[url('/RightPathEdu.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/90 transition-colors"></div>

            <div className="relative z-10">
              <span className="text-white/80 font-bold text-sm tracking-widest uppercase">
                Our Work
              </span>
              <h3 className="text-white font-bold text-xl mt-1">
                Right Path Education
              </h3>
            </div>

            <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="mb-6">
                <h2 className="text-6xl font-bold mb-1">+80%</h2>
                <p className="text-lg font-medium text-white/90">
                  Digital Presence
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Website
                </span>
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Hosting
                </span>
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  SEO
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Ripple Engineering */}
          <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[550px] flex flex-col justify-between p-10 transition-all duration-500 hover:shadow-2xl">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 bg-[url('/RippleEngineering.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/90 transition-colors"></div>

            <div className="relative z-10">
              <span className="text-white/80 font-bold text-sm tracking-widest uppercase">
                Our Work
              </span>
              <h3 className="text-white font-bold text-xl mt-1">
                Ripple Engineering
              </h3>
            </div>

            <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="mb-6">
                <h2 className="text-6xl font-bold mb-1">+100%</h2>
                <p className="text-lg font-medium text-white/90">
                  Website Development
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Website
                </span>
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Hosting
                </span>
                <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  SEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
