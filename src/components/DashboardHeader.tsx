
import React from 'react';
import { RefreshCw, Settings, Search, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  const currentTime = new Date().toLocaleString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">OSINT Geopolitical Dashboard</h1>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-xs">
            <RefreshCw className="h-3 w-3 mr-1" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Settings className="h-3 w-3 mr-1" />
            Settings
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 bg-secondary border border-border rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Current Time */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{currentTime}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
