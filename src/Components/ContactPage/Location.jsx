// import React from 'react'
// import { FaMapMarkerAlt } from "react-icons/fa";

// function Location() {
//   return (
//     <>
//       <div className='flex mb-[10vw] justify-around gap-[20vw] '>

//           <div className='w-[25vw]'>
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.034213992685!2d85.31983629999999!3d27.685337399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2665590799162899%3A0xc2e0a63b637f45b5!2sVividify%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1774349071257!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//           </div>

//           <div className='flex flex-col gap-[1.5vw] justify-center'>
//               <div className='flex'>
//                 <span className='shadow-lg w-fit p-[1vw] rounded-3xl border-1 border-[#504D4D]/19'><p className='text-[#0c5adb] font-medium'>Our Location</p></span>
//               </div>

//               <div className='flex flex-col gap-[2vw]'>

//                 <div className='flex flex-col gap-[1vw]'>
//                   <h1 className='font-bold text-[2.2rem]'>Find Our Office</h1>
//                   <p className='text-[#686868] w-[30vw] leading-loose'>Where ideas turn into innovation. Visit us at our Jwagal, Lalitpur office to see our work in action, or connect with us online anytime, from anywhere.</p>
//                 </div>

//                 <div className='flex gap-[0.6vw]'>
//                       <span className='text-[#504D4D] text-[1.7rem] flex items-center'><FaMapMarkerAlt/></span>
//                     {/* <div className='flex gap-[0.4vw] items-center'>
//                     </div> */}
//                     <div>
//                       <h4 className='font-medium text-[1.2rem]'>Vividify Solutions Pvt Ltd</h4>
//                       <p className='text-[#686868]'>Jwagal Madhu Marg, Lalitpur 44700</p>
//                     </div>
//                 </div>

//               </div>
//           </div>
//       </div>
//     </>
//   )
// }

// export default Location

import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Location() {
  return (
    <>
      <div className="mb-[15vw] flex flex-col items-center justify-center gap-[10vw] px-[5vw] lg:mb-[5.5vw] lg:flex-row lg:items-center lg:gap-[10vw] lg:px-0">
        <div className="h-[70vw] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[30vw] lg:w-[35vw]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1587848243633!2d85.3190891!3d27.6814984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b4ad33023d%3A0xc3f5c78a08713f04!2sJwagal%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>

        <div className="flex w-full flex-col justify-center gap-[6vw] lg:w-auto lg:gap-[1.5vw]">
          <div className="flex justify-start">
            <span className="w-fit rounded-3xl border-1 border-[#504D4D]/19 p-[3vw] shadow-lg lg:p-[1vw]">
              <p className="font-medium text-[#0c5adb]">Our Location</p>
            </span>
          </div>

          <div className="flex flex-col gap-[5vw] lg:gap-[2vw]">
            <div className="flex flex-col gap-[3vw] lg:gap-[1vw]">
              <h1 className="text-[2rem] font-bold lg:text-[2.2rem]">
                Find Our Office
              </h1>
              <p className="w-full leading-loose text-[#686868] lg:w-[30vw]">
                Where ideas turn into innovation. Visit us at our Jwagal,
                Lalitpur office to see our work in action, or connect with us
                online anytime, from anywhere.
              </p>
            </div>

            <div className="flex items-start gap-[4vw] lg:gap-[0.6vw]">
              <span className="mt-1 flex items-center text-[1.7rem] text-[#504D4D]">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="text-[1.2rem] font-medium">
                  Vividify Solutions Pvt Ltd
                </h4>
                <p className="text-[#686868]">
                  Jwagal Madhu Marg, Lalitpur 44700
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
