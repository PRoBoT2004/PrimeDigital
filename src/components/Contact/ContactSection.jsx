// ContactSection.jsx - Add ScrollReveal imports and wrap components
import React from 'react';
import Badge from '../UI/Badge';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import ScrollReveal from '../Effects/ScrollReveal';
import { contactInfo, socialLinks } from './contactData';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
                <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6">
              <Badge>Get In Touch</Badge>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Let's Start
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Form */}
          <ScrollReveal direction="left" delay={600}>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
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
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-400 text-sm">Experienced professionals with proven track records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Fast Delivery</h4>
                      <p className="text-gray-400 text-sm">Quick turnaround times without compromising quality</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-400 text-sm">Round-the-clock assistance for all your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Guaranteed Results</h4>
                      <p className="text-gray-400 text-sm">We deliver on our promises with measurable outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right" delay={800}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="group w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Stay updated with our latest projects and insights
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal direction="right" delay={900}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">500+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;