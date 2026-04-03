import React from 'react';

function BlogSidebar() {
  return (
    <aside className="space-y-[2.5rem] sticky top-[2rem]">
      <div className="bg-white border border-gray-100 rounded-[2rem] p-[2.5rem] shadow-sm">
        <h3 className="text-[1.25rem] font-bold mb-[1.5rem]">Recent Posts</h3>
        <div className="space-y-[1.5rem]">
          {/* Recent Post 1 */}
          <div className="group cursor-pointer">
            <p className="text-[0.7rem] text-gray-400 uppercase font-bold mb-[0.25rem]">
              Annapurna
            </p>
            <h4 className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
              Tilicho Lake Trail
            </h4>
          </div>

          {/* Recent Post 2 */}
          <div className="group cursor-pointer border-t border-gray-50 pt-[1.5rem]">
            <p className="text-[0.7rem] text-gray-400 uppercase font-bold mb-[0.25rem]">
              Everest
            </p>
            <h4 className="font-bold leading-tight group-hover:text-blue-600 transition-colors">
              Base Camp Survival
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-[2rem] p-[2.5rem] shadow-sm">
        <h3 className="text-[1.25rem] font-bold mb-[1.5rem]">
          Filter by Category
        </h3>

        {/* Filtering */}
        <div className="flex flex-col gap-[0.75rem]">
          <button className="flex justify-between items-center p-[1rem] rounded-[1.2rem] bg-blue-600 text-white shadow-md shadow-blue-100 transition-all">
            <span className="font-semibold italic">All</span>
          </button>

          <button className="flex justify-between items-center p-[1rem] rounded-[1.2rem] bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent transition-all">
            <span className="font-semibold italic">SEO</span>
          </button>

          <button className="flex justify-between items-center p-[1rem] rounded-[1.2rem] bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent transition-all">
            <span className="font-semibold italic">Mountaineering</span>
          </button>

          <button className="flex justify-between items-center p-[1rem] rounded-[1.2rem] bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent transition-all">
            <span className="font-semibold italic">Digital Marketing</span>
          </button>

          <button className="flex justify-between items-center p-[1rem] rounded-[1.2rem] bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent transition-all">
            <span className="font-semibold italic">Web Development</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;
