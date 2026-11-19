'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Building2, 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  FileCheck
} from 'lucide-react';

export default function InvestSection() {
  const { t, language } = useLanguage();

  const panels = [
    {
      id: "explore-industries",
      icon: Building2,
      title: "Explore Regional Industries",
      title_kn: "ಪ್ರಾದೇಶಿಕ ಕೈಗಾರಿಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      description: "Discover operating clusters across precision aerospace, automotive castings, hydraulics, sugar, and electronics.",
      description_kn: "ನಿಖರ ಏರೋಸ್ಪೇಸ್, ಆಟೋಮೋಟಿವ್ ಕ್ಯಾಸ್ಟಿಂಗ್ಸ್, ಹೈಡ್ರಾಲಿಕ್ಸ್ ಮತ್ತು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳ ಕೈಗಾರಿಕಾ ಕ್ಲಸ್ಟರ್‌ಗಳನ್ನು ತಿಳಿಯಿರಿ.",
      actionText: "Browse Sectors",
      actionText_kn: "ವಲಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      href: "/focus-areas"
    },
    {
      id: "discover-opportunities",
      icon: TrendingUp,
      title: "Discover Business Opportunities",
      title_kn: "ವ್ಯಾಪಾರ ಮತ್ತು ಹೂಡಿಕೆ ಅವಕಾಶಗಳು",
      description: "Examine proposed greenfield corridors, airport MRO ventures, logistics hubs, and joint venture prospects.",
      description_kn: "ಹಸಿರು ಕೈಗಾರಿಕಾ ಕಾರಿಡಾರ್‌ಗಳು, ವಿಮಾನ ಎಂಆರ್‌ಒ ಘಟಕಗಳು ಮತ್ತು ಜಂಟಿ ಸಹಭಾಗಿತ್ವದ ಹೂಡಿಕೆ ಅವಕಾಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
      actionText: "View Map Locations",
      actionText_kn: "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
      href: "/#belagavi-map"
    },
    {
      id: "connect-bedf",
      icon: Compass,
      title: "Connect with BEDF Advisory",
      title_kn: "ಬಿಇಡಿಎಫ್ ಸಲಹಾ ತಂಡದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
      description: "Obtain independent, ground-level regional briefings, industrial ecosystem overviews, and chamber introductions.",
      description_kn: "ವಿಶ್ವಾಸಾರ್ಹ ಪ್ರಾದೇಶಿಕ ಮಾಹಿತಿ, ಕೈಗಾರಿಕಾ ಪರಿಸರದ ಅವಲೋಕನ ಮತ್ತು ಸ್ಥಳೀಯ ಉದ್ಯಮಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಪಡೆಯಿರಿ.",
      actionText: "Investment Enquiry",
      actionText_kn: "ಹೂಡಿಕೆ ವಿಚಾರಣೆ",
      href: "/contact"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-navy-900 border-y border-gray-200 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-800 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t('Invest in Belagavi', 'ಬೆಳಗಾವಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            {t('Your Next Opportunity Starts Here', 'ನಿಮ್ಮ ಮುಂದಿನ ಮಹತ್ವದ ಅವಕಾಶ ಇಲ್ಲಿದೆ')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {t(
              'Strategically located at the intersection of Karnataka, Maharashtra, and Goa with superior logistics, dependable engineering talent, and proven industrial mastery.',
              'ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಗೋವಾ ರಾಜ್ಯಗಳ ಸಂಗಮದಲ್ಲಿರುವ ಬೆಳಗಾವಿಯು ಅತ್ಯುತ್ತಮ ಸರಕು ಸಂಪರ್ಕ ಮತ್ತು ನುರಿತ ಎಂಜಿನಿಯರಿಂಗ್ ಪ್ರತಿಭೆಯನ್ನು ಹೊಂದಿದೆ.'
            )}
          </p>
        </div>

        {/* 3 Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.id}
                className="p-8 rounded-3xl bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-700 flex items-center justify-center text-navy-900 dark:text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {language === 'kn' ? panel.title_kn : panel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {language === 'kn' ? panel.description_kn : panel.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-navy-800">
                  <Link
                    href={panel.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-gold-400 group-hover:text-gold-600 transition-colors"
                  >
                    <span>{language === 'kn' ? panel.actionText_kn : panel.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Bar & Mandatory Regulatory Clarification */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-100/70 dark:bg-navy-950/60 border border-gray-200 dark:border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl text-xs text-gray-500 dark:text-gray-400">
            <ShieldCheck className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
            <p>
              {t(
                'Regulatory Transparency: BEDF is an independent regional development body. BEDF does not directly allot land, grant statutory licences, or guarantee state subsidies or commercial yields.',
                'ಶಾಸನಬದ್ಧ ಪಾರದರ್ಶಕತೆ: ಬಿಇಡಿಎಫ್ ಒಂದು ಸ್ವತಂತ್ರ ಪ್ರಾದೇಶಿಕ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ನೇರವಾಗಿ ಭೂಮಿ ಮಂಜೂರು ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಶಾಸನಬದ್ಧ ಪರವಾನಗಿಗಳನ್ನು ನೀಡುವುದಿಲ್ಲ.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
            >
              {t('Investment Enquiry', 'ಹೂಡಿಕೆ ವಿಚಾರಣೆ')}
            </Link>

            <a
              href="tel:+919019088160"
              className="px-4 py-2.5 rounded-full border border-gray-300 dark:border-navy-700 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:border-gold-500 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-500" />
              <span>+91 901 908 8160</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

