
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToActionSection from '@/components/home/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutPreviewSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
