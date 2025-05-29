// BeforeAfterComparison.jsx
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../Effects/ScrollReveal';

const BeforeAfterComparison = ({ project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Mock before/after data - you can replace with real project data
  const beforeAfterData = {
    before: {
      image: "/public/before.jpg",
      title: "Old Website",
      issues: [
        "Outdated design language",
        "Poor mobile responsiveness", 
        "Slow loading times",
        "Confusing navigation",
        "Low conversion rates"
      ]
    },
    after: {
      image: "/public/after.jpg",
      title: "New Design",
      improvements: [
        "Modern, luxury aesthetic",
        "Mobile-first approach",
        "Lightning-fast performance",
        "Intuitive user experience",
        "300% increase in conversions"
      ]
    }
  };

  return (
    <div className="mb-20">
      <ScrollReveal>
        <h2 className="mb-8 text-4xl font-bold text-center text-white">Before vs After</h2>
        <p className="max-w-3xl mx-auto mb-12 text-xl text-center text-gray-300">
          See the dramatic transformation that elevated the user experience and drove exceptional results.
        </p>
      </ScrollReveal>

      {/* Interactive Slider Comparison */}
      <ScrollReveal delay={400}>
        <div className="mb-16">
          <div 
            ref={containerRef}
            className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <img 
                src={beforeAfterData.before.image}
                alt="Before design"
                className="object-cover w-full h-full"
                draggable={false}
              />
              <div className="absolute inset-0 bg-red-900/20"></div>
              <div className="absolute px-4 py-2 font-semibold text-white rounded-lg top-4 left-4 bg-red-500/90">
                BEFORE
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={beforeAfterData.after.image}
                alt="After design"
                className="object-cover w-full h-full"
                draggable={false}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
              <div className="absolute px-4 py-2 font-semibold text-white rounded-lg top-4 right-4 bg-green-500/90">
                AFTER
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 left-1/2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Drag Instruction */}
            <div className="absolute px-4 py-2 text-sm text-white transform -translate-x-1/2 rounded-lg bottom-4 left-1/2 bg-black/50 backdrop-blur-sm">
              Drag to compare
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Side by Side Comparison */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Before Section */}
        <ScrollReveal direction="left" delay={600}>
          <div className="p-8 border bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl backdrop-blur-xl border-red-700/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">{beforeAfterData.before.title}</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="mb-3 font-semibold text-red-300">Key Issues:</h4>
              {beforeAfterData.before.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{issue}</span>
                </div>
              ))}
            </div>

            {/* Performance Metrics - Before */}
            <div className="pt-6 mt-8 border-t border-red-700/30">
              <h4 className="mb-4 font-semibold text-red-300">Performance Issues:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-red-400">8.5s</div>
                  <div className="text-sm text-gray-400">Load Time</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-red-400">2.1%</div>
                  <div className="text-sm text-gray-400">Conversion</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-red-400">45%</div>
                  <div className="text-sm text-gray-400">Bounce Rate</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-red-400">32</div>
                  <div className="text-sm text-gray-400">SEO Score</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* After Section */}
        <ScrollReveal direction="right" delay={800}>
          <div className="p-8 border bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl backdrop-blur-xl border-green-700/30">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">{beforeAfterData.after.title}</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="mb-3 font-semibold text-green-300">Key Improvements:</h4>
              {beforeAfterData.after.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{improvement}</span>
                </div>
              ))}
            </div>

            {/* Performance Metrics - After */}
            <div className="pt-6 mt-8 border-t border-green-700/30">
              <h4 className="mb-4 font-semibold text-green-300">Performance Results:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-green-400">1.2s</div>
                  <div className="text-sm text-gray-400">Load Time</div>
                  <div className="text-xs text-green-400">↓ 86% faster</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-green-400">6.3%</div>
                  <div className="text-sm text-gray-400">Conversion</div>
                  <div className="text-xs text-green-400">↑ 300% increase</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-green-400">18%</div>
                  <div className="text-sm text-gray-400">Bounce Rate</div>
                  <div className="text-xs text-green-400">↓ 60% reduction</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-green-400">94</div>
                  <div className="text-sm text-gray-400">SEO Score</div>
                  <div className="text-xs text-green-400">↑ 194% improvement</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Impact Summary */}
      <ScrollReveal delay={1000}>
        <div className="mt-16 text-center">
          <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
            <h3 className="mb-6 text-2xl font-bold text-white">Transformation Impact</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-amber-400">300%</div>
                <div className="text-gray-300">Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-400">86%</div>
                <div className="text-gray-300">Faster Load Times</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-400">$2M+</div>
                <div className="text-gray-300">Additional Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default BeforeAfterComparison;