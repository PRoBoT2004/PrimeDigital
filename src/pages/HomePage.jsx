// HomePage.jsx
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import ParticleCanvas from '../components/Hero/ParticleCanvas';
import ParallaxBackground from '../components/Effects/ParallaxBackground';
import HeroSection from '../components/Hero/HeroSection';
import ServicesSection from '../components/Services/ServicesSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Particles Canvas */}
        <ParticleCanvas />

        {/* Parallax Background */}
        <ParallaxBackground />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float-particle {
          0% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-progress {
          animation: progress 2s ease-out forwards;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }

         @keyframes modal-fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes modal-fade-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  .modal-enter {
    animation: modal-fade-in 0.3s ease-out forwards;
  }

  .modal-exit {
    animation: modal-fade-out 0.3s ease-out forwards;
  }
      `}</style>
      
    </>
  );
};

export default HomePage;