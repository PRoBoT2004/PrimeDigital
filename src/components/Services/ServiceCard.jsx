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
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
        <div className={`floating-orb floating-orb-1 bg-gradient-to-r ${service.gradient} opacity-20`}></div>
        <div className={`floating-orb floating-orb-2 bg-gradient-to-r ${service.gradient} opacity-15`}></div>
        <div className={`floating-orb floating-orb-3 bg-gradient-to-r ${service.gradient} opacity-10`}></div>
      </div>

      {/* Main Card */}
      <div className="glass-card relative h-full min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl overflow-hidden">
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-gradient"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full gap-6 lg:flex-row sm:gap-8 lg:gap-10">
          
          {/* Icon and Title */}
          <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
            <div className={`icon-container w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto lg:mx-0 shadow-2xl`}>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl icon-bounce">
                {service.icon}
              </div>
            </div>
            
            <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl lg:mb-0 text-glow">
              {service.title}
            </h3>
          </div>

          {/* Description and Features */}
          <div className="flex-1 text-center lg:text-left lg:px-4">
            <p className="mb-6 text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:text-2xl sm:mb-8">
              {service.description}
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 lg:gap-6 sm:mb-8">
              {service.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className="flex items-center justify-center gap-3 feature-item lg:justify-start"
                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                >
                  <div className={`feature-dot w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}></div>
                  <span className="text-sm font-medium text-gray-400 sm:text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button and Number */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 lg:items-end lg:w-1/4">
            <div className="mb-4 text-5xl font-bold leading-none service-number sm:text-6xl md:text-7xl lg:text-9xl text-white/10 sm:mb-6 lg:mb-8">
              0{service.id}
            </div>
            
            <button 
              onClick={() => onOpenModal(service)}
              className="relative w-full px-6 py-3 overflow-hidden text-base font-semibold text-white shadow-lg glow-button sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 sm:text-lg md:text-xl sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Learn More
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 arrow-slide" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="button-shine"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;