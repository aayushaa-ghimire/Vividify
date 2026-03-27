import React from 'react';

function OurServices() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[2vw] rounded-[3rem] bg-gradient-to-r from-[#ffffff] via-[#f4f8ff] to-[#e1edff] p-6 pt-[7vw] shadow-lg md:flex-row">
        <div>
          <img
            src="../../public/Servicebanner.png"
            alt="IT Solutions Team"
            className="w-full items-center mix-blend-multiply lg:w-[30vw]"
          />
        </div>

        <div className="lg: flex flex-col gap-[4vw] p-[4vw] lg:w-[45vw] lg:gap-[2vw] lg:p-[1vw]">
          <div>
            <h1 className="text-[2rem] leading-tight font-bold text-[#111] lg:text-[2.4rem]">
              Modern IT Solutions for{' '}
              <span className="text-[#0c5adb]">Growing Businesses</span>
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
              className="inline-block rounded-full bg-[#0c5adb] px-8 py-3 font-semibold text-white shadow-[0_10px_20px_rgba(12,90,219,0.3)] transition-all hover:scale-105 hover:bg-[#0842a3] active:scale-95 lg:rounded-[1.8vw] lg:px-[2.5vw] lg:py-[1vw] lg:text-[1.1vw]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* <div>
          <img
            src="../../public/Servicebanner.png"
            alt="IT Solutions Team"
            className="w-full items-center mix-blend-multiply lg:w-[50vw]"
          />
        </div> */}
      </div>
    </>
  );
}

export default OurServices;
