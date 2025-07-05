
import React from 'react';
import StatsCard from '@/components/StatsCard';
import { AlertTriangle, Globe, Users, Activity } from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="transform hover:scale-105 transition-all duration-300">
        <StatsCard
          title="Active Threats"
          value="247"
          change="+12% from last week"
          trend="up"
          icon={AlertTriangle}
        />
      </div>
      <div className="transform hover:scale-105 transition-all duration-300">
        <StatsCard
          title="Countries Monitored" 
          value="195"
          change="Full global coverage"
          trend="stable"
          icon={Globe}
        />
      </div>
      <div className="transform hover:scale-105 transition-all duration-300">
        <StatsCard
          title="Travelers Protected"
          value="12.5K"
          change="+8% from last month"
          trend="up"
          icon={Users}
        />
      </div>
      <div className="transform hover:scale-105 transition-all duration-300">
        <StatsCard
          title="System Uptime"
          value="99.9%"
          change="Operational"
          trend="stable"
          icon={Activity}
        />
      </div>
    </div>
  );
};

export default StatsSection;
