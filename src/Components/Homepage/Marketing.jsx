import React from 'react';
import { Search, Share2, Monitor, Smartphone } from 'lucide-react';

function Marketing() {
  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-20  overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <div className="relative z-10 w-[80%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
              alt="Marketing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-4 z-20 w-[40%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400"
              alt="Growth"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-6 -right-2 w-32 h-32 border-2 border-[#0c5adb]/20 rounded-2xl -z-0"></div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="inline-block px-4 py-1 rounded-md mb-6">
            <span className="text-[#0c5adb] font-bold uppercase tracking-widest text-xs">
              About Our Agency
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Why you need <br />
            <span className="text-[#0c5adb]">digital marketing</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            As a highly-rated holistic digital marketing agency, we serve
            thousands of clients with a full spectrum of services. We focus on
            measurable results that actually move the needle for your brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Search size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">SEO Strategy</h4>
                <p className="text-sm text-gray-500">Organic growth focus</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Share2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Social Media</h4>
                <p className="text-sm text-gray-500">Engage your audience</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Monitor size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Web Design</h4>
                <p className="text-sm text-gray-500">Modern user experience</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#0c5adb]">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">App Development</h4>
                <p className="text-sm text-gray-500">Custom mobile solutions</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="bg-[#0c5adb] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#094bb3] transition-colors"
            >
              Discover More
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-900 border-b-2 border-gray-200 hover:border-[#0c5adb] transition-all pb-1"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
