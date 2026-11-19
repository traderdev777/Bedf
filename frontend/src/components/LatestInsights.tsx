'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { RESEARCH_REPORTS } from '@/data/bedfContent';
import {
  FileText,
  ArrowRight,
  Download,
  Calendar,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { TiltCard, ScrollReveal, PREMIUM_EASE } from '@/components/motion/MotionSystem';

export default function LatestInsights() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-800 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('Knowledge & Research Centre', 'ಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 dark:text-white tracking-tight">
              {t('Ideas. Research. Developments.', 'ವಿಚಾರ. ಸಂಶೋಧನೆ. ಪ್ರಗತಿ.')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {t(
                'Rigorous, empirical whitepapers and sector studies assessing North Karnataka’s manufacturing competitiveness, logistics efficiency, and policy benchmarks.',
                'ಉತ್ತರ ಕರ್ನಾಟಕದ ಕೈಗಾರಿಕಾ ಸ್ಪರ್ಧಾತ್ಮಕತೆ, ಸಾಗಣೆ ದಕ್ಷತೆ ಮತ್ತು ಆರ್ಥಿಕ ನೀತಿಗಳ ಕುರಿತಾದ ನಿಖರ ಅಧ್ಯಯನ ವರದಿಗಳು.'
              )}
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors self-start md:self-auto group"
          >
            <span>{t('Browse All Publications & Data', 'ಎಲ್ಲಾ ಸಂಶೋಧನಾ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ')}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ScrollReveal>

        {/* 3 Research 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_REPORTS.map((report, idx) => (
            <TiltCard key={report.id} maxTilt={5} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: PREMIUM_EASE }}
                className="p-8 rounded-3xl bg-gray-50/80 dark:bg-navy-950/80 border border-gray-200/80 dark:border-navy-800 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-2xl h-full"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-gray-200 font-bold text-[10px] uppercase tracking-wider">
                      {report.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-gold-500" />
                      <span>{report.publishedDate}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {language === 'kn' ? report.title_kn : report.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {language === 'kn' ? report.summary_kn : report.summary}
                  </p>
                </div>

                {/* Footer Meta & Download Link */}
                <div className="mt-8 pt-4 border-t border-gray-200/70 dark:border-navy-800 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">
                    {report.pages} pages • PDF
                  </span>

                  <Link
                    href={`/insights?open=${report.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 transition-colors"
                  >
                    <span>{t('View Dossier', 'ವರದಿ ವೀಕ್ಷಿಸಿ')}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
