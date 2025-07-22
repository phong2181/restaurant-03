import { Dish } from '../types/Dish';
import MenuCard from './MenuCard';

type Beverage = {
  name: string;
  price: string;
};

export default function MenuSection({
  menuItems,
  beverages,
}: {
  menuItems: Dish[];
  beverages: Beverage[];
}) {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each dish is carefully crafted using traditional techniques and the finest seasonal ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuItems.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Beverages */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Beverages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beverages.map((beverage, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-gray-700">{beverage.name}</span>
                <span className="font-semibold text-amber-600">{beverage.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
