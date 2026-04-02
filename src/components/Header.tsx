import { Menu, X, Phone, Mail, ChevronDown, Home, Building2, Store, Factory, HeartPulse, GraduationCap, UtensilsCrossed, Building, Sparkles, Scissors, Droplets, Zap, Refrigerator, PaintBucket, Heart, Baby, Sofa, PartyPopper, HardHat } from "lucide-react";
import { useState } from "react";
import { LocationSelector } from "./LocationSelector";
import logoImg from "figma:asset/eb512c399380dc0d7f2c91ba581d523880a08201.png";

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
  onHome?: () => void;
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
  onHome,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceOptions = [
    { name: "Home Cleaning & Sanitation", icon: Sparkles, onClick: onBookService },
    { name: "Beauty & Grooming Services", icon: Scissors, onClick: onBookService },
    { name: "Plumbing & Water Solutions", icon: Droplets, onClick: onBookService },
    { name: "Electrical & Wiring Services", icon: Zap, onClick: onBookService },
    { name: "Appliance Repair & AC Services", icon: Refrigerator, onClick: onBookService },
    { name: "Home Improvement & Pest Control", icon: PaintBucket, onClick: onBookService },
    { name: "Wellness & Fitness Services", icon: Heart, onClick: onBookService },
    { name: "Care & Support Services", icon: Baby, onClick: onBookService },
    { name: "Interior & Design Services", icon: Sofa, onClick: onBookService },
    { name: "Event & Special Services", icon: PartyPopper, onClick: onBookService },
    { name: "Custom Contractor Services", icon: HardHat, onClick: onBookService },
  ];

  const amcOptions = [
    { name: "Home AMC", icon: Home, onClick: onAMCHome },
    { name: "Office AMC", icon: Building2, onClick: onAMCOffice },
    { name: "Commercial AMC", icon: Store, onClick: onAMCCommercial },
    { name: "Industrial AMC", icon: Factory, onClick: onAMCIndustrial },
    { name: "Healthcare AMC", icon: HeartPulse, onClick: onAMCHealthcare },
    { name: "Educational AMC", icon: GraduationCap, onClick: onAMCEducational },
    { name: "Hospitality AMC", icon: UtensilsCrossed, onClick: onAMCHospitality },
    { name: "Society AMC", icon: Building, onClick: onAMCSociety },
  ];

  const contractorOptions = [
    { name: "Register as Contractor", icon: HardHat, onClick: onRegisterContractor },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@visvasahome.com"
                className="flex items-center gap-2 hover:text-blue-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline text-base">
                  contact@visvasahome.com
                </span>
              </a>
              <a
                href="tel:+919057567160"
                className="flex items-center gap-2 hover:text-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline text-base">
                  +91 905 7567 160
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919057567160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1 bg-green-500 hover:bg-green-600 rounded transition-colors text-base"
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
                className="flex items-center gap-2 px-4 py-1 bg-white text-blue-600 hover:bg-blue-50 rounded transition-colors text-base"
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
              <button 
                onClick={onHome}
                className="hover:opacity-80 transition-opacity focus:outline-none"
              >
                <img
                  src={logoImg}
                  alt="VisvasaHome"
                  className="h-10 w-auto"
                  style={{ maxWidth: "200px" }}
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Services Mega Dropdown with All Options */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 text-base">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Large Mega Dropdown with 3 sections */}
                <div className="absolute top-full left-0 mt-2 w-[650px] bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    {/* Regular Services Section */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">Professional Services</h3>
                      <div className="grid grid-cols-2 gap-1">
                        {serviceOptions.map((option) => (
                          <button
                            key={option.name}
                            onClick={option.onClick}
                            className="flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-base"
                          >
                            <option.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{option.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 my-3"></div>
                    
                    {/* AMC Plans Section */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">AMC Plans</h3>
                      <div className="grid grid-cols-2 gap-1">
                        {amcOptions.map((option) => (
                          <button
                            key={option.name}
                            onClick={option.onClick}
                            className="flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-base"
                          >
                            <option.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{option.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 my-3"></div>
                    
                    {/* Contractor Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">For Professionals</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {contractorOptions.map((option) => (
                          <button
                            key={option.name}
                            onClick={option.onClick}
                            className="flex items-center gap-3 px-3 py-2.5 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-base"
                          >
                            <option.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{option.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors text-base"
              >
                How It Works
              </a>
              
              <LocationSelector
                selectedLocation={selectedLocation}
                onLocationSelect={onLocationSelect}
              />
              
              <button
                onClick={onRegisterContractor}
                className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base whitespace-nowrap"
              >
                Register as Contractor
              </button>
              <button
                onClick={onBookService}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base whitespace-nowrap"
              >
                Book Service
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
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
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {/* Mobile Services Accordion (Combined with AMC & Contractor) */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors py-2 text-base"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-2 space-y-3 pl-4">
                      {/* Professional Services */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 px-2">Professional Services</h4>
                        <div className="space-y-1">
                          {serviceOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => {
                                option.onClick();
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2 text-sm"
                            >
                              <option.icon className="w-4 h-4" />
                              <span>{option.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* AMC Plans */}
                      <div className="pt-2 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 px-2">AMC Plans</h4>
                        <div className="space-y-1">
                          {amcOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => {
                                option.onClick?.();
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2 text-sm"
                            >
                              <option.icon className="w-4 h-4" />
                              <span>{option.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* For Professionals */}
                      <div className="pt-2 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 px-2">For Professionals</h4>
                        <div className="space-y-1">
                          {contractorOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => {
                                option.onClick();
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2 text-sm"
                            >
                              <option.icon className="w-4 h-4" />
                              <span>{option.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-t border-gray-100 pt-3 text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                
                <div className="pt-3 border-t border-gray-100">
                  <LocationSelector
                    selectedLocation={selectedLocation}
                    onLocationSelect={onLocationSelect}
                  />
                </div>
                
                <button
                  onClick={() => {
                    onRegisterContractor();
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base mt-3"
                >
                  Register as Contractor
                </button>
                <button
                  onClick={() => {
                    onBookService();
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
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