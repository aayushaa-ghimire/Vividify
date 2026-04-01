import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const testimonialData = [
  {
    text: "Can't recommend Vividify enough! Their expertise has transformed our operations and enhanced our efficiency. The team's responsiveness and commitment to our success make them a reliable partner. We've seen remarkable improvements in our processes and outcomes since we started working with them. They truly go above and beyond!",
    name: 'Bedanshi Subedi',
  },
  {
    text: 'Completely extend leveraged customer service rather than performance based imperatives. magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise',
    name: 'Suman Shrestha',
  },
  {
    text: "As a small business, we were looking for a partner who truly understood our needs. Vividify exceeded our expectations. Their team is always available and ready to help us navigate challenges. We've noticed a significant boost in our operations since we started working together!",
    name: 'Niraj Maharjan',
  },
  {
    text: 'Vividify has been a breath of fresh air for our business. Their expertise and dedication shine through in every interaction. We feel more confident tackling our projects knowing we have such a reliable partner by our side!',
    name: 'Rachana Dhakal',
  },
];

export default function App() {
  return (
    <div className="py-16 bg-[#F8FAFF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              What <span className="text-blue-600">Our Clients</span> Say
            </h2>
            <p className="text-gray-500 text-sm">
              Hear Directly Our Satisfied Partners
            </p>
          </div>

          <div className="flex gap-2">
            <button className="prev-btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="next-btn w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {testimonialData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-blue-50 flex flex-col items-start">
                <div className="flex w-full justify-between items-start mb-6">
                  <Quote size={32} className="text-blue-100 rotate-180" />
                  <div className="flex gap-0.5 text-orange-400">
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                    <Star size={16} fill="currentColor" stroke="none" />
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {item.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                    <User size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-8 gap-2"></div>
      </div>
    </div>
  );
}
