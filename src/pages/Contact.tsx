
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a free estimate or request emergency service. 
            We're available 24/7 to help with all your plumbing needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors text-lg">{BUSINESS_INFO.phone}</a>
                  <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-600 hover:text-blue-600 transition-colors text-lg">{BUSINESS_INFO.email}</a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-600 text-lg">Los Angeles & Orange County</p>
                  <p className="text-sm text-gray-500 mt-1">Serving {BUSINESS_INFO.areas.length}+ cities</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600 text-lg">Open 24 Hours</p>
                  <p className="text-sm text-gray-500 mt-1">7 Days a Week</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Chat with us on WhatsApp</h3>
              <p className="text-blue-100 mb-6">The fastest way to get a response and send us photos of your plumbing issue.</p>
              <a 
                href={BUSINESS_INFO.social.whatsapp}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
              >
                <MessageCircle size={24} />
                WhatsApp Us Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Free Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                    <option>Emergency Plumbing</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Leak Detection</option>
                    <option>Pipe Repair</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Tell us about your plumbing issue..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[500px] w-full">
        <iframe 
          src={BUSINESS_INFO.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="L.A to O.C Plumbing Pro Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
