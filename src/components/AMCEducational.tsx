import { CheckCircle, ArrowLeft, Phone, Clock, Shield, Wrench, GraduationCap, Zap, Wind, Droplet, FileCheck, Users, BookOpen, FlaskConical } from "lucide-react";

interface AMCEducationalProps {
  onBack: () => void;
  onBookNow: () => void;
}

export function AMCEducational({ onBack, onBookNow }: AMCEducationalProps) {
  const plans = [
    {
      name: "School Basic",
      price: "₹24,999",
      period: "per year",
      description: "Essential maintenance for small schools",
      features: [
        "Monthly electrical inspection",
        "AC servicing in key areas (quarterly)",
        "Classroom lighting maintenance",
        "Plumbing & sanitary systems",
        "Playground equipment checkup",
        "Safety compliance review",
        "Service visits: 12 per year"
      ],
      popular: false
    },
    {
      name: "Educational Campus",
      price: "₹89,999",
      period: "per year",
      description: "Comprehensive facility management",
      features: [
        "Weekly facility inspections",
        "All AC & ventilation systems",
        "Laboratory equipment power backup",
        "Sports facility maintenance",
        "Auditorium & library upkeep",
        "Computer lab electrical systems",
        "Water purification & tanks",
        "Fire & safety compliance",
        "24/7 emergency support",
        "Dedicated facility coordinator"
      ],
      popular: true
    },
    {
      name: "University Complex",
      price: "Custom",
      period: "tailored pricing",
      description: "Complete campus facility management",
      features: [
        "Comprehensive campus assessment",
        "All academic building maintenance",
        "Hostel & residential facilities",
        "Laboratory & research area systems",
        "Sports complex management",
        "Cafeteria & kitchen systems",
        "Campus-wide electrical & HVAC",
        "Fire safety & emergency systems",
        "On-site technical team",
        "Quarterly compliance reporting"
      ],
      popular: false
    }
  ];

  const servicesIncluded = [
    {
      icon: Zap,
      title: "Electrical Systems",
      items: ["Classroom lighting maintenance", "Power backup systems", "Computer lab circuits", "Campus-wide distribution"]
    },
    {
      icon: Wind,
      title: "HVAC & Ventilation",
      items: ["Classroom AC servicing", "Auditorium cooling systems", "Lab ventilation", "Air quality control"]
    },
    {
      icon: FlaskConical,
      title: "Laboratory Systems",
      items: ["Science lab electrical work", "Fume hood maintenance", "Gas pipeline inspection", "Safety equipment checkup"]
    },
    {
      icon: Droplet,
      title: "Water & Sanitation",
      items: ["RO water purification", "Washroom maintenance", "Water tank cleaning", "Drainage systems"]
    },
    {
      icon: BookOpen,
      title: "Learning Spaces",
      items: ["Library maintenance", "Auditorium systems", "Smart classroom equipment", "Furniture & fixture repairs"]
    },
    {
      icon: Users,
      title: "Safety & Compliance",
      items: ["Fire safety inspection", "Emergency exit maintenance", "Playground safety checkup", "Regulatory compliance"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Student Safety",
      description: "Regular maintenance ensures safe learning environments with compliant electrical, fire, and structural systems."
    },
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "Scheduled maintenance during breaks and off-hours ensures uninterrupted academic activities and classes."
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Regular inspections and documentation ensure compliance with educational facility safety regulations."
    },
    {
      icon: Users,
      title: "Focused on Education",
      description: "Reliable facility systems allow staff to focus on teaching while we handle all maintenance requirements."
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
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 text-base">Educational Facility Solutions</span>
            </div>
            <h1 className="mb-6 text-gray-900">
              AMC for Educational Institutions
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              Structured facility maintenance for schools, colleges, and training centers. Ensure safe learning environments with comprehensive maintenance and safety compliance.
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
            <h2 className="mb-4 text-gray-900">Educational Maintenance Plans</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent pricing with comprehensive service coverage tailored to educational facility requirements.
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
              Complete educational facility maintenance across all learning spaces and support systems.
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
            <h2 className="mb-4 text-gray-900">Why Educational AMC?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Structured maintenance ensures safe learning environments and allows focus on education quality.
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Maintain Safe Learning Environments</h2>
          <p className="mb-8 text-blue-100 text-lg leading-relaxed">
            Get a comprehensive facility assessment and customized maintenance plan for your educational institution.
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
              All services performed by verified educational facility maintenance professionals. Contracts include safety compliance documentation.
            </p>
            <p className="leading-relaxed">
              Terms and conditions apply. Pricing customized based on campus size and specific educational requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
