import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="px-[8vw] py-16 lg:py-24 bg-white font-sans">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
            <span className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-[0.2em]">
              Our Story
            </span>
          </div>

          <h1
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] text-[#0c2946] tracking-tight"
          >
            Driving Digital <span className="text-[#0c5adb]">Innovation.</span>
          </h1>

          <div className="mt-2 flex justify-center">
            <p
              href="#"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="max-w-3xl text-[1.1rem] leading-relaxed text-[#64748b] font-normal"
            >
              We are a modern IT agency focused on building smart, scalable, and
              efficient digital solutions. Our goal is to help businesses
              leverage technology to solve real-world problems and achieve
              sustainable growth. We specialize in web development and
              data-driven systems designed for exceptional user experiences.
            </p>
          </div>

          <div className="mt-4">
            <Link
              to={'/contacts'}
              data-aos="fade"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              href="#contact"
              className="inline-block rounded-xl bg-[#0c5adb] px-10 py-4 text-[0.9rem] font-bold text-white transition-all hover:bg-[#0a4cbd] hover:shadow-xl hover:shadow-[#0c5adb]/20 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl">
          <div className=" bg-gradient-to-r from-[#0c5adb] to-blue-400 rounded-[2rem] lg:rounded-[3rem]  transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
            alt="Vividify Team Office"
            className="w-full h-auto object-cover aspect-[16/5] transition-transform duration-900 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
