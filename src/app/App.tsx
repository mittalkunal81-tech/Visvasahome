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
import { useState, useEffect } from 'react';

type PageType =
  | 'home'
  | 'register-contractor'
  | 'get-started-customer'
  | 'join-professional'
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
  | 'terms';

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
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: PageType) => setCurrentPage(page);
  const meta = seoMeta[currentPage];

  const commonHeaderProps = {
    onRegisterContractor: () => navigate('register-contractor'),
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
  return (
    <div className="min-h-screen bg-white">
      <SEO title={meta.title} description={meta.description} />
      <Header
        {...commonHeaderProps}
        onNavigate={(page) => navigate(page as PageType)}
      />
      <Hero onGetStarted={() => navigate('get-started-customer')} onRegisterContractor={() => navigate('register-contractor')} />
      <ServicesOffered onServiceClick={() => navigate('get-started-customer')} />
      <Differentiation />
      <ForContractors onRegisterContractor={() => navigate('register-contractor')} />
      <CTASection onGetStarted={() => navigate('get-started-customer')} onRegisterContractor={() => navigate('register-contractor')} />
      <Footer
        onNavigate={(page) => navigate(page as PageType)}
      />
    </div>
  );
}