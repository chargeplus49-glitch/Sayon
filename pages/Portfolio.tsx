import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Business Website',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Modern E-commerce Store',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'SaaS Landing Page',
    category: 'Landing Page',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    category: 'Business Website',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Health & Wellness App',
    category: 'App Design',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A selection of projects we've crafted with passion and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-blue-400 text-sm font-semibold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;