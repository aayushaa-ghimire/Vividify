import React from 'react'
import { useCountUp } from 'react-countup'

function Countup() {
  useCountUp({ ref: 'counter1', end: 10, duration: 3, enableScrollSpy:true, scrollSpyDelay:200 })
  useCountUp({ ref: 'counter2', end: 10, duration: 3, enableScrollSpy:true, scrollSpyDelay:200 })
  useCountUp({ ref: 'counter3', end: 15, duration: 3, enableScrollSpy:true, scrollSpyDelay:200 })
  useCountUp({ ref: 'counter4', end: 99, duration: 3, enableScrollSpy:true, scrollSpyDelay:200 })

  return (
    <div className="py-24 px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 bg-gradient-to-r from-[#0b1f8f] to-[#1b83bf] p-12 rounded-[2rem] shadow-xl">
        
        <div className="flex flex-col items-center p-6 rounded-xl border border-white/10 transition-all hover:bg-white/5 group">
          <div className="text-6xl font-bold text-white tracking-tighter transition-transform group-hover:scale-110">
            <span id="counter1"  />+
          </div>
          <div className="mt-3 text-blue-100 font-normal text-sm uppercase tracking-wide">
            Active Customers
          </div>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl border border-white/10 transition-all hover:bg-white/5 group">
          <div className="text-6xl font-bold text-white tracking-tighter transition-transform group-hover:scale-110">
            <span id="counter2" />+
          </div>
          <div className="mt-3 text-blue-100 font-normal text-sm uppercase tracking-wide">
            Expert Members
          </div>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl border border-white/10 transition-all hover:bg-white/5 group">
          <div className="text-6xl font-bold text-white tracking-tighter transition-transform group-hover:scale-110">
            <span id="counter3" />+
          </div>
          <div className="mt-3 text-blue-100 font-normal text-sm uppercase tracking-wide">
            Satisfied Clients
          </div>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl border border-white/10 transition-all hover:bg-white/5 group">
          <div className="text-6xl font-bold text-white tracking-tighter transition-transform group-hover:scale-110">
            <span id="counter4" />%
          </div>
          <div className="mt-3 text-blue-100 font-normal text-sm uppercase tracking-wide">
            Success Rate
          </div>
        </div>

      </div>
    </div>
  )
}

export default Countup