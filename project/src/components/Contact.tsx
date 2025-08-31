import React from 'react';
import { Star } from 'lucide-react';

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

  return (
    <div className="pt-20 min-h-screen">
      <section className="min-h-screen bg-[#fef7f1] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visit us at our location in Karaikal and experience the best shawarma in town.
            </p>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
              <p className="text-gray-600">
                Shawarma Spot, Church Street, Karaikal - Puducherry - 609602
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125527.123456789!2d79.8500!3d10.9254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3aac1c3c3c3c3c3c%3A0x3aac1c3c3c3c3c3c!2sShawarma+Spot+Karaikal!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shawarma Spot Location"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Map Info Box */}
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Shawarma Spot</h4>
                  <p className="text-gray-600 text-sm">Church Street, Karaikal</p>
                  <p className="text-gray-600 text-sm">Puducherry - 609602</p>
                </div>
                <button
                  onClick={() => {
                    const mapUrl = "https://google.com/maps?sca_esv=c47268d37cf876ba&output=search&q=shawarma+spot+karaikal&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2q_8y2WrDL2IgCAXaSQ3_zYrjWvpf9-QlhQU4Z6-vjWetaZ6AHIcpt0_zYkg0AsL4o5STFjwnqC-OZyjWLeDcIawphLHroHHvL4CrJmSsNpO6ZesGLcqOoefoWEdKO05NxcvwnQ&entry=mc&ved=1t:200715&ictx=111";
                    window.open(mapUrl, '_blank');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <Star size={16} className="mr-2" />
                  View Larger Map
                </button>
              </div>
            </div>
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
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Shawarma Spot,
                      Church Street, Karaikal- Puducherry - 609602</p>
            
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-lg font-bold text-orange-600">4:00 PM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <button
                      onClick={() => window.open(`tel:8428495773`, '_self')}
                      className="text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                      8428495773
                    </button>
                    <p className="text-gray-600">Let's Connect  </p>
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
                   className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center"
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