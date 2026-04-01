import React from 'react';
import { ChevronRight, ShieldCheck, Zap, Gauge, HardDrive } from 'lucide-react';

function TrustedService() {
  return (
    <div className="bg-white py-10 px-6 lg:px-20 mb-[4vw] mt-[6vw] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-3/5">
          <div className="max-w-xl mb-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Uncompromising{' '}
              <span className="text-[#0c5adb]">quality in every line</span> of
              code
            </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              We don't just deliver projects; we build high-performance digital
              assets. Our rigorous testing and quality-first architecture ensure
              your platforms are secure, fast, and ready to scale.
            </p>
            <button className="bg-[#0c5adb] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#094bb3] transition-all text-xs">
              Get in touch
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Clean Code Standards
                </h4>
                <p className="text-xs text-gray-400 mt-1 mb-2">
                  Maintainable, readable, and bug-free from day one.
                </p>
                <div className="text-[10px] font-bold text-[#0c5adb] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider flex items-center gap-1">
                  Learn <ChevronRight size={12} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Optimized Speed
                </h4>
                <p className="text-xs text-gray-400 mt-1 mb-2">
                  Maximum loading speed and smooth interactions.
                </p>
                <div className="text-[10px] font-bold text-[#0c5adb] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider flex items-center gap-1">
                  Learn <ChevronRight size={12} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Gauge size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Scalable Architecture
                </h4>
                <p className="text-xs text-gray-400 mt-1 mb-2">
                  Built to handle 10x traffic without a rebuild.
                </p>
                <div className="text-[10px] font-bold text-[#0c5adb] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider flex items-center gap-1">
                  Learn <ChevronRight size={12} />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="grid grid-cols-[auto_1fr] gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <HardDrive size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  Data Protection
                </h4>
                <p className="text-xs text-gray-400 mt-1 mb-2">
                  Top-tier encryption and security protocols.
                </p>
                <div className="text-[10px] font-bold text-[#0c5adb] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider flex items-center gap-1">
                  Learn <ChevronRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Quality Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="text-[#0c5adb] font-bold text-[9px] uppercase tracking-wider mb-1">
                Quality Assurance
              </p>
              <p className="text-xl font-black text-gray-900 leading-none">
                99.9% Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedService;
