
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MainDashboard from '@/components/MainDashboard';
import EventsPanel from '@/components/EventsPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <DashboardHeader />
        
        {/* Main Dashboard Content */}
        <div className="flex-1 flex">
          {/* Map and Analytics Area */}
          <MainDashboard />
          
          {/* Right Events Panel */}
          <EventsPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
