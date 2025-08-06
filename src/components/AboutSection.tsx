"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Robotics", items: ["ROS2", "Autonomous Systems", "Path Planning", "SLAM"] },
    { category: "Hardware", items: ["Sensor Integration", "PCB Design", "Mechanical Design", "System Integration"] },
    { category: "Software", items: ["Python", "C++", "Linux", "Docker"] },
    { category: "Tools", items: ["Git", "CAD", "Simulation", "Testing"] },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate about creating intelligent systems that bridge the gap between imagination and reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/profilepic.png"
                    alt="Dustin Tengdyantono"
                    width={200}
                    height={200}
                    className="rounded-full object-cover border-4 border-primary-200 dark:border-primary-800"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Jan Dustin Tengdyantono</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-6">Robotics Solutions Engineer</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">3+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">15+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">400%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Efficiency Gain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="space-y-6">
                
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">My Journey</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I&apos;m a robotics engineer passionate about designing and building
                    autonomous systems that integrate hardware, software, and
                    cutting-edge technologies. My expertise spans ROS2 architecture,
                    system design, and real-world applications in autonomous vehicles,
                    ocean robotics, and swarm systems.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What I Do</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    With experience in startups and academic projects, I&apos;ve developed
                    scalable prototypes, advanced path-planning algorithms, and
                    innovative solutions for robotics challenges. I thrive at the
                    intersection of technology and creativity, continuously pushing
                    boundaries to solve complex problems.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    {skill.category}
                  </h4>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-slate-600 dark:text-slate-400 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
