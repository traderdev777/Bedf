'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { RESEARCH_REPORTS, ReportItem } from '@/data/bedfContent';
import Logo from '@/components/Logo';
import { 
  BookOpen, 
  Search, 
  Download, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  Filter, 
  ExternalLink,
  X
} from 'lucide-react';

export default function InsightsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadModalReport, setDownloadModalReport] = useState<ReportItem | null>(null);

  const categories = ['All', 'Economic Report', 'Industry Research', 'Policy Brief'];

  const filtered = RESEARCH_REPORTS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title_kn.includes(searchQuery) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-24 bg-white dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('Knowledge & Intelligence Centre', 'ಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ')}</span>
          </div>

          <h1 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
            {t('Research & Insights', 'ಸಂಶೋಧನೆ ಮತ್ತು ವರದಿಗಳು')}
          </h1>

          <p className="font-sans text-lead-fluid text-gray-600 dark:text-gray-300">
            {t(
              'Evidence-based empirical whitepapers, regional cluster studies, and policy recommendation briefs addressing Belagavi’s manufacturing, logistics, and innovation trajectory.',
              'ಬೆಳಗಾವಿಯ ಉತ್ಪಾದನೆ, ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮತ್ತು ನಾವೀನ್ಯತೆ ಕುರಿತಾದ ನಿಖರ ಶ್ವೇತಪತ್ರಗಳು ಮತ್ತು ನೀತಿ ಶಿಫಾರಸು ವರದಿಗಳು.'
            )}
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="p-6 rounded-3xl bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search publications by title, keyword, or sector...', 'ವರದಿಗಳನ್ನು ಹುಡುಕಿ...')}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-950 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'bg-white dark:bg-navy-950 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-navy-800 hover:border-gold-500/40'
                }`}
              >
                {cat === 'All' ? t('All Publications', 'ಎಲ್ಲಾ ವರದಿಗಳು') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((report) => (
            <div
              key={report.id}
              className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gray-200 font-bold text-[10px] uppercase tracking-wider">
                    {language === 'kn' ? report.category_kn : report.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{report.publishedDate}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-navy-950 dark:text-white leading-snug">
                  {language === 'kn' ? report.title_kn : report.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? report.summary_kn : report.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                    {t('Key Policy Finding', 'ಪ್ರಮುಖ ಫಲಿತಾಂಶ')}
                  </span>
                  <p className="italic">
                    "{language === 'kn' ? report.keyTakeaways_kn[0] : report.keyTakeaways[0]}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-800 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-mono">
                  {report.pages} {t('Pages • PDF', 'ಪುಟಗಳು • ಪಿಡಿಎಫ್')}
                </span>

                <button
                  onClick={() => setDownloadModalReport(report)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('Download PDF', 'ಡೌನ್‌ಲೋಡ್')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for PDF Preview / Access */}
        {downloadModalReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-navy-700 shadow-2xl space-y-5">
              <button
                onClick={() => setDownloadModalReport(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-500 hover:text-navy-950 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pr-8 space-y-2">
                <Logo variant="horizontal" className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-500 block">
                  {downloadModalReport.category}
                </span>
                <h3 className="text-xl font-bold text-navy-950 dark:text-white mt-1">
                  {downloadModalReport.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {downloadModalReport.citation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 dark:bg-navy-950 text-xs space-y-2 text-gray-600 dark:text-gray-300">
                <p>
                  <strong>{t('Published Date:', 'ಪ್ರಕಟಣಾ ದಿನಾಂಕ:')}</strong> {downloadModalReport.publishedDate}
                </p>
                <p>
                  <strong>{t('Author:', 'ಲೇಖಕರು:')}</strong> {downloadModalReport.author}
                </p>
                <p>
                  <strong>{t('Document Scope:', 'ದಾಖಲೆಯ ವ್ಯಾಪ್ತಿ:')}</strong> {downloadModalReport.pages} pages, English executive summary with verified empirical tables.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`/data/sample_report.txt`}
                  download={`${downloadModalReport.slug}.txt`}
                  onClick={() => {
                    alert(t('Your BEDF Whitepaper dossier download has begun.', 'ನಿಮ್ಮ ಬಿಇಡಿಎಫ್ ಸಂಶೋಧನಾ ವರದಿ ಡೌನ್‌ಲೋಡ್ ಆರಂಭವಾಗಿದೆ.'));
                    setDownloadModalReport(null);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('Confirm Free Download', 'ಉಚಿತ ಡೌನ್‌ಲೋಡ್ ದೃಢೀಕರಿಸಿ')}</span>
                </a>

                <p className="text-[11px] text-gray-400 text-center">
                  {t('Open Access under Creative Commons BY 4.0 license.', 'ಕ್ರಿಯೇಟಿವ್ ಕಾಮನ್ಸ್ ಪರವಾನಗಿ ಅಡಿಯಲ್ಲಿ ಮುಕ್ತ ಪ್ರವೇಶ.')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

