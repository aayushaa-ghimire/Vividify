import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogSidebar() {
  const categories = [
    { name: 'All', path: '/blogs' },
    { name: 'SEO', path: '/blogs?category=SEO' },
    { name: 'Mountaineering', path: '/blogs?category=Mountaineering' },
    { name: 'Digital Marketing', path: '/blogs?category=Digital%20Marketing' },
    { name: 'Web Development', path: '/blogs?category=Web%20Development' },
  ];

  return (
    <aside className="lg:sticky lg:top-8 space-y-6 lg:space-y-10">
      <div className="hidden lg:block bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
        <div className="space-y-6">
          <NavLink to="/blog/mountaineering-nepal" className="group block">
            <p className="text-[0.7rem] text-gray-400 uppercase font-bold mb-1">
              Annapurna
            </p>
            <h4 className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
              Tilicho Lake Trail
            </h4>
          </NavLink>
          <NavLink
            to="/blog/mountaineering-nepal"
            className="group block border-t border-gray-50 pt-6"
          >
            <p className="text-[0.7rem] text-gray-400 uppercase font-bold mb-1">
              Everest
            </p>
            <h4 className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
              Base Camp Survival
            </h4>
          </NavLink>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 shadow-sm">
        <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
          Filter by Category
        </h3>

        <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[400px] pb-2 lg:pb-0 lg:pr-2">
          {categories.map((category) => (
            <NavLink
              key={category.name}
              to={category.path}
              end={category.path === '/blogs'}
              className={({ isActive }) =>
                `whitespace-nowrap flex justify-between items-center px-6 py-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all border font-semibold italic flex-shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md border-blue-600'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-transparent'
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;
