import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AllServicesCard = ({ title, shortDesc, longDesc, image, isOpen, onToggle, number }) => {
  return (
    <div className="rounded-2xl border border-blue-50 bg-[#f4f8ff] p-6 shadow-sm">
      
      {/* Simple Grid: Image on top for mobile, Side-by-side for desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[100px_1fr] items-start">
        
        {/* Image Box */}
        <div className="h-24 w-24 overflow-hidden rounded-xl mx-auto sm:mx-0">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        {/* Text Area */}
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-bold tracking-widest text-[#0c5adb] uppercase">
            Service {number}
          </span>
          <h3 className="mb-2 text-xl font-bold text-[#222]">
            {title}
          </h3>
          <p className="mb-4 text-sm font-normal leading-relaxed text-[#686868]">
            {shortDesc}
          </p>

          <button
            onClick={onToggle}
            className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#0c5adb] uppercase"
          >
            {isOpen ? 'Close' : 'Learn More'}
            <FaChevronDown className={isOpen ? 'rotate-180' : ''} />
          </button>
        </div>
      </div>

      {/* Expandable Section - Very basic transition */}
      {isOpen && (
        <div className="mt-6 border-l-4 border-[#0c5adb] bg-white p-4">
          <p className="text-sm font-normal leading-relaxed text-[#555]">
            {longDesc}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllServicesCard;