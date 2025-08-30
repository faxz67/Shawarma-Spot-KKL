import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface ContactProps {
  currentLocation: Location;
}

const Contact: React.FC<ContactProps> = ({ currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Shawarma Spot KKL is a hidden gem! The food was beyond amazing and the atmosphere made the night unforgettable.",
      name: "Mahfuzur Rahman",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "From the moment we walked in, everything was perfect — cozy, elegant, and the flavors were out of this world!",
      name: "Lincoln Levin",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Incredible service, beautiful setting, and dishes that made every bite memorable. Shawarma Spot is now our go-to spot!",
      name: "Skylar Franci",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "The ambiance at Shawarma Spot is unmatched — perfect for a romantic dinner or a special night out. Highly recommend!",
      name: "Talan Rhiel Madsen",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      quote: "Every dish was a masterpiece. You can truly taste the passion and quality in every bite. Can't wait to come back!",
      name: "Martin Culhane",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      quote: "Shawarma Spot delivered an experience, not just a meal. Stunning presentation, amazing flavors, and a vibe you can't find anywhere else.",
      name: "Abram George",
      title: "Founder of DevioNex",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 3);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 3) % 3);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * 6;
    return testimonials.slice(startIndex, startIndex + 6);
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="min-h-screen bg-[#fef7f1] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Trusted by Our Guest
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by our guest for consistently delicious meals, exceptional service, and a dining experience that keeps them coming back.
            </p>
          </div>



          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Quote */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information Section */}
          <div className="mt-20 bg-white rounded-3xl shadow-lg p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                Ready to experience the best shawarma in Karaikal? Contact us today!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">{currentLocation.address}</p>
                    <p className="text-gray-600">Karaikal, Puducherry</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-lg font-bold text-green-600">5:00 PM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <button
                      onClick={() => window.open(`tel:8428495773`, '_self')}
                      className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors cursor-pointer"
                    >
                      8428495773
                    </button>
                    <p className="text-gray-600">Call us for reservations</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg mb-6">Quick Actions</h4>
                
                                 <button 
                   onClick={() => {
                     const message = "Hi Shawarma Spot KKL, I'd like to place an order.";
                     const whatsappUrl = `https://wa.me/918428495773?text=${encodeURIComponent(message)}`;
                     window.open(whatsappUrl, '_blank');
                   }}
                   className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center"
                 >
                   <Star size={20} className="mr-3" />
                   Order via WhatsApp
                 </button>
               
                 
                 <button 
                   onClick={() => {
                     const mapUrl = "https://google.com/maps?sca_esv=c47268d37cf876ba&output=search&q=shawarma+spot+karaikal&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2q_8y2WrDL2IgCAXaSQ3_zYrjWvpf9-QlhQU4Z6-vjWetaZ6AHIcpt0_zYkg0AsL4o5STFjwnqC-OZyjWLeDcIawphLHroHHvL4CrJmSsNpO6ZesGLcqOoefoWEdKO05NxcvwnQ&entry=mc&ved=1t:200715&ictx=111";
                     window.open(mapUrl, '_blank');
                   }}
                   className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center"
                 >
                   <Star size={20} className="mr-3" />
                   Get Directions
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;