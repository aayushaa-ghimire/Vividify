import React from 'react';
import { useCountUp } from 'react-countup';
import { Users, UserCheck, Heart, TrendingUp } from 'lucide-react';

function Countup() {
  useCountUp({ ref: 'counter1', end: 10, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter2', end: 10, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter3', end: 15, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter4', end: 99, duration: 3, enableScrollSpy: true });

  return (
    <div className="bg-white py-28 px-6 font-sans">
      <div className="relative overflow-hidden bg-[#0c5adb] p-12 lg:p-24 rounded-[3.5rem] max-w-7xl mx-auto shadow-3xl shadow-blue-900/40">
        <div className="bg-white/5 opacity-60 blur-3xl rounded-full w-64 h-64 -mr-20 right-10 top-10 absolute"></div>
        <div className="opacity-50 blur-3xl rounded-full w-80 h-80 -ml-20 left-10 bottom-10 bg-blue-400/10 absolute"></div>

        <div className="lg:gap-8 gap-6 grid-cols-2 lg:grid-cols-4 grid relative z-10">
          {/* Card 1 - Active Customers */}
          <div className="backdrop-blur-sm border-white/10 hover:translate-y-[-5px] items-center flex flex-col justify-between p-8 lg:p-10 bg-white/5 border rounded-3xl duration-300 transition-all hover:bg-white/10 hover:border-white/20">
            <div className="text-blue-100 opacity-80 w-16 h-16 flex items-center justify-center">
              <Users size={48} strokeWidth={1.5} />
            </div>
            <div className="text-center w-full mb-2 mt-12 flex flex-col items-center">
              <div className="items-baseline flex text-white">
                <span
                  id="counter1"
                  className="tracking-tighter font-bold text-6xl lg:text-7xl"
                />
                <span className="text-blue-300 text-3xl font-medium ml-1">
                  +
                </span>
              </div>
              <p className="tracking-[0.2em] font-bold uppercase text-white/60 text-[0.7rem] mt-4">
                Active Customers
              </p>
            </div>
          </div>

          {/* Card 2 - Expert Members */}
          <div className="hover:bg-white/10 hover:border-white/20 p-8 lg:p-10 border border-white/10 flex flex-col backdrop-blur-sm items-center justify-between rounded-3xl bg-white/5 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex justify-center opacity-80 text-blue-100 h-16 w-16 items-center">
              <UserCheck size={48} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center mt-12 text-center w-full mb-2">
              <div className="text-white flex items-baseline">
                <span
                  id="counter2"
                  className="text-6xl lg:text-7xl font-bold tracking-tighter"
                />
                <span className="font-medium text-blue-300 ml-1 text-3xl">
                  +
                </span>
              </div>
              <p className="mt-4 text-[0.7rem] font-bold text-white/60 uppercase tracking-[0.2em]">
                Expert Members
              </p>
            </div>
          </div>

          {/* Card 3 - Satisfied Clients */}
          <div className="transition-all duration-300 p-8 lg:p-10 bg-white/5 border-white/10 border hover:translate-y-[-5px] rounded-3xl backdrop-blur-sm flex flex-col items-center justify-between hover:bg-white/10 hover:border-white/20">
            <div className="w-16 items-center flex justify-center text-blue-100 opacity-80 h-16">
              <Heart size={48} strokeWidth={1.5} />
            </div>
            <div className="text-center mb-2 mt-12 flex flex-col items-center w-full">
              <div className="flex items-baseline text-white">
                <span
                  id="counter3"
                  className="font-bold tracking-tighter text-6xl lg:text-7xl"
                />
                <span className="ml-1 text-3xl font-medium text-blue-300">
                  +
                </span>
              </div>
              <p className="text-white/60 font-bold tracking-[0.2em] uppercase mt-4 text-[0.7rem]">
                Satisfied Clients
              </p>
            </div>
          </div>

          {/* Card 4 - Success Rate */}
          <div className="hover:border-white/20 border-white/10 hover:translate-y-[-5px] flex flex-col p-8 lg:p-10 bg-white/5 border rounded-3xl duration-300 items-center transition-all justify-between backdrop-blur-sm hover:bg-white/10">
            <div className="h-16 w-16 flex opacity-80 text-blue-100 justify-center items-center">
              <TrendingUp size={48} strokeWidth={1.5} />
            </div>
            <div className="w-full flex-col mb-2 items-center flex mt-12 text-center">
              <div className="text-white items-baseline flex">
                <span
                  id="counter4"
                  className="tracking-tighter font-bold text-6xl lg:text-7xl"
                />
                <span className="text-blue-300 font-medium text-3xl ml-1">
                  %
                </span>
              </div>
              <p className="uppercase mt-4 tracking-[0.2em] text-white/60 text-[0.7rem] font-bold">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countup;
