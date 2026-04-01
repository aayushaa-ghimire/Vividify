import React from 'react';
import { Lightbulb, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';

function GuidingPrinciples() {
  return (
    <div className=" flex flex-col justify-center overflow-hidden bg-white p-[5vw]">
      {/*  Heading */}
      <div className="mb-10 text-center">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-[#0c5adb]"
        ></div>
        <h1
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-[2.5rem]"
        >
          Our Core Values
        </h1>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="140"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col items-center rounded-2xl border border-blue-50 bg-[#f4f8ff] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl md:w-[45%]"
          >
            <div className="mb-4 rounded-xl bg-white p-3 text-[#0c5adb] shadow-sm">
              <Lightbulb size={25} />
            </div>
            <h4 className="mb-2 text-[1.3rem] font-bold text-[#222]">
              Innovation
            </h4>
            <p className="text-base leading-relaxed font-medium text-[#686868]">
              We push technology boundaries to deliver solutions that adapt to
              modern business needs.
            </p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="140"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col items-center rounded-2xl border border-blue-50 bg-[#f4f8ff] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl md:w-[60%]"
          >
            <div className="mb-4 rounded-xl bg-white p-3 text-[#0c5adb] shadow-sm">
              <Rocket size={25} />
            </div>
            <h4 className="mb-2 text-[1.3rem] font-bold text-[#222]">
              Efficiency
            </h4>
            <p className="text-base leading-relaxed font-medium text-[#686868]">
              Our solutions optimize workflows and processes, helping businesses
              achieve more with less effort and resources.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-6 md:flex-row">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="140"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col items-center rounded-2xl border border-blue-50 bg-[#f4f8ff] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl md:w-[60%]"
          >
            <div className="mb-4 rounded-xl bg-white p-3 text-[#0c5adb] shadow-sm">
              <HeartHandshake size={25} />
            </div>
            <h4 className="mb-2 text-[1.3rem] font-bold text-[#222]">
              Customer Success
            </h4>
            <p className="text-base leading-relaxed font-medium text-[#686868]">
              We are committed to our clients’ growth. We provide the tools and
              expertise needed to maximize value.
            </p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="140"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex flex-col items-center rounded-2xl border border-blue-50 bg-[#f4f8ff] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl md:w-[60%]"
          >
            <div className="mb-4 rounded-xl bg-white p-3 text-[#0c5adb] shadow-sm">
              <ShieldCheck size={25} />
            </div>
            <h4 className="mb-2 text-[1.3rem] font-bold text-[#222]">
              Trust & Security
            </h4>
            <p className="leading-relaxed font-medium text-[#686868]">
              We prioritize data protection and transparency, ensuring
              businesses can rely on us for secure compliant solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidingPrinciples;
