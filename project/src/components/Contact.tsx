import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface ContactProps {
  currentLocation: Location;
}

const Contact: React.FC<ContactProps> = ({ currentLocation }) => {
  const handleWhatsAppOrder = () => {
    const message = "Hi Shawarma Spot, I'd like to place an order.";
    const whatsappUrl = `https://wa.me/${currentLocation.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${currentLocation.phone}`, '_self');
  };

  const handleDirections = () => {
    window.open(currentLocation.mapUrl, '_blank');
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Us</span>
          </h2>
          <p className="text-xl text-gray-300">
            Find us at our convenient location in Karaikal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="mr-3 text-orange-500" size={28} />
                {currentLocation.name}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Address</h4>
                  <p className="text-gray-300">{currentLocation.address}</p>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">{currentLocation.phone}</p>
                </div>
                
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2 flex items-center">
                    <Clock size={20} className="mr-2" />
                    Opening Hours
                  </h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                    <p className="text-sm text-orange-400">Open all days of the week!</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Order via WhatsApp
                </button>
                
                <button
                  onClick={handleCall}
                  className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
            <div className="p-6 bg-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-2">Find Us on Map</h3>
              <p className="text-gray-400">Get directions to our location</p>
            </div>
            
            <div className="relative h-64 lg:h-80 bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={48} className="mx-auto mb-4 text-orange-500" />
                <p className="mb-4">Interactive map location</p>
                <button
                  onClick={handleDirections}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center mx-auto"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;