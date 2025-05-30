// Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links with icons
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/prime-digitals0/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/Prime__Digitals?t=Yhq6S6dsXwN6qE2yn3EQzw&s=09',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-gray-700/50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 border bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl border-blue-500/30">
                <img 
                  src="/logo.png" 
                  alt="Prime Digitals Logo" 
                  className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-2xl font-bold text-white">Prime Digitals</span>
            </div>
            <p className="max-w-md mb-6 text-gray-400">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions. 
              Building the future, one project at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-lg bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-gray-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {['UI/UX Design', 'Brand Identity', 'SMMA Services', 'Web Development', 'Mobile Apps'].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-left text-gray-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-700/50 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} Prime Digital. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;