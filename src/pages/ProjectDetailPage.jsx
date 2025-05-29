import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Optional: GSAP for specific animations on this page
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

import { projectsData } from '../data/projectsData'; // Import your project data

const ProjectDetailPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate(); // For programmatic navigation (e.g., if project not found)
  
  // Find the project based on the slug
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load

    // If project not found, redirect to home
    if (!project) {
      navigate('/');
    }

    // Optional: GSAP animations for this page (e.g., fading in content)
    // if (project) {
    //   const ctx = gsap.context(() => {
    //     gsap.from(".detail-content > *", {
    //       opacity: 0,
    //       y: 50,
    //       duration: 1,
    //       stagger: 0.1,
    //       ease: "power3.out"
    //     });
    //   });
    //   return () => ctx.revert();
    // }
  }, [project, navigate, slug]); // Re-run if project or slug changes

  // If project not found (and redirection hasn't happened yet)
  if (!project) {
    return null; // Or a loading spinner
  }

  // Find next/previous project for navigation
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];

  return (
    <div className="bg-black-primary min-h-screen text-white">
      {/* Simple Navigation Bar for Project Page */}
      <nav className="fixed w-full z-50 bg-black-primary/90 backdrop-blur-lg py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-white">Prime</span>
            <span className="text-neon-blue">Digital</span>
          </Link>
          <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Project Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden bg-black-secondary">
        <div className="container mx-auto px-6 detail-content">
          <motion.p 
            className="text-neon-blue text-sm uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-x-8 gap-y-2 text-gray-400 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div><span className="font-semibold text-neon-blue">Client:</span> {project.client}</div>
            <div><span className="font-semibold text-neon-blue">Duration:</span> {project.duration}</div>
          </motion.div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="py-12 bg-black-primary">
        <div className="container mx-auto px-6">
          <motion.img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-black-secondary">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-neon-blue mb-4">The Challenge</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-neon-blue mb-4">Our Solution</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Results */}
      <section className="py-16 bg-black-primary">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Key Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-neon-blue mr-3 mt-1">●</span> {result}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-black-secondary">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.p 
              className="text-gray-300 text-2xl italic leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              "{project.testimonial.text}"
            </motion.p>
            <motion.p 
              className="font-semibold text-white text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              - {project.testimonial.author}
            </motion.p>
            <motion.p 
              className="text-neon-blue text-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {project.testimonial.position}
            </motion.p>
          </div>
        </section>
      )}

      {/* Gallery (Optional) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-black-primary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgSrc, index) => (
                <motion.img 
                  key={index} 
                  src={imgSrc} 
                  alt={`${project.title} Gallery Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Navigation to other projects */}
      <section className="py-12 bg-black-secondary">
        <div className="container mx-auto px-6 flex justify-between items-center text-gray-300">
          {prevProject ? (
            <Link 
              to={`/project/${prevProject.slug}`} 
              className="group flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Previous Project
            </Link>
          ) : (
            <span></span> // Placeholder for alignment
          )}
          
          <Link 
            to="/" 
            className="group flex items-center gap-2 hover:text-neon-blue transition-colors"
          >
            Back to Home
          </Link>

          {nextProject ? (
            <Link 
              to={`/project/${nextProject.slug}`} 
              className="group flex items-center gap-2 hover:text-neon-blue transition-colors"
            >
              Next Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <span></span> // Placeholder for alignment
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;