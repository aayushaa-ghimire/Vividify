import React from 'react'

function OurServices() {
  return (
    <>
    <div className='flex flex-col align-middle mt-[15vw] mb-[5.6vw] '>
      <div className='flex justify-center mb-[5vw]'>
          <div className='flex flex-col gap-[1.5vw] w-[42vw]'>
            <p className='text-[#0c5adb] text-[1.2rem]'>Our Services</p>
            <h1 className='font-medium text-[2.19rem]'>Data-driven, customer-centric digital services</h1>
          </div>
          <div className='flex flex-col gap-[1.5vw] w-[42vw]'>
            <p className='text-[#616161] text-[1.3vw]'>Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.</p>
              <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] ' >Discover More</a>
          </div>
      </div>

        <div className='flex gap-[2vw] w-[100vw] px-[5.3vw] justify-center'>

          <div className=' gap-[2vw] bg-[#686868 bg-[#E8F0FD]/50 rounded-3xl border-1 border-[#0d5bdb] p-[2vw] flex  flex-col'>
            <img src="../../public/ser-icon1.png" alt="img"  className='w-[5vw]' />
            <h4 className='font-medium text-[1.4rem]'>SEO</h4>
            <p className='text-[#616161]'>Enhance your visibility with search engine optimization by optimizing your website’s content, structure, and technical elements to rank higher in search results and attract more organic traffic with Vividify.</p>
            <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] '>Discover More</a>
          </div>

          <div className=', gap-[2vw] bg-[#686868 bg-[#E8F0FD]/50 rounded-3xl border-1 border-[#0d5bdb] p-[2vw] flex  flex-col'>
            <img src="../../public/ser-icon2.png" alt="img" className='w-[5vw]' />
            <h4 className='font-medium text-[1.4rem]'>Digital Media Marketing</h4>
            <p className='text-[#616161]'>Boost your brand’s presence through effective digital marketing by crafting targeted content, engaging your audience, and leveraging data-driven strategies to maximize reach and increase brand loyalty and trust.</p>
            <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] '>Discover More</a>
          </div>

          <div className=' gap-[2vw] bg-[#686868 bg-[#E8F0FD]/50 rounded-3xl border-1 border-[#0d5bdb] p-[2vw] flex  flex-col'>
            <img src="../../public/ser-icon3.png" alt="img" className='w-[5vw]' />
            <h4 className='font-medium text-[1.4rem]'>Website Development</h4>
            <p className='text-[#616161]'>Build a successful website by focusing on user-friendly design, responsive functionality, and robust performance, ensuring it meets business goals and provides a seamless experience for visitors.</p>
            <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] '>Discover More</a>
          </div>

          <div className=' gap-[2vw] bg-[#686868 bg-[#E8F0FD]/50 rounded-3xl border-1 border-[#0d5bdb] p-[2vw] flex  flex-col'>
            <img src="../../public/ser-icon4.png" alt="img"  className='w-[5vw]' />
            <h4 className='font-medium text-[1.4rem]'>App Development</h4>
            <p className='text-[#616161]'>Create impactful apps by focusing on user-centric design, seamless functionality, and robust performance, ensuring a smooth and engaging experience that meets your users' needs and business objectives.</p>
            <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline text-[1.2rem] '>Discover More</a>
          </div>

        </div>
    </div>
    </>
  )
}

export default OurServices
