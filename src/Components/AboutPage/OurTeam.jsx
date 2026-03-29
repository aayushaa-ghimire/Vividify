import React from 'react'

function OurTeam() {
  return (
    <>
    <div className='flex flex-col gap-[4vw] p-[7vw] bg-[#f9f9f9]'>
        <div className='flex flex-col items-center text-center w-full gap-[1vw] leading-loose '>
          <div>
            <p className="text-[18px] font-semibold tracking-[0.2em] text-[#0c5adb] uppercase">Our Team</p>
          </div>
          <div>
            <h1 className="text-[2.5rem] font-bold leading-tight text-[#111] lg:text-[3rem]">Meet the talented people <br/> behind Vividify</h1>
          </div>
          <div>
            <p className="max-w-[700px] text-[1.1rem] leading-relaxed text-[#686868]">Our team of experts brings together diverse skills and experience to deliver exceptional digital solutions for your business needs.</p>
          </div>
        </div>


        {/* image section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw]'>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/March2025/Z2RXVcBhvahxckBUgKaj.webp" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Shreejesh Rupakhetee</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Co-founder / CEO</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/March2025/gCuQQFSNdW9NNTZc71fH.webp" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Ajay Roy</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Co-Founder / COO / HR</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/March2025/o6K97Y1k4KWqUAYCC8eR.png" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Rojan Dahal</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Fullstack Developer</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/March2025/3zHijch57IOA5Fo4ywBK.png" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Achyut Rimal</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Full stack Developer</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/April2025/IatAPYlLomxZYUcrdzvS.jpg" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Naman Kunwar</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">AI Team Lead</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/April2025/lR77Kib9pf0yfUlAn6OM.jpg" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Ankit Waiba</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">System Engineer</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/April2025/5ttq8Bg41UxfqqWUWwDM.jpeg" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Dip Khatiwada</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Lead Writer / Researcher</p>
            </div>
          </div>

          <div className='flex flex-col bg-white shadow-md rounded-[1vw] overflow-hidden hover:-translate-y-3 transition-all hover:shadow-lg duration-300 ease-in-out'>
            <div className='aspect-[4/5] overflow-hidden'>
              <img src="https://vividifysolutions.com//storage/team-members/July2025/YC8or8TM3avvzfqCxNZy.jpeg" alt="img" className='w-full h-full object-cover object-top' />
            </div>
            <div className='text-center p-[1.5vw]'>
              <h4 className="text-[1.3rem] font-medium text-[#222]">Swapnil Rupakhetee</h4>
              <p className="text-[16px] text-[#0c5adb] font-medium">Frontend Developer</p>
            </div>
          </div>

        </div>
    </div>
      
    </>
  )
}

export default OurTeam


