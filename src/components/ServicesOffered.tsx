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
  HardHat
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Wrench,
    title: 'Home Repair & Maintenance',
    services: [
      'Electrician',
      'Plumber',
      'Carpenter',
      'Painter',
      'Mason / Civil Repair',
      'Door, Lock & Hardware Repair',
      'Furniture Assembly & Repair'
    ],
    badge: null
  },
  {
    icon: Sparkles,
    title: 'Cleaning & Hygiene Services',
    services: [
      'Home Deep Cleaning',
      'Bathroom & Kitchen Cleaning',
      'Sofa & Carpet Cleaning',
      'Mattress Cleaning',
      'Water Tank Cleaning',
      'Home Sanitization',
      'Post-Construction Cleaning'
    ],
    badge: 'High-Repeat Services'
  },
  {
    icon: Refrigerator,
    title: 'Appliance Repair & Installation',
    services: [
      'AC Repair, Service & Installation',
      'Washing Machine Repair',
      'Refrigerator Repair',
      'Microwave & Oven Repair',
      'Geyser Repair',
      'RO & Water Purifier Service',
      'Chimney & Hob Service'
    ],
    badge: 'High Revenue'
  },
  {
    icon: PaintBucket,
    title: 'Painting, Renovation & Construction',
    services: [
      'Interior Painting',
      'Exterior Painting',
      'Waterproofing Solutions',
      'Tiling & Flooring',
      'False Ceiling',
      'Kitchen Renovation',
      'Bathroom Remodeling',
      'Full Home Renovation',
      'Civil Construction (Residential & Commercial)'
    ],
    badge: null
  },
  {
    icon: Trees,
    title: 'Outdoor & Utility Services',
    services: [
      'Gardening & Landscaping',
      'Terrace & Lawn Maintenance',
      'Pest Control',
      'Mosquito & Termite Treatment',
      'Water Leakage Inspection'
    ],
    badge: null
  },
  {
    icon: Scissors,
    title: 'Beauty & Personal Care',
    services: [
      "Women's Salon at Home",
      "Men's Grooming Services",
      'Haircut, Facial, Cleanup',
      'Bridal & Party Makeup',
      'Pre-wedding Grooming Packages'
    ],
    badge: 'Retention Engine'
  },
  {
    icon: Heart,
    title: 'Wellness & Care Services',
    services: [
      'Massage Therapy at Home',
      'Physiotherapy',
      'Elderly Care Assistance',
      'Patient Care Services',
      'Post-surgery Care'
    ],
    badge: 'Trust Building'
  },
  {
    icon: Sofa,
    title: 'Interior & Design Services',
    services: [
      'Modular Kitchen',
      'Wardrobe Design',
      'Interior Consultation',
      'Space Planning',
      '3D Design Assistance'
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
      'Packers & Movers (Local)'
    ],
    badge: null
  },
  {
    icon: HardHat,
    title: 'Custom Contractor Services',
    services: [
      'On-demand skilled labor',
      'Long-term site contractors',
      'Project-based hiring',
      'Commercial maintenance contracts'
    ],
    badge: 'VisvasaHome Exclusive'
  }
];

export function ServicesOffered() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Complete Service Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick repairs to major renovations. From daily cleaning to life events. We've got everything your home and family needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}