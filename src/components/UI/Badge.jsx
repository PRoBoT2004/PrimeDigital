// Badge.jsx
import React from 'react';

const Badge = ({ children, showDot = false }) => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in-up">
      {showDot && <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>}
      <span className="text-blue-300 text-sm font-medium">{children}</span>
    </div>
  );
};

export default Badge;