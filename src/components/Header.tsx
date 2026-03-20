import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { LocationSelector } from "./LocationSelector";

interface HeaderProps {
  onRegisterContractor: () => void;
  onBookService: () => void;
  selectedLocation: string | null;
  onLocationSelect: (location: string) => void;
  onAMCOffice?: () => void;
  onAMCHome?: () => void;
  onAMCCommercial?: () => void;
  onAMCIndustrial?: () => void;
  onAMCHealthcare?: () => void;
  onAMCEducational?: () => void;
  onAMCHospitality?: () => void;
  onAMCSociety?: () => void;
}

export function Header({
  onRegisterContractor,
  onBookService,
  selectedLocation,
  onLocationSelect,
  onAMCOffice,
  onAMCHome,
  onAMCCommercial,
  onAMCIndustrial,
  onAMCHealthcare,
  onAMCEducational,
  onAMCHospitality,
  onAMCSociety,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@visvasa.com"
                className="flex items-center gap-2 hover:text-blue-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">
                  contact@visvasahome.com
                </span>
              </a>
              <a
                href="tel:+919057567160"
                className="flex items-center gap-2 hover:text-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">
                  +91 905 7567 160
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919057567160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1 bg-green-500 hover:bg-green-600 rounded transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="hidden sm:inline">
                  WhatsApp
                </span>
              </a>
              <a
                href="tel:+919057567160"
                className="flex items-center gap-2 px-4 py-1 bg-white text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">
                  Call Directly
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl text-blue-600">
                VisvasaHome
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  AMC Plans
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <button
                    onClick={onAMCHome}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Home AMC
                  </button>
                  <button
                    onClick={onAMCOffice}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Office AMC
                  </button>
                  <button
                    onClick={onAMCCommercial}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Commercial AMC
                  </button>
                  <button
                    onClick={onAMCIndustrial}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Industrial AMC
                  </button>
                  <button
                    onClick={onAMCHealthcare}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Healthcare AMC
                  </button>
                  <button
                    onClick={onAMCEducational}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Educational AMC
                  </button>
                  <button
                    onClick={onAMCHospitality}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Hospitality AMC
                  </button>
                  <button
                    onClick={onAMCSociety}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                  >
                    Society AMC
                  </button>
                </div>
              </div>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#for-contractors"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                For Contractors
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
              <div className="pt-2">
                <LocationSelector
                  selectedLocation={selectedLocation}
                  onLocationSelect={onLocationSelect}
                />
              </div>
              <button
                onClick={onRegisterContractor}
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Register as Contractor
              </button>
              <button
                onClick={onBookService}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Service
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
                <button
                  onClick={onAMCHome}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home AMC
                </button>
                <button
                  onClick={onAMCOffice}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Office AMC
                </button>
                <button
                  onClick={onAMCCommercial}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Commercial AMC
                </button>
                <button
                  onClick={onAMCIndustrial}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Industrial AMC
                </button>
                <button
                  onClick={onAMCHealthcare}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Healthcare AMC
                </button>
                <button
                  onClick={onAMCEducational}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Educational AMC
                </button>
                <button
                  onClick={onAMCHospitality}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Hospitality AMC
                </button>
                <button
                  onClick={onAMCSociety}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Society AMC
                </button>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#for-contractors"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  For Contractors
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About Us
                </a>
                <LocationSelector
                  selectedLocation={selectedLocation}
                  onLocationSelect={onLocationSelect}
                />
                <button
                  onClick={onRegisterContractor}
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Register as Contractor
                </button>
                <button
                  onClick={onBookService}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Service
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}