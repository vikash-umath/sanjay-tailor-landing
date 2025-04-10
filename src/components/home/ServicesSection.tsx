
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard';
import { Shirt, Ruler, Scissors, ImageIcon } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      const children = servicesRef.current.querySelectorAll('.service-card');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-tailor-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Our Premium Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a range of tailoring services to meet all your clothing needs with exceptional quality and attention to detail.
          </p>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Kurta Pajama"
            description="Traditional and contemporary designs, perfectly tailored for comfort and style."
            icon={<Shirt size={28} />}
            link="/services#kurta-pajama"
            delay={100}
          />
          
          <ServiceCard 
            title="Coat & Pant"
            description="Classic and modern suits crafted with precision for formal occasions."
            icon={<Ruler size={28} />}
            link="/services#coat-pant"
            delay={200}
          />
          
          <ServiceCard 
            title="Formal Shirts"
            description="Custom-made shirts that ensure perfect fit and exceptional comfort."
            icon={<Scissors size={28} />}
            link="/services#formal-shirts"
            delay={300}
          />
          
          <ServiceCard 
            title="Alterations"
            description="Expert alterations to ensure your garments fit perfectly."
            icon={<Scissors size={28} />}
            link="/services#alterations"
            delay={400}
          />
          
          <ServiceCard 
            title="Custom Designs"
            description="Bring your vision to life with our custom design service."
            icon={<ImageIcon size={28} />}
            link="/services#custom-designs"
            delay={500}
          />
          
          <div className="service-card flex flex-col justify-center items-center text-center bg-tailor-navy text-white hover:bg-tailor-gold hover:text-tailor-navy transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">View All Services</h3>
            <Link to="/services" className="btn-secondary">
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
