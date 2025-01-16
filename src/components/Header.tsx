"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  const sections = ["home", "about", "experience", "portfolio", "contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${
        isDarkMode
          ? "bg-darkBackground text-white"
          : "bg-lightBackground text-black"
      } bg-opacity-80 backdrop-blur`}
    >
      <nav className="container flex justify-between items-center px-6">
        {/* Logo */}
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-darkBlue"
          }`}
        >
          <Link
            href="/"
            className={`hover:text-neonBlue transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Tengdyantono
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            toggleTheme();
            console.log("Dark Mode State:", isDarkMode); // Debugging the state
          }}
          aria-label="Toggle Dark Mode"
          className={`mx-auto relative w-12 h-7 rounded-full flex items-center transition-all duration-300 ${
            isDarkMode ? "bg-neonBlue" : "bg-darkBlue"
          }`}
        >
          <span
            className={`absolute w-5 h-5 rounded-full shadow-md transform transition-transform ${
              isDarkMode
                ? "translate-x-6 bg-white"
                : "translate-x-1 bg-gray-300"
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-white hover:text-neonBlue"
                    : "text-black hover:text-darkBlue"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {navOpen ? (
              <XMarkIcon className="h-6 w-6 text-neonBlue" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-neonBlue" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {navOpen && (
        <ul
          className={`mobile-nav flex flex-col space-y-4 px-6 py-4 ${
            isDarkMode
              ? "bg-darkBackground text-white"
              : "bg-lightBackground text-black"
          }`}
        >
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className="block hover:text-neonBlue transition-colors duration-300"
                onClick={() => setNavOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
