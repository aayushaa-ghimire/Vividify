import React from 'react'

function WhyChooseUs() {
  return (
    <>
      <div className='flex gap-[5vw] px-[10vw] py-[5vw] mb-[1vw]'>
        <div className='flex flex-col w-[50vw] gap-[1.5vw]'>
            <div className='flex flex-col gap-[0.7vw]'>
                <div>
                    <h4 className="text-[14px] font-semibold tracking-[0.2em] text-[#0c5adb] uppercase">Why Choose Us</h4>
                </div>

                <div>
                    <h1 className="text-[1.5rem] font-bold leading-tight text-[#111] lg:text-[2.2rem]">Driving Your Success with <span className="text-[#0c5adb]"> Trusted IT Solutions</span></h1>
                </div>
            </div>


            <div className='flex flex-col gap-[0.6vw] '>
                <div className='rounded-2xl border border-blue-50 bg-[#f4f8ff] p-[1vw] shadow-sm transition-all duration-150 hover:scale-103 hover:shadow-lg ease-initial '>
                    <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#403f3f] lg:text-[1rem]"><span className='font-medium'>Expert Team :</span>  Our team of skilled professionals delivers smart, result-driven solutions with precision and expertise.</p>
                </div>
                <div className='rounded-2xl border border-blue-50 bg-[#f4f8ff] p-[1vw] shadow-sm transition-all duration-150 hover:scale-103 hover:shadow-lg ease-initial '>
                    <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#403f3f] lg:text-[1rem]"><span className='font-medium'>Customized Solutions :</span> We create customized strategies that align perfectly with your unique business goals.</p>
                </div>
                <div className='rounded-2xl border border-blue-50 bg-[#f4f8ff] p-[1vw] shadow-sm transition-all duration-150 hover:scale-103 hover:shadow-lg ease-initial '>
                    <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#403f3f] lg:text-[1rem]"><span className='font-medium'>End-to-End Services :</span> We provide seamless support at every stage, from initial concept to final execution.</p>
                </div>
                <div className='rounded-2xl border border-blue-50 bg-[#f4f8ff] p-[1vw] shadow-sm transition-all duration-150 hover:scale-103 hover:shadow-lg ease-initial '>
                    <p className="max-w-5xl text-[1rem] leading-[1.8] text-[#403f3f] lg:text-[1rem]"><span className='font-medium'>Long-Term Partnership :</span> We are committed to building long-term relationships based on trust, reliability, and continuous growth.</p>
                </div>
            </div>

        </div>

        <div className='flex gap-[1vw]'>
            <div className='flex flex-col gap-[2vw] leading-loose w-[18vw] p-[3vw] items-center shadow-lg hover:scale-102 ease-in-out transition-transform duration-10'>
                <div className='flex flex-col gap-[1vw] items-center text-center  p-[1vw] pb-[3vw] border-b-1 border-gray]'>
                    <div className='mb-[1.5vw]'>
                        <img src="../../public/pricing-icon.png" alt="" />
                    </div>

                    <div>
                        <h4 className="text-xl font-medium text-[#222]">Website Plan</h4>
                    </div>

                    <div>
                        <p className=" text-sm font-normal leading-loose text-[#555]">We create a user-friendly website with fast performance</p>
                    </div>
                </div>

                <div className='flex flex-col leading-tight '>
                        <p className="mb-8 text-sm font-normal leading-relaxed text-[#555]">Modern design <br/> Lead Forms <br/>Responsive Design<br/>24/7 Supports</p>
                </div>

                <div>
                    <a
                        href="#"
                        className="rounded-lg bg-gray-200 text-black  hover:bg-[#0c5adb] px-8 py-3.5 text-sm font-bold hover:text-white transition-all  duration-300 ease-initial hover:shadow-lg active:scale-95">
                        Purchase
                    </a>\
                </div>
            </div>

            <div className='flex flex-col gap-[2vw] leading-loose w-[18vw] p-[3vw] bg-[#000049] text-[white] items-center shadow-lg hover:scale-102 ease-in-out transition-transform duration-10'>
                <div className='flex flex-col gap-[1vw] items-center text-center  p-[1vw] pb-[3vw] border-b-1 border-gray]'>
                    <div className='mb-[1.5vw]'>
                        <img src="../../public/pricing-icon.png" alt="" />
                    </div>

                    <div>
                        <h4 className="text-xl font-medium ">Website Plan</h4>
                    </div>

                    <div>
                        <p className=" text-sm font-normal leading-loose ">We create a user-friendly website with fast performance</p>
                    </div>
                </div>

                <div className='flex flex-col leading-tight '>
                        <p className="mb-8 text-sm font-normal leading-relaxed ">Modern design <br/> Lead Forms <br/>Responsive Design<br/>24/7 Supports</p>
                </div>

                <div>
                    <a
                        href="#"
                        className="rounded-xl bg-[#0c5adb] px-8 py-3.5 text-sm font-bold text-white hover:bg-gray-200 hover:text-[#0c5adb] hover:shadow-lg active:scale-95 transition-all  duration-300 ease-initial">
                        Purchase
                    </a>
                </div>
            </div>
            <div>

            </div>

        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
