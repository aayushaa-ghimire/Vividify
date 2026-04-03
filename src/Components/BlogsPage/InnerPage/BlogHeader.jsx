import React from 'react';
import { User } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
function BlogHeader() {
  return (
    <header className="mb-[3rem]">
      <button className="text-gray-400 uppercase text-[0.75rem] tracking-widest mb-[1rem] hover:text-blue-600 transition-colors">
        ← Back to Blog
      </button>

      <div className="flex items-center gap-[1rem] mb-[1.5rem]">
        <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
          <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
            Expeditions
          </p>
        </div>
        <span className="text-gray-400 text-[0.75rem]">March 29, 2026</span>
      </div>

      <h1 className="text-[3rem] font-semibold uppercase leading-[1.1] mb-[1.5rem]">
        Mountaineering in Nepal:
        <span className="text-gray-500"> Where the Earth Touches the Sky</span>
      </h1>
      <div className="flex flex-col gap-[4vh] justify-center md:flex-row md:justify-between lg:flex-row  lg:justify-between">
        <div className="flex items-center gap-[1rem] pt-[1rem] border-t border-gray-100">
          <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-gray-200 rounded-full">
            <User size={18} />
          </div>
          <div>
            <p className="font-bold text-[1rem]">
              Himalayan Mountaineering Team
            </p>
            <p className="text-gray-500 font-medium text-[0.875rem]">
              Expedition Specialists
            </p>
          </div>
        </div>

        <div className="flex gap-[2vw] items-center">
          <div>
            <p className="text-gray-500 font-bold text-[1rem]">Share:-</p>
          </div>
          <div className="flex gap-6 lg:gap-6">
            <a
              href="#"
              className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BlogHeader;
