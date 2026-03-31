import React from 'react';
import { LuCheck } from 'react-icons/lu';
function AnimatedText() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffff] via-[#f0f5ff] to-[#f0f5ff] border-b-2 border-[#e6edfb] mb-[0.5vw] mt-[10vw]">
        <div className="flex justify-between items-center py-[2.48vw] px-2">
          {/* <img
            src="../../public/marquee-star.png"
            alt="star"
            className="w-[3vw] min-w-[15px]"
          /> */}
          <LuCheck className=" text-[2rem] text-[#0c5adb] font-extrabold" />

          <p className=" text-[2vw] text-[#0c2946] md:text-[1.5rem] whitespace-nowrap">
            Website Development
          </p>
          {/* <img
            src="../../public/marquee-star.png"
            alt="star"
            className="w-[3vw] min-w-[15px]"
          /> */}
          <LuCheck className=" text-[2rem] text-[#0c5adb] font-extrabold" />

          <p className=" text-[2vw] md:text-[1.5rem] whitespace-nowrap">
            Software Development
          </p>
          {/* <img
            src="../../public/marquee-star.png"
            alt="star"
            className="w-[3vw] min-w-[15px]"
          /> */}
          <LuCheck className=" text-[2rem] text-[#0c5adb] font-bold" />

          <p className=" text-[2vw] md:text-[1.5rem] whitespace-nowrap">
            SEO Agency
          </p>
          {/* <img
            src="../../public/marquee-star.png"
            alt="star"
            className="w-[3vw] min-w-[15px]"
          /> */}
          <LuCheck className=" text-[2rem] text-[#0c5adb] font-extrabold" />

          <p className=" text-[2vw] md:text-[1.5rem] whitespace-nowrap">
            Digital Marketing
          </p>
          {/* <img
            src="../../public/marquee-star.png"
            alt="star"
            className="w-[3vw] min-w-[15px]"
          /> */}
          <LuCheck className=" text-[2rem] text-[#0c5adb] font-extrabold" />
        </div>
      </div>
    </>
  );
}

export default AnimatedText;
