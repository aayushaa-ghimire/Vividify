import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <>
    <div className=' bg-[url("../../public/hero-2-bg.jpg")]'>
        <div className='flex justify-center'>
            <div className='flex flex-col w-[40%] pl-12 pr-12 gap-4'>
                <div className=''>
                    <h1 className='text-[4rem] font-bold '>Your Trusted IT Solutions Partner</h1>
                    <img src="../../public/NepalFlag.png"   className=' flex relative' />
                </div>
                <div>
                    <p className='text-[#616161]'>We are a leading IT solutions agency and web development, committed to driving your online success. Through innovative strategies and expert insights, we ensure your business stands out in the digital world</p>
                </div>
                <div>
                    <a href="http://" className='bg-[#0c5adb] rounded-4xl flex align-middle w-max p-[1vw] font-bold underline text-white relative'>Discover More</a>
                </div>
            </div>

            <div className='w-[40%]'>
            <img src="../../public/home-banner.png" alt=""  className='w-[100%] ' /> 
                {/* <div className='absolute h-[10vw] w-[10vw] bg-[#0c5adb] rounded-full'></div>   */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
