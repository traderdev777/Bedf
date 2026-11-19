'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Layers
} from 'lucide-react';

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
      title_kn: "ಕೈಗಾರಿಕಾ ರೋಬೋಟಿಕ್ ಆರ್ಮ್ ಮತ್ತು ಕೋಬೋಟ್‌ಗಳು",
      tagline: "High-precision automated welding and mold handling",
      tagline_kn: "ನಿಖರ ಸ್ವಯಂಚಾಲಿತ ವೆಲ್ಡಿಂಗ್ ಮತ್ತು ಮೋಲ್ಡ್ ನಿರ್ವಹಣೆ",
      description: "Introducing collaborative robots (cobots) that work safely alongside human technicians in high-temperature metal pouring, deburring, and precision aerospace surface finishing.",
      description_kn: "ಹೆಚ್ಚಿನ ತಾಪಮಾನದ ಲೋಹ ಕರಗಿಸುವಿಕೆ ಮತ್ತು ಏರೋಸ್ಪೇಸ್ ಫಿನಿಶಿಂಗ್‌ನಲ್ಲಿ ಕೆಲಸಗಾರರೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ರೋಬೋಟ್‌ಗಳು.",
      readinessTimeline: "Next 2-4 Years",
      regionalPathway: "Belagavi Automation Consortium (Proposed)",
      regionalPathway_kn: "ಪ್ರಸ್ತಾವಿತ ಬೆಳಗಾವಿ ಆಟೊಮೇಷನ್ ಒಕ್ಕೂಟ",
      icon: Bot
    },
    {
      id: "aerospace-structures",
      category: "Aerospace Engineering",
      category_kn: "ಏರೋಸ್ಪೇಸ್ ಎಂಜಿನಿಯರಿಂಗ್",
      title: "Titanium Structural Airframe Components",
      title_kn: "ಟೈಟಾನಿಯಂ ಏರ್‌ಫ್ರೇಮ್ ವಿಮಾನ ಬಿಡಿಭಾಗಗಳು",
      tagline: "Sub-micron tolerance components for commercial next-gen jets",
      tagline_kn: "ಮುಂದಿನ ಪೀಳಿಗೆಯ ವಾಣಿಜ್ಯ ಜೆಟ್‌ಗಳಿಗೆ ನಿಖರ ಬಿಡಿಭಾಗಗಳು",
      description: "Scaling existing multi-axis precision machining into high-strength titanium forgings, cryogenic fuel valves, and lightweight cabin composites.",
      description_kn: "ಹತ್ತರಗಿಯ ಪರಿಸರವನ್ನು ಬಳಸಿಕೊಂಡು ಟೈಟಾನಿಯಂ ಫೋರ್ಜಿಂಗ್ಸ್ ಮತ್ತು ಕ್ರಯೋಜೆನಿಕ್ ವಾಲ್ವ್‌ಗಳಂತಹ ಸುಧಾರಿತ ಬಿಡಿಭಾಗಗಳ ಉತ್ಪಾದನೆ.",
      readinessTimeline: "Active & Expanding",
      regionalPathway: "Aequs SEZ Hattargi & Allied Toolmakers",
      regionalPathway_kn: "ಏಕ್ವಸ್ ಸೆಜ್ ಹತ್ತರಗಿ ಮತ್ತು ಸ್ಥಳೀಯ ಟೂಲ್‌ಮೇಕರ್ಸ್",
      icon: Plane
    },
    {
      id: "smart-foundry",
      category: "Smart Manufacturing",
      category_kn: "ಸ್ಮಾರ್ಟ್ ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್",
      title: "Industry 4.0 Digital Twin Foundries",
      title_kn: "ಇಂಡಸ್ಟ್ರಿ 4.0 ಡಿಜಿಟಲ್ ಟ್ವಿನ್ ಫೌಂಡ್ರಿ",
      tagline: "Real-time thermodynamic simulation of metal casting",
      tagline_kn: "ಲೋಹ ಕರಗುವ ಪ್ರಕ್ರಿಯೆಯ ನೈಜ ಸಮಯದ ಡಿಜಿಟಲ್ ಸಿಮ್ಯುಲೇಶನ್",
      description: "Sensorizing melting cupolas and induction furnaces to construct real-time digital twins, cutting thermal energy consumption by 22% and reducing carbon emissions.",
      description_kn: "ಇಂಡಕ್ಷನ್ ಫರ್ನೇಸ್‌ಗಳಿಗೆ ಸೆನ್ಸರ್‌ಗಳನ್ನು ಅಳವಡಿಸಿ ಇಂಧನ ಬಳಕೆಯನ್ನು ಶೇ 22 ರಷ್ಟು ಉಳಿಸುವ ಮತ್ತು ಇಂಗಾಲದ ಹೊರಸೂಸುವಿಕೆ ಕಡಿಮೆ ಮಾಡುವ ತಂತ್ರಜ್ಞಾನ.",
      readinessTimeline: "Next 2-3 Years",
      regionalPathway: "Belgaum Foundry Cluster Energy Efficiency Initiative",
      regionalPathway_kn: "ಬೆಳಗಾವಿ ಫೌಂಡ್ರಿ ಕ್ಲಸ್ಟರ್ ಇಂಧನ ದಕ್ಷತೆ ಉಪಕ್ರಮ",
      icon: Factory
    },
    {
      id: "electric-powertrains",
      category: "Electric Mobility",
      category_kn: "ವಿದ್ಯುತ್ ಚಲನಶೀಲತೆ (EV)",
      title: "EV Powertrains & High-Density Battery Enclosures",
      title_kn: "ಇವಿ ಪವರ್‌ಟ್ರೇನ್ ಮತ್ತು ಬ್ಯಾಟರಿ ಕೇಸಿಂಗ್ಸ್",
      tagline: "Cast aluminium lightweight housings for commercial EVs",
      tagline_kn: "ವಾಣಿಜ್ಯ ಇವಿಗಳಿಗೆ ಹಗುರವಾದ ಅಲ್ಯೂಮಿನಿಯಂ ಕೇಸಿಂಗ್ಸ್",
      description: "Capitalizing on the global shift toward electric buses, 3-wheelers, and tractors by manufacturing high-durability thermal enclosures and synchronous motor rotors in Belagavi.",
      description_kn: "ವಿದ್ಯುತ್ ಬಸ್‌ಗಳು ಮತ್ತು ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳಿಗಾಗಿ ಅಲ್ಯೂಮಿನಿಯಂ ಕೇಸಿಂಗ್ಸ್ ಮತ್ತು ಸಿಂಕ್ರೋನಸ್ ಮೋಟಾರ್ ಭಾಗಗಳನ್ನು ಬೆಳಗಾವಿಯಲ್ಲೇ ಉತ್ಪಾದಿಸುವುದು.",
      readinessTimeline: "Next 3-5 Years",
      regionalPathway: "North Karnataka EV Manufacturing Corridor (Proposed)",
      regionalPathway_kn: "ಪ್ರಸ್ತಾವಿತ ಉತ್ತರ ಕರ್ನಾಟಕ ಇವಿ ಉತ್ಪಾದನಾ ಕಾರಿಡಾರ್",
      icon: Zap
    },
    {
      id: "advanced-electronics",
      category: "Advanced Electronics",
      category_kn: "ಸುಧಾರಿತ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್",
      title: "Tactical Sensor Systems & Ruggedized Embedded Hardware",
      title_kn: "ರಕ್ಷಣಾ ಸೆನ್ಸರ್ ಮತ್ತು ರಗಡ್ ಎಂಬೆಡೆಡ್ ಹಾರ್ಡ್‌ವೇರ್",
      tagline: "Military-spec printed circuit board assemblies (PCBAs)",
      tagline_kn: "ಮಿಲಿಟರಿ ದರ್ಜೆಯ ಪಿಸಿಬಿಎ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ಅಸೆಂಬ್ಲಿ",
      description: "Designing extreme-environment embedded control units for commercial aviation, railway signaling, and tactical defense equipment.",
      description_kn: "ವಿಮಾನಯಾನ, ರೈಲ್ವೆ ಸಿಗ್ನಲಿಂಗ್ ಮತ್ತು ರಕ್ಷಣಾ ಸಾಧನಗಳಿಗಾಗಿ ಗರಿಷ್ಠ ಬಾಳಿಕೆಯ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಸಿಸ್ಟಮ್‌ಗಳ ಅಭಿವೃದ್ಧಿ.",
      readinessTimeline: "Next 3-5 Years",
      regionalPathway: "BEDF Defence Technology Taskforce",
      regionalPathway_kn: "ಬಿಇಡಿಎಫ್ ರಕ್ಷಣಾ ತಂತ್ರಜ್ಞಾನ ಕಾರ್ಯಪಡೆ",
      icon: Microchip
    }
  ];

  const current = showcaseItems[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-800 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Future Opportunities for Belagavi', 'ಬೆಳಗಾವಿಯ ಭವಿಷ್ಯದ ಅವಕಾಶಗಳು')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            {t('Imagining the Next Generation of Industry', 'ಮುಂದಿನ ಪೀಳಿಗೆಯ ಕೈಗಾರಿಕೆಯ ಕಲ್ಪನೆ')}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {t(
              'A curated look at technological frontiers well within Belagavi’s reach. Leveraging existing metallurgical excellence and engineering universities to leap into higher-value global industries.',
              'ಬೆಳಗಾವಿಯ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಸಾಧಿಸಬಹುದಾದ ಭವಿಷ್ಯದ ತಂತ್ರಜ್ಞಾನಗಳ ಚಿತ್ರಣ. ಪ್ರಸ್ತುತ ಫೌಂಡ್ರಿ ಶಕ್ತಿ ಮತ್ತು ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣವನ್ನು ಬಳಸಿಕೊಂಡು ಜಾಗತಿಕ ಮೌಲ್ಯವರ್ಧನೆ ಸಾಧಿಸುವ ಯೋಜನೆಗಳು.'
            )}
          </p>

          {/* Clarity Disclaimer Badge as requested in blueprint */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-[11px] text-amber-800 dark:text-amber-300">
            <Info className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {t(
                'Notice: Future conceptual frontiers are clearly distinguished from operational baseline facilities.',
                'ಸೂಚನೆ: ಭವಿಷ್ಯದ ಕಲ್ಪನಾತ್ಮಕ ಅವಕಾಶಗಳನ್ನು ಪ್ರಸ್ತುತ ಕಾರ್ಯಾಚರಿಸುವ ಘಟಕಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ.'
              )}
            </span>
          </div>
        </div>

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
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-navy-900 dark:bg-navy-800 text-white border-gold-500 shadow-md translate-x-1'
                      : 'bg-gray-50 dark:bg-navy-950/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-navy-800 hover:bg-gray-100 dark:hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-gold-500 text-navy-950'
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

          {/* Right: Featured Showcase Panel */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Graphic */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-gold-500/10 to-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>{language === 'kn' ? current.category_kn : current.category}</span>
                </span>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-navy-900 text-gray-300 border border-navy-800">
                  {t('Estimated Horizon:', 'ಸಾಧ್ಯತಾ ಕಾಲಮಿತಿ:')} <strong className="text-gold-400">{current.readinessTimeline}</strong>
                </span>
              </div>

              {/* Main Headline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {language === 'kn' ? current.title_kn : current.title}
                </h3>
                <p className="text-sm font-semibold text-gold-400 mt-2">
                  {language === 'kn' ? current.tagline_kn : current.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {language === 'kn' ? current.description_kn : current.description}
              </p>

              {/* Regional Implementation Pathway */}
              <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-1">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
                  {t('Regional Implementation Pathway', 'ಪ್ರಾದೇಶಿಕ ಅನುಷ್ಠಾನದ ಹಾದಿ')}
                </span>
                <p className="text-xs font-semibold text-white">
                  {language === 'kn' ? current.regionalPathway_kn : current.regionalPathway}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 mt-8 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">
                {t('Have a technology proposal for Belagavi?', 'ಬೆಳಗಾವಿಗಾಗಿ ತಂತ್ರಜ್ಞಾನ ಪ್ರಸ್ತಾವನೆ ಇದೆಯೇ?')}
              </span>

              <Link
                href={`/contact?subject=${encodeURIComponent(`Innovation Proposal for ${current.title}`)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors shadow-md"
              >
                <span>{t('Submit Innovation Brief', 'ನಾವೀನ್ಯತಾ ಪ್ರಸ್ತಾವನೆ ಸಲ್ಲಿಸಿ')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
