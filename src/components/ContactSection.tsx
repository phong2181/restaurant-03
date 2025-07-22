import { Clock, Mail, MapPin, Phone } from "lucide-react";


export default function Contact(){
    return(
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Visit Us</h2>
            <p className="text-xl text-gray-600">Experience the tranquility and exceptional cuisine of Sakura Kaze</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Kyoto, Japan<br/>Traditional District</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-amber-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+81 75-123-4567</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-rose-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-600">Tue-Sun: 6PM-11PM<br/>Closed Mondays</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Reservations</h3>
              <p className="text-gray-600">info@sakurakaze.jp</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Make a Reservation
            </button>
          </div>
        </div>
      </section>
    )
}