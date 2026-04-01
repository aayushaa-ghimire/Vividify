import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Frequently Asked Questions',
      answer:
        "Have questions about our services? Explore our FAQs for quick answers on project timelines, technologies, support options, and more. We're here to help you every step of the way!",
    },
    {
      question: 'What services do you offer?',
      answer:
        'At Vividify, we offer a wide range of IT solutions, including custom software development, web and mobile app development, IT consulting, and digital transformation strategies tailored to your business needs.',
    },
    {
      question: 'How long does a project typically take?',
      answer:
        'The project timeline varies depending on its scope and complexity. For smaller projects, it can take a few weeks, while more complex projects may require several months. We work closely with our clients to establish clear timelines and ensure timely delivery.',
    },
    {
      question: 'How do you ensure quality in your software?',
      answer:
        'We follow a rigorous development process that includes regular code reviews, automated testing, and continuous integration practices. Our team adheres to industry best practices and uses cutting-edge tools to ensure the highest quality standards in every project.',
    },
    {
      question: 'Can you help with ongoing support and maintenance?',
      answer:
        'Yes, Vividify offers comprehensive post-launch support and maintenance services. We provide ongoing monitoring, updates, and enhancements to ensure your software continues to perform optimally and adapts to changing business requirements.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Our pricing model is flexible and tailored to each client’s project needs. We offer both fixed-price contracts for defined projects and time-and-materials contracts for ongoing or evolving projects. Contact us for a detailed quote based on your specific requirements.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'At Vividify, we work with a wide array of modern technologies, including but not limited to JavaScript (React, Node.js), PHP (Laravel), Python, Ruby on Rails, cloud platforms (AWS, Azure), and databases like MySQL, PostgreSQL, and MongoDB. We select the best technology stack based on the unique needs of each project.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common <br />
            <span className="text-[#0c5adb]">Questions</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#0c5adb] bg-white shadow-md'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${isOpen ? 'text-[#0c5adb]' : 'text-black'}`}
                  >
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`h-5 w-5 text-[#0c5adb] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-100 px-5 pb-6 pt-2 sm:px-6">
                    <p className="text-[0.95rem] leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-gray-600">
          Still have questions?{' '}
          <button className="font-bold text-[#0c5adb] hover:underline">
            Contact our support
          </button>
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
