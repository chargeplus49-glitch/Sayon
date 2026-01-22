import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';
import { HERO_IMAGE_URL, SERVICES_DATA, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* 3D Background Integration */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE_URL} 
            alt="3D Abstract Background" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
            Professional Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Design for Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-12 animate-fade-in-up delay-100">
            We transform your ideas into powerful, high-converting digital experiences. Fill the form and our team will contact you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-200">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Your Website <ArrowRight size={20} />
            </Link>
            <Link 
              to="/portfolio" 
              className="bg-dark-800/50 backdrop-blur border border-slate-600 hover:bg-dark-800 hover:border-slate-500 text-white font-semibold py-4 px-8 rounded-full transition-all flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Top-tier web solutions tailored to your specific industry needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-dark-800 border border-dark-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-400 text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="text-slate-300 hover:text-white font-medium inline-flex items-center border-b border-blue-500 pb-1">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why businesses choose our agency</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just build websites; we build business tools that generate leads and revenue.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Blazing Fast Performance</h4>
                    <p className="text-slate-400 text-sm">Optimized code and assets for 99+ Google PageSpeed scores.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Secure & Scalable</h4>
                    <p className="text-slate-400 text-sm">Built on modern stacks like Next.js and MongoDB with security first.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Dedicated Support</h4>
                    <p className="text-slate-400 text-sm">We are here for you even after the project launch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative bg-dark-900 border border-dark-700 rounded-2xl p-8">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white">Our 4-Step Process</h3>
                  {[
                    { step: '01', title: 'Requirement', desc: 'We analyze your business goals and audience.' },
                    { step: '02', title: 'Design', desc: 'We create stunning mockups and interactive prototypes.' },
                    { step: '03', title: 'Development', desc: 'We code using clean, modern, and efficient technologies.' },
                    { step: '04', title: 'Delivery', desc: 'Launch, testing, and handover with documentation.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-3xl font-black text-dark-700">{item.step}</span>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-dark-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's build a website that converts visitors into loyal customers.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-blue-50 transition-colors"
          >
            Start Your Project Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;