import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, MapPin } from 'lucide-react';
import { Language, Translation } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/212682199993?text=${encodeURIComponent(
    lang === 'ar'
      ? 'السلام عليكم، أود طلب خدمة توصيل في أسفي من فضلكم.'
      : 'Bonjour Safi Express Delivery, je souhaite commander une livraison à Safi.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top micro bar with real Google Maps business NAP information */}
      <div className="bg-orange-600 text-white text-xs py-1.5 px-4 sm:px-8 border-b border-orange-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>أسفي، المغرب · Safi, Morocco</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline opacity-60">·</span>
            <span className="hidden sm:inline font-mono">{t.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+212682199993"
              className="flex items-center gap-1 hover:underline font-mono font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>+212 682-199993</span>
            </a>
            <span aria-hidden="true" className="opacity-60">·</span>
            <a
              href="mailto:saidlhamri2001715@gmail.com"
              className="hidden md:inline hover:underline font-mono text-[11px] opacity-90"
            >
              saidlhamri2001715@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav links) - Zone 3 (1 primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18.5" cy="17.5" r="3.5" />
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="15" cy="5" r="1" />
              <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-tight">
              Safi Express
            </span>
            <span className="text-[11px] text-orange-400 font-medium block leading-tight">
              {t.brandTagline}
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.services}
          </a>
          <a
            href="#rates"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#coverage"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.coverage}
          </a>
          <a
            href="#tracking"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.tracking}
          </a>
          <a
            href="#verification"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Language switch */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setLang('ar')}
              className={`px-2 py-1 rounded font-medium transition-colors ${
                lang === 'ar' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="العربية"
            >
              عربي
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded font-medium transition-colors ${
                lang === 'fr' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded font-medium transition-colors ${
                lang === 'en' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Primary Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>{t.nav.orderNow}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-orange-400 border-b border-slate-800/80 font-medium"
          >
            {t.nav.services}
          </a>
          <a
            href="#rates"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-orange-400 border-b border-slate-800/80 font-medium"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#coverage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-orange-400 border-b border-slate-800/80 font-medium"
          >
            {t.nav.coverage}
          </a>
          <a
            href="#tracking"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-orange-400 border-b border-slate-800/80 font-medium"
          >
            {t.nav.tracking}
          </a>
          <a
            href="#verification"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-orange-400 font-medium"
          >
            {t.nav.contact}
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 bg-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.orderNow}</span>
            </a>
            <a
              href="tel:+212682199993"
              className="w-full text-center py-2.5 px-4 bg-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callNow} (0682199993)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
