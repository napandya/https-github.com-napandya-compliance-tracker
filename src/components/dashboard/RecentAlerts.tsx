import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export const RecentAlerts: React.FC = () => {
  const alerts = [
    {
      type: 'critical',
      title: 'Mumbai - SOC 2 Audit Due',
      time: '2 hours ago',
      site: 'Mumbai'
    },
    {
      type: 'warning',
      title: 'Chennai - GDPR Update Required',
      time: '5 hours ago',
      site: 'Chennai'
    },
    {
      type: 'success',
      title: 'Bangalore - DR Test Completed',
      time: '1 day ago',
      site: 'Bangalore'
    },
    {
      type: 'warning',
      title: 'Hyderabad - Policy Review Pending',
      time: '2 days ago',
      site: 'Hyderabad'
    }
  ];

  const typeConfig = {
    critical: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    warning: { icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100' },
    success: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Alerts</h2>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const Icon = typeConfig[alert.type as keyof typeof typeConfig].icon;
          const color = typeConfig[alert.type as keyof typeof typeConfig].color;
          const bg = typeConfig[alert.type as keyof typeof typeConfig].bg;
          
          return (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{alert.title}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Alerts →
      </button>
    </div>
  );
};
