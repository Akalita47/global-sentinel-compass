
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import MainContent from '@/components/MainContent';
import ThreatSection from '@/components/ThreatSection';
import ExecutiveSection from '@/components/ExecutiveSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <HeroSection />
        
      <main className="relative p-6 space-y-8">
        {/* Enhanced Stats Dashboard with Glass Effect */}
        <StatsSection />

        {/* Premium Feature Cards */}
        <FeaturesSection />

        <MainContent />

        {/* Enhanced Threat Levels Section with Premium Layout */}
        <ThreatSection />

        {/* Premium Executive Section with Enhanced Gradients */}
        <ExecutiveSection />
      </main>
    </div>
  );
};

export default Index;
