
import React from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../constants';
import SchemaMarkup from '../components/SchemaMarkup';

const FAQ = () => {
  const faqSchema = {
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="bg-white">
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our plumbing services, pricing, and availability.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex justify-between items-start gap-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
            
            {/* Additional FAQs */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What should I do in a plumbing emergency?</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                First, locate and turn off your main water shut-off valve to prevent further damage. 
                Then, call us immediately at {BUSINESS_INFO.phone}. Avoid using any electrical appliances 
                near standing water.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide commercial plumbing services?</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Yes, we serve both residential and commercial clients. Our team is experienced in 
                handling large-scale commercial plumbing systems, including restaurants, office 
                buildings, and retail spaces.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-blue-600 rounded-[2.5rem] p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-blue-100 mb-8">Our team is happy to help you with any specific inquiries.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <Phone size={20} /> Call Us
              </a>
              <a href={BUSINESS_INFO.social.whatsapp} className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
