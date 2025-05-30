// ServicesSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import Badge from '../UI/Badge';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { servicesData } from './servicesData';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRefs = useRef([]);

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

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;
        const cardHeight = rect.height;
        const cardCenter = cardTop + cardHeight / 2;
        const viewportCenter = windowHeight / 2;
        
        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
        const maxDistance = windowHeight * 0.8;
        
        // Calculate progress (1 = center, 0 = far away)
        const progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
        
        // Apply smooth transforms
        const translateY = (1 - progress) * 60;
        const scale = 0.85 + (progress * 0.15);
        const opacity = 0.4 + (progress * 0.6);
        
        card.style.transform = `translateY(${translateY}px) scale(${scale})`;
        card.style.opacity = opacity;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="services" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-6">
              <Badge>Our Services</Badge>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                What We
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
                Deliver
              </span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
              From concept to deployment, we provide comprehensive solutions that drive innovation and deliver exceptional results for your business.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="scroll-card"
              >
                <ServiceCard 
                  service={service} 
                  onOpenModal={handleOpenModal}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ServicesSection;