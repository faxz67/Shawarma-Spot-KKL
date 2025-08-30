import React from 'react';
import Contact from '../components/Contact';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface ContactPageProps {
  currentLocation: Location;
}

const ContactPage: React.FC<ContactPageProps> = ({ currentLocation }) => {
  return (
    <div className="pt-20 min-h-screen">
      <Contact currentLocation={currentLocation} />
    </div>
  );
};

export default ContactPage;