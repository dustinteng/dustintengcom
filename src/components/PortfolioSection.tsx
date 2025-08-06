'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const projects = [
    {
      title: "TriFinger Robot Manipulation",
      description: "Advanced robotic manipulation system with computer vision and machine learning capabilities.",
      image: "/images/trifinger.gif",
      tags: ["Robotics", "Computer Vision", "ML", "Arduino"],
      link: "#"
    },
    {
      title: "Autonomous Navigation System",
      description: "Real-time path planning and obstacle avoidance for autonomous vehicles.",
      image: "/images/captain.gif",
      tags: ["Autonomous Systems", "ROS2", "Real-time", "Dashboard"],
      link: "#"
    },
    {
      title: "APT Dashboard",
      description: "Real-time monitoring and control dashboard for robotic systems.",
      image: "/images/aptdash.gif",
      tags: ["SLAM", "ROS2"],
      link: "#"
    }
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Portfolio
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Featured projects showcasing robotics and autonomous systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm border border-primary-200 dark:border-primary-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
