import React from 'react';
import { Check } from 'lucide-react';

function HomeBanner2() {
  return (
    <section className="my-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto bg-[#0c5adb] rounded-3xl p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side*/}
        <div className="w-full lg:w-1/2">
          <h2
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-4xl lg:text-6xl font-black mb-6 leading-tight"
          >
            Built for <br />
            Performance.
          </h2>
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-blue-100 text-lg"
          >
            We focus on the technical details so your business stays ahead of
            the competition.
          </p>
        </div>

        {/* Right Side*/}
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="flex items-center gap-4">
            <Check size={24} className="text-blue-200" />
            <span className="text-xl font-bold">SEO Optimized Structure</span>
          </div>

          <div className="flex items-center gap-4">
            <Check size={24} className="text-blue-200" />
            <span className="text-xl font-bold">Lightning Fast Load Times</span>
          </div>

          <div className="flex items-center gap-4">
            <Check size={24} className="text-blue-200" />
            <span className="text-xl font-bold">Fully Responsive Design</span>
          </div>

          <div className="flex items-center gap-4">
            <Check size={24} className="text-blue-200" />
            <span className="text-xl font-bold">Secure Cloud Hosting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner2;
