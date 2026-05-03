import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOffered } from './components/ServicesOffered';
import { Differentiation } from './components/Differentiation';
import { ForContractors } from './components/ForContractors';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { RegisterContractor } from './components/RegisterContractor';
import { GetStartedCustomer } from './components/GetStartedCustomer';
import { JoinProfessional } from './components/JoinProfessional';
import { BenefitsPage } from './components/BenefitsPage';
import { TrainingSupport } from './components/TrainingSupport';
import { SuccessStories } from './components/SuccessStories';
import { AMCOffice } from './components/AMCOffice';
import { AMCHome } from './components/AMCHome';
import { AMCCommercial } from './components/AMCCommercial';
import { AMCIndustrial } from './components/AMCIndustrial';
import { AMCHealthcare } from './components/AMCHealthcare';
import { AMCEducational } from './components/AMCEducational';
import { AMCHospitality } from './components/AMCHospitality';
import { AMCSociety } from './components/AMCSociety';
import { AboutUsPage } from './components/AboutUsPage';
import { OurMissionPage } from './components/OurMissionPage';
import { ContactPage } from './components/ContactPage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { BlogPage } from './components/BlogPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { FAQPage } from './components/FAQPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { SEO } from './components/SEO';
import { ProfessionalRegisterPage } from './components/ProfessionalRegisterPage';
import { AuthPage } from './components/AuthPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { UserProfilePage } from './components/UserProfilePage';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileContactBar } from './components/MobileContactBar';
import { useState, useEffect } from 'react';
import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema } from './utils/structuredData';

type PageType =
  | 'home'
  | 'register-contractor'
  | 'get-started-customer'
  | 'join-professional'
  | 'professional-register'
  | 'benefits'
  | 'training-support'
  | 'success-stories'
  | 'amc-office'
  | 'amc-home'
  | 'amc-commercial'
  | 'amc-industrial'
  | 'amc-healthcare'
  | 'amc-educational'
  | 'amc-hospitality'
  | 'amc-society'
  | 'about-us'
  | 'our-mission'
  | 'contact'
  | 'testimonials'
  | 'blog'
  | 'how-it-works'
  | 'faq'
  | 'privacy-policy'
  | 'terms'
  | 'login'
  | 'profile'
  | 'search'
  | 'bookings'
  | 'menu';

const seoMeta: Record<PageType, { title: string; description: string }> = {
  'home': {
    title: 'VisvasaHome — Trusted Local Services | Verified Professionals Across India',
    description: 'Book verified local professionals for home repair, plumbing, electrical, cleaning, painting, AC service, beauty, wellness, and more. VisvasaHome — founded by Kunal Mittal — is India\'s trusted local services ecosystem with 10,000+ completed services in 20+ cities.',
  },
  'register-contractor': {
    title: 'Register as Contractor | Join VisvasaHome Professional Network',
    description: 'Join VisvasaHome\'s verified contractor network. Grow your business with verified customer leads, professional support, and fair earnings. Register today.',
  },
  'get-started-customer': {
    title: 'Book a Service | VisvasaHome — Verified Local Professionals',
    description: 'Book verified local professionals for home repair, maintenance, cleaning, beauty, wellness, appliance repair, and more. Transparent pricing, service warranty included.',
  },
  'join-professional': {
    title: 'Join as Professional | VisvasaHome Contractor Program',
    description: 'Become a verified professional on VisvasaHome. Access consistent work, training, support, and career-building opportunities across 20+ cities.',
  },
  'professional-register': {
    title: 'Register as Professional | Earn ₹30,000–₹90,000/Month | VisvasaHome Partner Program',
    description: 'Join VisvasaHome as a verified professional partner. Register FREE as electrician, plumber, AC technician, carpenter, cleaner, beauty expert, or home repair specialist. Earn ₹30,000–₹90,000/month with AMC income, fair pricing, free training, and verified badge. India\'s most trusted local services professional network.',
  },
  'benefits': {
    title: 'Contractor Benefits | VisvasaHome Professional Network',
    description: 'Discover the benefits of joining VisvasaHome. Regular work, fair pay, training resources, and a supportive professional community.',
  },
  'training-support': {
    title: 'Training & Support | VisvasaHome Professionals',
    description: 'Professional development programs, quality training, and ongoing support for VisvasaHome contractors. Build your skills and grow your career.',
  },
  'success-stories': {
    title: 'Success Stories | VisvasaHome Contractors',
    description: 'Real stories from contractors who have built successful careers through the VisvasaHome platform.',
  },
  'amc-office': {
    title: 'Office AMC Services | Annual Maintenance Contract for Offices',
    description: 'Comprehensive Annual Maintenance Contracts for office spaces. Scheduled maintenance, priority support, and transparent pricing from VisvasaHome.',
  },
  'amc-home': {
    title: 'Home AMC Plans | Annual Home Maintenance Contract India',
    description: 'Annual Maintenance Contracts for homes in India. Complete home maintenance with priority service and transparent pricing. Plans for 1BHK to villas.',
  },
  'amc-commercial': {
    title: 'Commercial AMC Services | Business Maintenance Contracts',
    description: 'Annual Maintenance Contracts for commercial properties. Reliable maintenance for retail stores, showrooms, and commercial establishments.',
  },
  'amc-industrial': {
    title: 'Industrial AMC Services | Factory & Warehouse Maintenance',
    description: 'Specialized Annual Maintenance Contracts for industrial facilities. Expert maintenance for manufacturing plants, warehouses, and industrial properties.',
  },
  'amc-healthcare': {
    title: 'Healthcare AMC Services | Hospital & Clinic Maintenance',
    description: 'Compliant Annual Maintenance Contracts for healthcare facilities. Specialized maintenance for hospitals, clinics, and medical centers.',
  },
  'amc-educational': {
    title: 'Educational AMC Services | School & College Maintenance',
    description: 'Comprehensive Annual Maintenance Contracts for educational institutions. Complete campus maintenance for schools, colleges, and universities.',
  },
  'amc-hospitality': {
    title: 'Hospitality AMC Services | Hotel & Resort Maintenance',
    description: 'Premium Annual Maintenance Contracts for hotels, resorts, and hospitality properties. Guest-experience focused maintenance solutions.',
  },
  'amc-society': {
    title: 'Society AMC Services | Residential Society Maintenance',
    description: 'Annual Maintenance Contracts for residential societies and apartment complexes. Complete common area and building maintenance.',
  },
  'about-us': {
    title: 'About VisvasaHome | Founded by Kunal Mittal | Jaipur, India',
    description: 'Learn about VisvasaHome — India\'s trusted local services ecosystem founded by Kunal Mittal in Jaipur. Our story, values, team, and commitment to trust-driven services.',
  },
  'our-mission': {
    title: 'Our Mission | VisvasaHome — Trust, Delivered Locally',
    description: 'VisvasaHome\'s mission is to make local services organized, accountable, and dependable. Building trust between communities and verified local professionals.',
  },
  'contact': {
    title: 'Contact Us | VisvasaHome — Get in Touch',
    description: 'Contact VisvasaHome for service bookings, AMC enquiries, contractor registration, or any questions. Call, WhatsApp, or email — we respond within 4 hours.',
  },
  'testimonials': {
    title: 'Customer Reviews | VisvasaHome — Real Experiences',
    description: 'Read verified customer reviews and testimonials for VisvasaHome services across India. 4.8/5 rating from 10,000+ completed services.',
  },
  'blog': {
    title: 'Home Maintenance Tips & Guides | VisvasaHome Blog',
    description: 'Expert home maintenance tips, guides, and seasonal checklists from VisvasaHome. Learn about plumbing, electrical safety, cleaning, pest control, and more.',
  },
  'how-it-works': {
    title: 'How It Works | VisvasaHome Service Process',
    description: 'See how VisvasaHome connects you with verified professionals. Simple 5-step booking process with transparency, accountability, and service warranty.',
  },
  'faq': {
    title: 'FAQ | Frequently Asked Questions | VisvasaHome',
    description: 'Answers to the most common questions about VisvasaHome services, AMC plans, contractor registration, pricing, and the booking process.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | VisvasaHome',
    description: 'VisvasaHome\'s privacy policy. How we collect, use, and protect your personal information on our local services platform.',
  },
  'terms': {
    title: 'Terms of Service | VisvasaHome',
    description: 'Terms and conditions governing the use of VisvasaHome\'s platform, services, and professional network.',
  },
  'login': {
    title: 'Login | VisvasaHome',
    description: 'Login to your VisvasaHome account to manage bookings and access services.',
  },
  'profile': {
    title: 'My Profile | VisvasaHome',
    description: 'Manage your VisvasaHome account, bookings, and preferences.',
  },
  'search': {
    title: 'Browse Services | VisvasaHome',
    description: 'Browse all available services on VisvasaHome.',
  },
  'bookings': {
    title: 'My Bookings | VisvasaHome',
    description: 'View and manage your service bookings.',
  },
  'menu': {
    title: 'Menu | VisvasaHome',
    description: 'Explore VisvasaHome services and features.',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const savedPhone = localStorage.getItem('visvasahome_user_phone');
    if (savedPhone) {
      setIsAuthenticated(true);
      setUserPhone(savedPhone);
    }
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMobileMenu(false);
  }, [currentPage]);

  const navigate = (page: PageType) => setCurrentPage(page);

  const handleLoginSuccess = (phoneNumber: string) => {
    setIsAuthenticated(true);
    setUserPhone(phoneNumber);
    localStorage.setItem('visvasahome_user_phone', phoneNumber);
    navigate('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserPhone('');
    localStorage.removeItem('visvasahome_user_phone');
    navigate('home');
  };

  const meta = seoMeta[currentPage] || seoMeta['home'];

  const commonHeaderProps = {
    onRegisterContractor: () => navigate('professional-register'),
    onBookService: () => navigate('get-started-customer'),
    selectedLocation,
    onLocationSelect: setSelectedLocation,
    onAMCOffice: () => navigate('amc-office'),
    onAMCHome: () => navigate('amc-home'),
    onAMCCommercial: () => navigate('amc-commercial'),
    onAMCIndustrial: () => navigate('amc-industrial'),
    onAMCHealthcare: () => navigate('amc-healthcare'),
    onAMCEducational: () => navigate('amc-educational'),
    onAMCHospitality: () => navigate('amc-hospitality'),
    onAMCSociety: () => navigate('amc-society'),
    onHome: () => navigate('home'),
  };

  // Login page
  if (currentPage === 'login') {
    return <AuthPage onLoginSuccess={handleLoginSuccess} onBack={() => navigate('home')} />;
  }

  // Menu page (redirect to home for now)
  if (currentPage === 'menu') {
    navigate('home');
    return null;
  }

  // Profile page
  if (currentPage === 'profile') {
    if (!isAuthenticated) {
      navigate('login');
      return null;
    }
    return (
      <>
        <SEO title="My Profile | VisvasaHome" description="Manage your VisvasaHome account, bookings, and preferences." />
        <UserProfilePage
          phoneNumber={userPhone}
          onLogout={handleLogout}
          onNavigate={(page) => navigate(page as PageType)}
        />
        <MobileBottomNav
          currentPage={currentPage}
          onNavigate={(page) => navigate(page as PageType)}
          onMenuOpen={() => setShowMobileMenu(true)}
        />
      </>
    );
  }

  // Search/Services page
  if (currentPage === 'search') {
    return (
      <>
        <SEO title="Browse Services | VisvasaHome" description="Browse all available services on VisvasaHome." />
        <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
          <Header
            {...commonHeaderProps}
            onNavigate={(page) => navigate(page as PageType)}
            isAuthenticated={isAuthenticated}
            onLogin={() => navigate('login')}
            onProfile={() => navigate('profile')}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Services</h1>
            <ServicesOffered onServiceClick={() => navigate('get-started-customer')} />
          </div>
        </div>
        <MobileBottomNav
          currentPage={currentPage}
          onNavigate={(page) => navigate(page as PageType)}
          onMenuOpen={() => setShowMobileMenu(true)}
        />
      </>
    );
  }

  // Bookings page (placeholder)
  if (currentPage === 'bookings') {
    if (!isAuthenticated) {
      navigate('login');
      return null;
    }
    return (
      <>
        <SEO title="My Bookings | VisvasaHome" description="View and manage your service bookings." />
        <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 pt-12 pb-8 lg:pt-8">
            <div className="max-w-md mx-auto">
              <h1 className="text-white text-2xl font-bold">My Bookings</h1>
            </div>
          </div>
          <div className="max-w-md mx-auto px-6 py-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">No bookings yet</h2>
              <p className="text-gray-600 mb-6">Book your first service to get started</p>
              <button
                onClick={() => navigate('get-started-customer')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse Services
              </button>
            </div>
          </div>
        </div>
        <MobileBottomNav
          currentPage={currentPage}
          onNavigate={(page) => navigate(page as PageType)}
          onMenuOpen={() => setShowMobileMenu(true)}
        />
      </>
    );
  }

  if (currentPage === 'register-contractor') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <RegisterContractor onBack={() => navigate('home')} />
      </>
    );
  }

  if (currentPage === 'get-started-customer') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <GetStartedCustomer onBack={() => navigate('home')} selectedLocation={selectedLocation} />
      </>
    );
  }

  if (currentPage === 'join-professional') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <JoinProfessional onBack={() => navigate('home')} onRegister={() => navigate('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'professional-register') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <ProfessionalRegisterPage onBack={() => navigate('home')} onRegister={() => navigate('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'benefits') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <BenefitsPage onBack={() => navigate('home')} onRegister={() => navigate('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'training-support') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <TrainingSupport onBack={() => navigate('home')} onRegister={() => navigate('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'success-stories') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <SuccessStories onBack={() => navigate('home')} onRegister={() => navigate('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'amc-office') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCOffice onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-home') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCHome onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-commercial') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCCommercial onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-industrial') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCIndustrial onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-healthcare') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCHealthcare onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-educational') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCEducational onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-hospitality') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCHospitality onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-society') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AMCSociety onBack={() => navigate('home')} onBookNow={() => navigate('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'about-us') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <AboutUsPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'our-mission') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <OurMissionPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'contact') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <ContactPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'testimonials') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <TestimonialsPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'blog') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <BlogPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'how-it-works') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <HowItWorksPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'faq') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <FAQPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'privacy-policy') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <PrivacyPolicyPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <SEO title={meta.title} description={meta.description} />
        <TermsPage onBack={() => navigate('home')} onNavigate={(page) => navigate(page as PageType)} />
      </>
    );
  }

  // Home Page
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema, serviceSchema, websiteSchema],
  };

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SEO
        title={meta.title}
        description={meta.description}
        structuredData={homeStructuredData}
      />
      <Header
        {...commonHeaderProps}
        onNavigate={(page) => navigate(page as PageType)}
        isAuthenticated={isAuthenticated}
        onLogin={() => navigate('login')}
        onProfile={() => navigate('profile')}
      />
      <Hero onGetStarted={() => navigate('get-started-customer')} onRegisterContractor={() => navigate('professional-register')} />
      <MobileContactBar />
      <ServicesOffered onServiceClick={() => navigate('get-started-customer')} />
      <Differentiation />
      <ForContractors onRegisterContractor={() => navigate('professional-register')} onProfessionalRegister={() => navigate('professional-register')} />
      <CTASection onGetStarted={() => navigate('get-started-customer')} onRegisterContractor={() => navigate('professional-register')} />
      <Footer
        onNavigate={(page) => navigate(page as PageType)}
        onRegisterContractor={() => navigate('professional-register')}
      />
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={(page) => navigate(page as PageType)}
        onMenuOpen={() => setShowMobileMenu(true)}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}