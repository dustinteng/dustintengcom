"use client";

import React, { useEffect, useState } from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import { CustomGeometricaBackground } from "@/utils/Backgrounds";
import { useTheme } from "@/context/ThemeContext"; // Ensure this is correctly imported
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const { isDarkMode } = useTheme(); // Correctly use the hook

  useEffect(() => {
    // Generate the background image on the client side
    setBackgroundImage(
      `url("data:image/svg+xml,${CustomGeometricaBackground(isDarkMode)}")`
    );
  }, [isDarkMode]);

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-colors duration-300"
      style={backgroundImage ? { backgroundImage } : undefined}
    >
      <Header />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
