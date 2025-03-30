
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-tailor-navy">
        <div className="container-custom relative z-10">
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for inquiries, appointments, or feedback.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about our services, want to schedule an appointment, or simply want to discuss your tailoring needs, we're here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-tailor-navy mb-1">Our Location</h4>
                    <p className="text-gray-700">Rathore Mandir Near Mukati Petrol Pump,<br />Ashta, Madhya Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-tailor-navy mb-1">Phone Number</h4>
                    <p className="text-gray-700">+91 8817212379</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-tailor-navy mb-1">Email Address</h4>
                    <p className="text-gray-700">info@sanjayboutique.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-tailor-cream p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-tailor-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-tailor-navy mb-1">Business Hours</h4>
                    <div className="text-gray-700">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg text-tailor-navy mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-tailor-cream p-3 rounded-lg text-tailor-navy hover:bg-tailor-gold transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/sanjaymens_boutique/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-tailor-cream p-3 rounded-lg text-tailor-navy hover:bg-tailor-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-tailor-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title !after:left-1/2 !after:-translate-x-1/2">Visit Our Shop</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Come visit our shop in Ashta to discuss your tailoring needs in person and explore our fabric collection.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              title="Sanjay Men's Boutique Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29536.367340486235!2d76.67944573476563!3d23.01746900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39635a585e9c3605%3A0xa13f6a552f02077f!2sAshta%2C%20Madhya%20Pradesh%20466116!5e0!3m2!1sen!2sin!4v1686824548161!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
