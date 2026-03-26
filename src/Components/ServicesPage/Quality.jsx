import React from 'react';

function Quality() {
  return (
    <>
      <div className="flex flex-col gap-[8vw] px-[8vw] py-[5vw]">
        <div className="flex justify-around">
          <h1 className="text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-[2rem]">
            Focusing on quality,
            <span className="text-[#0c5adb]"> we maintain client's trust</span>
          </h1>
          <p className="text-[1rem] leading-relaxed font-medium text-[#686868] lg:w-[40vw] lg:leading-loose">
            We ensure that every solution we develop undergoes strict quality
            checks. We build scalable and efficient systems designed for
            long-term reliability and growth.
          </p>
        </div>

        <div className="flex justify-around gap-[0.6vw]">
          <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-[#dee8f9] p-8 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 hover:shadow-2xl">
            Item 1
          </div>
          <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-[#dee8f9] p-8 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 hover:shadow-2xl">
            Item 2
          </div>
          <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-[#dee8f9] p-8 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 hover:shadow-2xl">
            Item 3
          </div>
          <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-[#dee8f9] p-8 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 hover:shadow-2xl">
            Item 4
          </div>
          <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-[#dee8f9] p-8 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 hover:shadow-2xl">
            Item 5
          </div>
        </div>
      </div>
    </>
  );
}

export default Quality;
