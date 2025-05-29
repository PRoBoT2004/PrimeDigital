// ServiceCard.jsx
import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Card */}
      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
        
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
        
        {/* Icon */}
        <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-3">
                <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                <span className="text-gray-400 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <button className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-white font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl scale-110 transition-opacity duration-500 -z-10`}></div>
      </div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full animate-float-particle`}
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

export default ServiceCard;