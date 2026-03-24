import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
     <div className='flex flex-col bg-[#ccdfff] shadow gap-[2vw] px-[8vw] py-[5vw] mt-[4vw]'>


      {/* Top Section */}

        <div className='flex justify-between items-center'>
            <div>
              <img src="../../public/vividify-logo.png" alt="logo " className='w-[25vw]' />
            </div>

            <div>
              <p className='w-[40vw] text-[#686868]'>Empowering businesses with innovative IT solutions, expert support, and a commitment to excellence for unparalleled growth and success.</p>
            </div>
        </div>


      {/* Mid Section */}
          <div className='flex justify-between gap-[2vw] w-full py-[2vw] border-y-[#686868]/50 border-y-[0.1vw] border-x-0 '>
            
            {/* <div>
              <div>
              <img src="../../public/vividify-logo.png" alt="logo " className='w-[15vw]' />
            </div>
            </div> */}
            
            <div className='flex gap-[5vw] justify-center'>
              <div className='flex flex-col gap-[1.4vw]'>
                <h4 className='font-medium text-[1.3rem] text-[#222222]'>Services</h4>

                <ul className='leading-[2.2vw] items-center text-[#686868]'>
                  <li><a href='...'>Website Development</a></li>
                  <li className=''><a href='...'>Digital Marketing</a></li>
                  <li><a href='...'>Search Engine Optimization</a></li>
                  <li><a href='...'>App Development</a></li>
                </ul>
              </div>


              <div className='flex flex-col gap-[1.4vw]'>
                <h4 className='font-medium text-[1.3rem] text-[#222222]'>Work</h4>
                <ul className='leading-[2.2vw] items-center text-[#686868]'>
                  <li><a href='...'>About Us</a></li>
                  <li><a href='...'>Services</a></li>
                  <li><a href='...'>Careers</a></li>
                  <li><a href='...'>Contact</a></li>
                </ul>
              </div>


              <div className='flex flex-col gap-[1.4vw]'>
                <h4 className='font-medium text-[1.3rem] text-[#222222]'>Contact Us</h4>
                <ul className='leading-[2.2vw] items-center text-[#686868]'>
                <li><a href='...'>Email</a></li>
                <li><a href='...'>Phone</a></li>
                <li><a href='...'>Location</a></li>
                </ul>
              </div>

            </div>  

            <div className='flex flex-col gap-[1.3vw] ju'>
              <div> 
                <h4 className='font-medium text-[1.3rem] text-[#222222]'>Find Us on:</h4>
              </div>

              <div className='flex gap-[1vw] text-[#222222]'>

                <a href="https://facebook.com" target="_blank">
                  <span className='text-[1.4rem] text-[#504D4D]'><FaFacebook /></span>
                </a>

                <a href="https://instagram.com" target="_blank">
                   <span className='text-[1.4rem] text-[#504D4D]'><FaInstagram /></span>
                </a>

                <a href="https://linkedin.com" target="_blank">
                   <span className='text-[1.4rem] text-[#504D4D]'><FaLinkedin /></span>
                </a>

                <a href="https://wa.me/your-number">
                   <span className='text-[1.4rem]'><FaWhatsapp /></span>
                </a>

              </div>

            </div>
        </div>  


        {/* Last Part */}

        <div className='flex justify-between '>
           <p className='text-[#686868]'>©Copyrights All rights reserved</p> 

           <ul className='flex  gap-[1vw] text-[#686868]'>
            <li>privacy Policy</li>
            <li>Terms Of Use</li>
           </ul>
        </div>

     </div>
    </>
  )
}

export default Footer
