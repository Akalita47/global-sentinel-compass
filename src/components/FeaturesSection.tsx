
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Satellite, Eye, Radio } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-gradient-to-br from-primary/10 to-orange-500/5 border-primary/20 hover:glow-effect transition-all duration-500 group">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
              <Satellite className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Real-Time Intelligence</h3>
              <p className="text-muted-foreground text-sm">AI-powered threat detection across 195 countries</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 group">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
              <Eye className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg">24/7 Monitoring</h3>
              <p className="text-muted-foreground text-sm">Continuous surveillance of global security events</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500 group">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
              <Radio className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Instant Alerts</h3>
              <p className="text-muted-foreground text-sm">Immediate notifications for critical security updates</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesSection;
