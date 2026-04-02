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
  Dumbbell,
  Baby
} from 'lucide-react';

interface ServicesOfferedProps {
  onServiceClick?: () => void;
}

const serviceCategories = [
  {
    icon: Sparkles,
    title: 'Home Cleaning & Sanitation',
    services: [
      'Basic/Regular Home Cleaning',
      'Deep Cleaning (Whole Home)',
      'Move-in/Move-out Deep Cleaning',
      'Kitchen Cleaning',
      'Bathroom Cleaning',
      'Sofa & Curtain Cleaning',
      'Mattress & Carpet Cleaning',
      'Water Tank Cleaning',
      'Marble & Wood Floor Polishing',
      'Balcony/External Area Cleaning',
      'Subscription Plans (Weekly/Monthly Cleaning)'
    ],
    badge: 'Most Popular'
  },
  {
    icon: Scissors,
    title: 'Beauty & Grooming Services',
    services: [
      'Haircut & Styling (Women/Men)',
      'Hair Color & Treatment',
      'Mani-Pedi (Manicure & Pedicure)',
      'Facial Treatments (Basic/Glow/Advanced)',
      'Waxing (Full Body/Partial)',
      'Makeup (Party/Bridal/Everyday)',
      'Threading & Eyebrow Services',
      'Barber Services for Men',
      'Mehendi (Henna) Application',
      'Bridal Packages (Full Salon)'
    ],
    badge: 'At-Home Salon'
  },
  {
    icon: Droplets,
    title: 'Plumbing & Water Solutions',
    services: [
      'Basic Plumbing Repairs (Clog/Unclog Drains)',
      'Water Leak Detection & Repair',
      'Tap & Faucet Installation/Repair',
      'Pipe Fitting & Replacement',
      'Geyser/Heater Installation & Service',
      'Water Purifier (RO/UV) Installation & Service',
      'Washing Machine Inlet/Outlet Fitting',
      'Bathroom Fixture Repairs (Shower/Cistern)'
    ],
    badge: 'Emergency Available'
  },
  {
    icon: Zap,
    title: 'Electrical & Wiring Services',
    services: [
      'Basic Electrical Repairs (Switch/Plug Fix)',
      'Wiring & Rewiring',
      'Fan Installation & Repair',
      'Light Fitting & Bulb Replacement',
      'Switchboard Upgradation',
      'Inverter/UPS Installation & Service',
      'Emergency Electrical Work (Power Outage)',
      'Smart Home Electrical Setup (Basic)'
    ],
    badge: 'Licensed Electricians'
  },
  {
    icon: Refrigerator,
    title: 'Appliance Repair & AC Services',
    services: [
      'AC Installation (Split/Window)',
      'AC Service & Cleaning',
      'AC Gas Charging/Refill',
      'Refrigerator Repair & Service',
      'Washing Machine Repair (Top/Semi-Automatic)',
      'Microwave & Oven Repair',
      'TV & LED Repair (Basic)',
      'Chimney & Exhaust Fan Service',
      'Water Heater/Geyser Repair',
      'RO Water Purifier Service'
    ],
    badge: '7-30 Day Warranty'
  },
  {
    icon: PaintBucket,
    title: 'Home Improvement & Pest Control',
    services: [
      'Interior & Exterior Painting',
      'Wallpaper Installation',
      'False Ceiling Design & Installation',
      'Tiling & Flooring Work',
      'Carpentry (Furniture Assembly/Repair)',
      'Wardrobe & Kitchen Cabinet Fitting',
      'Pest Control (Cockroach, Termite, Bedbugs, Rodents)',
      'General Disinfection/Sanitization',
      'Home Interiors Consultation'
    ],
    badge: 'Project-Based'
  },
  {
    icon: Heart,
    title: 'Wellness & Fitness Services',
    services: [
      'Massage Therapy (Swedish/Ayurvedic/Deep Tissue)',
      'Spa Packages (Full Body)',
      'Yoga Sessions (Individual/Group)',
      'Fitness Training (Personal Trainer at Home)',
      'Physiotherapy (Basic)',
      'Nutrition Consultation'
    ],
    badge: 'Certified Professionals'
  },
  {
    icon: Baby,
    title: 'Care & Support Services',
    services: [
      'Elderly Care Assistance (Companionship/Basic Aid)',
      'Baby Care & Nanny Services (Short-Term)',
      'Pet Grooming & Care (Bathing, Trimming, Nail Cutting)',
      'Patient Care Services',
      'Post-surgery Care'
    ],
    badge: 'Trust Building'
  },
  {
    icon: Sofa,
    title: 'Interior & Design Services',
    services: [
      'Modular Kitchen Design',
      'Wardrobe Design & Installation',
      'Interior Consultation',
      'Space Planning',
      '3D Design Assistance',
      'Full Home Interior Solutions'
    ],
    badge: 'High-Ticket'
  },
  {
    icon: PartyPopper,
    title: 'Event & Special Services',
    services: [
      'Wedding Setup & Decor',
      'Festival Decoration',
      'Home Shifting Assistance',
      'Packers & Movers (Local)',
      'Event Planning Support'
    ],
    badge: null
  },
  {
    icon: HardHat,
    title: 'Custom Contractor Services',
    services: [
      'On-demand Skilled Labor',
      'Long-term Site Contractors',
      'Project-based Hiring',
      'Commercial Maintenance Contracts',
      'Facility Management Support'
    ],
    badge: 'VisvasaHome Exclusive'
  }
];

export function ServicesOffered({ onServiceClick }: ServicesOfferedProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Complete Service Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            50+ Professional Services for Your Home and Family. From daily maintenance to special occasions, VisvasaHome has you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={index} {...category} onClick={onServiceClick} />
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl mb-2">50+</div>
            <div className="text-gray-600">Professional Services</div>
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