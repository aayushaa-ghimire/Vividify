import React from 'react'

function TrustedService() {
  return (
    <div className='flex'>
        <div className='flex flex-col'>
            <div>
                <div>
                    <h1 className="text-[2.2rem] font-bold leading-tight text-[#111] lg:text-[3rem]">Trusted solutions <span className="text-[#0c5adb]">for your <br />digital needs </span></h1>
                </div>
                <div>
                    <button>Get in touch</button>
                </div>
            </div>
            {/* left bottom */}
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">01</p>
                    <h4 className="mb-4 text-xl font-bold text-[#222]">Custom Software Solutions</h4>
                    <a href="#" className="w-full rounded-xl bg-gray-100 text-black px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0c5adb] hover:text-white hover:shadow-lg active:scale-95">
                        Learn More
                    </a>
                </div>

                <div className='flex flex-col'>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">02</p>
                    <h4 className="mb-4 text-xl font-bold text-[#222]">Business Web Platforms</h4>
                    <a href="#" className="w-full rounded-xl bg-gray-100 text-black px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0c5adb] hover:text-white hover:shadow-lg active:scale-95">
                        Learn More
                    </a>
                </div>

                <div className='flex flex-col'>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">03</p>
                    <h4 className="mb-4 text-xl font-bold text-[#222]">Smart Automation Systems</h4>
                    <a href="#" className="w-full rounded-xl bg-gray-100 text-black px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0c5adb] hover:text-white hover:shadow-lg active:scale-95">
                        Learn More
                    </a>
                </div>

                <div className='flex flex-col'>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0c5adb]">04</p>
                    <h4 className="mb-4 text-xl font-bold text-[#222]">Scalable Cloud Infrastructure</h4>
                    <a href="#" className="w-full rounded-xl bg-gray-100 text-black px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-[#0c5adb] hover:text-white hover:shadow-lg active:scale-95">
            Learn More
          </a>
                </div>
            </div>
        </div>

        <div>
            {/* image */}
        </div>
      
    </div>
  )
}

export default TrustedService
