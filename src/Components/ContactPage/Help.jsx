import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

function Help() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted Successfully:', data);
  };

  return (
    <div className="mb-30 bg-[#f8faff] px-[8vw] py-12 lg:py-20">
      <div className="mx-auto flex flex-col items-center justify-around gap-[12vw] lg:flex-row lg:items-start lg:gap-0">
        
        <div className="flex w-full flex-col gap-[8vw] lg:w-[40vw] lg:gap-[3vw]">
          <div className="flex flex-col leading-relaxed">
            <span className="w-fit rounded-3xl border border-[#0c5adb]/20 bg-white px-6 py-2 shadow-sm">
              <p className="font-medium text-[#0c5adb]">Contact Us</p>
            </span>
            <h1 className="mt-[4vw] text-[2rem] font-bold text-[#111] lg:mt-6 lg:text-[2.2rem]">
              Ready to Achieve Business Success?
            </h1>
            <p className="mt-[2vw] w-full text-[#686868] lg:mt-4 lg:w-[30vw]">
              Partner with us for expert solutions and support tailored to your
              needs. Let’s turn your goals into reality together!
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="space-y-4 text-[#686868]">
              <li className="flex items-center gap-4">
                <span className="text-[#0c5adb]">
                  <FaEnvelope />
                </span>
                vividifysolutions@gmail.com
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#0c5adb]">
                  <FaPhone />
                </span>
                +977-9708763889
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#0c5adb]">
                  <FaClock />
                </span>
                8.00 AM to 5.00 PM
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[6vw] rounded-2xl bg-white p-[8vw] shadow-xl shadow-blue-900/5 lg:w-auto lg:gap-[1.5vw] lg:p-[2.5vw]"
        >
          <h1 className="text-center text-[1.8rem] font-bold text-[#111] lg:text-left lg:text-[1.5rem]">
            Lets talk
          </h1>

          <div className="flex flex-col gap-[6vw] lg:flex-row lg:gap-[1vw]">
            <div className="flex flex-col gap-[3vw] lg:gap-[0.5vw]">
              <p className="font-medium text-[#474444]">First name</p>
              <input
                {...register('firstName', { required: true })}
                type="text"
                placeholder="First name"
                className="rounded-xl border border-gray-200 p-[4vw] outline-none transition-all focus:border-[#0c5adb] lg:rounded-lg lg:p-[0.8vw]"
              />
            </div>

            <div className="flex flex-col gap-[3vw] lg:gap-[0.5vw]">
              <p className="font-medium text-[#474444]">Last name</p>
              <input
                {...register('lastName', { required: true })}
                type="text"
                placeholder="Last name"
                className="rounded-xl border border-gray-200 p-[4vw] outline-none transition-all focus:border-[#0c5adb] lg:rounded-lg lg:p-[0.8vw]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[3vw] lg:gap-[0.5vw]">
            <p className="font-medium text-[#474444]">Email</p>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 p-[4vw] outline-none transition-all focus:border-[#0c5adb] lg:rounded-lg lg:p-[0.8vw]"
            />
          </div>

          <div className="flex flex-col gap-[3vw] lg:gap-[0.5vw]">
            <p className="font-medium text-[#474444]">Phone number</p>
            <input
              {...register('phone', { required: true })}
              type="number"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-200 p-[4vw] outline-none transition-all focus:border-[#0c5adb] lg:rounded-lg lg:p-[0.8vw]"
            />
          </div>

          <div className="flex flex-col gap-[3vw] lg:gap-[0.5vw]">
            <p className="font-medium text-[#474444]">Message</p>
            <textarea
              {...register('message', { required: true })}
              placeholder="Enter your message"
              className="h-[40vw] w-full rounded-xl border border-gray-200 p-[4vw] outline-none transition-all focus:border-[#0c5adb] lg:h-[8vw] lg:rounded-lg lg:p-[0.8vw] resize-none"
            ></textarea>
          </div>

          <div className="mt-[4vw] flex justify-center lg:mt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0c5adb] py-[4vw] font-bold text-white transition-all hover:bg-[#0a4cbd] lg:rounded-lg lg:px-10 lg:py-[0.8vw] active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Help;