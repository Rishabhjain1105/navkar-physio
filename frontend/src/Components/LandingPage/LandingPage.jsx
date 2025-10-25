import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default LandingPage;
