
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Clock, MapPin } from 'lucide-react';

const EventsPanel = () => {
  const recentEvents = [
    {
      id: 1,
      title: 'Military buildup reported near Ukraine border',
      source: 'CNN',
      time: '15 min ago',
      location: 'Moscow, Russia',
      severity: 'critical',
      description: 'Satellite imagery shows significant movement of Russian troops and equipment near the Ukrainian border, raising concerns...',
      indicator: 'blue'
    },
    {
      id: 2,
      title: 'Protests erupt in Tehran after economic sanctions',
      source: 'Reuters',
      time: '42 min ago',
      location: 'Tehran, Iran',
      severity: 'high',
      description: 'Thousands gathered in central Tehran protesting rising food prices and economic hardship following new international sanctions...',
      indicator: 'blue'
    },
    {
      id: 3,
      title: 'ASEAN summit concludes with trade agreement',
      source: 'BBC',
      time: '1 hour ago',
      location: 'Jakarta, Indonesia',
      severity: 'medium',
      description: 'ASEAN members signed a new regional trade pact aimed at reducing tariffs and improving supply chain resilience in the region...',
      indicator: 'blue'
    },
    {
      id: 4,
      title: 'Diplomatic meeting between US and China officials',
      source: 'AP',
      time: '2 hours ago',
      location: 'Beijing, China',
      severity: 'low',
      description: 'Senior US and Chinese officials met in Beijing to discuss climate cooperation and trade relations amid ongoing tensions...',
      indicator: 'blue'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-l-red-400';
      case 'high': return 'border-l-orange-400';
      case 'medium': return 'border-l-yellow-400';
      case 'low': return 'border-l-blue-400';
      default: return 'border-l-gray-400';
    }
  };

  return (
    <div className="w-80 bg-card border-l border-border flex flex-col">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center justify-between text-lg">
          Recent Events
          <Button size="sm" className="text-xs">
            <Plus className="h-3 w-3 mr-1" />
            Create Analysis Report
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-y-auto">
        <div className="space-y-0">
          {recentEvents.map((event) => (
            <div 
              key={event.id} 
              className={`border-l-4 ${getSeverityColor(event.severity)} hover:bg-secondary/50 transition-colors cursor-pointer`}
            >
              <div className="p-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-${event.indicator}-400 mt-2 flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight">{event.title}</h4>
                    
                    <div className="flex items-center space-x-3 mt-2 text-xs text-muted-foreground">
                      <span className="font-medium">{event.source}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Live at OvertDestination.com activity feed</span>
        </div>
      </div>
    </div>
  );
};

export default EventsPanel;
