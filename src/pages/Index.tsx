
import React from 'react';
import Header from '@/components/Header';
import ThreatLevelCard from '@/components/ThreatLevelCard';
import SecurityAlert from '@/components/SecurityAlert';
import GlobalMap from '@/components/GlobalMap';
import StatsCard from '@/components/StatsCard';
import { Shield, AlertTriangle, Users, Globe, TrendingUp, Activity, Zap, Eye, Satellite, Radio } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const threatLevels = [
    {
      country: 'Ukraine',
      level: 'EXTREME' as const,
      trend: 'stable' as const,
      lastUpdated: '2 hours ago',
      primaryThreats: ['Armed Conflict', 'Terrorism', 'Infrastructure']
    },
    {
      country: 'Myanmar',
      level: 'HIGH' as const,
      trend: 'up' as const,
      lastUpdated: '4 hours ago',
      primaryThreats: ['Civil Unrest', 'Political Instability']
    },
    {
      country: 'Turkey',
      level: 'MEDIUM' as const,
      trend: 'down' as const,
      lastUpdated: '6 hours ago',
      primaryThreats: ['Terrorism', 'Natural Disasters']
    },
    {
      country: 'Singapore',
      level: 'LOW' as const,
      trend: 'stable' as const,
      lastUpdated: '8 hours ago',
      primaryThreats: ['Cyber Security', 'Health']
    }
  ];

  const recentAlerts = [
    {
      title: 'Political Demonstrations in Central Bangkok',
      location: 'Bangkok, Thailand',
      severity: 'HIGH' as const,
      timestamp: '15 minutes ago',
      description: 'Large-scale protests reported near government district. Avoid central areas.'
    },
    {
      title: 'Increased Security Screening at Heathrow',
      location: 'London, UK',
      severity: 'MEDIUM' as const,
      timestamp: '1 hour ago',
      description: 'Enhanced security measures implemented. Allow extra time for departures.'
    },
    {
      title: 'Tropical Storm Warning',
      location: 'Manila, Philippines',
      severity: 'HIGH' as const,
      timestamp: '2 hours ago',
      description: 'Severe weather conditions expected. Flight disruptions likely.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse"></div>
        
        <main className="relative p-6 space-y-8">
          {/* Enhanced Stats Dashboard with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="transform hover:scale-105 transition-all duration-300">
              <StatsCard
                title="Active Threats"
                value="247"
                change="+12% from last week"
                trend="up"
                icon={AlertTriangle}
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <StatsCard
                title="Countries Monitored" 
                value="195"
                change="Full global coverage"
                trend="stable"
                icon={Globe}
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <StatsCard
                title="Travelers Protected"
                value="12.5K"
                change="+8% from last month"
                trend="up"
                icon={Users}
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <StatsCard
                title="System Uptime"
                value="99.9%"
                change="Operational"
                trend="stable"
                icon={Activity}
              />
            </div>
          </div>

          {/* Premium Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-orange-500/5 border-primary/20 hover:glow-effect transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <Satellite className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Real-Time Intelligence</h3>
                    <p className="text-muted-foreground text-sm">AI-powered threat detection across 195 countries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Eye className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">24/7 Monitoring</h3>
                    <p className="text-muted-foreground text-sm">Continuous surveillance of global security events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                    <Radio className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Instant Alerts</h3>
                    <p className="text-muted-foreground text-sm">Immediate notifications for critical security updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Global Map */}
            <div className="lg:col-span-2 transform hover:scale-[1.01] transition-all duration-500">
              <GlobalMap />
            </div>

            {/* Enhanced Recent Alerts */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xl">Security Alerts</span>
                    <div className="text-xs text-muted-foreground mt-1">Live Updates</div>
                  </div>
                </CardTitle>
                <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/50">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="transform hover:scale-[1.02] transition-all duration-200">
                    <SecurityAlert {...alert} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Threat Levels Section with Premium Layout */}
          <Card className="bg-gradient-to-r from-card via-card/90 to-card border-border/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
            <CardHeader className="relative flex flex-row items-center justify-between pb-6">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Global Threat Assessment
                  </span>
                  <div className="text-sm text-muted-foreground mt-1">Real-time country risk analysis</div>
                </div>
              </CardTitle>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Full Report
              </Button>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {threatLevels.map((threat, index) => (
                  <div key={index} className="transform hover:scale-105 transition-all duration-300">
                    <ThreatLevelCard {...threat} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Premium Executive Section with Enhanced Gradients */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-xl"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xl font-bold">Executive Travel Briefing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Get personalized security intelligence and comprehensive risk assessments tailored for executive-level business travel requirements.
                </p>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200">
                    Request Briefing
                  </Button>
                  <Button variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                    View Template
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-secondary to-accent/20 border-red-500/20 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-xl"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-3 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <Zap className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-xl font-bold">Crisis Response Center</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  24/7 emergency support with real-time assistance for travelers in crisis situations. Immediate response protocols activated.
                </p>
                <div className="flex space-x-3">
                  <Button variant="destructive" className="flex-1 transform hover:scale-105 transition-all duration-200">
                    Emergency Contact
                  </Button>
                  <Button variant="outline" className="hover:bg-destructive/10 hover:border-destructive/50">
                    Protocols
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
