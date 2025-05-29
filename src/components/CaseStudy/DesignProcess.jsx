import React from 'react';
import ScrollReveal from '../Effects/ScrollReveal';

const DesignProcess = ({ project }) => {
  // Add this to DesignProcess.jsx - replace the existing processSteps
const processSteps = [
  {
    phase: "01",
    title: "Research & Discovery",
    description: "User research, competitor analysis, and market study for luxury real estate targeting high-net-worth individuals.",
    duration: "1-2 Days",
    deliverables: ["User Personas", "Journey Maps", "Competitive Analysis"],
    tools: ["Figma", "Miro", "User Interviews"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    phase: "02", 
    title: "Wireframing & Architecture",
    description: "Low-fidelity wireframes and information architecture planning in Figma.",
    duration: "2 Days",
    deliverables: ["Wireframes", "Site Map", "User Flows"],
    tools: ["Figma", "Whimsical"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    phase: "03",
    title: "Visual Design & Branding", 
    description: "High-fidelity designs in Figma with custom graphics created in Photoshop for luxury aesthetic.",
    duration: "2 Days",
    deliverables: ["Design System", "Style Guide", "Brand Assets"],
    tools: ["Figma", "Photoshop", "Illustrator"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    phase: "04",
    title: "Prototyping & Testing",
    description: "Interactive prototypes in Figma and usability testing to validate design decisions.",
    duration: "3 Days", 
    deliverables: ["Interactive Prototypes", "Usability Reports", "Design Iterations"],
    tools: ["Figma", "Principle", "Maze"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    )
  },
  {
    phase: "05",
    title: "Development & Implementation",
    description: "Converting Figma designs to responsive React application with pixel-perfect accuracy.",
    duration: "3 Days",
    deliverables: ["Responsive Website", "Component Library", "Documentation"],
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    phase: "06",
    title: "Testing & Optimization",
    description: "Cross-browser testing, performance optimization, and final quality assurance.",
    duration: "1 week",
    deliverables: ["Live Website", "Performance Report", "Handover Documentation"],
    tools: ["Testing Tools", "Analytics", "Performance Monitoring"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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