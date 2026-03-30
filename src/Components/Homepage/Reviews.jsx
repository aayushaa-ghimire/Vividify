import React from 'react'
import { Quote, Star, User } from 'lucide-react';

function Reviews() {
  return (
    <>
      <div className='flex justify-center items-start gap-[8vw] px-[10vw] pt-[6vw] pb-[3vw] mt-[4vw] bg-white'>
        <div className='flex flex-col w-[40vw] gap-[2vw]'>
            <div>
                <p className="text-xs font-bold tracking-[0.3em] text-[#0c5adb] uppercase">
                    Client reviews
                </p>
            </div>
            <div>
                <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#111]">
                    Driving digital revenue for <br/> our 50+ satisfied customers
                </h1>
            </div>

            <div className='flex gap-[2vw] mt-[1.5vw] items-center bg-white shadow-[0_20px_40px_rgba(12,90,219,0.08)] rounded-3xl w-fit px-[2vw] py-[1.5vw] transition-all hover:shadow-[0_20px_40px_rgba(12,90,219,0.15)]'>
                <div className='text-[#0c5adb]'>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#111]">60%</h2>
                </div>
                <div>
                    <p className='text-[#686868] text-sm font-semibold leading-tight'>
                        Average Traffic <br/>
                        Increase for Clients
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-[3vw] w-[35vw] pt-[1vw]'>
            <div className='relative'>
                <span className="absolute -top-6 -left-4 text-6xl text-blue-100 font-serif select-none">“</span>
                <p className="relative z-10 w-full leading-relaxed font-medium text-[#464646] lg:leading-loose text-lg ">
                    Collaborating with Vividify IT solutions gave us the expert
                    insights we needed to elevate our company's online presence and
                    web development strategy. Early in the process, we introduced an
                    unexpected challenge, but their team adapted seamlessly.
                </p>
            </div>
            
            <div className='flex justify-between items-end pt-[2vw] border-t border-gray-100'>
                <div className='flex gap-[1vw] items-center'>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                        <User size={20} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className="font-bold text-xl text-[#111]">Sujan Shrestha</h3>
                        <p className='text-[#0c5adb] font-bold text-xs uppercase tracking-widest'>Engineer</p>
                    </div>
                </div>

                <div className='flex flex-col items-end'>
                    <div className='flex items-center gap-2'>
                        <h4 className="text-4xl font-bold text-[#111]">4.7</h4>
                        <div className="flex gap-0.5 text-orange-400">
                            <Star size={16} fill="currentColor" stroke="none" />
                            <Star size={16} fill="currentColor" stroke="none" />
                            <Star size={16} fill="currentColor" stroke="none" />
                            <Star size={16} fill="currentColor" stroke="none" />
                            <Star size={16} fill="currentColor" stroke="none" />
                        </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-gray-400">50+ Client Reviews</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Reviews