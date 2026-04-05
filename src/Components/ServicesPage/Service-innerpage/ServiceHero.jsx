import React from 'react';
import { Link } from 'react-router-dom';

function ServiceHero() {
  return (
    <div className="relative px-6 bg-white overflow-hidden mb-[3vw] py-10 md:py-12 md:px-12">
      <div className="absolute top-0 right-0 h-full bg-[#f4f7ff] -z-10 rounded-l-[2rem] w-full md:w-1/4 md:rounded-l-[4rem]" />

      <div className="mx-auto grid items-center max-w-[1400px] gap-10 grid-cols-1 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <span className="font-bold tracking-[0.2em] text-[10px] uppercase bg-blue-50 px-4 py-1.5 rounded-lg text-[#0061f2] inline-block">
            Expert Solutions
          </span>
          <h1 className="font-extrabold text-[#0f172a] leading-[1.1] tracking-tighter mt-6 text-4xl md:text-6xl">
            Web <br />
            <span className="text-[#0061f2]">Development</span>
          </h1>
          <p className="text-zinc-500 mt-6 leading-relaxed max-w-md font-normal text-base md:text-lg">
            High-performance web engineering focusing on React architectures,
            custom API integrations, and lightning-fast deployment.
          </p>
          <div className="mt-8">
            <Link
              to={'/contacts'}
              className="bg-[#0061f2] text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 md:px-10 md:py-4"
            >
              Start Building
            </Link>
          </div>
        </div>

        <div className="relative group order-1 md:order-2">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-white relative z-10 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-blue-100/50 border-[6px] md:border-[10px] md:rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
              alt="Web Engineering"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110 h-[280px] md:h-[380px]"
            />
          </div>

          <div className="bg-zinc-50/90 backdrop-blur-md border border-white p-5 rounded-[1.5rem] shadow-2xl z-20 transition-all duration-500 group-hover:-translate-y-2 absolute -bottom-4 left-4 max-w-[240px] md:-bottom-8 md:-left-8 md:p-7 md:rounded-[2rem] md:max-w-[320px]">
            <span className="text-[#0061f2] font-bold tracking-widest uppercase block mb-2 text-[8px] md:text-[10px]">
              QUALITY ASSURANCE
            </span>
            <h4 className="font-black text-[#0f172a] leading-tight text-xl md:text-2xl">
              99.9% Satisfaction
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
