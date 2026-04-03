import React from 'react';
import { Layout, Cpu, Globe } from 'lucide-react';

const ComprehensiveSol = () => {
  return (
    <section className="px-10 py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[rgb(0,97,242)]"></div>
            <span className="text-[#0061f2] font-bold tracking-widest text-xs uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-6xl font-extrabold text-zinc-900 leading-[1.1] mb-6 tracking-tight">
            Comprehensive <span className="text-[#0061f2]">Web Solutions</span>
          </h2>
          <p className="text-zinc-500 text-lg font-normal leading-relaxed max-w-xl">
            We build high-performance digital assets with a quality-first
            architecture that ensures your platforms are secure and ready to
            scale.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Card 01 */}
          <div className="relative group p-12 bg-[#f4f9ff] border border-blue-50 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,97,242,0.1)]">
            <span className="absolute top-10 right-10 text-blue-200/50 font-black text-2xl italic select-none">
              01
            </span>
            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0061f2] transition-all duration-500">
              <Layout
                className="text-[#0061f2] w-8 h-8 group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              Frontend Excellence
            </h3>
            <p className="text-zinc-500 leading-relaxed font-normal text-[15px]">
              Using React and Tailwind CSS to build interfaces that are
              beautiful, responsive, and lightweight.
            </p>
          </div>

          {/* Card 02 */}
          <div className="relative group p-12 bg-[#f4f9ff] border border-blue-50 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,97,242,0.1)]">
            <span className="absolute top-10 right-10 text-blue-200/50 font-black text-2xl italic select-none">
              02
            </span>
            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0061f2] transition-all duration-500">
              <Cpu
                className="text-[#0061f2] w-8 h-8 group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              Backend Scalability
            </h3>
            <p className="text-zinc-500 leading-relaxed font-normal text-[15px]">
              Robust server-side logic that handles complex data processing and
              integrates with any API.
            </p>
          </div>

          {/* Card 03 */}
          <div className="relative group p-12 bg-[#f4f9ff] border border-blue-50 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,97,242,0.1)]">
            <span className="absolute top-10 right-10 text-blue-200/50 font-black text-2xl italic select-none">
              03
            </span>
            <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0061f2] transition-all duration-500">
              <Globe
                className="text-[#0061f2] w-8 h-8 group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              SEO Optimization
            </h3>
            <p className="text-zinc-500 leading-relaxed font-normal text-[15px]">
              Every line of code is written with search engines in mind,
              ensuring your site ranks high from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSol;
