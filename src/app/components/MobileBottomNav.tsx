import { Home, Search, Calendar, User, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onMenuOpen: () => void;
}

export function MobileBottomNav({ currentPage, onNavigate, onMenuOpen }: MobileBottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Services', icon: Search },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'menu', label: 'Menu', icon: Menu, action: 'menu' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50 shadow-lg">
      <div className="grid grid-cols-5 gap-0">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => item.action === 'menu' ? onMenuOpen() : onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-3 px-1 transition-all ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 active:text-blue-600'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 transition-all ${isActive ? 'text-blue-600 scale-110' : 'text-gray-500'}`} />
              <span className={`text-xs font-semibold ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
