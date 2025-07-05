
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap } from 'lucide-react';

const ExecutiveSection = () => {
  return (
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
  );
};

export default ExecutiveSection;
