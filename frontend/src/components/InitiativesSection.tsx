'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { INITIATIVES_DATA, InitiativeItem } from '@/data/bedfContent';
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function InitiativesSection() {
  const { t, language } = useLanguage();
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredInitiatives = INITIATIVES_DATA.filter((item) => {
    if (filterStatus === 'All') return true;
    return item.status === filterStatus;
  });

  const getStatusBadge = (status: string, status_kn: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
      case 'Under Development':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
            <Clock className="w-3 h-3" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
      case 'Proposed':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30">
            <Sparkles className="w-3 h-3" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
    }
  };

  return (
    <section id="initiatives" className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('Action Programmes & Roadmaps', 'ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
              {t('Turning Vision into Action', 'ದೃಷ್ಟಿಕೋನವನ್ನು ಕ್ರಿಯೆಯಾಗಿಸುವ ಹಾದಿ')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {t(
                'BEDF advances regional development through structured initiatives. Each project features clear milestones, participation opportunities, and progress governance.',
                'ಬಿಇಡಿಎಫ್ ಸ್ಪಷ್ಟ ಉದ್ದೇಶಗಳೊಂದಿಗೆ ಪ್ರಾದೇಶಿಕ ಉಪಕ್ರಮಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತದೆ. ಪ್ರತಿ ಯೋಜನೆಯು ಸಾರ್ವಜನಿಕ ಸಹಭಾಗಿತ್ವ ಮತ್ತು ಪಾರದರ್ಶಕ ಪ್ರಗತಿ ಪರಿಶೀಲನೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.'
              )}
            </p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 bg-white dark:bg-navy-900 p-1.5 rounded-2xl border border-gray-200 dark:border-navy-800 self-start md:self-auto text-xs font-semibold">
            {['All', 'Active', 'Under Development', 'Proposed'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  filterStatus === st
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {st === 'All' ? t('All', 'ಎಲ್ಲಾ') : st}
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200/80 dark:border-navy-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
                    {language === 'kn' ? item.category_kn : item.category}
                  </span>
                  {getStatusBadge(item.status, item.status_kn)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-navy-950 dark:text-white leading-snug">
                  {language === 'kn' ? item.title_kn : item.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2.5 leading-relaxed">
                  {language === 'kn' ? item.shortDesc_kn : item.shortDesc}
                </p>

                {/* Key Objectives Preview */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-navy-800 space-y-2">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gold-600 dark:text-gold-400">
                    {t('Key Deliverables', 'ಪ್ರಮುಖ ಉದ್ದೇಶಗಳು')}
                  </span>
                  <ul className="space-y-1.5">
                    {(language === 'kn' ? item.objectives_kn : item.objectives).slice(0, 2).map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between text-xs">
                <span className="text-gray-400 text-[11px]">
                  {t('Participation: Open', 'ಸಹಭಾಗಿತ್ವ: ಮುಕ್ತ')}
                </span>

                <Link
                  href={`/initiatives#${item.slug}`}
                  className="font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 inline-flex items-center gap-1 group"
                >
                  <span>{t('Learn More', 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ')}</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Propose Initiative */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              {t('Have a strategic initiative for Belagavi?', 'ಬೆಳಗಾವಿಗಾಗಿ ಕಾರ್ಯತಂತ್ರದ ಉಪಕ್ರಮವಿದೆಯೇ?')}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              {t(
                'BEDF welcomes collaboration proposals from universities, industrial associations, and citizen groups.',
                'ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು, ಕೈಗಾರಿಕಾ ಸಂಘಗಳು ಮತ್ತು ನಾಗರಿಕ ವೇದಿಕೆಗಳಿಂದ ಪ್ರಸ್ತಾವನೆಗಳನ್ನು ಸ್ವಾಗತಿಸಲಾಗುತ್ತದೆ.'
              )}
            </p>
          </div>

          <Link
            href="/join?tab=partner"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm transition-colors shadow-md"
          >
            {t('Propose Collaboration', 'ಸಹಯೋಗ ಪ್ರಸ್ತಾಪಿಸಿ')}
          </Link>
        </div>
      </div>
    </section>
  );
}

