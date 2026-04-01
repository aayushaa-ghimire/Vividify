import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './New.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function New() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
      id: 'consulting',
      number: '05',
      title: 'IT Consulting',
      longDesc:
        'Optimize your technology investments with our IT consulting services, offering expert guidance to streamline processes.',
      image: '/service5.jpg',
    },
    {
      id: 'seo',
      number: '06',
      title: 'SEO',
      longDesc:
        'Improve your online visibility with our SEO services, employing targeted strategies to boost search rankings.',
      image: '/service6.jpg',
    },
    {
      id: 'data',
      number: '07',
      title: 'Data Management',
      longDesc:
        'Maximize the value of your data with our data management services, ensuring accuracy and security.',
      image: '/service7.jpg',
    },
    {
      id: 'social',
      number: '08',
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
        <span className="text-xs font-bold tracking-[0.3em] text-[#0c5adb] uppercase mb-4 block">
          Service {number}
        </span>
      </div>

      <h3
        className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
        data-swiper-parallax="-200"
      >
        {title}
      </h3>

      <div data-swiper-parallax="-100">
        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-md font-normal mb-10">
          {longDesc}
        </p>

        <button className="bg-[#0c5adb] text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 hover:bg-[#0a4bb3] transition-all shadow-lg shadow-blue-100 uppercase tracking-wider text-sm">
          Contact Us
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  </div>
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
