'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SECTORS_DATA, SectorItem } from '@/data/bedfContent';
import { 
  Cpu, 
  Plane, 
  Shield, 
  Cog, 
  Rocket, 
  GraduationCap, 
  TrendingUp, 
  ArrowUpRight, 
  X, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Plane,
  Shield,
  Cog,
  Rocket,
  GraduationCap,
  TrendingUp,
};

export default function SectorCards() {
  const { t, language } = useLanguage();
  const [activeModalSector, setActiveModalSector] = useState<SectorItem | null>(null);

  return (
    <section id="focus-sectors" className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('7 Strategic Focus Areas', '7 ಕಾರ್ಯತಂತ್ರದ ವಲಯಗಳು')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
              {t('Where Industry Meets Innovation', 'ಕೈಗಾರಿಕೆ ಮತ್ತು ನಾವೀನ್ಯತೆಯ ಸಂಗಮ')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {t(
                'Belagavi is transitioning from a traditional manufacturing hub into a high-technology powerhouse. Explore the seven pillars driving regional transformation.',
                'ಬೆಳಗಾವಿಯು ಸಾಂಪ್ರದಾಯಿಕ ಉತ್ಪಾದನಾ ಕೇಂದ್ರದಿಂದ ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನದ ಶಕ್ತಿಕೇಂದ್ರವಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತಿದೆ. ಪ್ರಾದೇಶಿಕ ಪರಿವರ್ತನೆಗೆ ಚಾಲನೆ ನೀಡುವ ಏಳು ಪ್ರಮುಖ ಸ್ತಂಭಗಳನ್ನು ತಿಳಿಯಿರಿ.'
              )}
            </p>
          </div>

          <Link
            href="/focus-areas"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors self-start md:self-auto"
          >
            <span>{t('View Detailed Sector Portfolios', 'ಸಮಗ್ರ ವಲಯ ವಿವರಣೆಗಳು')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 7 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_DATA.map((sector, index) => {
            const Icon = ICON_MAP[sector.icon] || Cpu;
            const isFeatured = index === 0 || index === 1; // AI & Aerospace get slight visual prominence

            return (
              <div
                key={sector.id}
                onClick={() => setActiveModalSector(sector)}
                className={`relative p-8 rounded-3xl cursor-pointer group transition-all duration-300 flex flex-col justify-between overflow-hidden border ${
                  isFeatured
                    ? 'bg-white dark:bg-navy-900 border-navy-200/80 dark:border-navy-700 shadow-md hover:shadow-xl hover:-translate-y-1.5'
                    : 'bg-white dark:bg-navy-900/80 border-gray-200/80 dark:border-navy-800 shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Gold Accent Hover Line at Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top Bar: Icon and Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-navy-50 dark:bg-navy-800 border border-navy-100 dark:border-navy-700 flex items-center justify-center text-navy-800 dark:text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-navy-700 flex items-center justify-center text-gray-400 group-hover:text-gold-500 group-hover:border-gold-500 transition-colors">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {language === 'kn' ? sector.title_kn : sector.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 mt-1">
                    {language === 'kn' ? sector.tagline_kn : sector.tagline}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed line-clamp-3">
                    {language === 'kn' ? sector.summary_kn : sector.summary}
                  </p>
                </div>

                {/* Bottom Stats Preview */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 dark:text-gray-400">
                    {language === 'kn' ? sector.stats[0].label_kn : sector.stats[0].label}
                  </span>
                  <span className="font-bold text-navy-900 dark:text-white group-hover:text-gold-500">
                    {sector.stats[0].value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sector Detail Modal */}
      {activeModalSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-navy-700 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalSector(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-500 hover:text-navy-950 dark:hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                {t('Strategic Focus Area Portfolio', 'ಕಾರ್ಯತಂತ್ರದ ವಲಯ ವಿವರಣೆ')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white mt-1">
                {language === 'kn' ? activeModalSector.title_kn : activeModalSector.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                {language === 'kn' ? activeModalSector.tagline_kn : activeModalSector.tagline}
              </p>
            </div>

            {/* Content Body */}
            <div className="mt-6 space-y-6 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-navy-950 dark:text-white text-base mb-1">
                  {t('Overview & Core Capabilities', 'ಅವಲೋಕನ ಮತ್ತು ಪ್ರಮುಖ ಸಾಮರ್ಥ್ಯಗಳು')}
                </h4>
                <p className="leading-relaxed">
                  {language === 'kn' ? activeModalSector.summary_kn : activeModalSector.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-950/60 border border-gray-100 dark:border-navy-800">
                <h4 className="font-bold text-navy-950 dark:text-white text-sm mb-1">
                  {t('The Belagavi Advantage', 'ಬೆಳಗಾವಿಯ ವಿಶಿಷ್ಟ ಪ್ರಯೋಜನ')}
                </h4>
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                  {language === 'kn' ? activeModalSector.belagaviAdvantage_kn : activeModalSector.belagaviAdvantage}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {activeModalSector.stats.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-navy-50 dark:bg-navy-800 text-center">
                    <span className="block text-base sm:text-lg font-black text-navy-900 dark:text-gold-400">
                      {s.value}
                    </span>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                      {language === 'kn' ? s.label_kn : s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Initiatives */}
              <div>
                <h4 className="font-bold text-navy-950 dark:text-white text-sm mb-2">
                  {t('Potential Initiatives & Programmes', 'ಪ್ರಮುಖ ಉಪಕ್ರಮಗಳು')}
                </h4>
                <ul className="space-y-1.5">
                  {(language === 'kn' ? activeModalSector.keyInitiatives_kn : activeModalSector.keyInitiatives).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collaboration Scope */}
              <div>
                <h4 className="font-bold text-navy-950 dark:text-white text-sm mb-2">
                  {t('Industry Collaboration Opportunities', 'ಕೈಗಾರಿಕಾ ಸಹಯೋಗದ ವ್ಯಾಪ್ತಿ')}
                </h4>
                <ul className="space-y-1.5">
                  {(language === 'kn' ? activeModalSector.collaborationScope_kn : activeModalSector.collaborationScope).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between gap-4">
              <Link
                href={`/contact?subject=${encodeURIComponent(`Enquiry for ${activeModalSector.title}`)}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
              >
                <span>{t('Initiate Sector Enquiry', 'ವಲಯವಾರು ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

