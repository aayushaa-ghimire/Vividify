import React from 'react';
import { Link } from 'react-router-dom';

function ServiceBanner() {
  return (
    <div className="mt-15 mb-[15] px-[5vw] lg:px-[10vw] lg:mb-[8vw] font-sans">
      <div className="flex flex-col items-center justify-between gap-10 rounded-[3rem] bg-[#0c5adb] p-12 lg:flex-row lg:p-20">
        <div
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col gap-5 text-center lg:text-left"
        >
          <h2 className="text-[2.5rem] lg:text-[4rem] font-extrabold leading-[1.1] text-white tracking-tight">
            Let’s Create <br />
            Something Together
          </h2>

          <p className="max-w-md text-[1.1rem] font-normal text-white/90">
            Custom digital solutions designed to help your business stand out in
            a crowded market.
          </p>
        </div>

        <div>
          <Link
            to={'/contacts'}
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex items-center justify-center rounded-2xl bg-white px-9 py-4 text-[1rem] font-bold text-[#0c5adb] transition-all duration-300 hover:bg-[#f8faff]  shadow-sm"
          >
            Drop us a Text
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
