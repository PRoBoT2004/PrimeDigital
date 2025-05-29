// ServiceModal.jsx
import React, { useEffect } from 'react';
import ScrollReveal from '../Effects/ScrollReveal';

const ServiceModal = ({ service, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-3xl backdrop-blur-xl border border-gray-700/50 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 rounded-full top-6 right-6 bg-gray-800/50 hover:bg-gray-700/50 hover:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="relative p-8 pb-0">
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
              {service.icon}
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-4xl font-bold text-white">{service.title}</h2>
              <p className="text-xl leading-relaxed text-gray-300">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Left Column - What We Offer */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">What We Offer</h3>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border bg-gray-800/30 rounded-xl border-gray-700/30">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{feature}</h4>
                      <p className="text-sm text-gray-400">{getFeatureDescription(service.title, feature)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Process & Benefits */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Our Process</h3>
              <div className="mb-8 space-y-4">
                {getServiceProcess(service.title).map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Benefits */}
              <h3 className="mb-6 text-2xl font-bold text-white">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                {getServiceBenefits(service.title).map((benefit, index) => (
                  <div key={index} className="p-4 text-center border bg-gray-800/20 rounded-xl border-gray-700/20">
                    <div className="mb-1 text-2xl font-bold text-white">{benefit.value}</div>
                    <div className="text-sm text-gray-400">{benefit.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies/Tools */}
          <div className="pt-8 mt-8 border-t border-gray-700/30">
            <h3 className="mb-6 text-2xl font-bold text-white">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {getServiceTechnologies(service.title).map((tech, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-full text-sm border border-opacity-30 text-white`}
                  style={{ borderColor: `var(--tw-gradient-from)` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-8 mt-8 text-center border-t border-gray-700/30">
            <h3 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h3>
            <p className="max-w-2xl mx-auto mb-6 text-gray-300">
              Let's discuss how our {service.title.toLowerCase()} services can help transform your business and achieve your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={scrollToContact}
                className={`px-8 py-4 bg-gradient-to-r ${service.gradient} rounded-xl text-white font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                Start Your Project
              </button>
              <button 
                onClick={onClose}
                className="px-8 py-4 font-semibold text-gray-300 transition-all duration-300 border-2 border-gray-600 rounded-xl hover:border-gray-500 hover:bg-gray-800/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for dynamic content
const getFeatureDescription = (serviceTitle, feature) => {
  const descriptions = {
    "Web Development": {
      "React & Next.js": "Modern frameworks for fast, scalable web applications",
      "Node.js Backend": "Robust server-side development for APIs and databases",
      "Responsive Design": "Mobile-first approach ensuring perfect display on all devices",
      "SEO Optimized": "Built-in optimization for better search engine rankings"
    },
    "Mobile Apps": {
      "React Native": "Cross-platform development for iOS and Android",
      "iOS & Android": "Native performance with platform-specific optimizations",
      "Push Notifications": "Real-time engagement with your users",
      "Offline Support": "Functionality that works without internet connection"
    },
    "AI Solutions": {
      "Machine Learning": "Custom ML models for predictive analytics and automation",
      "Natural Language Processing": "Text analysis, chatbots, and language understanding",
      "Computer Vision": "Image recognition and visual data processing",
      "Predictive Analytics": "Data-driven insights for better decision making"
    },
    "UI/UX Design": {
      "User Research": "Understanding your audience through data and interviews",
      "Wireframing & Prototyping": "Interactive mockups to visualize the user journey",
      "Visual Design": "Beautiful interfaces that align with your brand",
      "Usability Testing": "Ensuring optimal user experience through testing"
    },
    "SMMA Services": {
      "Content Strategy": "Engaging content that resonates with your audience",
      "Social Media Management": "Daily posting, community management, and engagement",
      "Paid Advertising": "Targeted campaigns across all major platforms",
      "Analytics & Reporting": "Detailed insights and performance tracking"
    },
    "Brand Identity": {
      "Logo Design": "Memorable logos that represent your brand values",
      "Brand Guidelines": "Comprehensive style guides for consistent branding",
      "Visual Identity": "Complete visual system including colors, typography, and imagery",
      "Brand Strategy": "Strategic positioning and messaging framework"
    }
  };
  
  return descriptions[serviceTitle]?.[feature] || "Professional service delivery with attention to detail";
};

const getServiceProcess = (serviceTitle) => {
  const processes = {
    "Web Development": [
      { title: "Discovery & Planning", description: "Understanding requirements and technical specifications" },
      { title: "Design & Architecture", description: "Creating wireframes and system architecture" },
      { title: "Development", description: "Building with modern technologies and best practices" },
      { title: "Testing & Launch", description: "Quality assurance and deployment to production" }
    ],
    "Mobile Apps": [
      { title: "Strategy & Research", description: "Market analysis and feature planning" },
      { title: "UI/UX Design", description: "Creating intuitive mobile interfaces" },
      { title: "Development", description: "Native and cross-platform app development" },
      { title: "App Store Launch", description: "Publishing and optimization for app stores" }
    ],
    "AI Solutions": [
      { title: "Data Assessment", description: "Analyzing your data and AI readiness" },
      { title: "Model Development", description: "Creating and training custom AI models" },
      { title: "Integration", description: "Seamlessly integrating AI into your systems" },
      { title: "Optimization", description: "Continuous improvement and model refinement" }
    ],
    "UI/UX Design": [
      { title: "Research & Discovery", description: "User interviews and competitive analysis" },
      { title: "Wireframing", description: "Creating low-fidelity layouts and user flows" },
      { title: "Visual Design", description: "High-fidelity mockups and design systems" },
      { title: "Testing & Iteration", description: "User testing and design refinement" }
    ],
    "SMMA Services": [
      { title: "Strategy Development", description: "Creating comprehensive social media strategy" },
      { title: "Content Creation", description: "Developing engaging posts and campaigns" },
      { title: "Community Management", description: "Daily engagement and audience building" },
      { title: "Performance Analysis", description: "Tracking metrics and optimizing campaigns" }
    ],
    "Brand Identity": [
      { title: "Brand Discovery", description: "Understanding your vision and market position" },
      { title: "Concept Development", description: "Creating initial design concepts and directions" },
      { title: "Design Refinement", description: "Perfecting the chosen concept and variations" },
      { title: "Brand Guidelines", description: "Comprehensive guide for brand implementation" }
    ]
  };
  
  return processes[serviceTitle] || [];
};

const getServiceBenefits = (serviceTitle) => {
  const benefits = {
    "Web Development": [
      { value: "3x", label: "Faster Loading" },
      { value: "95%", label: "Uptime" },
      { value: "50%", label: "More Conversions" },
      { value: "24/7", label: "Support" }
    ],
    "Mobile Apps": [
      { value: "2M+", label: "Downloads" },
      { value: "4.8★", label: "App Rating" },
      { value: "60%", label: "User Retention" },
      { value: "iOS+Android", label: "Platforms" }
    ],
    "AI Solutions": [
      { value: "40%", label: "Cost Reduction" },
      { value: "85%", label: "Accuracy" },
      { value: "24/7", label: "Automation" },
      { value: "ROI", label: "Guaranteed" }
    ],
    "UI/UX Design": [
      { value: "200%", label: "Better UX" },
      { value: "45%", label: "More Engagement" },
      { value: "98%", label: "User Satisfaction" },
      { value: "Mobile", label: "Optimized" }
    ],
    "SMMA Services": [
      { value: "300%", label: "More Reach" },
      { value: "150%", label: "Engagement" },
      { value: "5x", label: "Lead Generation" },
      { value: "ROI", label: "Tracking" }
    ],
    "Brand Identity": [
      { value: "Brand", label: "Recognition" },
      { value: "Trust", label: "Building" },
      { value: "Market", label: "Positioning" },
      { value: "Visual", label: "Consistency" }
    ]
  };
  
  return benefits[serviceTitle] || [];
};

const getServiceTechnologies = (serviceTitle) => {
  const technologies = {
    "Web Development": ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
    "Mobile Apps": ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "Expo", "App Store Connect"],
    "AI Solutions": ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Pandas", "Docker", "AWS ML"],
    "UI/UX Design": ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro", "Hotjar", "Maze"],
    "SMMA Services": ["Meta Business", "Google Ads", "Hootsuite", "Buffer", "Canva", "Analytics", "Mailchimp", "Zapier"],
    "Brand Identity": ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "Sketch", "Brand Guidelines", "Style Guides", "Logo Design"]
  };
  
  return technologies[serviceTitle] || [];
};

export default ServiceModal;