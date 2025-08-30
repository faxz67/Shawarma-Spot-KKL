import React from 'react';
import { Star, Clock } from 'lucide-react';

interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  prepTime: string;
  isPopular?: boolean;
}

const FeaturedShawarmas: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    {
      id: '1',
      name: 'Chicken Shawarma Supreme',
      description: 'Tender marinated chicken with fresh vegetables, garlic sauce, and our signature spice blend',
      price: '₹120',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4.8,
      prepTime: '8-10 min',
      isPopular: true
    },
    {
      id: '2',
      name: 'Mutton Shawarma Deluxe',
      description: 'Succulent mutton pieces with traditional Middle Eastern spices and tahini sauce',
      price: '₹150',
      image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4.9,
      prepTime: '10-12 min'
    },
    {
      id: '3',
      name: 'Mix Shawarma Special',
      description: 'Perfect combination of chicken and mutton with our house special sauce',
      price: '₹140',
      image: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4.7,
      prepTime: '10-12 min',
      isPopular: true
    },
    {
      id: '4',
      name: 'Veg Shawarma Fusion',
      description: 'Grilled vegetables with hummus, fresh herbs, and Mediterranean flavors',
      price: '₹100',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      rating: 4.6,
      prepTime: '6-8 min'
    }
  ];

  const handleWhatsAppOrder = (itemName: string) => {
    const message = `Hi Shawarma Spot, I'd like to order ${itemName}. Please let me know the availability.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Shawarmas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and delicious shawarma creations, crafted with authentic flavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {item.price}
                </div>
                {item.isPopular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full font-bold text-xs">
                    POPULAR
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                {/* Rating and Prep Time */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-orange-400">
                    <Star size={16} className="mr-1 fill-current" />
                    <span className="font-semibold">{item.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-1" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(item.name)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShawarmas;