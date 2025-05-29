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

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-gray-700/50 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 border bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 backdrop-blur-sm border-blue-500/30">
                <img 
                  src="/logo.jpg" 
                  alt="Prime Digital Logo" 
                  className="object-contain w-8 h-8"
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 bg-blue-500 opacity-0 rounded-xl blur-lg group-hover:opacity-30"></div>
            </div>
            <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
              Prime Digital
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
            className="relative flex items-center justify-center w-10 h-10 text-white md:hidden"
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

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full py-2 text-left text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 mt-4 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;