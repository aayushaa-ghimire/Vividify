import React from 'react';
import {
  LuMegaphone,
  LuMonitorSmartphone,
  LuSearchCheck,
} from 'react-icons/lu';

function WhatWeDo() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#ccdfff] px-6 pt-[15vw] lg:px-0 lg:pt-[5.4vw]">
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-[3vw]">
          <div className="flex w-full flex-col lg:w-[37vw]">
            <p className="text-[1.1rem] font-semibold text-[#0c5adb]">
              WHAT WE DO
            </p>
            <h1 className="text-[1.8rem] leading-tight font-medium lg:text-[2rem]">
              Take the lead in modern Web, App and Software Development
            </h1>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-[40vw] lg:gap-[1vw]">
            <p className="text-[#616161]">
              Together, we help our clients achieve tangible, measurable
              results. Focused on business outcomes — we bring a unique set of
              expertise and skills to the party.
            </p>
            <a
              href="..."
              className="flex w-max rounded-4xl align-middle font-medium underline hover:text-[#0c5adb]"
            >
              Discover More
            </a>
          </div>
        </div>

        <div className="mt-[12vw] flex flex-col gap-8 lg:mt-[8vw] lg:flex-row lg:gap-[2vw]">
          <div className="flex w-full flex-col gap-6 rounded-3xl bg-white p-8 lg:w-[25vw] lg:p-[2.5vw]">
            <div className="flex flex-col gap-6">
              <h4 className="flex min-h-[3.5rem] items-center text-left text-[1.3rem] font-bold">
                Digital Marketing Strategy
              </h4>
              <div className="flex w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-2xl bg-[#eef4ff] p-4 text-[#0c5adb] shadow-sm">
                  <LuMegaphone size={35} />
                </div>
              </div>
            </div>
            <p className="text-left leading-relaxed text-[#616161]">
              Craft a dynamic digital marketing strategy by setting clear goals,
              targeting the right audience, and delivering engaging content.
              Monitor performance and adapt based on insights.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 rounded-3xl bg-white p-8 lg:w-[25vw] lg:p-[2.5vw]">
            <div className="flex flex-col gap-6">
              <h4 className="flex min-h-[3.5rem] items-center text-left text-[1.3rem] font-bold">
                Website / Application Development
              </h4>
              <div className="flex w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-2xl bg-[#eef4ff] p-4 text-[#0c5adb] shadow-sm">
                  <LuMonitorSmartphone size={35} />
                </div>
              </div>
            </div>
            <p className="text-left leading-relaxed text-[#616161]">
              Build a successful website by focusing on user-friendly design,
              responsive functionality, and robust performance, ensuring it
              meets business goals.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 rounded-3xl bg-white p-8 lg:w-[25vw] lg:p-[2.5vw]">
            <div className="flex flex-col gap-6">
              <h4 className="flex min-h-[3.5rem] items-center text-left text-[1.3rem] font-bold">
                Search Engine Optimization
              </h4>
              <div className="flex w-full items-center justify-center">
                <div className="flex items-center justify-center rounded-2xl bg-[#eef4ff] p-4 text-[#0c5adb] shadow-sm">
                  <LuSearchCheck size={35} />
                </div>
              </div>
            </div>
            <p className="text-left leading-relaxed text-[#616161]">
              Effective reporting in seo analysis involves tracking key
              performance metrics, evaluating campaign success, and providing
              actionable insights to optimize strategies.
            </p>
          </div>
        </div>

        <div className="mt-[12vw] flex w-full justify-center lg:mt-[9vw]">
          <img
            src="../../public/home-img.png"
            alt="img"
            className="w-full max-w-[90vw] lg:w-auto"
          />
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
