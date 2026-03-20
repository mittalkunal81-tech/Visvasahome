import { MapPin, X, Search } from 'lucide-react';
import { useState } from 'react';

interface LocationSelectorProps {
  selectedLocation: string | null;
  onLocationSelect: (location: string) => void;
}

const popularCities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Surat',
  'Chandigarh',
  'Noida',
  'Gurgaon',
  'Indore',
  'Bhopal',
  'Nagpur',
  'Visakhapatnam',
  'Kochi',
  'Coimbatore'
];

export function LocationSelector({ selectedLocation, onLocationSelect }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = popularCities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationSelect = (location: string) => {
    onLocationSelect(location);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm">
          {selectedLocation || 'Select Location'}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg">Select Your Location</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              {/* Current Location */}
              <button
                onClick={() => handleLocationSelect('Current Location')}
                className="w-full flex items-center gap-3 p-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors mb-4"
              >
                <MapPin className="w-5 h-5" />
                <span>Use Current Location</span>
              </button>

              {/* Popular Cities */}
              <div className="max-h-96 overflow-y-auto">
                <p className="text-sm text-gray-500 mb-3">Popular Cities</p>
                <div className="grid grid-cols-2 gap-2">
                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleLocationSelect(city)}
                      className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
                {filteredCities.length === 0 && (
                  <p className="text-center text-gray-500 py-8">
                    No cities found
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
