import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#fcfdfe] flex items-center justify-center pb-12 mb-[5vw]  overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-15">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start bg-white border border-[#0c5adb]/10 px-2 py-1 rounded-full shadow-sm">
              <span className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
                Full-Service IT Partner
              </span>
            </div>

            <h1
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-extrabold text-[#0c2946] leading-[1.1] tracking-tight"
            >
              Strategic Tech {''}
              <span className="text-[#0c5adb]">Solutions</span> for <br />
              Growth.
            </h1>

            <p
              href="#"
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="max-w-md mx-auto lg:mx-0 text-[#64748b] text-[1rem] md:text-[1.1rem] leading-relaxed font-normal"
            >
              From coding high-performance websites to managing global ad
              campaigns, we provide the technical edge your business needs to
              scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                to={'/contacts'}
                className="bg-[#0c5adb]  hover:bg-[#0a49b1] text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#0c5adb]/20 active:scale-95"
              >
                Start Your Project
              </Link>
              <Link
                to={'/service'}
                className="bg-white text-[#0c2946] border border-gray-100 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-12 pb-[4vw] grid-rows-6 gap-3 h-[450px] lg:h-[400px]">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
              data-aos-mirror="false"
              className="col-span-8 row-span-4 rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative"
            >
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Web Development"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[0.65rem] font-bold text-[#0c2946] shadow-sm">
                Web Development
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
              data-aos-mirror="false"
              className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="SEO Strategy"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[0.65rem] font-bold text-[#0c2946] shadow-sm">
                SEO
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
              data-aos-mirror="false"
              className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative"
            >
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Social Media Content"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[0.65rem] font-bold text-[#0c2946] shadow-sm">
                Social Media
              </div>
            </div>

            <div className="col-span-8 row-span-2 rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative">
              <img
                src="../../public/HomeBanner4.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Digital Marketing Dashboard"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[0.65rem] font-bold text-[#0c2946] shadow-sm">
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
