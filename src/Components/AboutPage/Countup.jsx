import React from 'react'
import { useCountUp } from 'react-countup';


function Countup() {
    useCountUp({ ref: 'counter1', end: 10 });
    useCountUp({ ref: 'counter2', end: 10 });
   useCountUp({ref:"counter3",end:15})
   useCountUp({ref:"counter4",end:99})
  return (
    <>
      <div className='flex gap-[12vw] px-[3vw] py-[4vw] rounded-3xl mt-[8vw] justify-center bg-gradient-to-r from-[#0b1f8f] to-[#1b83bf]'>
        <div >
          <div className='font-bold text-[5rem] text-[#ffffff]'><span id="counter1" />+</div>
          <div className='text-[#ffffff]'>Active Coustomer</div>
        </div>
        <div >
          <div className='font-bold text-[5rem] text-[#ffffff]'><span id="counter2" />+</div>
          <div className='text-[#ffffff]'>Expert Members</div>
        </div>
        <div >
          <div className='font-bold text-[5rem] text-[#ffffff]'><span id="counter3" />+</div>
          <div className='text-[#ffffff]'>Satisfied Customers</div>
        </div>
        <div >
          <div className='font-bold text-[5rem] text-[#ffffff]'> <span id="counter4" />+</div>
          <div className='text-[#ffffff]'>Satisfaction Rate</div>
        </div>
      </div>
    </>
  )
}

export default Countup
