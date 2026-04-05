import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHero() {
  return (
    <div className="bg-white py-12 lg:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side*/}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0c2946] leading-tight tracking-tight">
              Modern solutions for
              <span className="text-[#0c5adb]"> modern businesses.</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
              We specialize in building clean, functional, and high-performing
              digital products. Our work speaks for itself—focused on quality,
              security, and growth.
            </p>

            <div className="pt-2">
              <Link
                to="/service"
                className="inline-block bg-[#0c5adb] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[#0a4bb3] hover:shadow-xl hover:shadow-blue-100 active:scale-95"
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right Side*/}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
            <a
              href="https://dwarka-link.com"
              target="_blank"
              className="group block overflow-hidden rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <img
                src="/DwarkaPalace.png"
                alt="Main Project"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <a
                href="https://ripple-link.com"
                target="_blank"
                className="group block overflow-hidden rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <img
                  src="/RippleEngineering.jpg"
                  alt="Engineering Project"
                  className="w-full h-32 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <a
                href="https://mountain-link.com"
                target="_blank"
                className="group block overflow-hidden rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                  alt="Tourism Project"
                  className="w-full h-32 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
