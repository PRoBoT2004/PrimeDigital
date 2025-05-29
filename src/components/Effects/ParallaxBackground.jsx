// ParallaxBackground.jsx
import React from 'react';
import { useParallax } from '../../hooks/useParallax';

const ParallaxBackground = () => {
  const scrollY = useParallax();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Background Orbs with Parallax */}
      <div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          top: '25%',
          left: '25%',
          transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
        }}
      ></div>
      
      <div 
        className="absolute w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
        style={{
          bottom: '25%',
          right: '25%',
          transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.15}px)`,
          animationDelay: '1s'
        }}
      ></div>
      
      <div 
        className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
        style={{
          top: '50%',
          right: '33%',
          transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * 0.05}px)`,
          animationDelay: '2s'
        }}
      ></div>

      {/* Additional floating elements */}
      <div 
        className="absolute w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"
        style={{
          top: '10%',
          right: '10%',
          transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`
        }}
      ></div>

      <div 
        className="absolute w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl"
        style={{
          bottom: '10%',
          left: '10%',
          transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`
        }}
      ></div>
    </div>
  );
};

export default ParallaxBackground;