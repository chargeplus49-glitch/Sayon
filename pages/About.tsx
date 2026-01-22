import React from 'react';
import { TECH_STACK } from '../constants';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-blue-500 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877606-3c232a3c70db?q=80&w=1000&auto=format&fit=crop" 
              alt="Workspace" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Building Digital Masterpieces</h1>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            I am a passionate website designer and developer dedicated to helping businesses establish a strong online presence. 
            With years of experience in the industry, I combine creative design with robust engineering to deliver websites that not only look good but perform exceptionally well.
          </p>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            My approach is client-centric. I believe in transparent communication, agile development, and delivering value at every step of the process.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {['Production Ready', 'Responsive Design', 'SEO Optimized', 'Fast Delivery'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white font-medium">
                <CheckCircle className="text-blue-500" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-dark-800 rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 bg-dark-700 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-dark-600 transition-all shadow-lg">
                {tech.icon}
              </div>
              <span className="text-slate-400 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;