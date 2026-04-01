import React from 'react';
import { Target, Zap, Headphones } from 'lucide-react';

function HowWeDeliver() {
  return (
    <div className="mb-20 px-[8vw] py-16 lg:py-24">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]"
        >
          Our Process
        </h2>
        <h1
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="text-[2.2rem] font-bold leading-tight text-[#111] lg:text-[3rem]"
        >
          How We Deliver
        </h1>
        <p
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="mt-6 max-w-[600px] text-[1.05rem] leading-relaxed text-[#686868]"
        >
          We follow a streamlined approach to ensure your project moves from
          concept to reality with precision and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="250"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Target size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">Strategy</h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            We start by understanding your business objectives, technical needs,
            and long-term vision to define a clear roadmap.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="300"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Zap size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">Execution</h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            Our experts develop scalable, secure, and high-performance solutions
            using modern technologies and best practices.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="350"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Headphones size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">Support</h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            After deployment, we provide continuous monitoring and updates to
            ensure your system evolves with your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeDeliver;
