
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Check, Users, Award, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  
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
    
    if (teamRef.current) {
      const children = teamRef.current.querySelectorAll('.team-member');
      children.forEach((child) => observer.observe(child));
    }
    
    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "Sanjay Kumar",
      position: "Founder & Master Tailor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "With over 25 years of experience, Sanjay has mastered the art of tailoring, creating perfect fits for every client."
    },
    {
      name: "Rahul Verma",
      position: "Senior Tailor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Specialized in formal wear, Rahul brings a modern touch to traditional designs, ensuring each piece stands out."
    },
    {
      name: "Amit Singh",
      position: "Design Specialist",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Amit helps clients visualize their perfect garment, combining traditional techniques with contemporary styles."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-tailor-navy">
        <div className="container-custom relative z-10">
          <div className="pt-16 pb-6 text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h4>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn about our journey, our craft, and our commitment to excellence in tailoring.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sanjay Men's Boutique Collection was founded in 1998 with a simple mission: to provide high-quality, custom-tailored clothing that celebrates both traditional craftsmanship and contemporary style.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small tailoring shop has grown into a trusted name in Ashta and surrounding areas, known for our attention to detail, quality workmanship, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-6">
                Our founder, Sanjay Kumar, learned the craft from his father and has since passed down his knowledge and skills to the next generation of tailors, ensuring that traditional techniques are preserved while embracing modern innovations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services
                </Link>
                <Link to="/gallery" className="btn-secondary">
                  View Gallery
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://content.jdmagicbox.com/comp/bhopal/f9/0755px755.x755.140430144020.k9f9/catalogue/asian-tailors-ibrahimpura-bhopal-tailors-6etb03dlnv.jpg" 
                  alt="Tailoring Shop" 
                  className="rounded-lg shadow-lg h-40 sm:h-48 md:h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519736927049-de9d69a15bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                  alt="Tailor at Work" 
                  className="rounded-lg shadow-lg h-40 sm:h-64 md:h-80 w-full object-cover mt-8"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiN8vdgx95CV8o1qYSYtSPEBgoUGtyE5d_WQ&s" 
                  alt="Fabric Selection" 
                  className="rounded-lg shadow-lg h-40 sm:h-64 md:h-80 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                  alt="Finished Garment" 
                  className="rounded-lg shadow-lg h-40 sm:h-48 md:h-64 w-full object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values & Mission Section */}
      <section className="py-20 bg-tailor-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Our Values & Mission</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Sanjay Men's Boutique Collection, we are guided by core values that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-tailor-navy">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To create tailored garments that not only fit perfectly but also reflect the unique personality and style of each client, while preserving traditional craftsmanship and embracing innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check size={20} className="text-tailor-gold mr-2 mt-1" />
                  <p className="text-gray-700">Providing exceptional quality in every garment</p>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-tailor-gold mr-2 mt-1" />
                  <p className="text-gray-700">Creating perfect fits for every body type</p>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-tailor-gold mr-2 mt-1" />
                  <p className="text-gray-700">Offering personalized service to every client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-tailor-navy">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-2 rounded-lg mr-3">
                    <Award size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy">Excellence</h4>
                    <p className="text-gray-700">We strive for excellence in every stitch, cut, and finish, ensuring each garment meets our high standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-2 rounded-lg mr-3">
                    <Users size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy">Integrity</h4>
                    <p className="text-gray-700">We conduct our business with honesty, transparency, and respect for our clients and their unique requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-2 rounded-lg mr-3">
                    <Clock size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy">Reliability</h4>
                    <p className="text-gray-700">We deliver on our promises, ensuring timely completion of orders without compromising on quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our skilled team of tailors and designers brings years of experience and a passion for craftsmanship to every project.
            </p>
          </div>
          
          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-member bg-white rounded-lg shadow-lg overflow-hidden opacity-0">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tailor-navy">{member.name}</h3>
                  <p className="text-tailor-gold font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-tailor-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-tailor-gold mb-2">25+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tailor-gold mb-2">5000+</div>
              <p className="text-lg">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tailor-gold mb-2">10000+</div>
              <p className="text-lg">Garments Tailored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tailor-gold mb-2">15+</div>
              <p className="text-lg">Expert Tailors</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
