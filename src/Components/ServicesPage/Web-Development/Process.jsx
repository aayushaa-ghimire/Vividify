import React from 'react';
import { Eye, Brush, Cpu, Send, ArrowUpRight } from 'lucide-react';

function Process() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12">
      <div className="bg-[#0061f2] mx-auto max-w-[1400px] text-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6 items-start md:items-center relative z-10">
          <h2 className="font-extrabold tracking-tighter leading-tight max-w-xl text-3xl md:text-5xl">
            A simplified{' '}
            <span className="text-blue-200/60 font-black">workflow</span> for{' '}
            <br />
            exceptional <span className="opacity-80">digital results</span>
          </h2>

          <a
            href="/contact"
            className="group flex bg-white rounded-xl font-bold transition-all px-6 py-3 items-center gap-2 hover:bg-blue-50 text-[#0061f2]"
          >
            Get Started
            <ArrowUpRight
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              size={18}
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          <div className="group">
            <div className="border border-white/10 flex rounded-xl transition-colors mb-6 h-12 w-12 items-center justify-center bg-white/10 group-hover:bg-white group-hover:text-[#0061f2]">
              <Eye size={20} />
            </div>
            <h3 className="font-bold text-xl mb-2">Discovery</h3>
            <p className="text-blue-50/70 text-sm leading-relaxed">
              Defining goals and project strategy.
            </p>
          </div>

          <div className="group">
            <div className="border-white/10 group-hover:bg-white rounded-xl mb-6 flex h-12 w-12 items-center justify-center transition-colors border group-hover:text-[#0061f2] bg-white/10">
              <Brush size={20} />
            </div>
            <h3 className="font-bold text-xl mb-2">Concept</h3>
            <p className="leading-relaxed text-blue-50/70 text-sm">
              Drafting the creative direction.
            </p>
          </div>

          <div className="group">
            <div className="w-12 h-12 items-center border border-white/10 transition-colors justify-center flex mb-6 bg-white/10 rounded-xl group-hover:bg-white group-hover:text-[#0061f2]">
              <Cpu size={20} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Execution</h3>
            <p className="text-blue-50/70 text-sm leading-relaxed">
              Building with technical precision.
            </p>
          </div>

          <div className="group">
            <div className="bg-white/10 border-white/10 flex transition-colors h-12 w-12 items-center border mb-6 rounded-xl group-hover:bg-white justify-center group-hover:text-[#0061f2]">
              <Send size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Delivery</h3>
            <p className="text-blue-50/70 text-sm leading-relaxed">
              Final checks and official launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
