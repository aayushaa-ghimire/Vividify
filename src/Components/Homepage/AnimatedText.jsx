import React from 'react';
import { Zap } from 'lucide-react';

function AnimatedText() {
  return (
    <section className="bg-[#0c5adb] py-6 border-y-2 border-[#0a4bb3] gap-[5vw] flex justify-center">
      <div className="flex items-center text-white text-lg lg:text-xl font-bold italic uppercase tracking-wider">
        <Zap size={16} className="text-blue-300 fill-blue-300" />
        <span className="mx-6">Website Development</span>
        <Zap size={16} className="text-blue-300 fill-blue-300" />

        <span className="mx-6">Software Development</span>
        <Zap size={16} className="text-blue-300 fill-blue-300" />

        <span className="mx-6">SEO Agency</span>
        <Zap size={16} className="text-blue-300 fill-blue-300" />

        <span className="mx-6">Digital Marketing</span>
      </div>
    </section>
  );
}

export default AnimatedText;
