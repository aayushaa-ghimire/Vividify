import React from 'react';

function OurServices() {
  return (
    <>
      <div className="flex flex-col justify-center gap-[2vw] rounded-xl bg-[#c0d3f3ac] p-6 pt-[7vw] md:flex-row">
        <div className="lg: flex flex-col gap-[4vw] p-[4vw] lg:w-[45vw] lg:gap-[2vw] lg:p-[1vw]">
          <div>
            <h1 className="text-[2rem] leading-tight font-bold lg:text-[2.4rem]">
              Modern IT Solutions for Growing Businesses
            </h1>
          </div>
          <div>
            <p className="w-full leading-relaxed text-[#686868] lg:w-[40vw] lg:leading-loose">
              We provide simple and smart digital services to make your work
              easier and faster. From building websites and apps to improving
              systems and supporting your growth, we help you do everything with
              ease.
            </p>
          </div>

          <div>
            <a
              href="...."
              className="rounded-full bg-[#0c5adb] px-6 py-2 text-white transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div>
          <img
            src="../../public/service-img.png"
            alt="img"
            className="w-[30vw] opacity-[0.3vw]"
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
