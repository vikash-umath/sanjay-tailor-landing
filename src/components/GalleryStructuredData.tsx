
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GalleryStructuredDataProps {
  images: {
    url: string;
    name: string;
    description?: string;
  }[];
}

const GalleryStructuredData: React.FC<GalleryStructuredDataProps> = ({ images }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": images.map((image, index) => ({
      "@type": "ImageObject",
      "position": index + 1,
      "contentUrl": image.url,
      "name": image.name,
      "description": image.description || "Custom tailored clothing by Sanjay Mens Tailor And Boutique collection"
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default GalleryStructuredData;
