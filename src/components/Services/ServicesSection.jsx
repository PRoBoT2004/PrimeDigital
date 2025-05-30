// ServicesSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '../UI/Badge';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { servicesData } from './servicesData';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

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

  // Detect device performance
  useEffect(() => {
    const detectPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      // Check for low-end indicators
      const isLowEnd = 
        navigator.hardwareConcurrency <= 4 || // 4 or fewer CPU cores
        navigator.deviceMemory <= 4 || // 4GB or less RAM
        window.innerWidth <= 768 || // Mobile device
        !gl || // No WebGL support
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsLowEndDevice(isLowEnd);
    };

    detectPerformance();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Simplified particle explosion for low-end devices
      const createParticleExplosion = (card, index) => {
        const particles = card.querySelectorAll('.particle');
        
        if (isLowEndDevice) {
          // Reduced particles and simpler animation for low-end devices
          const reducedParticles = Array.from(particles).slice(0, 8);
          
          gsap.set(reducedParticles, {
            scale: 0,
            x: 0,
            y: 0,
            opacity: 0
          });

          const tl = gsap.timeline();
          
          tl.to(reducedParticles, {
            scale: 0.8,
            x: () => (Math.random() - 0.5) * 200,
            y: () => (Math.random() - 0.5) * 200,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.05
          })
          .to(reducedParticles, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          }, "-=0.3");

          return tl;
        } else {
          // Full animation for high-end devices
          gsap.set(particles, {
            scale: 0,
            rotation: () => Math.random() * 360,
            x: 0,
            y: 0,
            opacity: 0
          });

          const tl = gsap.timeline();
          
          tl.to(particles, {
            scale: () => 0.5 + Math.random() * 0.5,
            x: () => (Math.random() - 0.5) * 400,
            y: () => (Math.random() - 0.5) * 400,
            rotation: () => Math.random() * 720,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.02
          })
          .to(particles, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            stagger: 0.01
          }, "-=0.5");

          return tl;
        }
      };

      // Optimized card entrance animations
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardElement = card.querySelector('.morph-card');
        const contentElements = card.querySelectorAll('.morph-content > *');
        const orbitalElements = card.querySelectorAll('.orbital');

        if (isLowEndDevice) {
          // Simplified animations for low-end devices
          gsap.set(cardElement, {
            y: 100,
            scale: 0.8,
            opacity: 0
          });

          gsap.set(contentElements, {
            y: 50,
            opacity: 0
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              const tl = gsap.timeline();

              tl.to(cardElement, {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
              })
              .to(contentElements, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1
              }, "-=0.5");
            },

            onLeave: () => {
              gsap.to(cardElement, {
                y: -50,
                scale: 0.9,
                opacity: 0.5,
                duration: 0.6,
                ease: "power2.in"
              });
            }
          });

          // Simple hover effect for low-end devices
          cardElement?.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement?.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });

        } else {
          // Full animations for high-end devices (original code)
          gsap.set(cardElement, {
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
            scale: 0.3,
            rotation: 180,
            opacity: 0,
            filter: 'blur(20px) hue-rotate(180deg)',
            transformOrigin: 'center center'
          });

          gsap.set(contentElements, {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotation: () => (Math.random() - 0.5) * 60
          });

          gsap.set(orbitalElements, {
            scale: 0,
            rotation: () => Math.random() * 360
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              const masterTL = gsap.timeline();

              masterTL.add(createParticleExplosion(card, index))
              
              .to(cardElement, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scale: 1,
                rotation: 0,
                opacity: 1,
                filter: 'blur(0px) hue-rotate(0deg)',
                duration: 2,
                ease: "elastic.out(1, 0.8)",
                delay: 0.5
              }, "-=1")

              .to(contentElements, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)",
                stagger: {
                  amount: 0.6,
                  from: "random"
                }
              }, "-=1.5")

              .to(orbitalElements, {
                scale: 1,
                rotation: "+=360",
                duration: 2,
                ease: "power2.out",
                stagger: 0.1
              }, "-=1.8");

              gsap.to(orbitalElements, {
                rotation: "+=360",
                duration: 8,
                ease: "none",
                repeat: -1,
                stagger: 0.5
              });
            },

            onLeave: () => {
              gsap.to(cardElement, {
                clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
                scale: 0.8,
                rotation: -90,
                opacity: 0.3,
                filter: 'blur(5px)',
                duration: 1,
                ease: "power2.in"
              });
            },

            onEnterBack: () => {
              gsap.to(cardElement, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scale: 1,
                rotation: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: "elastic.out(1, 0.8)"
              });
            }
          });

          // Full magnetic hover effect for high-end devices
          cardElement?.addEventListener('mousemove', (e) => {
            const rect = cardElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);
            
            gsap.to(cardElement, {
              rotationY: deltaX * 15,
              rotationX: -deltaY * 15,
              transformPerspective: 1000,
              duration: 0.5,
              ease: "power2.out"
            });

            gsap.to(contentElements, {
              x: deltaX * 10,
              y: deltaY * 10,
              duration: 0.3,
              ease: "power2.out",
              stagger: 0.02
            });
          });

          cardElement?.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              rotationY: 0,
              rotationX: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.8)"
            });

            gsap.to(contentElements, {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.8)",
              stagger: 0.02
            });
          });

          // Glitch effect on click
          cardElement?.addEventListener('click', () => {
            const glitchTL = gsap.timeline();
            
            glitchTL.to(cardElement, {
              scaleX: 1.1,
              scaleY: 0.9,
              skewX: 5,
              filter: 'hue-rotate(90deg) saturate(2)',
              duration: 0.1
            })
            .to(cardElement, {
              scaleX: 0.9,
              scaleY: 1.1,
              skewX: -3,
              filter: 'hue-rotate(-90deg) saturate(2)',
              duration: 0.1
            })
            .to(cardElement, {
              scaleX: 1,
              scaleY: 1,
              skewX: 0,
              filter: 'hue-rotate(0deg) saturate(1)',
              duration: 0.2,
              ease: "elastic.out(1, 0.8)"
            });
          });
        }
      });

      // Header animation (simplified for low-end devices)
      if (isLowEndDevice) {
        gsap.fromTo(headerRef.current,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%"
            }
          }
        );
      } else {
        gsap.fromTo(headerRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            scale: 0.5,
            rotation: 180
          },
          {
            clipPath: 'circle(100% at 50% 50%)',
            scale: 1,
            rotation: 0,
            duration: 2,
            ease: "elastic.out(1, 0.8)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%"
            }
          }
        );
      }

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLowEndDevice]);

  return (
    <>
      <section 
        id="services" 
        ref={sectionRef}
        className="relative z-10 px-4 py-20 overflow-hidden sm:px-6 lg:px-8"
        style={{ perspective: isLowEndDevice ? 'none' : '1200px' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div ref={headerRef} className="mb-20 text-center">
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

          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative transform-gpu"
              >
                <ServiceCard 
                  service={service} 
                  onOpenModal={handleOpenModal}
                  index={index}
                  isLowEndDevice={isLowEndDevice}
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