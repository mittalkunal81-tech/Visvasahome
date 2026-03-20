import { Users, Building2, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Community-First',
    description: 'We build lasting relationships, not just transactions. Every service connects you with trusted local professionals.'
  },
  {
    icon: Building2,
    title: 'Local Empowerment',
    description: 'We strengthen local professionals with systems, branding, and support to deliver exceptional service.'
  },
  {
    icon: Shield,
    title: 'Fair & Protected',
    description: 'Fair pricing for customers. Fair income for professionals. A sustainable ecosystem for everyone.'
  },
  {
    icon: TrendingUp,
    title: 'Long-term Growth',
    description: 'We help professionals build careers, not gigs. Real customer relationships and project-based growth.'
  }
];

export function Differentiation() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            The VisvasaHome Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A professional ecosystem built on trust, fairness, and community values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="mb-3">{value.title}</h3>
              
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}