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
  onProfessionalRegister?: () => void;
}

export function ForContractors({ onRegisterContractor, onProfessionalRegister }: ForContractorsProps) {
  return (
    <section id="for-contractors" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Join Our Professional Network
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build a sustainable career with VisvasaHome. Fair income, real relationships, and long-term growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all hover:-translate-y-1 shadow-xl">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl w-fit mb-5 shadow-lg">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onProfessionalRegister || onRegisterContractor}
            className="px-10 py-5 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all font-bold text-lg shadow-2xl hover:shadow-white/20 inline-flex items-center gap-3"
          >
            Join as Professional
            <Check className="w-6 h-6" />
          </button>
          <p className="mt-6 text-gray-400 text-sm">
            No registration fees • Free training • Start earning within 7 days
          </p>
        </div>
      </div>
    </section>
  );
}