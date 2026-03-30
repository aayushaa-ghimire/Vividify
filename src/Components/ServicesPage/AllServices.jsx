import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper-style.css';

const servicesData = [
  { id: 'web', number: '01', title: 'Web Development', shortDesc: 'High-performance websites.', longDesc: 'Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors effectively.', image: '/service1.jpg' },
  { id: 'soft', number: '02', title: 'Software Development', shortDesc: 'Driving innovation.', longDesc: 'We deliver tailored software solutions that enhance efficiency and drive innovation across all platforms.', image: '/service2.jpg' },
  { id: 'app', number: '03', title: 'App Development', shortDesc: 'Impactful mobile experiences.', longDesc: 'Our app development services focus on designing user-friendly applications that boost user engagement.', image: '/service3.jpg' },
  { id: 'marketing', number: '04', title: 'Digital Marketing', shortDesc: 'Strategic online visibility.', longDesc: 'Utilize strategic campaigns to enhance online visibility and drive conversions through data-driven marketing.', image: '/service4.jpg' },
];

const ServiceCard = ({ title, shortDesc, longDesc, image, number }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 py-4">
    {/* Image Section */}
    <div className="w-full md:w-[42%] h-[280px] md:h-[350px] shrink-0 relative" data-swiper-parallax="-300">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover rounded-[2.5rem] shadow-lg shadow-blue-900/5" 
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-center text-left w-full md:max-w-[50%]">
      <div data-swiper-parallax="-250">
        <span className="text-[10px] font-bold tracking-[0.4em] text-[#0c5adb] uppercase bg-blue-50/80 px-3 py-1 rounded-full inline-block mb-4">
          Service {number}
        </span>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight mb-2" data-swiper-parallax="-200">
        {title}
      </h3>
      
      <p className="text-lg font-semibold text-[#444] mb-5" data-swiper-parallax="-150">
        {shortDesc}
      </p>

      <div className="relative border-l-4 border-[#0c5adb] bg-blue-50/30 p-6 rounded-r-2xl" data-swiper-parallax="-100">
        <p className="text-sm md:text-base text-[#555] leading-relaxed">
          {longDesc}
        </p>
      </div>
    </div>
  </div>
);

export default function AllServices() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-[#f8fbff]">
      {/* Parallax Background */}
      <div className="parallax-bg-wrapper" data-swiper-parallax="-20%">
        <div className="bg-gradient-fill"></div>
        <div className="bg-dots-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Main Unitary Frame */}
        <div className="rounded-[3.5rem] border border-white bg-white/90 backdrop-blur-md shadow-[0_20px_60px_rgba(12,90,219,0.06)] p-10 md:p-14">
          
          <div className="mb-12 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0c5adb] mb-2">Expertise</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight">Our Specialized Services</h1>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#0c5adb]"></div>
          </div>

          <Swiper
            speed={1000}
            parallax={true}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id} className="!bg-transparent px-2">
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}