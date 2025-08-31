import React from 'react';
import { BookOpen, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="min-h-screen bg-[#fef7f1] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <BookOpen size={64} className="text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services. 
              By placing an order or using our website, you agree to be bound by these terms.
            </p>
          </div>

          {/* Terms & Conditions Content */}
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="space-y-8">
              {/* Ordering & Payment */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ordering & Payment Terms</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Order Acceptance:</strong> All orders are subject to acceptance and availability</p>
                      <p>• <strong>Payment Methods:</strong> We accept cash on delivery and digital payments</p>
                      <p>• <strong>Pricing:</strong> All prices are in Indian Rupees (₹) and include applicable taxes</p>
                      <p>• <strong>Order Confirmation:</strong> Orders are confirmed via WhatsApp or phone call</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery & Service */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Delivery & Service Terms</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Delivery Area:</strong> We deliver within Karaikal and surrounding areas</p>
                      <p>• <strong>Delivery Time:</strong> Estimated delivery time is 30-45 minutes</p>
                      <p>• <strong>Service Hours:</strong> We operate daily from 5:00 PM to 10:00 PM</p>
                      <p>• <strong>Minimum Order:</strong> No minimum order requirement for delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Food Safety & Quality */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Food Safety & Quality</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Fresh Ingredients:</strong> We use only fresh, high-quality ingredients</p>
                      <p>• <strong>Hygiene Standards:</strong> We maintain strict food safety and hygiene standards</p>
                      <p>• <strong>Allergen Information:</strong> Please inform us of any food allergies</p>
                      <p>• <strong>Quality Assurance:</strong> We stand behind the quality of our food</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refunds */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cancellation & Refund Policy</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Cancellation:</strong> Orders can be cancelled before preparation begins</p>
                      <p>• <strong>Refunds:</strong> Full refunds for cancelled orders or quality issues</p>
                      <p>• <strong>Quality Issues:</strong> Contact us immediately for any food quality concerns</p>
                      <p>• <strong>Force Majeure:</strong> We are not liable for delays due to circumstances beyond our control</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">User Responsibilities</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Accurate Information:</strong> Provide correct delivery address and contact details</p>
                      <p>• <strong>Order Review:</strong> Review your order before confirmation</p>
                      <p>• <strong>Payment:</strong> Ensure sufficient funds for payment</p>
                      <p>• <strong>Communication:</strong> Be available for order confirmation calls</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-center pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Terms?</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our Terms & Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@shawarmaspotkkl.com</p>
                  <p><strong>Phone:</strong> +91 8428495773</p>
                  <p><strong>Address:</strong> Karaikal, Puducherry, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
