import { LucideIcon } from 'lucide-react';

interface ServiceCategoryProps {
  icon: LucideIcon;
  title: string;
  services: string[];
  badge: string | null;
  onClick?: () => void;
}

export function ServiceCategory({ icon: Icon, title, services, badge, onClick }: ServiceCategoryProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2">{title}</h3>
          {badge && (
            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-200">
              {badge}
            </span>
          )}
        </div>
      </div>
      
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-blue-600 mt-1">•</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}