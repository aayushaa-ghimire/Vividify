import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex flex-col gap-[3vw] p-[3vw]'>

          <div>
            <div className='flex'>
              <span className='shadow-2xl w-fit p-[1vw] rounded-3xl border-1 border-[#504D4D]/19'><p className='text-[#0c5adb] font-medium'>Contact Us</p></span>
            </div>
            <div>
              <h1 className='font-bold text-[2.4rem]'>We’re here to build with you.</h1>
            </div>
            <div>
              <p className='text-[#686868] w-[50vw] leading-loose'>Explore our services and discover the right solutions for your needs—from expert consultation to project collaboration and development.</p>
            </div>
          </div>

          <div className='flex  justify-between'>

                <div className='flex flex-col shadow-lg gap-[1vw] p-[1.5vw] justify-center'>
                  <div>
                    {/* icon */}
                  </div>
                  <div>
                    <h4 className='text-[1.3rem] font-medium'>What We Do</h4>
                  </div>
                  <div>
                    <p className='text-[#454545] w-[20vw] leading-loose'>Discover how we transform ideas into real-world digital solutions.</p>
                  </div>
                  <div>
                    <button className="py-[0.7vw]  px-[1.2vw] mr-6 bg-[#0c5adb] text-white  rounded-[1.8vw] hover:bg-[#2045d6] transition-all">Learn More</button>
                  </div>
                </div>

                <div className='flex flex-col shadow-lg gap-[1vw] p-[1.5vw] justify-center'>
                  <div>
                    {/* icon */}
                  </div>
                  <div>
                    <h4 className='text-[1.3rem] font-medium'>Let’s Build Together</h4>
                  </div>
                  <div>
                    <p className='text-[#454545] w-[20vw] leading-loose'>Have an idea? Let’s collaborate and bring it to life.</p>
                  </div>
                  <div>
                    <button className="py-[0.7vw]  px-[1.2vw] mr-6 bg-[#0c5adb] text-white  rounded-[1.8vw] hover:bg-[#2045d6] transition-all">Learn More</button>
                  </div>
                </div>

              <div className='flex flex-col shadow-lg gap-[1vw] p-[1.5vw] justify-center'>
                <div>
                  {/* icon */}
                </div>
                <div>
                  <h4 className='text-[1.3rem] font-medium'>Start a Project</h4>
                </div>
                <div>
                  <p className='text-[#454545] w-[20vw] leading-loose'>Ready to begin? Reach out and let’s create something impactful.</p>
                </div>
                <div>
                  <button className="py-[0.7vw]  px-[1.2vw] mr-6 bg-[#0c5adb] text-white  rounded-[1.8vw] hover:bg-[#2045d6] transition-all">Learn More</button>
                </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Contact
