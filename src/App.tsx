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
import { useState } from 'react';

type PageType = 'home' | 'register-contractor' | 'get-started-customer' | 'join-professional' | 'benefits' | 'training-support' | 'success-stories' | 'amc-office' | 'amc-home' | 'amc-commercial' | 'amc-industrial' | 'amc-healthcare' | 'amc-educational' | 'amc-hospitality' | 'amc-society' | 'about-us' | 'our-mission';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  if (currentPage === 'register-contractor') {
    return <RegisterContractor onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'get-started-customer') {
    return <GetStartedCustomer onBack={() => setCurrentPage('home')} selectedLocation={selectedLocation} />;
  }

  if (currentPage === 'join-professional') {
    return <JoinProfessional onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />;
  }

  if (currentPage === 'benefits') {
    return <BenefitsPage onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />;
  }

  if (currentPage === 'training-support') {
    return <TrainingSupport onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />;
  }

  if (currentPage === 'success-stories') {
    return <SuccessStories onBack={() => setCurrentPage('home')} onRegister={() => setCurrentPage('register-contractor')} />;
  }

  if (currentPage === 'amc-office') {
    return <AMCOffice onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-home') {
    return <AMCHome onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-commercial') {
    return <AMCCommercial onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-industrial') {
    return <AMCIndustrial onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-healthcare') {
    return <AMCHealthcare onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-educational') {
    return <AMCEducational onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-hospitality') {
    return <AMCHospitality onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'amc-society') {
    return <AMCSociety onBack={() => setCurrentPage('home')} onBookNow={() => setCurrentPage('get-started-customer')} />;
  }

  if (currentPage === 'about-us') {
    return <AboutUsPage onBack={() => setCurrentPage('home')} onNavigate={(page: PageType) => setCurrentPage(page)} />;
  }

  if (currentPage === 'our-mission') {
    return <OurMissionPage onBack={() => setCurrentPage('home')} onNavigate={(page: PageType) => setCurrentPage(page)} />;
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
    </div>
  );
}