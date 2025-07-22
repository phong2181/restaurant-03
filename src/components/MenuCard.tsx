import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Dish } from '../types/Dish';

export default function MenuCard({ dish }: { dish: Dish }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
          {dish.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{dish.description}</p>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors duration-200"
        >
          View Details {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {showDetails && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-600">
            <h4 className="font-semibold text-gray-700 mb-2">Ingredients:</h4>
            <p className="text-gray-600 text-sm">{dish.ingredients}</p>
          </div>
        )}
      </div>
    </div>
  );
}
