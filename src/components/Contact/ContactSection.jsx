// ContactSection.jsx - Add ScrollReveal imports and wrap components
import React from 'react';
import Badge from '../UI/Badge';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import ScrollReveal from '../Effects/ScrollReveal';
import { contactInfo, socialLinks } from './contactData';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
                <div className="mb-16 text-center">
          <ScrollReveal>
            <div className="mb-6">
              <Badge>Get In Touch</Badge>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Let's Start
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                Something Great
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <ScrollReveal 
              key={info.id} 
              delay={index * 100}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <ContactInfoCard info={info} />
            </ScrollReveal>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          
          {/* Left Side - Contact Form */}
          <ScrollReveal direction="left" delay={600}>
            <div className="relative">
              <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Send us a message
                </h3>
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <ScrollReveal direction="right" delay={700}>
              <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">Expert Team</h4>
                      <p className="text-sm text-gray-400">Experienced professionals with proven track records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">Fast Delivery</h4>
                      <p className="text-sm text-gray-400">Quick turnaround times without compromising quality</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">24/7 Support</h4>
                      <p className="text-sm text-gray-400">Round-the-clock assistance for all your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">Guaranteed Results</h4>
                      <p className="text-sm text-gray-400">We deliver on our promises with measurable outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right" delay={800}>
              <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all duration-300 border group bg-gray-800/50 rounded-xl border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Stay updated with our latest projects and insights
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            {/* <ScrollReveal direction="right" delay={900}>
              <div className="p-8 border bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border-gray-700/50">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-emerald-400">500+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-bold text-orange-400">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </ScrollReveal> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;