import React from 'react';

function blogTop() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div>
            <span>{/*Back Arrow*/}</span>
            <p>Back to the blog</p>
          </div>

          <div className="flex">
            <div>
              <p>Expeditions</p>
            </div>

            <div>
              <p>March 29, 2026</p>
            </div>
          </div>
          <div>
            <h1 className="md:text-[50px] text-[35px] text-center text-[#0f172a] mt-4 leading-tight font-bold">
              Mountaineering in Nepal: Where the Earth Touches the Sky
            </h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h5>Himalayan Mountaineering Team</h5>
          </div>
          <div>
            <p className="text-[#0c5adb] text-[0.7rem] font-bold uppercase tracking-widest">
              Expedition Specialists
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogTop;
