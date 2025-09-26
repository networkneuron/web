import React from 'react';
import { Link } from 'react-router-dom';
import type { PortfolioItem } from '../types';
import { PlayCircle } from 'lucide-react';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <Link to={`/portfolio/${item.id}`} className="block relative group overflow-hidden rounded-xl border border-gray-800">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-end p-6">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-purple-300">{item.category}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white" />
            </div>
        </div>
    </Link>
);

export default PortfolioCard;