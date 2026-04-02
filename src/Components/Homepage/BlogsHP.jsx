import React from 'react';

const BlogsHP = () => {
  const blogPosts = [
    {
      id: 1,
      tag: 'Web Development',
      title: 'How to Build Modern Web Experiences',
      info: 'Mastering clean, high-performance architectures that handle scalability with ease and elegance.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      tag: 'SEO & Growth',
      title: 'Why Content Authority Drives SEO Results',
      info: 'Topical authority is the new currency. Learn how to structure content that dominates rankings.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      tag: 'Digital Marketing',
      title: 'Strategizing for Global Digital Success',
      info: 'Leveraging multi-channel automated funnels to ensure your brand reaches the right global audience.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-[#f8faff] pt-28 px-10 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="text-blue-600 tracking-widest text-[15px] uppercase   font-medium"
          >
            Insights & Blogs
          </span>
          <h2
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="180"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="md:text-[50px] text-[35px] text-[#0f172a] mt-4 leading-tight font-bold"
          >
            Our Latest <span className="text-blue-600">Blogs</span> & Thoughts
          </h2>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
        >
          {blogPosts.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)] hover:-translate-y-4"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem]">
                <img
                  src={item.image}
                  alt="vividify solutions blog"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-white/40 shadow-sm">
                  <span className="text-blue-600 text-[11px] uppercase tracking-widest font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="pt-8 pb-6 px-4">
                <h3 className="text-2xl text-[#1e293b] leading-[1.3] mb-5  font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-normal">
                  {item.info}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <a
                    href="#"
                    className="rounded-[1vw] bg-[#0c5adb] text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsHP;
