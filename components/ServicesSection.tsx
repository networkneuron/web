import React from 'react';
import { services } from '../data';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    return (
        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl group hover:border-purple-500 transition-all duration-300">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="relative z-10">
                <Icon className="w-10 h-10 mb-4 text-purple-400" />
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
            </div>
        </div>
    );
};


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Expertise</h2>
          <p className="text-lg text-gray-400 mt-2">We offer a complete suite of creative services for the Web3 era.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;