'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { RESEARCH_REPORTS } from '@/data/bedfContent';
import {
  FileText,
  ArrowRight,
  Download,
  Calendar,
  BookOpen,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function LatestInsights() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-800 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('Knowledge & Research Centre', 'ಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
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
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors self-start md:self-auto"
          >
            <span>{t('Browse All Publications & Data', 'ಎಲ್ಲಾ ಸಂಶೋಧನಾ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_REPORTS.map((report) => (
            <div
              key={report.id}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-gray-200 font-bold text-[10px] uppercase tracking-wider">
                    {language === 'kn' ? report.category_kn : report.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{report.publishedDate}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-snug">
                  {language === 'kn' ? report.title_kn : report.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {language === 'kn' ? report.summary_kn : report.summary}
                </p>

                {/* Key Takeaways */}
                <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-navy-800 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    {t('Key Empirical Finding:', 'ಪ್ರಮುಖ ಸಂಶೋಧನಾ ಫಲಿತಾಂಶ:')}
                  </span>
                  <p className="text-xs text-navy-900 dark:text-gray-200 font-medium leading-relaxed">
                    "{language === 'kn' ? report.keyTakeaways_kn[0] : report.keyTakeaways[0]}"
                  </p>
                </div>
              </div>

              {/* Bottom Citation & Action */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-navy-800 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-gray-400 truncate max-w-[150px]">
                  {report.citation.split('/')[0]}
                </span>

                <Link
                  href="/insights"
                  className="font-bold text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('Read Report', 'ವರದಿ ಓದಿ')}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

