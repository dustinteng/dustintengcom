"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CalendarIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    company: "CIV Robotics Inc.",
    role: "Lead Field Robotics Engineer",
    duration: "Jan 2023 - Aug 2024",
    location: "San Francisco, CA",
    description: [
      "Led operations team in coordinating with subcontractors, focusing on scaling production and improving build quality",
      "Onboarded new engineers and aligned them with company goals and project milestones",
      "Standardized electrical and hardware components to streamline manufacturing processes",
      "Simplified technical documentation, manuals, and training modules to improve team productivity",
      "Prototyped testing tools for new sensor integrations and optimized system configurations",
      "Managed customer support operations, ensuring efficient troubleshooting and maintenance services",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
    highlights: ["400% efficiency improvement", "Team leadership", "Production scaling"],
  },
  {
    company: "CIV Robotics Inc.",
    role: "Field Application Engineer",
    duration: "Jan 2022 - Jan 2023",
    location: "San Francisco, CA",
    description: [
      "Built autonomous high-accuracy surveying rovers, achieving 400% greater efficiency compared to human teams",
      "Deployed and maintained rovers at customer sites, addressing technical issues in real-time",
      "Investigated and resolved unexpected mechanical and electrical failures to ensure operational reliability",
      "Collaborated with the development team to enhance performance and scalability of robotic systems",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
    highlights: ["Autonomous systems", "Field deployment", "System reliability"],
  },
  {
    company: "CIV Robotics Inc.",
    role: "Field Application Intern",
    duration: "Sep 2021 - Jan 2022",
    location: "San Francisco, CA",
    description: [
      "Assisted with prototyping and testing jigs for autonomous surveying rovers",
      "Supported the integration of sensors and electrical components into rover systems",
      "Performed troubleshooting on mechanical and electrical components",
      "Gained experience in rapid prototyping, mechanical assembly, and circuit design",
      "Managed inventory, ensuring availability and proper tracking of components for ongoing projects",
    ],
    logo: "/images/civrobotics.png",
    website: "https://www.civrobotics.com",
    highlights: ["Prototyping", "Hardware integration", "Circuit design"],
  },
   {
    company: "PT. Qlue Performa Indonesia",
    role: "IoT Engineer Intern",
    duration: "Jun 2020 - Aug 2020",
    location: "Jakarta, Indonesia",
    description: [
      "Navigated prototyping until the manufacturing of sensor holders and device housings",
      "Debug components and its connections to the circuit board and Jetson Nano",
      "Headed the development of the tilting mechanism of Qlue Thermal devices which follows users' point of interest",
      "Orchestrated with colleagues to develop Qlue Thermal integrated testing, reducing recall up to 95%",
      "Executing Qlue Thermal devices' production, as a team deployed more than 40 devices per month",
    ],
    logo: "/images/qlue.jpeg",
    website: "https://qlue.co.id",
    highlights: ["IoT Development", "Hardware Integration", "Production Scaling"],
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation for timeline items
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Experience
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Building the future of autonomous systems through hands-on engineering and innovation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    visibleItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline line connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 md:left-1/2 top-12 h-full w-0.5 bg-gradient-to-b from-primary-400 to-accent-400 dark:from-primary-500 dark:to-accent-500 transform -translate-x-0.5 z-0"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform -translate-x-2 mt-8 shadow-lg border-2 border-white dark:border-slate-900 z-10"></div>

                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-12' : 'md:pl-1/2 md:ml-12'}`}>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg relative overflow-hidden">
                      {/* Card background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-accent-50/30 dark:from-primary-900/10 dark:to-accent-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          {experience.logo && (
                            <div className="w-12 h-12 flex-shrink-0">
                              <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                              {experience.role}
                            </h3>
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                            >
                              {experience.company}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <div className="flex items-center text-slate-600 dark:text-slate-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-slate-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {experience.location}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm border border-primary-200 dark:border-primary-800"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <ul className="space-y-3">
                        {experience.description.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-slate-700 dark:text-slate-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
