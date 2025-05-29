// UXImprovements.jsx
import React, { useState } from 'react';
import ScrollReveal from '../Effects/ScrollReveal';

const UXImprovements = ({ project }) => {
  const [activeTab, setActiveTab] = useState(0);

  const improvements = [
    {
      title: "Navigation & Search",
      before: "Complex menu structure with 15+ categories, hidden search functionality, and confusing property filters.",
      after: "Streamlined navigation with smart search, AI-powered filters, and intuitive property discovery.",
      metrics: { improvement: "85%", metric: "easier navigation" },
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      title: "Property Listings",
      before: "Small thumbnails, limited property information, and no virtual tour capabilities.",
      after: "High-resolution galleries, comprehensive property details, and immersive 3D virtual tours.",
      metrics: { improvement: "300%", metric: "engagement increase" },
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop"
    },
    {
      title: "Mobile Experience",
      before: "Non-responsive design, broken layouts on mobile, and poor touch interactions.",
      after: "Mobile-first responsive design with touch-optimized interactions and native app feel.",
      metrics: { improvement: "250%", metric: "mobile conversions" },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    },
    {
      title: "Contact & Inquiries",
      before: "Hidden contact forms, no real-time chat, and delayed response times.",
      after: "Prominent contact options, instant chat support, and automated inquiry routing.",
      metrics: { improvement: "400%", metric: "lead generation" },
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="mb-20">
      <ScrollReveal>
        <h2 className="mb-8 text-4xl font-bold text-center text-white">User Experience Improvements</h2>
        <p className="max-w-3xl mx-auto mb-12 text-xl text-center text-gray-300">
          Every interaction was redesigned to create a seamless, luxury experience that converts visitors into clients.
        </p>
      </ScrollReveal>

      {/* Tab Navigation */}
      <ScrollReveal delay={400}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {improvements.map((improvement, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg`
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-amber-500/50 hover:text-amber-300'
              }`}
            >
              {improvement.title}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Active Tab Content */}
      <ScrollReveal key={activeTab} delay={200}>
        <div className="overflow-hidden border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
          
          {/* Image */}
          <div className="relative h-64 overflow-hidden lg:h-80">
            <img 
              src={improvements[activeTab].image}
              alt={improvements[activeTab].title}
              className="object-cover w-full h-full"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
            
            {/* Metric Overlay */}
            <div className="absolute p-4 text-center top-6 right-6 bg-black/50 backdrop-blur-sm rounded-xl">
              <div className="text-2xl font-bold text-amber-400">{improvements[activeTab].metrics.improvement}</div>
              <div className="text-sm text-gray-300">{improvements[activeTab].metrics.metric}</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">{improvements[activeTab].title}</h3>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Before */}
              <div className="p-6 border bg-red-900/20 rounded-xl border-red-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-red-300">Before</h4>
                </div>
                <p className="leading-relaxed text-gray-300">{improvements[activeTab].before}</p>
              </div>

              {/* After */}
              <div className="p-6 border bg-green-900/20 rounded-xl border-green-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-green-300">After</h4>
                </div>
                <p className="leading-relaxed text-gray-300">{improvements[activeTab].after}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default UXImprovements;