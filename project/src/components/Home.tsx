import React, { useEffect, useState } from 'react';
import { ChefHat, Clock } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface HomeProps {
  currentLocation: Location;
}

const Home: React.FC<HomeProps> = ({ currentLocation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = "Hi Shawarma Spot KKL, I'd like to place an order.";
    const whatsappUrl = `https://wa.me/918428495773?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:8428495773`, '_self');
  };

  const handleMapRedirect = () => {
    const mapUrl = "https://google.com/maps?sca_esv=c47268d37cf876ba&output=search&q=shawarma+spot+karaikal&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2q_8y2WrDL2IgCAXaSQ3_zYrjWvpf9-QlhQU4Z6-vjWetaZ6AHIcpt0_zYkg0AsL4o5STFjwnqC-OZyjWLeDcIawphLHroHHvL4CrJmSsNpO6ZesGLcqOoefoWEdKO05NxcvwnQ&entry=mc&ved=1t:200715&ictx=111";
    window.open(mapUrl, '_blank');
  };

  const featuredShawarmas = [
    {
      id: '1',
      name: 'Chicken Shawarma',
      description: 'Tender marinated chicken with fresh vegetables and garlic sauce',
      price: '₹120',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      popular: true
    },
    {
      id: '2',
      name: 'Mutton Shawarma',
      description: 'Succulent mutton with traditional spices and tahini',
      price: '₹150',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      popular: false
    },
    {
      id: '3',
      name: 'Mix Shawarma',
      description: 'Perfect blend of chicken and mutton with special sauce',
      price: '₹140',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      popular: true
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
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
            <span>Open Daily: 5:00 PM - 10:00 PM</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Shawarmas Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Shawarmas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and delicious shawarmas that our customers love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredShawarmas.map((shawarma) => (
              <div 
                key={shawarma.id} 
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={shawarma.image} 
                    alt={shawarma.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {shawarma.popular && (
                    <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full font-bold">
                    {shawarma.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{shawarma.name}</h3>
                  <p className="text-gray-300 mb-4">{shawarma.description}</p>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
