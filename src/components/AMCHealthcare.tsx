import { CheckCircle, ArrowLeft, Phone, Clock, Shield, Wrench, HeartPulse, Zap, Wind, Droplet, FileCheck, AlertTriangle, Thermometer, Siren } from "lucide-react";

interface AMCHealthcareProps {
  onBack: () => void;
  onBookNow: () => void;
}

export function AMCHealthcare({ onBack, onBookNow }: AMCHealthcareProps) {
  const plans = [
    {
      name: "Clinic",
      price: "₹19,999",
      period: "per year",
      description: "Essential maintenance for small clinics",
      features: [
        "Monthly electrical inspection",
        "AC & HVAC maintenance (quarterly)",
        "Medical equipment power backup",
        "Plumbing & sanitary systems",
        "Lighting & sterilization areas",
        "Emergency support available",
        "Service visits: 12 per year"
      ],
      popular: false
    },
    {
      name: "Healthcare Center",
      price: "₹79,999",
      period: "per year",
      description: "Comprehensive facility management",
      features: [
        "Weekly facility inspections",
        "All AC & HVAC systems (monthly)",
        "Emergency power backup checkup",
        "Medical gas pipeline inspection",
        "Water purification systems",
        "Biomedical waste area maintenance",
        "Fire & safety compliance",
        "24/7 priority support",
        "Dedicated service coordinator"
      ],
      popular: true
    },
    {
      name: "Hospital Complex",
      price: "Custom",
      period: "tailored pricing",
      description: "Complete hospital facility management",
      features: [
        "Daily critical system monitoring",
        "ICU & OT HVAC management",
        "Central oxygen & medical gas systems",
        "Emergency power & UPS systems",
        "Water treatment & sterilization",
        "Fire safety & sprinkler systems",
        "Infection control area maintenance",
        "On-site technical team deployment",
        "Compliance & safety audits"
      ],
      popular: false
    }
  ];

  const servicesIncluded = [
    {
      icon: Zap,
      title: "Critical Power Systems",
      items: ["Emergency backup generators", "UPS & inverter maintenance", "ICU/OT dedicated circuits", "Medical equipment power"]
    },
    {
      icon: Wind,
      title: "HVAC & Air Quality",
      items: ["OT & ICU temperature control", "HEPA filter maintenance", "Humidity management", "Air quality monitoring"]
    },
    {
      icon: Thermometer,
      title: "Medical Gas Systems",
      items: ["Oxygen pipeline inspection", "Vacuum system maintenance", "Nitrous oxide line checkup", "Pressure monitoring"]
    },
    {
      icon: Droplet,
      title: "Water & Sanitation",
      items: ["RO water purification", "Hot water systems", "Sterilization equipment", "Biomedical waste area"]
    },
    {
      icon: Siren,
      title: "Emergency & Safety",
      items: ["Fire alarm systems", "Sprinkler inspection", "Emergency exit lighting", "Nurse call systems"]
    },
    {
      icon: AlertTriangle,
      title: "Compliance & Safety",
      items: ["NABH/JCI readiness", "Safety audit & inspection", "Infection control standards", "Regulatory documentation"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Patient Safety First",
      description: "Reliable facility systems ensure uninterrupted critical care and maintain sterile, safe environments for patients."
    },
    {
      icon: Clock,
      title: "Zero Downtime",
      description: "Preventive maintenance and 24/7 emergency support ensure critical healthcare systems remain operational always."
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Regular inspections and documentation ensure compliance with NABH, JCI, and healthcare facility standards."
    },
    {
      icon: AlertTriangle,
      title: "Infection Control",
      description: "Specialized maintenance protocols for HVAC and sanitation systems support infection prevention measures."
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
              <HeartPulse className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 text-base">Healthcare Facility Solutions</span>
            </div>
            <h1 className="mb-6 text-gray-900">
              AMC for Healthcare Facilities
            </h1>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">
              Specialized facility maintenance for hospitals, clinics, and healthcare centers. Ensure critical systems reliability with compliance-focused service standards.
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
            <h2 className="mb-4 text-gray-900">Healthcare Maintenance Plans</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized service coverage designed for healthcare facility requirements and safety standards.
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
            <h2 className="mb-4 text-gray-900">Specialized Service Coverage</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Healthcare-specific maintenance across critical systems with infection control and safety protocols.
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
            <h2 className="mb-4 text-gray-900">Why Healthcare AMC?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized maintenance ensures patient safety, operational reliability, and regulatory compliance.
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
          <h2 className="mb-4 text-white">Ensure Critical Healthcare System Reliability</h2>
          <p className="mb-8 text-blue-100 text-lg leading-relaxed">
            Get a specialized facility assessment and customized maintenance plan for your healthcare facility.
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
              All services performed by healthcare facility maintenance specialists. Contracts include compliance documentation and safety protocols.
            </p>
            <p className="leading-relaxed">
              Terms and conditions apply. Pricing customized based on facility type and specific healthcare requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
