
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Zap, Users, AlertTriangle } from 'lucide-react';

const GlobalMap = () => {
  const incidents = [
    { id: 1, type: 'conflict', x: '45%', y: '35%', severity: 'high' },
    { id: 2, type: 'terrorism', x: '25%', y: '45%', severity: 'extreme' },
    { id: 3, type: 'civil-unrest', x: '65%', y: '55%', severity: 'medium' },
    { id: 4, type: 'natural-disaster', x: '75%', y: '25%', severity: 'high' },
    { id: 5, type: 'conflict', x: '35%', y: '65%', severity: 'medium' },
  ];

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case 'conflict': return <Zap className="h-3 w-3" />;
      case 'terrorism': return <AlertTriangle className="h-3 w-3" />;
      case 'civil-unrest': return <Users className="h-3 w-3" />;
      case 'natural-disaster': return <MapPin className="h-3 w-3" />;
      default: return <MapPin className="h-3 w-3" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'extreme': return 'text-red-400 bg-red-400/20 border-red-400/50';
      case 'high': return 'text-orange-400 bg-orange-400/20 border-orange-400/50';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/50';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/50';
    }
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Global Security Intelligence Map</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-secondary rounded-lg p-4 h-96 overflow-hidden">
          {/* World Map Representation */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Simplified world map paths */}
              <path
                d="M50 50 L100 40 L150 45 L200 35 L250 40 L300 35 L350 40 L350 80 L320 90 L280 85 L230 90 L180 85 L130 90 L80 85 L50 80 Z"
                fill="currentColor"
                className="text-muted-foreground"
              />
              <path
                d="M60 100 L120 95 L180 100 L240 95 L300 100 L340 95 L340 140 L300 145 L240 140 L180 145 L120 140 L60 145 Z"
                fill="currentColor"
                className="text-muted-foreground"
              />
              <path
                d="M100 160 L160 155 L220 160 L280 155 L320 160 L320 180 L280 175 L220 180 L160 175 L100 180 Z"
                fill="currentColor"
                className="text-muted-foreground"
              />
            </svg>
          </div>

          {/* Security Incidents */}
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className={`absolute w-6 h-6 rounded-full border-2 flex items-center justify-center animate-pulse cursor-pointer ${getSeverityColor(incident.severity)}`}
              style={{ left: incident.x, top: incident.y }}
              title={`${incident.type} - ${incident.severity} severity`}
            >
              {getIncidentIcon(incident.type)}
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg p-3 space-y-2">
            <h4 className="text-xs font-semibold text-foreground mb-2">Incident Types</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-400/20 border border-red-400/50 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-2 w-2 text-red-400" />
                </div>
                <span className="text-muted-foreground">Terrorism</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-400/20 border border-orange-400/50 rounded-full flex items-center justify-center">
                  <Zap className="h-2 w-2 text-orange-400" />
                </div>
                <span className="text-muted-foreground">Conflict</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-400/20 border border-yellow-400/50 rounded-full flex items-center justify-center">
                  <Users className="h-2 w-2 text-yellow-400" />
                </div>
                <span className="text-muted-foreground">Civil Unrest</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-400/20 border border-blue-400/50 rounded-full flex items-center justify-center">
                  <MapPin className="h-2 w-2 text-blue-400" />
                </div>
                <span className="text-muted-foreground">Natural</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GlobalMap;
