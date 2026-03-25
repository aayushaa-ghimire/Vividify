import React from 'react';

function OurServices() {
  return (
    <>
      <div className="mt-[20vw] mb-[10vw] flex flex-col items-center px-6 lg:mt-[15vw] lg:mb-[5.6vw] lg:px-0">
        <div className="mb-[10vw] flex w-full flex-col justify-center gap-10 lg:mb-[5vw] lg:flex-row lg:gap-0">
          <div className="flex w-full flex-col gap-4 lg:w-[42vw] lg:gap-[1.5vw]">
            <p className="text-[1.2rem] text-[#0c5adb]">Our Services</p>
            <h1 className="text-[1.8rem] leading-tight font-medium lg:text-[2.19rem]">
              Data-driven, customer-centric digital services
            </h1>
          </div>
          <div className="flex w-full flex-col gap-4 lg:w-[42vw] lg:gap-[1.5vw]">
            <p className="text-[1rem] text-[#616161] lg:text-[1.3vw]">
              Together, we help our clients achieve tangible, measurable
              results. Focused on business outcomes — we bring a unique set of
              expertise and skills to the party.
            </p>
            <a
              href="..."
              className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
            >
              Discover More
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-6 px-0 lg:w-[100vw] lg:flex-row lg:gap-[2vw] lg:px-[5.3vw]">
          {/* Card 1 */}
          <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
            <img
              src="../../public/ser-icon1.png"
              alt="img"
              className="w-16 lg:w-[5vw]"
            />
            <h4 className="text-[1.4rem] font-medium">SEO</h4>
            <p className="text-[#616161]">
              Enhance your visibility with search engine optimization by
              optimizing your website’s content, structure, and technical
              elements to rank higher.
            </p>
            <a
              href="..."
              className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
            >
              Discover More
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
            <img
              src="../../public/ser-icon2.png"
              alt="img"
              className="w-16 lg:w-[5vw]"
            />
            <h4 className="text-[1.4rem] font-medium">
              Digital Media Marketing
            </h4>
            <p className="text-[#616161]">
              Boost your brand’s presence through effective digital marketing by
              crafting targeted content and leveraging data-driven strategies.
            </p>
            <a
              href="..."
              className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
            >
              Discover More
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
            <img
              src="../../public/ser-icon3.png"
              alt="img"
              className="w-16 lg:w-[5vw]"
            />
            <h4 className="text-[1.4rem] font-medium">Website Development</h4>
            <p className="text-[#616161]">
              Build a successful website by focusing on user-friendly design,
              responsive functionality, and robust performance for visitors.
            </p>
            <a
              href="..."
              className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
            >
              Discover More
            </a>
          </div>

          {/* Card 4 */}
          <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
            <img
              src="../../public/ser-icon4.png"
              alt="img"
              className="w-16 lg:w-[5vw]"
            />
            <h4 className="text-[1.4rem] font-medium">App Development</h4>
            <p className="text-[#616161]">
              Create impactful apps by focusing on user-centric design, seamless
              functionality, and robust performance for your users.
            </p>
            <a
              href="..."
              className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
