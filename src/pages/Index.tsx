
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Shirt, ChevronRight, ImageIcon, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (testimonialsRef.current) {
      const children = testimonialsRef.current.querySelectorAll('div');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* About Preview Section */}
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
      
      {/* Services Section */}
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
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Client Testimonials</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with Sanjay Men's Boutique Collection.
            </p>
          </div>
          
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Rajesh Sharma"
              location="Ashta"
              quote="The kurta pajama I ordered was perfectly stitched. The fabric quality and attention to detail were exceptional. Highly recommended!"
              delay={100}
            />
            
            <TestimonialCard 
              name="Amit Kumar"
              location="Bhopal"
              quote="I got my wedding suit tailored at Sanjay Boutique and it was the best decision. Everyone complimented the fit and style. Thank you!"
              delay={200}
            />
            
            <TestimonialCard 
              name="Vijay Patel"
              location="Indore"
              quote="Outstanding service! The shirts were delivered on time and fit perfectly. Will definitely come back for more."
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action / Enquiry Form Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
