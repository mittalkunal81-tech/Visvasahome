import { ArrowRight, Shield, Star, Clock, CheckCircle } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
  onRegisterContractor: () => void;
}

const trustBadges = [
  { icon: Shield, text: "Background-Verified Professionals" },
  { icon: Star, text: "4.8/5 Customer Rating" },
  { icon: Clock, text: "30-Min Booking Confirmation" },
  { icon: CheckCircle, text: "Service Warranty Included" },
];

const heroStats = [
  { value: "10,000+", label: "Services Completed" },
  { value: "500+", label: "Verified Professionals" },
  { value: "20+", label: "Cities Across India" },
  { value: "4.8/5", label: "Customer Rating" },
];

export function Hero({ onGetStarted, onRegisterContractor }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm text-white">Now serving 20+ cities across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted Local Services.<br />
              <span className="text-blue-200">Verified Professionals.</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed max-w-2xl">
              India's premier local service ecosystem — connecting you with background-verified contractors and skilled professionals for home repair, maintenance, beauty, wellness, and more.
            </p>

            <p className="text-sm text-blue-200 mb-10 font-medium">
              Founded by Kunal Mittal · Jaipur, India · Reliable • Transparent • Local-First
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl flex items-center justify-center gap-2 font-semibold shadow-lg"
              >
                Find Services Near You
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onRegisterContractor}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-700 transition-all font-semibold"
              >
                Join as Professional
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-blue-100 text-sm">
                  <badge.icon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-6">VisvasaHome at a Glance</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Service Categories Preview */}
              <div>
                <p className="text-xs text-blue-300 uppercase tracking-wide mb-3 font-medium">Services Available</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Plumbing', 'Electrical', 'AC Service', 'Painting',
                    'Deep Cleaning', 'Pest Control', 'Beauty & Salon', 'Appliance Repair',
                    'Interior Design', 'Carpentry', 'Landscaping', 'Wellness'
                  ].map((service) => (
                    <span key={service} className="px-2.5 py-1 bg-white/15 text-blue-100 rounded text-xs border border-white/10">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919057567160"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp for Instant Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
