import React from 'react'
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
function Help() {
  return (
    <>
      <div className='flex justify-around align-middle mt-[5vw]'>

        <div className='flex flex-col w-[40vw] gap-[3vw] '>

            <div className='flex flex-col leading-relaxed'>
                <span className='shadow-2xl w-fit p-[1vw] rounded-3xl border-1 border-[#504D4D]/15'><p className='text-[#0c5adb] font-medium'>Contact Us</p></span>
                <h1 className='font-bold text-[2rem]'>Ready to Achieve Business Success?</h1>
                <p className='text-[#686868] w-[30vw]'>Partner with us for expert solutions and support tailored to your needs. Let’s turn your goals into reality together!</p>
            </div>

            <div className='flex-col leading-loose'>
                <ul className='text-[#686868]'>
                    <li className='flex gap-[1vw] items-center'><span className='text-[#504D4D]'><FaEnvelope/></span>vividifysolutions@gmail.com</li>
                    <li className='flex gap-[1vw] items-center'><span className='text-[#504D4D]'><FaPhone/></span>+977-9708763889</li>
                    <li className='flex gap-[1vw] items-center'><span className='text-[#504D4D]'><FaClock/></span>8.00 AM to 5.00 PM</li>
                </ul>
            </div>
        </div>


        {/* Form */}

        <div className='shadow-md flex flex-col gap-[1vw] p-[1.5vw] rounded-2xl'>
            <h1 className='font-medium text-[1.5rem]'>Lets talk</h1>
            <div className='flex gap-[1vw]'>

                <div className='flex flex-col gap-[1vw]'>
                    <p className='text-[#474444]/80 font-medium'>First name</p>
                    <input 
                    type="text"
                    placeholder='First name'
                    className='shadow p-[0.8vw] outline-0 rounded-[0.8vw]'
                     />
                </div>

                <div className='flex flex-col gap-[1vw]'>
                    <p className='text-[#474444]/80 font-medium'>Last name</p>
                    <input 
                    type="text"
                    placeholder='Last name' 
                    className='shadow p-[0.8vw] outline-0 rounded-[0.8vw]'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[1vw]'>
                <p className='text-[#474444]/80 font-medium'>Email</p> 
                <input 
                type="email"
                placeholder='Enter your email'
                className='shadow p-[0.8vw] outline-0 rounded-[0.8vw]'
                 />
            </div>

            <div className=' flex flex-col gap-[1vw]'>
                <p className='text-[#474444]/80 font-medium'>Phone number</p>
                <input 
                type="number"
                placeholder='Phone Number'
                className='shadow p-[0.8vw] outline-0 rounded-[0.8vw]'
                 />
            </div>

            <div className=''>
                <textarea
                placeholder='Enter your message '
                className='shadow p-[0.8vw] w-full h-[10vw] outline-0 rounded-[0.8vw]'
                 ></textarea>
            </div>




            <div className='flex justify-center'>
                <button className="py-[0.7vw]  px-[1.2vw] mr-6 bg-[#0c5adb] text-white  rounded-[1.8vw] hover:bg-[#2045d6] transition-all" >Send Message</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Help
