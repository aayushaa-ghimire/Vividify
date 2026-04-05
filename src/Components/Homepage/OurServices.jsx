import React from 'react';
import { Link } from 'react-router-dom';

function OurServices() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <div className="lg:w-1/2 space-y-4">
          <p className="text-[#0c5adb] font-semibold tracking-wide uppercase text-sm">
            Our Services
          </p>
          <h1
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-3xl lg:text-4xl font-bold text-[#333] leading-tight"
          >
            Data-driven, customer-centric <br className="hidden lg:block" />{' '}
            digital services
          </h1>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <p
            data-aos="fade-right"
            data-aos-offset="80"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-[#616161] text-lg leading-relaxed"
          >
            Together, we help our clients achieve tangible, measurable results.
            Focused on business outcomes — we bring a unique set of expertise
            and skills to the party.
          </p>
          <Link
            to={'/service'}
            className="inline-block text-[#0c5adb] font-bold border-b-2 border-[#0c5adb] pb-1 hover:text-[#0a4bb3] hover:border-[#0a4bb3] transition-all"
          >
            Discover More
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
        >
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
            <img
              src="/ser-icon1.png"
              alt="SEO"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">SEO</h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Enhance your visibility with search engine optimization by
            optimizing your content and technical elements.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-[#0c5adb] group-hover:underline"
          >
            Discover More
          </a>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="240"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
        >
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
            <img
              src="/ser-icon2.png"
              alt="Marketing"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">
            Digital Media Marketing
          </h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Boost your brand’s presence through effective digital marketing by
            crafting targeted, data-driven strategies.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-[#0c5adb] group-hover:underline"
          >
            Discover More
          </a>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="260"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
        >
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
            <img
              src="/ser-icon3.png"
              alt="Web Dev"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">
            Website Development
          </h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Build a successful website by focusing on user-friendly design and
            responsive functionality.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-[#0c5adb] group-hover:underline"
          >
            Discover More
          </a>
        </div>

        {/* Card 4 */}
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="290"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
        >
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
            <img
              src="/ser-icon4.png"
              alt="App Dev"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">
            App Development
          </h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Create impactful apps by focusing on user-centric design and
            seamless performance for your users.
          </p>
          <a
            href="#"
            className="text-sm font-bold text-[#0c5adb] group-hover:underline"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
