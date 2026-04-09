import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      {/* Main Container */}
      <div className="flex flex-col gap-12 border-t border-gray-200 bg-[#f8f9fa] px-[8vw] py-12 lg:py-16">
        {/* Top Section*/}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex-shrink-0">
            <img
              src="/vividify-logo.png"
              alt="Vividify Logo"
              className="w-[45vw] lg:w-[15vw]"
            />
          </div>

          <div className="max-w-md text-center lg:text-left">
            <p className="leading-relaxed text-[#686868]">
              Empowering businesses with innovative IT solutions, expert
              support, and a commitment to excellence for growth and success.
            </p>
          </div>
        </div>

        {/* Mid Section*/}
        <div className="flex w-full flex-col justify-between gap-12 border-y border-gray-200 py-10 lg:flex-row">
          {/* Columns Wrapper */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-20">
            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#222222]">Services</h4>
              <ul className="flex flex-col gap-2 text-[#686868]">
                <li className="transition-colors hover:text-[#0c5adb]">
                  Website Development
                </li>
                <li className="transition-colors hover:text-[#0c5adb]">
                  Digital Marketing
                </li>
                <li className="transition-colors hover:text-[#0c5adb]"> SEO</li>
                <li className="transition-colors hover:text-[#0c5adb]">
                  App Development
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#222222]">Company</h4>
              <ul className="flex flex-col gap-2 text-[#686868]">
                <li>
                  <Link
                    to={'/about'}
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/service'}
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/contacts'}
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column*/}
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <h4 className="text-lg font-bold text-[#222222]">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-[#686868]">
                {/* Email */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaEnvelope className="text-lg" />
                  info@vividify.com
                </li>
                {/* Phone */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaPhoneAlt className="text-lg" />
                  9708763889
                </li>
                {/* Location */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaMapMarkerAlt className="text-lg" />
                  <span>Jwagal Madhu Marg, Lalitpur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <h4 className="text-lg font-bold text-[#222222]">Follow Us</h4>
            <div className="flex gap-6 lg:gap-4">
              <a
                href="#"
                className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part: Copyright and Legal */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#888] lg:flex-row">
          <p>© {new Date().getFullYear()} Vividify. All rights reserved.</p>
          <ul className="flex gap-8">
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:underline">Terms of Use</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
