import React from 'react';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
function Help() {
  return (
    <>
      <div className="mt-[5vw] mb-[10vw] flex justify-around align-middle">
        <div className="flex w-[40vw] flex-col gap-[3vw]">
          <div className="flex flex-col leading-relaxed">
            <span className="w-fit rounded-3xl border-1 border-[#504D4D]/19 p-[1vw] shadow-2xl">
              <p className="font-medium text-[#0c5adb]">Contact Us</p>
            </span>
            <h1 className="text-[2rem] font-bold">
              Ready to Achieve Business Success?
            </h1>
            <p className="w-[30vw] text-[#686868]">
              Partner with us for expert solutions and support tailored to your
              needs. Let’s turn your goals into reality together!
            </p>
          </div>

          <div className="flex-col leading-loose">
            <ul className="text-[#686868]">
              <li className="flex items-center gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaEnvelope />
                </span>
                vividifysolutions@gmail.com
              </li>
              <li className="flex items-center gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaPhone />
                </span>
                +977-9708763889
              </li>
              <li className="flex items-center gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaClock />
                </span>
                8.00 AM to 5.00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}

        <div className="flex flex-col gap-[1vw] rounded-2xl p-[1.5vw] shadow-md">
          <h1 className="text-[1.5rem] font-medium">Lets talk</h1>
          <div className="flex gap-[1vw]">
            <div className="flex flex-col gap-[1vw]">
              <p className="font-medium text-[#474444]/80">First name</p>
              <input
                type="text"
                placeholder="First name"
                className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
              />
            </div>

            <div className="flex flex-col gap-[1vw]">
              <p className="font-medium text-[#474444]/80">Last name</p>
              <input
                type="text"
                placeholder="Last name"
                className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[1vw]">
            <p className="font-medium text-[#474444]/80">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
            />
          </div>

          <div className="flex flex-col gap-[1vw]">
            <p className="font-medium text-[#474444]/80">Phone number</p>
            <input
              type="number"
              placeholder="Phone Number"
              className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
            />
          </div>

          <div className="">
            <textarea
              placeholder="Enter your message "
              className="h-[10vw] w-full rounded-[0.8vw] p-[0.8vw] shadow outline-0"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="mr-6 rounded-[1.8vw] bg-[#0c5adb] px-[1.2vw] py-[0.7vw] text-white transition-all hover:bg-[#2045d6]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
