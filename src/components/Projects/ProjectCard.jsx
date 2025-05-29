// ProjectCard.jsx
import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black text-xs font-bold">
              Featured
            </div>
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
              <span className="flex items-center gap-2">
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8">
          {/* Category */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
            <span className="text-blue-300 text-sm font-medium">{project.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 text-xs border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
            {Object.entries(project.stats).map(([key, value], statIndex) => (
              <div key={statIndex} className="text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-gray-400 text-xs capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl scale-110 transition-opacity duration-500 -z-10`}></div>
      </div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full animate-float-particle`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;