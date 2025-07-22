

export default function AtmosphereSection(){
    return (
      <section id="atmosphere" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Interior Design & Atmosphere</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Step into a world of tranquility where traditional Japanese aesthetics meet modern comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Minimalist Zen interior with natural wood (cedar & bamboo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Shoji screens and soft paper lantern lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Low tables with tatami seating and a counter bar overlooking the open sushi station</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Bonsai plants and ikebana flower arrangements throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Large windows with a view of a small rock garden and koi pond</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Dining Experience</h3>
              <p className="leading-relaxed opacity-90">
                At Sakura Kaze, guests dine in peaceful surroundings with natural wood tones, 
                soft ambient light, and gentle instrumental koto music. The chefs prepare sushi 
                and tempura at an open counter while guests enjoy the view of a serene garden.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}