'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
import { TiltCard, ScrollReveal, PREMIUM_EASE } from '@/components/motion/MotionSystem';

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
    <section id="focus-sectors" className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('7 Strategic Focus Areas', '7 ಕಾರ್ಯತಂತ್ರದ ವಲಯಗಳು')}</span>
            </div>
            <h2 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
              {t('Where Industry Meets Innovation', 'ಕೈಗಾರಿಕೆ ಮತ್ತು ನಾವೀನ್ಯತೆಯ ಸಂಗಮ')}
            </h2>
            <p className="font-sans text-body-fluid text-gray-600 dark:text-gray-300">
              {t(
                'Belagavi is transitioning from a traditional manufacturing hub into a high-technology powerhouse. Explore the seven pillars driving regional transformation.',
                'ಬೆಳಗಾವಿಯು ಸಾಂಪ್ರದಾಯಿಕ ಉತ್ಪಾದನಾ ಕೇಂದ್ರದಿಂದ ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನದ ಶಕ್ತಿಕೇಂದ್ರವಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತಿದೆ. ಪ್ರಾದೇಶಿಕ ಪರಿವರ್ತನೆಗೆ ಚಾಲನೆ ನೀಡುವ ಏಳು ಪ್ರಮುಖ ಸ್ತಂಭಗಳನ್ನು ತಿಳಿಯಿರಿ.'
              )}
            </p>
          </div>

          <Link
            href="/focus-areas"
            className="font-display inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors self-start md:self-auto group"
          >
            <span>{t('View Detailed Sector Portfolios', 'ಸಮಗ್ರ ವಲಯ ವಿವರಣೆಗಳು')}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ScrollReveal>

        {/* 7 Interactive 3D Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_DATA.map((sector, index) => {
            const Icon = ICON_MAP[sector.icon] || Cpu;
            const isFeatured = index === 0 || index === 1;

            return (
              <TiltCard key={sector.id} maxTilt={5} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.6, ease: PREMIUM_EASE }}
                  onClick={() => setActiveModalSector(sector)}
                  className={`relative p-8 rounded-3xl cursor-pointer group transition-all duration-300 flex flex-col justify-between overflow-hidden border h-full ${
                    isFeatured
                      ? 'bg-white dark:bg-navy-900 border-navy-200/80 dark:border-navy-700 shadow-md hover:shadow-2xl'
                      : 'bg-white dark:bg-navy-900/80 border-gray-200/80 dark:border-navy-800 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {/* Animated Line at Top on Hover with Deep Orange for Tech & Gold for Heritage */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    sector.id === 'ai-technology' || sector.id === 'startups' || sector.id === 'robotics-automation'
                      ? 'bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600'
                      : 'bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600'
                  }`} />

                  <div>
                    {/* Top Bar: Icon and Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-navy-50 dark:bg-navy-800 border border-navy-100 dark:border-navy-700 flex items-center justify-center text-navy-800 dark:text-gold-400 transition-colors shadow-sm ${
                        sector.id === 'ai-technology' || sector.id === 'startups' || sector.id === 'robotics-automation'
                          ? 'group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500'
                          : 'group-hover:bg-gold-500 group-hover:text-navy-950'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {(sector.id === 'ai-technology' || sector.id === 'startups') && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25">
                            {t('Innovation Focus', 'ನಾವೀನ್ಯತೆ ಆದ್ಯತೆ')}
                          </span>
                        )}
                        <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-navy-700 flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors">
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-black text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {language === 'kn' ? sector.title_kn : sector.title}
                    </h3>
                    <p className="text-xs font-bold text-gold-600 dark:text-gold-400 mt-1">
                      {language === 'kn' ? sector.tagline_kn : sector.tagline}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed line-clamp-3">
                      {language === 'kn' ? sector.summary_kn : sector.summary}
                    </p>
                  </div>

                  {/* Bottom Stats Preview */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      {language === 'kn' ? sector.stats[0].label_kn : sector.stats[0].label}
                    </span>
                    <span className="font-extrabold text-navy-900 dark:text-white group-hover:text-gold-500">
                      {sector.stats[0].value}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Sector Detail Modal */}
      <AnimatePresence>
        {activeModalSector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: PREMIUM_EASE }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-navy-700 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalSector(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-500 hover:text-navy-950 dark:hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-500">
                  {t('Sector Profile', 'ವಲಯ ವಿವರಣೆ')}
                </span>
                <h3 className="text-2xl font-black text-navy-950 dark:text-white">
                  {language === 'kn' ? activeModalSector.title_kn : activeModalSector.title}
                </h3>
                <p className="text-xs font-semibold text-gold-600 dark:text-gold-400">
                  {language === 'kn' ? activeModalSector.tagline_kn : activeModalSector.tagline}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? activeModalSector.summary_kn : activeModalSector.summary}
                </p>
              </div>

              {/* Key Initiatives / Focus Areas Grid */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-navy-800">
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-3">
                  {t('Key Focus Areas & Disciplines', 'ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'kn' ? activeModalSector.keyInitiatives_kn : activeModalSector.keyInitiatives).map(
                    (sub: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-navy-950/60 border border-gray-100 dark:border-navy-800 text-xs font-medium text-gray-800 dark:text-gray-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                        <span>{sub}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Sector Specific Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-navy-800 grid grid-cols-2 gap-4">
                {activeModalSector.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-950/60 border border-gray-100 dark:border-navy-800">
                    <span className="block text-2xl font-black text-navy-950 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mt-0.5">
                      {language === 'kn' ? stat.label_kn : stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-navy-800 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?subject=${encodeURIComponent(`Partnership in ${activeModalSector.title}`)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-colors shadow-sm"
                >
                  <span>{t('Inquire About This Sector', 'ಈ ವಲಯದಲ್ಲಿ ಪಾಲುದಾರಿಕೆಗೆ ಸಂಪರ್ಕಿಸಿ')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/focus-areas"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 dark:border-navy-700 text-navy-900 dark:text-white font-bold text-xs hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <span>{t('Read Full Sector Dossier', 'ಸಮಗ್ರ ವರದಿ ಓದಿ')}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
