import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface HeaderProps {
  locations: Location[];
  currentLocation: Location;
  onLocationChange: (location: Location) => void;
}

const Header: React.FC<HeaderProps> = ({ locations, currentLocation, onLocationChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
              SS
            </div>
            <h1 className="text-xl font-bold">Shawarma Spot</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-orange-400 transition-colors ${isActive('/') ? 'text-orange-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`hover:text-orange-400 transition-colors ${isActive('/menu') ? 'text-orange-400' : ''}`}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-orange-400 transition-colors ${isActive('/about') ? 'text-orange-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-orange-400 transition-colors ${isActive('/contact') ? 'text-orange-400' : ''}`}
            >
              Contact
            </Link>
            
            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={toggleLocationDropdown}
                className="flex items-center space-x-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
              >
                <MapPin size={16} />
                <span className="text-sm">{currentLocation.name}</span>
              </button>
              
              {isLocationDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white text-black rounded-lg shadow-xl min-w-48">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => {
                        onLocationChange(location);
                        setIsLocationDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                        currentLocation.id === location.id ? 'bg-orange-50 text-orange-600' : ''
                      } ${locations.indexOf(location) === 0 ? 'rounded-t-lg' : ''} ${
                        locations.indexOf(location) === locations.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-600">{location.address}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block hover:text-orange-400 transition-colors ${isActive('/') ? 'text-orange-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              onClick={closeMenu}
              className={`block hover:text-orange-400 transition-colors ${isActive('/menu') ? 'text-orange-400' : ''}`}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`block hover:text-orange-400 transition-colors ${isActive('/about') ? 'text-orange-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`block hover:text-orange-400 transition-colors ${isActive('/contact') ? 'text-orange-400' : ''}`}
            >
              Contact
            </Link>
            
            {/* Mobile Location Selector */}
            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">Current Location:</p>
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => {
                    onLocationChange(location);
                    closeMenu();
                  }}
                  className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                    currentLocation.id === location.id 
                      ? 'bg-orange-600 text-white' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <div className="font-medium">{location.name}</div>
                  <div className="text-sm text-gray-400">{location.address}</div>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;