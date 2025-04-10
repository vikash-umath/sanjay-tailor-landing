
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-tailor-navy">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tailor-navy"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593030942428-a5451dca1e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
      ></div>
      
      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-2xl staggered-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Crafting Elegance with <span className="text-tailor-gold">Sanjay Boutique</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Premium tailoring services in Ashta, bringing your style to life with expert craftsmanship and attention to detail.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
