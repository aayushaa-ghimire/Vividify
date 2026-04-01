// import React from 'react';

// function AboutUs() {
//   return (
//     <div className="px-[8vw] py-16 lg:py-24">
//       <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">

//         {/* Top section */}
//         <div className="flex flex-col items-center gap-4 text-center">
//           <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0c5adb]">
//             Our Story
//           </h4>
//           <h1 className="text-[2.8rem] font-bold leading-tight text-[#111] lg:text-[4rem]">
//             About Us
//           </h1>

//           <div className="mt-2 flex justify-center">
//             <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#686868] lg:text-[1.15rem]">
//               We are a modern IT company focused on building smart, scalable, and efficient digital solutions.
//               Our goal is to help businesses leverage technology to solve real-world problems and achieve sustainable growth.
//               We specialize in web development, software solutions, and data-driven systems designed to deliver seamless performance and exceptional user experiences.
//             </p>
//           </div>

//           <div className="mt-6">
//             <a
//               href="#contact"
//               className="rounded-full bg-[#0c5adb] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-[#0a4cbd] active:scale-95 shadow-lg shadow-blue-500/10"
//             >
//               Contact us
//             </a>
//           </div>
//         </div>

//         <div className="w-full">
//           <img
//             src="/About-banner.jpg"
//             alt="banner"
//             className="h-[350px] w-full rounded-[2.5rem] object-cover shadow-2xl lg:h-[550px]"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React from 'react';

function AboutUs() {
  return (
    <div className="px-[8vw] py-16 lg:py-24 bg-white font-sans">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center bg-[#0c5adb]/5 border border-[#0c5adb]/10 px-5 py-2 rounded-full">
            <span className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-[0.2em]">
              Our Story
            </span>
          </div>

          <h1 className="text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] text-[#0c2946] tracking-tight">
            Driving Digital <span className="text-[#0c5adb]">Innovation.</span>
          </h1>

          <div className="mt-2 flex justify-center">
            <p className="max-w-3xl text-[1.1rem] leading-relaxed text-[#64748b] font-normal">
              We are a modern IT agency focused on building smart, scalable, and
              efficient digital solutions. Our goal is to help businesses
              leverage technology to solve real-world problems and achieve
              sustainable growth. We specialize in web development and
              data-driven systems designed for exceptional user experiences.
            </p>
          </div>

          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-[#0c5adb] px-10 py-4 text-[0.9rem] font-bold text-white transition-all hover:bg-[#0a4cbd] hover:shadow-xl hover:shadow-[#0c5adb]/20 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0c5adb] to-blue-400 rounded-[2rem] lg:rounded-[3rem] opacity-5 blur-2xl transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
            alt="Vividify Team Office"
            className="relative h-[350px] lg:h-[600px] w-full rounded-[2rem] lg:rounded-[3rem] object-cover shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
