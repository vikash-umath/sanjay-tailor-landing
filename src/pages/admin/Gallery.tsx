import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAllGalleryAPI,deleteImageFromGallery } from '@/services/operation/admin';

const Gallery = () => {
  const { toast } = useToast();
  const [gallery, setGallery] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await getAllGalleryAPI();
        if (Array.isArray(response)) {
          setGallery(response);
        } else {
          setGallery([]);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  // Image delete function
  const handleDeleteImage = async (imageId: string, publicId: string,serach: string) => {
    try {
      await deleteImageFromGallery(imageId,publicId); // Cloudinary se delete karne ka API call
      setGallery(prevGallery =>
        prevGallery.map(item => ({
          ...item,
          images: item.images.filter(img => img._id !== serach),
        }))
      );
      toast({ title: "Image deleted successfully" });
    } catch (error) {
      console.error("Error deleting image:", error);
      toast({ title: "Failed to delete image", variant: "destructive" });
    }
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="mb-4">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Gallery Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gallery
          .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item) => (
            <Card key={item._id} className="shadow-lg">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {item.images.map((image) => (
                    <div key={image._id} className="relative">
                      <img
                        src={image.url}
                        alt="Gallery Image"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1"
                        onClick={() => handleDeleteImage(item._id, image.public_id,image._id)}
                      >
                        <Trash size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
