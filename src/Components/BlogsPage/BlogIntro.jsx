import React from 'react';

function BlogIntro() {
  return (
    <>
      <div className="flex flex-col gap-4 px-6 py-16 md:py-28 justify-center items-center bg-gradient-to-r from-[#ffffff] via-[#eef1fa] to-[#e5effd]">
        <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
          <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
            Blogs
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] text-[#0c2946] tracking-tight">
            Blogs and <span className="text-[#0c5adb]">Articles</span>
          </h1>
        </div>

        <div className="text-center">
          <p className="max-w-md mx-auto text-[#64748b] text-base md:text-lg leading-relaxed font-normal">
            Subscribe to get latest updates from us
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-lg mt-4">
          <input
            placeholder="Enter your email"
            className="rounded-2xl border border-slate-300 p-4 w-full sm:w-80 outline-none transition-all focus:border-[#0c5adb] shadow-sm"
            type="text"
          />
          <button className="w-full sm:w-auto rounded-2xl bg-[#0c5adb] text-white px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-lg shadow-blue-200">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogIntro;
