import { CheckCircle, ArrowLeft, Phone, Clock, Shield, Wrench, Home, Zap, Wind, Droplet, FileCheck, Users, Paintbrush, LightbulbIcon } from "lucide-react";

interface AMCHomeProps {
  onBack: () => void;
  onBookNow: () => void;
}

export function AMCHome({ onBack, onBookNow }: AMCHomeProps) {
  const plans = [
    {
      name: "Basic",
      price: "₹6,999",
      period: "per year",
      description: "Essential home maintenance",
      features: [
        "Electrical inspection (quarterly)",
        "AC servicing (1 unit, twice yearly)",
        "Plumbing checkup (quarterly)",
        "Minor repairs included",
        "Standard response time",
        "Service visits: 4 per year"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹14,999",
      period: "per year",
      description: "Comprehensive home care",
      features: [
        "Monthly electrical inspection",
        "AC servicing (3 units, quarterly)",
        "Plumbing & carpentry repairs",
        "Painting touch-ups (once yearly)",
        "Appliance maintenance checkup",
        "Priority 24-hour response",
        "Service visits: 12 per year",
        "Dedicated service coordinator"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "₹24,999",
      period: "per year",
      description: "Complete home management",
      features: [
        "Unlimited service visits",
        "All AC units covered (quarterly)",
        "24/7 emergency support",
        "All electrical & plumbing work",
        "Annual deep cleaning included",
        "Pest control (quarterly)",
        "Painting & waterproofing",
        "Home safety inspection",
        "Personal service manager"
      ],
      popular: false
    }
  ];

  const servicesIncluded = [
    {
      icon: Zap,
      title: "Electrical",
      items: ["Wiring & circuit inspection", "Switch & socket repair", "Fan & light fixture work", "MCB & DB maintenance"]
    },
    {
      icon: Wind,
      title: "AC & Appliances",
      items: ["AC cleaning & servicing", "Gas charging & repairs", "Geyser maintenance", "Appliance checkup"]
    },
    {
      icon: Droplet,
      title: "Plumbing",
      items: ["Tap & faucet repair", "Pipe leak detection", "Drainage cleaning", "Water tank cleaning"]
    },
    {
      icon: Wrench,
      title: "Carpentry & Repairs",
      items: ["Door & window repair", "Cabinet & furniture fixing", "False ceiling work", "Wall mounting services"]
    },
    {
      icon: Paintbrush,
      title: "Painting",
      items: ["Wall touch-ups", "Ceiling painting", "Door & window painting", "Exterior touch-ups"]
    },
    {
      icon: LightbulbIcon,
      title: "General Maintenance",
      items: ["Lock & latch repair", "Tile & grouting work", "Seepage & leakage fixing", "General home repairs"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Consistent Care",
      description: "Regular scheduled maintenance prevents major issues and extends the life of home systems and fixtures."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "One annual contract covers all maintenance needs. No searching for different contractors repeatedly."
    },
    {
      icon: FileCheck,
      title: "Budget Control",
      description: "Fixed annual cost eliminates surprise repair expenses. Plan your home maintenance budget accurately."
    },
    {
      icon: Users,
      title: "Verified Professionals",
      description: "All work performed by background-checked, trained technicians with accountability at every service visit."
    }
  ];

  const faqs = [
    {
      question: "What is covered under the AMC?",
      answer: "Coverage depends on the plan selected. All plans include scheduled inspections and repairs for electrical, plumbing, and general maintenance. Higher plans include AC servicing, painting, pest control, and more."
    },
    {
      question: "How are service visits scheduled?",
      answer: "Your service coordinator will schedule regular maintenance visits as per the plan. For urgent issues, priority support is available based on your plan tier."
    },
    {
      question: "Are materials and parts included?",
      answer: "Minor materials and consumables are included. Major parts and materials (like AC compressors, new fixtures) are charged separately with transparent pricing."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve 20 major cities across India. Select your city to check availability and get a customized quote."
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
              <Home className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 text-base">Home Maintenance Solutions</span>
            </div>
            <h1 className="mb-6 text-gray-900">
              Annual Maintenance Contracts for Homes
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              Reliable home maintenance with scheduled inspections and verified professionals. Keep your home in optimal condition with transparent pricing and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base"
              >
                Choose Your Plan
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
            <h2 className="mb-4 text-gray-900">Select Your Plan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Clear pricing with defined service coverage. Choose the plan that matches your home maintenance needs.
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
                    Recommended
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
                    Get Started
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
            <h2 className="mb-4 text-gray-900">What We Maintain</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive home maintenance across all essential systems. Quality work by verified professionals.
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
            <h2 className="mb-4 text-gray-900">Why Choose Home AMC?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Regular maintenance prevents costly repairs and ensures your home remains safe and comfortable.
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
              Get started with annual home maintenance in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                1
              </div>
              <h3 className="mb-2 text-gray-900">Choose Your Plan</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Select a plan based on your home size and maintenance needs. Our team can help recommend the right option.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                2
              </div>
              <h3 className="mb-2 text-gray-900">Schedule Initial Visit</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team conducts a comprehensive home assessment and sets up your maintenance schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl">
                3
              </div>
              <h3 className="mb-2 text-gray-900">Relax & Enjoy</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Regular scheduled maintenance keeps your home running smoothly. Support available whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Common Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Clear answers about how home AMC works.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Protect Your Home with Structured Maintenance</h2>
          <p className="mb-8 text-blue-100 text-lg leading-relaxed">
            Join families across India who trust VisvasaHome for reliable, transparent home maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-base"
            >
              Choose Your Plan
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
              All services performed by background-verified professionals. Contracts include detailed service schedules.
            </p>
            <p className="leading-relaxed">
              Terms and conditions apply. Pricing may vary based on home size and location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
