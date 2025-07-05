
import React from 'react';
import Header from '@/components/Header';
import ThreatLevelCard from '@/components/ThreatLevelCard';
import SecurityAlert from '@/components/SecurityAlert';
import GlobalMap from '@/components/GlobalMap';
import StatsCard from '@/components/StatsCard';
import { Shield, AlertTriangle, Users, Globe, TrendingUp, Activity } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6 space-y-6">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Active Threats"
            value="247"
            change="+12% from last week"
            trend="up"
            icon={AlertTriangle}
          />
          <StatsCard
            title="Countries Monitored"
            value="195"
            change="Full global coverage"
            trend="stable"
            icon={Globe}
          />
          <StatsCard
            title="Travelers Protected"
            value="12.5K"
            change="+8% from last month"
            trend="up"
            icon={Users}
          />
          <StatsCard
            title="System Uptime"
            value="99.9%"
            change="Operational"
            trend="stable"
            icon={Activity}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Global Map */}
          <div className="lg:col-span-2">
            <GlobalMap />
          </div>

          {/* Recent Alerts */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Security Alerts</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <SecurityAlert key={index} {...alert} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Threat Levels by Country */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Country Threat Assessments</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              Full Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {threatLevels.map((threat, index) => (
                <ThreatLevelCard key={index} {...threat} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Executive Briefing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Executive Travel Briefing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Get personalized security intelligence and risk assessments for your upcoming business travels.
              </p>
              <div className="flex space-x-2">
                <Button className="flex-1">
                  Request Briefing
                </Button>
                <Button variant="outline">
                  View Template
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary to-accent border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Crisis Response Center</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                24/7 emergency support and real-time assistance for travelers in crisis situations.
              </p>
              <div className="flex space-x-2">
                <Button variant="destructive" className="flex-1">
                  Emergency Contact
                </Button>
                <Button variant="outline">
                  Protocols
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
