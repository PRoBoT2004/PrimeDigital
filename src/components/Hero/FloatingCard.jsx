// FloatingCard.jsx
import React from 'react';

const FloatingCard = () => {
  return (
    <div className="relative">
      <div className="relative w-80 h-96 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl backdrop-blur-xl border border-blue-500/20 p-8 animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-3xl"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl mb-4 animate-pulse"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation Hub</h3>
            <p className="text-gray-300 text-sm">Where creativity meets technology</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-400/20 rounded-lg"></div>
              <div className="flex-1 h-2 bg-blue-500/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full animate-progress" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-400/20 rounded-lg"></div>
              <div className="flex-1 h-2 bg-blue-500/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full animate-progress delay-500" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-blue-500/20 rounded-2xl backdrop-blur-xl border border-blue-400/30 animate-float-delayed"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-xl backdrop-blur-xl border border-blue-500/30 animate-float-slow"></div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl scale-110 animate-pulse"></div>
    </div>
  );
};

export default FloatingCard;