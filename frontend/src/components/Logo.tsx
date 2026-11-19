'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface LogoProps {
  variant?: 'full' | 'mark' | 'compact';
  className?: string;
  isDark?: boolean;
}

export default function Logo({ variant = 'full', className = '', isDark = false }: LogoProps) {
  const { language } = useLanguage();

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Bastion + B Mark Icon */}
      <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="goldBastion" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E899" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#A2801F" />
            </linearGradient>
            <linearGradient id="navyBlock" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#1D4E89'} />
              <stop offset="100%" stopColor={isDark ? '#2563EB' : '#071A33'} />
            </linearGradient>
          </defs>

          {/* Bastion Stacked Foundation Blocks */}
          <rect x="14" y="68" width="16" height="18" rx="2.5" fill="url(#navyBlock)" />
          <rect x="14" y="47" width="16" height="18" rx="2.5" fill="url(#navyBlock)" />
          <rect x="14" y="26" width="16" height="18" rx="2.5" fill="url(#navyBlock)" />
          {/* Top Gold Crown Block */}
          <rect x="14" y="13" width="16" height="10" rx="2.5" fill="url(#goldBastion)" />

          {/* Dynamic Modern B Arches */}
          <path
            d="M30 17 H56 C69 17, 78 25, 78 37 C78 48, 69 54, 56 54 H30"
            fill="none"
            stroke={isDark ? '#FFFFFF' : '#0B2D5B'}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300"
          />
          <path
            d="M30 49 H61 C76 49, 86 58, 86 70 C86 82, 75 86, 59 86 H30"
            fill="none"
            stroke={isDark ? '#FFFFFF' : '#0B2D5B'}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300"
          />

          {/* Precision Accents */}
          <circle cx="54" cy="35" r="3.5" fill="url(#goldBastion)" />
          <circle cx="59" cy="68" r="4" fill="url(#goldBastion)" />
        </svg>
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-heading font-extrabold text-xl tracking-wider ${isDark ? 'text-white' : 'text-navy-900 dark:text-white'}`}>
              BEDF
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
            {variant === 'full' && (
              <span className="text-[10px] uppercase font-semibold tracking-widest text-gold-600 dark:text-gold-400 border-l border-gray-300 dark:border-gray-700 pl-2">
                Belagavi
              </span>
            )}
          </div>

          <div className="flex flex-col leading-tight">
            <span className={`text-[9px] uppercase font-bold tracking-wider ${isDark ? 'text-gray-300' : 'text-navy-700 dark:text-gray-300'}`}>
              Belagavi Economic Development Foundation
            </span>
            <span className={`text-[8.5px] font-medium font-kannada ${isDark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
              ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}

