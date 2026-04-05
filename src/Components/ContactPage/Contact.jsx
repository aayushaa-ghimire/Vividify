import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="bg-white px-[8vw] py-16">
      <div className="flex flex-col items-center text-center">
        <h2
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]"
        >
          Contact Us
        </h2>
        <h1
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="mb-6 max-w-[800px] text-[2.2rem] font-bold leading-tight text-[#111] lg:text-[3rem]"
        >
          We’re here to build with you.
        </h1>
        <p
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="max-w-[600px] text-[1.05rem] font-normal leading-relaxed text-[#686868]"
        >
          Explore our services and discover the right solutions for your
          needs—from expert consultation to project collaboration.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <h4 className="mb-4 text-xl font-bold text-[#222]">What We Do</h4>
          <p className="mb-8 text-sm font-normal leading-relaxed text-[#555]">
            Discover how we transform ideas into real-world digital solutions
            with precision and care.
          </p>
          <Link
            to={'/service'}
            className="rounded-full bg-[#0c5adb] px-10 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#0948b3] hover:shadow-lg active:scale-95"
          >
            Learn More
          </Link>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <h4 className="mb-4 text-xl font-bold text-[#222]">
            Let’s Build Together
          </h4>
          <p className="mb-8 text-sm font-normal leading-relaxed text-[#555]">
            Have an idea? Let’s collaborate and bring it to life using the
            latest technology.
          </p>
          <a
            href="#"
            className="rounded-full bg-[#0c5adb] px-10 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#0948b3] hover:shadow-lg active:scale-95"
          >
            Collaborate
          </a>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md"
        >
          <h4 className="mb-4 text-xl font-bold text-[#222]">
            Start a Project
          </h4>
          <p className="mb-8 text-sm font-normal leading-relaxed text-[#555]">
            Ready to begin? Reach out and let’s create something impactful for
            your business.
          </p>
          <a
            href="#"
            className="rounded-full bg-[#0c5adb] px-10 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#0948b3] hover:shadow-lg active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
