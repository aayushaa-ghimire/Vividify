import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex items-center  bg-[white] sticky top-0 justify-around w-full h-auto text-[1.1rem] shadow">
        <img src="../../public/vividify-logo.png" alt="logo" className="w-45" />
        <div className="hidden md:flex gap-8 items-center text-[#686868] font-500">
          <Link to="/" className="p-5">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/tools">Tools</Link>
        </div>
        <div className="p-4 mr-6 bg-[#0c5adb] text-white  rounded-4xl  hover:bg-blue-700 transition-all">
          <span className="px-8">Free Website Audit</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
