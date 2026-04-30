import { Target, Lightbulb, Heart } from "lucide-react";

interface CTASectionProps {
  onGetStarted: () => void;
  onRegisterContractor: () => void;
}

export function CTASection({
  onGetStarted,
  onRegisterContractor,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Why Choose VisvasaHome
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="mb-3">Complete Services</h3>
                <p className="text-blue-100">
                  Everything your home needs in one trusted
                  platform. From repairs to renovations.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="mb-3">Local Accountability</h3>
                <p className="text-blue-100">
                  Verified professionals from your community.
                  Real relationships, real trust.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="mb-3">Fair for Everyone</h3>
                <p className="text-blue-100">
                  Quality service at fair prices. Supporting
                  professionals who take pride in their work.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl mb-8">
                Join thousands building better communities
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onGetStarted}
                  className="px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started as Customer
                </button>
                <button
                  onClick={onRegisterContractor}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Register as Contractor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}