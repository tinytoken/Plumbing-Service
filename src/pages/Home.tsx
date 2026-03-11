
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, SERVICES, FAQS } from '../constants';
import SchemaMarkup from '../components/SchemaMarkup';

const Home = () => {
  const localBusinessSchema = {
    name: BUSINESS_INFO.name,
    image: "https://picsum.photos/seed/plumbing/800/600",
    "@id": "",
    url: window.location.origin,
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    sameAs: []
  };

  return (
    <div className="overflow-hidden">
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/plumber-hero/1920/1080" 
            alt="Professional Plumbing Service" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                24/7 Emergency Plumbing Services
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Expert Plumbing Solutions from <span className="text-blue-400">L.A to O.C</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Fast, reliable, and professional plumbing services for your home and business. 
                Serving Los Angeles and Orange County with over 15 years of experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
                >
                  <Phone size={24} />
                  Call Now: {BUSINESS_INFO.phone}
                </a>
                <Link 
                  to="/contact"
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl border border-blue-500"
                >
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-green-400" />
                30-Min Response
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-green-400" />
                100% Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">5,000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Plumbing Services</h3>
            <p className="text-lg text-gray-600">
              From minor leaks to major sewer line replacements, our team of expert plumbers 
              is equipped with the latest technology to handle any challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {/* Icon mapping would go here, using a placeholder for now */}
                  <Shield size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.slug}`}
                  className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/plumbing-team/800/1000" 
                  alt="Our Expert Plumbing Team" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Most Trusted Plumbers in L.A. and O.C.</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Rapid 24/7 Response</h4>
                    <p className="text-gray-600">Plumbing emergencies don't wait. We offer round-the-clock service to ensure your home is protected at all times.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Licensed & Background Checked</h4>
                    <p className="text-gray-600">Our technicians are highly trained, fully licensed, and undergo rigorous background checks for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Upfront, Honest Pricing</h4>
                    <p className="text-gray-600">No hidden fees or surprise charges. We provide clear, written estimates before any work begins.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
                >
                  <Phone size={24} />
                  Call for Immediate Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", location: "Santa Monica", text: "L.A to O.C Plumbing Pro saved us from a major flood! They arrived within 30 minutes of our call at 2 AM. Highly recommend!" },
              { name: "Michael R.", location: "Irvine", text: "Professional, clean, and honest. They fixed our water heater for half the price another company quoted. Best plumbers in OC." },
              { name: "David L.", location: "Beverly Hills", text: "I've used them for several properties. Their leak detection technology is top-notch and they always leave the place spotless." }
            ].map((review, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-blue-400">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:bg-gray-50 transition-all">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Fix Your Plumbing Issues?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Contact us today for a free estimate or emergency service. 
            We're standing by to help you 24/7.
          </p>
          <div className="flex flex-col sm:row gap-6 justify-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
            >
              <Phone size={28} />
              {BUSINESS_INFO.phone}
            </a>
            <a 
              href={BUSINESS_INFO.social.whatsapp}
              className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-600 transition-all shadow-2xl"
            >
              <MessageCircle size={28} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
