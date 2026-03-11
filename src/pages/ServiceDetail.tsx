
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin, Star, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';
import SchemaMarkup from '../components/SchemaMarkup';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link to="/services" className="text-blue-600 mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  const serviceSchema = {
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name
    },
    areaServed: BUSINESS_INFO.areas.map(area => ({
      "@type": "City",
      name: area
    }))
  };

  return (
    <div className="bg-white">
      <SchemaMarkup type="Service" data={serviceSchema} />
      
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/services" className="text-blue-400 font-semibold mb-4 inline-block hover:underline">← All Services</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Professional {service.title.toLowerCase()} services in Los Angeles and Orange County. 
              Available 24/7 for residential and commercial customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
              <a href={BUSINESS_INFO.social.whatsapp} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert {service.title} Solutions</h2>
              <p className="mb-6">
                When you need {service.title.toLowerCase()}, you need a team you can trust. 
                At {BUSINESS_INFO.name}, we specialize in providing high-quality, reliable solutions 
                tailored to your specific needs. Our licensed plumbers use state-of-the-art equipment 
                to ensure the job is done right the first time.
              </p>
              
              <img 
                src={`https://picsum.photos/seed/${service.slug}/800/450`} 
                alt={service.title} 
                className="rounded-2xl shadow-lg mb-10 w-full object-cover"
                referrerPolicy="no-referrer"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our {service.title} Service?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <p className="mb-6">
                We follow a rigorous process to ensure complete satisfaction. First, we perform a 
                thorough diagnostic to identify the root cause of the issue. Then, we provide a 
                clear, upfront estimate. Once approved, our expert technicians carry out the 
                necessary repairs or installations with minimal disruption to your daily routine.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Contact Card */}
              <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Need Help Now?</h3>
                <p className="text-blue-100 mb-8 text-center">Our experts are available 24/7 to assist you with any plumbing emergency.</p>
                <div className="space-y-4">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all">
                    <Phone size={24} /> {BUSINESS_INFO.phone}
                  </a>
                  <Link to="/contact" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-800 transition-all border border-blue-500">
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {BUSINESS_INFO.areas.slice(0, 12).map(area => (
                    <Link 
                      key={area} 
                      to={`/plumber-${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Other Services</h3>
                <ul className="space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.slug}`} className="text-gray-600 hover:text-blue-600 flex items-center justify-between group">
                        <span>{s.title}</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
