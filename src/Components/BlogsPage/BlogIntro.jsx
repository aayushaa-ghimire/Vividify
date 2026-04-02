import React from 'react';

function BlogIntro() {
  return (
    <>
      <div className="flex flex-col gap-[0.5vw] px-[10vw] py-[7vw] justify-center items-center bg-gradient-to-r from-[#ffffff] via-[#eef1fa] to-[#e5effd] ">
        <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
          <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
            Blogs
          </p>
        </div>

        <div>
          <h1 className="text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] text-[#0c2946] tracking-tight">
            Blogs and <span className="text-[#0c5adb]">Articles</span>
          </h1>
        </div>
        <div>
          <p className="max-w-md mx-auto lg:mx-0 text-[#64748b] text-[1rem] md:text-[1.1rem] leading-relaxed font-normal">
            Subscribe to get latest updates from us
          </p>
        </div>
        <div className="flex gap-[1vw] items-center justify-center align-middle">
          <input
            className="rounded-xl shadow-xl border  border-[#696c70] p-[4vw] w-[30vw] outline-none transition-all focus:border-[#0c5adb] lg:rounded-3xl lg:p-[0.8vw]"
            type="text"
          />
          <button className="rounded-[1vw] mt-[1vw] bg-[#0c5adb] text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogIntro;
