
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default HeroSection;
