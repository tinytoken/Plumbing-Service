
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Plumbing Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional, reliable, and affordable plumbing solutions for residential 
            and commercial properties in Los Angeles and Orange County.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${service.slug}/800/600`} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CheckCircle className="text-blue-600" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Emergency Plumbing?</h2>
              <p className="text-xl text-blue-100 mb-0">We're available 24/7. Most calls answered in 30 minutes or less.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all">
                <Phone size={28} /> {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.social.whatsapp} className="bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all">
                <MessageCircle size={28} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
