import React from 'react';

function Marketing() {
  return (
    <>
      <div className="flex flex-col items-center justify-around gap-10 bg-[#ccdfff] px-6 pt-[15vw] pb-[15vw] lg:flex-row lg:gap-[4vw] lg:px-0 lg:pt-[8vw] lg:pb-[8vw]">
        <div className="flex w-full justify-center lg:w-[40vw]">
          <img
            src="../../public/about-thum11.png"
            alt="img"
            className="w-[80vw] lg:w-[35vw]"
          />
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-[40vw] lg:gap-[2vw]">
          <p className="text-[1.1rem] font-semibold text-[#0c5adb] lg:text-[1.2rem] lg:font-normal">
            Marketing
          </p>
          <h1 className="text-[1.8rem] leading-tight font-medium lg:text-[2.19rem]">
            Why you need digital marketing
          </h1>
          <p className="text-[1rem] leading-relaxed text-[#616161] lg:text-[1.3vw]">
            As a highly-rated holistic digital marketing agency, we serve
            thousands of clients with a full spectrum of services. Our expertise
            includes SEO, social media management, website design, web
            development, and app development.
          </p>
          <a
            href="..."
            className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
          >
            Discover More
          </a>
        </div>
      </div>
    </>
  );
}

export default Marketing;
