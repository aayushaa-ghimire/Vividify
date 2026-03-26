import React from 'react';

function AboutUs() {
  return (
    <>
      <div className="mt-[4vw] flex flex-col gap-[5vw] px-[4vw]">
        {/* Top section */}

        <div className="flex flex-col items-center justify-center gap-[1.5vw]">
          <div>
            <h1 className="text-[2rem] leading-tight font-bold lg:text-[2.4rem]">
              About Us
            </h1>
          </div>
          <div>
            <p className="w-full text-center leading-relaxed text-[#686868] lg:w-[80vw] lg:leading-loose">
              We are a modern IT company focused on building smart, scalable,
              and efficient digital solutions. Our goal is to help businesses
              leverage technology to solve real-world problems and achieve
              sustainable growth. We specialize in web development, software
              solutions, and data-driven systems designed to deliver seamless
              performance and exceptional user experiences.
            </p>
          </div>
          <div>
            <a
              href="...."
              className="rounded-full bg-[#0c5adb] px-6 py-2 text-white transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
            >
              Contact us
            </a>
          </div>
        </div>

        <div>
          <img
            src="../../public/About-banner.jpg"
            alt="banner"
            className="h-[40vw] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
