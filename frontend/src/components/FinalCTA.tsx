'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-navy-800/40 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Accent Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-widest uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('United Regional Momentum', 'ಒಗ್ಗೂಡಿದ ಪ್ರಾದೇಶಿಕ ಸಂಕಲ್ಪ')}</span>
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          {t(
            "Let's Build the Future of Belagavi. Together.",
            'ಬೆಳಗಾವಿಯ ಭವಿಷ್ಯವನ್ನು ಒಟ್ಟಾಗಿ ನಿರ್ಮಿಸೋಣ.'
          )}
        </h2>

        {/* Gold accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full mx-auto my-6" />

        {/* Narrative */}
        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {t(
            'Every idea, partnership and contribution can help create a stronger regional economy. Join our network of industrialists, engineers, researchers and citizens.',
            'ಪ್ರತಿಯೊಂದು ಕಲ್ಪನೆ, ಪಾಲುದಾರಿಕೆ ಮತ್ತು ಸಹಯೋಗವು ಬಲಿಷ್ಠ ಪ್ರಾದೇಶಿಕ ಆರ್ಥಿಕತೆಯನ್ನು ರೂಪಿಸಲು ನೆರವಾಗುತ್ತದೆ. ನಮ್ಮ ಉದ್ಯಮಿಗಳು, ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ನಾಗರಿಕರ ಜಾಲಕ್ಕೆ ಸೇರಿ.'
          )}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-black text-sm transition-all duration-300 shadow-lg hover:shadow-gold-500/25 hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>{t('Join BEDF Today', 'ಇಂದೇ ಬಿಇಡಿಎಫ್‌ಗೆ ಸೇರಿ')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy-900 border border-navy-700 hover:border-gold-500 text-white font-bold text-sm transition-all duration-300 hover:bg-navy-850 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-gold-400" />
            <span>{t('Contact Foundation Office', 'ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ')}</span>
          </Link>
        </div>

        {/* Direct Contact Links */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <a
            href="tel:+919019088160"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{t('Call Direct:', 'ನೇರ ಕರೆ:')} <strong className="text-white">+91 901 908 8160</strong></span>
          </a>

          <span>•</span>

          <a
            href="https://wa.me/919019088160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            {t('Message on WhatsApp', 'ವಾಟ್ಸಾಪ್ ಸಂದೇಶ')}
          </a>

          <span>•</span>

          <span className="text-gray-500">
            {t('Belagavi, Karnataka 590001, India', 'ಬೆಳಗಾವಿ, ಕರ್ನಾಟಕ 590001, ಭಾರತ')}
          </span>
        </div>
      </div>
    </section>
  );
}
