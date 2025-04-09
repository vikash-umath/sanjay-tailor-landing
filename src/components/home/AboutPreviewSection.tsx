
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Clock, ChevronRight } from 'lucide-react';

const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                  alt="Sanjay Boutique Tailor Shop" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-tailor-gold text-tailor-navy p-4 md:p-6 rounded-lg shadow-lg">
                <p className="text-lg md:text-2xl font-bold">25+ Years</p>
                <p className="text-sm md:text-base">of Excellence</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">About Sanjay Boutique</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Sanjay Men's Boutique Collection, where tradition meets contemporary style. For over two decades, we have been delivering exceptional tailoring services to the people of Ashta and beyond.
            </p>
            <p className="text-gray-700 mb-6">
              Our master tailors combine years of experience with modern techniques to create garments that not only look exceptional but fit perfectly, enhancing your personality and style.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-tailor-cream p-2 rounded-lg mr-3">
                  <Scissors size={20} className="text-tailor-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-tailor-navy">Expert Tailoring</h4>
                  <p className="text-sm text-gray-600">By master craftsmen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tailor-cream p-2 rounded-lg mr-3">
                  <Clock size={20} className="text-tailor-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-tailor-navy">Timely Delivery</h4>
                  <p className="text-sm text-gray-600">Always on schedule</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary inline-flex items-center">
              Read Our Story
              <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
