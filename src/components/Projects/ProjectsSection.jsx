// ProjectsSection.jsx
import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import ScrollReveal from '../Effects/ScrollReveal';
import { realEstateProject } from './realEstateProject';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const project = realEstateProject;

  const handleViewProject = () => {
    navigate(`/case-study/${project.slug}`);
  };

  const arrowIcon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />;

  return (
    <section id="projects" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <div className="mb-6">
              <Badge>Our Work</Badge>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Featured
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                Project
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
              Discover our latest work showcasing cutting-edge design and development for the luxury real estate industry.
            </p>
          </ScrollReveal>
        </div>

        {/* Single Project Card */}
        <ScrollReveal delay={600}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative group">
              <div className="relative h-full overflow-hidden transition-all duration-500 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl backdrop-blur-xl border-gray-700/50 group-hover:border-amber-500/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 group-hover:-translate-y-3">
                
                {/* Featured Badge */}
                <div className="absolute z-20 top-6 left-6">
                  <div className="px-4 py-2 text-sm font-bold text-black rounded-full shadow-lg bg-gradient-to-r from-amber-400 to-orange-500">
                    ✨ Featured Project
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-80 lg:h-96">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/60 group-hover:opacity-100">
                    <button 
                      onClick={handleViewProject}
                      className="px-8 py-4 font-semibold text-white transition-all duration-300 transform border shadow-xl bg-white/20 backdrop-blur-sm rounded-xl border-white/30 hover:bg-white/30 hover:scale-105"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Case Study
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute flex gap-2 top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 delay-300 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 delay-700 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10">
                  {/* Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                    <span className="text-sm font-medium tracking-wide uppercase text-amber-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-3xl font-bold text-white transition-colors duration-300 lg:text-4xl group-hover:text-amber-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="mb-3 font-semibold text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 text-sm text-gray-300 transition-all duration-300 border rounded-full bg-gray-800/50 border-gray-700/50 hover:border-amber-500/50 hover:text-amber-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-6 mb-8 border-t border-gray-700/50">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="mb-1 text-2xl font-bold text-white lg:text-3xl">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <button 
                      onClick={handleViewProject}
                      className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group/btn bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Full Case Study
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-orange-600 to-red-600 group-hover/btn:scale-x-100"></div>
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl scale-110 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        {/* <ScrollReveal delay={800}>
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Interested in Similar Work?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300">
              Let's collaborate to create an exceptional digital experience for your business.
            </p>
            <Button variant="primary" icon={arrowIcon}>
              Start Your Project
            </Button>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default ProjectsSection;