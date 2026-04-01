import React from 'react';
import {
  Monitor,
  Cpu,
  Smartphone,
  BarChart3,
  Users,
  Search,
  Database,
  Share2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Monitor className="text-gray-800" size={32} />,
    title: 'Web Development',
    description:
      'Transform your online presence with our custom web development services, delivering responsive, user-friendly sites that engage and convert visitors effectively.',
  },
  {
    icon: <Cpu className="text-gray-800" size={32} />,
    title: 'Software Development',
    description:
      'Unlock your business potential with our software development services, delivering tailored solutions that enhance efficiency and drive innovation across all platforms.',
  },
  {
    icon: <Smartphone className="text-gray-800" size={32} />,
    title: 'App Development',
    description:
      'Create impactful mobile experiences with our app development services, designing user-friendly applications that engage customers and boost your business growth.',
  },
  {
    icon: <BarChart3 className="text-gray-800" size={32} />,
    title: 'Digital Marketing',
    description:
      'Elevate your brand with our digital marketing services, utilizing strategic campaigns to enhance online visibility, engage audiences, and drive conversions.',
  },
  {
    icon: <Users className="text-gray-800" size={32} />,
    title: 'IT Consulting',
    description:
      'Optimize your technology investments with our IT consulting services, offering expert guidance to streamline processes, enhance performance, and drive business success.',
  },
  {
    icon: <Search className="text-gray-800" size={32} />,
    title: 'SEO',
    description:
      'Improve your online visibility with our SEO services, employing targeted strategies to boost search rankings, attract organic traffic, and enhance user engagement.',
  },
  {
    icon: <Database className="text-gray-800" size={32} />,
    title: 'Data Management',
    description:
      'Maximize the value of your data with our data management services, ensuring accuracy, security, and accessibility to drive informed business decisions.',
  },
  {
    icon: <Share2 className="text-gray-800" size={32} />,
    title: 'Social Media Management',
    description:
      'Elevate your brand with our digital marketing services, utilizing strategic campaigns to enhance online visibility, engage audiences, and drive conversions.',
  },
];

export default function ServicesCards() {
  return (
    <section className="bg-[#f8fbff] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0c5adb] mb-3">
            Expertise
          </h2>
          <h3 className="text-4xl font-black text-gray-900 tracking-tight">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[#f8fbff] rounded-full flex items-center justify-center mb-8 shadow-inner">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-[3rem] flex items-center">
                {service.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-normal">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="group flex items-center gap-2 text-[#0c5adb] font-bold text-xs uppercase tracking-widest hover:text-[#0947ad] transition-all"
              >
                Contact Us
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
