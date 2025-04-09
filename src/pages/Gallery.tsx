
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllGalleryAPI } from '@/services/operation/admin';
import { getAllVideoAPI } from '@/services/operation/admin'; // Fixed import name
import ImageCard3D from '@/components/ImageCard3D';
import SEO from '@/components/SEO';
import GalleryStructuredData from '@/components/GalleryStructuredData';

const Gallery = () => {
  const [gallery, setGallery] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleryData = await getAllGalleryAPI();
        const videosData = await getAllVideoAPI(); // Changed to getAllVideoAPI
        
        if (Array.isArray(galleryData)) {
          setGallery(galleryData);
        }
        
        if (Array.isArray(videosData)) {
          setVideos(videosData);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format gallery images for structured data
  const structuredDataImages = gallery.flatMap(category => 
    category.images.map(img => ({
      url: img.url,
      name: `${category.title} - Sanjay Mens Tailor`,
      description: category.description
    }))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Photo Gallery | Sanjay Mens Tailor And Boutique collection"
        description="Browse our gallery showcasing premium tailoring work for kurta pajama, coat, pant, and designer shirts in Ashta and Indore. View our craftsmanship."
        pathname="gallery"
        keywords="tailor gallery, bespoke clothing gallery, kurta pajama designs, coat pant styles, Ashta tailor portfolio, Indore tailor gallery"
      />
      <GalleryStructuredData images={structuredDataImages} />
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-tailor-navy">Our Gallery</h1>
          <p className="text-gray-600 mb-8">Explore our collection of premium tailored garments</p>
          
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="photos">
              {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tailor-gold"></div>
                </div>
              ) : gallery.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No gallery items found.</p>
                </div>
              ) : (
                <div className="space-y-12">
                  {gallery.map((category) => (
                    <div key={category._id} className="space-y-4">
                      <h2 className="text-2xl font-semibold text-tailor-navy">{category.title}</h2>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {category.images.map((image, index) => (
                          <ImageCard3D 
                            key={image._id || index}
                            src={image.url} 
                            alt={`${category.title} - Image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="videos">
              {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tailor-gold"></div>
                </div>
              ) : videos.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No videos found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <div key={video._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="aspect-video">
                        <iframe
                          src={video.url}
                          title={video.title}
                          className="w-full h-full"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{video.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
