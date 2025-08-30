import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { locations, Location } from './data/locations';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [currentLocation, setCurrentLocation] = useState<Location>(locations[0]);
  const { scrollY } = useScrollAnimation();

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLocationChange = (location: Location) => {
    setCurrentLocation(location);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header 
          locations={locations}
          currentLocation={currentLocation}
          onLocationChange={handleLocationChange}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage currentLocation={currentLocation} />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage currentLocation={currentLocation} />} />
          </Routes>
        </main>
        
        <Footer currentLocation={currentLocation} />
        
        {/* Scroll to top button */}
        {scrollY > 500 && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
            aria-label="Scroll to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;