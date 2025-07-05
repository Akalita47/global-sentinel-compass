
import React from 'react';
import EnhancedGlobalMap from '@/components/EnhancedGlobalMap';
import { Card } from '@/components/ui/card';

const MainDashboard = () => {
  return (
    <div className="flex-1 p-4">
      <div className="h-full">
        <EnhancedGlobalMap />
        
        {/* Map Legend */}
        <Card className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border p-4">
          <h4 className="text-sm font-semibold mb-3">Legend</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span>Critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span>High</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Medium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Low</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MainDashboard;
