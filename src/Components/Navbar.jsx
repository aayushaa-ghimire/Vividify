import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex py-[1vw] items-center bg-[#f4f8ff] border-b border-[#e0ecff] sticky top-0 justify-around w-full h-auto text-[1.1rem] z-500 shadow ">
        <div className="">
          <img
            src="../../public/vividify-logo.png"
            alt="logo"
            className="w-45"
          />
        </div>

        {/* Sm Navbar */}
        <MediaQuery minWidth={0} maxWidth={1000}>
          <button onClick={() => setIsOpen(!isOpen)} className="relative p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute top-full right-0 mt-2 flex flex-col text-[#545353] bg-[#f4f8ff] border border-[#e0ecff] shadow-lg rounded-md min-w-[200px] z-50`}
            >
              <Link
                to="/"
                className="p-3 md:px-10 md:py-2 border-b border-gray-100 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="p-3 md:px-10 md:py-2 border-b border-gray-100 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                About
              </Link>
              <Link
                to="/service"
                className="p-3 md:px-10 md:py-2 border-b border-gray-100 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Service
              </Link>
              <Link
                to="/faq"
                className="p-3 md:px-10 md:py-2 border-b border-gray-100 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                FAQ
              </Link>

              <Link
                to="/contacts"
                className="p-3 md:px-10 md:py-2 border-b border-gray-100 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Contacts
              </Link>

              <Link
                to="/contacts"
                className="p-3 md:px-10 md:py-2 font-semibold text-[#0c5adb] hover:text-blue-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Free Website Audit
              </Link>
            </div>
          </button>
        </MediaQuery>

        {/* Lg Navbar */}
        <MediaQuery minWidth={1000}>
          <div className=" gap-8  items-center justify-between text-[#686868] font-500 ">
            <Link
              to="/"
              className="px-4 py-6  hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              About
            </Link>
            <Link
              to="/service"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500"
            >
              Service
            </Link>
            <Link
              to="/faq"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              FAQ
            </Link>
            <Link
              to="/contacts"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              Contacts
            </Link>
          </div>
          <Link
            to="/contacts"
            className="p-3 lg:p-3   mr-4 text-center bg-[#0c5adb] justify-center text-white text-[1rem] md:text-[0.8rem] md:max-w-max  rounded-2xl hover:bg-blue-700 transition-all   "
          >
            Free Website Audit
          </Link>
        </MediaQuery>
      </nav>
    </>
  );
}

export default Navbar;
