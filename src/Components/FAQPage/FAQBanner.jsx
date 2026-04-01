import React from 'react';

function FAQBanner() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 font-sans">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-[2.5rem] bg-gradient-to-r from-[#ffffff] via-[#f8faff] to-[#eef5ff] p-8 lg:p-16 border border-white shadow-2xl shadow-blue-500/5 overflow-hidden">
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">
          <h1 className="text-[2.5rem] lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-[#0c2946]">
            Your Questions,
            <br />
            <span className="text-[#0c5adb]">Our Solutions</span>
          </h1>
          <p className="max-w-xl text-[1.1rem] font-normal leading-relaxed text-[#64748b]">
            At Vividify Solutions, we deliver tailored IT design, management,
            and support services to meet the evolving needs of modern
            businesses. Our expertise and innovative strategies ensure
            efficient, future-proof operations.
          </p>
        </div>

        <div className="w-full lg:w-auto flex justify-center group">
          <img
            src="../../public/faq-concept.png"
            alt="img"
            className="aspect-square w-full max-w-[400px] lg:w-[350px] rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default FAQBanner;
