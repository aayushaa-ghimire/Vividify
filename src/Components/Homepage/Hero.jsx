import React from 'react';

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#f8faff] flex items-center pt-20 pb-16 overflow-hidden font-sans">
      {/* Subtle Tech Grid Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#0c5adb 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start bg-white border border-[#0c5adb]/20 px-4 py-2 rounded-full shadow-sm">
              <span className="text-[#0c5adb] text-xs font-bold uppercase tracking-widest">
                Full-Service IT Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#0c2946] leading-[1.1]">
              Strategic Tech <br />
              <span className="text-[#0c5adb]">Solutions</span> for <br />
              Growth.
            </h1>

            <p className="text-[#64748b] text-lg md:text-xl leading-relaxed font-normal">
              From coding high-performance websites to managing global ad
              campaigns, we provide the technical edge your business needs to
              scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="bg-[#0c5adb] hover:bg-[#0a49b1] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-[#0c5adb]/30"
              >
                Start Your Project
              </a>
              <a
                href="#"
                className="bg-white text-[#0c2946] border border-gray-200 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Modern Bento Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-12 grid-rows-6 gap-4 h-[550px] md:h-[650px]">
            {/* 1. Web Development (Image Kept Exactly the Same) */}
            <div className="col-span-8 row-span-4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group relative">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Web Development"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#0c2946]">
                Web Development
              </div>
            </div>

            {/* 2. SEO (Using the Strategy visual from the last update) */}
            <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="SEO Strategy"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#0c2946]">
                SEO
              </div>
            </div>

            {/* 3. Social Media (New Visual: Social Content/Phone) */}
            <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Social Media Content"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#0c2946]">
                Social Media
              </div>
            </div>

            {/* 4. Digital Marketing (New Visual: High-Tech Analytics Dashboard) */}
            <div className="col-span-8 row-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative">
              <img
                src="../../public/HomeBanner4.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Digital Marketing Dashboard"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#0c2946]">
                Digital Marketing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
