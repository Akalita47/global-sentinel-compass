
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedGlobalMap = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null);

  const incidents = [
    { 
      id: 1, 
      type: 'military', 
      x: '15%', 
      y: '25%', 
      severity: 'critical', 
      title: 'Military buildup near Ukraine border',
      description: 'Satellite imagery shows increased military presence',
      timestamp: '2 hours ago'
    },
    { 
      id: 2, 
      type: 'protest', 
      x: '45%', 
      y: '35%', 
      severity: 'high', 
      title: 'Protests in Tehran after economic sanctions',
      description: 'Large crowds gathering in central districts',
      timestamp: '4 hours ago'
    },
    { 
      id: 3, 
      type: 'diplomatic', 
      x: '75%', 
      y: '40%', 
      severity: 'medium', 
      title: 'ASEAN summit trade agreement',
      description: 'Regional trade discussions ongoing',
      timestamp: '6 hours ago'
    },
    { 
      id: 4, 
      type: 'conflict', 
      x: '25%', 
      y: '45%', 
      severity: 'high', 
      title: 'Civil unrest in central region',
      description: 'Multiple incidents reported across the area',
      timestamp: '1 hour ago'
    },
    { 
      id: 5, 
      type: 'meeting', 
      x: '80%', 
      y: '30%', 
      severity: 'low', 
      title: 'US-China diplomatic meeting',
      description: 'High-level diplomatic talks scheduled',
      timestamp: '8 hours ago'
    },
    { 
      id: 6, 
      type: 'terrorism', 
      x: '35%', 
      y: '55%', 
      severity: 'critical', 
      title: 'Security threat level raised',
      description: 'Intelligence reports indicate heightened risk',
      timestamp: '30 minutes ago'
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500 border-red-500 shadow-red-500/50';
      case 'high': return 'bg-orange-500 border-orange-500 shadow-orange-500/50';
      case 'medium': return 'bg-yellow-500 border-yellow-500 shadow-yellow-500/50';
      case 'low': return 'bg-blue-500 border-blue-500 shadow-blue-500/50';
      default: return 'bg-gray-500 border-gray-500 shadow-gray-500/50';
    }
  };

  const handleZoomIn = () => setZoom(Math.min(zoom * 1.2, 3));
  const handleZoomOut = () => setZoom(Math.max(zoom / 1.2, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <Card className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-slate-700 relative overflow-hidden">
      <CardContent className="p-0 h-full relative">
        {/* Enhanced World Map Background */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-in-out"
          style={{ transform: `scale(${zoom})` }}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Ocean background */}
            <rect width="1000" height="500" fill="url(#oceanGradient)" />
            
            {/* Define gradients */}
            <defs>
              <radialGradient id="oceanGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
              <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>

            {/* More detailed continents */}
            <g fill="url(#landGradient)" stroke="#9ca3af" strokeWidth="0.5" className="drop-shadow-lg">
              {/* North America */}
              <path d="M80 120 L180 100 L280 110 L320 90 L380 100 L420 120 L400 160 L380 180 L350 200 L300 210 L250 200 L200 210 L150 200 L100 190 L80 170 Z" />
              
              {/* South America */}
              <path d="M200 240 L280 230 L300 250 L320 290 L340 330 L330 380 L310 420 L280 440 L250 430 L220 400 L200 360 L180 320 L190 280 Z" />
              
              {/* Europe */}
              <path d="M450 110 L520 100 L570 110 L600 120 L590 150 L570 170 L540 180 L500 170 L460 160 L440 140 Z" />
              
              {/* Africa */}
              <path d="M440 170 L520 160 L580 180 L600 220 L620 260 L610 300 L590 340 L570 380 L540 390 L500 380 L460 370 L430 340 L420 300 L430 260 L440 220 Z" />
              
              {/* Asia */}
              <path d="M620 90 L750 80 L850 100 L920 120 L950 150 L930 180 L900 200 L850 210 L800 200 L750 190 L700 180 L650 170 L620 140 Z" />
              
              {/* Australia */}
              <path d="M750 320 L850 310 L900 330 L920 350 L900 370 L850 380 L800 370 L760 360 L740 340 Z" />
              
              {/* Additional islands and details */}
              <circle cx="920" cy="200" r="8" />
              <circle cx="150" cy="400" r="6" />
              <circle cx="580" cy="100" r="4" />
            </g>

            {/* Grid overlay for coordinates */}
            <g stroke="#64748b" strokeWidth="0.3" opacity="0.3">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} />
              ))}
            </g>
          </svg>
        </div>

        {/* Incident Markers */}
        {incidents.map((incident) => (
          <div key={incident.id} className="relative">
            <div
              className={`absolute w-5 h-5 rounded-full border-2 ${getSeverityColor(incident.severity)} animate-pulse cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-all duration-300 z-10`}
              style={{ 
                left: incident.x, 
                top: incident.y,
                transform: `translate(-50%, -50%) scale(${zoom > 1 ? 1/zoom + 0.5 : 1})`
              }}
              onClick={() => setSelectedIncident(selectedIncident === incident.id ? null : incident.id)}
            >
              <div className={`w-full h-full rounded-full ${getSeverityColor(incident.severity)} animate-ping opacity-75`}></div>
            </div>
            
            {/* Incident popup */}
            {selectedIncident === incident.id && (
              <div
                className="absolute bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl z-20 min-w-64 transform -translate-x-1/2"
                style={{ 
                  left: incident.x, 
                  top: `calc(${incident.y} + 30px)`,
                  transform: `translateX(-50%) scale(${zoom > 1 ? 1/zoom + 0.3 : 1})`
                }}
              >
                <h4 className="font-semibold text-sm mb-1">{incident.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{incident.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className={`px-2 py-1 rounded-full text-white ${getSeverityColor(incident.severity).split(' ')[0]}`}>
                    {incident.severity.toUpperCase()}
                  </span>
                  <span className="text-muted-foreground">{incident.timestamp}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Enhanced Controls */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-10 h-10 p-0 bg-card/80 backdrop-blur-sm border-border hover:bg-card/90"
            onClick={handleZoomIn}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-10 h-10 p-0 bg-card/80 backdrop-blur-sm border-border hover:bg-card/90"
            onClick={handleZoomOut}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-10 h-10 p-0 bg-card/80 backdrop-blur-sm border-border hover:bg-card/90"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Feed Active</span>
          </div>
        </div>

        {/* Coordinates display */}
        <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-xs font-mono">
          Zoom: {zoom.toFixed(2)}x
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedGlobalMap;
