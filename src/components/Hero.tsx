import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
  onRegisterContractor: () => void;
}

export function Hero({
  onGetStarted,
  onRegisterContractor,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xl sm:text-2xl mb-4 text-blue-100">
            Professional services.
            <br />
            Local trust.
          </p>

          <p className="text-lg mb-8 text-blue-50 max-w-2xl">
            Your complete home and lifestyle service partner.
            Building lasting relationships between skilled
            professionals and the communities they serve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              Find Services
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onRegisterContractor}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Join as Contractor
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}