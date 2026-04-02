import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex py-[1vw] items-center bg-[#f4f8ff] border-b border-[#e0ecff] sticky top-0 justify-between w-full h-auto text-[1.1rem] z-500 shadow ">
        <div className="">
          <img
            src="../../public/vividify-logo.png"
            alt="logo"
            className="w-45 ml-[3vw]"
          />
        </div>

        {/* Sm Navbar */}
        <MediaQuery minWidth={0} maxWidth={1000}>
          <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 ">
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
              } absolute top-full  right-0 mt-2 flex flex-col text-[#545353] bg-[#f4f8ff] text-left md:text-center w-[50vw] border-[#e0ecff] shadow-xl min-w-[200px] z-50 transform transition-all duration-300`}
            >
              <Link
                to="/"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b   border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold  border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                About
              </Link>
              <Link
                to="/service"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Service
              </Link>
              <Link
                to="/faq"
                className="p-3 md:px-10 md:py-2 border-b font-bold border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                FAQ
              </Link>

              <Link
                to="/blogs"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Blogs
              </Link>
              <Link
                to="/projects"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold  border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Projects
              </Link>

              <Link
                to="/contacts"
                className="p-3 md:px-10 md:py-5 md:text-[1.2rem]  font-bold  hover:text-blue-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92]"
              >
                Contacts
              </Link>
            </div>
          </button>
        </MediaQuery>

        {/* Lg Navbar */}
        <MediaQuery minWidth={1000}>
          <div className=" gap-8  items-center justify-between text-[#686868] font-500 ">
            <Link
              to="/"
              className="px-4 py-5  hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              About
            </Link>
            <Link
              to="/service"
              className="px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500"
            >
              Service
            </Link>
            <Link
              to="/faq"
              className="px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              FAQ
            </Link>
            <Link
              to="/blogs"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              Blogs
            </Link>
            <Link
              to="/projects"
              className="px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92]  hover:border-blue-500"
            >
              Projects
            </Link>
          </div>
          <Link
            to="/contacts"
            className="rounded-[1vw] bg-[#0c5adb] text-white px-8 py-4 mr-[3vw] text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
          >
            Contacts
          </Link>
        </MediaQuery>
      </nav>
    </>
  );
}

export default Navbar;
