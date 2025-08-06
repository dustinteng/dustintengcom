"use client";

import React from "react";
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="relative">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
