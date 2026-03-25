// import React from 'react';
// import { useState } from 'react';

// function AllServices() {
//   const services = [
//     {
//       title: 'Web Development',
//       shortDesc:
//         'Transform your online presence with high-performance, custom-built websites.',
//       longDesc:
//         'Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors. We use modern frameworks to ensure your site is fast, secure, and optimized for all devices, from mobile to desktop.',
//       image: '../../public/service1.jpg',
//     },

//     {
//       title: 'Software Development',
//       shortDesc:
//         'Unlock your potential with tailored software built for efficiency and scale.',
//       longDesc:
//         "We deliver custom solutions that streamline your internal processes and drive innovation. Whether it's a cloud-based platform or a local enterprise tool, we build software that grows alongside your business.",
//       image: '../../public/service2.jpg',
//     },

//     {
//       title: 'App Development',
//       shortDesc:
//         'Create impactful mobile experiences that connect with your customers anywhere.',
//       longDesc:
//         "From iOS to Android, we design applications with a focus on seamless navigation and high performance. Our apps aren't just functional; they are built to boost user retention and business growth.",
//       image: '../../public/service3.jpg',
//     },
//     {
//       title: 'Digital Marketing',
//       shortDesc: 'Elevate your brand with targeted online campaigns.',
//       longDesc:
//         'Our digital marketing services are designed to enhance your online visibility, engage your audience, and drive conversions. We craft strategic campaigns tailored to your brand to ensure measurable results across platforms.',
//       image: '../../public/service4.jpg',
//     },
//     {
//       title: 'IT Consulting',
//       shortDesc: 'Optimize technology for better business outcomes.',
//       longDesc:
//         'Our IT consulting services provide expert guidance to streamline processes, enhance system performance, and maximize your technology investments. We help businesses leverage technology for efficiency and growth.',
//       image: '../../public/service5.jpg',
//     },
//     {
//       title: 'SEO',
//       shortDesc: 'Boost your search engine presence.',
//       longDesc:
//         'With our SEO services, we implement targeted strategies to improve search rankings, attract organic traffic, and increase user engagement. Our approach ensures your website reaches the right audience effectively.',
//       image: '../../public/service6.jpg',
//     },
//     {
//       title: 'Data Management',
//       shortDesc: 'Unlock the full potential of your data.',
//       longDesc:
//         'Our data management services focus on ensuring accuracy, security, and accessibility of your data. We help businesses make informed decisions by turning raw data into actionable insights.',
//       image: '../../public/service7.jpg',
//     },
//     {
//       title: 'Social Media Management',
//       shortDesc: 'Grow your brand across social platforms.',
//       longDesc:
//         'We manage and optimize your social media presence through strategic campaigns designed to increase engagement and brand visibility. Our services help you connect with your audience effectively across all channels.',
//       image: '../../public/service8.jpg',
//     },
//   ];

//   const [openCount, setOpenCount] = useState(null);

//   const toggleDropdown = (index) => {
//     setOpenCount(openCount === index ? null : index);
//   };
//   return (
//     <>
//       <div className="mt-[10vw] flex flex-col gap-[3vw]">
//         <div className="flex justify-center">
//           <h1 className="flex w-fit justify-center rounded-2xl border-b-4 border-[#0c5adb] pb-[0.5vw] text-[2.5rem] leading-tight font-medium lg:text-[3rem]">
//             Our Services
//           </h1>
//         </div>

//         <div className="">
//           <div className="width-[100%] flex justify-around bg-amber-950">
//             {/* mapping part  */}
//             <ul>
//               {services.map((services, index) => (
//                 <li key={index} className="flex list-none gap-[5vw]">
//                   {/* individual cards      */}
//                   <div className="flex w-[40vw] flex-col bg-amber-800">
//                     <div>
//                       <h1 className="text-[1.5rem] leading-tight font-medium lg:text-[2.4rem]">
//                         {services.title}
//                       </h1>
//                     </div>
//                     <div>
//                       <p className="leading-loose text-[#686868]">
//                         {services.shortDesc}
//                       </p>
//                       <button
//                         onClick={() => toggleDropdown(index)}
//                         className="relative"
//                       >
//                         Read More
//                       </button>
//                     </div>
//                     {openCount === index && (
//                       <div className="overflow-hidden">
//                         <p className="absolute w-[30vw] rounded-2xl border-l-4 border-[#0c5adb] bg-gray-50 p-6 leading-loose text-[#686868]">
//                           {services.longDesc}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex gap-4">
//                     <div className="mb-4 w-[25vw] overflow-hidden rounded-[2vw] border border-gray-100 shadow-xl">
//                       <img
//                         src={services.image}
//                         alt="img"
//                         className="aspect-square h-full w-full rounded object-cover"
//                       />
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import AllServicesCards from './AllServicesCards';

function AllServices() {
  const [open, setOpen] = useState(null);

  const handleToggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <div className="flex flex-col gap-[8vw] bg-white px-[5vw] py-[10vw] lg:px-[10vw]">
      {/*Heading*/}
      <div className="mb-6 flex w-[100%] justify-center">
        <h1 className="rounded-3xl border-b-4 border-[#0c5adb] px-[1vw] pb-[0.8vw] text-[2.5rem] font-medium lg:text-[3rem]">
          Our Services
        </h1>
      </div>

      <AllServicesCards
        number="01"
        title="Web Development"
        shortDesc="Transform your online presence with high-performance, custom-built websites."
        longDesc="Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors effectively. We use modern frameworks to ensure your site is fast, secure, and optimized for all devices."
        image="../../public/service1.jpg"
        isOpen={open === 'web'}
        onToggle={() => handleToggle('web')}
        isReversed={false}
      />

      {/* 02. Software Development */}
      <AllServicesCards
        number="02"
        title="Software Development"
        shortDesc="Unlock your business potential with tailored solutions that drive innovation."
        longDesc="We deliver tailored software solutions that enhance efficiency and drive innovation across all platforms. Our software is built to scale with your business and automate complex manual tasks."
        image="../../public/service2.jpg"
        isOpen={open === 'soft'}
        onToggle={() => handleToggle('soft')}
        isReversed={true}
      />

      {/* 03. App Development */}
      <AllServicesCards
        number="03"
        title="App Development"
        shortDesc="Create impactful mobile experiences that connect with your customers anywhere."
        longDesc="Our app development services focus on designing user-friendly applications for iOS and Android. We create impactful mobile experiences that boost user engagement and business growth."
        image="../../public/service3.jpg"
        isOpen={open === 'app'}
        onToggle={() => handleToggle('app')}
        isReversed={false}
      />

      {/* 04. Digital Marketing */}
      <AllServicesCards
        number="04"
        title="Digital Marketing"
        shortDesc="Elevate your brand with strategic campaigns and enhanced online visibility."
        longDesc="Utilize strategic campaigns to enhance online visibility and drive conversions. We focus on data-driven marketing to reach your target audience effectively across multiple digital channels."
        image="../../public/service4.jpg"
        isOpen={open === 'marketing'}
        onToggle={() => handleToggle('marketing')}
        isReversed={true}
      />

      {/* 05. IT Consulting */}
      <AllServicesCards
        number="05"
        title="IT Consulting"
        shortDesc="Optimize your technology investments with expert guidance and performance audits."
        longDesc="We offer expert guidance to streamline processes and enhance performance. Our consultants audit your current systems to ensure your technology stack supports your business success."
        image="../../public/service5.jpg"
        isOpen={open === 'consulting'}
        onToggle={() => handleToggle('consulting')}
        isReversed={false}
      />

      {/* 06. SEO */}
      <AllServicesCards
        number="06"
        title="SEO"
        shortDesc="Improve search rankings and attract organic traffic with targeted strategies."
        longDesc="Employ targeted strategies to boost search rankings and attract organic traffic. Our SEO services focus on keyword optimization and link building to enhance user engagement."
        image="../../public/service6.jpg"
        isOpen={open === 'seo'}
        onToggle={() => handleToggle('seo')}
        isReversed={true}
      />

      {/* 07. Data Management */}
      <AllServicesCards
        number="07"
        title="Data Management"
        shortDesc="Maximize the value of your data to drive informed business decisions."
        longDesc="Ensure accuracy, security, and accessibility of your business data. We help you organize and analyze data to drive informed decisions and uncover new growth opportunities."
        image="../../public/service7.jpg"
        isOpen={open === 'data'}
        onToggle={() => handleToggle('data')}
        isReversed={false}
      />

      {/* 08. Social Media Management */}
      <AllServicesCards
        number="08"
        title="Social Media Management"
        shortDesc="Engage audiences and drive conversions through strategic social campaigns."
        longDesc="Elevate your brand with our social media services. We utilize strategic campaigns to enhance visibility, engage with your audience, and drive conversions across all social platforms."
        image="../../public/service8.jpg"
        isOpen={open === 'social'}
        onToggle={() => handleToggle('social')}
        isReversed={true}
      />
    </div>
  );
}

export default AllServices;
