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
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  BarChart3,
  Layers
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

export default function FocusAreasPage() {
  const { t, language } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<SectorItem>(SECTORS_DATA[0]);

  const ActiveIcon = ICON_MAP[selectedSector.icon] || Cpu;

  return (
    <div className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('Strategic Pillars', 'ಕಾರ್ಯತಂತ್ರದ ಸ್ತಂಭಗಳು')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {t('Strategic Focus Areas', 'ಪ್ರಮುಖ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು')}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t(
              'Belagavi’s transformation into a multi-sector economic powerhouse is driven by seven specialized domains combining engineering heritage with future technologies.',
              'ಎಂಜಿನಿಯರಿಂಗ್ ಪರಂಪರೆ ಮತ್ತು ಭವಿಷ್ಯದ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಮೇಳೈಸಿದ ಏಳು ನಿರ್ದಿಷ್ಟ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು ಬೆಳಗಾವಿಯ ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಮುನ್ನಡೆಸುತ್ತಿವೆ.'
            )}
          </p>
        </div>

        {/* Horizontal Sector Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {SECTORS_DATA.map((sector) => {
            const Icon = ICON_MAP[sector.icon] || Cpu;
            const isSelected = selectedSector.id === sector.id;

            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 border-transparent shadow-md'
                    : 'bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-navy-800 hover:border-gold-500/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-gold-400 dark:text-navy-950' : 'text-gray-500'}`} />
                <span>{language === 'kn' ? sector.title_kn : sector.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector In-Depth Portfolio Card */}
        <div id={selectedSector.slug} className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-xl space-y-10">
          {/* Top Headline & Icon */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100 dark:border-navy-800">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                  {t('Sector Dossier', 'ವಲಯ ಕಡತ')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white mt-1">
                  {language === 'kn' ? selectedSector.title_kn : selectedSector.title}
                </h2>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                  {language === 'kn' ? selectedSector.tagline_kn : selectedSector.tagline}
                </p>
              </div>
            </div>

            <Link
              href={`/contact?subject=${encodeURIComponent(`Enquiry for ${selectedSector.title}`)}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm self-start md:self-auto flex-shrink-0"
            >
              <span>{t('Inquire About This Sector', 'ಈ ವಲಯದ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {selectedSector.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800 text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-black text-navy-950 dark:text-gold-400">
                  {stat.value}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  {language === 'kn' ? stat.label_kn : stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Left: Overview & Why it Matters */}
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white mb-2">
                  {t('Overview & Scope', 'ಅವಲೋಕನ ಮತ್ತು ವ್ಯಾಪ್ತಿ')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? selectedSector.summary_kn : selectedSector.summary}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white mb-2">
                  {t('Why It Matters for Regional Resurgence', 'ಪ್ರಾದೇಶಿಕ ಪುನರುಜ್ಜೀವನಕ್ಕೆ ಇದರ ಪ್ರಾಮುಖ್ಯತೆ')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? selectedSector.whyItMatters_kn : selectedSector.whyItMatters}
                </p>
              </div>
            </div>

            {/* Right: The Belagavi Advantage & Initiatives */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-navy-50 dark:bg-navy-950/80 border border-navy-100 dark:border-navy-800">
                <h3 className="text-base font-bold text-navy-950 dark:text-white mb-2">
                  {t('The Belagavi Advantage', 'ಬೆಳಗಾವಿಯ ವಿಶಿಷ್ಟ ಪ್ರಯೋಜನ')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? selectedSector.belagaviAdvantage_kn : selectedSector.belagaviAdvantage}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white mb-3">
                  {t('Key Initiatives & Flagship Projects', 'ಪ್ರಮುಖ ಉಪಕ್ರಮಗಳು')}
                </h3>
                <ul className="space-y-2">
                  {(language === 'kn' ? selectedSector.keyInitiatives_kn : selectedSector.keyInitiatives).map((init, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{init}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities Box */}
          <div className="pt-6 border-t border-gray-100 dark:border-navy-800">
            <h3 className="text-base font-bold text-navy-950 dark:text-white mb-3">
              {t('Opportunities for Industry & Academic Collaboration', 'ಕೈಗಾರಿಕಾ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಹಯೋಗದ ಅವಕಾಶಗಳು')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(language === 'kn' ? selectedSector.collaborationScope_kn : selectedSector.collaborationScope).map((collab, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950/60 border border-gray-100 dark:border-navy-800 text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>{collab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
