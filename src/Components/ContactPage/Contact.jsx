import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex flex-col'>

          <div>
            <div className='flex'>
              <span className='shadow-2xl w-fit p-[1vw] rounded-3xl border-1 border-[#504D4D]/19'><p className='text-[#0c5adb] font-medium'>Contact Us</p></span>
            </div>
            <div>
              <h1 className='font-bold text-[2.2rem]'>We’re here to build with you.</h1>
            </div>
            <div>
              <p className='text-[#686868] w-[50vw] leading-loose'>Explore our services and discover the right solutions for your needs—from expert consultation to project collaboration and development.</p>
            </div>
          </div>

          <div className='flex'>

                <div className='flex flex-col'>
                  <div>
                    {/* icon */}
                  </div>
                  <div>
                    <h4>What We Do</h4>
                  </div>
                  <div>
                    <p>Discover how we transform ideas into real-world digital solutions.</p>
                  </div>
                  <div>
                    <button>Learn More</button>
                  </div>
                </div>

                <div className='flex flex-col'>
                  <div>
                    {/* icon */}
                  </div>
                  <div>
                    <h4>Let’s Build Together</h4>
                  </div>
                  <div>
                    <p>Have an idea? Let’s collaborate and bring it to life.</p>
                  </div>
                  <div>
                    <button>Learn More</button>
                  </div>
                </div>

              <div className='flex flex-col'>
                <div>
                  {/* icon */}
                </div>
                <div>
                  <h4>Start a Project</h4>
                </div>
                <div>
                  <p>Ready to begin? Reach out and let’s create something impactful.</p>
                </div>
                <div>
                  <button>Learn More</button>
                </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Contact
