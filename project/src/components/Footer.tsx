import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Clock, Mail } from 'lucide-react';

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
    const message = "Hi Shawarma Spot KKL, I'd like to place an order.";
    const whatsappUrl = `https://wa.me/918428495773?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapRedirect = () => {
    const mapUrl = "https://google.com/maps?sca_esv=c47268d37cf876ba&output=search&q=shawarma+spot+karaikal&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2q_8y2WrDL2IgCAXaSQ3_zYrjWvpf9-QlhQU4Z6-vjWetaZ6AHIcpt0_zYkg0AsL4o5STFjwnqC-OZyjWLeDcIawphLHroHHvL4CrJmSsNpO6ZesGLcqOoefoWEdKO05NxcvwnQ&entry=mc&ved=1t:200715&ictx=111";
    window.open(mapUrl, '_blank');
  };

  const handleQuickLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-transparent to-orange-600"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 group">
            <h3 className="text-3xl font-serif font-bold text-white mb-6 transition-all duration-500 group-hover:text-orange-400 group-hover:scale-105 transform">
              Shawarma Spot
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md transition-all duration-500 group-hover:text-white group-hover:scale-105 transform">
              At Shawarma Spot, every detail is crafted to delight your senses. Immerse yourself in exceptional flavors, 
              authentic Middle Eastern cuisine, and unforgettable dining moments in the heart of Karaikal.
            </p>
          </div>

          {/* Restaurant Quick Links */}
          <div className="group">
            <h4 className="text-lg font-semibold text-white mb-6 transition-all duration-500 group-hover:text-orange-400 group-hover:scale-105 transform">Restaurant</h4>
            <ul className="space-y-4">
              <li className="group/item">
                <Link 
                  to="/" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
              <li className="group/item">
                <Link 
                  to="/menu" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    Menu
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
              <li className="group/item">
                <Link 
                  to="/about" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
              <li className="group/item">
                <Link 
                  to="/contact" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
              <li className="group/item">
                <Link 
                  to="/privacy-policy" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
              <li className="group/item">
                <Link 
                  to="/terms-conditions" 
                  onClick={handleQuickLinkClick} 
                  className="text-gray-300 hover:text-white transition-all duration-500 ease-out text-sm relative inline-block group-hover/item:scale-110 transform"
                >
                  <span className="relative">
                    Terms & Conditions
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 ease-out group-hover/item:w-full rounded-full shadow-lg"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Find Us / Contact Information */}
          <div className="group">
            <h4 className="text-lg font-semibold text-white mb-6 transition-all duration-500 group-hover:text-orange-400 group-hover:scale-105 transform">Find Us</h4>
            <div className="space-y-4">
              <div className="flex items-start group/item p-2 rounded-lg transition-all duration-500 hover:bg-gray-900/50 hover:shadow-xl transform hover:scale-105">
                <MapPin size={18} className="mr-3 mt-1 text-orange-500 flex-shrink-0 transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-orange-400" />
                <span className="text-gray-300 text-sm group-hover/item:text-white transition-all duration-500">Karaikal, Puducherry, India</span>
              </div>
              <div className="flex items-center group/item p-2 rounded-lg transition-all duration-500 hover:bg-gray-900/50 hover:shadow-xl transform hover:scale-105">
                <Phone size={18} className="mr-3 text-orange-500 transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-orange-400" />
                <button
                  onClick={() => window.open(`tel:8428495773`, '_self')}
                  className="text-gray-300 hover:text-white transition-all duration-500 text-sm focus:outline-none group-hover/item:scale-110 transform"
                >
                  +91 8428495773
                </button>
              </div>
              <div className="flex items-center group/item p-2 rounded-lg transition-all duration-500 hover:bg-gray-900/50 hover:shadow-xl transform hover:scale-105">
                <Mail size={18} className="mr-3 text-orange-500 transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-orange-400" />
                <span className="text-gray-300 text-sm group-hover/item:text-white transition-all duration-500">info@shawarmaspotkkl.com</span>
              </div>
              <div className="flex items-center group/item p-2 rounded-lg transition-all duration-500 hover:bg-gray-900/50 hover:shadow-xl transform hover:scale-105">
                <Clock size={18} className="mr-3 text-orange-500 transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-orange-400" />
                <span className="text-gray-300 text-sm group-hover/item:text-white transition-all duration-500">Daily: 5:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 mb-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 group">
            <p className="text-gray-400 text-sm transition-all duration-500 group-hover:text-white group-hover:scale-105 transform">
              © Copyright Shawarma Spot {currentYear}, All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/karaikal_shawarma_spot/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 p-4 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none group"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} className="text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </a>
            <button
              onClick={handleWhatsAppOrder}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 p-4 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none group"
              aria-label="Order via WhatsApp"
            >
              <Phone size={20} className="text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </button>
            <button
              onClick={handleMapRedirect}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 p-4 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none group"
              aria-label="Get Directions"
            >
              <MapPin size={20} className="text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;