import React from 'react';
import { portfolioItems } from '../data';
import PortfolioCard from './PortfolioCard';


const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Masterpieces</h2>
          <p className="text-lg text-gray-400 mt-2">A glimpse into the worlds we've brought to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;