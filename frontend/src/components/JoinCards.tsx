'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Users, 
  HeartHandshake, 
  Handshake, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function JoinCards() {
  const { t, language } = useLanguage();

  const cards = [
    {
      id: "membership",
      icon: Users,
      title: "Become a Member",
      title_kn: "ಸದಸ್ಯರಾಗಿ ಸೇರಿ",
      tagline: "Professional, Business & Institutional tiers",
      tagline_kn: "ವೃತ್ತಿಪರ, ವಾಣಿಜ್ಯ ಮತ್ತು ಸಂಸ್ಥಾಗತ ಸದಸ್ಯತ್ವ",
      description: "Connect with regional industrialists, entrepreneurs, technology leaders, and passionate citizens championing Belagavi's economic resurgence.",
      description_kn: "ಬೆಳಗಾವಿಯ ಆರ್ಥಿಕ ಪುನರುಜ್ಜೀವನಕ್ಕೆ ಕೈಜೋಡಿಸಲು ಉದ್ಯಮಿಗಳು, ತಂತ್ರಜ್ಞಾನ ತಜ್ಞರು ಮತ್ತು ನಾಗರಿಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
      actionLabel: "Become a Member",
      actionLabel_kn: "ಸದಸ್ಯರಾಗಿ",
      href: "/join?tab=membership",
      isPrimary: true
    },
    {
      id: "volunteer",
      icon: HeartHandshake,
      title: "Become a Volunteer",
      title_kn: "ಸ್ವಯಂಸೇವಕರಾಗಿ",
      tagline: "Youth, Technology, Research & Kannada Content",
      tagline_kn: "ಯುವಜನತೆ, ತಂತ್ರಜ್ಞಾನ, ಸಂಶೋಧನೆ & ಕನ್ನಡ ವಿಷಯ",
      description: "Contribute your specialized skills, passion, and time to local hackathons, youth skilling drives, regional research, and events across North Karnataka.",
      description_kn: "ಉತ್ತರ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಹ್ಯಾಕಥಾನ್‌ಗಳು, ಯುವ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಸಂಶೋಧನಾ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನಿಮ್ಮ ಕೌಶಲ್ಯ ಮತ್ತು ಸಮಯವನ್ನು ವಿನಿಯೋಗಿಸಿ.",
      actionLabel: "Become a Volunteer",
      actionLabel_kn: "ಸ್ವಯಂಸೇವಕರಾಗಿ",
      href: "/join?tab=volunteer",
      isPrimary: false
    },
    {
      id: "partner",
      icon: Handshake,
      title: "Become a Partner",
      title_kn: "ಸಂಸ್ಥಾಗತ ಪಾಲುದಾರರಾಗಿ",
      tagline: "Corporates, Universities, Chambers & Incubators",
      tagline_kn: "ಕಾರ್ಪೊರೇಟ್‌ಗಳು, ಕಾಲೇಜುಗಳು, ಚೇಂಬರ್ಸ್‌ ಮತ್ತು ಇನ್‌ಕ್ಯುಬೇಟರ್ಸ್‌",
      description: "Partner with BEDF on institutional research, curriculum synchronization, venture incubation, and multi-sector regional development conferences.",
      description_kn: "ಸಂಶೋಧನೆ, ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ ಸುಧಾರಣೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಸಮಾವೇಶಗಳಿಗಾಗಿ ಬಿಇಡಿಎಫ್ ಜತೆಗೆ ಕೈಜೋಡಿಸಿ.",
      actionLabel: "Partner with BEDF",
      actionLabel_kn: "ಪಾಲುದಾರರಾಗಿ",
      href: "/join?tab=partner",
      isPrimary: false
    }
  ];

  return (
    <section className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Join the BEDF Network', 'ಬಿಇಡಿಎಫ್ ಜಾಲಕ್ಕೆ ಸೇರಿ')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            {t('Be Part of the Growth Story', 'ಬೆಳವಣಿಗೆಯ ಪಯಣದಲ್ಲಿ ನೀವೂ ಭಾಗಿಯಾಗಿ')}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {t(
              'Regional transformation requires passionate people. Whether as an industry member, skilled volunteer, or strategic institutional partner, your involvement counts.',
              'ಪ್ರಾದೇಶಿಕ ಪರಿವರ್ತನೆಗೆ ಜನರ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ ಅತ್ಯಗತ್ಯ. ಕೈಗಾರಿಕಾ ಸದಸ್ಯರಾಗಿ, ನುರಿತ ಸ್ವಯಂಸೇವಕರಾಗಿ ಅಥವಾ ಸಂಸ್ಥಾಗತ ಪಾಲುದಾರರಾಗಿ ನಿಮ್ಮ ಕೊಡುಗೆ ಮಹತ್ವದ್ದು.'
            )}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1.5 border ${
                  card.isPrimary
                    ? 'bg-white dark:bg-navy-900 border-gold-500/60 ring-1 ring-gold-500/20'
                    : 'bg-white dark:bg-navy-900/80 border-gray-200/80 dark:border-navy-800'
                }`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm ${
                      card.isPrimary
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {language === 'kn' ? card.title_kn : card.title}
                  </h3>

                  <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 mt-1">
                    {language === 'kn' ? card.tagline_kn : card.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {language === 'kn' ? card.description_kn : card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-navy-800">
                  <Link
                    href={card.href}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                      card.isPrimary
                        ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 hover:bg-gold-600 dark:hover:bg-gold-400'
                        : 'bg-gray-100 dark:bg-navy-800 text-navy-900 dark:text-white hover:bg-gold-500 hover:text-navy-950 dark:hover:bg-gold-500 dark:hover:text-navy-950'
                    }`}
                  >
                    <span>{language === 'kn' ? card.actionLabel_kn : card.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
