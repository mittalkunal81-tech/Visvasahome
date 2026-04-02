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
import { SEO } from './components/SEO';
import { useState } from 'react';

type PageType = 'home' | 'register-contractor' | 'get-started-customer' | 'join-professional' | 'benefits' | 'training-support' | 'success-stories' | 'amc-office' | 'amc-home' | 'amc-commercial' | 'amc-industrial' | 'amc-healthcare' | 'amc-educational' | 'amc-hospitality' | 'amc-society' | 'about-us' | 'our-mission';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  if (currentPage === 'register-contractor') {
    return (
      <>
        <SEO 
          title="Register as Contractor" 
          description="Join VisvasaHome's network of verified professionals. Grow your business with verified leads and trusted platform support."
        />
        <RegisterContractor onBack={() => setCurrentPage('home')} />
      </>
    );
  }

  if (currentPage === 'get-started-customer') {
    return (
      <>
        <SEO 
          title="Book a Service" 
          description="Book verified local professionals for home repair, maintenance, cleaning, beauty, wellness and more."
        />
        <GetStartedCustomer onBack={() => setCurrentPage('home')} selectedLocation={selectedLocation} />
      </>
    );
  }

  if (currentPage === 'join-professional') {
    return (
      <>
        <SEO 
          title="Join as Professional" 
          description="Become a verified contractor on VisvasaHome. Access training, support, and guaranteed work opportunities."
        />
        <JoinProfessional onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'benefits') {
    return (
      <>
        <SEO 
          title="Contractor Benefits" 
          description="Discover the benefits of joining VisvasaHome's professional network. Regular work, fair pricing, and business growth support."
        />
        <BenefitsPage onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'training-support') {
    return (
      <>
        <SEO 
          title="Training & Support" 
          description="Professional development programs and ongoing support for VisvasaHome contractors."
        />
        <TrainingSupport onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'success-stories') {
    return (
      <>
        <SEO 
          title="Success Stories" 
          description="Real stories from contractors who have grown their businesses with VisvasaHome."
        />
        <SuccessStories onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />
      </>
    );
  }

  if (currentPage === 'amc-office') {
    return (
      <>
        <SEO 
          title="Office AMC Services" 
          description="Annual Maintenance Contracts for office spaces. Comprehensive maintenance solutions with transparent pricing."
        />
        <AMCOffice onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-home') {
    return (
      <>
        <SEO 
          title="Home AMC Services" 
          description="Annual Maintenance Contracts for homes. Complete home maintenance with priority service and transparent pricing."
        />
        <AMCHome onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-commercial') {
    return (
      <>
        <SEO 
          title="Commercial AMC Services" 
          description="Annual Maintenance Contracts for commercial properties. Reliable maintenance solutions for businesses."
        />
        <AMCCommercial onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-industrial') {
    return (
      <>
        <SEO 
          title="Industrial AMC Services" 
          description="Annual Maintenance Contracts for industrial facilities. Specialized maintenance for manufacturing and warehouses."
        />
        <AMCIndustrial onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-healthcare') {
    return (
      <>
        <SEO 
          title="Healthcare AMC Services" 
          description="Annual Maintenance Contracts for healthcare facilities. Compliant maintenance solutions for hospitals and clinics."
        />
        <AMCHealthcare onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-educational') {
    return (
      <>
        <SEO 
          title="Educational AMC Services" 
          description="Annual Maintenance Contracts for educational institutions. Comprehensive maintenance for schools and colleges."
        />
        <AMCEducational onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-hospitality') {
    return (
      <>
        <SEO 
          title="Hospitality AMC Services" 
          description="Annual Maintenance Contracts for hotels and hospitality. Premium maintenance for guest-focused businesses."
        />
        <AMCHospitality onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'amc-society') {
    return (
      <>
        <SEO 
          title="Society AMC Services" 
          description="Annual Maintenance Contracts for residential societies and apartments. Complete common area maintenance."
        />
        <AMCSociety onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />
      </>
    );
  }

  if (currentPage === 'about-us') {
    return (
      <>
        <SEO 
          title="About Us" 
          description="Learn about VisvasaHome's mission to connect communities with trusted local service professionals."
        />
        <AboutUsPage onBack={() => setCurrentPage('home')} onNavigate={(page: PageType) => setCurrentPage(page)} />
      </>
    );
  }

  if (currentPage === 'our-mission') {
    return (
      <>
        <SEO 
          title="Our Mission" 
          description="Building trust in local services through verification, quality control, and transparent processes."
        />
        <OurMissionPage onBack={() => setCurrentPage('home')} onNavigate={(page: PageType) => setCurrentPage(page)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onRegisterContractor={() => setCurrentPage('register-contractor')} 
        onBookService={() => setCurrentPage('get-started-customer')}
        selectedLocation={selectedLocation}
        onLocationSelect={setSelectedLocation}
        onAMCOffice={() => setCurrentPage('amc-office')}
        onAMCHome={() => setCurrentPage('amc-home')}
        onAMCCommercial={() => setCurrentPage('amc-commercial')}
        onAMCIndustrial={() => setCurrentPage('amc-industrial')}
        onAMCHealthcare={() => setCurrentPage('amc-healthcare')}
        onAMCEducational={() => setCurrentPage('amc-educational')}
        onAMCHospitality={() => setCurrentPage('amc-hospitality')}
        onAMCSociety={() => setCurrentPage('amc-society')}
        onHome={() => setCurrentPage('home')}
      />
      <Hero onGetStarted={() => setCurrentPage('get-started-customer')} onRegisterContractor={() => setCurrentPage('register-contractor')} />
      <ServicesOffered onServiceClick={() => setCurrentPage('get-started-customer')} />
      <Differentiation />
      <ForContractors onRegisterContractor={() => setCurrentPage('register-contractor')} />
      <CTASection onGetStarted={() => setCurrentPage('get-started-customer')} onRegisterContractor={() => setCurrentPage('register-contractor')} />
      <Footer 
        onNavigate={(page: PageType) => setCurrentPage(page)}
      />
      <SEO />
    </div>
  );
}