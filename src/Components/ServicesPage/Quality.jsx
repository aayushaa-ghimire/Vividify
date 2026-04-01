import React from 'react';

function Quality() {
  return (
    <div className="flex flex-col gap-[8vw] px-[8vw] py-[8vw]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <h1 className="text-3xl font-bold text-black sm:text-4xl lg:text-[2.5rem] leading-tight">
          Focusing on quality,
          <span className="text-[#0c5adb]"> we maintain client's trust</span>
        </h1>
        <p className="text-[1rem] font-normal text-[#686868] lg:w-[40vw] leading-relaxed">
          We ensure that every solution we develop undergoes strict quality
          checks. We build scalable and efficient systems designed for long-term
          reliability and growth.
        </p>
      </div>

      {/* Icons & Labels Section */}
      <div className="flex flex-wrap justify-center gap-10 lg:gap-[4vw]">
        {/* Item 1 - Security */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-28 w-28 md:h-[10vw] md:w-[10vw] items-center justify-center rounded-full bg-[#dee8f9] shadow-md transition-all hover:scale-105">
            <svg
              className="w-10 h-10 text-[#0c5adb]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>
          <span className="text-sm md:text-lg font-normal text-[#4a4a4a]">
            Security
          </span>
        </div>

        {/* Item 2 - Speed */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-28 w-28 md:h-[10vw] md:w-[10vw] items-center justify-center rounded-full bg-[#dee8f9] shadow-md transition-all hover:scale-105">
            <svg
              className="w-10 h-10 text-[#0c5adb]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.54 11 21 11 21z" />
            </svg>
          </div>
          <span className="text-sm md:text-lg font-normal text-[#4a4a4a]">
            Speed
          </span>
        </div>

        {/* Item 3 - Analytics */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-28 w-28 md:h-[10vw] md:w-[10vw] items-center justify-center rounded-full bg-[#dee8f9] shadow-md transition-all hover:scale-105">
            <svg
              className="w-10 h-10 text-[#0c5adb]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
            </svg>
          </div>
          <span className="text-sm md:text-lg font-normal text-[#4a4a4a]">
            Data
          </span>
        </div>

        {/* Item 4 - Settings */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-28 w-28 md:h-[10vw] md:w-[10vw] items-center justify-center rounded-full bg-[#dee8f9] shadow-md transition-all hover:scale-105">
            <svg
              className="w-10 h-10 text-[#0c5adb]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
          </div>
          <span className="text-sm md:text-lg font-normal text-[#4a4a4a]">
            Process
          </span>
        </div>

        {/* Item 5 - Quality */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-28 w-28 md:h-[10vw] md:w-[10vw] items-center justify-center rounded-full bg-[#dee8f9] shadow-md transition-all hover:scale-105">
            <svg
              className="w-10 h-10 text-[#0c5adb]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.16 3h-.32L7.21 9l4.79 12 4.79-12-4.63-6zM7.56 18.63L14.43 9H4.7l2.86 9.63zM19.3 9h-9.73l6.87 9.63L19.3 9z" />
            </svg>
          </div>
          <span className="text-sm md:text-lg font-normal text-[#4a4a4a]">
            Quality
          </span>
        </div>
      </div>
    </div>
  );
}

export default Quality;
