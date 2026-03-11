
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Shield, Users, Award, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About L.A to O.C Plumbing Pro</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for professional plumbing solutions across Southern California.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/plumbing-history/800/600" 
                alt="Our History" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Story</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Dedicated to Excellence Since 2009</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a mission to provide honest, high-quality plumbing services, 
                {BUSINESS_INFO.name} has grown from a small local operation to a premier 
                service provider serving both Los Angeles and Orange County.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that plumbing issues can be stressful. That's why we've built our 
                reputation on transparency, rapid response times, and exceptional craftsmanship. 
                Our team of licensed professionals treats every home as if it were their own.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="font-bold text-gray-900">Family Owned</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="font-bold text-gray-900">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="font-bold text-gray-900">24/7 Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="font-bold text-gray-900">Local Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every service call and interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-gray-600">We believe in honest assessments and fair pricing. No unnecessary upsells, just the solutions you need.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Quality</h4>
              <p className="text-gray-600">We don't cut corners. We use the best materials and latest techniques to ensure long-lasting results.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Community</h4>
              <p className="text-gray-600">We are proud to serve our neighbors in L.A. and O.C. and strive to make our community a better place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Experience the Professional Difference?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">
              Call {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all border border-blue-500">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
