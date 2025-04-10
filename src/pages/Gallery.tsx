
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
      <section className="relative pt-24 pb-16 text-center">
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
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {loading && <p className="text-center text-gray-300">Loading gallery...</p>}

        {!loading && gallery.length === 0 && (
          <div className="text-center text-yellow-400 text-lg">
            No gallery items available.
          </div>
        )}

        {uniqueTypes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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
                <img
                  src={img.url}
                  alt="Gallery Image"
                  className="w-full h-64 object-cover rounded-xl transition-all duration-300 group-hover:scale-110"
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
