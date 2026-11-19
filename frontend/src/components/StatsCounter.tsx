'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { BarChart3, TrendingUp, ShieldCheck, Zap, Factory, Award } from 'lucide-react';
import { CountUp, TiltCard, ScrollReveal, PREMIUM_EASE } from '@/components/motion/MotionSystem';

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  label_kn: string;
  subtext: string;
  subtext_kn: string;
  source: string;
  progressPercent: number;
  highlightIcon: React.ElementType;
}

export default function StatsCounter() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const stats: StatItem[] = [
    {
      value: 7,
      suffix: "",
      label: "Strategic Focus Sectors",
      label_kn: "ಕಾರ್ಯತಂತ್ರದ ವಲಯಗಳು",
      subtext: "AI, Aerospace, Defence, Manufacturing, Startups, Education, Trade",
      subtext_kn: "ಎಐ, ಏರೋಸ್ಪೇಸ್, ರಕ್ಷಣೆ, ಉತ್ಪಾದನೆ, ಸ್ಟಾರ್ಟಪ್, ಶಿಕ್ಷಣ, ವಾಣಿಜ್ಯ",
      source: "BEDF Charter 2026",
      progressPercent: 100,
      highlightIcon: Award
    },
    {
      value: 15,
      suffix: " Taluks",
      label: "Administrative Taluks",
      label_kn: "ಆಡಳಿತಾತ್ಮಕ ತಾಲೂಕುಗಳು",
      subtext: "Largest district in Karnataka spanning 13,415 sq km",
      subtext_kn: "13,415 ಚ.ಕಿ.ಮೀ ವಿಸ್ತಾರವುಳ್ಳ ಕರ್ನಾಟಕದ ಬೃಹತ್ ಜಿಲ್ಲೆ",
      source: "Karnataka State Gazetteer",
      progressPercent: 100,
      highlightIcon: BarChart3
    },
    {
      value: 29,
      suffix: " Mills",
      label: "Sugar Factories",
      label_kn: "ಸಕ್ರಿಯ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳು",
      subtext: "Highest in Karnataka producing 400+ MW clean co-gen power",
      subtext_kn: "ರಾಜ್ಯದಲ್ಲೇ ಗರಿಷ್ಠ; 400+ ಮೆಗಾವಾಟ್ ಪರಿಸರಸ್ನೇಹಿ ವಿದ್ಯುತ್ ಉತ್ಪಾದನೆ",
      source: "Dept of Sugar, Govt of Karnataka",
      progressPercent: 92,
      highlightIcon: Zap
    },
    {
      value: 200,
      suffix: "+ Units",
      label: "Operational Foundries",
      label_kn: "ಕಾರ್ಯಾಚರಿಸುವ ಫೌಂಡ್ರಿ ಘಟಕಗಳು",
      subtext: "Precision casting cluster supplying OEMs across 40+ countries",
      subtext_kn: "40ಕ್ಕೂ ಹೆಚ್ಚು ದೇಶಗಳಿಗೆ ನಿಖರ ಬಿಡಿಭಾಗಗಳನ್ನು ರಫ್ತು ಮಾಡುವ ಕ್ಲಸ್ಟರ್",
      source: "Belgaum Foundry Cluster (BFC)",
      progressPercent: 88,
      highlightIcon: Factory
    },
    {
      value: 15000,
      suffix: "+",
      label: "Graduating Engineers/Yr",
      label_kn: "ವಾರ್ಷಿಕ ಎಂಜಿನಿಯರಿಂಗ್ ಪದವೀಧರರು",
      subtext: "Governed by VTU headquarters and top regional institutes",
      subtext_kn: "ವಿಟಿಯು ಕೇಂದ್ರ ಕಚೇರಿ ಮತ್ತು ಉನ್ನತ ಸಂಸ್ಥೆಗಳಿಂದ ಹೊರಬರುವ ಪ್ರತಿಭೆ",
      source: "VTU Academic Annual Report",
      progressPercent: 95,
      highlightIcon: TrendingUp
    },
    {
      value: 2300,
      suffix: "m",
      label: "Airport Runway (IXG)",
      label_kn: "ವಿಮಾನ ನಿಲ್ದಾಣ ರನ್‌ವೇ",
      subtext: "Code 4C runway handling narrowbody jet airliners",
      subtext_kn: "ಜೆಟ್ ವಿಮಾನಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಆಧುನಿಕ ರನ್‌ವೇ ಸೌಲಭ್ಯ",
      source: "Airports Authority of India (AAI)",
      progressPercent: 85,
      highlightIcon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-navy-950 text-navy-950 dark:text-white relative overflow-hidden border-y border-gray-100 dark:border-navy-800 transition-colors duration-300">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 bg-[radial-gradient(#0B2D5B_1px,transparent_1px)] dark:bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/5 dark:bg-navy-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t('Our Vision in Verified Numbers', 'ಪರಿಶೀಲಿಸಿದ ಅಂಕಿಅಂಶಗಳಲ್ಲಿ ನಮ್ಮ ದೃಷ್ಟಿಕೋನ')}</span>
          </div>

          <h2 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
            {t('The Regional Scale of Opportunity', 'ಪ್ರಾದೇಶಿಕ ಅವಕಾಶಗಳ ನೈಜ ಚಿತ್ರಣ')}
          </h2>

          <p className="font-sans text-lead-fluid text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t(
              'Documented baselines anchoring Belagavi as North Karnataka’s undisputed industrial, agricultural, and educational powerhouse.',
              'ಬೆಳಗಾವಿಯನ್ನು ಉತ್ತರ ಕರ್ನಾಟಕದ ಮುಂಚೂಣಿ ಕೈಗಾರಿಕಾ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ರಾಜಧಾನಿಯನ್ನಾಗಿ ಸ್ಥಾಪಿಸುವ ಅಧಿಕೃತ ಅಂಕಿಅಂಶಗಳು.'
            )}
          </p>
        </ScrollReveal>

        {/* 6 Interactive Kinetic Stat Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.highlightIcon;

            return (
              <TiltCard key={idx} maxTilt={6} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-full p-8 rounded-3xl bg-gray-50/80 dark:bg-navy-900/90 border border-gray-200/80 dark:border-navy-800 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Tag & Icon with Deep Orange Hover Sheen */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-[10px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                        {stat.source}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 flex items-center justify-center text-navy-800 dark:text-gold-400 shadow-sm group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Animated Kinetic Number */}
                    <div className="text-stat-fluid font-display font-black text-navy-950 dark:text-white flex items-baseline gap-1 my-2">
                      <CountUp
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={2.2}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-base font-extrabold text-navy-900 dark:text-gray-100 mt-2">
                      {language === 'kn' ? stat.label_kn : stat.label}
                    </h4>

                    {/* Subtext */}
                    <p className="font-sans text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2 font-normal">
                      {language === 'kn' ? stat.subtext_kn : stat.subtext}
                    </p>
                  </div>

                  {/* Animated Visual Progress Bar Indicator with Deep Orange & Emerald Gradients */}
                  <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-navy-800/80">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mb-1.5">
                      <span>{t('Regional Benchmark', 'ಪ್ರಾದೇಶಿಕ ಪ್ರಮಾಣ')}</span>
                      <span className={idx % 2 === 1 ? 'text-orange-600 dark:text-orange-400 font-extrabold' : 'text-emerald-700 dark:text-emerald-400 font-extrabold'}>{stat.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-gray-200/70 dark:bg-navy-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progressPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + idx * 0.1, ease: PREMIUM_EASE }}
                        className={`h-full rounded-full ${
                          idx % 2 === 1
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500/20'
                            : 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-sm shadow-emerald-500/20'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
