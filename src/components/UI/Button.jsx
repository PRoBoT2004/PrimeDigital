// Button.jsx
import React from 'react';

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseClasses = "group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25",
    secondary: "border-2 border-blue-500/30 text-blue-300 backdrop-blur-sm hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        )}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      )}
    </button>
  );
};

export default Button;