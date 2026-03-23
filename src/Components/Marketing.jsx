import React from 'react'

function Marketing() {
  return (
    <>
      <div className='flex bg-[#ccdfff] gap-[4vw] pb-[12vw] pt-[10vw] justify-around'>
        <div className='w-40vw'>
            <img src="../../public/about-thum11.png" alt="img" className='w-[40vw]' />
            <img src="../../public/home-team.png" alt="img" className='absolute' />
        </div>

        <div className='flex flex-col gap-[2vw] w-[40vw]'>
            <p className='text-[#0c5adb] text-[1.2rem]'>Marketing</p>
            <h1 className='font-medium text-[2.19rem]'>Why you need digital marketing</h1>
            <p className='text-[#616161] text-[1.3vw]'>As a highly-rated holistic digital marketing agency, we serve thousands of clients with a full spectrum of services. Our expertise includes SEO, social media management, website design, web development, and app development.</p>
            <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] ' >Discover More</a>
        </div>

      </div>
    </>
  )
}

export default Marketing
