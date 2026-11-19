import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-navy-950 transition-colors">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Official Horizontal Logo */}
        <div className="relative">
          <Image
            src="/assets/bedf-logo-horizontal.png"
            alt="Belagavi Economic Development Foundation (BEDF)"
            width={2172}
            height={724}
            priority
            className="h-12 sm:h-14 w-auto object-contain block dark:hidden"
          />
          <Image
            src="/assets/bedf-logo-horizontal-white.png"
            alt="Belagavi Economic Development Foundation (BEDF)"
            width={2172}
            height={724}
            priority
            className="h-12 sm:h-14 w-auto object-contain hidden dark:block"
          />
        </div>

        {/* Elegant Gold Progress Indicator */}
        <div className="w-48 h-1 bg-gray-100 dark:bg-navy-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full animate-pulse" />
        </div>

        <p className="text-xs font-semibold tracking-widest uppercase text-navy-800 dark:text-gray-300">
          Building Belagavi. Empowering North Karnataka.
        </p>
      </div>
    </div>
  );
}

