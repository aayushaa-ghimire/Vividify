// import React from 'react';
// import { Lightbulb, Rocket, ShieldCheck, HeartHandshake } from 'lucide-react';

// function GuidingPrinciples() {
//   return (
//     <section className="bg-white px-6 py-16">
//       {/* Simplified Heading */}
//       <div className="mb-16 text-center">
//         <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
//           Guiding <span className="text-blue-600">Principles</span>
//         </h2>
//         <p className="mt-2 font-medium text-gray-500">
//           Our core values and commitments
//         </p>
//       </div>

//       {/* Cards Container */}
//       <div className="mx-auto flex max-w-6xl flex-col gap-6">
//         {/* Row 1: Asymmetric Widths */}
//         <div className="flex flex-col gap-6 md:flex-row">
//           {/* Innovation - Narrower */}
//           <div className="group rounded-3xl bg-blue-50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl md:w-5/12">
//             <div className="mb-4 w-fit rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
//               <Lightbulb size={28} />
//             </div>
//             <h4 className="mb-3 text-2xl font-bold text-gray-800">
//               Innovation
//             </h4>
//             <p className="leading-relaxed text-gray-600">
//               We push technology boundaries to deliver advanced solutions for
//               modern businesses.
//             </p>
//           </div>

//           {/* Efficiency - Wider */}
//           <div className="group rounded-3xl bg-blue-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl md:w-7/12 md:text-left">
//             <div className="mx-auto mb-4 w-fit rounded-2xl bg-white p-3 text-blue-600 shadow-sm md:mx-0">
//               <Rocket size={28} />
//             </div>
//             <h4 className="mb-3 text-2xl font-bold text-gray-800">
//               Efficiency
//             </h4>
//             <p className="leading-relaxed text-gray-600">
//               Our solutions are built to optimize workflows, helping businesses
//               achieve more with less effort and resources.
//             </p>
//           </div>
//         </div>

//         {/* Row 2: Swapped Asymmetric Widths */}
//         <div className="flex flex-col gap-6 md:flex-row">
//           {/* Customer Success - Wider */}
//           <div className="group rounded-3xl bg-blue-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl md:w-7/12 md:text-left">
//             <div className="mx-auto mb-4 w-fit rounded-2xl bg-white p-3 text-blue-600 shadow-sm md:mx-0">
//               <HeartHandshake size={28} />
//             </div>
//             <h4 className="mb-3 text-2xl font-bold text-gray-800">
//               Customer Success
//             </h4>
//             <p className="leading-relaxed text-gray-600">
//               We are committed to our clients’ growth. From onboarding to
//               support, we provide the tools needed to maximize value.
//             </p>
//           </div>

//           {/* Trust & Security - Narrower */}
//           <div className="group rounded-3xl bg-blue-50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl md:w-5/12">
//             <div className="mb-4 w-fit rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
//               <ShieldCheck size={28} />
//             </div>
//             <h4 className="mb-3 text-2xl font-bold text-gray-800">
//               Trust & Security
//             </h4>
//             <p className="leading-relaxed text-gray-600">
//               We prioritize data protection, ensuring businesses can rely on us
//               for secure solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GuidingPrinciples;

import React from 'react';
import { Lightbulb, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';

function GuidingPrinciples() {
  return (
    <div className="flex h-screen flex-col justify-center overflow-hidden bg-white px-6">
      {/* Compact Bold Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl leading-tight font-extrabold text-black sm:text-4xl lg:text-5xl">
          Our Guiding <span className="text-[#0c5adb]">Principles</span>
          <br />
          <span className="text-xl font-bold text-gray-500 lg:text-2xl">
            and Commitments
          </span>
        </h1>
      </div>

      {/* Cards Container */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        {/* Row 1 */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Innovation - 40% */}
          <div className="flex flex-col items-center rounded-xl border border-blue-50 bg-[#f4f8ff] p-5 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:w-[40%]">
            <div className="mb-3 rounded-lg bg-white p-2.5 text-[#0c5adb] shadow-sm">
              <Lightbulb size={24} />
            </div>
            <h4 className="mb-1 text-xl font-bold text-[#222]">Innovation</h4>
            <p className="text-sm leading-snug font-medium text-[#686868]">
              We push technology boundaries to deliver solutions that adapt to
              modern business needs.
            </p>
          </div>

          {/* Efficiency - 60% */}
          <div className="flex flex-col items-center rounded-xl border border-blue-50 bg-[#f4f8ff] p-5 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:w-[60%]">
            <div className="mb-3 rounded-lg bg-white p-2.5 text-[#0c5adb] shadow-sm">
              <Rocket size={24} />
            </div>
            <h4 className="mb-1 text-xl font-bold text-[#222]">Efficiency</h4>
            <p className="text-sm leading-snug font-medium text-[#686868]">
              Our solutions optimize workflows and processes, helping businesses
              achieve more with less effort and resources.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Customer Success - 60% */}
          <div className="flex flex-col items-center rounded-xl border border-blue-50 bg-[#f4f8ff] p-5 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:w-[60%]">
            <div className="mb-3 rounded-lg bg-white p-2.5 text-[#0c5adb] shadow-sm">
              <HeartHandshake size={24} />
            </div>
            <h4 className="mb-1 text-xl font-bold text-[#222]">
              Customer Success
            </h4>
            <p className="text-sm leading-snug font-medium text-[#686868]">
              We are committed to our clients’ growth. We provide the tools and
              expertise needed to maximize value.
            </p>
          </div>

          {/* Trust & Security - 40% */}
          <div className="flex flex-col items-center rounded-xl border border-blue-50 bg-[#f4f8ff] p-5 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:w-[40%]">
            <div className="mb-3 rounded-lg bg-white p-2.5 text-[#0c5adb] shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <h4 className="mb-1 text-xl font-bold text-[#222]">
              Trust & Security
            </h4>
            <p className="text-sm leading-snug font-medium text-[#686868]">
              We prioritize data protection and transparency, ensuring
              businesses can rely on us for secure compliant solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidingPrinciples;
