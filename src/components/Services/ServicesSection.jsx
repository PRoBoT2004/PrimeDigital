// ServicesSection.jsx
import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import ServiceCard from './ServiceCard';
import ScrollReveal from '../Effects/ScrollReveal';
import { servicesData } from './servicesData';

const ServicesSection = () => {
  const arrowIcon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />;

  return (
    <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6">
              <Badge>Our Services</Badge>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                What We
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive solutions that drive innovation and deliver exceptional results for your business.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={index * 100}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-8 text-lg">
              Ready to transform your business with our services?
            </p>
            <Button variant="primary" icon={arrowIcon}>
              Start Your Project
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;