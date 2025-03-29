
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tailor-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Sanjay Men's Tailors</h3>
            <p className="text-gray-300 mb-4">
              Premium tailoring services in Ashta, bringing your style to life with expert craftsmanship and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tailor-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-tailor-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-tailor-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#kurta-pajama" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Kurta Pajama
                </Link>
              </li>
              <li>
                <Link to="/services#coat-pant" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Coat & Pant
                </Link>
              </li>
              <li>
                <Link to="/services#formal-shirts" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Formal Shirts
                </Link>
              </li>
              <li>
                <Link to="/services#alterations" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Alterations
                </Link>
              </li>
              <li>
                <Link to="/services#custom-designs" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  Custom Designs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-tailor-gold" />
                <span className="text-gray-300">123 Tailor Street, Ashta, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-tailor-gold" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-tailor-gold" />
                <a href="mailto:info@sanjaytailors.com" className="text-gray-300 hover:text-tailor-gold transition-colors">
                  info@sanjaytailors.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-tailor-navy-dark py-4 border-t border-gray-800">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Sanjay Men's Tailors. All rights reserved.
          </p>
          <div className="developer-attribution mt-2">
            Developed by <a href="https://www.mahitechnocrafts.in/" target="_blank" rel="noopener noreferrer">Mahi Technocrafts</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
