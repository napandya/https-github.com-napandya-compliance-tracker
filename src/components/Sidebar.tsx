import React from 'react';
import { LayoutDashboard, Building2, Shield, AlertTriangle, Settings, LogOut } from 'lucide-react';
import { UserRole } from '../App';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: 'dashboard' | 'gcc-list' | 'compliance' | 'dr-bcp') => void;
  userRole: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, userRole }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['cio', 'regional_head', 'site_manager'] },
    { id: 'gcc-list', label: 'GCC Sites', icon: Building2, roles: ['cio', 'regional_head'] },
    { id: 'dr-bcp', label: 'DR & BCP', icon: AlertTriangle, roles: ['cio', 'regional_head', 'site_manager'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['cio', 'regional_head', 'site_manager'] },
  ];

  const filteredMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-500" />
          <div>
            <h1 className="text-xl font-bold">GCC Compliance</h1>
            <p className="text-xs text-gray-400">Management Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {filteredMenuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentView(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentView === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};
