
import React from 'react';
import { AlertTriangle, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SecurityAlertProps {
  title: string;
  location: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  timestamp: string;
  description: string;
}

const SecurityAlert = ({ title, location, severity, timestamp, description }: SecurityAlertProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'LOW': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <Card className={`border-l-4 hover:bg-card/80 transition-all duration-300 ${getSeverityColor(severity)}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className={`h-5 w-5 mt-0.5 ${severity === 'CRITICAL' ? 'text-red-400' : severity === 'HIGH' ? 'text-orange-400' : severity === 'MEDIUM' ? 'text-yellow-400' : 'text-blue-400'}`} />
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(severity)}`}>
                {severity}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{timestamp}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityAlert;
