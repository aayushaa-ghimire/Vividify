import React from 'react';
import {
  Zap,
  Target,
  Shield,
  BarChart,
  Headphones,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { icon: <Zap size={20} />, title: 'Fast Delivery' },
  { icon: <Target size={20} />, title: 'Client-Focused' },
  { icon: <Shield size={20} />, title: 'Secure & Reliable' },
  { icon: <BarChart size={20} />, title: 'Data Driven' },
  { icon: <Headphones size={20} />, title: '24/7 Support' },
  { icon: <CheckCircle size={20} />, title: 'Expert Consulting' },
];

export default function WhyVividify() {
  return (
    <section className="bg-[#0c5adb] py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <p
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-200 mb-6"
            >
              Why Vividify
            </p>
            <h2
              data-aos="fade"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              We solve problems with <br /> technical precision.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <Link
              to="/contact"
              className="group flex items-center gap-3 border-b-2 border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-all"
            >
              <span
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="text-xl lg:text-2xl font-bold tracking-tight"
              >
                Contact Us
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-white/10 pt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              className="flex flex-col items-start px-4 border-l border-white/10 first:border-l-0"
            >
              <div className="mb-6 text-blue-200 opacity-90">{item.icon}</div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest leading-tight">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
