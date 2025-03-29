
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ServiceCard3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard3D = ({ title, description, icon, link, delay = 0 }: ServiceCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="perspective-card relative h-full"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`service-card h-full transition-all duration-500 transform ${isHovered ? 'shadow-2xl translate-y-[-5px] border-tailor-gold' : 'shadow-md border-transparent'} rounded-lg p-6 bg-white border-b-4 relative group`}
        style={{
          transform: isHovered ? 'rotateX(5deg) rotateY(5deg)' : 'rotateX(0) rotateY(0)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="bg-tailor-cream w-16 h-16 rounded-full flex items-center justify-center mb-4 text-tailor-navy group-hover:bg-tailor-gold transition-colors duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-tailor-navy">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-tailor-navy font-medium hover:text-tailor-gold transition-colors"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* 3D-like floating effect elements */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-tailor-gold/10 rounded-lg opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>
    </div>
  );
};

export default ServiceCard3D;
