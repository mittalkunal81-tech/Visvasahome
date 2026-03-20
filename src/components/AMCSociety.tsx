import { CheckCircle, ArrowLeft, Phone, Clock, Shield, Wrench, Building, Zap, Wind, Droplet, FileCheck, Users, TreePine, Lightbulb } from "lucide-react";

interface AMCSocietyProps {
  onBack: () => void;
  onBookNow: () => void;
}

export function AMCSociety({ onBack, onBookNow }: AMCSocietyProps) {
  const plans = [
    {
      name: "Small Society",
      price: "₹39,999",
      period: "per year",
      description: "Essential maintenance for up to 50 flats",
      features: [
        "Monthly common area inspection",
        "Lift maintenance (up to 2 lifts)",
        "Common area lighting & electrical",
        "Water pump & motor servicing",
        "Plumbing in common areas",
        "Gate & entrance systems",
        "Garden & landscape basic upkeep",
        "Service visits: 12 per year"
      ],
      popular: false
    },
    {
      name: "Residential Complex",
      price: "₹1,49,999",
      period: "per year",
      description: "Comprehensive maintenance for up to 200 flats",
      features: [
        "Weekly facility inspections",
        "All lift maintenance (monthly)",
        "Common area AC & ventilation",
        "Street light & common lighting",
        "Swimming pool maintenance",
        "Gym equipment checkup",
        "Water treatment & tanks",
        "Fire safety systems",
        "Club house maintenance",
        "24/7 emergency support",
        "Dedicated facility manager"
      ],
      popular: true
    },
    {
      name: "Large Township",
      price: "Custom",
      period: "tailored pricing",
      description: "Complete township facility management",
      features: [
        "Comprehensive campus management",
        "Multiple tower maintenance",
        "All amenity facility upkeep",
        "Sewage treatment plant",
        "Generator & power backup systems",
        "Security system maintenance",
        "Landscape & parks management",
        "Community center facilities",
        "Sports complex maintenance",
        "On-site technical team",
        "Resident app integration"
      ],
      popular: false
    }
  ];

  const servicesIncluded = [
    {
      icon: Zap,
      title: "Electrical Systems",
      items: ["Common area lighting", "Street light maintenance", "Lift electrical systems", "Generator servicing"]
    },
    {
      icon: Wind,
      title: "Lift & Equipment",
      items: ["Elevator regular servicing", "Emergency rescue readiness", "Safety certification", "Gym equipment maintenance"]
    },
    {
      icon: Droplet,
      title: "Water Management",
      items: ["Water pump maintenance", "Overhead tank cleaning", "Underground tank servicing", "Water treatment systems"]
    },
    {
      icon: TreePine,
      title: "Landscape & Outdoor",
      items: ["Garden maintenance coordination", "Playground equipment checkup", "Outdoor lighting", "Parking area upkeep"]
    },
    {
      icon: Lightbulb,
      title: "Common Amenities",
      items: ["Club house maintenance", "Swimming pool systems", "Community hall facilities", "Security cabin systems"]
    },
    {
      icon: Users,
      title: "Safety & Compliance",
      items: ["Fire safety inspection", "Fire extinguisher checkup", "Emergency exit maintenance", "Compliance documentation"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Resident Satisfaction",
      description: "Well-maintained common facilities enhance property value and ensure comfortable living for all residents."
    },
    {
      icon: Clock,
      title: "Proactive Maintenance",
      description: "Scheduled inspections prevent major issues and reduce emergency repair costs for the society."
    },
    {
      icon: FileCheck,
      title: "Transparent Accounting",
      description: "Detailed service reports and maintenance logs ensure accountability to the society management committee."
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Dedicated facility manager ensures consistent quality and serves as single point of contact for all maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-base">Back</span>
            </button>
            <div className="text-2xl text-blue-600">
              VisvasaHome
            </div>
            <a
              href="tel:+919057567160"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-base">Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Building className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 text-base">Residential Society Solutions</span>
            </div>
            <h1 className="mb-6 text-gray-900">
              AMC for Residential Societies & Townships
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              Comprehensive facility management for apartment complexes and gated communities. Ensure resident satisfaction with structured maintenance and transparent service standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
              >
                Request Assessment
              </button>
              <a
                href="tel:+919057567160"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-base"
              >
                Speak with Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Society Maintenance Plans</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent pricing with comprehensive service coverage for common area and amenity maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border ${
                  plan.popular
                    ? "border-blue-600 shadow-xl relative"
                    : "border-gray-200 shadow-sm"
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm text-base">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="mb-2 text-gray-900">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2 text-base">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onBookNow}
                    className={`w-full py-3 rounded-lg transition-colors text-base ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact for Pricing" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Comprehensive Service Coverage</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Complete society maintenance across all common areas, amenities, and essential systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesIncluded.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="mb-4 text-gray-900">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span className="text-gray-600 text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Why Society AMC?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Structured maintenance ensures well-functioning amenities and enhances overall resident living experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Simple process to get started with professional society maintenance management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                1
              </div>
              <h3 className="mb-2 text-gray-900">Society Assessment</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team visits to understand society size, amenities, and specific maintenance requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                2
              </div>
              <h3 className="mb-2 text-gray-900">Customized Plan</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We prepare a tailored maintenance plan with clear service schedules and transparent pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                3
              </div>
              <h3 className="mb-2 text-gray-900">Ongoing Management</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Dedicated facility manager ensures quality service delivery with regular reporting to management committee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Enhance Your Society's Living Experience</h2>
          <p className="mb-8 text-blue-100 text-lg leading-relaxed">
            Get a comprehensive assessment and customized maintenance plan for your residential society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              Request Assessment
            </button>
            <a
              href="tel:+919057567160"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
            >
              Call +91 905 7567 160
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2 leading-relaxed">
              All services performed by verified facility management professionals. Contracts include detailed service schedules and reporting.
            </p>
            <p className="leading-relaxed">
              Terms and conditions apply. Pricing customized based on society size and specific amenity requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
