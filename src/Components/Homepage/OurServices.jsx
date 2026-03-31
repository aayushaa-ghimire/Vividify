// import React from 'react';

// function OurServices() {
//   return (
//     <>
//       <div className="mt-[20vw] mb-[10vw] flex flex-col items-center px-6 lg:mt-[15vw] lg:mb-[5.6vw] lg:px-0">
//         <div className="mb-[10vw] flex w-full flex-col justify-center gap-10 lg:mb-[5vw] lg:flex-row lg:gap-0">
//           <div className="flex w-full flex-col gap-4 lg:w-[42vw] lg:gap-[1.5vw]">
//             <p className="text-[1.2rem] text-[#0c5adb]">Our Services</p>
//             <h1 className="text-[1.8rem] leading-tight font-medium lg:text-[2.19rem]">
//               Data-driven, customer-centric digital services
//             </h1>
//           </div>
//           <div className="flex w-full flex-col gap-4 lg:w-[42vw] lg:gap-[1.5vw]">
//             <p className="text-[1rem] text-[#616161] lg:text-[1.3vw]">
//               Together, we help our clients achieve tangible, measurable
//               results. Focused on business outcomes — we bring a unique set of
//               expertise and skills to the party.
//             </p>
//             <a
//               href="..."
//               className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
//             >
//               Discover More
//             </a>
//           </div>
//         </div>

//         <div className="flex w-full flex-col justify-center gap-6 px-0 lg:w-[100vw] lg:flex-row lg:gap-[2vw] lg:px-[5.3vw]">
//           {/* Card 1 */}
//           <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
//             <img
//               src="../../public/ser-icon1.png"
//               alt="img"
//               className="w-16 lg:w-[5vw]"
//             />
//             <h4 className="text-[1.4rem] font-medium">SEO</h4>
//             <p className="text-[#616161]">
//               Enhance your visibility with search engine optimization by
//               optimizing your website’s content, structure, and technical
//               elements to rank higher.
//             </p>
//             <a
//               href="..."
//               className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
//             >
//               Discover More
//             </a>
//           </div>

//           {/* Card 2 */}
//           <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
//             <img
//               src="../../public/ser-icon2.png"
//               alt="img"
//               className="w-16 lg:w-[5vw]"
//             />
//             <h4 className="text-[1.4rem] font-medium">
//               Digital Media Marketing
//             </h4>
//             <p className="text-[#616161]">
//               Boost your brand’s presence through effective digital marketing by
//               crafting targeted content and leveraging data-driven strategies.
//             </p>
//             <a
//               href="..."
//               className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
//             >
//               Discover More
//             </a>
//           </div>

//           {/* Card 3 */}
//           <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
//             <img
//               src="../../public/ser-icon3.png"
//               alt="img"
//               className="w-16 lg:w-[5vw]"
//             />
//             <h4 className="text-[1.4rem] font-medium">Website Development</h4>
//             <p className="text-[#616161]">
//               Build a successful website by focusing on user-friendly design,
//               responsive functionality, and robust performance for visitors.
//             </p>
//             <a
//               href="..."
//               className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
//             >
//               Discover More
//             </a>
//           </div>

//           {/* Card 4 */}
//           <div className="flex w-full flex-col gap-6 rounded-3xl border-1 border-[#0d5bdb] bg-[#E8F0FD]/50 p-8 lg:w-auto lg:gap-[2vw] lg:p-[2vw]">
//             <img
//               src="../../public/ser-icon4.png"
//               alt="img"
//               className="w-16 lg:w-[5vw]"
//             />
//             <h4 className="text-[1.4rem] font-medium">App Development</h4>
//             <p className="text-[#616161]">
//               Create impactful apps by focusing on user-centric design, seamless
//               functionality, and robust performance for your users.
//             </p>
//             <a
//               href="..."
//               className="flex w-max items-center rounded-4xl text-[1.2rem] font-medium underline"
//             >
//               Discover More
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurServices;


import React from 'react';

function OurServices() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <div className="lg:w-1/2 space-y-4">
          <p className="text-[#0c5adb] font-semibold tracking-wide uppercase text-sm">Our Services</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#333] leading-tight">
            Data-driven, customer-centric <br className="hidden lg:block" /> digital services
          </h1>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <p className="text-[#616161] text-lg leading-relaxed">
            Together, we help our clients achieve tangible, measurable results. 
            Focused on business outcomes — we bring a unique set of expertise 
            and skills to the party.
          </p>
          <a
            href="#"
            className="inline-block text-[#0c5adb] font-bold border-b-2 border-[#0c5adb] pb-1 hover:text-[#0a4bb3] hover:border-[#0a4bb3] transition-all"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
             <img src="/ser-icon1.png" alt="SEO" className="w-8 h-8 object-contain" />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">SEO</h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Enhance your visibility with search engine optimization by optimizing your content and technical elements.
          </p>
          <a href="#" className="text-sm font-bold text-[#0c5adb] group-hover:underline">
            Discover More
          </a>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
             <img src="/ser-icon2.png" alt="Marketing" className="w-8 h-8 object-contain" />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">Digital Media Marketing</h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Boost your brand’s presence through effective digital marketing by crafting targeted, data-driven strategies.
          </p>
          <a href="#" className="text-sm font-bold text-[#0c5adb] group-hover:underline">
            Discover More
          </a>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
             <img src="/ser-icon3.png" alt="Web Dev" className="w-8 h-8 object-contain" />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">Website Development</h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Build a successful website by focusing on user-friendly design and responsive functionality.
          </p>
          <a href="#" className="text-sm font-bold text-[#0c5adb] group-hover:underline">
            Discover More
          </a>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col p-8 rounded-[2rem] border border-gray-100 bg-[#f8fbff] hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
          <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
             <img src="/ser-icon4.png" alt="App Dev" className="w-8 h-8 object-contain" />
          </div>
          <h4 className="text-xl font-bold text-[#333] mb-4">App Development</h4>
          <p className="text-[#616161] text-sm leading-relaxed mb-8 flex-grow">
            Create impactful apps by focusing on user-centric design and seamless performance for your users.
          </p>
          <a href="#" className="text-sm font-bold text-[#0c5adb] group-hover:underline">
            Discover More
          </a>
        </div>

      </div>
    </section>
  );
}

export default OurServices;