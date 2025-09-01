import React, { useState } from 'react';
import { Phone, Instagram, Facebook, Linkedin, Mail, MapPin, Clock, Star } from 'lucide-react';
import ContactForm from '../components/Comment';
import Footer from '../components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
          
          {/* Main header */}
          <div className="py-16 text-center">
            <h1 className="text-8xl font-black text-black mb-6 tracking-tight">
              Contact
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">Smart Design Expo → Contact</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Information & Form */}
          <div className="space-y-12">
            {/* Company Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Smart Design Expo</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Szparagowa 12, 62-081 Wysogotowo<br />
                      Poland
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">+48 61 642 7147</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black">hello@smartdesignexpo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">Business Hours</p>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Google Reviews */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-black">4.8</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">61 reviews</span> on Google
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Map and Business Info */}
          <div className="space-y-12">
            {/* Google Map */}
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.7729!2d16.8756!3d52.4756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI4JzMyLjIiTiAxNsKwNTInMzIuMiJF!5e0!3m2!1sen!2spl!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Custom Map Overlay */}
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-sm text-black">Smart Design Expo</p>
                    <p className="text-xs text-gray-600">Projektowanie i...</p>
                  </div>
                </div>
              </div>

              {/* Route Button */}
              <button className="absolute bottom-4 left-4 bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
                ROUTE
              </button>
            </div>

     

        
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Let's Start Something Amazing</h2>
            <p className="text-gray-600 text-lg">Ready to bring your vision to life? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">Drop us a line anytime</p>
              <a href="mailto:hello@smartdesignexpo.com" className="text-black font-semibold hover:text-gray-700 transition-colors">
                hello@smartdesignexpo.com
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">Speak directly with our team</p>
              <a href="tel:+48616427147" className="text-black font-semibold hover:text-gray-700 transition-colors">
                +48 61 642 7147
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-black mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-4">Come to our office</p>
              <p className="text-black font-semibold">
                Szparagowa 12<br />
                62-081 Wysogotowo
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-black mb-3">How long does a typical project take?</h4>
              <p className="text-gray-600 text-sm">Project timelines vary depending on scope and complexity. Most design projects take 2-6 weeks from start to finish.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-black mb-3">Do you work with international clients?</h4>
              <p className="text-gray-600 text-sm">Yes! We work with clients worldwide and have experience managing projects across different time zones.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-black mb-3">What services do you offer?</h4>
              <p className="text-gray-600 text-sm">We offer complete design solutions including branding, web design, print design, and project management services.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-black mb-3">How do you handle revisions?</h4>
              <p className="text-gray-600 text-sm">We include up to 3 rounds of revisions in our standard packages, with additional revisions available if needed.</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactUs;