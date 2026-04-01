// import React from 'react';

// function ServiceBanner() {
//   return (
//     <div className="my-24 px-[5vw] lg:px-[10vw]">
//       <div className="flex flex-col items-center justify-between gap-12 rounded-[2.5rem] border border-white/60 bg-gradient-to-r from-[#d8e9ff] via-[#ebf3ff] to-[#fbfbff] p-12 shadow-xl lg:flex-row lg:p-20">
//         <div className="flex flex-col gap-6 text-center lg:text-left">
//           <h2 className="text-5xl leading-[1.1] font-bold tracking-tight text-[#111] lg:text-6xl">
//             Let’s Create <br />
//             <span className="text-[#0c5adb]">Something</span> Together
//           </h2>

//           <p className="max-w-md text-lg font-medium text-[#333] opacity-80 lg:text-xl">
//             Custom digital solutions designed to help your business stand out.
//           </p>
//         </div>

//         <div>
//           <a
//             href="#"
//             className="inline-block rounded-full bg-white px-10 py-5 text-xl font-medium text-[#0c5adb] shadow-lg transition-all duration-300 hover:bg-[#0c5adb] hover:text-white active:scale-95"
//           >
//             Drop us a Text
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceBanner;

import React from 'react';

function ServiceBanner() {
  return (
    <div className="my-24 px-[5vw] lg:px-[10vw] font-sans">
      <div className="flex flex-col items-center justify-between gap-10 rounded-[3rem] bg-[#0c5adb] p-12 lg:flex-row lg:p-20">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h2 className="text-[2.5rem] lg:text-[4rem] font-extrabold leading-[1.1] text-white tracking-tight">
            Let’s Create <br />
            Something Together
          </h2>

          <p className="max-w-md text-[1.1rem] font-normal text-white/90">
            Custom digital solutions designed to help your business stand out in
            a crowded market.
          </p>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center justify-center rounded-2xl bg-white px-9 py-4 text-[1rem] font-bold text-[#0c5adb] transition-all duration-300 hover:bg-[#f8faff]  shadow-sm"
          >
            Drop us a Text
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
