import React from 'react'
import Navbar from '../Navbar'

function Hero() {
  return (
    <>
    <div className='bg-[url("/hero-2-bg.jpg")] bg-cover bg-center py-12 lg:py-20'>        
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0'>
            <div className='flex flex-col w-[90%] md:w-[40%] pl-6 pr-6 md:pl-12 md:pr-12 gap-4'>
                <div className=''>
                    <h1 className='text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold '>Your Trusted IT Solutions Partner</h1>
                    <img src="../../public/NepalFlag.png" className='w-24 md:w-32 flex relative mx-auto md:mx-0' />
                </div>
                <div>
                    <p className='text-[#616161] text-center md:text-left'>We are a leading IT solutions agency and web development, committed to driving your online success. Through innovative strategies and expert insights, we ensure your business stands out in the digital world</p>
                </div>
                <div className='flex justify-center md:block'>
                    <a href="http://" className='bg-[#0c5adb] rounded-4xl flex align-middle w-max p-4 md:p-[1vw] font-bold underline text-white relative'>Discover More</a>
                </div>
            </div>

            <div className='w-[80%] md:w-[40%]'>
                <img src="../../public/home-banner.png" alt="" className='w-[100%] ' /> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero