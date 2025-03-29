
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const galleryItems = [
    {
      id: 1,
      category: 'kurta-pajama',
      image: 'https://images.unsplash.com/photo-1604901013586-05036e9a1e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Traditional Kurta Pajama',
      description: 'Hand-stitched traditional kurta pajama for special occasions.'
    },
    {
      id: 2,
      category: 'kurta-pajama',
      image: 'https://images.unsplash.com/photo-1580302163583-3ebfcf79b492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Modern Kurta Design',
      description: 'Contemporary kurta design with minimalist patterns.'
    },
    {
      id: 3,
      category: 'coat-pant',
      image: 'https://images.unsplash.com/photo-1593032534613-075f7ab3e6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Classic Blue Suit',
      description: 'Tailored blue suit with perfect fit and premium fabric.'
    },
    {
      id: 4,
      category: 'coat-pant',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Formal Black Suit',
      description: 'Elegant black suit for formal occasions and events.'
    },
    {
      id: 5,
      category: 'shirt',
      image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'White Formal Shirt',
      description: 'Crisp white formal shirt with custom collar design.'
    },
    {
      id: 6,
      category: 'shirt',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Checkered Casual Shirt',
      description: 'Stylish checkered shirt for casual occasions.'
    },
    {
      id: 7,
      category: 'coat-pant',
      image: 'https://images.unsplash.com/photo-1554774853-719586d82109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Casual Blazer',
      description: 'Relaxed blazer for semi-formal occasions.'
    },
    {
      id: 8,
      category: 'kurta-pajama',
      image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Embroidered Kurta',
      description: 'Handcrafted embroidery on premium fabric kurta.'
    },
    {
      id: 9,
      category: 'shirt',
      image: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      title: 'Blue Formal Shirt',
      description: 'Classic blue formal shirt for office wear.'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'kurta-pajama', label: 'Kurta Pajama' },
    { id: 'coat-pant', label: 'Coat & Pant' },
    { id: 'shirt', label: 'Shirts' }
  ];
  
  // Filter images based on active tab
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const filtered = activeTab === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeTab);
      
      setFilteredImages(filtered);
      setIsAnimating(false);
    }, 300);
  }, [activeTab]);
  
  // Initialize with all images
  useEffect(() => {
    setFilteredImages(galleryItems);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-tailor-navy">
        <div className="container-custom relative z-10">
          <div className="pt-16 pb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse through our collection of custom-tailored garments created for clients over the years.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
      
      {/* Gallery Filter Tabs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-tailor-gold text-tailor-navy' 
                    : 'bg-tailor-cream text-tailor-navy hover:bg-opacity-80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredImages.map((item) => (
              <div key={item.id} className="image-card">
                <div className="overflow-hidden h-64 rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white rounded-b-lg">
                  <h3 className="text-lg font-bold text-tailor-navy">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && !isAnimating && (
            <div className="text-center py-12">
              <p className="text-gray-700 mb-4">No items found in this category.</p>
              <button 
                onClick={() => setActiveTab('all')}
                className="btn-primary"
              >
                View All Items
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tailor-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Like What You See?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your tailoring needs and bring your vision to life with our expert craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link to="/services" className="border border-white text-white hover:bg-white hover:text-tailor-navy transition-all px-6 py-3 rounded font-medium">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
