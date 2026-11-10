/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations, Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { OrderTracker } from './components/OrderTracker';
import { RateCalculator } from './components/RateCalculator';
import { CoverageMap } from './components/CoverageMap';
import { BusinessVerificationCard } from './components/BusinessVerificationCard';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const handleScrollToTracking = () => {
    const el = document.getElementById('tracking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Header & Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          t={t}
          lang={lang}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onScrollToTracking={handleScrollToTracking}
        />

        {/* 2. Core Services */}
        <Services
          t={t}
          lang={lang}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 3. Instant Rate Calculator */}
        <RateCalculator
          t={t}
          lang={lang}
        />

        {/* 4. Live Order Tracking */}
        <OrderTracker
          t={t}
          lang={lang}
        />

        {/* 5. Coverage Area in Safi */}
        <CoverageMap
          t={t}
          lang={lang}
        />

        {/* 6. Real Business Information (Google Maps Verification Hub) */}
        <BusinessVerificationCard
          t={t}
          lang={lang}
        />

        {/* 7. Testimonials & Social Proof */}
        <Testimonials
          t={t}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        lang={lang}
      />

      {/* Interactive Floating WhatsApp Dispatch Button */}
      <FloatingWhatsApp lang={lang} />

      {/* Direct Order Booking Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        t={t}
        lang={lang}
      />
    </div>
  );
}
