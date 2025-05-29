// ServicesSection.jsx
import React, { useState } from 'react';
import Badge from '../UI/Badge';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import ScrollReveal from '../Effects/ScrollReveal';
import { servicesData } from './servicesData';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  return (
    <>
      <section id="services" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <ScrollReveal>
              <div className="mb-6">
                <Badge>Our Services</Badge>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                  What We
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                  Deliver
                </span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
                From concept to deployment, we provide comprehensive solutions that drive innovation and deliver exceptional results for your business.
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <ScrollReveal 
                key={service.id} 
                delay={index * 100}
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <ServiceCard 
                  service={service} 
                  onOpenModal={handleOpenModal}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ServicesSection;