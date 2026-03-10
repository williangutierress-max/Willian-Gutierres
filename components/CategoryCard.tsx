import React from 'react';
import { Category } from '../types';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="bg-white rounded-[24px] w-48 md:w-64 flex-shrink-0 flex flex-col p-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-100 group transition-all hover:translate-y-[-4px]">
      {/* Image Section */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]">
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Icon Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-sm">
          {category.icon}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;