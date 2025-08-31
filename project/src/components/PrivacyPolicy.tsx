import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="min-h-screen bg-[#fef7f1] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield size={64} className="text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Shawarma Spot KKL, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy outlines how we collect, use, and safeguard your data.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="space-y-8">
              {/* Information Collection */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Personal Information:</strong> Name, phone number, email address when you place orders or contact us</p>
                      <p>• <strong>Order Information:</strong> Food preferences, delivery addresses, payment details</p>
                      <p>• <strong>Website Usage:</strong> Pages visited, time spent, device information</p>
                      <p>• <strong>Communication:</strong> Messages sent via WhatsApp, phone calls, or email</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Order Processing:</strong> To fulfill your food orders and deliver to your location</p>
                      <p>• <strong>Customer Service:</strong> To respond to your inquiries and provide support</p>
                      <p>• <strong>Improvement:</strong> To enhance our menu, service quality, and customer experience</p>
                      <p>• <strong>Communication:</strong> To send order confirmations and important updates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Information Sharing & Security</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>No Third-Party Sharing:</strong> We do not sell, trade, or rent your personal information</p>
                      <p>• <strong>Service Providers:</strong> We may share information with delivery partners and payment processors</p>
                      <p>• <strong>Data Security:</strong> We implement industry-standard security measures to protect your data</p>
                      <p>• <strong>Legal Requirements:</strong> We may disclose information if required by law</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Rights & Choices</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>• <strong>Access:</strong> You can request access to your personal information</p>
                      <p>• <strong>Correction:</strong> You can update or correct your information</p>
                      <p>• <strong>Deletion:</strong> You can request deletion of your data</p>
                      <p>• <strong>Opt-out:</strong> You can opt-out of marketing communications</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-center pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our Privacy Policy or how we handle your information, 
                  please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@shawarmaspotkkl.com</p>
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

export default PrivacyPolicy;
