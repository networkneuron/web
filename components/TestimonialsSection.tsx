import React from 'react';
import { testimonials } from '../data';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 h-full flex flex-col">
        <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
        <div className="mt-6 flex items-center">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-purple-400">{testimonial.company}</p>
            </div>
        </div>
    </div>
);


const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Our Partners Say</h2>
          <p className="text-lg text-gray-400 mt-2">Building success stories, one project at a time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;