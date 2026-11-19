'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, BarChart3, TrendingUp } from 'lucide-react';

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  label_kn: string;
  subtext: string;
  subtext_kn: string;
  source: string;
}

export default function StatsCounter() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      value: 7,
      suffix: "",
      label: "Strategic Focus Sectors",
      label_kn: "ಕಾರ್ಯತಂತ್ರದ ವಲಯಗಳು",
      subtext: "AI, Aerospace, Defence, Manufacturing, Startups, Education, Logistics",
      subtext_kn: "ಎಐ, ಏರೋಸ್ಪೇಸ್, ರಕ್ಷಣೆ, ಉತ್ಪಾದನೆ, ಸ್ಟಾರ್ಟಪ್, ಶಿಕ್ಷಣ, ಲಾಜಿಸ್ಟಿಕ್ಸ್",
      source: "BEDF Charter"
    },
    {
      value: 15,
      suffix: " Taluks",
      label: "Administrative Taluks",
      label_kn: "ಆಡಳಿತಾತ್ಮಕ ತಾಲೂಕುಗಳು",
      subtext: "Largest district in Karnataka spanning 13,415 sq km",
      subtext_kn: "13,415 ಚ.ಕಿ.ಮೀ ವಿಸ್ತಾರವುಳ್ಳ ಕರ್ನಾಟಕದ ಬೃಹತ್ ಜಿಲ್ಲೆ",
      source: "Karnataka State Gazetteer"
    },
    {
      value: 29,
      suffix: " Mills",
      label: "Sugar Factories",
      label_kn: "ಸಕ್ರಿಯ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳು",
      subtext: "Highest in Karnataka producing 400+ MW clean co-gen power",
      subtext_kn: "ರಾಜ್ಯದಲ್ಲೇ ಗರಿಷ್ಠ; 400+ ಮೆಗಾವಾಟ್ ಪರಿಸರಸ್ನೇಹಿ ವಿದ್ಯುತ್ ಉತ್ಪಾದನೆ",
      source: "Dept of Sugar, Govt of Karnataka"
    },
    {
      value: 200,
      suffix: "+ Units",
      label: "Operational Foundries",
      label_kn: "ಕಾರ್ಯಾಚರಿಸುವ ಫೌಂಡ್ರಿ ಘಟಕಗಳು",
      subtext: "Precision casting cluster supplying OEMs across 40+ countries",
      subtext_kn: "40ಕ್ಕೂ ಹೆಚ್ಚು ದೇಶಗಳಿಗೆ ನಿಖರ ಬಿಡಿಭಾಗಗಳನ್ನು ರಫ್ತು ಮಾಡುವ ಕ್ಲಸ್ಟರ್",
      source: "Belgaum Foundry Cluster (BFC)"
    },
    {
      value: 15000,
      prefix: "",
      suffix: "+",
      label: "Graduating Engineers/Yr",
      label_kn: "ವಾರ್ಷಿಕ ಎಂಜಿನಿಯರಿಂಗ್ ಪದವೀಧರರು",
      subtext: "Governed by VTU headquarters and top regional institutes",
      subtext_kn: "ವಿಟಿಯು ಕೇಂದ್ರ ಕಚೇರಿ ಮತ್ತು ಉನ್ನತ ಸಂಸ್ಥೆಗಳಿಂದ ಹೊರಬರುವ ಪ್ರತಿಭೆ",
      source: "VTU Academic Annual Report"
    },
    {
      value: 2300,
      suffix: "m",
      label: "Airport Runway (IXG)",
      label_kn: "ವಿಮಾನ ನಿಲ್ದಾಣ ರನ್‌ವೇ",
      subtext: "Code 4C runway handling narrowbody jet airliners",
      subtext_kn: "ಜೆಟ್ ವಿಮಾನಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಆಧುನಿಕ ರನ್‌ವೇ ಸೌಲಭ್ಯ",
      source: "Airports Authority of India (AAI)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-800">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-navy-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-widest uppercase">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t('Our Vision in Verified Numbers', 'ಪರಿಶೀಲಿಸಿದ ಅಂಕಿಅಂಶಗಳಲ್ಲಿ ನಮ್ಮ ದೃಷ್ಟಿಕೋನ')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('The Regional Scale of Opportunity', 'ಪ್ರಾದೇಶಿಕ ಅವಕಾಶಗಳ ನೈಜ ಚಿತ್ರಣ')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t(
              'Documented baselines anchoring Belagavi as North Karnataka’s undisputed industrial, agricultural, and educational powerhouse.',
              'ಬೆಳಗಾವಿಯನ್ನು ಉತ್ತರ ಕರ್ನಾಟಕದ ಮುಂಚೂಣಿ ಕೈಗಾರಿಕಾ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ರಾಜಧಾನಿಯನ್ನಾಗಿ ಸ್ಥಾಪಿಸುವ ಅಧಿಕೃತ ಅಂಕಿಅಂಶಗಳು.'
            )}
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-navy-900/60 backdrop-blur-md border border-navy-800/80 hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-1 text-4xl sm:text-5xl font-black text-white group-hover:text-gold-400 transition-colors">
                  {stat.prefix}
                  <span>
                    {isVisible
                      ? stat.value.toLocaleString()
                      : (stat.value > 100 ? '0' : '0')}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gold-500">
                    {stat.suffix}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-200 mt-3">
                  {language === 'kn' ? stat.label_kn : stat.label}
                </h4>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {language === 'kn' ? stat.subtext_kn : stat.subtext}
                </p>
              </div>

              {/* Source Tag */}
              <div className="pt-4 mt-4 border-t border-navy-800/60 flex items-center justify-between text-[10px] text-gray-500">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3 text-gold-500/80" />
                  <span>{t('Source:', 'ಮೂಲ:')} {stat.source}</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 text-center text-xs text-gray-400 max-w-xl mx-auto">
          <p>
            {t(
              'Note: All figures represent published empirical benchmarks. BEDF does not publish fabricated employment or unverified partnership numbers.',
              'ಗಮನಿಸಿ: ಎಲ್ಲಾ ಅಂಕಿಅಂಶಗಳು ಸರಕಾರಿ ದಾಖಲೆಗಳಿಂದ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿವೆ. ಯಾವುದೇ ಕಲ್ಪಿತ ಅಥವಾ ಪರಿಶೀಲಿಸದ ಅಂಕಿಅಂಶಗಳನ್ನು ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

