import React from 'react'

function Hero() {
  return (
    <>
    <div>
        <div className='flex'>
            <h1 className='text-[3.5rem] font-bold'>Your Trusted IT Solutions Partner</h1>
            <img src="../../public/NepalFlag.png" alt="" />
        </div>
        <div>
            <p>We are a leading IT solutions agency and web development, committed to driving your online success. Through innovative strategies and expert insights, we ensure your business stands out in the digital world</p>
        </div>
        <div>
            <a href="http://" className='bg-blue-600 rounded-2xl flex align-middle w-max p-[2vw] font-bold text-white'>Discover More</a>
        </div>
    </div>
    </>
  )
}

export default Hero
