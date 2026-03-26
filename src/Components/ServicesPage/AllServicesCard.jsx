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
    <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
      {/* Image Container */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex w-full flex-col lg:w-1/2">
        <span className="text-sm font-bold tracking-widest text-[#0c5adb] uppercase">
          Service {number}
        </span>
        <h3 className="mt-2 text-4xl font-bold text-[#222]">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-[#686868]">
          {shortDesc}
        </p>

        {/* Dropdown */}
        <div className="mt-6 flex flex-col">
          <button
            onClick={onToggle}
            className="flex w-fit items-center gap-2 text-lg font-medium text-[#0c5adb]"
          >
            Learn More
            <FaChevronDown
              className={`text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="rounded-2xl border-l-4 border-[#0c5adb] bg-gray-50 p-6 leading-loose text-[#686868]">
              {longDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
