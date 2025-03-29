
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingContactButtons = () => {
  const phoneNumber = "+911234567890"; // Replace with the actual phone number
  const whatsappMessage = "Hello, I'd like to know more about your tailoring services.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`, '_blank');
  };
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={handleWhatsAppClick}
              className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
            >
              <MessageCircle size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              onClick={handleCallClick}
              className="rounded-full w-14 h-14 bg-tailor-navy hover:bg-tailor-navy/90 text-white shadow-lg"
            >
              <Phone size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call Us</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingContactButtons;
