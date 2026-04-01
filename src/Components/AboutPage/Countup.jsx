import React from 'react';
import { useCountUp } from 'react-countup';
import { Users, Briefcase, Heart, Globe } from 'lucide-react';

function Countup() {
  useCountUp({ ref: 'counter1', end: 10, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter2', end: 10, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter3', end: 15, duration: 3, enableScrollSpy: true });
  useCountUp({ ref: 'counter4', end: 99, duration: 3, enableScrollSpy: true });

  const stats = [
    {
      id: 'counter1',
      label: 'Active Customers',
      icon: <Users size={16} />,
      suffix: '+',
    },
    {
      id: 'counter2',
      label: 'Expert Members',
      icon: <Briefcase size={16} />,
      suffix: '+',
    },
    {
      id: 'counter3',
      label: 'Satisfied Clients',
      icon: <Heart size={16} />,
      suffix: '+',
    },
    {
      id: 'counter4',
      label: 'Success Rate',
      icon: <Globe size={16} />,
      suffix: '%',
    },
  ];

  return (
    <div className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto bg-[#0c5adb] rounded-[3rem] p-16 lg:p-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-16 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start px-8 border-l border-white/10 first:border-l-0"
            >
              <div className="mb-10 text-blue-200 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>

              <div className="flex items-baseline text-white">
                <span
                  id={stat.id}
                  className="text-7xl lg:text-9xl font-black tracking-tighter leading-none"
                />
                <span className="text-2xl font-bold text-blue-300 ml-1">
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-8 text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countup;
