
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { Image } from '@/components/ui/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-12 w-12 mr-2 overflow-hidden">
            <Image 
              src="/lovable-uploads/logo.png" 
              alt="Sanjay Men's Tailors Logo" 
              className={`h-full w-full object-contain transition-opacity duration-300`}
            />
          </div>
          <h1 className={`text-xl md:text-2xl font-bold transition-all ${
            isScrolled ? 'text-tailor-navy' : 'text-white'
          }`}>
            Sanjay<span className="text-tailor-gold"> Men's Tailors</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`font-medium transition-all hover:text-tailor-gold ${
                location.pathname === link.path 
                  ? 'text-tailor-gold' 
                  : isScrolled 
                    ? 'text-tailor-navy' 
                    : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* <Link 
            to="/admin"
            className={`font-medium transition-all hover:text-tailor-gold flex items-center ${
              location.pathname.startsWith('/admin') 
                ? 'text-tailor-gold' 
                : isScrolled 
                  ? 'text-tailor-navy' 
                  : 'text-white'
            }`}
            aria-label="Admin Panel"
          >
            <Settings size={16} className="mr-1" />
            <span className="sr-only md:not-sr-only">Admin</span>
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-tailor-navy' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-tailor-navy' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg overflow-hidden">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 transition-all hover:text-tailor-gold ${
                  location.pathname === link.path ? 'text-tailor-gold' : 'text-tailor-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className={`font-medium py-2 transition-all hover:text-tailor-gold flex items-center ${
                location.pathname.startsWith('/admin') ? 'text-tailor-gold' : 'text-tailor-navy'
              }`}
            >
              <Settings size={16} className="mr-2" />
              Admin Panel
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
