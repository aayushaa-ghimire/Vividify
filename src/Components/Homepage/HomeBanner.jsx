import React from 'react';
import { Send } from 'lucide-react';

function HomeBanner() {
  return (
    <section className="px-6 py-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-[#0c5adb] rounded-3xl p-8 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Have a project in mind? <br />
            Let's talk.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Whether you have a fully-formed idea or just the start of a vision,
            we're here to help you build it. Reach out and let's see how we can
            work together.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-auto">
          <div className="bg-blue-600/50 p-8 rounded-2xl border border-blue-400/30 text-center">
            <p className="text-sm mb-6 font-medium">
              We usually respond within 24 hours
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0c5adb] px-10 py-4 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all w-full sm:w-auto"
            >
              Start a Conversation
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
