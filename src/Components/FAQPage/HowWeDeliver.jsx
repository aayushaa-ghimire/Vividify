// import React from 'react';
// import { Target, Zap, Headphones } from 'lucide-react';

// function HowWeDeliver() {
//   return (
//     <div className="mt-10 flex flex-col gap-10 p-10 font-sans">
//       <div className="mb-12 flex flex-col items-center text-center">
//         <span className="mb-2 text-sm font-bold text-[#0c5adb]">
//           Our Process
//         </span>
//         <h1 className="text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
//           How We Deliver
//         </h1>
//         <div className="mt-4 h-1.5 w-24 rounded-full bg-[#0c5adb]"></div>
//       </div>

//       <div className="flex flex-col gap-6 md:flex-row">
//         <div className="flex flex-1 flex-col items-center gap-6 rounded-lg border-b-4 border-[#0c5adb] bg-[#f4f8ff] p-8 text-center shadow-sm transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#0c5adb] shadow-md">
//             <Target size={30} color="white" strokeWidth={2.5} />
//           </div>

//           <div className="flex flex-col items-center gap-3">
//             <h4 className="w-fit border-b-2 border-[#0c5adb] pb-1 text-xl font-bold text-[#222] lg:text-2xl">
//               Strategy
//             </h4>
//             <p className="text-sm leading-relaxed text-[#686868]">
//               We start by understanding your business objectives, technical
//               needs, and long-term vision. Our team works closely with you to
//               define a clear roadmap.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-1 flex-col items-center gap-6 rounded-lg border-b-4 border-[#0c5adb] bg-[#f4f8ff] p-8 text-center shadow-sm transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#0c5adb] shadow-md">
//             <Zap size={30} color="white" strokeWidth={2.5} />
//           </div>

//           <div className="flex flex-col items-center gap-3">
//             <h4 className="w-fit border-b-2 border-[#0c5adb] pb-1 text-xl font-bold text-[#222] lg:text-2xl">
//               Execution
//             </h4>
//             <p className="text-sm leading-relaxed text-[#686868]">
//               Our experts design and develop scalable, secure, and
//               high-performance solutions using modern technologies and industry
//               best practices.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-1 flex-col items-center gap-6 rounded-lg border-b-4 border-[#0c5adb] bg-[#f4f8ff] p-8 text-center shadow-sm transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#0c5adb] shadow-md">
//             <Headphones size={30} color="white" strokeWidth={2.5} />
//           </div>

//           <div className="flex flex-col items-center gap-3">
//             <h4 className="w-fit border-b-2 border-[#0c5adb] pb-1 text-xl font-bold text-[#222] lg:text-2xl">
//               Support
//             </h4>
//             <p className="text-sm leading-relaxed text-[#686868]">
//               After deployment, we provide continuous support, monitoring, and
//               updates to ensure your system evolves with your business.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HowWeDeliver;



import React from 'react';
import { Target, Zap, Headphones } from 'lucide-react';

function HowWeDeliver() {
  return (
    <div className="mb-20 px-[8vw] py-16 lg:py-24">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">
          Our Process
        </h2>
        <h1 className="text-[2.2rem] font-bold leading-tight text-[#111] lg:text-[3rem]">
          How We Deliver
        </h1>
        <p className="mt-6 max-w-[600px] text-[1.05rem] leading-relaxed text-[#686868]">
          We follow a streamlined approach to ensure your project moves from 
          concept to reality with precision and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Target size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">
            Strategy
          </h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            We start by understanding your business objectives, technical
            needs, and long-term vision to define a clear roadmap.
          </p>
        </div>

        <div className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Zap size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">
            Execution
          </h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            Our experts develop scalable, secure, and high-performance 
            solutions using modern technologies and best practices.
          </p>
        </div>

        <div className="group flex flex-col items-center rounded-[2rem] bg-[#f4f8ff] p-10 text-center transition-all hover:bg-[#eef4ff] hover:shadow-md">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0c5adb] shadow-sm transition-transform group-hover:-rotate-6">
            <Headphones size={32} strokeWidth={1.5} />
          </div>

          <h4 className="mb-4 text-xl font-bold text-[#222]">
            Support
          </h4>
          <p className="text-sm leading-relaxed text-[#686868]">
            After deployment, we provide continuous monitoring and updates 
            to ensure your system evolves with your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeDeliver;