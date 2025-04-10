"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllGalleryAPI } from "@/services/operation/admin";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackendGallery = () => {
  const [gallery, setGallery] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllGallery = async () => {
      try {
        const response = await getAllGalleryAPI();
        if (Array.isArray(response)) {
          setGallery(response);
        } else {
          setGallery([]);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };
    getAllGallery();
  }, []);

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const uniqueTypes = gallery?.length
    ? ["all", ...new Set(gallery.map((item) => item.type))]
    : [];

  const filteredImages = gallery
    .filter((item) => selectedType === "all" || item.type === selectedType)
    .flatMap((item) =>
      item.images.map((img) => ({
        url: img.url,
        title: item.title,
        public_id: img.public_id,
        type: item.type,
      }))
    );

  function removeNumbersFromString(str: string) {
    return str?.replace(/\d+/g, "") || "";
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white min-h-screen">
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BackendGallery;