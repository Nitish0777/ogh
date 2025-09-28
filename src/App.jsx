import React from 'react';
import Header from './components/Header';
import CarouselBanner from './components/CarouselBanner';
import ServiceCards from './components/ServiceCards';
import HealthcareOverview from './components/HealthcareOverview';
import LocationsSection from './components/LocationSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/partnerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <CarouselBanner />
      <ServiceCards />
      <HealthcareOverview />
      <LocationsSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;