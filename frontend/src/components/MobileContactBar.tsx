'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-t border-gray-200 dark:border-navy-800 shadow-2xl transition-transform duration-300">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Hotline */}
        <a
          href="tel:+919019088160"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gray-100 dark:bg-navy-900 text-navy-900 dark:text-gray-200 hover:bg-gold-500 hover:text-navy-950 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-500 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">{t('Call', 'ಕರೆ')}</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919019088160"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Join BEDF */}
        <Link
          href="/join"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 font-bold transition-colors shadow-sm"
        >
          <div className="flex items-center gap-0.5">
            <span className="text-[10px] font-extrabold">{t('Join Us', 'ಸೇರಿ')}</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}

