
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tailor-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Sanjay Boutique</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Premium tailoring services in Ashta, specializing in men's custom clothing with a perfect blend of tradition and modern style.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-tailor-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-tailor-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-tailor-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-tailor-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-tailor-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-tailor-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-tailor-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#kurta-pajama" className="text-sm hover:text-tailor-gold transition-colors">Kurta Pajama</Link>
              </li>
              <li>
                <Link to="/services#coat-pant" className="text-sm hover:text-tailor-gold transition-colors">Coat & Pant</Link>
              </li>
              <li>
                <Link to="/services#formal-shirts" className="text-sm hover:text-tailor-gold transition-colors">Formal Shirts</Link>
              </li>
              <li>
                <Link to="/services#alterations" className="text-sm hover:text-tailor-gold transition-colors">Alterations</Link>
              </li>
              <li>
                <Link to="/services#custom-designs" className="text-sm hover:text-tailor-gold transition-colors">Custom Designs</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tailor-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-tailor-gold" />
                <span className="text-sm">Main Market, Near Bus Stand, Ashta, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-tailor-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-tailor-gold" />
                <span className="text-sm">info@sanjayboutique.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Sanjay Men's Boutique Collection. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Developed by <a href="https://www.mahitechnocrafts.in/" target="_blank" rel="noopener noreferrer" className="text-tailor-gold hover:underline">Mahi Technocrafts</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
