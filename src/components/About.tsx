 import React from 'react';


 export default function About(){
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Kyoto, Sakura Kaze is a modern Washoku restaurant that honors 
              traditional Japanese culinary techniques while embracing contemporary presentation and seasonal ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Seasonal Ingredients</h3>
              <p className="text-gray-600">We source the finest seasonal ingredients from local Japanese farms and pristine waters.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Traditional Techniques</h3>
              <p className="text-gray-600">Our chefs master time-honored methods passed down through generations of Japanese cuisine.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-rose-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zen Atmosphere</h3>
              <p className="text-gray-600">Experience tranquility in our carefully designed space that reflects Japanese aesthetic principles.</p>
            </div>
          </div>
        </div>
      </section>
    )
 }