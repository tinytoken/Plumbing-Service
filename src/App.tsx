/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CityPage from './pages/CityPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:citySlug" element={<CityPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Sticky Mobile Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 md:hidden">
          <a 
            href={BUSINESS_INFO.social.whatsapp}
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            aria-label="WhatsApp Us"
          >
            <MessageCircle size={30} />
          </a>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            aria-label="Call Us"
          >
            <Phone size={28} />
          </a>
        </div>

        {/* Desktop Sticky Phone */}
        <div className="fixed bottom-8 left-8 z-50 hidden md:block">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-3 bg-white text-blue-600 px-6 py-4 rounded-full font-bold shadow-2xl border border-blue-50 hover:bg-blue-50 transition-all group"
          >
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Emergency 24/7</span>
              <span className="text-lg">{BUSINESS_INFO.phone}</span>
            </div>
          </a>
        </div>
      </div>
    </Router>
  );
}
