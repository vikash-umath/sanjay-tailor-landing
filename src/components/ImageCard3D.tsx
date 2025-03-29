
import { useState } from 'react';

interface ImageCard3DProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageCard3D = ({ src, alt, caption }: ImageCard3DProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      className="perspective-card h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`image-card h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 ${isHovered ? 'shadow-xl' : ''}`}
        style={{
          transform: isHovered ? 'rotateX(3deg) rotateY(3deg) translateY(-5px)' : 'rotateX(0) rotateY(0) translateY(0)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="relative overflow-hidden h-64 bg-gray-100">
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-tailor-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Image not available</p>
            </div>
          )}
          
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'} ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            onLoad={handleLoad}
            onError={handleError}
          />
          
          {/* 3D-like effect overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-tailor-gold/20 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
          ></div>
          
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 transform translate-y-full transition-transform duration-300">
              <p className="text-sm text-center">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard3D;
