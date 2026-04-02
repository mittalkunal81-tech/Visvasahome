import { ServiceCategory } from './ServiceCategory';
import { 
  Wrench, 
  Sparkles, 
  Refrigerator, 
  PaintBucket, 
  Trees, 
  Scissors, 
  Heart, 
  Sofa, 
  PartyPopper,
  HardHat,
  Droplets,
  Zap,
  Wind,
  Drill,
  Frame,
  BrickWall,
  Hammer,
  Baby
} from 'lucide-react';

interface ServicesOfferedProps {
  onServiceClick?: () => void;
}

const serviceCategories = [
  // Construction & Trades Contractors
  {
    icon: Droplets,
    title: 'Plumbing Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Basic Plumbing Repairs (Clog/Unclog Drains)',
      'Water Leak Detection & Repair',
      'Tap & Faucet Installation/Repair',
      'Pipe Fitting & Replacement',
      'Geyser/Heater Installation & Service',
      'Water Purifier (RO/UV) Installation & Service',
      'Washing Machine Inlet/Outlet Fitting',
      'Bathroom Fixture Repairs (Shower/Cistern)',
      'Drainage System Installation'
    ],
    badge: 'Emergency Available'
  },
  {
    icon: Zap,
    title: 'Electrical Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Basic Electrical Repairs (Switch/Plug Fix)',
      'Wiring & Rewiring',
      'Fan Installation & Repair',
      'Light Fitting & Bulb Replacement',
      'Switchboard Upgradation',
      'Inverter/UPS Installation & Service',
      'Emergency Electrical Work (Power Outage)',
      'Smart Home Electrical Setup',
      'Electrical Panel Upgrade'
    ],
    badge: 'Licensed Electricians'
  },
  {
    icon: Wind,
    title: 'HVAC Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'AC Installation (Split/Window/Cassette)',
      'AC Service & Cleaning',
      'AC Gas Charging/Refill',
      'HVAC System Design',
      'Ventilation Installation',
      'Duct Cleaning & Maintenance',
      'Temperature Control Systems',
      'Central AC Installation & Service'
    ],
    badge: 'Certified Technicians'
  },
  {
    icon: PaintBucket,
    title: 'Painting Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Interior Painting',
      'Exterior Painting',
      'Wallpaper Installation',
      'Texture Painting',
      'Wood Polishing & Staining',
      'Waterproofing Solutions',
      'Wall Preparation & Repair',
      'Decorative Finishing'
    ],
    badge: 'Quality Assured'
  },
  {
    icon: Frame,
    title: 'Framing & Carpentry Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Furniture Assembly & Repair',
      'Wardrobe & Kitchen Cabinet Fitting',
      'Custom Carpentry Work',
      'Door & Window Frame Installation',
      'Wooden Flooring Installation',
      'Modular Furniture Solutions',
      'False Ceiling Work',
      'Structural Framing'
    ],
    badge: 'Skilled Craftsmen'
  },
  {
    icon: BrickWall,
    title: 'Masonry Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Brick & Block Masonry',
      'Stone Work & Installation',
      'Concrete Work',
      'Tiling & Flooring Work',
      'Wall Construction',
      'Foundation Work',
      'Plastering & Rendering',
      'Structural Repairs'
    ],
    badge: 'Foundation Experts'
  },
  {
    icon: Drill,
    title: 'Excavation Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Site Preparation',
      'Foundation Excavation',
      'Trenching for Utilities',
      'Land Grading',
      'Drainage System Installation',
      'Demolition Support',
      'Earth Moving',
      'Site Leveling'
    ],
    badge: 'Heavy Equipment'
  },
  {
    icon: Hammer,
    title: 'Roofing Contractors',
    contractorType: 'Construction & Trades',
    services: [
      'Roof Installation',
      'Roof Repair & Maintenance',
      'Waterproofing',
      'Gutter Installation',
      'Insulation Work',
      'Roof Inspection',
      'Leak Detection & Repair',
      'Material Consultation'
    ],
    badge: 'Weather Protection'
  },
  
  // Home Maintenance & Repair
  {
    icon: Wrench,
    title: 'General Repair & Maintenance',
    contractorType: 'Home Maintenance',
    services: [
      'Basic Home Repairs',
      'Door & Window Repairs',
      'Lock Installation & Repair',
      'Minor Plumbing Fixes',
      'Minor Electrical Fixes',
      'Furniture Repair',
      'Wall Hole Patching',
      'General Handyman Services'
    ],
    badge: 'Quick Fix'
  },
  {
    icon: Refrigerator,
    title: 'Appliance Repair Specialists',
    contractorType: 'Home Maintenance',
    services: [
      'Refrigerator Repair & Service',
      'Washing Machine Repair (All Types)',
      'Microwave & Oven Repair',
      'TV & LED Repair',
      'Chimney & Exhaust Fan Service',
      'Water Heater/Geyser Repair',
      'Dishwasher Repair',
      'Small Appliance Repair'
    ],
    badge: '7-30 Day Warranty'
  },
  {
    icon: HardHat,
    title: 'Pest Control Contractors',
    contractorType: 'Home Maintenance',
    services: [
      'Cockroach Treatment',
      'Termite Control',
      'Bedbug Removal',
      'Rodent Control',
      'Mosquito Treatment',
      'General Disinfection/Sanitization',
      'Preventive Pest Control',
      'Commercial Pest Solutions'
    ],
    badge: 'Eco-Friendly'
  },
  {
    icon: Sparkles,
    title: 'Cleaning Service Contractors',
    contractorType: 'Home Maintenance',
    services: [
      'Basic/Regular Home Cleaning',
      'Deep Cleaning (Whole Home)',
      'Move-in/Move-out Deep Cleaning',
      'Kitchen Deep Cleaning',
      'Bathroom Cleaning',
      'Sofa & Curtain Cleaning',
      'Mattress & Carpet Cleaning',
      'Water Tank Cleaning',
      'Marble & Wood Floor Polishing',
      'Subscription Plans (Weekly/Monthly)'
    ],
    badge: 'Most Popular'
  },
  
  // Design & Finishing Contractors
  {
    icon: Sofa,
    title: 'Interior Design Contractors',
    contractorType: 'Design & Finishing',
    services: [
      'Modular Kitchen Design',
      'Wardrobe Design & Installation',
      'Interior Consultation',
      'Space Planning',
      '3D Design & Visualization',
      'Full Home Interior Solutions',
      'Office Interior Design',
      'Custom Furniture Design'
    ],
    badge: 'High-Ticket'
  },
  {
    icon: Trees,
    title: 'Landscaping Contractors',
    contractorType: 'Design & Finishing',
    services: [
      'Garden Design & Planning',
      'Lawn Installation & Maintenance',
      'Tree Planting & Care',
      'Irrigation System Installation',
      'Outdoor Lighting',
      'Hardscape Installation',
      'Garden Maintenance',
      'Landscape Renovation'
    ],
    badge: 'Outdoor Specialists'
  },
  {
    icon: Hammer,
    title: 'Flooring Contractors',
    contractorType: 'Design & Finishing',
    services: [
      'Tile Installation',
      'Hardwood Flooring',
      'Laminate & Vinyl Flooring',
      'Marble & Stone Installation',
      'Floor Polishing & Refinishing',
      'Carpet Installation',
      'Epoxy Flooring',
      'Floor Repair & Restoration'
    ],
    badge: 'Premium Finish'
  },
  
  // Specialty Service Professionals
  {
    icon: Scissors,
    title: 'Beauty & Personal Care Professionals',
    contractorType: 'Specialty Services',
    services: [
      'Haircut & Styling (Women/Men)',
      'Hair Color & Treatment',
      'Mani-Pedi (Manicure & Pedicure)',
      'Facial Treatments (Basic/Glow/Advanced)',
      'Waxing (Full Body/Partial)',
      'Makeup (Party/Bridal/Everyday)',
      'Threading & Eyebrow Services',
      'Mehendi (Henna) Application',
      'Bridal Packages (Full Salon)'
    ],
    badge: 'At-Home Salon'
  },
  {
    icon: Heart,
    title: 'Wellness & Fitness Professionals',
    contractorType: 'Specialty Services',
    services: [
      'Massage Therapy (Swedish/Ayurvedic/Deep Tissue)',
      'Spa Packages (Full Body)',
      'Yoga Sessions (Individual/Group)',
      'Fitness Training (Personal Trainer)',
      'Physiotherapy Services',
      'Nutrition Consultation',
      'Mental Wellness Coaching'
    ],
    badge: 'Certified Professionals'
  },
  {
    icon: Baby,
    title: 'Care & Support Professionals',
    contractorType: 'Specialty Services',
    services: [
      'Elderly Care Assistance',
      'Baby Care & Nanny Services',
      'Pet Grooming & Care',
      'Patient Care Services',
      'Post-surgery Care',
      'Companion Services',
      'Special Needs Care'
    ],
    badge: 'Trust Building'
  },
  {
    icon: PartyPopper,
    title: 'Event Service Professionals',
    contractorType: 'Specialty Services',
    services: [
      'Wedding Setup & Decor',
      'Festival Decoration',
      'Party Planning',
      'Event Equipment Rental',
      'Catering Coordination',
      'Photography Support',
      'Entertainment Services'
    ],
    badge: 'Special Occasions'
  }
];

export function ServicesOffered({ onServiceClick }: ServicesOfferedProps) {
  // Group services by contractor type
  const groupedServices = serviceCategories.reduce((acc, service) => {
    const type = service.contractorType;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(service);
    return acc;
  }, {} as Record<string, typeof serviceCategories>);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Our Professional Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Verified contractors and skilled professionals for every service category.
          </p>
        </div>
        
        {/* Construction & Trades Contractors */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Construction & Trades Contractors</h3>
            <p className="text-gray-600">Licensed professionals for all construction, installation, and building work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedServices['Construction & Trades']?.map((category, index) => (
              <ServiceCategory key={index} {...category} onClick={onServiceClick} />
            ))}
          </div>
        </div>

        {/* Home Maintenance & Repair */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Home Maintenance & Repair Contractors</h3>
            <p className="text-gray-600">Expert technicians for everyday maintenance and repairs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedServices['Home Maintenance']?.map((category, index) => (
              <ServiceCategory key={index} {...category} onClick={onServiceClick} />
            ))}
          </div>
        </div>

        {/* Design & Finishing Contractors */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Design & Finishing Contractors</h3>
            <p className="text-gray-600">Creative professionals for aesthetics and finishing touches</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedServices['Design & Finishing']?.map((category, index) => (
              <ServiceCategory key={index} {...category} onClick={onServiceClick} />
            ))}
          </div>
        </div>

        {/* Specialty Service Professionals */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Specialty Service Professionals</h3>
            <p className="text-gray-600">Certified experts for personal care, wellness, and special occasions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedServices['Specialty Services']?.map((category, index) => (
              <ServiceCategory key={index} {...category} onClick={onServiceClick} />
            ))}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">20+</div>
            <div className="text-gray-600">Contractor Types</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">₹10,000</div>
            <div className="text-gray-600">Service Insurance</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">30-60</div>
            <div className="text-gray-600">Minutes Arrival</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">100%</div>
            <div className="text-gray-600">Verified Professionals</div>
          </div>
        </div>
      </div>
    </section>
  );
}