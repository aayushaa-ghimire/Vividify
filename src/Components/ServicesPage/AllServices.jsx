import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'web',
    number: '01',
    title: 'Web Development',
    longDesc:
      'Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors effectively.',
    image: '/service1.jpg',
  },
  {
    id: 'soft',
    number: '02',
    title: 'Software Development',
    longDesc:
      'We deliver tailored software solutions that enhance efficiency and drive innovation across all platforms.',
    image: '/service2.jpg',
  },
  {
    id: 'app',
    number: '03',
    title: 'App Development',
    longDesc:
      'Our app development services focus on designing user-friendly applications that boost user engagement.',
    image: '/service3.jpg',
  },
  {
    id: 'marketing',
    number: '04',
    title: 'Digital Marketing',
    longDesc:
      'Utilize strategic campaigns to enhance online visibility and drive conversions through data-driven marketing.',
    image: '/service4.jpg',
  },

  {
    id: 'seo',
    number: '05',
    title: 'SEO',
    longDesc:
      'Improve your online visibility with our SEO services, employing targeted strategies to boost search rankings.',
    image: '/service6.jpg',
  },
  {
    id: 'data',
    number: '06',
    title: 'Data Management',
    longDesc:
      'Maximize the value of your data with our data management services, ensuring accuracy and security.',
    image: '/service7.jpg',
  },
  {
    id: 'social',
    number: '07',
    title: 'Social Media Management',
    longDesc:
      'Elevate your brand with our digital marketing services, utilizing strategic campaigns to engage audiences.',
    image: '/service8.jpg',
  },
];

const ServiceCard = ({ title, longDesc, image, number }) => (
  <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 py-6 px-4">
    <div
      className="w-full lg:w-[45%] h-[300px] lg:h-[420px] shrink-0"
      data-swiper-parallax="-300"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover rounded-[2rem] shadow-2xl border-4 border-white"
      />
    </div>

    <div className="flex flex-col text-left w-full lg:w-[48%]">
      <div data-swiper-parallax="-250">
        <span className="text-[0.75rem] font-bold tracking-[0.3em] text-[#0c5adb] uppercase mb-4 block">
          Service {number}
        </span>
      </div>

      <h3
        className="text-[2.5rem] lg:text-[3.75rem] font-normal text-gray-900 leading-tight mb-6"
        data-swiper-parallax="-200"
      >
        {title}
      </h3>

      <div data-swiper-parallax="-100">
        <p className="text-[1.125rem] lg:text-[1.25rem] text-gray-500 leading-relaxed max-w-md font-normal mb-10">
          {longDesc}
        </p>

        <Link
          to={'/contacts'}
          className="bg-[#0c5adb] w-fit text-white font-bold py-4 px-10 rounded-[1rem] flex items-center gap-3 hover:bg-[#0a4bb3] transition-all shadow-lg shadow-blue-100 uppercase tracking-wider text-[0.875rem]"
        >
          Contact Us
          <span className="text-[1.25rem]">→</span>
        </Link>
      </div>
    </div>
  </div>
);

export default function AllServices() {
  return (
    <div className="relative w-full h-[85vh] flex items-center bg-[#f8fbff] overflow-hidden font-sans">
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <Swiper
          speed={2000}
          parallax={true}
          loop={false}
          grabCursor={true}
          navigation={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Parallax, Pagination, Autoplay, Navigation]}
          className="mySwiper !pb-20"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id} className="!bg-transparent">
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mySwiper .swiper-pagination-bullet-active {
            background: #0c5adb !important;
          }
          .mySwiper .swiper-button-next, 
          .mySwiper .swiper-button-prev {
            color: #0c5adb !important;
            transform: scale(0.7);
          }
        `,
        }}
      />
    </div>
  );
}
