"use client";

import React from "react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const projects = [
  {
    title: "CaptAIn",
    image: "/images/captain.gif", // Replace with the correct image path
    description:
      "Developed and implemented autonomous swarm robots for oceanic applications, focusing on a robust mesh network for seamless communication and efficient data transmission across multiple platforms.",
    link: "#",
  },
  {
    title: "APTDash Project",
    image: "/images/aptdash.gif", // Replace with the correct image path
    description:
      "Designed a robot capable of autonomously navigating an apartment complex to deliver packages. Integrated SLAM, Nav2, and custom hardware solutions.",
    link: "https://sites.google.com/berkeley.edu/aptdash",
  },
  {
    title: "TriFinger Project",
    image: "/images/trifingercad.gif", // Replace with the correct image path
    description:
      "A three-finger manipulator with 9 degrees of freedom, designed for autonomous research and development to perform various tasks within its free workspace.",
    link: "https://sites.google.com/eng.ucsd.edu/156b-2021-winter-team03/home_1?authuser=0",
  },
];

const PortfolioSection = () => {
  const { isDarkMode } = useTheme(); // Access theme context for dark mode

  return (
    <section
      id="portfolio"
      className={`container py-16 transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded shadow-lg overflow-hidden transform transition-transform duration-300 ${
              isDarkMode
                ? "bg-gray-800 bg-opacity-70 hover:scale-105"
                : "bg-gray-100 bg-opacity-70 hover:scale-105"
            }`}
          >
            <Image
              src={project.image}
              alt={`${project.title} image`}
              width={500} // Adjust dimensions for optimized loading
              height={224} // Adjust dimensions for optimized loading
              className="w-full h-56 object-cover"
            />
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                isDarkMode ? "bg-black bg-opacity-50" : "bg-white bg-opacity-50"
              }`}
            >
              <div className="text-center px-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? "text-lightBlue/75 hover:text-lightBlue"
                      : "text-darkBlue/75 hover:text-black"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
