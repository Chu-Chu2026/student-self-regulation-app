import { Link, useLocation } from 'react-router';
import { Home, ListTodo, Target, BarChart3, Trophy } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/tasks', icon: ListTodo, label: 'Tasks' },
    { path: '/focus', icon: Target, label: 'Focus' },
    { path: '/analytics', icon: BarChart3, label: 'Stats' },
    { path: '/achievements', icon: Trophy, label: 'Awards' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-screen-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                isActive
                  ? 'text-[#1E3E5F]'
                  : 'text-[#8E9DAE] hover:text-[#5C6F87]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-1 bg-[#1E3E5F] rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
