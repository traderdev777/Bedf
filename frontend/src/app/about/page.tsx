'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  FileText, 
  Calendar, 
  ArrowRight,
  Compass,
  Building,
  CheckCircle2,
  Sparkles,
  Download
} from 'lucide-react';
import { TiltCard } from '@/components/motion/MotionSystem';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      title: "Regional Ambition",
      title_kn: "ಪ್ರಾದೇಶಿಕ ಮಹತ್ವಾಕಾಂಕ್ಷೆ",
      desc: "Promoting Belagavi and North Karnataka on national and global economic stages.",
      desc_kn: "ಬೆಳಗಾವಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕವನ್ನು ಜಾಗತಿಕ ಆರ್ಥಿಕ ವೇದಿಕೆಯಲ್ಲಿ ಮುಂಚೂಣಿಗೆ ತರುವುದು."
    },
    {
      title: "Empirical Integrity",
      title_kn: "ಸತ್ಯನಿಷ್ಠೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆ",
      desc: "Relying exclusively on verified data; avoiding ungrounded claims or invented numbers.",
      desc_kn: "ಪರಿಶೀಲಿಸಿದ ನೈಜ ಅಂಕಿಅಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದು."
    },
    {
      title: "Collaborative Leadership",
      title_kn: "ಸಹಯೋಗದ ನಾಯಕತ್ವ",
      desc: "Bridging industry, academia, entrepreneurs, government stakeholders, and citizens.",
      desc_kn: "ಕೈಗಾರಿಕೆ, ಶಿಕ್ಷಣ, ಸರಕಾರ ಮತ್ತು ನಾಗರಿಕರ ನಡುವೆ ಸಮನ್ವಯ ಸಾಧಿಸುವುದು."
    },
    {
      title: "Sustainable Inclusivity",
      title_kn: "ಸುಸ್ಥಿರ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ",
      desc: "Ensuring economic expansion benefits youth, rural taluks, and regional artisans.",
      desc_kn: "ಆರ್ಥಿಕ ಪ್ರಗತಿಯ ಲಾಭ ಗ್ರಾಮೀಣ ತಾಲೂಕುಗಳು ಮತ್ತು ಯುವಜನತೆಗೆ ತಲುಪುವಂತೆ ಮಾಡುವುದು."
    }
  ];

  const roadmapMilestones = [
    {
      year: "2026",
      title: "Phase 1: Foundation & Regional Blueprint",
      title_kn: "ಹಂತ 1: ಅಡಿಪಾಯ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ನೀಲನಕ್ಷೆ",
      desc: "Unveiling the BEDF digital platform, formalizing the 7 strategic focus areas, and launching the Belagavi Interactive Map.",
      desc_kn: "ಬಿಇಡಿಎಫ್ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್ ಬಿಡುಗಡೆ, 7 ಕಾರ್ಯತಂತ್ರದ ವಲಯಗಳ ಸ್ಥಾಪನೆ ಮತ್ತು ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ ಲೋಕಾರ್ಪಣೆ."
    },
    {
      year: "2027",
      title: "Phase 2: People Network & Incubation Support",
      title_kn: "ಹಂತ 2: ಮಾನವ ಸಂಪನ್ಮೂಲ ಜಾಲ ಮತ್ತು ನವೋದ್ಯಮ ಬೆಂಬಲ",
      desc: "Activating the multi-tier membership directory, recruiting 500+ specialized volunteers, and hosting the Belagavi Tech Roundtables.",
      desc_kn: "ಸದಸ್ಯತ್ವ ಜಾಲ ವಿಸ್ತರಣೆ, 500ಕ್ಕೂ ಹೆಚ್ಚು ನುರಿತ ಸ್ವಯಂಸೇವಕರ ಸೇರ್ಪಡೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ದುಂಡುಮೇಜಿನ ಸಭೆಗಳು."
    },
    {
      year: "2028",
      title: "Phase 3: North Karnataka Industrial Summit",
      title_kn: "ಹಂತ 3: ಉತ್ತರ ಕರ್ನಾಟಕ ಕೈಗಾರಿಕಾ ಹೂಡಿಕೆ ಶೃಂಗಸಭೆ",
      desc: "Convening national and global investors to showcase greenfield and brownfield opportunities across Belagavi's 15 taluks.",
      desc_kn: "ಬೆಳಗಾವಿಯ 15 ತಾಲೂಕುಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಅವಕಾಶಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ಜಾಗತಿಕ ಹೂಡಿಕೆದಾರರ ಶೃಂಗಸಭೆ."
    },
    {
      year: "2029+",
      title: "Phase 4: Advanced Regional Intelligence Platform",
      title_kn: "ಹಂತ 4: ಸುಧಾರಿತ ಪ್ರಾದೇಶಿಕ ಆರ್ಥಿಕ ಸಂಶೋಧನಾ ಕೇಂದ್ರ",
      desc: "Operating continuous economic dashboards, patent support cells, and supply-chain integration with Goa and Maharashtra corridors.",
      desc_kn: "ನಿರಂತರ ಆರ್ಥಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು, ಪೇಟೆಂಟ್ ನೆರವು ಮತ್ತು ನೆರೆ ರಾಜ್ಯಗಳೊಂದಿಗೆ ಪೂರೈಕೆ ಜಾಲ ಸಮನ್ವಯ."
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <Logo variant="horizontal" className="mb-2" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('About the Foundation', 'ಪ್ರತಿಷ್ಠಾನದ ಬಗ್ಗೆ')}</span>
          </div>

          <h1 className="text-hero-fluid font-display font-black text-navy-950 dark:text-white">
            {t(
              'Building Belagavi. Empowering North Karnataka.',
              'ಬೆಳಗಾವಿ ನಿರ್ಮಾಣ. ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಬಲೀಕರಣ.'
            )}
          </h1>

          <p className="font-sans text-lead-fluid text-gray-600 dark:text-gray-300">
            {t(
              'Belagavi Economic Development Foundation (BEDF) is an independent, non-governmental, citizen-led regional catalyst dedicated to unlocking Belagavi’s economic momentum.',
              'ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ (BEDF) ಒಂದು ಸ್ವತಂತ್ರ, ಸರಕಾರೇತರ, ನಾಗರಿಕ ನೇತೃತ್ವದ ವೇದಿಕೆಯಾಗಿದ್ದು, ಬೆಳಗಾವಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಮಗ್ರ ಆರ್ಥಿಕ ಪ್ರಗತಿಗೆ ಬದ್ಧವಾಗಿದೆ.'
            )}
          </p>
        </div>

        {/* Section 1: Who We Are & Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
              {t('Who We Are', 'ನಾವ್ಯಾರು')}
            </h2>

            {/* Editorial Statement: Playfair Display */}
            <blockquote className="font-editorial text-lg sm:text-xl text-navy-900 dark:text-gold-300 font-semibold italic border-l-2 border-gold-500 pl-4 py-1 my-4 leading-relaxed">
              {t(
                '“Rooted in Rani Chennamma’s historic sovereign courage, Belagavi now commands an unstoppable trajectory in aerospace, clean energy, and applied intelligence.”',
                '“ರಾಣಿ ಚೆನ್ನಮ್ಮನವರ ಐತಿಹಾಸಿಕ ಸ್ವಾಭಿಮಾನದ ತವರು ಬೆಳಗಾವಿಯು ಇಂದು ಏರೋಸ್ಪೇಸ್, ಹಸಿರು ಇಂಧನ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಶಕ್ತಿಕೇಂದ್ರವಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತಿದೆ.”'
              )}
            </blockquote>

            <p className="font-sans text-body-fluid text-gray-700 dark:text-gray-300 font-normal">
              {t(
                'Belagavi is historically renowned for its industrial resilience, military valour, academic depth, and strategic location at the convergence of Karnataka, Maharashtra, and Goa. However, regional industrial growth requires proactive coordination, institutional research, and modern digital storytelling to attract world-class enterprise.',
                'ಬೆಳಗಾವಿಯು ಕೈಗಾರಿಕಾ ಶಕ್ತಿ, ಸೈನಿಕ ಶೌರ್ಯ, ಶೈಕ್ಷಣಿಕ ಹಿನ್ನೆಲೆ ಮತ್ತು ಮೂರು ರಾಜ್ಯಗಳ ಗಡಿ ಸಂಗಮದ ಮೂಲಕ ಐತಿಹಾಸಿಕವಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಆದರೆ ಆಧುನಿಕ ಜಗತ್ತಿನಲ್ಲಿ ಬೃಹತ್ ಹೂಡಿಕೆಗಳನ್ನು ಆಕರ್ಷಿಸಲು ಪೂರ್ವಭಾವಿ ಸಂಯೋಜನೆ ಮತ್ತು ನಿಖರ ಸಂಶೋಧನೆ ಅಗತ್ಯ.'
              )}
            </p>
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
              {t(
                'BEDF bridges the gap between grassroots industrialists, young engineers, research institutions, and international business networks. We operate with strict adherence to facts, zero political bias, and an unwavering commitment to regional prosperity.',
                'ಬಿಇಡಿಎಫ್ ಸ್ಥಳೀಯ ಉದ್ಯಮಿಗಳು, ಯುವ ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ವಾಣಿಜ್ಯ ಜಾಲಗಳ ನಡುವೆ ಸೇತುವೆಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.'
              )}
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={5}>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-navy-700 shadow-xl aspect-[4/3] group">
                <Image
                  src="/images/kittur_fort.jpg"
                  alt="Kittur Fort Belagavi Heritage — Authentic Photograph"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-display font-bold block text-gold-400">Heritage of Self-Reliance</span>
                  <span className="font-sans text-gray-200">Kittur Fort — Honoring Rani Chennamma’s sovereign 1824 legacy.</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Section 2: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-950 dark:text-white">
              {t('Our Vision', 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {t(
                'To establish Belagavi as India’s foremost tier-2 hub for precision aerospace, advanced manufacturing, applied artificial intelligence, and technical innovation by 2035.',
                '2035 ರ ವೇಳೆಗೆ ಬೆಳಗಾವಿಯನ್ನು ಭಾರತದ ಮುಂಚೂಣಿ ನಿಖರ ಏರೋಸ್ಪೇಸ್, ಸುಧಾರಿತ ಉತ್ಪಾದನೆ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಶಕ್ತಿಕೇಂದ್ರವನ್ನಾಗಿ ರೂಪಿಸುವುದು.'
              )}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-navy-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {t('Our Mission', 'ನಮ್ಮ ಧ್ಯೇಯ')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t(
                'To unite local industry leadership, VTU’s vast academic network, and visionary investors into an agile ecosystem that fosters high-skill employment and regional wealth generation.',
                'ಸ್ಥಳೀಯ ಕೈಗಾರಿಕಾ ನಾಯಕರು, ವಿಟಿಯು ತಾಂತ್ರಿಕ ಜಾಲ ಮತ್ತು ದೂರದೃಷ್ಟಿಯ ಹೂಡಿಕೆದಾರರನ್ನು ಒಗ್ಗೂಡಿಸಿ ಉನ್ನತ ಉದ್ಯೋಗ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಆರ್ಥಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಸೃಷ್ಟಿಸುವುದು.'
              )}
            </p>
          </div>
        </div>

        {/* Section 2.5: Official Brand Insignia & Symbolism */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 dark:border-navy-800 pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 dark:bg-navy-800 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('Brand Identity & Architecture', 'ಬ್ರ್ಯಾಂಡ್ ಗುರುತು ಮತ್ತು ಲಾಂಛನ')}</span>
              </div>
              <h2 className="text-3xl font-black text-navy-950 dark:text-white">
                {t('The BEDF Official Insignia', 'ಬಿಇಡಿಎಫ್ ಅಧಿಕೃತ ಲಾಂಛನ')}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                {t(
                  'Every curve, colour, and element within the official BEDF insignia captures the essence of Belagavi—uniting our historic governance, agrarian abundance, industrial muscle, and soaring aerospace future.',
                  'ಬಿಇಡಿಎಫ್ ಲಾಂಛನದ ಪ್ರತಿಯೊಂದು ವಿವರವು ಬೆಳಗಾವಿಯ ಹಿರಿಮೆ, ಸುವರ್ಣ ವಿಧಾನಸೌಧದ ಶಾಸಕಾಂಗ ವೈಭವ, ಕೃಷಿ ಸಮೃದ್ಧಿ, ಕೈಗಾರಿಕಾ ಶಕ್ತಿ ಮತ್ತು ಏರೋಸ್ಪೇಸ್ ಮುನ್ನೋಟವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.'
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 3D Brand Presentation Showcase */}
            <div className="lg:col-span-6">
              <TiltCard className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-navy-700 shadow-2xl aspect-[3/2] bg-navy-950 group">
                <Image
                  src="/assets/bedf-brand-mockup.jpg"
                  alt="Official BEDF Brand Presentation Mockup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-gold-400">BEDF Official Insignia Mockup</span>
                  <span className="text-gray-300">Belagavi, Karnataka</span>
                </div>
              </TiltCard>
            </div>

            {/* Right Emblem Breakdown */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800">
                  <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Suvarna Vidhana Soudha</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t('Represents Belagavi as Karnataka’s legislative capital and North Karnataka’s administrative pride.', 'ಕರ್ನಾಟಕದ ಎರಡನೇ ಶಾಸಕಾಂಗ ರಾಜಧಾನಿಯಾದ ಬೆಳಗಾವಿಯ ಆಡಳಿತಾತ್ಮಕ ಹಿರಿಮೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ.')}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800">
                  <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Industrial Skyline & Clean Power</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t('Highlights Belagavi’s 3,000+ foundry units, heavy machinery clusters, and green wind energy.', '3,000ಕ್ಕೂ ಹೆಚ್ಚು ಫೌಂಡ್ರಿ ಘಟಕಗಳು, ಭಾರೀ ಕೈಗಾರಿಕೆಗಳು ಮತ್ತು ಹಸಿರು ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನವನ್ನು ಬಿಂಬಿಸುತ್ತದೆ.')}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800">
                  <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Agrarian Contours</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t('Symbolizes the lush agricultural valleys of Ghataprabha and Malaprabha, sugarcane wealth, and food processing.', 'ಘಟಪ್ರಭಾ-ಮಲಪ್ರಭಾ ಕಣಿವೆಗಳ ಫಲವತ್ತಾದ ಕೃಷಿ ಸಮೃದ್ಧಿ ಮತ್ತು ಕಬ್ಬು ಉತ್ಪಾದನೆಯನ್ನು ಸಂಕೇತಿಸುತ್ತದೆ.')}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-navy-950/70 border border-gray-100 dark:border-navy-800">
                  <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Aerospace Ascent & Golden Arc</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t('Honors India’s first notified precision aerospace SEZ (Aequs) and the unstoppable regional economic flight.', 'ಭಾರತದ ಮೊದಲ ಅಧಿಸೂಚಿತ ನಿಖರ ಏರೋಸ್ಪೇಸ್ ಸೆಜ್ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಆರ್ಥಿಕತೆಯ ಮುನ್ನಡೆಯನ್ನು ಸಾರುತ್ತದೆ.')}
                  </p>
                </div>
              </div>

              {/* Download Official Assets Bar */}
              <div className="pt-4 border-t border-gray-200 dark:border-navy-800 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-navy-950 dark:text-white">
                  {t('Download Official Assets:', 'ಅಧಿಕೃತ ಲೋಗೋ ಡೌನ್‌ಲೋಡ್:')}
                </span>
                <a
                  href="/assets/bedf-logo-horizontal.png"
                  download="BEDF-Official-Horizontal-Logo.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 text-xs font-semibold text-navy-900 dark:text-gold-400 hover:border-gold-500 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Horizontal (Light)</span>
                </a>
                <a
                  href="/assets/bedf-logo-horizontal-white.png"
                  download="BEDF-Official-Horizontal-Logo-White.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 text-xs font-semibold text-navy-900 dark:text-gold-400 hover:border-gold-500 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Horizontal (Dark)</span>
                </a>
                <a
                  href="/assets/bedf-brand-mockup.jpg"
                  download="BEDF-Brand-Presentation.jpg"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 text-xs font-semibold text-navy-900 dark:text-gold-400 hover:border-gold-500 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Brand Mockup</span>
                </a>
              </div>
            </div>
          </div>

          {/* Official Design System Palette Swatches */}
          <div className="pt-8 border-t border-gray-200 dark:border-navy-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-navy-950 dark:text-white">
                  {t('Official Brand Palette & Design Tokens', 'ಅಧಿಕೃತ ಬಣ್ಣಗಳ ವ್ಯವಸ್ಥೆ')}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {t('Harmonized institutional colour hierarchy governing all digital touchpoints', 'ಎಲ್ಲಾ ಡಿಜಿಟಲ್ ಮಾಧ್ಯಮಗಳಲ್ಲಿ ಬಳಸಲಾದ ಸಮನ್ವಯ ಬಣ್ಣಗಳ ವ್ಯವಸ್ಥೆ')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#145A45] shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Deep Emerald</span>
                  <span className="block text-[10px] font-mono text-gray-400">#145A45</span>
                  <span className="block text-[9px] text-emerald-600 font-semibold mt-0.5">Primary Accent</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#142B45] shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Midnight Navy</span>
                  <span className="block text-[10px] font-mono text-gray-400">#142B45</span>
                  <span className="block text-[9px] text-blue-600 font-semibold mt-0.5">Institutional</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-orange-500/40 ring-1 ring-orange-500/20 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#D95B20] shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Deep Orange</span>
                  <span className="block text-[10px] font-mono text-orange-600">#D95B20</span>
                  <span className="block text-[9px] text-orange-600 font-bold mt-0.5">Energy & Innovation</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#C5A15B] shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Champagne Gold</span>
                  <span className="block text-[10px] font-mono text-gray-400">#C5A15B</span>
                  <span className="block text-[9px] text-amber-600 font-semibold mt-0.5">Decorative</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#F7F8F4] border border-gray-300 dark:border-navy-700 shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Warm Ivory</span>
                  <span className="block text-[10px] font-mono text-gray-400">#F7F8F4</span>
                  <span className="block text-[9px] text-gray-500 font-semibold mt-0.5">Dominant Light Bg</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#E5EDE6] border border-gray-300 dark:border-navy-700 shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Soft Sage</span>
                  <span className="block text-[10px] font-mono text-gray-400">#E5EDE6</span>
                  <span className="block text-[9px] text-gray-500 font-semibold mt-0.5">Subtle Balance</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-navy-950 border border-gray-200 dark:border-navy-800 space-y-2">
                <div className="w-full h-8 rounded-lg bg-[#263238] shadow-sm" />
                <div>
                  <span className="block text-[11px] font-bold text-navy-950 dark:text-white">Charcoal</span>
                  <span className="block text-[10px] font-mono text-gray-400">#263238</span>
                  <span className="block text-[9px] text-gray-500 font-semibold mt-0.5">Body Contrast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Core Operating Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-navy-950 dark:text-white">
              {t('Our Core Values', 'ನಮ್ಮ ತತ್ವಗಳು ಮತ್ತು ಮೌಲ್ಯಗಳು')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('The principles that govern every initiative, research paper, and partnership.', 'ಪ್ರತಿ ಯೋಜನೆ ಮತ್ತು ಸಂಶೋಧನೆಯನ್ನು ಮುನ್ನಡೆಸುವ ಮೂಲ ತತ್ವಗಳು.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-2 hover:border-gold-500/50 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-navy-50 dark:bg-navy-800 text-gold-500 font-bold text-xs flex items-center justify-center mb-4">
                  0{idx + 1}
                </span>
                <h4 className="font-bold text-navy-950 dark:text-white text-base">
                  {language === 'kn' ? val.title_kn : val.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {language === 'kn' ? val.desc_kn : val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Roadmap Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-navy-950 dark:text-white">
              {t('Long-Term Development Roadmap', 'ದೀರ್ಘಕಾಲೀನ ಅಭಿವೃದ್ಧಿ ಮಾರ್ಗಸೂಚಿ')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('A structured, phased progression toward North Karnataka’s economic resurgence.', 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಆರ್ಥಿಕ ಪ್ರಗತಿಗಾಗಿ ಹಂತ-ಹಂತದ ಯೋಜನೆ.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapMilestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 dark:bg-navy-900/60 border border-gray-200 dark:border-navy-800 space-y-3 relative">
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-mono font-bold">
                  {m.year}
                </span>
                <h4 className="font-bold text-navy-950 dark:text-white text-sm mt-2">
                  {language === 'kn' ? m.title_kn : m.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {language === 'kn' ? m.desc_kn : m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Institutional Governance & Disclaimer */}
        <div id="transparency" className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-navy-800 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{t('Governance, Integrity & Legal Stance', 'ಆಡಳಿತ ಮತ್ತು ಪಾರದರ್ಶಕತೆ')}</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            {t('Independence and Commitment to Truth', 'ಸ್ವತಂತ್ರ ಮತ್ತು ಸತ್ಯನಿಷ್ಠ ನಿಲುವು')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300 leading-relaxed pt-2">
            <p>
              {t(
                'BEDF is an independent citizen-led body and does not claim official government department status. We do not directly allot industrial plots, issue municipal approvals, or guarantee statutory state subsidies. All investor engagements are advisory and facilitate introductions to legitimate industry associations and official portals.',
                'ಬಿಇಡಿಎಫ್ ಒಂದು ಸ್ವತಂತ್ರ ನಾಗರಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು, ಸರಕಾರಿ ಇಲಾಖೆಯೆಂದು ಹೇಳಿಕೊಳ್ಳುವುದಿಲ್ಲ. ನಾವು ನೇರವಾಗಿ ಭೂಮಿ ಹಂಚಿಕೆ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಸರಕಾರಿ ಸಬ್ಸಿಡಿಗಳನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ.'
              )}
            </p>
            <p>
              {t(
                'Our research papers, map coordinates, and economic indices are strictly derived from verified open-access archives (Census 2011, KIADB gazettes, AAI, VTU, and industry survey papers). Any proposed initiatives are clearly flagged as "Proposed Opportunities" to maintain rigorous public trust.',
                'ನಮ್ಮ ಎಲ್ಲಾ ಸಂಶೋಧನಾ ವರದಿಗಳು ಮತ್ತು ನಕ್ಷೆಯ ಮಾಹಿತಿಯು ಸರಕಾರದ ಅಧಿಕೃತ ದಾಖಲೆಗಳಿಂದ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿವೆ. ಸಾರ್ವಜನಿಕ ನಂಬಿಕೆಯನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಕಲ್ಪಿತ ಮಾಹಿತಿಯನ್ನು ತಪ್ಪಿಸಲಾಗಿದೆ.'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

