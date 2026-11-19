'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import creditsData from '@/data/credits.json';
import { Camera, ExternalLink, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function CreditsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-white dark:bg-navy-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-navy-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('Back to Home', 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ')}</span>
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('Media Transparency & Attribution', 'ಮಾಧ್ಯಮ ಮತ್ತು ಆಸ್ತಿ ಕೃತಜ್ಞತೆಗಳು')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-navy-950 dark:text-white">
            {t('Photographer & Asset Credits', 'ಚಿತ್ರ ಮತ್ತು ಆಸ್ತಿ ಕೃತಜ್ಞತೆಗಳು')}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {t(
              'BEDF adheres to open-access intellectual property ethics. All documented Belagavi landmarks and regional assets are credited below with their authors, license terms, and provenance.',
              'ಬಿಇಡಿಎಫ್ ಮುಕ್ತ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ನೀತಿಯನ್ನು ಗೌರವಿಸುತ್ತದೆ. ಎಲ್ಲಾ ಹೆಗ್ಗುರುತುಗಳು ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಚಿತ್ರಗಳ ಛಾಯಾಗ್ರಾಹಕರ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ದಾಖಲಿಸಲಾಗಿದೆ.'
            )}
          </p>
        </div>

        {/* Credits Table / Cards */}
        <div className="space-y-4">
          {creditsData.map((asset: any) => (
            <div
              key={asset.key}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-gray-200">
                    {asset.category}
                  </span>
                  <span className="text-xs text-gray-400">• {asset.filename}</span>
                </div>
                <h3 className="text-base font-bold text-navy-950 dark:text-white">
                  {asset.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 max-w-2xl">
                  {asset.description}
                </p>
                <div className="text-xs text-gray-500 pt-1">
                  <strong>Author / Source:</strong> {asset.author} • <strong>License:</strong> {asset.license}
                </div>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={asset.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-navy-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  <span>{t('Source Record', 'ಮೂಲ ದಾಖಲೆ')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Notice */}
        <div className="p-4 rounded-xl bg-navy-50 dark:bg-navy-900/60 border border-navy-100 dark:border-navy-800 text-xs text-gray-500 leading-relaxed flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
          <span>
            {t(
              'Notice: Sector portfolio graphics representing future technologies (such as humanoid robotics, edge computing, and digital twin simulators) are labeled as illustrative conceptual models to distinguish them from currently installed regional hardware.',
              'ಸೂಚನೆ: ಭವಿಷ್ಯದ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಚಿತ್ರಗಳನ್ನು ಕಲ್ಪನಾತ್ಮಕ ಮಾದರಿಗಳೆಂದು ಗುರುತಿಸಲಾಗಿದೆ.'
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
