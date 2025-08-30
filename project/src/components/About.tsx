import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Heart size={32} className="text-orange-500" />,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and authentic recipes passed down through generations'
    },
    {
      icon: <Users size={32} className="text-orange-500" />,
      title: 'Community Favorite',
      description: 'Proudly serving the Karaikal community with consistent quality and taste'
    },
    {
      icon: <Award size={32} className="text-orange-500" />,
      title: 'Quality Ingredients',
      description: 'We use only the freshest ingredients and premium spices for authentic flavors'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Story</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Welcome to Shawarma Spot, where authentic Middle Eastern flavors meet the vibrant culture of Karaikal. 
                Our journey began with a simple mission: to bring the most delicious and authentic shawarmas to our community.
              </p>
              
              <p>
                From our signature marinated meats to our freshly made sauces, every element is crafted with care and attention to detail. 
                We take pride in using traditional cooking methods while maintaining the highest standards of quality and hygiene.
              </p>
              
              <p>
                Beyond shawarmas, we've expanded our menu to include refreshing juices, delightful desserts, and creamy ice creams. 
                And when the mood strikes, we treat our customers to authentic Hyderabad-style biryani that's simply unforgettable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Chef preparing shawarma"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-black/30 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;