// ServiceCard.jsx
import React, { useState } from 'react';

const ServiceCard = ({ service, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm mx-auto group sm:max-w-md md:max-w-lg lg:max-w-6xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Orbital Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`orbital absolute w-4 h-4 bg-gradient-to-r ${service.gradient} rounded-full opacity-30`}
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 30}%`,
              transformOrigin: `${100 + i * 50}px ${100 + i * 50}px`
            }}
          />
        ))}
      </div>

      {/* Main Morphing Card */}
      <div className="morph-card relative h-full min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-14 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl sm:rounded-3xl backdrop-blur-xl border-gray-700/50 shadow-2xl overflow-hidden">
        
        {/* Liquid Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-1000`}></div>
        
        {/* Morphing Content */}
        <div className="relative z-10 flex flex-col items-center h-full gap-6 morph-content lg:flex-row sm:gap-8 lg:gap-10">
          
          {/* Icon and Title */}
          <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
            <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto lg:mx-0 shadow-2xl overflow-hidden`}>
              
              {/* Icon with liquid effect */}
              <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                {service.icon}
              </div>
              
              {/* Liquid ripple effect */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out scale-0 rounded-full bg-white/20 group-hover:scale-150"></div>
            </div>
            
            <h3 className="mb-4 text-2xl font-bold leading-tight text-white transition-all duration-500 sm:text-3xl md:text-4xl lg:text-5xl lg:mb-0 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text">
              {service.title}
            </h3>
          </div>

          {/* Description and Features */}
          <div className="flex-1 text-center lg:text-left lg:px-4">
            <p className="mb-6 text-base font-light leading-relaxed text-gray-300 transition-colors duration-500 sm:text-lg md:text-xl lg:text-2xl sm:mb-8 group-hover:text-gray-100">
              {service.description}
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 lg:gap-6 sm:mb-8">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center justify-center gap-3 lg:justify-start group/feature">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 shadow-lg group-hover/feature:scale-150 group-hover/feature:shadow-xl transition-all duration-300`}></div>
                  <span className="text-sm font-medium text-gray-400 transition-colors duration-300 sm:text-base md:text-lg group-hover/feature:text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button and Number */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 lg:items-end lg:w-1/4">
            <div className="mb-4 text-5xl font-bold leading-none transition-colors duration-500 sm:text-6xl md:text-7xl lg:text-9xl text-white/10 sm:mb-6 lg:mb-8 group-hover:text-white/20">
              0{service.id}
            </div>
            
            <button 
              onClick={() => onOpenModal(service)}
              className="relative w-full px-6 py-3 overflow-hidden text-base font-semibold text-white rounded-lg shadow-lg sm:px-8 sm:py-4 md:px-10 md:py-5 sm:rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-blue-700 sm:text-lg md:text-xl sm:w-auto group/btn"
            >
              {/* Button liquid effect */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover/btn:opacity-100"></div>
              
              {/* Button ripple */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out scale-0 rounded-full bg-white/20 group-hover/btn:scale-150"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Learn More
                <svg className="w-4 h-4 transition-transform duration-300 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Morphing glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 rounded-2xl sm:rounded-3xl blur-xl scale-110 transition-all duration-1000 -z-10`}></div>
        
        {/* Liquid border effect */}
        <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent rounded-2xl sm:rounded-3xl group-hover:border-blue-400/50">
          <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-sm`}></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;