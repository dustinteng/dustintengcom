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
        <Image
          src="/images/profile.JPG"
          alt="Profile"
          width={192} // Define width for optimization (48 * 4 = 192px)
          height={192} // Define height for optimization (48 * 4 = 192px)
          className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12"
        />
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            I&apos;m a robotics engineer with a passion for creating innovative
            solutions that bridge the gap between hardware and software. With
            experience in mechanical design, electronics, and programming, I
            enjoy tackling complex challenges and pushing the boundaries of
            technology.
          </p>
          <p>
            My journey in robotics has taken me from academic research to
            industry projects, where I&apos;ve contributed to the development of
            autonomous systems, robotic arms, and AI-driven applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
