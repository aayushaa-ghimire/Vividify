import React from 'react';

function FAQBanner() {
  return (
    <>
      <div className="flex items-center justify-around gap-[3vw] rounded-2xl bg-gradient-to-r from-[#ffffff] via-[#f4f8ff] to-[#e1edff] px-[4vw] shadow-lg">
        <div className="flex flex-col gap-[2vw]">
          <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-[#111] lg:text-6xl">
            Your Questions,
            <br />
            <span className="text-[#0c5adb]">Our Solutions</span>
          </h1>
          <p className="w-full leading-relaxed font-medium text-[#686868] lg:w-[40vw] lg:leading-loose">
            At Vividify Solutions, we deliver tailored IT design, management,
            and support services to meet the evolving needs of modern
            businesses. Our expertise and innovative strategies ensure
            efficient, future-proof operations.
          </p>
        </div>

        <div>
          <img
            src="../../public/faq-concept.png"
            alt="img"
            className="aspect-square w-[50vw] transform object-cover transition duration-150 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default FAQBanner;
