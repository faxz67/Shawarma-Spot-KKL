import React, { useEffect, useState } from 'react';
import { ChefHat, Clock } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface HeroProps {
  currentLocation: Location;
}

const Hero: React.FC<HeroProps> = ({ currentLocation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = "Hi Shawarma Spot, I'd like to place an order.";
    const whatsappUrl = `https://wa.me/${currentLocation.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${currentLocation.phone}`, '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex items-center justify-center mb-6">
          <ChefHat size={64} className="text-orange-500 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Shawarma Spot
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-200 animate-fade-in-up">
          Authentic Shawarmas & More in Karaikal
        </p>
        
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
          Experience the finest shawarmas, refreshing juices, delectable desserts, and creamy ice creams. 
          Now serving from {currentLocation.name}!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Order Now via WhatsApp
          </button>
          
          <button
            onClick={handleCall}
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Call Us
          </button>
        </div>

        <div className="flex items-center justify-center text-gray-300 animate-fade-in-up">
          <Clock size={20} className="mr-2" />
          <span>Open Daily: 11:00 AM - 11:00 PM</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;