
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: LucideIcon;
}

const StatsCard = ({ title, value, change, trend, icon: Icon }: StatsCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-red-400';
      case 'down': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const getTrendGradient = () => {
    switch (trend) {
      case 'up': return 'from-red-500/10 to-red-500/5';
      case 'down': return 'from-green-500/10 to-green-500/5';
      default: return 'from-blue-500/10 to-blue-500/5';
    }
  };

  return (
    <Card className={`relative overflow-hidden bg-gradient-to-br ${getTrendGradient()} border-border/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/10`}>
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Floating decoration */}
      <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardContent className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground font-medium tracking-wide">{title}</p>
            <p className="text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">{value}</p>
            <div className={`flex items-center space-x-2 text-xs ${getTrendColor()}`}>
              <span className="font-semibold">
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
              </span>
              <span className="font-medium">{change}</span>
            </div>
          </div>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${getTrendGradient()} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
            <div className="relative p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Icon className="h-7 w-7 text-primary group-hover:text-primary/90 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
