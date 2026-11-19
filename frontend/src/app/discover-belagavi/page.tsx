'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import BelagaviInteractiveMap from '@/components/BelagaviInteractiveMap';
import { BELAGAVI_FACTS } from '@/data/bedfContent';
import { BELAGAVI_IMAGE_ATTRIBUTIONS } from '@/data/attributions';
import { TiltCard } from '@/components/motion/MotionSystem';
import { 
  Compass, 
  MapPin, 
  CloudSun, 
  Droplets, 
  Mountain, 
  Plane, 
  Truck, 
  GraduationCap, 
  Building2, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Camera
} from 'lucide-react';

export default function DiscoverBelagaviPage() {
  const { t, language } = useLanguage();

  return (
    <div className="py-24 bg-white dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('Regional Dossier & Profile', 'ಪ್ರಾದೇಶಿಕ ಚಿತ್ರಣ ಮತ್ತು ಕಡತ')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-950 dark:text-white tracking-tight leading-tight">
            {t('Discover Belagavi', 'ಬೆಳಗಾವಿ ದರ್ಶನ')}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t(
              'A complete regional profile of Karnataka’s second-largest district. Combining strategic tri-state geography, pleasant sub-tropical climate, deep industrial heritage, and rich educational infrastructure.',
              'ಕರ್ನಾಟಕದ ಎರಡನೇ ಬೃಹತ್ ಜಿಲ್ಲೆಯ ಸಮಗ್ರ ಚಿತ್ರಣ. ಮೂರು ರಾಜ್ಯಗಳ ಗಡಿ ಸಂಗಮ, ಆಹ್ಲಾದಕರ ಹವಾಮಾನ, ಕೈಗಾರಿಕಾ ಪರಂಪರೆ ಮತ್ತು ಅತ್ಯುನ್ನತ ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆಯನ್ನು ಹೊಂದಿರುವ ನಾಡು.'
            )}
          </p>
        </div>

        {/* Belagavi at a Glance Fact Strip */}
        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-navy-800 pb-4">
            <h2 className="text-xl font-bold text-navy-950 dark:text-white">
              {t('Belagavi at a Glance', 'ಬೆಳಗಾವಿ: ಒಂದು ನೋಟ')}
            </h2>
            <span className="text-xs text-gray-400">
              {t('Verified Baseline: Census 2011 & Gazette', 'ಪರಿಶೀಲಿಸಿದ ಅಂಕಿಅಂಶಗಳು: ಜನಗಣತಿ 2011')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {BELAGAVI_FACTS.map((fact, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">
                  {language === 'kn' ? fact.label_kn : fact.label}
                </span>
                <span className="text-lg sm:text-xl font-black text-navy-950 dark:text-gold-400">
                  {fact.value}
                </span>
              </div>
            ))}
            <div className="space-y-1">
              <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">
                {t('District Elevation', 'ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ಎತ್ತರ')}
              </span>
              <span className="text-lg sm:text-xl font-black text-navy-950 dark:text-gold-400">
                762m (2,500 ft)
              </span>
            </div>
          </div>
        </div>

        {/* Geographic & Climate Advantage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 dark:text-white">
              {t('Tri-State Strategic Gateway', 'ಮೂರು ರಾಜ್ಯಗಳ ಹೆಬ್ಬಾಗಿಲು')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t(
                'Situated at the tri-junction of Karnataka, Maharashtra, and Goa, placing companies within rapid reach of Pune, Mumbai, Hubballi, and Goa seaports.',
                'ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಗೋವಾ ರಾಜ್ಯಗಳ ಗಡಿ ಸಂಗಮದಲ್ಲಿದ್ದು, ಪುಣೆ, ಮುಂಬೈ, ಹುಬ್ಬಳ್ಳಿ ಮತ್ತು ಗೋವಾ ಬಂದರುಗಳಿಗೆ ತ್ವರಿತ ಸಂಪರ್ಕ ಒದಗಿಸುತ್ತದೆ.'
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <CloudSun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 dark:text-white">
              {t('Pleasant Year-Round Climate', 'ಆಹ್ಲಾದಕರ ವರ್ಷಪೂರ್ತಿ ಹವಾಮಾನ')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t(
                'Resting at 762m altitude on the Sahyadri foothills, Belagavi enjoys temperate, sub-tropical weather that promotes high workforce comfort and low HVAC cooling costs.',
                'ಸಹ್ಯಾದ್ರಿ ತಪ್ಪಲಿನ 762 ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿರುವ ಬೆಳಗಾವಿಯು ಆಹ್ಲಾದಕರ ತಂಪಾದ ಹವಾಮಾನವನ್ನು ಹೊಂದಿದೆ.'
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 dark:text-white">
              {t('Perennial Water Catchments', 'ಶಾಶ್ವತ ಜಲ ಸಂಪನ್ಮೂಲಗಳು')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t(
                'Nourished by the Krishna, Ghataprabha, and Malaprabha rivers along with the 37.7 TMC Renuka Sagar reservoir, securing year-round industrial and municipal water.',
                'ಕೃಷ್ಣಾ, ಘಟಪ್ರಭಾ ಮತ್ತು ಮಲಪ್ರಭಾ ನದಿಗಳು ಹಾಗೂ 37.7 ಟಿಎಂಸಿ ರೇಣುಕಾ ಸಾಗರ ಜಲಾಶಯದಿಂದ ಸಮೃದ್ಧ ಜಲ ಸಂಪನ್ಮೂಲ ಲಭ್ಯ.'
              )}
            </p>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-navy-950 dark:text-white">
              {t('Explore Verified Ecosystem Locations', 'ಪರಿಶೀಲಿಸಿದ ಭೌಗೋಳಿಕ ಪರಿಸರ')}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('Filter by sector or taluk to review coordinates and verified source citations.', 'ಸ್ಥಳೀಯ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಫಿಲ್ಟರ್ ಬಳಸಿ.')}
            </p>
          </div>

          <BelagaviInteractiveMap />
        </div>

        {/* Verified Photo Landmark Gallery */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-navy-950 dark:text-white">
                {t('Belagavi Visual Heritage & Landmarks', 'ಬೆಳಗಾವಿಯ ಪ್ರಮುಖ ಹೆಗ್ಗುರುತುಗಳು')}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {t('Authentic documented regional sites photographed across Belagavi district.', 'ಬೆಳಗಾವಿ ಜಿಲ್ಲೆಯ ಅಧಿಕೃತ ಮತ್ತು ಐತಿಹಾಸಿಕ ತಾಣಗಳು.')}
              </p>
            </div>

            <Link
              href="/credits"
              className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline inline-flex items-center gap-1"
            >
              <span>{t('View Photographer Credits & Metadata', 'ಚಿತ್ರಗಳ ಕೃತಜ್ಞತೆಗಳು')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BELAGAVI_IMAGE_ATTRIBUTIONS.map((item) => (
              <TiltCard key={item.id} maxTilt={6} className="h-full">
                <div className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                      <Image
                        src={item.imagePath}
                        alt={`${item.landmark} — Belagavi Authentic Photography`}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md text-[10px] font-bold text-gold-400 uppercase tracking-wider border border-white/10">
                        {item.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-1.5">
                      <h4 className="font-display font-extrabold text-navy-950 dark:text-white text-base group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                        {language === 'kn' ? item.landmark_kn : item.landmark}
                      </h4>
                      <p className="font-sans text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                        {language === 'kn' ? item.description_kn : item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-gray-100 dark:border-navy-800/80 mt-2 flex items-center justify-between text-[10px] text-gray-400">
                    <span className="truncate max-w-[170px]" title={item.author}>Photo: {item.author}</span>
                    <span className="font-mono text-gold-600 dark:text-gold-400">{item.license.split(' ')[0]}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

