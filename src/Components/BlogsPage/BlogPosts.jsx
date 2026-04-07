import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function BlogPosts() {
  const blogPosts = [
    {
      id: 1,
      tag: 'Mountaineering',
      title: 'Mountaineering in Nepal: Where the Earth Touches the Sky',
      info: 'Mastering clean, high-performance architectures that handle scalability with ease and elegance.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
      path: '/blog/mountaineering-nepal',
    },
    {
      id: 2,
      tag: 'SEO',
      title: 'Why Content Authority Drives SEO Results',
      info: 'Topical authority is the new currency. Learn how to structure content that dominates rankings.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
      path: '/blog/mountaineering-nepal',
    },
    {
      id: 3,
      tag: 'Digital Marketing',
      title: 'Strategizing for Global Digital Success',
      info: 'Leveraging multi-channel automated funnels to ensure your brand reaches the right global audience.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
      path: '/blog/mountaineering-nepal',
    },
    {
      id: 5,
      tag: 'SEO',
      title: 'Why Content Authority Drives SEO Results',
      info: 'Topical authority is the new currency. Learn how to structure content that dominates rankings.',
      image:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
      path: '/blog/mountaineering-nepal',
    },
    {
      id: 4,
      tag: 'Web Development',
      title: 'How to Build Modern Web Experiences',
      info: 'Mastering clean, high-performance architectures that handle scalability with ease and elegance.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      path: '/blog/mountaineering-nepal',
    },
  ];

  const tags = ['All', ...new Set(blogPosts.map((item) => item.tag))];

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && tags.includes(category)) {
      setActiveTag(category);
    } else {
      setActiveTag('All');
    }
  }, [searchParams, tags]);

  const filteredBlogs =
    activeTag === 'All'
      ? blogPosts
      : blogPosts.filter((item) => item.tag === activeTag);

  return (
    <>
      <div className="pt-20 px-6 pb-20 md:px-12">
        <div className="max-w-[1400px] flex flex-col gap-8 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <span className="text-blue-600 tracking-widest text-[15px] uppercase font-medium">
              Insights & Blogs
            </span>
            <h2 className="md:text-[50px] text-[32px] text-center text-[#0f172a] mt-4 leading-tight font-bold">
              Our Latest <span className="text-blue-600">Blogs</span> <br /> &
              Thoughts
            </h2>
          </div>

          {/* Responsive Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {tags.map((tag) => (
              <div
                key={tag}
                className={`inline-flex items-center border px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-[#0c5adb] border-[#0c5adb]'
                    : 'bg-[#0c5adb]/5 border-[#0c5adb]/10 hover:bg-[#0c5adb]/10'
                }`}
                onClick={() => {
                  setActiveTag(tag);
                  if (tag === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: tag });
                  }
                }}
              >
                <button
                  className={`text-[0.7rem] font-bold uppercase tracking-widest transition-colors ${
                    activeTag === tag ? 'text-white' : 'text-[#0c5adb]'
                  }`}
                >
                  {tag}
                </button>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {filteredBlogs.map((item) => (
              <div
                key={item.id}
                className="group relative border bg-[#f4f8ff] shadow-xl border-gray-100 rounded-[2.5rem] p-2 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)] hover:-translate-y-2"
              >
                <div className="relative h-[200px] w-full overflow-hidden rounded-[2rem]">
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

                <div className="pt-4 pb-2 px-4">
                  <h3 className="text-xl text-[#1e293b] leading-[1.3] mb-3 font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] leading-relaxed mb-3 font-normal">
                    {item.info}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-200/50 pt-4 pb-2">
                    <Link
                      to={item.path}
                      className="rounded-xl bg-[#0c5adb] text-white px-7 py-3 text-sm font-bold transition-all duration-300 hover:bg-[#0a4bb3] active:scale-95 shadow-md hover:shadow-blue-200"
                    >
                      Go to page
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPosts;
