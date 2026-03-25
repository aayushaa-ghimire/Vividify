import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Main Container: Added border-t-[0.1vw] to match your mid-section style */}
      <div className="mt-[4vw] flex flex-col gap-[2vw] border-t-[0.1vw] border-t-[#686868]/30 bg-[#f8fafc] px-[8vw] py-[5vw]">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-[4vw] lg:flex-row lg:gap-0">
          <div>
            <img
              src="../../public/vividify-logo.png"
              alt="logo"
              className="w-[45vw] lg:w-[25vw]"
            />
          </div>

          <div>
            <p className="w-full text-center text-[#686868] lg:w-[40vw] lg:text-left">
              Empowering businesses with innovative IT solutions, expert
              support, and a commitment to excellence for unparalleled growth
              and success.
            </p>
          </div>
        </div>

        {/* Mid Section */}
        <div className="flex w-full flex-col justify-between gap-[5vw] border-y-[0.1vw] border-y-[#686868]/30 py-[3vw] lg:flex-row lg:gap-[2vw] lg:py-[2vw]">
          <div className="flex w-full flex-row flex-wrap justify-between gap-[8vw] lg:w-auto lg:justify-center lg:gap-[5vw]">
            <div className="flex flex-col gap-[1.4vw]">
              <h4 className="text-[1.3rem] font-medium text-[#222222]">
                Services
              </h4>
              <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
                <li>
                  <a href="...">Website Development</a>
                </li>
                <li>
                  <a href="...">Digital Marketing</a>
                </li>
                <li>
                  <a href="...">Search Engine Optimization</a>
                </li>
                <li>
                  <a href="...">App Development</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[1.4vw]">
              <h4 className="text-[1.3rem] font-medium text-[#222222]">Work</h4>
              <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
                <li>
                  <a href="...">About Us</a>
                </li>
                <li>
                  <a href="...">Services</a>
                </li>
                <li>
                  <a href="...">Careers</a>
                </li>
                <li>
                  <a href="...">Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[1.4vw]">
              <h4 className="text-[1.3rem] font-medium text-[#222222]">
                Contact Us
              </h4>
              <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
                <li>
                  <a href="...">Email</a>
                </li>
                <li>
                  <a href="...">Phone</a>
                </li>
                <li>
                  <a href="...">Location</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[3vw] lg:items-start lg:gap-[1.3vw]">
            <h4 className="text-[1.3rem] font-medium text-[#222222]">
              Find Us on:
            </h4>
            <div className="flex gap-[4vw] text-[#222222] lg:gap-[1vw]">
              <a href="https://facebook.com" target="_blank">
                <span className="text-[1.8rem] text-[#474646]">
                  <FaFacebook />
                </span>
              </a>
              <a href="https://instagram.com" target="_blank">
                <span className="text-[1.8rem] text-[#474646]">
                  <FaInstagram />
                </span>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <span className="text-[1.8rem] text-[#474646]">
                  <FaLinkedin />
                </span>
              </a>
              <a href="https://wa.me/your-number">
                <span className="text-[1.8rem] text-[#474646]">
                  <FaWhatsapp />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Last Part */}
        <div className="flex flex-col items-center justify-between gap-[4vw] lg:flex-row lg:gap-0">
          <p className="text-[#686868]">© Copyrights All rights reserved</p>
          <ul className="flex gap-[5vw] text-[#686868] lg:gap-[1vw]">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
