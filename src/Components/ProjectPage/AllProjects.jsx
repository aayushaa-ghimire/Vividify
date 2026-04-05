import React, { useState } from 'react';

function AllProjects() {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      name: 'S.P Architects & Engineers',
      link: 'https://sparchitects.com.np/',
      category: 'CONSTRUCTION',
      img: 'https://images.unsplash.com/photo-1503387762-592eca39ef5e?q=80&w=800',
    },
    {
      name: 'Himalayan Healers',
      link: 'https://himalayanhealer.com/',
      category: 'SERVICES',
      img: '',
    },
    {
      name: 'Habibi Self Drive',
      link: 'https://habibiselfdrive.com/',
      category: 'SERVICES',
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800',
    },
    {
      name: 'Avenues Training & Research Center',
      link: 'https://avenuestraining.com.np/',
      category: 'SERVICES',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb280714582?q=80&w=800',
    },
    {
      name: 'Dahal & Sons Construction',
      link: 'https://dahalandsonsconstruction.com.np/',
      category: 'CONSTRUCTION',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
    },
    {
      name: 'Dwarka Palace',
      link: 'https://dwarkapalace.com.np/',
      category: 'CONSTRUCTION',
      img: '../../public/DwarkaPalace.png',
    },
    {
      name: 'United Infra Equipment Nepal',
      link: 'https://uienepal.com/',
      category: 'CONSTRUCTION',
      img: 'https://images.unsplash.com/photo-1581094288338-2314dd9a5e2d?q=80&w=800',
    },
    {
      name: 'Pyramid Engineering Services',
      link: 'https://pes-lalitpur.com/',
      category: 'CONSTRUCTION',
      img: '',
    },
    {
      name: 'Cocoon Buds',
      link: 'https://cocoonbuds.com.np',
      category: 'SERVICES',
      img: '',
    },
    {
      name: 'Tibet Top Earth',
      link: 'https://tibettopearth.com/',
      category: 'TRAVEL',
      img: '',
    },
    {
      name: 'Kunga Travels',
      link: 'https://kungatravels.com/',
      category: 'TRAVEL',
      img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800',
    },
    {
      name: 'Himalayan Mountaineering',
      link: 'https://himalayanmountaineering.com/',
      category: 'TRAVEL',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
    },
    {
      name: 'WBT Group',
      link: 'https://wbtgroup.com.au/',
      category: 'BUSINESS',
      img: '',
    },
  ];

  const categories = ['ALL', 'CONSTRUCTION', 'TRAVEL', 'SERVICES', 'BUSINESS'];
  const filtered =
    filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Our Latest <span className="text-blue-600">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === c
                  ? 'bg-blue-600 text-white '
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-100 mb-6">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-blue-600 text-[8px] font-black px-3 py-1.5 rounded-xl uppercase shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="px-2 text-center">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.name}
                </h3>
                <div className="mt-3 text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Explore Site
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
