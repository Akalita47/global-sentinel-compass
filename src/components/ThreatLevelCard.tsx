
import React from 'react';
import { AlertTriangle, Shield, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ThreatLevelCardProps {
  country: string;
  level: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME';
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  primaryThreats: string[];
}

const ThreatLevelCard = ({ country, level, trend, lastUpdated, primaryThreats }: ThreatLevelCardProps) => {
  const getThreatColor = (level: string) => {
    switch (level) {
      case 'LOW': return 'text-green-400 bg-green-400/10';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/10';
      case 'HIGH': return 'text-orange-400 bg-orange-400/10';
      case 'EXTREME': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-400" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-green-400" />;
      default: return <Shield className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300 cursor-pointer hover:glow-effect">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{country}</CardTitle>
          <div className="flex items-center space-x-2">
            {getTrendIcon()}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getThreatColor(level)}`}>
              {level}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {primaryThreats.map((threat, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
              >
                {threat}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Updated: {lastUpdated}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatLevelCard;
