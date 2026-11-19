'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  BELAGAVI_LOCATIONS, 
  TALUKS, 
  REGIONAL_CONNECTIONS, 
  MapLocation 
} from '@/data/belagaviMapData';
import { 
  MapPin, 
  Filter, 
  Compass, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Building2, 
  Plane, 
  Shield, 
  GraduationCap, 
  Cpu, 
  Truck, 
  TrendingUp,
  X,
  Info
} from 'lucide-react';

export default function BelagaviInteractiveMap() {
  const { t, language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTaluk, setSelectedTaluk] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(BELAGAVI_LOCATIONS[0]);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const categories = [
    { id: 'All', label: 'All Locations', label_kn: 'ಎಲ್ಲಾ ತಾಣಗಳು', icon: Compass },
    { id: 'Aerospace', label: 'Aerospace', label_kn: 'ಏರೋಸ್ಪೇಸ್', icon: Plane },
    { id: 'Industrial', label: 'Industrial & Foundries', label_kn: 'ಕೈಗಾರಿಕೆ & ಫೌಂಡ್ರಿ', icon: Building2 },
    { id: 'Education', label: 'Education & VTU', label_kn: 'ಶಿಕ್ಷಣ & ವಿಟಿಯು', icon: GraduationCap },
    { id: 'Technology', label: 'Technology & Startups', label_kn: 'ತಂತ್ರಜ್ಞಾನ & ಸ್ಟಾರ್ಟಪ್', icon: Cpu },
    { id: 'Defence', label: 'Defence & Armed Forces', label_kn: 'ರಕ್ಷಣಾ ಕೇಂದ್ರಗಳು', icon: Shield },
    { id: 'Logistics', label: 'Logistics & Highways', label_kn: 'ಲಾಜಿಸ್ಟಿಕ್ಸ್ & ಹೆದ್ದಾರಿ', icon: Truck },
    { id: 'Investment', label: 'Proposed Opportunities', label_kn: 'ಪ್ರಸ್ತಾವಿತ ಅವಕಾಶಗಳು', icon: TrendingUp },
  ];

  // Filter locations
  const filteredLocations = useMemo(() => {
    return BELAGAVI_LOCATIONS.filter((loc) => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'Investment'
          ? loc.isProposed
          : loc.category === selectedCategory;

      const matchesTaluk =
        selectedTaluk === 'all'
          ? true
          : loc.taluk.toLowerCase() === selectedTaluk.toLowerCase();

      const matchesSearch =
        searchQuery === ''
          ? true
          : loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.name_kn.includes(searchQuery) ||
            loc.taluk.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTaluk && matchesSearch;
    });
  }, [selectedCategory, selectedTaluk, searchQuery]);

  // Coordinate projection for vector district map
  // Belagavi district bounds approximately:
  // Lat: 15.35 to 16.95 (North-South)
  // Lng: 74.05 to 75.45 (West-East)
  const projectCoords = (lat: number, lng: number) => {
    const minLat = 15.40;
    const maxLat = 16.90;
    const minLng = 74.10;
    const maxLng = 75.40;

    // SVG coordinate space: 900 x 700
    const x = ((lng - minLng) / (maxLng - minLng)) * 800 + 50;
    // Invert Y because higher latitude is further north (top of SVG)
    const y = 650 - ((lat - minLat) / (maxLat - minLat)) * 600;

    return { x, y };
  };

  return (
    <div id="belagavi-map" className="relative w-full rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-xl overflow-hidden transition-colors">
      {/* Top Controls Header */}
      <div className="p-6 border-b border-gray-100 dark:border-navy-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                {t('Verified Geographic Ecosystem', 'ಪರಿಶೀಲಿಸಿದ ಭೌಗೋಳಿಕ ಪರಿಸರ')}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white mt-1">
              {t('Discover the Potential of Belagavi', 'ಬೆಳಗಾವಿಯ ಸಾಮರ್ಥ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ')}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
              {t(
                'Explore 38 verified industrial nodes, aerospace SEZ facilities, universities, and high-potential investment corridors across Belagavi district.',
                'ಬೆಳಗಾವಿ ಜಿಲ್ಲೆಯ 38 ಪರಿಶೀಲಿಸಿದ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರಗಳು, ಏರೋಸ್ಪೇಸ್ ಸೆಜ್, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಹೂಡಿಕೆ ಕಾರಿಡಾರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ.'
              )}
            </p>
          </div>

          {/* Map vs List View Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="bg-gray-100 dark:bg-navy-800 p-1 rounded-xl flex items-center text-xs font-semibold">
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'map'
                    ? 'bg-white dark:bg-navy-700 text-navy-900 dark:text-white shadow-sm'
                    : 'text-gray-500 hover:text-navy-900 dark:text-gray-400'
                }`}
              >
                {t('Interactive Map', 'ನಕ್ಷೆ')}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-navy-700 text-navy-900 dark:text-white shadow-sm'
                    : 'text-gray-500 hover:text-navy-900 dark:text-gray-400'
                }`}
              >
                {t('Directory List', 'ಪಟ್ಟಿ')} ({filteredLocations.length})
              </button>
            </div>
          </div>
        </div>

        {/* Search & Taluk Filter Bar */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search locations, taluks, or facilities...', 'ತಾಣಗಳು, ತಾಲೂಕುಗಳು ಅಥವಾ ಸಂಸ್ಥೆಗಳನ್ನು ಹುಡುಕಿ...')}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800/80 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedTaluk}
              onChange={(e) => setSelectedTaluk(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              {TALUKS.map((taluk) => (
                <option key={taluk.id} value={taluk.id}>
                  {language === 'kn' ? taluk.name_kn : taluk.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'bg-gray-100 dark:bg-navy-800/70 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-gold-400 dark:text-navy-950' : 'text-gray-500'}`} />
                <span>{language === 'kn' ? cat.label_kn : cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map + Details Panel Container */}
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Left/Center: Vector Interactive Map Canvas */}
          <div className="lg:col-span-8 p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white dark:from-navy-950 dark:to-navy-900 relative flex items-center justify-center">
            {/* Legend Overlay */}
            <div className="absolute top-4 left-4 z-10 p-3 rounded-xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border border-gray-200 dark:border-navy-700 shadow-sm text-[11px] space-y-1.5 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t('Operational Established Facility', 'ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿರುವ ಸಂಸ್ಥೆ')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-dashed border-gold-500 inline-block animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-gold-600 dark:text-gold-400 font-medium">
                  {t('Proposed Development Opportunity', 'ಪ್ರಸ್ತಾವಿತ ಅಭಿವೃದ್ಧಿ ಅವಕಾಶ')}
                </span>
              </div>
            </div>

            {/* Regional Connecting Lines Indicator */}
            <div className="absolute bottom-4 left-4 z-10 p-2.5 rounded-xl bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm border border-gray-200 dark:border-navy-800 text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
              <span className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                {t('Regional Freight Corridors (NH48 / NH4A):', 'ಪ್ರಾದೇಶಿಕ ಸರಕು ಕಾರಿಡಾರ್‌ಗಳು:')}
              </span>
              <span>Pune (335 km) • Mumbai (480 km) • Goa (105 km) • Bengaluru (505 km)</span>
            </div>

            {/* SVG Interactive District Projection */}
            <div className="w-full max-w-3xl aspect-[9/7] relative">
              <svg viewBox="0 0 900 700" className="w-full h-full drop-shadow-md select-none">
                <defs>
                  <linearGradient id="districtGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EEF4FC" />
                    <stop offset="100%" stopColor="#D5E4F8" />
                  </linearGradient>
                  <linearGradient id="districtGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B2347" />
                    <stop offset="100%" stopColor="#06152B" />
                  </linearGradient>
                  <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#D4AF37" floodOpacity="0.6"/>
                  </filter>
                </defs>

                {/* Belagavi District Boundary Polygon (Accurate Geographic Silhouette) */}
                <path
                  d="M 280 60 
                     L 440 45 L 560 30 L 720 70 L 820 160 L 860 260 
                     L 810 340 L 740 370 L 760 480 L 680 580 L 590 620 
                     L 460 670 L 320 660 L 220 610 L 140 550 L 90 440 
                     L 80 320 L 140 210 L 210 110 Z"
                  className="fill-[url(#districtGradientLight)] dark:fill-[url(#districtGradientDark)] stroke-navy-300 dark:stroke-navy-600 stroke-[2] transition-colors"
                />

                {/* Taluk Grid Sub-Divisions (Architectural dashed lines) */}
                <path
                  d="M 280 60 L 460 350 M 560 30 L 460 350 M 820 160 L 460 350 M 760 480 L 460 350 M 460 670 L 460 350 M 140 550 L 460 350 M 80 320 L 460 350"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.25)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />

                {/* Major Highways Arcs (NH48 Golden Quadrilateral) */}
                <path
                  d="M 380 40 Q 420 220 460 370 T 540 640"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                  opacity="0.8"
                />
                {/* Highway to Goa NH4A */}
                <path
                  d="M 460 370 Q 320 450 70 480"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.7"
                />

                {/* Regional Outbound Direction Arrows */}
                <text x="360" y="25" fill="#D4AF37" fontSize="12" fontWeight="700" letterSpacing="0.05em">↑ PUNE / MUMBAI (NH-48)</text>
                <text x="560" y="670" fill="#D4AF37" fontSize="12" fontWeight="700" letterSpacing="0.05em">↓ BENGALURU (NH-48)</text>
                <text x="15" y="495" fill="#3B82F6" fontSize="12" fontWeight="700" letterSpacing="0.05em">← GOA / PORTS (NH-4A)</text>
                <text x="730" y="550" fill="#10B981" fontSize="11" fontWeight="700">↘ HUBBALLI-DHARWAD</text>

                {/* Interactive Location Markers */}
                {filteredLocations.map((loc) => {
                  const { x, y } = projectCoords(loc.lat, loc.lng);
                  const isSelected = selectedLocation?.id === loc.id;

                  return (
                    <g
                      key={loc.id}
                      className="cursor-pointer transition-transform duration-200 group"
                      onClick={() => setSelectedLocation(loc)}
                      transform={`translate(${x}, ${y})`}
                    >
                      {/* Pulsing ring for selection or proposed */}
                      {isSelected && (
                        <circle
                          r="22"
                          className="fill-none stroke-gold-400 stroke-2 animate-ping opacity-60"
                        />
                      )}

                      {loc.isProposed ? (
                        <>
                          <circle
                            r="11"
                            className="fill-gold-500/20 stroke-gold-500 stroke-2 stroke-dashed animate-spin"
                            style={{ animationDuration: '8s' }}
                          />
                          <circle r="4.5" className="fill-gold-500" />
                        </>
                      ) : (
                        <>
                          <circle
                            r="9"
                            className={`transition-colors ${
                              isSelected
                                ? 'fill-gold-500 stroke-white dark:stroke-navy-950 stroke-2'
                                : 'fill-navy-600 dark:fill-blue-500 stroke-white dark:stroke-navy-900 stroke-2'
                            }`}
                          />
                          <circle r="3" className="fill-white" />
                        </>
                      )}

                      {/* Tooltip on Hover */}
                      <title>{language === 'kn' ? loc.name_kn : loc.name}</title>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Detailed Location Card & Key Specs Drawer */}
          <div className="lg:col-span-4 p-6 bg-white dark:bg-navy-900 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-navy-800 flex flex-col justify-between">
            {selectedLocation ? (
              <div className="space-y-4">
                {/* Status & Category Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gray-200 border border-navy-100 dark:border-navy-700">
                    {selectedLocation.category} • {language === 'kn' ? selectedLocation.taluk_kn : selectedLocation.taluk}
                  </span>

                  {selectedLocation.isProposed ? (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{t('Proposed Opportunity', 'ಪ್ರಸ್ತಾವಿತ ಅವಕಾಶ')}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t('Operational Facility', 'ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿದೆ')}</span>
                    </span>
                  )}
                </div>

                {/* Location Title */}
                <div>
                  <h4 className="text-xl font-extrabold text-navy-950 dark:text-white leading-snug">
                    {language === 'kn' ? selectedLocation.name_kn : selectedLocation.name}
                  </h4>
                  <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 mt-1">
                    {language === 'kn' ? selectedLocation.tagline_kn : selectedLocation.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'kn' ? selectedLocation.description_kn : selectedLocation.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-navy-800">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-400">
                    {t('Key Highlights', 'ಪ್ರಮುಖ ಮುಖ್ಯಾಂಶಗಳು')}
                  </span>
                  <ul className="space-y-1.5">
                    {selectedLocation.keyHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Geographic & Source Meta */}
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-navy-950/80 border border-gray-100 dark:border-navy-800 text-[11px] space-y-1.5 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>{t('Coordinates:', 'ಭೌಗೋಳಿಕ ನಿರ್ದೇಶಾಂಕಗಳು:')}</span>
                    <span className="font-mono font-medium text-gray-700 dark:text-gray-300">
                      {selectedLocation.lat.toFixed(4)}° N, {selectedLocation.lng.toFixed(4)}° E
                    </span>
                  </div>
                  {selectedLocation.established && (
                    <div className="flex items-center justify-between">
                      <span>{t('Operational Since:', 'ಸ್ಥಾಪಿತ ವರ್ಷ:')}</span>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {selectedLocation.established}
                      </span>
                    </div>
                  )}
                  <div className="pt-1 border-t border-gray-200/50 dark:border-navy-800 text-[10px]">
                    <span className="text-gray-400 font-semibold">{t('Verified Source: ', 'ಪರಿಶೀಲಿಸಿದ ಮೂಲ: ')}</span>
                    <span className="text-gray-600 dark:text-gray-300">{selectedLocation.source}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Enquiry for ${selectedLocation.name}`)}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
                  >
                    <span>{t('Submit Regional Enquiry', 'ಪ್ರಾದೇಶಿಕ ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/focus-areas"
                    className="w-full text-center py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {t('View Sector Opportunities →', 'ವಲಯವಾರು ಅವಕಾಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ →')}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                <MapPin className="w-8 h-8 text-gold-500 mb-2 opacity-50" />
                <p className="text-sm font-medium">{t('Select any marker on the map to inspect verified details', 'ಮಾಹಿತಿಯನ್ನು ವೀಕ್ಷಿಸಲು ನಕ್ಷೆಯಲ್ಲಿನ ತಾಣವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ')}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Alternative Accessible Directory List View */
        <div className="p-6 divide-y divide-gray-100 dark:divide-navy-800 max-h-[600px] overflow-y-auto">
          {filteredLocations.map((loc) => (
            <div key={loc.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gray-200">
                    {loc.category}
                  </span>
                  <span className="text-xs text-gray-400">• {language === 'kn' ? loc.taluk_kn : loc.taluk}</span>
                  {loc.isProposed && (
                    <span className="text-[10px] font-semibold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                      {t('Proposed', 'ಪ್ರಸ್ತಾವಿತ')}
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-navy-950 dark:text-white">
                  {language === 'kn' ? loc.name_kn : loc.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl">
                  {language === 'kn' ? loc.description_kn : loc.description}
                </p>
                <div className="text-[11px] text-gray-400">
                  <span className="font-semibold">{t('Source: ', 'ಮೂಲ: ')}</span>{loc.source}
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={`/contact?subject=${encodeURIComponent(`Enquiry for ${loc.name}`)}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-navy-700 text-xs font-semibold text-navy-900 dark:text-white hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  <span>{t('Inquire', 'ವಿಚಾರಣೆ')}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

