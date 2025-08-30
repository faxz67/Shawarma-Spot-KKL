import React from 'react';
import Hero from '../components/Hero';
import FeaturedShawarmas from '../components/FeaturedShawarmas';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface HomePageProps {
  currentLocation: Location;
}

const HomePage: React.FC<HomePageProps> = ({ currentLocation }) => {
  return (
    <div className="pt-20">
      <Hero currentLocation={currentLocation} />
      <FeaturedShawarmas />
    </div>
  );
};

export default HomePage;