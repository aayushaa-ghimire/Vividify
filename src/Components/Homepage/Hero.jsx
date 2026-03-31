import React from 'react';
import Navbar from '../Navbar';

function Hero() {
  return (
    <>
      <div className="mt-0 bg-gradient-to-br from-[#f4f8ff] via-[#eaf4ff] to-[#dbeeff] text-[#0a2540]  gap-10 pt-[5vw] pb-[8vw]  ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
          <div className="flex flex-col w-[80%] md:w-[40%] pl-6 pr-6 md:pl-12 md:pr-12 gap-6">
            <div className="mt-0">
              <h1 className="text-[2.5rem] md:text-[3rem]  text-[#0c2946] lg:text-[3.5rem] font-bold ">
                Your Trusted IT Solutions Partner
              </h1>
            </div>
            <div>
              <p className="text-[#616161] leading-loose  font-medium md:text-left">
                We are a leading IT solutions agency and web development,
                committed to driving your online success. Through innovative
                strategies and expert insights, we ensure your business stands
                out in the digital world
              </p>
            </div>
            <div className="flex justify-center md:block">
              <a
                href="http://"
                className="bg-[#0c5adb] rounded-[1vw] flex align-middle w-max p-4 md:p-[1vw] font-bold  text-white relative"
              >
                Discover More
              </a>
            </div>
          </div>

          <div className="w-[80%] md:w-[40%] gap-6 flex items-center">
            <div className="flex flex-col gap-5 ">
              <div className="relative rounded-3xl  overflow-hidden shadow-2xl">
                <img
                  src="../../public/home-banner-1.jpg"
                  className=" object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                  alt=""
                />
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="../../public/home-banner-2.jpg"
                  className=" object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                  alt=""
                />
              </div>
            </div>

            <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
              <img
                src="../../public/home-banner-4.jpg"
                className=" object-cover w-full h-auto transition-transform duration-700 hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
