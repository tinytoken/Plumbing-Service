
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Star, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';
import SchemaMarkup from '../components/SchemaMarkup';

const CityPage = () => {
  const { citySlug } = useParams();
  // citySlug is like "plumber-los-angeles"
  const cityName = citySlug?.replace('plumber-', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Los Angeles';

  const localBusinessSchema = {
    name: `Best Plumber in ${cityName} | ${BUSINESS_INFO.name}`,
    description: `Professional plumbing services in ${cityName}, CA. Emergency repairs, drain cleaning, and water heater services available 24/7.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "CA",
      addressCountry: "US"
    },
    telephone: BUSINESS_INFO.phone
  };

  return (
    <div className="bg-white">
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      
      {/* Hero */}
      <section className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`https://picsum.photos/seed/${citySlug}/1920/1080`} 
            alt={`Plumbing Services in ${cityName}`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Best Plumber in <span className="text-blue-400">{cityName}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Need a reliable plumber in {cityName}? {BUSINESS_INFO.name} provides 
              top-rated residential and commercial plumbing solutions with 24/7 emergency support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl">
                <Phone size={24} /> {BUSINESS_INFO.phone}
              </a>
              <a href={BUSINESS_INFO.social.whatsapp} className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl">
                <MessageCircle size={24} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Local Plumbing Experts in {cityName}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Residents and business owners in {cityName} trust {BUSINESS_INFO.name} for all their 
                plumbing needs. Whether you're dealing with a clogged drain, a leaking pipe, or 
                need a new water heater installed, our team of local experts is ready to help.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  `Fast response times in ${cityName}`,
                  "Upfront pricing with no hidden fees",
                  "Licensed, bonded, and insured technicians",
                  "100% satisfaction guarantee on all work"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                Schedule Service in {cityName} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/local-plumber/800/600" 
                alt={`Plumber working in ${cityName}`} 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services in {cityName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-blue-600 font-bold flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions in {cityName}</h2>
          <div className="space-y-6">
            {[
              { q: `How fast can you get a plumber to ${cityName}?`, a: `We typically have a technician at your door in ${cityName} within 30 to 60 minutes for emergency calls.` },
              { q: `Do you offer free estimates in ${cityName}?`, a: `Yes, we provide free, no-obligation estimates for all plumbing projects in ${cityName}.` },
              { q: `Are you available on weekends in ${cityName}?`, a: `Absolutely. We are available 24/7, including weekends and holidays, to serve the ${cityName} community.` }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden h-[450px]">
            <iframe 
              src={BUSINESS_INFO.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Plumbing Service Map for ${cityName}`}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
