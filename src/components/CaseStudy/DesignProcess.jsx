import React from 'react';
import ScrollReveal from '../Effects/ScrollReveal';

const DesignProcess = ({ project }) => {
  const processSteps = [
    {      phase: "01",
      title: "Research & Analysis",
      description: "Deep dive into user behavior, competitor analysis, and identifying pain points in the existing design.",
      duration: "2 weeks",
      deliverables: ["User Research Report", "Competitor Analysis", "Technical Audit"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      phase: "02", 
      title: "Strategy & Planning",
      description: "Defining user personas, creating information architecture, and establishing design principles.",
      duration: "1 week",
      deliverables: ["User Personas", "Site Map", "Design System"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      phase: "03",
      title: "Wireframing & Prototyping", 
      description: "Creating low-fidelity wireframes and interactive prototypes to validate user flows.",
      duration: "2 weeks",
      deliverables: ["Wireframes", "Interactive Prototype", "User Flow Diagrams"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      phase: "04",
      title: "Visual Design",
      description: "Crafting the luxury aesthetic with premium typography, colors, and visual elements.",
      duration: "3 weeks", 
      deliverables: ["High-fidelity Mockups", "Style Guide", "Component Library"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      phase: "05",
      title: "Development & Testing",
      description: "Building the responsive platform with cutting-edge technologies and rigorous testing.",
      duration: "4 weeks",
      deliverables: ["Responsive Website", "Performance Optimization", "QA Testing"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      phase: "06",
      title: "Launch & Optimization",
      description: "Deploying the platform and continuous optimization based on user feedback and analytics.",
      duration: "Ongoing",
      deliverables: ["Live Website", "Analytics Setup", "Performance Monitoring"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mb-20">
      <ScrollReveal>
        <h2 className="mb-8 text-4xl font-bold text-center text-white">Design Process</h2>
        <p className="max-w-3xl mx-auto mb-16 text-xl text-center text-gray-300">
          Our systematic approach to transforming the luxury real estate experience through strategic design and development.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500 hidden lg:block"></div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 items-center justify-center flex-shrink-0 hidden w-16 h-16 rounded-full lg:flex bg-gradient-to-r from-amber-500 to-orange-600">
                  <span className="text-lg font-bold text-white">{step.phase}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 transition-colors duration-300 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50 hover:border-amber-500/50">
                  <div className="grid gap-6 lg:grid-cols-3">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          <span className="text-sm font-medium text-amber-300">{step.duration}</span>
                        </div>
                      </div>
                      <p className="leading-relaxed text-gray-300">{step.description}</p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="mb-3 font-semibold text-white">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="text-sm text-gray-400">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;