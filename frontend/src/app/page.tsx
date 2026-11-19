'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import StatsCounter from '@/components/StatsCounter';
import BelagaviInteractiveMap from '@/components/BelagaviInteractiveMap';
import SectorCards from '@/components/SectorCards';
import InnovationShowcase from '@/components/InnovationShowcase';
import InitiativesSection from '@/components/InitiativesSection';
import InvestSection from '@/components/InvestSection';
import JoinCards from '@/components/JoinCards';
import LatestInsights from '@/components/LatestInsights';
import FinalCTA from '@/components/FinalCTA';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Experience */}
      <HeroSection />

      {/* 2. Introduction to BEDF */}
      <IntroSection />

      {/* 3. Our Vision in Verified Numbers */}
      <StatsCounter />

      {/* 4. Signature Feature: Belagavi Interactive Map Section */}
      <section className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BelagaviInteractiveMap />
        </div>
      </section>

      {/* 5. The Future of Belagavi – 7 Sector Cards */}
      <SectorCards />

      {/* 6. Innovation Showcase – Future Opportunities */}
      <InnovationShowcase />

      {/* 7. Action Initiatives – Turning Vision into Action */}
      <InitiativesSection />

      {/* 8. Invest in Belagavi */}
      <InvestSection />

      {/* 9. Join the BEDF Network */}
      <JoinCards />

      {/* 10. Latest Insights & Research */}
      <LatestInsights />

      {/* 11. Final Call to Action */}
      <FinalCTA />
    </div>
  );
}

