
import React, { useRef, useEffect } from 'react';
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection: React.FC = () => {
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
    
    if (testimonialsRef.current) {
      const children = testimonialsRef.current.querySelectorAll('div');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
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
  );
};

export default TestimonialsSection;
