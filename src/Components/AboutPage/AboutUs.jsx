// import React from 'react';

// function AboutUs() {
//   return (
//     <div className="mb-20 px-[8vw] py-10 lg:py-16">
//       <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        
//         {/* heading */}
//         <div className="flex flex-col gap-2">
//           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0c5adb]">
//             Our Story
//           </h4>
//           <h1 className="text-[2.2rem] font-bold leading-tight text-[#111] lg:text-[2.8rem]">
//             About Us
//           </h1>
//         </div>

//         {/* paragraphs */}
//         <p className="max-w-3xl text-[0.95rem] leading-relaxed text-[#686868] lg:text-[1.05rem]">
//           We are a modern IT company focused on building smart, scalable,
//           and efficient digital solutions. Our goal is to help businesses
//           leveraging technology to solve real-world problems and achieve
//           sustainable growth. We specialize in web development, software
//           solutions, and data-driven systems designed to deliver seamless
//           performance and exceptional user experiences.
//         </p>

//         <div className="mt-2">
//           <a
//             href="#contact"
//             className="rounded-full bg-[#0c5adb] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#0a4cbd] active:scale-95"
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Modern Image Layout */}
//         <div className="relative mt-4 w-full">
//           {/* Subtle background layer to give it depth */}
//           <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-gray-100 lg:translate-x-5 lg:translate-y-5"></div>
          
//           <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl">
//             <img
//               src="/About-banner.jpg"
//               alt="banner"
//               className="h-[300px] w-full object-cover lg:h-[480px]"
//             />
//             {/* Soft dark gradient on the bottom only */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default AboutUs;


import React from 'react';

function AboutUs() {
  return (
    <div className="px-[8vw] py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        
        {/* Top section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0c5adb]">
            Our Story
          </h4>
          <h1 className="text-[2.8rem] font-bold leading-tight text-[#111] lg:text-[4rem]">
            About Us
          </h1>
          
          <div className="mt-2 flex justify-center">
            <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#686868] lg:text-[1.15rem]">
              We are a modern IT company focused on building smart, scalable, and efficient digital solutions. 
              Our goal is to help businesses leverage technology to solve real-world problems and achieve sustainable growth. 
              We specialize in web development, software solutions, and data-driven systems designed to deliver seamless performance and exceptional user experiences.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="#contact"
              className="rounded-full bg-[#0c5adb] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-[#0a4cbd] active:scale-95 shadow-lg shadow-blue-500/10"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Banner - Full Width & Clean */}
        <div className="w-full">
          <img
            src="/About-banner.jpg"
            alt="banner"
            className="h-[350px] w-full rounded-[2.5rem] object-cover shadow-2xl lg:h-[550px]"
          />
        </div>
        
      </div>
    </div>
  );
}

export default AboutUs;