
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  pathname?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "best tailor Ashta, premium tailor Indore, mens boutique, Sanjay tailor, kurta pajama tailor, custom tailoring, coat pant, designer shirts, Ashta tailor, Indore tailor",
  ogImage = "/lovable-uploads/logo.png",
  pathname = "",
  canonicalUrl,
}) => {
  const siteUrl = "https://www.sanjaymenstailor.com";
  const pageUrl = pathname ? `${siteUrl}/${pathname}` : siteUrl;
  const canonical = canonicalUrl || pageUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;
