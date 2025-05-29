// HeroSection.jsx
import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import FloatingCard from './FloatingCard';
import ScrollReveal from '../Effects/ScrollReveal';
import { useParallax } from '../../hooks/useParallax';

const HeroSection = () => {
  const scrollY = useParallax();
  const demoIcon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1" />;

  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div 
            className="text-center lg:text-left space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <ScrollReveal delay={200}>
              <Badge showDot>Welcome to the Future</Badge>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Build the
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  Impossible
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Transform your wildest ideas into reality with cutting-edge technology. 
                We create digital experiences that push boundaries and redefine what's possible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary" icon={demoIcon}>Watch Demo</Button>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={1000}>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-sm">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
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