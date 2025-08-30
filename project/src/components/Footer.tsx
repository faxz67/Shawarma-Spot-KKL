import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface FooterProps {
  currentLocation: Location;
}

const Footer: React.FC<FooterProps> = ({ currentLocation }) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppOrder = () => {
    const message = "Hi Shawarma Spot, I'd like to place an order.";
    const whatsappUrl = `https://wa.me/${currentLocation.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                SS
              </div>
              <h3 className="text-xl font-bold">Shawarma Spot</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic Middle Eastern cuisine in the heart of Karaikal. 
              Fresh ingredients, traditional recipes, exceptional taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-400 transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-orange-500 flex-shrink-0" />
                <span className="text-sm">{currentLocation.address}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span className="text-sm">{currentLocation.phone}</span>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 text-orange-500 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                  <p className="text-orange-400">Open all week!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Connect & Order</h4>
            
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mb-4"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Order via WhatsApp
            </button>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shawarma Spot. All rights reserved. | Made with ❤️ for food lovers in Karaikal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;