import React from 'react';
import { SERVICES_DATA, getIcon } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Comprehensive web design and development solutions tailored to help your business grow in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:bg-dark-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 mb-8 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Custom Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Responsive Layout
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> SEO Optimized
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="block w-full py-3 text-center border border-slate-600 text-white rounded-lg hover:bg-blue-600 hover:border-transparent transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;