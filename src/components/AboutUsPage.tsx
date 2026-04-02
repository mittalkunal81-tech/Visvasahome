import { ArrowLeft, Target, Users, Shield, TrendingUp, Award, Heart, CheckCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface AboutUsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function AboutUsPage({ onBack, onNavigate }: AboutUsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onRegisterContractor={() => onNavigate('register-contractor')} 
        onBookService={() => onNavigate('get-started-customer')}
        selectedLocation={null}
        onLocationSelect={() => {}}
        onAMCOffice={() => onNavigate('amc-office')}
        onAMCHome={() => onNavigate('amc-home')}
        onAMCCommercial={() => onNavigate('amc-commercial')}
        onAMCIndustrial={() => onNavigate('amc-industrial')}
        onAMCHealthcare={() => onNavigate('amc-healthcare')}
        onAMCEducational={() => onNavigate('amc-educational')}
        onAMCHospitality={() => onNavigate('amc-hospitality')}
        onAMCSociety={() => onNavigate('amc-society')}
        onHome={onBack}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="max-w-4xl">
            <h1 className="mb-6">About VisvasaHome</h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              We're building a trusted ecosystem where local professionals thrive and communities get the quality service they deserve. Trust, delivered locally.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                VisvasaHome was born from a simple observation: local services lacked organization, accountability, and trust. Customers struggled to find reliable professionals, and skilled workers struggled to reach customers who valued their expertise.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We set out to change that by creating a platform that bridges this gap—connecting verified local professionals with customers who need dependable, high-quality services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, VisvasaHome is more than just a platform. It's a community built on trust, transparency, and mutual respect between service providers and customers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">Verified Professionals</h4>
                    <p className="text-sm text-gray-600">
                      Every service provider undergoes thorough verification and background checks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">
                      Structured service standards and continuous monitoring ensure excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">Community First</h4>
                    <p className="text-sm text-gray-600">
                      Supporting local professionals and strengthening community bonds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we facilitate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Built through verification, consistency, and accountability in every service interaction
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear pricing, defined scope, and honest communication at every step
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured service standards and continuous monitoring ensure excellence
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting and strengthening local professionals to build sustainable careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Responsibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-12 text-white text-center">
            <h2 className="mb-6">Brand Responsibility</h2>
            <p className="text-xl text-blue-50 leading-relaxed max-w-4xl mx-auto mb-8">
              VisvasaHome recognizes that trust is built over time. Our identity reflects our responsibility to customers, professionals, and communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="mb-2">Safety</h4>
                <p className="text-sm text-blue-100">
                  Every touchpoint prioritizes the safety of customers and professionals
                </p>
              </div>
              <div>
                <h4 className="mb-2">Reliability</h4>
                <p className="text-sm text-blue-100">
                  Consistent quality and dependable service delivery, every time
                </p>
              </div>
              <div>
                <h4 className="mb-2">Accountability</h4>
                <p className="text-sm text-blue-100">
                  We stand behind every service experience and take responsibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={(page: any) => onNavigate(page)} />
    </div>
  );
}
