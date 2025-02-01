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

        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="https://github.com/dustinteng"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDarkMode
                ? "text-neonBlue/75 hover:text-white"
                : "text-darkBlue hover:text-black"
            }`}
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/jantengdyantono"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDarkMode
                ? "text-neonBlue/75 hover:text-white"
                : "text-darkBlue hover:text-black"
            }`}
          >
            LinkedIn
          </Link>
        </div>

        <button
          onClick={handleScrollToTop}
          className={`mt-4 bg-transparent border-none focus:outline-none transition-colors ${
            isDarkMode
              ? "text-neonBlue/75 hover:text-white"
              : "text-darkBlue hover:text-black"
          }`}
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
