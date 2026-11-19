'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'mark' | 'emblem' | 'compact';
  className?: string;
  isDark?: boolean;
  priority?: boolean;
  showLink?: boolean;
}

export default function Logo({
  variant = 'full',
  className = '',
  isDark,
  priority = true,
  showLink = true,
}: LogoProps) {
  const isEmblemOnly = variant === 'mark' || variant === 'emblem';
  const isCompact = variant === 'compact';

  const logoContent = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 1. Standalone Emblem (when variant is mark/emblem, or mobile part of compact) */}
      {(isEmblemOnly || isCompact) && (
        <div className={`relative flex-shrink-0 ${isCompact ? 'block sm:hidden' : 'block'}`}>
          {isDark === true ? (
            <Image
              src="/assets/bedf-emblem-white.png"
              alt="BEDF Emblem"
              width={1536}
              height={1024}
              priority={priority}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : isDark === false ? (
            <Image
              src="/assets/bedf-emblem.png"
              alt="BEDF Emblem"
              width={1536}
              height={1024}
              priority={priority}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <>
              {/* Light mode emblem */}
              <Image
                src="/assets/bedf-emblem.png"
                alt="BEDF Emblem"
                width={1536}
                height={1024}
                priority={priority}
                className="h-9 w-auto object-contain block dark:hidden transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark mode emblem */}
              <Image
                src="/assets/bedf-emblem-white.png"
                alt="BEDF Emblem"
                width={1536}
                height={1024}
                priority={priority}
                className="h-9 w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
              />
            </>
          )}
        </div>
      )}

      {/* 2. Official Horizontal Logo (Full proportions 2172x724 - 3:1 aspect ratio) */}
      {!isEmblemOnly && (
        <div className={`relative flex-shrink-0 ${isCompact ? 'hidden sm:block' : 'block'}`}>
          {isDark === true ? (
            <Image
              src="/assets/bedf-logo-horizontal-white.png"
              alt="Belagavi Economic Development Foundation (BEDF)"
              width={2172}
              height={724}
              priority={priority}
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : isDark === false ? (
            <Image
              src="/assets/bedf-logo-horizontal.png"
              alt="Belagavi Economic Development Foundation (BEDF)"
              width={2172}
              height={724}
              priority={priority}
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <>
              {/* Light mode: original navy & gold on light background */}
              <Image
                src="/assets/bedf-logo-horizontal.png"
                alt="Belagavi Economic Development Foundation (BEDF)"
                width={2172}
                height={724}
                priority={priority}
                className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain block dark:hidden transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Dark mode: crisp white & gold on deep navy background */}
              <Image
                src="/assets/bedf-logo-horizontal-white.png"
                alt="Belagavi Economic Development Foundation (BEDF)"
                width={2172}
                height={724}
                priority={priority}
                className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain hidden dark:block transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </>
          )}
        </div>
      )}
    </div>
  );

  if (!showLink) {
    return logoContent;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-0.5 transition-opacity hover:opacity-95"
      aria-label="BEDF Home"
    >
      {logoContent}
    </Link>
  );
}
