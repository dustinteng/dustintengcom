"use client";

import React from "react";
import Image from "next/image"; // Import Image from next/image
import { useTheme } from "@/context/ThemeContext";

const experiences = [
  {
    company: "CIV Robotics Inc.",
    role: "Lead Field Robotics Engineer",
    duration: "Jan 2023 - Aug 2024",
    description: [
      "Led the operations team in coordinating with subcontractors, focusing on scaling production and improving build quality.",
      "Onboarded new engineers and aligned them with company goals and project milestones.",
      "Standardized electrical and hardware components to streamline manufacturing processes.",
      "Simplified technical documentation, manuals, and training modules to improve team productivity.",
      "Prototyped testing tools for new sensor integrations and optimized system configurations.",
      "Managed customer support operations, ensuring efficient troubleshooting and maintenance services for deployed systems.",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
  },
  {
    company: "CIV Robotics Inc.",
    role: "Field Application Engineer",
    duration: "Jan 2022 - Jan 2023",
    description: [
      "Built autonomous high-accuracy surveying rovers, achieving 400% greater efficiency compared to human teams.",
      "Deployed and maintained rovers at customer sites, addressing technical issues in real-time.",
      "Investigated and resolved unexpected mechanical and electrical failures to ensure operational reliability.",
      "Collaborated with the development team to enhance the performance and scalability of robotic systems.",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
  },
  {
    company: "CIV Robotics Inc.",
    role: "Field Application Intern",
    duration: "Sep 2021 - Jan 2022",
    description: [
      "Assisted with prototyping and testing jigs for autonomous surveying rovers.",
      "Supported the integration of sensors and electrical components into rover systems.",
      "Performed troubleshooting on mechanical and electrical components.",
      "Gained experience in rapid prototyping, mechanical assembly, and circuit design.",
      "Managed inventory, ensuring availability and proper tracking of components for ongoing projects.",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
  },
];

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className="container py-16">
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`p-6 rounded shadow-lg transition-colors duration-300 ${
              isDarkMode ? "bg-gray-999 text-white" : "bg-gray-000 text-black"
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              {experience.logo && (
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={64} // Set dimensions for optimization
                  height={64}
                  className="object-contain"
                />
              )}
              <div>
                <h3 className="text-2xl font-semibold">{experience.role}</h3>
                <p className="font-medium">
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${
                      isDarkMode
                        ? "text-lightBlue/75 hover:text-lightBlue"
                        : "text-darkBlue/75 hover:text-black"
                    }`}
                  >
                    {experience.company}
                  </a>
                </p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {experience.duration}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
