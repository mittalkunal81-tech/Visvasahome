import { ArrowLeft, Search, Shield, CalendarCheck, Star, Briefcase, CheckSquare, TrendingUp, Clock, Phone } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface HowItWorksPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const customerSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Browse & Select Service',
    description: 'Explore our comprehensive service categories — from home repairs and cleaning to beauty, wellness, and AMC contracts. Select the service that matches your need.',
    tip: 'You can specify your preferred date, time, and any special requirements during selection.',
  },
  {
    step: '02',
    icon: Phone,
    title: 'Book or Call Us',
    description: 'Book directly through our platform or call/WhatsApp us at +91 905 7567 160. Our team confirms your booking and matches you with the best available professional in your area.',
    tip: 'Bookings are typically confirmed within 30 minutes during business hours.',
  },
  {
    step: '03',
    icon: Shield,
    title: 'Verified Professional Arrives',
    description: 'Your assigned professional arrives at the scheduled time with proper identification. All VisvasaHome professionals are background-verified, trained, and monitored.',
    tip: 'You receive the professional\'s name and contact details before they arrive.',
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Service Completed & Documented',
    description: 'The professional completes the work transparently. All work is documented digitally including before/after notes, parts used, and job completion details.',
    tip: 'You only pay after the service is completed to your satisfaction.',
  },
  {
    step: '05',
    icon: Star,
    title: 'Rate & Review',
    description: 'After service completion, rate your experience. Your feedback directly impacts contractor quality scores and helps us maintain high standards across our network.',
    tip: 'All reviews are verified — only actual customers who booked through VisvasaHome can leave reviews.',
  },
];

const contractorSteps = [
  {
    step: '01',
    icon: Briefcase,
    title: 'Apply & Register',
    description: 'Submit your professional profile with your service specialization, years of experience, certifications, and service area. Registration is free for all verified professionals.',
  },
  {
    step: '02',
    icon: CheckSquare,
    title: 'Verification & Onboarding',
    description: 'Our team reviews your application, conducts a background verification, assesses your skill credentials, and completes the onboarding process. This typically takes 3-5 business days.',
  },
  {
    step: '03',
    icon: TrendingUp,
    title: 'Receive Job Leads',
    description: 'Once approved, you start receiving service requests in your area that match your skillset. Accept jobs that fit your schedule and location. No minimum commitment required.',
  },
  {
    step: '04',
    icon: Star,
    title: 'Deliver & Build Your Reputation',
    description: 'Complete jobs professionally and on time to build your rating and reputation on the platform. Higher-rated professionals receive more booking priority and premium job assignments.',
  },
];

const guarantees = [
  { title: 'Transparent Pricing', desc: 'You see the price before any work starts. No hidden charges, no surprises — ever.' },
  { title: 'Background-Verified Professionals', desc: 'Every professional on our platform has passed identity verification and background screening.' },
  { title: 'Service Warranty', desc: 'All services come with a warranty period. If the issue recurs, we send someone back at no extra charge.' },
  { title: 'Accountability at Every Step', desc: 'Every visit is logged digitally. You have a complete record of all service history and work done.' },
  { title: 'Dedicated Support', desc: 'Issues? Our customer support team is available 6 days a week to address any concerns or complaints.' },
  { title: 'Quality Monitoring', desc: 'We continuously monitor contractor quality through customer ratings, follow-up checks, and periodic audits.' },
];

export function HowItWorksPage({ onBack, onNavigate }: HowItWorksPageProps) {
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm">Simple, Transparent, Reliable</span>
            </div>
            <h1 className="text-4xl font-semibold text-white mb-6">How VisvasaHome Works</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              VisvasaHome is built on a simple promise: connect customers with the right verified professional, at the right price, with full accountability. Here's exactly how that happens.
            </p>
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-4">
              <span className="text-sm font-medium">For Customers</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Getting Service is Simple</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From browsing to booking to completion, the entire VisvasaHome experience is designed to be clear, comfortable, and conflict-free.</p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2" />

            <div className="space-y-12">
              {customerSteps.map((step, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:max-w-sm xl:max-w-md">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-blue-100">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <p className="text-sm text-blue-700">💡 {step.tip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-blue-600 items-center justify-center flex-shrink-0 z-10 shadow-lg">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>

                  <div className="flex-1 lg:max-w-sm xl:max-w-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Contractors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full mb-4">
              <span className="text-sm font-medium">For Professionals</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Joining VisvasaHome as a Professional</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">VisvasaHome empowers skilled professionals with a steady stream of verified customers, fair payments, and career-building support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contractorSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-indigo-400">STEP {step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('register-contractor')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Register as a Professional
            </button>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">The VisvasaHome Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every booking on VisvasaHome comes with these core guarantees — because trust must be backed by structure and accountability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((g, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{g.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="inline-flex p-4 bg-green-50 rounded-full mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30 min</div>
              <p className="text-gray-600">Booking confirmation time during business hours</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Professionals verified before joining the network</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="inline-flex p-4 bg-yellow-50 rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
              <p className="text-gray-600">Average customer satisfaction rating across all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a service today and experience the VisvasaHome difference — verified professionals, transparent pricing, and accountable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('get-started-customer')} className="px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Book a Service
              </button>
              <button onClick={() => onNavigate('contact')} className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={(page: any) => onNavigate(page)} />
    </div>
  );
}
