import React from 'react'

function AnimatedText() {
  return (
    <>
    <div className='bg-[url("../../public/marquree-bg.png")] mt-[10vw]'>
        <div className='flex justify-between items-center py-[2.48vw] px-2'>
            <img src="../../public/marquee-star.png" alt="star" className='w-[3vw] min-w-[15px]' />
            <p className='font-normal text-[2vw] md:text-[1.5rem] whitespace-nowrap'>Website Development</p> 
            <img src="../../public/marquee-star.png" alt="star" className='w-[3vw] min-w-[15px]' />
            <p className='font-normal text-[2vw] md:text-[1.5rem] whitespace-nowrap'>Software Development</p>
            <img src="../../public/marquee-star.png" alt="star" className='w-[3vw] min-w-[15px]' />
            <p className='font-normal text-[2vw] md:text-[1.5rem] whitespace-nowrap'>SEO Agency</p>
            <img src="../../public/marquee-star.png" alt="star" className='w-[3vw] min-w-[15px]' />
            <p className='font-normal text-[2vw] md:text-[1.5rem] whitespace-nowrap'>Digital Marketing</p>
            <img src="../../public/marquee-star.png" alt="star" className='w-[3vw] min-w-[15px]' />
        </div>
    </div>
    </>
  )
}

export default AnimatedText



