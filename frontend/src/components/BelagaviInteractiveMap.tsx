'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { 
  BELAGAVI_LOCATIONS, 
  TALUKS, 
  REGIONAL_CONNECTIONS, 
  MapLocation 
} from '@/data/belagaviMapData';
import { 
  MapPin, 
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
  Heart,
  Wheat,
  Landmark,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { PREMIUM_EASE } from '@/components/motion/MotionSystem';

const LOCATION_PHOTOS: Record<string, string> = {
  'suvarna-vidhana-soudha': '/images/suvarna_vidhana_soudha.jpg',
  'belagavi-airport': '/images/belagavi_airport.jpg',
  'vtu-headquarters': '/images/vtu_campus.jpg',
  'gokak-falls-hydro': '/images/gokak_falls.jpg',
  'kittur-heritage': '/images/kittur_fort.jpg',
  'kamal-basti-fort': '/images/kamal_basti.jpg',
};

export default function BelagaviInteractiveMap() {
  const { t, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTaluk, setSelectedTaluk] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(BELAGAVI_LOCATIONS[0]);
  const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showConnections, setShowConnections] = useState<boolean>(true);

  // 10 Interactive Categories per Specification
  const categories = [
    { id: 'All', label: 'All Layers', label_kn: 'ಎಲ್ಲಾ ತಾಣಗಳು', icon: Compass },
    { id: 'Aerospace', label: 'Aerospace', label_kn: 'ಏರೋಸ್ಪೇಸ್', icon: Plane },
    { id: 'Industrial', label: 'Industries', label_kn: 'ಕೈಗಾರಿಕೆಗಳು', icon: Building2 },
    { id: 'Technology', label: 'Technology', label_kn: 'ತಂತ್ರಜ್ಞಾನ', icon: Cpu },
    { id: 'Education', label: 'Education', label_kn: 'ಶಿಕ್ಷಣ', icon: GraduationCap },
    { id: 'Defence', label: 'Defence', label_kn: 'ರಕ್ಷಣಾ ಕೇಂದ್ರಗಳು', icon: Shield },
    { id: 'Logistics', label: 'Infrastructure', label_kn: 'ಮೂಲಸೌಕರ್ಯ', icon: Truck },
    { id: 'Healthcare', label: 'Healthcare', label_kn: 'ಆರೋಗ್ಯ ಸೇವೆ', icon: Heart },
    { id: 'Agriculture', label: 'Agriculture', label_kn: 'ಕೃಷಿ & ಸಕ್ಕರೆ', icon: Wheat },
    { id: 'Tourism', label: 'Tourism & Heritage', label_kn: 'ಪ್ರವಾಸೋದ್ಯಮ', icon: Landmark },
    { id: 'Investment', label: 'Opportunities', label_kn: 'ಪ್ರಸ್ತಾವಿತ ಅವಕಾಶಗಳು', icon: TrendingUp },
  ];

  // Filter locations dynamically
  const filteredLocations = useMemo(() => {
    return BELAGAVI_LOCATIONS.filter((loc) => {
      let matchesCategory = true;
      if (selectedCategory === 'All') {
        matchesCategory = true;
      } else if (selectedCategory === 'Investment') {
        matchesCategory = loc.isProposed;
      } else if (selectedCategory === 'Agriculture') {
        matchesCategory = loc.category === 'Industrial' && (loc.name.toLowerCase().includes('sugar') || loc.name.toLowerCase().includes('agro') || loc.name.toLowerCase().includes('gokak'));
      } else if (selectedCategory === 'Tourism') {
        matchesCategory = loc.name.toLowerCase().includes('fort') || loc.name.toLowerCase().includes('falls') || loc.name.toLowerCase().includes('sagar') || loc.name.toLowerCase().includes('basti');
      } else if (selectedCategory === 'Healthcare') {
        matchesCategory = loc.name.toLowerCase().includes('hospital') || loc.name.toLowerCase().includes('medical') || loc.keyHighlights.some(h => h.toLowerCase().includes('health'));
      } else {
        matchesCategory = loc.category === selectedCategory;
      }

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
  // Lat: 15.35 to 16.95, Lng: 74.05 to 75.45
  const projectCoords = (lat: number, lng: number) => {
    const minLat = 15.40;
    const maxLat = 16.90;
    const minLng = 74.10;
    const maxLng = 75.40;

    const x = ((lng - minLng) / (maxLng - minLng)) * 800 + 50;
    const y = 650 - ((lat - minLat) / (maxLat - minLat)) * 600;
    return { x, y };
  };

  // Zoom viewbox calculation
  const viewBox = useMemo(() => {
    if (zoomLevel === 1) return "0 0 900 700";
    if (zoomLevel === 1.5) {
      if (selectedLocation) {
        const { x, y } = projectCoords(selectedLocation.lat, selectedLocation.lng);
        const w = 900 / 1.5;
        const h = 700 / 1.5;
        const vx = Math.max(0, Math.min(900 - w, x - w / 2));
        const vy = Math.max(0, Math.min(700 - h, y - h / 2));
        return `${vx} ${vy} ${w} ${h}`;
      }
      return "150 115 600 467";
    }
    if (selectedLocation) {
      const { x, y } = projectCoords(selectedLocation.lat, selectedLocation.lng);
      const w = 450;
      const h = 350;
      const vx = Math.max(0, Math.min(900 - w, x - w / 2));
      const vy = Math.max(0, Math.min(700 - h, y - h / 2));
      return `${vx} ${vy} ${w} ${h}`;
    }
    return "225 175 450 350";
  }, [zoomLevel, selectedLocation]);

  return (
    <div id="map" className="relative w-full rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-2xl overflow-hidden transition-colors duration-300">
      {/* Top Header & Search Control Bar */}
      <div className="p-6 border-b border-gray-100 dark:border-navy-800 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Section Indicator */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-[11px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                {t('Geographic Intelligence Platform', 'ಪ್ರಾದೇಶಿಕ ಭೌಗೋಳಿಕ ನಕ್ಷೆ')}
              </span>
            </div>
            <h3 className="text-2xl font-black text-navy-950 dark:text-white mt-0.5">
              {t('Discover the Potential of Belagavi', 'ಬೆಳಗಾವಿಯ ಸಾಮರ್ಥ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ')}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {t(
                '38 verified industrial ecosystems, aerospace hubs, academic campuses, and regional corridors.',
                '38 ಪರಿಶೀಲಿಸಿದ ಕೈಗಾರಿಕಾ ಪರಿಸರ ವ್ಯವಸ್ಥೆಗಳು, ಏರೋಸ್ಪೇಸ್ ಹಬ್‌ಗಳು ಮತ್ತು ಸಂಪರ್ಕ ಕಾರಿಡಾರ್‌ಗಳು.'
              )}
            </p>
          </div>

          {/* Search & Mode Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Box */}
            <div className="relative flex-grow sm:flex-grow-0 sm:w-60">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={t('Search 38 locations...', 'ತಾಣಗಳನ್ನು ಹುಡುಕಿ...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
              />
            </div>

            {/* Taluk Filter Dropdown */}
            <select
              value={selectedTaluk}
              onChange={(e) => setSelectedTaluk(e.target.value)}
              className="px-3.5 py-2 rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs font-semibold text-navy-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
            >
              <option value="all">{t('All 15 Taluks', 'ಎಲ್ಲಾ 15 ತಾಲೂಕುಗಳು')}</option>
              {TALUKS.map((taluk) => (
                <option key={taluk.id} value={taluk.name}>
                  {language === 'kn' ? taluk.name_kn : taluk.name}
                </option>
              ))}
            </select>

            {/* View Mode Switcher: Map vs Directory List */}
            <div className="flex items-center p-1 rounded-full bg-gray-100 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 text-xs font-semibold">
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1 rounded-full transition-all ${
                  viewMode === 'map'
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {t('Cinematic Map', 'ನಕ್ಷೆ')}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-full transition-all ${
                  viewMode === 'list'
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {t('Directory List', 'ಪಟ್ಟಿ')}
              </button>
            </div>
          </div>
        </div>

        {/* 10 Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-4 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isSelected
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-md ring-2 ring-gold-500/20'
                    : 'bg-gray-100/80 dark:bg-navy-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-navy-750'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-gold-400 dark:text-navy-950' : 'text-gray-500 dark:text-gray-400'}`} />
                <span>{t(cat.label, cat.label_kn)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map + Details Split View */}
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          {/* Left/Center: Vector Interactive Map Canvas */}
          <div className="lg:col-span-8 p-4 sm:p-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 relative flex items-center justify-center overflow-hidden">
            {/* Map Controls: Zoom In / Out / Reset & Connections Toggle */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-gray-200 dark:border-navy-700 shadow-md">
              <button
                onClick={() => setZoomLevel((z) => Math.min(2, z + 0.5))}
                title="Zoom In"
                aria-label="Zoom In"
                className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(1, z - 0.5))}
                title="Zoom Out"
                aria-label="Zoom Out"
                className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setZoomLevel(1); setSelectedLocation(BELAGAVI_LOCATIONS[0]); }}
                title="Reset View"
                aria-label="Reset View"
                className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowConnections(!showConnections)}
                title="Toggle Regional Corridors"
                aria-label="Toggle Regional Corridors"
                className={`p-2 rounded-xl transition-colors ${showConnections ? 'text-gold-500 bg-gold-500/10' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-800'}`}
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>

            {/* Legend Overlay */}
            <div className="absolute top-4 left-4 z-10 p-3 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border border-gray-200/80 dark:border-navy-700/80 shadow-md text-[11px] space-y-1.5 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block shadow-sm" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  {t('Operational Facility', 'ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿರುವ ಸಂಸ್ಥೆ')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block animate-ping" />
                <span className="text-gold-600 dark:text-gold-400 font-semibold">
                  {t('Proposed Development Opportunity', 'ಪ್ರಸ್ತಾವಿತ ಅಭಿವೃದ್ಧಿ ಅವಕಾಶ')}
                </span>
              </div>
            </div>

            {/* Regional Connecting Lines Indicator */}
            {showConnections && (
              <div className="absolute bottom-4 left-4 z-10 p-3 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border border-gray-200/80 dark:border-navy-800 text-[10px] text-gray-600 dark:text-gray-300 shadow-sm hidden md:block">
                <span className="font-extrabold text-navy-950 dark:text-gold-400 block mb-1">
                  {t('Verified Regional Corridors (Geographic Connections):', 'ಪ್ರಾದೇಶಿಕ ಸಂಪರ್ಕ ಕಾರಿಡಾರ್‌ಗಳು:')}
                </span>
                <span className="tracking-tight">
                  Pune (335 km) • Mumbai (480 km) • Goa/Mopa (105 km) • Bengaluru (505 km) • Hubballi (95 km)
                </span>
              </div>
            )}

            {/* Hover Floating Mini Card */}
            <AnimatePresence>
              {hoveredLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 right-6 z-30 p-3.5 rounded-2xl bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border border-gold-500/40 shadow-xl max-w-xs pointer-events-none"
                >
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400 block">
                    {hoveredLocation.category} • {language === 'kn' ? hoveredLocation.taluk_kn : hoveredLocation.taluk}
                  </span>
                  <h5 className="text-xs font-bold text-navy-950 dark:text-white mt-0.5">
                    {language === 'kn' ? hoveredLocation.name_kn : hoveredLocation.name}
                  </h5>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                    {language === 'kn' ? hoveredLocation.tagline_kn : hoveredLocation.tagline}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SVG Interactive District Projection */}
            <div className="w-full max-w-3xl aspect-[9/7] relative">
              <svg 
                viewBox={viewBox} 
                className="w-full h-full drop-shadow-md select-none transition-all duration-700 ease-out"
              >
                <defs>
                  <linearGradient id="districtLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F1F5FB" />
                    <stop offset="50%" stopColor="#E2ECF8" />
                    <stop offset="100%" stopColor="#D2E3F6" />
                  </linearGradient>
                  <linearGradient id="districtDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B2347" />
                    <stop offset="50%" stopColor="#081A38" />
                    <stop offset="100%" stopColor="#051228" />
                  </linearGradient>
                  <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#F9E899" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D4AF37" floodOpacity="0.7"/>
                  </filter>
                </defs>

                {/* 1. Belagavi District Boundary Polygon (Accurate Geographic Silhouette) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 } as any}
                  whileInView={{ pathLength: 1, opacity: 1 } as any}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: PREMIUM_EASE }}
                  d="M 280 60 
                     L 440 45 L 560 30 L 720 70 L 820 160 L 860 260 
                     L 810 340 L 740 370 L 760 480 L 680 580 L 590 620 
                     L 460 670 L 320 660 L 220 610 L 140 550 L 90 440 
                     L 80 320 L 140 210 L 210 110 Z"
                  className="fill-[url(#districtLight)] dark:fill-[url(#districtDark)] stroke-[url(#goldStroke)] stroke-[2.5]"
                />

                {/* Internal Taluk Grid Radial Architecture */}
                <path
                  d="M 280 60 L 460 350 M 560 30 L 460 350 M 820 160 L 460 350 M 760 480 L 460 350 M 460 670 L 460 350 M 140 550 L 460 350 M 80 320 L 460 350"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.2)"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                />

                {/* 2. Animated Flowing Regional Connections */}
                {showConnections && (
                  <g>
                    {/* NH-48 Golden Quadrilateral Spine (Pune <-> Belagavi <-> Bengaluru) */}
                    <path
                      d="M 380 30 Q 420 200 460 360 T 560 660"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="3.5"
                      strokeDasharray="8 8"
                      opacity="0.8"
                    />

                    {/* Animated Flow Dash on NH48 */}
                    <motion.path
                      animate={{ strokeDashoffset: [-32, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      d="M 380 30 Q 420 200 460 360 T 560 660"
                      fill="none"
                      stroke="#F9E899"
                      strokeWidth="2"
                      strokeDasharray="6 12"
                    />

                    {/* NH-4A Highway to Goa & Arabian Sea Ports */}
                    <path
                      d="M 460 360 Q 300 440 60 480"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      opacity="0.75"
                    />
                    <motion.path
                      animate={{ strokeDashoffset: [-24, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                      d="M 460 360 Q 300 440 60 480"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="1.8"
                      strokeDasharray="4 8"
                    />

                    {/* Regional Outbound Direction Labels */}
                    <text x="360" y="22" fill="#D4AF37" fontSize="11" fontWeight="800" letterSpacing="0.06em">↑ PUNE / MUMBAI (NH-48)</text>
                    <text x="570" y="675" fill="#D4AF37" fontSize="11" fontWeight="800" letterSpacing="0.06em">↓ BENGALURU (NH-48)</text>
                    <text x="10" y="495" fill="#3B82F6" fontSize="11" fontWeight="800" letterSpacing="0.06em">← GOA PORTS (NH-4A)</text>
                    <text x="735" y="555" fill="#10B981" fontSize="11" fontWeight="800">↘ HUBBALLI-DHARWAD</text>
                  </g>
                )}

                {/* 3. Interactive Location Markers with Pulsating Rings */}
                {filteredLocations.map((loc, index) => {
                  const { x, y } = projectCoords(loc.lat, loc.lng);
                  const isSelected = selectedLocation?.id === loc.id;
                  const isHovered = hoveredLocation?.id === loc.id;

                  return (
                    <motion.g
                      key={loc.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.015, duration: 0.4 }}
                      className="cursor-pointer group"
                      onClick={() => {
                        setSelectedLocation(loc);
                        if (zoomLevel === 1) setZoomLevel(1.5);
                      }}
                      onMouseEnter={() => setHoveredLocation(loc)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      transform={`translate(${x}, ${y})`}
                    >
                      {/* Outer pulsing ring for selected marker */}
                      {isSelected && (
                        <circle
                          r="24"
                          className="fill-none stroke-gold-400 stroke-2 animate-ping opacity-70"
                        />
                      )}

                      {/* Hover ring aura */}
                      {isHovered && (
                        <circle
                          r="18"
                          className="fill-gold-500/20 stroke-gold-400 stroke-1"
                        />
                      )}

                      {loc.isProposed ? (
                        <>
                          <circle
                            r="11"
                            className="fill-gold-500/20 stroke-gold-500 stroke-2 stroke-dashed animate-spin"
                            style={{ animationDuration: '7s' }}
                          />
                          <circle r="4.5" className="fill-gold-500" />
                        </>
                      ) : (
                        <>
                          <circle
                            r={isSelected ? "11" : isHovered ? "10" : "8"}
                            className={`transition-all duration-200 ${
                              isSelected
                                ? 'fill-gold-500 stroke-white dark:stroke-navy-950 stroke-2'
                                : 'fill-navy-600 dark:fill-blue-500 stroke-white dark:stroke-navy-900 stroke-2'
                            }`}
                            filter={isSelected ? "url(#goldGlow)" : undefined}
                          />
                          <circle r="3" className="fill-white" />
                        </>
                      )}

                      {/* Permanent compact title for selected marker */}
                      {isSelected && (
                        <text
                          x="14"
                          y="4"
                          className="fill-navy-950 dark:fill-white font-black text-[11px] drop-shadow-md select-none pointer-events-none"
                        >
                          {language === 'kn' ? loc.name_kn : loc.name}
                        </text>
                      )}
                    </motion.g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Detailed Location Card & Key Specs Drawer */}
          <div className="lg:col-span-4 p-6 bg-white dark:bg-navy-900 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-navy-800 flex flex-col justify-between">
            {selectedLocation ? (
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: PREMIUM_EASE }}
                className="space-y-4"
              >
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

                {/* Authentic Landmark Photograph Preview (if available) */}
                {LOCATION_PHOTOS[selectedLocation.id] && (
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-navy-700 shadow-md bg-navy-950 group">
                    <Image
                      src={LOCATION_PHOTOS[selectedLocation.id]}
                      alt={selectedLocation.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-sm text-[9px] font-bold text-gold-400 uppercase tracking-wider border border-white/10">
                      Authentic Belagavi Landmark
                    </div>
                  </div>
                )}

                {/* Location Title */}
                <div>
                  <h4 className="text-xl font-black text-navy-950 dark:text-white leading-snug">
                    {language === 'kn' ? selectedLocation.name_kn : selectedLocation.name}
                  </h4>
                  <p className="text-xs font-bold text-gold-600 dark:text-gold-400 mt-1">
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
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-navy-950/80 border border-gray-100 dark:border-navy-800 text-[11px] space-y-1.5 text-gray-500 dark:text-gray-400">
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
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-gold-600 dark:hover:bg-gold-400 transition-all duration-200 shadow-sm"
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
              </motion.div>
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
            <div key={loc.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 dark:hover:bg-navy-800/40 p-3 rounded-2xl transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gray-200">
                    {loc.category}
                  </span>
                  <span className="text-xs text-gray-400">• {language === 'kn' ? loc.taluk_kn : loc.taluk}</span>
                  {loc.isProposed && (
                    <span className="text-[10px] font-semibold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-full">
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
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 dark:border-navy-700 text-xs font-semibold text-navy-900 dark:text-white hover:border-gold-500 hover:text-gold-500 transition-colors shadow-sm"
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
