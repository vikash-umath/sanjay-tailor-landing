
import React from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../EnquiryForm';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 bg-tailor-navy">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Style?</h2>
            <p className="mb-6 text-gray-300">
              Take the first step towards a wardrobe that reflects your personality and style. Contact us today to schedule a consultation or place an order.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-tailor-gold text-tailor-navy flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <p>Schedule a consultation with our expert tailors</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-tailor-gold text-tailor-navy flex items-center justify-center mr-3">
                  <span className="font-bold">2</span>
                </div>
                <p>Choose your fabrics and discuss your design preferences</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-tailor-gold text-tailor-navy flex items-center justify-center mr-3">
                  <span className="font-bold">3</span>
                </div>
                <p>Get measured for the perfect fit</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-tailor-gold text-tailor-navy flex items-center justify-center mr-3">
                  <span className="font-bold">4</span>
                </div>
                <p>Receive your perfectly tailored garments</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/gallery" className="btn-secondary">
                View Our Gallery
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-tailor-navy transition-all px-6 py-3 rounded font-medium">
                Visit Our Shop
              </Link>
            </div>
          </div>
          
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
