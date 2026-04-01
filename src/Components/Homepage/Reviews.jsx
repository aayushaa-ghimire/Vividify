import React from 'react';
import { Star, User } from 'lucide-react';

function Reviews() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-[8vw] px-[10vw] pt-[6vw] pb-[3vw] mt-[4vw] bg-white">
        <div className="flex flex-col w-full lg:w-[40vw] gap-[2vw]">
          <div>
            <p className="text-[0.75rem] font-bold tracking-[0.3em] text-[#0c5adb] uppercase">
              Client reviews
            </p>
          </div>
          <div>
            <h1
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="180"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-[2.25rem] lg:text-5xl font-medium leading-tight text-[#111]"
            >
              Driving digital revenue for <br /> our 50+ satisfied customers
            </h1>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex gap-[2vw] mt-[1.5vw] items-center bg-white shadow-[0_20px_40px_rgba(12,90,219,0.08)] rounded-3xl w-fit px-[5vw] lg:px-[2vw] py-[3vw] lg:py-[1.5vw] transition-all hover:shadow-[0_20px_40px_rgba(12,90,219,0.15)]"
          >
            <div className="text-[#0c5adb]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></svg>
            </div>
            <div>
              <h2 className="text-[2rem] lg:text-5xl font-normal text-[#111]">
                60%
              </h2>
            </div>
            <div>
              <p className="text-[#686868] text-[0.875rem] font-normal leading-tight">
                Average Traffic <br />
                Increase for Clients
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[3vw] w-full lg:w-[35vw] pt-[5vw] lg:pt-[1vw]">
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-6xl text-blue-100 font-serif select-none">
              “
            </span>
            <p
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="relative z-10 w-full leading-relaxed font-normal text-[#464646] lg:leading-loose text-[1.125rem]"
            >
              Collaborating with Vividify IT solutions gave us the expert
              insights we needed to elevate our company's online presence and
              web development strategy. Early in the process, we introduced an
              unexpected challenge, but their team adapted seamlessly.
            </p>
          </div>

          <div className="flex flex-wrap justify-between items-end pt-[2vw] border-t border-gray-100 gap-4">
            <div
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="flex gap-[1vw] items-center"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                <User size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-normal text-[1.25rem] text-[#111]">
                  Sujan Shrestha
                </h3>
                <p className="text-[#0c5adb] font-normal text-[0.75rem] uppercase tracking-widest">
                  Engineer
                </p>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="flex flex-col items-end"
            >
              <div className="flex items-center gap-2">
                <h4 className="text-[2rem] lg:text-4xl font-normal text-[#111]">
                  4.7
                </h4>
                <div className="flex gap-0.5 text-orange-400">
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                </div>
              </div>
              <p className="text-[0.625rem] font-normal uppercase tracking-tighter text-gray-400">
                50+ Client Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
