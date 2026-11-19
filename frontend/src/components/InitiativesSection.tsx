'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  Calendar,
  Milestone,
  ArrowUpRight
} from 'lucide-react';
import { TiltCard, ScrollReveal, PREMIUM_EASE } from '@/components/motion/MotionSystem';

export default function InitiativesSection() {
  const { t, language } = useLanguage();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');

  const filteredInitiatives = INITIATIVES_DATA.filter((item) => {
    if (filterStatus === 'All') return true;
    return item.status === filterStatus;
  });

  const getStatusBadge = (status: string, status_kn: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
      case 'Under Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
            <Clock className="w-3.5 h-3.5" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
      case 'Proposed':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'kn' ? status_kn : status}</span>
          </span>
        );
    }
  };

  return (
    <section id="initiatives" className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('Action Programmes & Roadmaps', 'ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು')}</span>
            </div>
            <h2 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
              {t('Turning Vision into Action', 'ದೃಷ್ಟಿಕೋನವನ್ನು ಕ್ರಿಯೆಯಾಗಿಸುವ ಹಾದಿ')}
            </h2>
            <p className="font-sans text-body-fluid text-gray-600 dark:text-gray-300">
              {t(
                'BEDF advances regional development through structured initiatives. Each project features clear milestones, participation opportunities, and progress governance.',
                'ಬಿಇಡಿಎಫ್ ಸ್ಪಷ್ಟ ಉದ್ದೇಶಗಳೊಂದಿಗೆ ಪ್ರಾದೇಶಿಕ ಉಪಕ್ರಮಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತದೆ. ಪ್ರತಿ ಯೋಜನೆಯು ಸಾರ್ವಜನಿಕ ಸಹಭಾಗಿತ್ವ ಮತ್ತು ಪಾರದರ್ಶಕ ಪ್ರಗತಿ ಪರಿಶೀಲನೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.'
              )}
            </p>
          </div>

          {/* Mode Switcher & Filter Controls */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-full bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 text-xs font-bold shadow-sm">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  viewMode === 'timeline'
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {t('Interactive Timeline', 'ಕಾಲಾನುಕ್ರಮ')}
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  viewMode === 'grid'
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {t('Cards Grid', 'ಕಾರ್ಡ್ ಗ್ರಿಡ್')}
              </button>
            </div>

            {/* Status Filter Dropdown / Pills */}
            <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-navy-900 p-1 rounded-full border border-gray-200 dark:border-navy-800 text-xs font-semibold shadow-sm">
              {['All', 'Active', 'Under Development', 'Proposed'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1 rounded-full transition-all ${
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
        </ScrollReveal>

        {/* 1. Interactive Development Timeline Mode */}
        {viewMode === 'timeline' ? (
          <div className="relative py-8 max-w-5xl mx-auto">
            {/* Vertical Animated Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 dark:bg-navy-800">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: PREMIUM_EASE }}
                className="w-full bg-gradient-to-b from-gold-500 via-amber-500 to-navy-700"
              />
            </div>

            <div className="space-y-12">
              {filteredInitiatives.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: PREMIUM_EASE }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Content Card (Left or Right on desktop) */}
                    <div className="w-full sm:w-[46%] pl-14 sm:pl-0">
                      <TiltCard maxTilt={4} className="h-full">
                        <div className="p-7 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200/80 dark:border-navy-800 shadow-md hover:shadow-2xl transition-all duration-300 group">
                          {/* Top Meta Bar */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
                              {language === 'kn' ? item.category_kn : item.category}
                            </span>
                            {getStatusBadge(item.status, item.status_kn)}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-black text-navy-950 dark:text-white leading-snug group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                            {language === 'kn' ? item.title_kn : item.title}
                          </h3>

                          {/* Short Description */}
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                            {language === 'kn' ? item.shortDesc_kn : item.shortDesc}
                          </p>

                          {/* Objectives Preview */}
                          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-navy-800 space-y-1.5">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                              {t('Core Objectives', 'ಪ್ರಮುಖ ಉದ್ದೇಶಗಳು')}
                            </span>
                            {(language === 'kn' ? item.objectives_kn : item.objectives).slice(0, 2).map((obj, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span>{obj}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <div className="mt-5 pt-3 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between">
                            <Link
                              href={`/join?tab=volunteer`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
                            >
                              <span>{t('Participate', 'ಭಾಗವಹಿಸಿ')}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                              href="/initiatives"
                              className="text-[11px] font-semibold text-gray-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                            >
                              {t('Roadmap details', 'ವಿವರ')}
                            </Link>
                          </div>
                        </div>
                      </TiltCard>
                    </div>

                    {/* Timeline Node Badge on Center Line */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-white dark:bg-navy-900 border-2 border-gold-500 shadow-md flex items-center justify-center text-navy-950 dark:text-gold-400 font-black text-xs z-10">
                      {index + 1}
                    </div>

                    {/* Empty Space for alternate side on desktop */}
                    <div className="hidden sm:block sm:w-[46%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* 2. Standard Grid Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInitiatives.map((item, index) => (
              <TiltCard key={item.id} maxTilt={5}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: PREMIUM_EASE }}
                  className="p-7 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200/80 dark:border-navy-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
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
                    <h3 className="text-xl font-black text-navy-950 dark:text-white leading-snug">
                      {language === 'kn' ? item.title_kn : item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2.5 leading-relaxed">
                      {language === 'kn' ? item.shortDesc_kn : item.shortDesc}
                    </p>

                    {/* Key Objectives Preview */}
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-navy-800 space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                        {t('Strategic Focus', 'ಗುರಿಗಳು')}
                      </span>
                      {(language === 'kn' ? item.objectives_kn : item.objectives).slice(0, 2).map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between">
                    <Link
                      href={`/join?tab=volunteer`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors"
                    >
                      <span>{t('Get Involved', 'ಭಾಗವಹಿಸಿ')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/initiatives"
                      className="text-xs font-semibold text-gray-500 hover:text-navy-900 dark:hover:text-white transition-colors"
                    >
                      {t('Details →', 'ವಿವರ →')}
                    </Link>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        )}

        {/* Bottom Institutional Disclaimer & Partnership Banner */}
        <ScrollReveal className="mt-14 p-6 sm:p-8 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <h4 className="text-lg font-black text-white">
              {t('Have a Regional Development Proposal?', 'ಪ್ರಾದೇಶಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರಸ್ತಾವನೆ ಇದೆಯೇ?')}
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {t(
                'BEDF welcomes industry bodies, educational institutions and entrepreneurs to propose collaborative research and innovation programmes.',
                'ಬಿಇಡಿಎಫ್ ಕೈಗಾರಿಕಾ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಲಯಗಳಿಂದ ಸಹಯೋಗದ ಸಂಶೋಧನಾ ಯೋಜನೆಗಳನ್ನು ಸ್ವಾಗತಿಸುತ್ತದೆ.'
              )}
            </p>
          </div>

          <Link
            href="/join?tab=partner"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black text-xs shadow-md hover:shadow-gold-500/25 transition-all"
          >
            <span>{t('Propose a Partnership', 'ಪಾಲುದಾರಿಕೆ ಪ್ರಸ್ತಾಪಿಸಿ')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
