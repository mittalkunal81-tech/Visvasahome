import { CheckCircle, ArrowLeft, Phone, Clock, Shield, Wrench, Building2, Zap, Wind, Droplet, FileCheck, HeadphonesIcon } from "lucide-react";

interface AMCOfficeProps {
  onBack: () => void;
  onBookNow: () => void;
}

export function AMCOffice({ onBack, onBookNow }: AMCOfficeProps) {
  const plans = [
    {
      name: "Essential",
      price: "₹12,999",
      period: "per year",
      description: "Core maintenance for small offices",
      features: [
        "Quarterly electrical inspection",
        "AC servicing (2 units, twice yearly)",
        "Plumbing checkup (quarterly)",
        "Minor repairs included",
        "8 AM - 6 PM support",
        "48-hour response time"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹24,999",
      period: "per year",
      description: "Complete coverage for growing businesses",
      features: [
        "Monthly electrical inspection",
        "AC servicing (5 units, quarterly)",
        "Plumbing & sanitary maintenance",
        "Carpentry & furniture repairs",
        "Painting touch-ups (once yearly)",
        "Priority 24-hour response",
        "Dedicated service manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Comprehensive facility management",
      features: [
        "Full facility assessment",
        "Unlimited AC servicing",
        "24/7 emergency support",
        "Preventive maintenance schedule",
        "All electrical & plumbing work",
        "Annual deep cleaning included",
        "Quarterly compliance reporting",
        "Dedicated on-site technician option"
      ],
      popular: false
    }
  ];

  const servicesIncluded = [
    {
      icon: Zap,
      title: "Electrical Systems",
      items: ["Wiring inspection", "Switch & socket repair", "Light fixture maintenance", "Circuit breaker checkup"]
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      items: ["Filter cleaning & replacement", "Gas charging & leak check", "Compressor maintenance", "Duct cleaning"]
    },
    {
      icon: Droplet,
      title: "Plumbing & Sanitary",
      items: ["Pipe inspection & leak detection", "Tap & fixture repair", "Drainage maintenance", "Water tank cleaning"]
    },
    {
      icon: Wrench,
      title: "General Repairs",
      items: ["Door & window repair", "Furniture & fixture fixing", "Wall & ceiling maintenance", "False ceiling work"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Focus on your business while we handle all maintenance needs with scheduled inspections and timely service."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "No more searching for contractors. One call resolves all facility maintenance requirements efficiently."
    },
    {
      icon: FileCheck,
      title: "Cost Predictability",
      description: "Fixed annual pricing eliminates surprise expenses. Budget accurately with transparent, upfront costs."
    },
    {
      icon: HeadphonesIcon,
      title: "Priority Support",
      description: "Dedicated service managers ensure faster response times and consistent quality across all service visits."
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
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 text-base">Office Maintenance Solutions</span>
            </div>
            <h1 className="mb-6 text-gray-900">
              Annual Maintenance Contracts for Offices
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              Structured facility maintenance backed by verified professionals. Ensure your office runs smoothly with scheduled inspections, priority service, and predictable costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
              >
                Request a Quote
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
            <h2 className="mb-4 text-gray-900">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent pricing with clearly defined service scope. Select the plan that matches your office requirements.
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
            <h2 className="mb-4 text-gray-900">Services Covered</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive maintenance across critical facility systems. All work performed by verified professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="mb-4 text-gray-900">Why Choose AMC?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Structured maintenance reduces downtime, controls costs, and ensures consistent facility performance.
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
            <h2 className="mb-4 text-gray-900">Simple Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Get started with structured maintenance in three straightforward steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                1
              </div>
              <h3 className="mb-2 text-gray-900">Facility Assessment</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team visits your office to understand requirements and recommend the appropriate plan.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                2
              </div>
              <h3 className="mb-2 text-gray-900">Contract Agreement</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Transparent contract with clearly defined service scope, schedules, and pricing terms.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                3
              </div>
              <h3 className="mb-2 text-gray-900">Ongoing Maintenance</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Scheduled visits, priority support, and detailed service reports for complete accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Streamline Office Maintenance?</h2>
          <p className="mb-8 text-blue-100 text-lg leading-relaxed">
            Get a customized quote based on your office size and specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              Request Quote
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
              All services performed by verified professionals. Contracts include detailed service schedules and accountability measures.
            </p>
            <p className="leading-relaxed">
              Terms and conditions apply. Pricing may vary based on office size and specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
