import React from "react";
import CarouselBanner from "../components/CarouselBanner";
import ServiceCards from "../components/ServiceCards";
import HealthcareOverview from "../components/HealthcareOverview";
import LocationsSection from "../components/LocationSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/partnerSection";

function Home() {
  return (
    <>
      <CarouselBanner />
      <ServiceCards />
      <HealthcareOverview />
      <LocationsSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;
