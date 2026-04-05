import React from 'react';
import { User } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BlogHeader() {
  return (
    <header className="mb-12">
      <Link
        to={'/blogs'}
        className="inline-block text-gray-400 uppercase text-[0.75rem] tracking-widest mb-6 hover:text-blue-600 transition-colors"
      >
        ← Back to Blog
      </Link>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
          <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
            Expeditions
          </p>
        </div>
        <span className="text-gray-400 text-[0.75rem]">March 29, 2026</span>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold uppercase leading-[1.1] mb-8">
        Mountaineering in Nepal:
        <span className="text-gray-500 block md:inline">
          {' '}
          Where the Earth Touches the Sky
        </span>
      </h1>

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-t border-gray-100 pt-6">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex justify-center items-center bg-gray-200 rounded-full">
            <User size={18} />
          </div>
          <div>
            <p className="font-bold text-base text-[#0c2946]">
              Himalayan Mountaineering Team
            </p>
            <p className="text-gray-500 font-medium text-sm">
              Expedition Specialists
            </p>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex items-center gap-4">
          <p className="text-gray-500 font-bold text-sm">Share:-</p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
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
