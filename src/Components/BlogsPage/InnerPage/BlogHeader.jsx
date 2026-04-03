import React from 'react';

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

      <div className="flex items-center gap-[1rem] pt-[1rem] border-t border-gray-100">
        <div className="w-[3rem] h-[3rem] bg-gray-200 rounded-full"></div>
        <div>
          <p className="font-bold text-[1rem]">Himalayan Mountaineering Team</p>
          <p className="text-gray-500 font-medium text-[0.875rem]">
            Expedition Specialists
          </p>
        </div>
      </div>
    </header>
  );
}

export default BlogHeader;
