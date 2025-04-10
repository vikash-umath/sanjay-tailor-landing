
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllGalleryAPI } from '@/services/operation/admin';
import { getAllVideoAPI } from '@/services/operation/admin';
import ImageCard3D from '@/components/ImageCard3D';
import SEO from '@/components/SEO';
import GalleryStructuredData from '@/components/GalleryStructuredData';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [gallery, setGallery] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("all");
  const [allImages, setAllImages] = useState<any[]>([]);
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleryData = await getAllGalleryAPI();
        const videosData = await getAllVideoAPI();
        
        if (Array.isArray(galleryData)) {
          setGallery(galleryData);
          
          // Extract all images and types for filtering
          const images = galleryData.flatMap(item => 
            item.images.map(img => ({
              ...img,
              title: item.title,
              type: item.type
            }))
          );
          
          setAllImages(images);
          setFilteredImages(images);
          
          // Get unique types for filter buttons
          const types = ["all", ...new Set(galleryData.map(item => item.type))];
          setUniqueTypes(types);
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

  // Handle type filter click
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    
    if (type === "all") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter(img => img.type === type);
      setFilteredImages(filtered);
    }
  };

  // Format gallery images for structured data
  const structuredDataImages = gallery.flatMap(category => 
    category.images.map(img => ({
      url: img.url,
      name: `${category.title} - Sanjay Mens Tailor`,
      description: category.description
    }))
  );

  // Helper function to remove numbers from string
  const removeNumbersFromString = (str: string) => {
    return str.replace(/[0-9]/g, '');
  };

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
      <div className="relative pt-24 pb-16 text-center bg-tailor-navy">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto"
        >
          <h4 className="text-5xl font-extrabold text-yellow-400 mb-4">Our Gallery</h4>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our finest custom-made collections designed for our prestigious clients.
          </p>
        </motion.div>
      </div>

      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {loading && (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-tailor-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          )}

          {!loading && gallery.length === 0 && videos.length === 0 && (
            <div className="text-center text-gray-600 text-lg py-12">
              No gallery items available.
            </div>
          )}

          <Tabs defaultValue="photos" className="w-full">
            {/* <TabsList className="w-full max-w-md mx-auto mb-8 bg-tailor-cream/20">
              <TabsTrigger value="photos" className="flex-1 py-3">Photos</TabsTrigger>
              <TabsTrigger value="videos" className="flex-1 py-3">Videos</TabsTrigger>
            </TabsList> */}
            
            <TabsContent value="photos">
              {uniqueTypes.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {uniqueTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleTypeClick(type)}
                      className={`px-6 py-2 text-lg font-bold rounded-full border-2 transition-all border-yellow-400 
                      ${selectedType === type ? "bg-yellow-400 text-gray-900" : "text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"}`}
                    >
                      {type === "all" ? "All Photos" : removeNumbersFromString(type)}
                    </button>
                  ))}
                </div>
              )}

              {filteredImages.length > 0 && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages.map((img) => (
                    <motion.div 
                      key={img.public_id} 
                      className="relative group overflow-hidden rounded-xl shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ImageCard3D 
                        src={img.url}
                        alt={img.title || "Gallery Image"}
                        caption={img.title}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-white text-lg font-semibold mb-2">{img.title}</h3>
                        <a
                          href="tel:918817212379"
                          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-yellow-500"
                        >
                          Book Now
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={video.videos[0]?.url || ""}
                        title={video.title}
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{video.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{video.description || ""}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
