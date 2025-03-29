
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
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
      const children = servicesRef.current.querySelectorAll('.service-detail');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Handle scrolling to specific sections when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  const services = [
    {
      id: 'kurta-pajama',
      title: 'Kurta Pajama',
      description: 'Traditional and contemporary designs tailored to perfection with comfort and style in mind.',
      image: 'https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/couple-goal-vol-2-cotton-kurta-pajama-270.jpg',
      features: [
        'Custom designs for every occasion',
        'Wide range of fabrics and colors',
        'Traditional and modern styling options',
        'Perfect fit guaranteed',
        'Quick turnaround for urgent requirements'
      ],
      turnaround: '5-7 days'
    },
    {
      id: 'coat-pant',
      title: 'Coat & Pant',
      description: 'Elegant suits and formal wear tailored with precision for a sophisticated look.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      features: [
        'Classic and modern designs',
        'Premium fabric selection',
        'Perfect fitting for all body types',
        'Formal and semi-formal options',
        'Customized details including buttons and linings'
      ],
      turnaround: '7-10 days'
    },
    {
      id: 'formal-shirts',
      title: 'Formal Shirts',
      description: 'Custom-made shirts that ensure perfect fit, exceptional comfort, and professional appearance.',
      image: 'https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/navy_blue_cotton_solid_shirts_for_men_base_02_05_2024_700x933.jpg',
      features: [
        'Custom collar and cuff designs',
        'Various fabric options from cotton to linen',
        'Perfect fit for all body types',
        'Office and occasion wear options',
        'Monogram options available'
      ],
      turnaround: '3-5 days'
    },
    {
      id: 'alterations',
      title: 'Alterations',
      description: 'Expert alterations to ensure your existing garments fit perfectly and look their best.',
      image: 'https://images.unsplash.com/photo-1619979842913-08603df442a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      features: [
        'Precise alterations for all garment types',
        'Length adjustments',
        'Size modifications',
        'Style updates',
        'Quick service options available'
      ],
      turnaround: '1-3 days'
    },
    {
      id: 'custom-designs',
      title: 'Custom Designs',
      description: 'Bring your vision to life with our custom design service that creates unique garments tailored to your specifications.',
      image: 'https://images.unsplash.com/photo-1618886202721-9233f2c72656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      features: [
        'Personalized design consultation',
        'Unique style creation',
        'Customized embroidery options',
        'Special occasion outfits',
        'Seasonal collection designs'
      ],
      turnaround: '7-14 days'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-tailor-navy">
        <div className="container-custom relative z-10">
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our premium tailoring services designed to meet all your clothing needs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Tailoring Excellence</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Sanjay Men's Boutique Collection, we offer a comprehensive range of tailoring services to meet your every need, from traditional attire to modern fashion.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full bg-tailor-cream text-tailor-navy hover:bg-tailor-gold transition-colors duration-300"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <div ref={servicesRef}>
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={service.id}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-tailor-cream'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="service-detail opacity-0" style={{ animationDelay: '100ms' }}>
                  <h2 className="section-title">{service.title}</h2>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-tailor-navy">Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={20} className="text-tailor-gold mr-2 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-tailor-navy">Typical Turnaround Time:</h3>
                    <p className="text-gray-700">{service.turnaround}</p>
                  </div>
                  
                  <Link to="/contact" className="btn-primary inline-flex items-center">
                    Enquire Now <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                
                <div className="service-detail opacity-0" style={{ animationDelay: '200ms' }}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* Process Section */}
      <section className="py-16 bg-tailor-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Our Tailoring Process
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-tailor-gold"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a systematic approach to ensure that every garment we create meets our high standards and your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tailor-gold text-tailor-navy text-2xl font-bold flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-300">Discuss your requirements, preferences, and select fabrics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tailor-gold text-tailor-navy text-2xl font-bold flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Measurement</h3>
              <p className="text-gray-300">Precise measurements to ensure the perfect fit</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tailor-gold text-tailor-navy text-2xl font-bold flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Crafting</h3>
              <p className="text-gray-300">Expert tailors craft your garment with attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tailor-gold text-tailor-navy text-2xl font-bold flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-300">Final fitting and delivery of your perfectly tailored garment</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tailor-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-tailor-navy">Ready to Experience Premium Tailoring?</h2>
            <p className="text-gray-700 mb-8">
              Contact us today to schedule a consultation or visit our shop in Ashta to explore our fabric collection and discuss your tailoring needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
