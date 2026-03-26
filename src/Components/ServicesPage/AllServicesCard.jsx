import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AllServicesCard = ({
  title,
  shortDesc,
  longDesc,
  image,
  isOpen,
  onToggle,
  number,
}) => {
  return (
    <div className="flex h-full items-start gap-8 rounded-[2rem] border border-blue-50 bg-[#f4f8ff] p-8 shadow-sm">
      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-grow flex-col">
        <span className="mb-1 text-[0.75rem] font-bold tracking-widest text-[#0c5adb] uppercase">
          Service {number}
        </span>
        <h3 className="mb-2 text-xl font-bold text-[#222] lg:text-2xl">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-[#686868]">
          {shortDesc}
        </p>

        <button
          onClick={onToggle}
          className="flex w-fit items-center gap-2 text-sm font-bold text-[#0c5adb]"
        >
          Learn More
          <FaChevronDown className="text-[10px]" />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-6 max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="rounded-xl border-l-4 border-[#0c5adb] bg-white p-5 text-sm leading-relaxed text-[#555] shadow-sm">
            {longDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
