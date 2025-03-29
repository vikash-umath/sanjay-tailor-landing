
interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({ name, location, quote, image, delay = 0 }: TestimonialCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <div className="text-tailor-gold">
              {/* Star Rating */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <blockquote className="italic text-gray-600 mb-4">"{quote}"</blockquote>
        </div>
        
        <div className="mt-auto flex items-center">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          )}
          
          {!image && (
            <div className="w-12 h-12 rounded-full bg-tailor-navy text-white flex items-center justify-center mr-4">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
          
          <div>
            <h4 className="font-bold text-tailor-navy">{name}</h4>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
