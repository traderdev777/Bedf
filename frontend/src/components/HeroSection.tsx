'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, ChevronDown, Compass } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-bedf-lightBg to-white dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 text-navy-950 dark:text-white transition-colors duration-300">
      {/* Background Hero Visual with Balanced Overlays for Both Light & Dark */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/suvarna_vidhana_soudha.svg"
          alt="Suvarna Vidhana Soudha Belagavi"
          fill
          priority
          className="object-cover opacity-[0.06] dark:opacity-25 scale-105 transition-all duration-1000 ease-out"
        />
        {/* Soft Radial Gradient for Light & Dark Readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 dark:from-navy-800/40 via-transparent to-transparent" />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[linear-gradient(to_right,#0B2D5B_1px,transparent_1px),linear-gradient(to_bottom,#0B2D5B_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Top Official Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50/90 dark:bg-white/10 backdrop-blur-md border border-navy-200/60 dark:border-white/15 text-xs font-semibold text-navy-900 dark:text-gray-200 mb-8 animate-fadeIn shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="tracking-wider uppercase text-[11px] font-bold text-navy-900 dark:text-gold-400">
            {t('Belagavi Economic Development Foundation', 'ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ')}
          </span>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-gray-600 dark:text-gray-300 text-[11px] hidden sm:inline">
            {t('Independent Regional Initiative', 'ಸ್ವತಂತ್ರ ಪ್ರಾದೇಶಿಕ ಉಪಕ್ರಮ')}
          </span>
        </div>

        {/* Word-by-Word Kinetic Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] max-w-5xl">
          <span className="block text-navy-950 dark:text-white">
            {t('BUILDING BELAGAVI.', 'ಬೆಳಗಾವಿ ನಿರ್ಮಾಣ.')}
          </span>
          <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 dark:from-gold-300 dark:via-gold-400 dark:to-amber-500 bg-clip-text text-transparent">
            {t('EMPOWERING THE FUTURE.', 'ಉಜ್ವಲ ಭವಿಷ್ಯ.')}
          </span>
        </h1>

        {/* Thin Gold Precision Underline Accent */}
        <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-amber-500 rounded-full my-6 shadow-sm shadow-gold-500/30" />

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-base sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
          {t(
            'Connecting industries, technology, investment, innovation and talent to unlock the economic potential of Belagavi and North Karnataka.',
            'ಕೈಗಾರಿಕೆ, ತಂತ್ರಜ್ಞಾನ, ಹೂಡಿಕೆ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಪ್ರತಿಭೆಯನ್ನು ಬೆಸೆದು ಬೆಳಗಾವಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕದ ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯವನ್ನು ಜಾಗೃತಗೊಳಿಸುವುದು.'
          )}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/#introduction"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy-900 text-white hover:bg-navy-850 dark:bg-white dark:text-navy-950 dark:hover:bg-gray-100 font-extrabold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
          >
            <span>{t('Explore Our Vision', 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ')}</span>
            <Compass className="w-4 h-4 text-gold-400 dark:text-navy-900 group-hover:rotate-45 transition-transform" />
          </Link>

          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black text-sm transition-all duration-300 shadow-lg hover:shadow-gold-500/20 hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>{t('Join BEDF Network', 'ಬಿಇಡಿಎಫ್ ಜಾಲಕ್ಕೆ ಸೇರಿ')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Direct Contact Pill */}
        <div className="mt-12 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{t('Official Hotline:', 'ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ:')}</span>
            <a
              href="tel:+919019088160"
              className="text-navy-900 dark:text-gold-400 font-bold hover:underline"
            >
              +91 901 908 8160
            </a>
          </span>
          <span>•</span>
          <a
            href="https://wa.me/919019088160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <Link href="/#introduction" aria-label="Scroll Down">
          <ChevronDown className="w-6 h-6 text-gold-500 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
