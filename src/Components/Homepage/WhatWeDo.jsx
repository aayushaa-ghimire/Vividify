import React from 'react'

function WhatWeDo() {
  return (
    <>
    <div className='bg-[#ccdfff] pt-[5.4vw] flex flex-col items-center'>

      <div className='flex justify-center gap-[3vw]'>
        <div className='flex flex-col w-[37vw]'>
          <p className='text-[#0c5adb] text-[1.1rem]'>WHAT WE DO</p>
          <h1 className='font-medium text-[2rem]'>Take the lead in modern Web, App and Software Development</h1>
        </div>

        <div className='flex flex-col w-[40vw] gap-[1vw]'>
          <p className='text-[#616161]'>Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.</p>
          <a href="..." className='rounded-4xl flex align-middle w-max  font-medium underline '>Discover More</a>
        </div>

      </div>


      <div className='flex flex-3  gap-[2vw] mt-[8vw]'>
          <div className='flex flex-col  gap-[2.3vw] bg-white w-[25vw] p-[2vw] pt-[4vw] rounded-3xl'>
            <div className='flex'>
              <h4 className='font-bold text-[1.4rem]'>Digital Marketing Strategy</h4>
                {/* <img src="../../public/feature-icon-bg.png" alt="img" className=' ' /> */}
                <img src="../../public/feature-icon5.png" alt="img" className='' />
            </div>
            <p className='text-[#616161]'>Craft a dynamic digital marketing strategy by setting clear goals, targeting the right audience, and delivering engaging content. Monitor performance and adapt based on insights to maximize your reach and impact.</p>
          </div>

          <div className='flex flex-col  gap-[2.3vw] bg-white w-[25vw] p-[2vw] pt-[4vw] rounded-3xl'>
            <div className='flex'>
              <h4 className='font-bold text-[1.4rem]'>Website / Application Development</h4>
              <img src="../../public/feature-icon6.png" alt="img" className='' />
            </div>
            <p className='text-[#616161]'>Build a successful website by focusing on user-friendly design, responsive functionality, and robust performance, ensuring it meets business goals and provides a seamless experience for visitors.</p>
          </div>

          <div className='flex flex-col  gap-[2.3vw] bg-white w-[25vw] p-[2vw] pt-[4vw] rounded-3xl'>
            <div className='flex'>
            <h4 className='font-bold text-[1.4rem]'>Search Engine Optimization</h4>
            <img src="../../public/feature-icon7.png" alt="img" className=''/>
            </div>
            <p className='text-[#616161]'>Effective reporting in seo analysis involves tracking key performance metrics, evaluating campaign success, and providing actionable insights to optimize strategies and drive better results.</p>
          </div>
      </div>
      <div>
        <img src="../../public/home-img.png" alt="img"  className='mt-[9vw]'/>
      </div>

    </div>
    </>
  )
}

export default WhatWeDo
