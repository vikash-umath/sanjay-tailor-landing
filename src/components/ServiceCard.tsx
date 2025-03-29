
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="service-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-tailor-cream w-16 h-16 rounded-full flex items-center justify-center mb-4 text-tailor-navy group-hover:bg-tailor-gold transition-colors duration-300">
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
    </div>
  );
};

export default ServiceCard;
