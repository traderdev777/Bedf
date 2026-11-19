'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { INITIATIVES_DATA, InitiativeItem } from '@/data/bedfContent';
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Users, 
  Handshake, 
  ExternalLink 
} from 'lucide-react';

export default function InitiativesPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Aerospace', 'Startups', 'Education', 'Investment', 'Research', 'Trade'];

  const filtered = INITIATIVES_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('Action Programmes & Roadmaps', 'ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {t('Foundation Initiatives', 'ಪ್ರತಿಷ್ಠಾನದ ಉಪಕ್ರಮಗಳು')}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t(
              'Explore our 7 structured programmes turning regional ambition into measurable economic outcomes. Every initiative features verified progress updates and citizen participation pathways.',
              'ಪ್ರಾದೇಶಿಕ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯನ್ನು ನೈಜ ಆರ್ಥಿಕ ಫಲಿತಾಂಶಗಳನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ 7 ಪ್ರಮುಖ ಉಪಕ್ರಮಗಳು. ಪ್ರತಿಯೊಂದು ಯೋಜನೆಯು ಪಾರದರ್ಶಕ ಪ್ರಗತಿ ವಿವರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಹಭಾಗಿತ್ವವನ್ನು ಒಳಗೊಂಡಿದೆ.'
            )}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 border-transparent shadow-sm'
                  : 'bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-navy-800 hover:border-gold-500/40'
              }`}
            >
              {cat === 'All' ? t('All Initiatives', 'ಎಲ್ಲಾ ಉಪಕ್ರಮಗಳು') : cat}
            </button>
          ))}
        </div>

        {/* Detailed Initiatives List */}
        <div className="space-y-8">
          {filtered.map((init) => (
            <div
              key={init.id}
              id={init.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm hover:shadow-md transition-shadow space-y-6"
            >
              {/* Top Bar: Category & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gray-200 border border-navy-100 dark:border-navy-700">
                    {language === 'kn' ? init.category_kn : init.category}
                  </span>
                  <span className="text-xs text-gray-400">• Programme ID: {init.id}</span>
                </div>

                <div>
                  {init.status === 'Active' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t('Status: Active', 'ಸ್ಥಿತಿ: ಸಕ್ರಿಯ')}</span>
                    </span>
                  ) : init.status === 'Under Development' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t('Status: Under Development', 'ಸ್ಥಿತಿ: ಅಭಿವೃದ್ಧಿ ಹಂತದಲ್ಲಿದೆ')}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t('Status: Proposed Opportunity', 'ಸ್ಥಿತಿ: ಪ್ರಸ್ತಾವಿತ')}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Short Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white">
                  {language === 'kn' ? init.title_kn : init.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {language === 'kn' ? init.shortDesc_kn : init.shortDesc}
                </p>
              </div>

              {/* 2-Col: Objectives & Progress */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-navy-800 text-xs sm:text-sm">
                {/* Objectives */}
                <div className="space-y-3">
                  <h4 className="font-bold text-navy-950 dark:text-white uppercase tracking-wider text-xs">
                    {t('Program Deliverables & Objectives', 'ಪ್ರಮುಖ ಉದ್ದೇಶಗಳು')}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'kn' ? init.objectives_kn : init.objectives).map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress Log */}
                <div className="space-y-3 p-4 rounded-2xl bg-gray-50 dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800">
                  <h4 className="font-bold text-navy-950 dark:text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{t('Audited Progress Log', 'ಪ್ರಗತಿ ವಿವರ')}</span>
                  </h4>
                  <div className="space-y-2">
                    {init.progressUpdates.map((update, idx) => (
                      <div key={idx} className="border-l-2 border-gold-500 pl-3 py-0.5 text-xs">
                        <span className="font-mono font-bold text-gold-600 dark:text-gold-400 block text-[11px]">
                          {update.date}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'kn' ? update.update_kn : update.update}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions: Participation & Join */}
              <div className="pt-4 border-t border-gray-100 dark:border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 max-w-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {t('Participation Scope: ', 'ಸಹಭಾಗಿತ್ವದ ವ್ಯಾಪ್ತಿ: ')}
                  </span>
                  {language === 'kn' ? init.participationScope_kn : init.participationScope}
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <Link
                    href={`/join?tab=volunteer&initiative=${init.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-white text-xs font-bold hover:bg-gold-500 hover:text-navy-950 transition-colors"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>{t('Volunteer for This', 'ಸ್ವಯಂಸೇವಕರಾಗಿ')}</span>
                  </Link>

                  <Link
                    href={`/join?tab=partner&initiative=${init.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors"
                  >
                    <Handshake className="w-3.5 h-3.5" />
                    <span>{t('Partner with Us', 'ಪಾಲುದಾರರಾಗಿ')}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

