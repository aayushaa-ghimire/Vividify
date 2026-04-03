import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHero() {
  return (
    <>
      <div className="flex bg-gradient-to-r from-[#ffffff] via-[#eef1fa] to-[#e5effd] gap-[3vw] items-center px-[4vw] py-[5vw]">
        <div className="flex flex-col gap-[0.8vw] w-[40vw] ">
          <div className="inline-flex items-center w-fit bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
            <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
              Our Projects
            </p>
          </div>

          <div className="flex flex-col gap-[0.5vw]">
            <div>
              <h1 className="text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] text-[#0c2946] tracking-tight">
                Our <span className="text-[#0c5adb]">Projects</span>
              </h1>
            </div>

            <div>
              <p className="leading-loose">
                From concept to execution, our projects reflect our ability to
                build fast, secure, and future-ready digital solutions. We focus
                on performance, reliability, and scalability, ensuring every
                product is designed to meet real business needs and grow with
                them over time.
              </p>
            </div>
          </div>
          <div className="flex">
            <Link
              to={'/service'}
              className="rounded-[1vw] mt-[1vw] bg-[#0c5adb] w-fit  text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[50vw] gap-[2vw] justify-center items-center ">
          <div className="w-[50vw] h-[50vh] overflow-clip">
            <img
              src="../../public/DwarkaPalace.png"
              alt="img"
              className="object-cover object-center rounded-2xl  aspect-[16/9]"
            />
          </div>

          <div className="flex gap-[2vw]">
            <div className="overflow-clip">
              <img
                src="../../public/RippleEngineering.jpg"
                alt="img"
                className="object-cover object-center rounded-2xl w-[25vw] aspect-[16/9]"
              />
            </div>
            <div className="overflow-clip">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa"
                alt="img"
                className="object-cover object-center rounded-2xl w-[25vw] aspect-[16/9] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectHero;
