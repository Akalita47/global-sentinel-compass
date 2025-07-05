
import React from 'react';
import GlobalMap from '@/components/GlobalMap';
import SecurityAlert from '@/components/SecurityAlert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const MainContent = () => {
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
  );
};

export default MainContent;
