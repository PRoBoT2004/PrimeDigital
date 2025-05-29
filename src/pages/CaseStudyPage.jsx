// CaseStudyPage.jsx - Add imports and components
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import ScrollReveal from '../components/Effects/ScrollReveal';
import BeforeAfterComparison from '../components/CaseStudy/BeforeAfterComparison';
import DesignProcess from '../components/CaseStudy/DesignProcess';
import UXImprovements from '../components/CaseStudy/UXImprovements';
import { realEstateProject } from '../components/Projects/realEstateProject';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = realEstateProject;
  
  if (!project || project.slug !== slug) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
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
        <section className="relative px-4 py-20 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <ScrollReveal>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 mb-8 text-gray-300 transition-colors duration-300 group hover:text-white"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>
            </ScrollReveal>

            {/* Project Header */}
            <div className="mb-16 text-center">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-amber-500/10 border-amber-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-amber-300">{project.category}</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
                  <span className="text-transparent bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text">
                    {project.title}
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </ScrollReveal>

              {/* Project Stats */}
              <ScrollReveal delay={800}>
                <div className="grid max-w-2xl gap-8 mx-auto md:grid-cols-3">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2 text-3xl font-bold text-amber-400">{value}</div>
                      <div className="text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Image */}
            <ScrollReveal delay={1000}>
              <div className="relative mb-20 overflow-hidden rounded-3xl">
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
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Project Info Grid */}
            <div className="grid gap-8 mb-20 lg:grid-cols-4">
              {[
                { label: 'Client', value: caseStudy.client },
                { label: 'Duration', value: caseStudy.duration },
                { label: 'Team', value: caseStudy.team },
                { label: 'Technologies', value: `${project.technologies.slice(0, 2).join(', ')} +${project.technologies.length - 2}` }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="p-6 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                    <h3 className="mb-2 font-semibold text-amber-300">{item.label}</h3>
                    <p className="text-white">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Overview */}
            <ScrollReveal delay={400}>
              <div className="mb-20">
                <h2 className="mb-8 text-4xl font-bold text-white">Project Overview</h2>
                <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                  <p className="text-lg leading-relaxed text-gray-300">{caseStudy.overview}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Before/After Comparison */}
            <BeforeAfterComparison project={project} />

            {/* UX Improvements */}
            <UXImprovements project={project} />

            {/* Design Process */}
            <DesignProcess project={project} />

            {/* Challenge & Solution */}
            <div className="grid gap-12 mb-20 lg:grid-cols-2">
              <ScrollReveal direction="left" delay={600}>
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-white">The Challenge</h2>
                  <div className="p-8 border bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl backdrop-blur-xl border-red-700/30">
                    <p className="leading-relaxed text-gray-300">{caseStudy.challenge}</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={800}>
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-white">Our Solution</h2>
                  <div className="p-8 border bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl backdrop-blur-xl border-green-700/30">
                    <p className="leading-relaxed text-gray-300">{caseStudy.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Features */}
            <ScrollReveal delay={1000}>
              <div className="mb-20">
                <h2 className="mb-8 text-4xl font-bold text-white">Key Features</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.features.map((feature, index) => (
                    <ScrollReveal key={index} delay={1200 + (index * 100)}>
                      <div className="p-6 transition-colors duration-300 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50 hover:border-amber-500/50">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="mb-2 font-semibold text-white">{feature}</h3>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image Gallery */}
            <ScrollReveal delay={1400}>
              <div className="mb-20">
                <h2 className="mb-8 text-4xl font-bold text-white">Project Gallery</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {caseStudy.images.map((image, index) => (
                    <ScrollReveal key={index} delay={1600 + (index * 200)}>
                      <div className="relative overflow-hidden rounded-2xl group">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
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
                <h2 className="mb-8 text-4xl font-bold text-white">Results & Impact</h2>
                <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
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
                <h2 className="mb-8 text-4xl font-bold text-white">Client Testimonial</h2>
                <div className="p-8 border bg-gradient-to-br from-amber-900/20 to-orange-800/10 rounded-2xl backdrop-blur-xl border-amber-700/30">
                  <div className="flex items-start gap-6">
                    <img 
                      src={caseStudy.testimonial.avatar} 
                      alt={caseStudy.testimonial.author}
                      className="object-cover w-16 h-16 rounded-full"
                    />
                    <div>
                      <blockquote className="mb-4 text-xl italic text-gray-300">
                        "{caseStudy.testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
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
                <h2 className="mb-4 text-3xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-300">
                  Let's create something amazing together. Get in touch to discuss your next project.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl hover:shadow-2xl hover:shadow-amber-500/25"
                  >
                    Start Your Project
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                                        className="px-8 py-4 font-semibold transition-all duration-300 border-2 border-amber-500/30 rounded-xl text-amber-300 hover:border-amber-400 hover:bg-amber-500/10"
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