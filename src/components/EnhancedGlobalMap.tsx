
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EnhancedGlobalMap = () => {
  const incidents = [
    { id: 1, type: 'military', x: '15%', y: '25%', severity: 'critical', title: 'Military buildup near Ukraine border' },
    { id: 2, type: 'protest', x: '45%', y: '35%', severity: 'high', title: 'Protests in Tehran after economic sanctions' },
    { id: 3, type: 'diplomatic', x: '75%', y: '40%', severity: 'medium', title: 'ASEAN summit trade agreement' },
    { id: 4, type: 'conflict', x: '25%', y: '45%', severity: 'high', title: 'Civil unrest in central region' },
    { id: 5, type: 'meeting', x: '80%', y: '30%', severity: 'low', title: 'US-China diplomatic meeting' },
    { id: 6, type: 'terrorism', x: '35%', y: '55%', severity: 'critical', title: 'Security threat level raised' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-400 border-red-400 shadow-red-400/50';
      case 'high': return 'bg-orange-400 border-orange-400 shadow-orange-400/50';
      case 'medium': return 'bg-yellow-400 border-yellow-400 shadow-yellow-400/50';
      case 'low': return 'bg-blue-400 border-blue-400 shadow-blue-400/50';
      default: return 'bg-gray-400 border-gray-400 shadow-gray-400/50';
    }
  };

  return (
    <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 border-border relative overflow-hidden">
      <CardContent className="p-0 h-full relative">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Continents - Simplified world map paths */}
            <g fill="currentColor" className="text-muted-foreground/40">
              {/* North America */}
              <path d="M100 150 L200 120 L280 130 L320 110 L350 120 L380 140 L350 180 L300 200 L250 190 L200 200 L150 190 L100 180 Z" />
              {/* South America */}
              <path d="M200 250 L280 240 L300 280 L320 320 L310 380 L280 400 L250 380 L230 340 L200 300 Z" />
              {/* Europe */}
              <path d="M450 120 L520 110 L550 120 L580 130 L570 160 L540 170 L500 160 L460 150 Z" />
              {/* Africa */}
              <path d="M450 180 L520 170 L560 190 L580 230 L570 280 L550 320 L520 340 L480 330 L450 290 L440 240 Z" />
              {/* Asia */}
              <path d="M600 100 L750 90 L850 110 L900 130 L920 160 L900 190 L850 200 L750 180 L650 170 L600 140 Z" />
              {/* Australia */}
              <path d="M750 300 L850 290 L880 310 L870 330 L830 340 L780 330 L750 320 Z" />
            </g>
          </svg>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 grid-rows-5 h-full w-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="border border-muted-foreground/20"></div>
            ))}
          </div>
        </div>

        {/* Incident Markers */}
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className={`absolute w-4 h-4 rounded-full border-2 ${getSeverityColor(incident.severity)} animate-pulse cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform`}
            style={{ left: incident.x, top: incident.y }}
            title={incident.title}
          >
            <div className={`w-full h-full rounded-full ${getSeverityColor(incident.severity)} animate-ping`}></div>
          </div>
        ))}

        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 flex flex-col space-y-1">
          <button className="w-8 h-8 bg-card border border-border rounded flex items-center justify-center hover:bg-secondary text-sm font-bold">
            +
          </button>
          <button className="w-8 h-8 bg-card border border-border rounded flex items-center justify-center hover:bg-secondary text-sm font-bold">
            −
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedGlobalMap;
