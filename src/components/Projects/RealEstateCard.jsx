// RealEstateCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { realEstateProject } from './realEstateProject';

const RealEstateCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const project = realEstateProject;

  const handleViewProject = () => {
    navigate(`/case-study/${project.slug}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:border-amber-500/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 group-hover:-translate-y-3">
          
          {/* Featured Badge */}
          <div className="absolute top-6 left-6 z-20">
            <div className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-black text-sm font-bold shadow-lg">
              ✨ Featured Project
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-80 lg:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <button 
                onClick={handleViewProject}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-10">
            {/* Category */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
              <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm border border-gray-700/50 hover:border-amber-500/50 hover:text-amber-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700/50">
              {Object.entries(project.stats).map(([key, value], statIndex) => (
                <div key={statIndex} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-gray-400 text-sm capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleViewProject}
                className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Full Case Study
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl scale-110 transition-opacity duration-500 -z-10`}></div>
        </div>

        {/* Floating Particles on Hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full animate-float-particle`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstateCard;