"use client";

import Navbar from "@/components/layouts/navbar";
import HeroSection from "@/components/features/home/hero-section";
import StatsSection from "@/components/features/home/stats-section";
import WhyChooseUsSection from "@/components/features/home/why-choose-us-section";
import ProcessSection from "@/components/features/home/process-section";
import MenuSection from "@/components/features/home/menu-section";
import EventsSection from "@/components/features/home/events-section";
import JourneySection from "@/components/features/home/journey-section";
import TestimonialsSection from "@/components/features/home/testimonials-section";
import FaqSection from "@/components/features/home/faq-section";
import ContactSection from "@/components/features/home/contact-section";
import Footer from "@/components/layouts/footer";
import AwardsPartnersSection from "@/components/features/home/awards-partners-section";

export default function HomePage() {
  return (
    <main className="bg-crispy-light min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <MenuSection />
      <EventsSection />
      <JourneySection />
      <TestimonialsSection />
      <AwardsPartnersSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
