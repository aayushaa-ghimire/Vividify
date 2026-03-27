import React from 'react';

function ITSupport() {
  return (
    <>
      <div className="mt-[8vw] flex gap-[4vw]">
        <div>
          <img src="../../public/about-page.png" alt="img" />
        </div>

        <div className="flex w-[50vw] flex-col gap-[200px]">
          {/* heading */}
          <div className="flex flex-col">
            <h4 className="text-[1rem] font-medium text-[#0c5adb]">
              IT Support for Business
            </h4>
            <h1 className="text-[1.8rem] leading-tight font-bold lg:text-[2rem]">
              Empowering Business with
              <br /> IT Solution.
            </h1>
          </div>

          {/* paragraphs */}
          <div className="flex flex-col gap-[2vw]">
            <div>
              <p className="lg: leading-relaxed text-[#686868] lg:leading-relaxed">
                At Vividify Solutions, we are passionate about transforming
                businesses through innovative technology solutions. Founded with
                the vision to help companies leverage the power of digital
                transformation, we provide a comprehensive range of IT and
                digital services that drive growth, enhance efficiency, and
                elevate customer experiences. From software development to
                digital marketing and graphic design, we offer end-to-end
                solutions that empower businesses to thrive in today’s
                competitive landscape.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="leading-loose">
                <p>Innovate Smarter</p>
                <p>Empower Growth</p>
              </div>
              <div>
                {/* icon */}
                Solution Oriented
              </div>
            </div>
          </div>
          <div className="flex w-fit bg-[#eff6fd] p-[1.5vw]">
            {/* icon */}
            If your business faces technical challenges, you deserve the very
            best IT solutions by your side.
          </div>
        </div>
      </div>
    </>
  );
}

export default ITSupport;
