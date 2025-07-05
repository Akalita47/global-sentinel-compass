
import React from 'react';
import ThreatLevelCard from '@/components/ThreatLevelCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const ThreatSection = () => {
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

  return (
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
  );
};

export default ThreatSection;
