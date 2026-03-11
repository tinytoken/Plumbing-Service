
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { BLOG_TOPICS } from '../constants';

const Blog = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plumbing Tips & News</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert advice, maintenance guides, and the latest from the world of plumbing.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_TOPICS.map((post, i) => (
              <article key={i} className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/blog-${i}/800/600`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Plumbing Tips
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> March {10 - i}, 2026</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Discover essential tips and professional insights to keep your home's plumbing 
                    system running smoothly. From DIY maintenance to knowing when to call a pro...
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                  >
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for seasonal maintenance tips and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
