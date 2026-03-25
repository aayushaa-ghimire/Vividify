import React from 'react';

function AllServices() {
  const services = [
    {
      title: 'Web Development',
      shortDesc:
        'Transform your online presence with high-performance, custom-built websites.',
      longDesc:
        'Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors. We use modern frameworks to ensure your site is fast, secure, and optimized for all devices, from mobile to desktop.',
      image: '../../public/service1.jpg',
    },

    {
      title: 'Software Development',
      shortDesc:
        'Unlock your potential with tailored software built for efficiency and scale.',
      longDesc:
        "We deliver custom solutions that streamline your internal processes and drive innovation. Whether it's a cloud-based platform or a local enterprise tool, we build software that grows alongside your business.",
      image: '../../public/service2.jpg',
    },

    {
      title: 'App Development',
      shortDesc:
        'Create impactful mobile experiences that connect with your customers anywhere.',
      longDesc:
        "From iOS to Android, we design applications with a focus on seamless navigation and high performance. Our apps aren't just functional; they are built to boost user retention and business growth.",
      image: '../../public/service3.jpg',
    },
    {
      title: 'Digital Marketing',
      shortDesc: 'Elevate your brand with targeted online campaigns.',
      longDesc:
        'Our digital marketing services are designed to enhance your online visibility, engage your audience, and drive conversions. We craft strategic campaigns tailored to your brand to ensure measurable results across platforms.',
      image: '../../public/service4.jpg',
    },
    {
      title: 'IT Consulting',
      shortDesc: 'Optimize technology for better business outcomes.',
      longDesc:
        'Our IT consulting services provide expert guidance to streamline processes, enhance system performance, and maximize your technology investments. We help businesses leverage technology for efficiency and growth.',
      image: '../../public/service5.jpg',
    },
    {
      title: 'SEO',
      shortDesc: 'Boost your search engine presence.',
      longDesc:
        'With our SEO services, we implement targeted strategies to improve search rankings, attract organic traffic, and increase user engagement. Our approach ensures your website reaches the right audience effectively.',
      image: '../../public/service6.jpg',
    },
    {
      title: 'Data Management',
      shortDesc: 'Unlock the full potential of your data.',
      longDesc:
        'Our data management services focus on ensuring accuracy, security, and accessibility of your data. We help businesses make informed decisions by turning raw data into actionable insights.',
      image: '../../public/service7.jpg',
    },
    {
      title: 'Social Media Management',
      shortDesc: 'Grow your brand across social platforms.',
      longDesc:
        'We manage and optimize your social media presence through strategic campaigns designed to increase engagement and brand visibility. Our services help you connect with your audience effectively across all channels.',
      image: '../../public/service8.jpg',
    },
  ];

  const [openCount, setOpenCount] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCount(openCount === index ? null : index);
  };
  return (
    <>
      <div></div>
    </>
  );
}

export default AllServices;
