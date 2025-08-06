"use client";

import { useEffect, useState } from 'react'

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Dustin</span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Tengdyantono
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            Robotics Engineer & Software Developer
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Robotics', 'AI/ML', 'Full Stack', 'Hardware Design', 'Computer Vision'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce-gentle"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
