
import React, { useState } from 'react';
import { Shield, ChevronDown, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardSidebar = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [severityFilters, setSeverityFilters] = useState({
    critical: true,
    high: true,
    medium: true,
    low: true
  });
  const [timeRange, setTimeRange] = useState('Last 24 hours');
  const [sourceFilters, setSourceFilters] = useState({
    newsMedia: true,
    government: true,
    socialMedia: true,
    satellite: true
  });

  const toggleSeverityFilter = (severity: string) => {
    setSeverityFilters(prev => ({
      ...prev,
      [severity]: !prev[severity as keyof typeof prev]
    }));
  };

  const toggleSourceFilter = (source: string) => {
    setSourceFilters(prev => ({
      ...prev,
      [source]: !prev[source as keyof typeof prev]
    }));
  };

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Brand Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">GeoPulse</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        <div>
          <h3 className="font-semibold text-sm mb-3">Filters</h3>
          
          {/* Region Filter */}
          <div className="mb-4">
            <label className="text-xs font-medium text-muted-foreground mb-2 block">Region</label>
            <div className="relative">
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm appearance-none"
              >
                <option>All Regions</option>
                <option>Europe</option>
                <option>Middle East</option>
                <option>Asia-Pacific</option>
                <option>Americas</option>
                <option>Africa</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Severity Filter */}
          <div className="mb-4">
            <label className="text-xs font-medium text-muted-foreground mb-2 block">Severity</label>
            <div className="space-y-2">
              {[
                { key: 'critical', label: 'Critical', color: 'text-red-400' },
                { key: 'high', label: 'High', color: 'text-orange-400' },
                { key: 'medium', label: 'Medium', color: 'text-yellow-400' },
                { key: 'low', label: 'Low', color: 'text-blue-400' }
              ].map(({ key, label, color }) => (
                <label key={key} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={severityFilters[key as keyof typeof severityFilters]}
                    onChange={() => toggleSeverityFilter(key)}
                    className="rounded border-border"
                  />
                  <span className={`text-sm ${color}`}>●</span>
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Time Range Filter */}
          <div className="mb-4">
            <label className="text-xs font-medium text-muted-foreground mb-2 block">Time Range</label>
            <div className="relative">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm appearance-none"
              >
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Custom range</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Source Type Filter */}
          <div className="mb-4">
            <label className="text-xs font-medium text-muted-foreground mb-2 block">Source Type</label>
            <div className="space-y-2">
              {[
                { key: 'newsMedia', label: 'News Media' },
                { key: 'government', label: 'Government' },
                { key: 'socialMedia', label: 'Social Media' },
                { key: 'satellite', label: 'Satellite' }
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sourceFilters[key as keyof typeof sourceFilters]}
                    onChange={() => toggleSourceFilter(key)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Analytics</h3>
          <div className="grid grid-cols-2 gap-2">
            <Card className="bg-secondary/50">
              <CardContent className="p-3 text-center">
                <div className="text-lg font-bold">247</div>
                <div className="text-xs text-muted-foreground">Total Events</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50">
              <CardContent className="p-3 text-center">
                <div className="text-lg font-bold text-red-400">12</div>
                <div className="text-xs text-muted-foreground">Critical</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Analyst</div>
            <div className="text-xs text-muted-foreground">Geopolitical Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
