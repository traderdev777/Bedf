'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Bot, 
  Cpu, 
  Plane, 
  Factory, 
  Zap, 
  Microchip, 
  Compass, 
  ArrowRight, 
  Info,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ScrollReveal, TiltCard, PREMIUM_EASE } from '@/components/motion/MotionSystem';

interface ShowcaseItem {
  id: string;
  category: string;
  category_kn: string;
  title: string;
  title_kn: string;
  tagline: string;
  tagline_kn: string;
  description: string;
  description_kn: string;
  readinessTimeline: string;
  regionalPathway: string;
  regionalPathway_kn: string;
  icon: React.ElementType;
}

export default function InnovationShowcase() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: "ai-edge",
      category: "Artificial Intelligence",
      category_kn: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ",
      title: "Edge AI & Industrial Computer Vision",
      title_kn: "ಎಡ್ಜ್ ಎಐ ಮತ್ತು ಕೈಗಾರಿಕಾ ಕಂಪ್ಯೂಟರ್ ವಿಷನ್",
      tagline: "Sub-millisecond optical surface flaw detection in foundries",
      tagline_kn: "ಫೌಂಡ್ರಿಗಳಲ್ಲಿ ನ್ಯೂನತೆಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವ ಕಂಪ್ಯೂಟರ್ ವಿಷನ್",
      description: "Deploying lightweight convolutional neural networks directly onto CNC machinery to automate metallurgic defect detection, dramatically lowering rejection rates for automotive casting exporters.",
      description_kn: "ಸಿಎನ್‌ಸಿ ಯಂತ್ರಗಳಲ್ಲಿ ನೇರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಎಐ ಮಾದರಿಗಳನ್ನು ಅಳವಡಿಸಿ, ಆಟೋಮೋಟಿವ್ ಕ್ಯಾಸ್ಟಿಂಗ್ಸ್ ದೋಷಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವುದು.",
      readinessTimeline: "Next 1-3 Years",
      regionalPathway: "VTU AI Labs collaborating with Machhe Foundry Cluster",
      regionalPathway_kn: "ವಿಟಿಯು ಎಐ ಲ್ಯಾಬ್ ಮತ್ತು ಮಚ್ಚೆ ಫೌಂಡ್ರಿ ಕ್ಲಸ್ಟರ್ ಸಹಯೋಗ",
      icon: Cpu
    },
    {
      id: "robotics-automation",
      category: "Robotics & Automation",
      category_kn: "ರೋಬೋಟಿಕ್ಸ್ & ಆಟೊಮೇಷನ್",
      title: "Industrial Robotic Arm Cells & Cobots",
      title_kn: "ಕೈಗಾರಿಕಾ ರೊಬೊಟಿಕ್ ಆರ್ಮ್ ಕೋಶಗಳು",
      tagline: "Precision multi-axis articulated robots for heavy sand mould casting",
      tagline_kn: "ಭಾರವಾದ ಸ್ಯಾಂಡ್ ಮೋಲ್ಡ್ ಕಾಸ್ಟಿಂಗ್‌ಗಾಗಿ ನಿಖರ ರೋಬೋಟ್‌ಗಳು",
      description: "Introducing collaborative robots (cobots) to automate sand moulding, core placement, and fettling operations, increasing human workplace safety and elevating factory throughput.",
      description_kn: "ಫೌಂಡ್ರಿಗಳಲ್ಲಿ ಕಾರ್ಮಿಕರ ಸುರಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಉತ್ಪಾದನಾ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಕಾರಿ ರೋಬೋಟ್‌ಗಳ ಬಳಕೆ.",
      readinessTimeline: "Next 2-4 Years",
      regionalPathway: "Aequs Special Economic Zone Automation Initiative",
      regionalPathway_kn: "ಏಕ್ವೆಸ್ ಸೆಜ್ ಆಟೊಮೇಷನ್ ಉಪಕ್ರಮ",
      icon: Bot
    },
    {
      id: "aerospace-composites",
      category: "Aerospace Engineering",
      category_kn: "ಏರೋಸ್ಪೇಸ್ ಎಂಜಿನಿಯರಿಂಗ್",
      title: "Carbon-Fiber Structural Aero Components",
      title_kn: "ಕಾರ್ಬನ್-ಫೈಬರ್ ಏರೋಸ್ಪೇಸ್ ಬಿಡಿಭಾಗಗಳು",
      tagline: "Autoclave composite manufacturing for next-gen commercial fuselages",
      tagline_kn: "ಮುಂದಿನ ಪೀಳಿಗೆಯ ವಿಮಾನಗಳಿಗೆ ಹಗುರವಾದ ಕಾಂಪೊಸಿಟ್ ಬಿಡಿಭಾಗಗಳು",
      description: "Expanding Belagavi's existing metallic aerospace machining into high-tensile carbon-fiber composites, supplying fuselage assemblies to global Tier-1 aviation giants.",
      description_kn: "ಬೆಳಗಾವಿಯ ಲೋಹದ ಏರೋಸ್ಪೇಸ್ ಬಿಡಿಭಾಗಗಳ ಜತೆಗೆ ಸುಧಾರಿತ ಕಾರ್ಬನ್ ಫೈಬರ್ ಕಾಂಪೊಸಿಟ್ ಉತ್ಪಾದನೆಗೆ ವಿಸ್ತರಣೆ.",
      readinessTimeline: "Next 3-5 Years",
      regionalPathway: "Hattargi SEZ Tier-1 Supply Chain Ecosystem",
      regionalPathway_kn: "ಹತ್ತರಗಿ ಸೆಜ್ ಸರಬರಾಜು ಜಾಲ",
      icon: Plane
    },
    {
      id: "electric-mobility",
      category: "Electric Mobility & EV",
      category_kn: "ವಿದ್ಯುತ್ ಚಲನಶೀಲತೆ & ಇವಿ",
      title: "Solid-State Battery Pack & Motor Housings",
      title_kn: "ಸಾಲಿಡ್-ಸ್ಟೇಟ್ ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ ಮತ್ತು ಮೋಟಾರ್ ಕವಚಗಳು",
      tagline: "Die-cast thermal management systems for commercial electric vehicles",
      tagline_kn: "ವಾಣಿಜ್ಯ ಇವಿಗಳಿಗಾಗಿ ಥರ್ಮಲ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಉಪಕರಣಗಳು",
      description: "Harnessing Belagavi’s aluminium die-casting ecosystem to build lightweight structural housings for high-voltage EV battery architectures, catering to commercial fleet manufacturers in Pune and Bengaluru.",
      description_kn: "ಬೆಳಗಾವಿಯ ಅಲ್ಯೂಮಿನಿಯಂ ಡೈ-ಕಾಸ್ಟಿಂಗ್ ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸಿ ಹೈ-ವೋಲ್ಟೇಜ್ ಬ್ಯಾಟರಿ ಪ್ಯಾಕ್ ಕವಚಗಳ ನಿರ್ಮಾಣ.",
      readinessTimeline: "Next 2-4 Years",
      regionalPathway: "Auto Nagar & Kanabargi Industrial Parks Expansion",
      regionalPathway_kn: "ಆಟೋ ನಗರ್ ಮತ್ತು ಕಣಬರ್ಗಿ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಗಳ ವಿಸ್ತರಣೆ",
      icon: Zap
    },
    {
      id: "smart-factories",
      category: "Smart Manufacturing",
      category_kn: "ಸ್ಮಾರ್ಟ್ ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್",
      title: "Digital Twins & Predictive Equipment Health",
      title_kn: "ಡಿಜಿಟಲ್ ಟ್ವಿನ್ಸ್ ಮತ್ತು ಉಪಕರಣ ಆರೋಗ್ಯ ನಿರ್ವಹಣೆ",
      tagline: "Zero unplanned factory downtime via Industrial IoT telemetry",
      tagline_kn: "ಐಒಟಿ ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ನಿರಂತರ ಕೈಗಾರಿಕಾ ಉತ್ಪಾದನೆ",
      description: "Real-time telemetry networks aggregating vibration, acoustics, and power metrics across regional forging shops, routing predictive maintenance alerts via edge gateways.",
      description_kn: "ನೈಜ ಸಮಯದಲ್ಲಿ ಯಂತ್ರೋಪಕರಣಗಳ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮುನ್ಸೂಚಕ ನಿರ್ವಹಣೆ ಒದಗಿಸುವುದು.",
      readinessTimeline: "Active Pilot 2026-2027",
      regionalPathway: "Belgaum Chamber of Commerce Technology Taskforce",
      regionalPathway_kn: "ಬೆಳಗಾವಿ ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಸಂಸ್ಥೆಯ ತಾಂತ್ರಿಕ ಕಾರ್ಯಪಡೆ",
      icon: Factory
    }
  ];

  const current = showcaseItems[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-800 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Future Opportunities for Belagavi', 'ಬೆಳಗಾವಿಯ ಭವಿಷ್ಯದ ಅವಕಾಶಗಳು')}</span>
          </div>

          <h2 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
            {t('Imagining the Next Generation of Industry', 'ಮುಂದಿನ ಪೀಳಿಗೆಯ ಕೈಗಾರಿಕೆಯ ಕಲ್ಪನೆ')}
          </h2>

          <p className="font-sans text-body-fluid text-gray-600 dark:text-gray-300">
            {t(
              'A curated look at technological frontiers well within Belagavi’s reach. Leveraging existing metallurgical excellence and engineering universities to leap into higher-value global industries.',
              'ಬೆಳಗಾವಿಯ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಸಾಧಿಸಬಹುದಾದ ಭವಿಷ್ಯದ ತಂತ್ರಜ್ಞಾನಗಳ ಚಿತ್ರಣ. ಪ್ರಸ್ತುತ ಫೌಂಡ್ರಿ ಶಕ್ತಿ ಮತ್ತು ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣವನ್ನು ಬಳಸಿಕೊಂಡು ಜಾಗತಿಕ ಮೌಲ್ಯವರ್ಧನೆ ಸಾಧಿಸುವ ಯೋಜನೆಗಳು.'
            )}
          </p>

          {/* Clarity Disclaimer Badge as requested in blueprint */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-[11px] text-amber-800 dark:text-amber-300">
            <Info className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {t(
                'Notice: Future conceptual frontiers are clearly distinguished from operational baseline facilities.',
                'ಸೂಚನೆ: ಭವಿಷ್ಯದ ಕಲ್ಪನಾತ್ಮಕ ಅವಕಾಶಗಳನ್ನು ಪ್ರಸ್ತುತ ಕಾರ್ಯಾಚರಿಸುವ ಘಟಕಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ.'
              )}
            </span>
          </div>
        </ScrollReveal>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            {showcaseItems.map((item, index) => {
              const ItemIcon = item.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-navy-900 dark:bg-navy-800 text-white border-gold-500 shadow-md translate-x-1.5 ring-1 ring-gold-500/30'
                      : 'bg-gray-50/90 dark:bg-navy-950/50 text-gray-700 dark:text-gray-300 border-gray-200/80 dark:border-navy-800 hover:bg-gray-100 dark:hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-gold-500 text-navy-950 shadow-sm'
                          : 'bg-white dark:bg-navy-900 text-navy-700 dark:text-gray-300 border border-gray-200 dark:border-navy-700'
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-gold-500">
                        {language === 'kn' ? item.category_kn : item.category}
                      </span>
                      <span className="block text-sm font-bold">
                        {language === 'kn' ? item.title_kn : item.title}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-gold-400 translate-x-1' : 'text-gray-400 opacity-40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Featured Showcase Panel with 3D Tilt & Smooth Crossfade */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} className="h-full">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                {/* Ambient Background Graphic */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-gold-500/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                    className="relative z-10 space-y-6"
                  >
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30">
                        <CurrentIcon className="w-3.5 h-3.5" />
                        <span>{language === 'kn' ? current.category_kn : current.category}</span>
                      </span>

                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-navy-900 text-gray-300 border border-navy-800">
                        {t('Horizon:', 'ಕಾಲಮಿತಿ:')} <strong className="text-gold-400">{current.readinessTimeline}</strong>
                      </span>
                    </div>

                    {/* Main Headline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {language === 'kn' ? current.title_kn : current.title}
                      </h3>
                      <p className="text-sm font-bold text-gold-400 mt-2">
                        {language === 'kn' ? current.tagline_kn : current.tagline}
                      </p>
                    </div>

                    {/* Detailed Technical Narrative */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {language === 'kn' ? current.description_kn : current.description}
                    </p>

                    {/* Belagavi Regional Pathway */}
                    <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                        {t('Belagavi Execution Pathway', 'ಪ್ರಾದೇಶಿಕ ಅನುಷ್ಠಾನ ಮಾರ್ಗ')}
                      </span>
                      <p className="text-xs font-semibold text-gray-200">
                        {language === 'kn' ? current.regionalPathway_kn : current.regionalPathway}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Card Actions */}
                <div className="relative z-10 pt-8 mt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400">
                    {t('Target Sector: Advanced Engineering', 'ಗುರಿ ವಲಯ: ಸುಧಾರಿತ ಎಂಜಿನಿಯರಿಂಗ್')}
                  </span>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Innovation Proposal: ${current.title}`)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors shadow-md shadow-gold-500/20"
                  >
                    <span>{t('Propose Joint R&D Pilot', 'ಸಂಶೋಧನಾ ಯೋಜನೆ ಪ್ರಸ್ತಾಪಿಸಿ')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
