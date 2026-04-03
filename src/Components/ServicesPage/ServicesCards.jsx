import React from 'react';
import {
  Monitor,
  Cpu,
  Smartphone,
  BarChart3,
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
    path: '/service/web-development',
  },
  {
    icon: <Cpu className="text-gray-800" size={32} />,
    title: 'Software Development',
    description:
      'Unlock your business potential with our software development services, delivering tailored solutions that enhance efficiency and drive innovation across all platforms.',
    path: '/service/web-development',
  },

  {
    icon: <Smartphone className="text-gray-800" size={32} />,
    title: 'App Development',
    description:
      'Create impactful mobile experiences with our app development services, designing user-friendly applications that engage customers and boost your business growth.',
    path: '/service/web-development',
  },
  {
    icon: <BarChart3 className="text-gray-800" size={32} />,
    title: 'Digital Marketing',
    description:
      'Elevate your brand with our digital marketing services, utilizing strategic campaigns to enhance online visibility, engage audiences, and drive conversions.',
    path: '/service/web-development',
  },

  {
    icon: <Search className="text-gray-800" size={32} />,
    title: 'SEO',
    description:
      'Improve your online visibility with our SEO services, employing targeted strategies to boost search rankings, attract organic traffic, and enhance user engagement.',
    path: '/service/web-development',
  },
  {
    icon: <Database className="text-gray-800" size={32} />,
    title: 'Data Management',
    description:
      'Maximize the value of your data with our data management services, ensuring accuracy, security, and accessibility to drive informed business decisions.',
    path: '/service/web-development',
  },
  {
    icon: <Share2 className="text-gray-800" size={32} />,
    title: 'Social Media Management',
    description:
      'Elevate your brand with our digital marketing services, utilizing strategic campaigns to enhance online visibility, engage audiences, and drive conversions.',
    path: '/service/web-development',
  },
];

export default function ServicesCards() {
  return (
    <div className="pt-24 pb-[8vw] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0c5adb] mb-3">
            Expertise
          </h2>
          <h3
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-4xl font-black text-gray-900 tracking-tight"
          >
            Our Services
          </h3>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
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
                to={service.path}
                className="group flex items-center gap-2 text-[#0c5adb] font-bold text-xs uppercase tracking-widest hover:text-[#0947ad] transition-all"
              >
                Learn More
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
