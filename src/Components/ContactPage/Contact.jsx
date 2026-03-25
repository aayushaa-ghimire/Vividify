import React from 'react';

function Contact() {
  return (
    <>
      {/* Main Container*/}
      <div className="flex flex-col gap-[2vw] p-6 lg:p-[3vw]">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <div className="flex">
            <span className="w-fit rounded-3xl border border-[#504D4D]/20 p-3 shadow-md lg:p-[1vw]">
              <p className="font-medium text-[#0c5adb]">Contact Us</p>
            </span>
          </div>

          <div>
            <h1 className="text-[2rem] leading-tight font-bold lg:text-[2.4rem]">
              We’re here to build with you.
            </h1>
          </div>

          <div>
            <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
              Explore our services and discover the right solutions for your
              needs—from expert consultation to project collaboration and
              development.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-8 flex flex-col justify-center gap-8 lg:flex-row lg:gap-[4.5vw]">
          {/* Card 1 */}
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg lg:w-[25vw] lg:gap-[1vw] lg:p-[2vw]">
            <h4 className="text-center text-[1.3rem] font-medium lg:text-left">
              What We Do
            </h4>

            <p className="w-full text-center leading-relaxed text-[#454545] lg:w-[16vw] lg:text-left lg:leading-loose">
              Discover how we transform ideas into real-world digital solutions.
            </p>

            <div className="mt-2 flex justify-center lg:mt-0">
              <a
                href="...."
                className="rounded-full bg-[#0c5adb] px-6 py-2 text-white transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg lg:w-[25vw] lg:gap-[1vw] lg:p-[2vw]">
            <h4 className="text-center text-[1.3rem] font-medium lg:text-left">
              Let’s Build Together
            </h4>

            <p className="w-full text-center leading-relaxed text-[#454545] lg:w-[16vw] lg:text-left lg:leading-loose">
              Have an idea? Let’s collaborate and bring it to life.
            </p>

            <div className="mt-2 flex justify-center lg:mt-0">
              <a
                href="..."
                className="rounded-full bg-[#0c5adb] px-6 py-2 text-white transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg lg:w-[25vw] lg:gap-[1vw] lg:p-[2vw]">
            <h4 className="text-center text-[1.3rem] font-medium lg:text-left">
              Start a Project
            </h4>

            <p className="w-full text-center leading-relaxed text-[#454545] lg:w-[16vw] lg:text-left lg:leading-loose">
              Ready to begin? Reach out and let’s create something impactful.
            </p>

            <div className="mt-2 flex justify-center lg:mt-0">
              <a
                href="..."
                className="rounded-full bg-[#0c5adb] px-6 py-2 text-white transition-all hover:bg-[#2045d6] lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
