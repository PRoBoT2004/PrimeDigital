// ContactInfoCard.jsx
import React, { useState } from 'react';

const ContactInfoCard = ({ info }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-6 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
        
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
        
        {/* Icon */}
        <div className={`relative z-10 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {info.icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {info.title}
          </h3>
          
          <p className="text-blue-300 font-medium mb-2">
            {info.value}
          </p>

          <p className="text-gray-400 text-sm">
            {info.description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl scale-110 transition-opacity duration-500 -z-10`}></div>
      </div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${info.gradient} rounded-full animate-float-particle`}
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

export default ContactInfoCard;