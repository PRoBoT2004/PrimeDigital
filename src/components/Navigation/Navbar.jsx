// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (window.innerWidth < 768) { // Mobile only
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-gray-700/50 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer sm:gap-3 group"
            >
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 border sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 backdrop-blur-sm border-blue-500/30">
                  <img 
                    src="/logo.png" 
                    alt="Prime Digitals Logo" 
                    className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 bg-blue-500 opacity-0 rounded-xl blur-lg group-hover:opacity-30"></div>
              </div>
              <span className="text-xl font-bold text-white transition-colors duration-300 sm:text-2xl group-hover:text-blue-300">
                Prime Digitals
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-300 transition-colors duration-300 hover:text-white group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:scale-x-100"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative flex items-center justify-center w-10 h-10 text-white md:hidden z-60"
            >
              <div className="relative">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Glass Effect */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop with blur effect */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-b border-gray-700/50 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Spacer for navbar height */}
          <div className="h-20 sm:h-24"></div>
          
          {/* Menu Items */}
          <div className="px-4 py-8 space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full py-4 text-left text-xl text-gray-300 transition-all duration-500 hover:text-white hover:translate-x-2 border-b border-gray-700/30 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`w-full px-6 py-4 mt-8 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 ${
                isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 100}ms` : '0ms' 
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;