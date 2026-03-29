import React from 'react'
import { useCountUp } from 'react-countup';


function Countdown() {
    useCountUp({ ref: 'counter', end: 1234567 });
   useCountUp({ref:"counter2",end:200})
  return (
    <>
      <div>
        <span id="counter" />
        <span id="counter2" />
      </div>
    </>
  )
}

export default Countdown
