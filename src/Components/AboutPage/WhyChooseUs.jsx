import React from 'react';

function WhyChooseUs() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-12 px-20 py-24 bg-white items-start">
      {/* Left Content Side */}
      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-bold tracking-[0.2em] text-[#0c5adb] uppercase">
            Why Choose Us
          </h4>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-[#111]">
            Driving Your Success with{' '}
            <span className="text-[#0c5adb]">Trusted IT Solutions</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="rounded-2xl border border-blue-50 bg-[#f4f8ff] p-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <p className="text-base leading-relaxed text-[#403f3f]">
              <span className="font-bold text-[#111]">Expert Team:</span> Our
              team of skilled professionals delivers smart, result-driven
              solutions with precision and expertise.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="rounded-2xl border border-blue-50 bg-[#f4f8ff] p-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <p className="text-base leading-relaxed text-[#403f3f]">
              <span className="font-bold text-[#111]">
                Customized Solutions:
              </span>{' '}
              We create customized strategies that align perfectly with your
              unique business goals.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="rounded-2xl border border-blue-50 bg-[#f4f8ff] p-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <p className="text-base leading-relaxed text-[#403f3f]">
              <span className="font-bold text-[#111]">
                End-to-End Services:
              </span>{' '}
              We provide seamless support at every stage, from initial concept
              to final execution.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="rounded-2xl border border-blue-50 bg-[#f4f8ff] p-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <p className="text-base leading-relaxed text-[#403f3f]">
              <span className="font-bold text-[#111]">
                Long-Term Partnership:
              </span>{' '}
              We are committed to building long-term relationships based on
              trust and continuous growth.
            </p>
          </div>
        </div>
      </div>

      {/* Right Pricing Cards Side */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full lg:w-1/2 justify-center">
        {/* Light Card */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col w-full sm:w-[280px] p-10 items-center text-center bg-white rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="mb-6 p-4 bg-blue-50 rounded-2xl">
            <img
              src="../../public/pricing-icon.png"
              alt="icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="text-xl font-bold text-[#222] mb-3">Website Plan</h4>
          <p className="text-sm text-[#555] leading-relaxed mb-6 border-b border-gray-100 pb-6">
            We create a user-friendly website with fast performance
          </p>
          <div className="text-sm font-medium leading-[2.5] text-[#444] mb-8">
            Modern design <br /> Lead Forms <br />
            Responsive Design
            <br />
            24/7 Support
          </div>
          <a
            href="#"
            className="w-full rounded-xl bg-gray-100 text-black px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0c5adb] hover:text-white hover:shadow-lg active:scale-95"
          >
            Purchase
          </a>
        </div>

        {/* Dark Card */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="290"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col w-full sm:w-[280px] p-10 items-center text-center bg-[#000049] text-white rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="mb-6 p-4 bg-white/10 rounded-2xl">
            <img
              src="../../public/pricing-icon.png"
              alt="icon"
              className="w-12 h-12 object-contain brightness-0 invert"
            />
          </div>
          <h4 className="text-xl font-bold mb-3">Website Plan</h4>
          <p className="text-sm text-blue-100/80 leading-relaxed mb-6 border-b border-white/10 pb-6">
            We create a user-friendly website with fast performance
          </p>
          <div className="text-sm font-medium leading-[2.5] text-white/90 mb-8">
            Modern design <br /> Lead Forms <br />
            Responsive Design
            <br />
            24/7 Support
          </div>
          <a
            href="#"
            className="w-full rounded-xl bg-[#0c5adb] text-white px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-white hover:text-[#000049] hover:shadow-lg active:scale-95"
          >
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
