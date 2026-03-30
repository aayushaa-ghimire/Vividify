import React from 'react'

function SuccessStories() {
  return (
    <>
      <div className='flex gap-[3vw] justify-between'>
            {/* text */}
            <div className='flex flex-col w-[30vw]'>
                <div>
                <p className="text-xs font-bold tracking-[0.3em] text-[#0c5adb] uppercase">Success Stories</p>
                </div>

                <div>
                  <h1 className="text-4xl lg:text-5xl font-semibold text-[#111]">Our work propels<br/>businesses forward</h1>
                </div>

                <div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">As a five-star-rated, holistic full-service digital agency, we proudly serve thousands of clients with expertise across SEO, social media, website design, web development, and app development.</p>
                </div>

                <div>
                  <a href="#" className="w-full rounded-xl bg-[#0c5adb] text-white px-6 py-3.5 text-sm font-bold active:scale-95">
                      Discover More
                  </a>
                </div>
            </div>

            {/* photo1 */}
            <div className='bg-[url(../../public/RightPathEdu.jpg)] bg-origin-border bg-cover px-[3vw] py-[2vw]  flex flex-col rounded-3xl justify-between'>
                <div className=''>
                  <a href="..." className='text-white'>Right Path Edication</a>
                </div>

                <div>
                <div><p className='text-white font-medium'><span className='font-bold'>+80%</span> <br/> Digital Presence</p></div>
                  <div className='flex gap-[1vw]'>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black'>Website</div>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black'>Hosting</div>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black'>SEO</div>
                  </div>
                </div>
            </div>

            {/* photo2 */}
            <div className='bg-[url(../../public/RippleEngineering.jpg)] flex flex-col bg-origin-border px-[3vw] py-[2vw] rounded-3xl bg-cover justify-between'>
                <div className=''>
                  <a href="..." className='text-white'>Ripple Engineering</a>
                </div>
                <div>
                  <div><p className='text-white font-medium'><span className='font-bold'>+100%</span> <br/> Website Development</p></div>

                  <div className='flex gap-[1vw]'>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black '>Website</div>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black '>Hosting</div>
                        <div className='border-1 border-gray-400 rounded-3xl text-white hover:bg-white hover:text-black'>SEO</div>
                  </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default SuccessStories;
