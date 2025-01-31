"use client";

import React from "react";
import Image from "next/image"; // Import Image component
import { useTheme } from "@/context/ThemeContext";

const AboutSection = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state from ThemeContext

  return (
    <section
      id="about"
      className={`container py-16 transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
      style={{
        backgroundColor: "transparent", // Transparent background
      }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/images/profilepic.png"
            alt="Profile"
            width={192} // Define width for optimization (48 * 4 = 192px)
            height={192} // Define height for optimization (48 * 4 = 192px)
            className="rounded-full object-cover"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            I’m a robotics engineer passionate about designing and building
            autonomous systems that integrate hardware, software, and
            cutting-edge technologies. My expertise spans ROS2 architecture,
            system design, and real-world applications in autonomous vehicles,
            ocean robotics, and swarm systems.
          </p>
          <p>
            With experience in startups and academic projects, I’ve developed
            scalable prototypes, advanced path-planning algorithms, and
            innovative solutions for robotics challenges. I thrive at the
            intersection of technology and creativity, continuously pushing
            boundaries to solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
