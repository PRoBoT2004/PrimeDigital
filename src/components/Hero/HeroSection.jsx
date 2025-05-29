// HeroSection.jsx
import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import FloatingCard from './FloatingCard';
import ScrollReveal from '../Effects/ScrollReveal';
import { useParallax } from '../../hooks/useParallax';

const HeroSection = () => {
  const scrollY = useParallax();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    // Create a demo modal or redirect to demo video
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    // Or you could show a modal with demo content
    // setShowDemoModal(true);
  };

  const playIcon = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1" />
  );

  return (
    <section id="home" className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div 
            className="space-y-8 text-center lg:text-left"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <ScrollReveal delay={200}>
              <Badge showDot>Welcome to the Future</Badge>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                  Build the
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-gradient-x">
                  Impossible
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-300">
                Transform your wildest ideas into reality with cutting-edge technology. 
                We create digital experiences that push boundaries and redefine what's possible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button 
                  variant="primary" 
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
                <Button 
                  variant="secondary" 
                  icon={playIcon}
                  onClick={handleWatchDemo}
                >
                  Watch Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual */}
          <div 
            className="relative flex justify-center lg:justify-end"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          >
            <ScrollReveal direction="left" delay={600}>
              <FloatingCard />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;