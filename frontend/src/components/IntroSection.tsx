'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal, WordReveal, TiltCard, PREMIUM_EASE } from '@/components/motion/MotionSystem';

export default function IntroSection() {
  const { t, language } = useLanguage();

  const corePillars = [
    {
      title: "Precision Engineering Hub",
      title_kn: "ನಿಖರ ಎಂಜಿನಿಯರಿಂಗ್ ಕೇಂದ್ರ",
      desc: "Home to India's first notified precision engineering SEZ at Hattargi.",
      desc_kn: "ಹತ್ತರಗಿಯಲ್ಲಿ ಭಾರತದ ಮೊದಲ ಅಧಿಸೂಚಿತ ನಿಖರ ಎಂಜಿನಿಯರಿಂಗ್ ಸೆಜ್‌ನ ತವರು."
    },
    {
      title: "Apex Engineering University",
      title_kn: "ಉನ್ನತ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ",
      desc: "Headquarters of VTU directing over 200 engineering colleges statewide.",
      desc_kn: "ರಾಜ್ಯದ 200ಕ್ಕೂ ಹೆಚ್ಚು ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳನ್ನು ನಿರ್ವಹಿಸುವ ವಿಟಿಯು ಕೇಂದ್ರ."
    },
    {
      title: "Foundry Capital of Karnataka",
      title_kn: "ಕರ್ನಾಟಕದ ಫೌಂಡ್ರಿ ರಾಜಧಾನಿ",
      desc: "Over 200 operational foundries exporting precision castings globally.",
      desc_kn: "ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ನಿಖರ ಬಿಡಿಭಾಗಗಳನ್ನು ರಫ್ತು ಮಾಡುವ 200ಕ್ಕೂ ಹೆಚ್ಚು ಫೌಂಡ್ರಿ ಘಟಕಗಳು."
    },
    {
      title: "Strategic Tri-Junction Logistics",
      title_kn: "ಮೂರು ರಾಜ್ಯಗಳ ಸಂಪರ್ಕ ಹೆಬ್ಬಾಗಿಲು",
      desc: "Direct 6-lane NH-48 and 100km access to major Arabian Sea ports in Goa.",
      desc_kn: "6 ಪಥದ NH-48 ಮತ್ತು ಗೋವಾ ಬಂದರುಗಳಿಗೆ ಕೇವಲ 100 ಕಿಮೀ ಅಂತರದ ಸಂಪರ್ಕ."
    }
  ];

  return (
    <section id="introduction" className="py-24 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision Headline & Narrative with Scroll-triggered Word Reveal */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-800 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('Introduction & Mandate', 'ಪರಿಚಯ ಮತ್ತು ಉದ್ದೇಶ')}</span>
              </div>
            </ScrollReveal>

            <WordReveal
              as="h2"
              text={t('A New Vision for Belagavi.', 'ಬೆಳಗಾವಿಗೆ ಒಂದು ನವೋದಯ ದೃಷ್ಟಿಕೋನ.')}
              className="text-h2-fluid font-display font-black text-navy-950 dark:text-white"
            />

            {/* Editorial Statement: Selective Playfair Display Highlight */}
            <blockquote className="font-editorial text-lg sm:text-xl text-navy-900 dark:text-gold-300 font-semibold border-l-2 border-gold-500 pl-4 py-1 my-4 leading-relaxed">
              {t(
                '“Belagavi is not merely transitioning; it is orchestrating North Karnataka’s high-technology economic resurgence.”',
                '“ಬೆಳಗಾವಿಯು ಕೇವಲ ಬದಲಾಗುತ್ತಿಲ್ಲ; ಅದು ಉತ್ತರ ಕರ್ನಾಟಕದ ತಂತ್ರಜ್ಞಾನ ನವೋದಯವನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದೆ.”'
              )}
            </blockquote>

            <ScrollReveal delay={0.2} className="space-y-4 font-sans">
              <p className="text-body-fluid text-gray-700 dark:text-gray-300 font-normal">
                {t(
                  'Belagavi has the potential to emerge as a major centre for advanced manufacturing, aerospace, artificial intelligence, entrepreneurship and innovation.',
                  'ಸುಧಾರಿತ ಉತ್ಪಾದನೆ, ಏರೋಸ್ಪೇಸ್, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ, ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು ನಾವೀನ್ಯತೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿ ಬೆಳಗಾವಿ ಹೊರಹೊಮ್ಮುವ ಎಲ್ಲಾ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೊಂದಿದೆ.'
                )}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                {t(
                  'BEDF is an independent, citizen-led regional development initiative working to bring together industries, investors, entrepreneurs, institutions and citizens to create opportunities for sustainable economic growth.',
                  'ಬಿಇಡಿಎಫ್ ಒಂದು ಸ್ವತಂತ್ರ, ನಾಗರಿಕ ನೇತೃತ್ವದ ಪ್ರಾದೇಶಿಕ ಅಭಿವೃದ್ಧಿ ವೇದಿಕೆಯಾಗಿದ್ದು, ಕೈಗಾರಿಕೆಗಳು, ಹೂಡಿಕೆದಾರರು, ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ನಾಗರಿಕರನ್ನು ಒಗ್ಗೂಡಿಸಿ ಸುಸ್ಥಿರ ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆಯನ್ನು ಸಾಧಿಸಲು ಶ್ರಮಿಸುತ್ತದೆ.'
                )}
              </p>
            </ScrollReveal>

            {/* 4 Pillars Mini Grid with Soft Elevation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.5, ease: PREMIUM_EASE }}
                  className="p-4 rounded-2xl bg-gray-50/80 dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800 hover:border-gold-500/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>{language === 'kn' ? pillar.title_kn : pillar.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 pl-6">
                    {language === 'kn' ? pillar.desc_kn : pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <ScrollReveal delay={0.4} className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-gold-600 dark:hover:bg-gold-400 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>{t('Read Our Full Charter', 'ನಮ್ಮ ಪೂರ್ಣ ಪ್ರಣಾಳಿಕೆ ಓದಿ')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Tilt Card with Belagavi Landmark Artwork */}
          <div className="lg:col-span-6 relative">
            <TiltCard maxTilt={5}>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-navy-700 shadow-2xl aspect-[4/3] group">
                <Image
                  src="/images/suvarna_vidhana_soudha.svg"
                  alt="Belagavi Suvarna Vidhana Soudha Landmark"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                {/* Floating Verified Fact Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-gray-200 dark:border-navy-700 shadow-lg flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400 block">
                      {t('Regional Benchmark', 'ಪ್ರಾದೇಶಿಕ ಹೆಗ್ಗುರುತು')}
                    </span>
                    <span className="text-sm font-extrabold text-navy-950 dark:text-white">
                      Suvarna Vidhana Soudha, Belagavi
                    </span>
                    <span className="block text-[11px] text-gray-500 dark:text-gray-400">
                      {t('Symbol of North Karnataka’s legislative and administrative empowerment', 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಆಡಳಿತ ಮತ್ತು ಶಾಸಕಾಂಗ ಶಕ್ತಿಯ ಸಂಕೇತ')}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
