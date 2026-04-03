import React from 'react';
import { Command, Shield, Cpu, Layers, CheckCircle2 } from 'lucide-react';

function TechnicalExcellence() {
  return (
    <div className="bg-[#fafbfc] py-16 px-6 md:py-24 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="lg:w-[42%] bg-white border border-zinc-100 p-8 md:p-14 rounded-[2.5rem] shadow-sm flex flex-col justify-between group transition-all hover:shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-[#0f172a] text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-8">
                Web <br />
                <span className="text-[#0061f2]">Engineering</span>
              </h2>

              <div className="space-y-6">
                <p className="text-zinc-500 text-base md:text-lg font-normal leading-relaxed">
                  Our web development process is built around speed and modern
                  React patterns. We focus on clean, modular code that scales
                  effortlessly from small MVPs to enterprise-level platforms.
                </p>
                <p className="text-zinc-500 text-base md:text-lg font-normal leading-relaxed">
                  By leveraging component-driven architecture, we ensure every
                  line of code serves a purpose, reducing technical debt while
                  maximizing maintainability and long-term stability.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-5 relative z-10">
              {[
                'Reusable React component libraries',
                'Advanced state management',
                'Vite-powered builds',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0061f2] transition-colors">
                    <CheckCircle2
                      size={20}
                      className="text-[#0061f2] group-hover/item:text-white transition-colors"
                    />
                  </div>
                  <p className="text-[#0f172a] font-bold text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[58%] flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm group transition-all hover:border-blue-100">
                <Command
                  className="text-[#0061f2] mb-6 transition-transform group-hover:rotate-12"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-[#0f172a] font-bold text-xl mb-3">
                  Modern Logic
                </h3>
                <p className="text-zinc-400 text-[13px] font-normal leading-relaxed">
                  Hard-coded business logic using the latest ES6+ standards and
                  React hooks.
                </p>
              </div>

              <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm group transition-all hover:border-blue-100">
                <Shield
                  className="text-[#0061f2] mb-6 transition-transform group-hover:scale-110"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-[#0f172a] font-bold text-xl mb-3">
                  Data Security
                </h3>
                <p className="text-zinc-400 text-[13px] font-normal leading-relaxed">
                  End-to-end encryption and secure authentication for all client
                  data platforms.
                </p>
              </div>
            </div>

            <div className="bg-[#0061f2] rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-transform group-hover:scale-110" />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    High Performance Architecture
                  </h3>
                  <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                    Built to handle 10x traffic spikes with zero downtime.
                    Optimized for global scalability and core web vitals to
                    ensure your platform remains fast under any load.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm group transition-all hover:border-blue-100">
                <Cpu
                  className="text-[#0061f2] mb-6 transition-transform group-hover:rotate-[-12deg]"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-[#0f172a] font-bold text-xl mb-3">
                  Systems Integration
                </h3>
                <p className="text-zinc-400 text-[13px] font-normal leading-relaxed">
                  Seamlessly connecting your web frontend with existing CRM and
                  ERP tools.
                </p>
              </div>

              <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm group transition-all hover:border-blue-100">
                <Layers
                  className="text-[#0061f2] mb-6 transition-transform group-hover:translate-y-[-4px]"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-[#0f172a] font-bold text-xl mb-3">
                  UI Refinement
                </h3>
                <p className="text-zinc-400 text-[13px] font-normal leading-relaxed">
                  Pixel-perfect implementation of rounded geometry and
                  professional layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalExcellence;
