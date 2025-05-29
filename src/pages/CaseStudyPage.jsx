// CaseStudyPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import ScrollReveal from '../components/Effects/ScrollReveal';
import { realEstateProject } from '../components/Projects/realEstateProject';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = realEstateProject;
  
  if (!project || project.slug !== slug) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <ScrollReveal>
              <button 
                onClick={() => navigate('/')}
                className="group flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors duration-300"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>
            </ScrollReveal>

            {/* Project Header */}
            <div className="text-center mb-16">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6">
                  <span className="text-amber-300 text-sm font-medium">{project.category}</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  {project.description}
                </p>
              </ScrollReveal>

              {/* Project Stats */}
              <ScrollReveal delay={800}>
                <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-amber-400 mb-2">{value}</div>
                      <div className="text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Image */}
            <ScrollReveal delay={1000}>
              <div className="relative rounded-3xl overflow-hidden mb-20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Project Info Grid */}
            <div className="grid lg:grid-cols-4 gap-8 mb-20">
              {[
                { label: 'Client', value: caseStudy.client },
                { label: 'Duration', value: caseStudy.duration },
                { label: 'Team', value: caseStudy.team },
                { label: 'Technologies', value: `${project.technologies.slice(0, 2).join(', ')} +${project.technologies.length - 2}` }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-6">
                    <h3 className="text-amber-300 font-semibold mb-2">{item.label}</h3>
                    <p className="text-white">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Overview */}
            <ScrollReveal delay={400}>
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-white mb-8">Project Overview</h2>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                  <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.overview}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <ScrollReveal direction="left" delay={600}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                  <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl backdrop-blur-xl border border-red-700/30 p-8">
                    <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={800}>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl backdrop-blur-xl border border-green-700/30 p-8">
                    <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Features */}
            <ScrollReveal delay={1000}>
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-white mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {caseStudy.features.map((feature, index) => (
                    <ScrollReveal key={index} delay={1200 + (index * 100)}>
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-6 hover:border-amber-500/50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-white font-semibold mb-2">{feature}</h3>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image Gallery */}
            <ScrollReveal delay={1400}>
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-white mb-8">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <ScrollReveal key={index} delay={1600 + (index * 200)}>
                      <div className="relative rounded-2xl overflow-hidden group">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={1800}>
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-white mb-8">Results & Impact</h2>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial */}
            <ScrollReveal delay={2000}>
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-white mb-8">Client Testimonial</h2>
                <div className="bg-gradient-to-br from-amber-900/20 to-orange-800/10 rounded-2xl backdrop-blur-xl border border-amber-700/30 p-8">
                  <div className="flex items-start gap-6">
                    <img 
                      src={caseStudy.testimonial.avatar} 
                      alt={caseStudy.testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <blockquote className="text-xl text-gray-300 italic mb-4">
                        "{caseStudy.testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="text-white font-semibold">{caseStudy.testimonial.author}</div>
                        <div className="text-amber-300">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal delay={2200}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create something amazing together. Get in touch to discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
                  >
                    Start Your Project
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                    className="px-8 py-4 border-2 border-amber-500/30 rounded-xl text-amber-300 font-semibold hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                  >
                    View More Projects
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyPage;