import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex py-[1vw] items-center bg-[#f4f8ff] border-b border-[#e0ecff] sticky top-0 justify-between w-full h-auto text-[1.1rem] z-500 shadow ">
        <div className="">
          <img
            src="/vividify-logo.png"
            alt="logo"
            className="w-30 ml-[3vw] lg:w-45"
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                Service
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-2 border-b font-bold border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                FAQ
              </NavLink>

              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem] font-bold  border-b border-gray-200 hover:text-gray-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `p-3 md:px-10 md:py-5 md:text-[1.2rem]  font-bold  hover:text-blue-800 transition-colors duration-300 transform dark:hover:bg-[#cfd4de92] ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                Contacts
              </NavLink>
            </div>
          </button>
        </MediaQuery>

        {/* Lg Navbar */}
        <MediaQuery minWidth={1000}>
          <div className=" gap-8  items-center justify-between text-[#686868] font-500 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              Service
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-4 py-5 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-4 py-6 hover:text-gray-800 transition-colors duration-300 transform hover:bg-[#cfd4de92] hover:border-blue-500 ${
                  isActive ? 'text-blue-600 bg-blue-50 border-blue-500' : ''
                }`
              }
            >
              Projects
            </NavLink>
          </div>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `rounded-[1vw] px-8 py-4 mr-[3vw] text-sm font-bold transition-all duration-300 active:scale-95 shadow-md hover:shadow-blue-200 ${
                isActive
                  ? 'bg-blue-700 text-white border-2 border-blue-700'
                  : 'bg-[#0c5adb] text-white hover:bg-[#0a4bb3]'
              }`
            }
          >
            Contacts
          </NavLink>
        </MediaQuery>
      </nav>
    </>
  );
}

export default Navbar;
