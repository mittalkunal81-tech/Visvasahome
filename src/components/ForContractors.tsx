import { Check, Star, TrendingUp, Users, Shield, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Local-Area Dominance',
    description: 'Build your reputation in your community. Become the go-to professional in your neighborhood.'
  },
  {
    icon: Shield,
    title: 'Fair Pricing Protection',
    description: 'No race to the bottom. Set fair prices that reflect your skills and experience.'
  },
  {
    icon: Star,
    title: 'Repeat Customers',
    description: 'Build lasting relationships with customers who trust and value your work.'
  },
  {
    icon: TrendingUp,
    title: 'Project-Based Growth',
    description: 'Access to both quick jobs and long-term projects. Grow your business sustainably.'
  },
  {
    icon: Briefcase,
    title: 'Long-Term Credibility',
    description: 'Build a professional brand with our support, training, and quality standards.'
  },
  {
    icon: Check,
    title: 'Professional Ecosystem',
    description: 'This is not a gig treadmill. This is a career platform with real growth potential.'
  }
];

interface ForContractorsProps {
  onRegisterContractor: () => void;
}

export function ForContractors({ onRegisterContractor }: ForContractorsProps) {
  return (
    <section id="for-contractors" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Join Our Professional Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build a sustainable career with VisvasaHome. Fair income, real relationships, and long-term growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={onRegisterContractor}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Join as Professional Contractor
          </button>
        </div>
      </div>
    </section>
  );
}