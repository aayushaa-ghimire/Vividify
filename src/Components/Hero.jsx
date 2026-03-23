import React from 'react'

function Hero() {
  return (
    <>
    <div className='relative min-h-screen flex items-center px-6 md:px-12 py-20 bg-slate-50'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>   
                <h1 className='text-5xl md:text-6xl font-black text-gray-900 leading-tight'>Your Trusted IT Solutions Partner</h1>
                <img src="../../public/NepalFlag.png" alt="" className=' w-40'/>
            </div>
            <div>
                <p className='text-gray-500 text-lg md:text-xl max-w-lg'>We are a leading IT solutions agency and web development, committed to driving your online success. Through innovative strategies and expert insights, we ensure your business stands out in the digital world</p>
            </div>
            <div>
                <a href="http://" className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-colors'>Discover More</a>
            </div>
        </div>

        <div className='relative flex items-center justify-center'>
            <div className="flex gap-4 md:gap-6 items-start">
                <div className="space-y-4 pt-12"></div>
                <img src="../../public/home-banner.png" className="w-full h-64 object-cover rounded-[60px] shadow-2xl" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
