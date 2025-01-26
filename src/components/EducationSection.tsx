"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

const education = [
  {
    institution: "University of California, Berkeley",
    degree: "Master of Engineering in Robotics",
    duration: "2024 - 2025",
    logo: "/images/ucberkeley.png",
    website: "https://engineering.berkeley.edu",
  },
  {
    institution: "University of California, San Diego",
    degree: "Bachelor of Science in Mechanical Engineering",
    duration: "2018 - 2021",
    logo: "/images/ucsandiego.png",
    website: "https://www.ucsd.edu",
  },
];

const EducationSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="education" className="container py-16">
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
              isDarkMode ? "bg-gray-999 text-white" : "bg-gray-000 text-black"
            }`}
          >
            <div className="flex items-center space-x-4">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={64}
                  height={64}
                  className="object-contain rounded-md shadow-sm"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sm font-medium">{edu.duration}</p>
                <p className="text-neonBlue font-medium">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {edu.institution}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
