// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
// function Help() {
//   const { register, handleSubmit, formState } = useForm();

//   const onSubmit = (data) => {
//     console.log('Form Submitted Successfully:', data);
//   };

//   return (
//     <>
//       <div className="mt-[5vw] mb-[10vw] flex justify-around align-middle">
//         <div className="flex w-[40vw] flex-col gap-[3vw]">
//           <div className="flex flex-col leading-relaxed">
//             <span className="w-fit rounded-3xl border-1 border-[#504D4D]/19 p-[1vw] shadow-2xl">
//               <p className="font-medium text-[#0c5adb]">Contact Us</p>
//             </span>
//             <h1 className="text-[2rem] font-bold">
//               Ready to Achieve Business Success?
//             </h1>
//             <p className="w-[30vw] text-[#686868]">
//               Partner with us for expert solutions and support tailored to your
//               needs. Let’s turn your goals into reality together!
//             </p>
//           </div>

//           <div className="flex-col leading-loose">
//             <ul className="text-[#686868]">
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaEnvelope />
//                 </span>
//                 vividifysolutions@gmail.com
//               </li>
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaPhone />
//                 </span>
//                 +977-9708763889
//               </li>
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaClock />
//                 </span>
//                 8.00 AM to 5.00 PM
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Form */}

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col gap-[1vw] rounded-2xl bg-white p-[1.5vw] shadow-md"
//         >
//           <h1 className="text-[1.5rem] font-medium">Lets talk</h1>
//           <div className="flex gap-[1vw]">
//             <div className="flex flex-col gap-[1vw]">
//               <p className="font-medium text-[#474444]/80">First name</p>
//               <input
//                 {...register('firstName', { required: true })}
//                 type="text"
//                 placeholder="First name"
//                 className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//               />
//             </div>

//             <div className="flex flex-col gap-[1vw]">
//               <p className="font-medium text-[#474444]/80">Last name</p>
//               <input
//                 {...register('lastName', { required: true })}
//                 type="text"
//                 placeholder="Last name"
//                 className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-[1vw]">
//             <p className="font-medium text-[#474444]/80">Email</p>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             />
//           </div>

//           <div className="flex flex-col gap-[1vw]">
//             <p className="font-medium text-[#474444]/80">Phone number</p>
//             <input
//               {...register('phone', { required: true })}
//               type="number"
//               placeholder="Phone Number"
//               className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             />
//           </div>

//           <div className="">
//             <textarea
//               {...register('message', { required: true })}
//               placeholder="Enter your message"
//               className="h-[10vw] w-full rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             ></textarea>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="mr-6 rounded-[1.8vw] bg-[#0c5adb] px-[1.2vw] py-[0.7vw] text-white transition-all hover:bg-[#2045d6]"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Help;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
// function Help() {
//   const { register, handleSubmit, formState } = useForm();

//   const onSubmit = (data) => {
//     console.log('Form Submitted Successfully:', data);
//   };

//   return (
//     <>
//       <div className="mt-[5vw] mb-[10vw] flex justify-around align-middle">
//         <div className="flex w-[40vw] flex-col gap-[3vw]">
//           <div className="flex flex-col leading-relaxed">
//             <span className="w-fit rounded-3xl border-1 border-[#504D4D]/19 p-[1vw] shadow-2xl">
//               <p className="font-medium text-[#0c5adb]">Contact Us</p>
//             </span>
//             <h1 className="text-[2rem] font-bold">
//               Ready to Achieve Business Success?
//             </h1>
//             <p className="w-[30vw] text-[#686868]">
//               Partner with us for expert solutions and support tailored to your
//               needs. Let’s turn your goals into reality together!
//             </p>
//           </div>

//           <div className="flex-col leading-loose">
//             <ul className="text-[#686868]">
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaEnvelope />
//                 </span>
//                 vividifysolutions@gmail.com
//               </li>
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaPhone />
//                 </span>
//                 +977-9708763889
//               </li>
//               <li className="flex items-center gap-[1vw]">
//                 <span className="text-[#504D4D]">
//                   <FaClock />
//                 </span>
//                 8.00 AM to 5.00 PM
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Form */}

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col gap-[1vw] rounded-2xl bg-white p-[1.5vw] shadow-md"
//         >
//           <h1 className="text-[1.5rem] font-medium">Lets talk</h1>
//           <div className="flex gap-[1vw]">
//             <div className="flex flex-col gap-[1vw]">
//               <p className="font-medium text-[#474444]/80">First name</p>
//               <input
//                 {...register('firstName', { required: true })}
//                 type="text"
//                 placeholder="First name"
//                 className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//               />
//             </div>

//             <div className="flex flex-col gap-[1vw]">
//               <p className="font-medium text-[#474444]/80">Last name</p>
//               <input
//                 {...register('lastName', { required: true })}
//                 type="text"
//                 placeholder="Last name"
//                 className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-[1vw]">
//             <p className="font-medium text-[#474444]/80">Email</p>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             />
//           </div>

//           <div className="flex flex-col gap-[1vw]">
//             <p className="font-medium text-[#474444]/80">Phone number</p>
//             <input
//               {...register('phone', { required: true })}
//               type="number"
//               placeholder="Phone Number"
//               className="rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             />
//           </div>

//           <div className="">
//             <textarea
//               {...register('message', { required: true })}
//               placeholder="Enter your message"
//               className="h-[10vw] w-full rounded-[0.8vw] p-[0.8vw] shadow outline-0"
//             ></textarea>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="mr-6 rounded-[1.8vw] bg-[#0c5adb] px-[1.2vw] py-[0.7vw] text-white transition-all hover:bg-[#2045d6]"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Help;

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

function Help() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted Successfully:', data);
  };

  return (
    <>
      <div className="mt-[15vw] mb-[15vw] flex flex-col items-center justify-around gap-[12vw] px-[8vw] lg:mt-[5vw] lg:mb-[10vw] lg:flex-row lg:items-start lg:gap-0 lg:px-0">
        {/* Left Side Content */}
        <div className="flex w-full flex-col gap-[8vw] lg:w-[40vw] lg:gap-[3vw]">
          <div className="flex flex-col leading-relaxed">
            <span className="w-fit rounded-3xl border-1 border-[#504D4D]/19 p-[3vw] shadow-2xl lg:p-[1vw]">
              <p className="font-medium text-[#0c5adb]">Contact Us</p>
            </span>
            <h1 className="mt-[4vw] text-[2rem] font-bold lg:mt-0 lg:text-[2rem]">
              Ready to Achieve Business Success?
            </h1>
            <p className="mt-[2vw] w-full text-[#686868] lg:mt-0 lg:w-[30vw]">
              Partner with us for expert solutions and support tailored to your
              needs. Let’s turn your goals into reality together!
            </p>
          </div>

          <div className="flex-col leading-[10vw] lg:leading-loose">
            <ul className="text-[#686868]">
              <li className="flex items-center gap-[4vw] lg:gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaEnvelope />
                </span>
                vividifysolutions@gmail.com
              </li>
              <li className="flex items-center gap-[4vw] lg:gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaPhone />
                </span>
                +977-9708763889
              </li>
              <li className="flex items-center gap-[4vw] lg:gap-[1vw]">
                <span className="text-[#504D4D]">
                  <FaClock />
                </span>
                8.00 AM to 5.00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[6vw] rounded-2xl border border-gray-100/50 bg-white p-[8vw] shadow-lg lg:w-auto lg:gap-[1vw] lg:p-[1.5vw]"
        >
          <h1 className="text-center text-[1.8rem] font-medium lg:text-left lg:text-[1.5rem]">
            Lets talk
          </h1>

          {/* Inputs Row Stacking */}
          <div className="flex flex-col gap-[6vw] lg:flex-row lg:gap-[1vw]">
            <div className="flex flex-col gap-[3vw] lg:gap-[1vw]">
              <p className="font-medium text-[#474444]/80">First name</p>
              <input
                {...register('firstName', { required: true })}
                type="text"
                placeholder="First name"
                className="rounded-[2vw] border border-gray-200 p-[4vw] shadow-sm outline-0 lg:rounded-[0.8vw] lg:p-[0.8vw]"
              />
            </div>

            <div className="flex flex-col gap-[3vw] lg:gap-[1vw]">
              <p className="font-medium text-[#474444]/80">Last name</p>
              <input
                {...register('lastName', { required: true })}
                type="text"
                placeholder="Last name"
                className="rounded-[2vw] border border-gray-200 p-[4vw] shadow-sm outline-0 lg:rounded-[0.8vw] lg:p-[0.8vw]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[3vw] lg:gap-[1vw]">
            <p className="font-medium text-[#474444]/80">Email</p>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="rounded-[2vw] border border-gray-200 p-[4vw] shadow-sm outline-0 lg:rounded-[0.8vw] lg:p-[0.8vw]"
            />
          </div>

          <div className="flex flex-col gap-[3vw] lg:gap-[1vw]">
            <p className="font-medium text-[#474444]/80">Phone number</p>
            <input
              {...register('phone', { required: true })}
              type="number"
              placeholder="Phone Number"
              className="rounded-[2vw] border border-gray-200 p-[4vw] shadow-sm outline-0 lg:rounded-[0.8vw] lg:p-[0.8vw]"
            />
          </div>

          <div className="">
            <textarea
              {...register('message', { required: true })}
              placeholder="Enter your message"
              className="h-[40vw] w-full rounded-[2vw] border border-gray-200 p-[4vw] shadow-sm outline-0 lg:h-[10vw] lg:rounded-[0.8vw] lg:p-[0.8vw]"
            ></textarea>
          </div>

          <div className="mt-[4vw] flex justify-center lg:mt-0">
            <button
              type="submit"
              className="w-full rounded-[2vw] bg-[#0c5adb] px-[10vw] py-[4vw] font-semibold text-white transition-all hover:bg-[#2045d6] lg:w-max lg:rounded-[1.8vw] lg:px-[1.2vw] lg:py-[0.7vw]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Help;
