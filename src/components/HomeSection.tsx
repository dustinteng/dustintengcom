"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const HomeSection = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state from ThemeContext

  return (
    <section
      id="home"
      className={`h-screen flex items-center justify-center text-center transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Innovating the Future of Robotics
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Bringing ideas to life through technology and engineering.
        </p>
        <Link
          href="#portfolio"
          scroll={true}
          className={`inline-block px-8 py-4 font-semibold rounded transition-colors duration-300 ${
            isDarkMode
              ? "bg-neonBlue/75 text-black hover:bg-darkBlue hover:text-white"
              : "bg-darkBlue text-white hover:bg-neonBlue/75 hover:text-black"
          }`}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
