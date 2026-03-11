
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white leading-none">L.A to O.C</span>
              <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Plumbing Pro</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium plumbing solutions for Los Angeles and Orange County. 
              Available 24/7 for all your residential and commercial needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="hover:text-blue-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {BUSINESS_INFO.areas.slice(0, 10).map((area) => (
                <li key={area}>
                  <Link to={`/plumber-${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-blue-400 transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-blue-400 transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-400 transition-colors">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
