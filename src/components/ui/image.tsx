
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '1:1' | '21:9';
  alt?: string;
}

const Image = ({ 
  src, 
  alt = '', 
  className, 
  fallbackSrc = '/placeholder.svg', 
  aspectRatio,
  ...props 
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setError(false);
  }, [src]);

  const onError = () => {
    setError(true);
    setImgSrc(fallbackSrc);
  };

  const onLoad = () => {
    setIsLoading(false);
  };

  let aspectRatioClass = '';
  
  switch (aspectRatio) {
    case 'square':
    case '1:1':
      aspectRatioClass = 'aspect-square';
      break;
    case '16:9':
      aspectRatioClass = 'aspect-video';
      break;
    case '4:3':
      aspectRatioClass = 'aspect-4/3';
      break;
    case '21:9':
      aspectRatioClass = 'aspect-21/9';
      break;
    default:
      aspectRatioClass = '';
  }

  return (
    <div className={cn("relative overflow-hidden", aspectRatioClass, className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-10 h-10 border-4 border-tailor-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        onError={onError}
        onLoad={onLoad}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        {...props}
      />

      {error && fallbackSrc === imgSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500 text-sm text-center px-2">Image not available</p>
        </div>
      )}
    </div>
  );
};

export { Image };
