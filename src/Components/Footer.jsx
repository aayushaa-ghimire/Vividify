// import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <>
//       {/* Main Container */}
//       <div className="mt-[4vw] flex flex-col gap-[2vw] border-t-[0.1vw] border-t-[#686868]/30 bg-[#ccdfff] px-[8vw] py-[5vw]">
//         {/* Top Section */}
//         <div className="flex flex-col items-center justify-between gap-[4vw] lg:flex-row lg:gap-0">
//           <div>
//             <img
//               src="../../public/vividify-logo.png"
//               alt="logo"
//               className="w-[45vw] lg:w-[25vw]"
//             />
//           </div>

//           <div>
//             <p className="w-full text-center text-[#686868] lg:w-[40vw] lg:text-left">
//               Empowering businesses with innovative IT solutions, expert
//               support, and a commitment to excellence for unparalleled growth
//               and success.
//             </p>
//           </div>
//         </div>

//         {/* Mid Section */}
//         <div className="flex w-full flex-col justify-between gap-[5vw] border-y-[0.1vw] border-y-[#686868]/30 py-[3vw] lg:flex-row lg:gap-[2vw] lg:py-[2vw]">
//           <div className="flex w-full flex-row flex-wrap justify-between gap-[8vw] lg:w-auto lg:justify-center lg:gap-[5vw]">
//             <div className="flex flex-col gap-[1.4vw]">
//               <h4 className="text-[1.3rem] font-medium text-[#222222]">
//                 Services
//               </h4>
//               <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
//                 <li>
//                   <a href="...">Website Development</a>
//                 </li>
//                 <li>
//                   <a href="...">Digital Marketing</a>
//                 </li>
//                 <li>
//                   <a href="...">Search Engine Optimization</a>
//                 </li>
//                 <li>
//                   <a href="...">App Development</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="flex flex-col gap-[1.4vw]">
//               <h4 className="text-[1.3rem] font-medium text-[#222222]">Work</h4>
//               <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
//                 <li>
//                   <a href="...">About Us</a>
//                 </li>
//                 <li>
//                   <a href="...">Services</a>
//                 </li>
//                 <li>
//                   <a href="...">Careers</a>
//                 </li>
//                 <li>
//                   <a href="...">Contact</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="flex flex-col gap-[1.4vw]">
//               <h4 className="text-[1.3rem] font-medium text-[#222222]">
//                 Contact Us
//               </h4>
//               <ul className="leading-[6vw] text-[#686868] lg:leading-[2.2vw]">
//                 <li>
//                   <a href="...">Email</a>
//                 </li>
//                 <li>
//                   <a href="...">Phone</a>
//                 </li>
//                 <li>
//                   <a href="...">Location</a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-[3vw] lg:items-start lg:gap-[1.3vw]">
//             <h4 className="text-[1.3rem] font-medium text-[#222222]">
//               Find Us on:
//             </h4>
//             <div className="flex gap-[4vw] text-[#222222] lg:gap-[1vw]">
//               <a href="https://facebook.com" target="_blank">
//                 <span className="text-[1.8rem] text-[#474646]">
//                   <FaFacebook />
//                 </span>
//               </a>
//               <a href="https://instagram.com" target="_blank">
//                 <span className="text-[1.8rem] text-[#474646]">
//                   <FaInstagram />
//                 </span>
//               </a>
//               <a href="https://linkedin.com" target="_blank">
//                 <span className="text-[1.8rem] text-[#474646]">
//                   <FaLinkedin />
//                 </span>
//               </a>
//               <a href="https://wa.me/your-number">
//                 <span className="text-[1.8rem] text-[#474646]">
//                   <FaWhatsapp />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Last Part */}
//         <div className="flex flex-col items-center justify-between gap-[4vw] lg:flex-row lg:gap-0">
//           <p className="text-[#686868]">© Copyrights All rights reserved</p>
//           <ul className="flex gap-[5vw] text-[#686868] lg:gap-[1vw]">
//             <li>Privacy Policy</li>
//             <li>Terms Of Use</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;

// import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <>
//       {/* Main Container: Changed bg to a softer gray and added better padding */}
//       <div className="mt-20 flex flex-col gap-12 border-t border-gray-200 bg-[#f8f9fa] px-[8vw] py-12 lg:py-16">
//         {/* Top Section: Better alignment for Logo and Text */}
//         <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
//           <div className="flex-shrink-0">
//             <img
//               src="../../public/vividify-logo.png"
//               alt="logo"
//               className="w-[40vw] lg:w-[15vw]"
//             />
//           </div>

//           <div>
//             <p className="max-w-md text-center leading-relaxed text-[#686868] lg:text-left">
//               Empowering businesses with innovative IT solutions, expert
//               support, and a commitment to excellence for growth and success.
//             </p>
//           </div>
//         </div>

//         {/* Mid Section: Cleaned up borders and added hover states to links */}
//         <div className="flex w-full flex-col justify-between gap-12 border-y border-gray-200 py-10 lg:flex-row">
//           <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-20">
//             {/* Services Column */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-lg font-bold text-[#222222]">Services</h4>
//               <ul className="flex flex-col gap-2 text-[#686868]">
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Website Development
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Digital Marketing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     SEO
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     App Development
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Work Column */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-lg font-bold text-[#222222]">Company</h4>
//               <ul className="flex flex-col gap-2 text-[#686868]">
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-lg font-bold text-[#222222]">Contact</h4>
//               <ul className="flex flex-col gap-2 text-[#686868]">
//                 <li>Email: info@vividify.com</li>
//                 <li>Phone: +1 234 567 890</li>
//                 <li>Location: Global</li>
//               </ul>
//             </div>
//           </div>

//           {/* Social Icons: Added a simple zoom effect on hover */}
//           <div className="flex flex-col items-center gap-4 lg:items-start">
//             <h4 className="text-lg font-bold text-[#222222]">Follow Us</h4>
//             <div className="flex gap-6 lg:gap-4">
//               {[FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp].map(
//                 (Icon, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
//                   >
//                     <Icon />
//                   </a>
//                 ),
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Part: Clean and professional copyright */}
//         <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#888] lg:flex-row">
//           <p>© {new Date().getFullYear()} Vividify. All rights reserved.</p>
//           <ul className="flex gap-6">
//             <li className="cursor-pointer hover:underline">Privacy Policy</li>
//             <li className="cursor-pointer hover:underline">Terms of Use</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;

// import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="mt-20">
//       {/* Main Container */}
//       <div className="flex flex-col gap-12 border-t border-gray-200 bg-[#f8f9fa] px-[8vw] py-12 lg:py-16">
//         {/* Top Section: Logo and Brief Bio */}
//         <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
//           <div className="flex-shrink-0">
//             <img
//               src="../../public/vividify-logo.png"
//               alt="Vividify Logo"
//               className="w-[45vw] lg:w-[15vw]"
//             />
//           </div>

//           <div className="max-w-md text-center lg:text-left">
//             <p className="leading-relaxed text-[#686868]">
//               Empowering businesses with innovative IT solutions, expert
//               support, and a commitment to excellence for growth and success.
//             </p>
//           </div>
//         </div>

//         {/* Mid Section: Links and Contact Info */}
//         <div className="flex w-full flex-col justify-between gap-12 border-y border-gray-200 py-10 lg:flex-row">
//           {/* Columns Wrapper */}
//           <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-20">
//             {/* Services Column */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-lg font-bold text-[#222222]">Services</h4>
//               <ul className="flex flex-col gap-2 text-[#686868]">
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Website Development
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Digital Marketing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     SEO
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     App Development
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Company Column */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-lg font-bold text-[#222222]">Company</h4>
//               <ul className="flex flex-col gap-2 text-[#686868]">
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Column with Icons */}
//             <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
//               <h4 className="text-lg font-bold text-[#222222]">Contact Us</h4>
//               <ul className="flex flex-col gap-4 text-[#686868]">
//                 <li className="flex items-center gap-3">
//                   <FaEnvelope className="text-lg text-[#0c5adb]" />
//                   <a
//                     href="mailto:info@vividify.com"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     info@vividify.com
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-lg text-[#0c5adb]" />
//                   <a
//                     href="tel:+1234567890"
//                     className="transition-colors hover:text-[#0c5adb]"
//                   >
//                     +1 234 567 890
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-lg text-[#0c5adb]" />
//                   <span>Global Solutions Center</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Social Icons Section */}
//           <div className="flex flex-col items-center gap-5 lg:items-start">
//             <h4 className="text-lg font-bold text-[#222222]">Follow Us</h4>
//             <div className="flex gap-6 lg:gap-4">
//               <a
//                 href="#"
//                 className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
//               >
//                 <FaFacebook />
//               </a>
//               <a
//                 href="#"
//                 className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="#"
//                 className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="#"
//                 className="text-2xl text-[#474646] transition-all hover:scale-110 hover:text-[#0c5adb]"
//               >

//                 <FaWhatsapp />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Part: Copyright and Legal */}
//         <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#888] lg:flex-row">
//           <p>© {new Date().getFullYear()} Vividify. All rights reserved.</p>
//           <ul className="flex gap-8">
//             <li className="cursor-pointer hover:underline">Privacy Policy</li>
//             <li className="cursor-pointer hover:underline">Terms of Use</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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

function Footer() {
  return (
    <footer className="mt-20">
      {/* Main Container */}
      <div className="flex flex-col gap-12 border-t border-gray-200 bg-[#f8f9fa] px-[8vw] py-12 lg:py-16">
        {/* Top Section: Logo and Brief Bio */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex-shrink-0">
            <img
              src="../../public/vividify-logo.png"
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

        {/* Mid Section: Links and Contact Info */}
        <div className="flex w-full flex-col justify-between gap-12 border-y border-gray-200 py-10 lg:flex-row">
          {/* Columns Wrapper */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-20">
            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#222222]">Services</h4>
              <ul className="flex flex-col gap-2 text-[#686868]">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Website Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    SEO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    App Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#222222]">Company</h4>
              <ul className="flex flex-col gap-2 text-[#686868]">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#0c5adb]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column: Icons now match text color and hover state */}
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <h4 className="text-lg font-bold text-[#222222]">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-[#686868]">
                {/* Email */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaEnvelope className="text-lg" />
                  <a href="mailto:info@vividify.com">info@vividify.com</a>
                </li>
                {/* Phone */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaPhoneAlt className="text-lg" />
                  <a href="tel:+1234567890">+1 234 567 890</a>
                </li>
                {/* Location */}
                <li className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#0c5adb]">
                  <FaMapMarkerAlt className="text-lg" />
                  <span>Global Solutions Center</span>
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
