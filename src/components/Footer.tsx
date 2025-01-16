"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"; // Import ThemeContext for dark mode handling

const Footer = () => {
  const { isDarkMode } = useTheme(); // Access theme state

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`py-6 bg-transparent transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="container text-center">
        {/* Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Tengdyantono. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="https://github.com/dustinteng"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-neonBlue transition-colors ${
              isDarkMode ? "text-white" : "text-darkBlue"
            }`}
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/jantengdyantono"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-neonBlue transition-colors ${
              isDarkMode ? "text-white" : "text-darkBlue"
            }`}
          >
            LinkedIn
          </Link>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={handleScrollToTop}
          className={`mt-4 text-inherit hover:text-neonBlue focus:outline-none bg-transparent border-none transition-colors ${
            isDarkMode ? "text-white" : "text-darkBlue"
          }`}
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
