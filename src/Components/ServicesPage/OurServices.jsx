// import React from 'react';

// function OurServices() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       {/* Background Accent */}
//       <div className="absolute top-0 left-0 hidden h-full w-[30%] bg-[#f4f7ff] lg:block"></div>
      
//       <div className="relative z-10 px-[8vw] py-[5vw]">
//         <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          
//           {/* Left Side: Image Content */}
//           <div className="flex justify-center">
//             <img
//               src="../../public/Servicebanner.png"
//               alt="IT Solutions Team"
//               className="h-auto w-full max-w-[340px] object-contain md:max-w-[400px]"
//             />
//           </div>

//           {/* Right Side: Text Content */}
//           <div className="flex flex-col gap-6 text-left">
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="h-[2px] w-6 bg-[#0c5adb]"></div>
//                 <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0c5adb]">
//                   Our Services
//                 </h2>
//               </div>
              
//               {/* Refined Heading: Adjusted size and leading */}
//               <h1 className="max-w-[500px] text-[2rem] font-bold leading-[1.2] tracking-tight text-[#111] lg:text-[2.6rem]">
//                 Modern IT Solutions for <br />
//                 <span className="mt-1 inline-block text-[#0c5adb]">
//                   Growing Businesses
//                 </span>
//               </h1>
//             </div>

//             <p className="max-w-[460px] text-[1.05rem] font-normal leading-relaxed text-[#555]">
//               We provide simple and smart digital services to make your work
//               easier and faster. We build scalable systems designed for 
//               long-term reliability.
//             </p>

//             <div className="pt-2">
//               <a
//                 href="#"
//                 className="inline-block rounded-md bg-[#0c5adb] px-10 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-[#0948b3] hover:shadow-lg active:scale-95"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurServices;

import React from 'react';

function OurServices() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 hidden h-full w-[30%] bg-[#f4f7ff] lg:block"></div>
      
      {/* THE FIX: Changed py-[5vw] to pb-[5vw] to remove top margin entirely */}
      <div className="relative z-10 px-[8vw] pb-[5vw]">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Image Content */}
          <div className="flex justify-center">
            <img
              src="../../public/Servicebanner.png"
              alt="IT Solutions Team"
              className="h-auto w-full max-w-[340px] object-contain md:max-w-[400px]"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-8 bg-[#0c5adb]"></div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">
                  Our Services
                </h2>
              </div>
              
              <h1 className="max-w-[500px] text-[2.2rem] leading-[1.15] font-bold text-[#111] lg:text-[3rem]">
                Modern IT Solutions for <br />
                <span className="text-[#0c5adb]">Growing Businesses</span>
              </h1>
            </div>

            <p className="max-w-[480px] text-[1.05rem] font-normal leading-relaxed text-[#555]">
              We provide simple and smart digital services to make your work
              easier and faster. We build scalable systems designed for 
              long-term reliability.
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-block rounded-[3vw] bg-[#0c5adb] px-10  py-4 font-semibold text-white shadow-md transition-all hover:bg-[#0948b3] hover:shadow-lg active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurServices;