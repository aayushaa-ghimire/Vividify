import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function Location() {
  return (
    <>
      <div className='flex mb-[10vw] justify-around gap-[20vw] '>

          <div className='w-[25vw]'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.034213992685!2d85.31983629999999!3d27.685337399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2665590799162899%3A0xc2e0a63b637f45b5!2sVividify%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1774349071257!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
          
          <div className='flex flex-col gap-[1.5vw] justify-center'>
              <div className='flex'>
                <span className='shadow-lg w-fit p-[1vw] rounded-3xl border-1 border-[#504D4D]/19'><p className='text-[#0c5adb] font-medium'>Our Location</p></span>
              </div>

              <div className='flex flex-col gap-[2vw]'>

                <div className='flex flex-col gap-[1vw]'>
                  <h1 className='font-bold text-[2.2rem]'>Find Our Office</h1>
                  <p className='text-[#686868] w-[30vw] leading-loose'>Where ideas turn into innovation. Visit us at our Jwagal, Lalitpur office to see our work in action, or connect with us online anytime, from anywhere.</p>
                </div>

                <div className='flex gap-[0.6vw]'>
                      <span className='text-[#504D4D] text-[1.7rem] flex items-center'><FaMapMarkerAlt/></span>
                    {/* <div className='flex gap-[0.4vw] items-center'>
                    </div> */}
                    <div>
                      <h4 className='font-medium text-[1.2rem]'>Vividify Solutions Pvt Ltd</h4>
                      <p className='text-[#686868]'>Jwagal Madhu Marg, Lalitpur 44700</p>
                    </div>
                </div>

              </div>
          </div>
      </div>
    </>
  )
}

export default Location
