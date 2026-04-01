import React from 'react';
import {
  LuMegaphone,
  LuMonitorSmartphone,
  LuSearchCheck,
  LuArrowRight,
} from 'react-icons/lu';

function WhatWeDo() {
  return (
    <section className="bg-[#f0f5ff] py-16 px-6 lg:py-24 lg:px-20 md:py-18 md:px-15 font-sans text-center lg:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-20">
          <div className="w-full lg:w-1/2 space-y-4">
            <p
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-sm font-bold tracking-[0.2em] text-[#0c5adb] uppercase"
            >
              What We Do
            </p>
            <h1
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-3xl lg:text-[2.5rem] leading-tight font-bold text-[#333]"
            >
              Take the lead in modern Web, App and Software Development
            </h1>
          </div>

          <div className="w-full lg:w-[40%] space-y-6 flex flex-col items-center lg:items-start">
            <p
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-lg text-[#555] leading-relaxed"
            >
              Together, we help our clients achieve tangible, measurable
              results. Focused on business outcomes — we bring a unique set of
              expertise and skills to the party.
            </p>
            <a
              href="#"
              data-aos="fade"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
              data-aos-mirror="true"
              className="group inline-flex items-center gap-2 text-[#333] font-bold border-b-2 border-[#0c5adb] pb-1 transition-all hover:text-[#0c5adb]"
            >
              Discover More
              <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            href="#"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="120"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="group bg-white p-10 rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f0f5ff] text-[#0c5adb] group-hover:bg-[#0c5adb] group-hover:text-white transition-colors">
              <LuMegaphone size={30} />
            </div>
            <h4 className="text-xl font-bold text-[#333] mb-4">
              Digital Marketing Strategy
            </h4>
            <p className="text-[#666] leading-relaxed">
              Craft a dynamic digital marketing strategy by setting clear goals,
              targeting the right audience, and delivering engaging content.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="160"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="group bg-white p-10 rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f0f5ff] text-[#0c5adb] group-hover:bg-[#0c5adb] group-hover:text-white transition-colors">
              <LuMonitorSmartphone size={30} />
            </div>
            <h4 className="text-xl font-bold text-[#333] mb-4">
              Website & App Development
            </h4>
            <p className="text-[#666] leading-relaxed">
              Build a successful website by focusing on user-friendly design,
              responsive functionality, and robust performance.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="180"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="group bg-white p-10 rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f0f5ff] text-[#0c5adb] group-hover:bg-[#0c5adb] group-hover:text-white transition-colors">
              <LuSearchCheck size={30} />
            </div>
            <h4 className="text-xl font-bold text-[#333] mb-4">
              Search Engine Optimization
            </h4>
            <p className="text-[#666] leading-relaxed">
              Effective reporting in SEO involves tracking key performance
              metrics and providing actionable insights.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="160"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="relative w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img
              src="../../public/HomePageimg.jpg"
              alt="Showcase"
              className="w-full h-auto object-cover aspect-[16/5] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
