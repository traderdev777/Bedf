'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, ChevronDown, Compass, Sparkles } from 'lucide-react';
import { PREMIUM_EASE } from '@/components/motion/MotionSystem';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle parallax on scroll
  const backgroundY = useTransform(scrollY, [0, 600], [0, 90]);
  const contentY = useTransform(scrollY, [0, 600], [0, -30]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  const lineVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.15 + i * 0.22,
        duration: 0.85,
        ease: PREMIUM_EASE,
      },
    }),
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-bedf-lightBg to-white dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 text-navy-950 dark:text-white transition-colors duration-500">
      {/* 1. Cinematic Background Visual with Parallax & Slow Motion Zoom */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1.02, 1.07, 1.02],
                }
          }
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/suvarna_vidhana_soudha.svg"
            alt="Suvarna Vidhana Soudha Belagavi"
            fill
            priority
            className="object-cover opacity-[0.07] dark:opacity-20 transition-all duration-1000 ease-out"
          />
        </motion.div>

        {/* Ambient Moving Gold Light Aura */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.12, 0.28, 0.12],
                  scale: [0.95, 1.08, 0.95],
                  x: ['-5%', '5%', '-5%'],
                }
          }
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/4 left-1/3 w-[650px] h-[650px] bg-gradient-to-tr from-gold-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        {/* Dark theme deep navy vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(7,26,51,0.4)_100%)] dark:block hidden" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03] bg-[linear-gradient(to_right,#0B2D5B_1px,transparent_1px),linear-gradient(to_bottom,#0B2D5B_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* 2. Kinetic Hero Content Container */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : contentY,
          opacity: shouldReduceMotion ? 1 : contentOpacity,
        }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
      >
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-50/90 dark:bg-white/10 backdrop-blur-md border border-navy-200/60 dark:border-white/15 text-xs font-semibold text-navy-900 dark:text-gray-200 mb-8 shadow-sm hover:border-gold-500/50 transition-colors cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] font-bold text-navy-900 dark:text-gold-400">
            {t('Belagavi Economic Development Foundation', 'ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ')}
          </span>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-gray-600 dark:text-gray-300 text-[11px] hidden sm:inline">
            {t('Independent Regional Platform', 'ಸ್ವತಂತ್ರ ಪ್ರಾದೇಶಿಕ ವೇದಿಕೆ')}
          </span>
        </motion.div>

        {/* Cinematic Headline: A REGION. A VISION. A FUTURE. */}
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 max-w-5xl">
          <motion.h1
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-hero-fluid font-display font-black tracking-tight text-navy-950 dark:text-white"
          >
            {t('A REGION.', 'ಒಂದು ಪ್ರದೇಶ.')}
          </motion.h1>

          <motion.h1
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-hero-fluid font-display font-black tracking-tight text-navy-900/90 dark:text-gray-200"
          >
            {t('A VISION.', 'ಒಂದು ದೃಷ್ಟಿಕೋನ.')}
          </motion.h1>

          <motion.h1
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="text-hero-fluid font-display font-black tracking-tight bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 dark:from-gold-300 dark:via-gold-400 dark:to-amber-500 bg-clip-text text-transparent drop-shadow-sm"
          >
            {t('A FUTURE.', 'ಒಂದು ಭವಿಷ್ಯ.')}
          </motion.h1>
        </div>

        {/* Animated Expanding Gold Underline Accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: PREMIUM_EASE }}
          className="w-28 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full my-7 shadow-sm shadow-gold-500/30"
        />

        {/* Supporting Narrative with Scroll-triggered Fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: PREMIUM_EASE }}
          className="max-w-2xl text-lead-fluid font-sans text-gray-600 dark:text-gray-300 font-normal text-center"
        >
          {t(
            'Building Belagavi. Empowering North Karnataka. Uniting aerospace, advanced manufacturing, artificial intelligence, and regional entrepreneurship to pioneer the future.',
            'ಬೆಳಗಾವಿ ನಿರ್ಮಾಣ. ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಬಲೀಕರಣ. ಏರೋಸ್ಪೇಸ್, ಸುಧಾರಿತ ಉತ್ಪಾದನೆ, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ನವೋದ್ಯಮಗಳನ್ನು ಒಗ್ಗೂಡಿಸಿ ಭವಿಷ್ಯ ರೂಪಿಸುವುದು.'
          )}
        </motion.p>

        {/* Interactive CTA Buttons with Spring Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: PREMIUM_EASE }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto font-display"
        >
          <Link
            href="/#map"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy-900 text-white hover:bg-navy-850 dark:bg-white dark:text-navy-950 dark:hover:bg-gray-100 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>{t('Explore Belagavi Map', 'ಬೆಳಗಾವಿ ನಕ್ಷೆ ಅನ್ವೇಷಿಸಿ')}</span>
            <Compass className="w-4 h-4 text-gold-400 dark:text-navy-900 group-hover:rotate-45 transition-transform duration-300" />
          </Link>

          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>{t('Join BEDF Network', 'ಬಿಇಡಿಎಫ್ ಜಾಲಕ್ಕೆ ಸೇರಿ')}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Direct Contact Hotline Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t('Official Hotline:', 'ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ:')}</span>
            <a
              href="tel:+919019088160"
              className="text-navy-950 dark:text-gold-400 font-bold hover:underline"
            >
              +91 901 908 8160
            </a>
          </span>
          <span>•</span>
          <a
            href="https://wa.me/919019088160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
          >
            WhatsApp Direct
          </a>
        </motion.div>
      </motion.div>

      {/* 3. Smooth Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
      >
        <Link href="/#introduction" aria-label="Scroll Down" className="flex flex-col items-center group">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            {t('Scroll', 'ಸ್ಕ್ರೋಲ್')}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-gray-400/50 dark:border-gray-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gold-500"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
