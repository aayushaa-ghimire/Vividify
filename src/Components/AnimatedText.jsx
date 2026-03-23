import React from 'react'

function AnimatedText() {
  return (
    <>
    <div className='bg-[url("../../public/marquree-bg.png")] mt-[10vw]'>
        <div className='flex justify-between items-center py-[2vw] '>
            <img src="../../public/marquee-star.png" alt="star" />
            <p className='font-normal text-[1.5rem]'>Website Development</p>
            <img src="../../public/marquee-star.png" alt="star" />
            <p className='font-normal text-[1.5rem]'>Software Development</p>
            <img src="../../public/marquee-star.png" alt="star" />
            <p className='font-normal text-[1.5rem]'>SEO Agency</p>
            <img src="../../public/marquee-star.png" alt="star" />
            <p className='font-normal text-[1.5rem]'>Digital Marketing</p>
            <img src="../../public/marquee-star.png" alt="star" />
        </div>
    </div>
    </>
  )
}

export default AnimatedText
