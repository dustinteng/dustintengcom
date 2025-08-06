"use client";

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      institution: "University of California, San Diego",
      degree: "Bachelor of Science in Mechanical Engineering",
      duration: "2018 - 2021",
      gpa: "3.7/4.0",
      logo: "/images/ucsandiego.png",
      highlights: ["Controls Systems", "Machine Learning", "SolidWorks CAD", "UAV Design"],
    },
    {
      institution: "University of California, Berkeley",
      degree: "Master of Science in Mechanical Engineering",
      duration: "2024 - 2025",
      gpa: "3.8/4.0",
      logo: "/images/ucberkeley1.png",
      highlights: ["Swarm Robotics", "Ocean Systems", "Full-Stack Dev", "ROS2 Architecture"],
    },
  ]

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Education
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Academic foundation in engineering and robotics
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-lg bg-transparent p-2 flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <span>{edu.duration}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm border border-primary-200 dark:border-primary-800"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
