import React from 'react';

function ServiceBanner() {
  return (
    <>
      <div className="mt-[5vw] mb-[10vw] flex w-full items-center justify-center gap-[4vw] rounded-3xl bg-gradient-to-r from-[#99c2ff] via-[#ccdfff] to-[#e0f0ff] p-[8vw] shadow-inner shadow-lg">
        <h1 className="text-shadow-2xl w-[30vw] text-[2rem] leading-tight font-medium lg:text-[2.5rem]">
          Lets Create Something Together
        </h1>
        <a
          href="...."
          className="rounded-full bg-[#0c5adb] px-6 py-2 text-white shadow-2xl transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
        >
          Drop us a Text
        </a>
      </div>
    </>
  );
}

export default ServiceBanner;
