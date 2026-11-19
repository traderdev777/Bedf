'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { 
  Sun, 
  Moon, 
  Globe, 
  Phone, 
  Menu, 
  X, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { PREMIUM_EASE } from '@/components/motion/MotionSystem';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home', label_kn: 'ಮುಖಪುಟ' },
    { href: '/about', label: 'About', label_kn: 'ನಮ್ಮ ಬಗ್ಗೆ' },
    { href: '/focus-areas', label: 'Focus Areas', label_kn: 'ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು' },
    { href: '/discover-belagavi', label: 'Discover Belagavi', label_kn: 'ಬೆಳಗಾವಿ ದರ್ಶನ' },
    { href: '/initiatives', label: 'Initiatives', label_kn: 'ಉಪಕ್ರಮಗಳು' },
    { href: '/insights', label: 'Insights', label_kn: 'ಸಂಶೋಧನೆ & ವರದಿ' },
    { href: '/join', label: 'Join BEDF', label_kn: 'ಸೇರ್ಪಡೆ' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-gray-200/90 dark:border-navy-800/90 shadow-md py-3'
            : 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-sm border-b border-gray-100/80 dark:border-navy-900/60 shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Official Horizontal BEDF Logo */}
            <div className="flex-shrink-0">
              <Logo variant="compact" />
            </div>

            {/* Centre: Minimal Clean Navigation with Smooth Hover Pill */}
            <nav
              className="hidden xl:flex items-center gap-1 relative"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredNav === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 z-10 ${
                      isActive
                        ? 'text-navy-950 dark:text-white font-black'
                        : 'text-gray-700 dark:text-gray-300 hover:text-navy-950 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-navy-100/70 dark:bg-navy-800/80 border border-navy-200/60 dark:border-navy-700 rounded-full -z-10 shadow-sm"
                      />
                    )}

                    {!isActive && isHovered && (
                      <motion.span
                        layoutId="hoverNavBackground"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="absolute inset-0 bg-gray-100/70 dark:bg-navy-900/70 rounded-full -z-10"
                      />
                    )}

                    <span>{t(link.label, link.label_kn)}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Switch */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50/80 dark:bg-navy-900 text-navy-900 dark:text-gray-200 hover:border-gold-500 hover:bg-white dark:hover:bg-navy-850 transition-colors shadow-sm"
                title="Switch Language (English / ಕನ್ನಡ)"
                aria-label="Toggle Kannada or English"
              >
                <Globe className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
              </motion.button>

              {/* Theme Switch with Rotation Micro-Interaction */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92, rotate: 180 }}
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50/80 dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:text-gold-600 hover:border-gold-500 hover:bg-white dark:hover:bg-navy-850 transition-colors shadow-sm"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Light / Dark Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold-400" />
                ) : (
                  <Moon className="w-4 h-4 text-navy-800" />
                )}
              </motion.button>

              {/* Hotline Contact Number */}
              <a
                href="tel:+919019088160"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-navy-900 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                title="Official BEDF Hotline"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>+91 901 908 8160</span>
              </a>

              {/* Gold-Accented Join BEDF Button with Spring Interaction */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/join"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-gold-400 rounded-full shadow-sm hover:shadow-md hover:shadow-gold-500/25 transition-all duration-200 group"
                >
                  <span>{t('Join BEDF', 'ಬಿಇಡಿಎಫ್‌ಗೆ ಸೇರಿ')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions: Language + Theme + Hamburger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1 text-xs font-bold rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-900 text-navy-900 dark:text-gray-200"
                aria-label="Toggle Language"
              >
                {language === 'en' ? 'ಕನ್ನಡ' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-900 text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-navy-800" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-900 border border-gray-200 dark:border-navy-800 transition-colors"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer with Smooth Slide Transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: PREMIUM_EASE }}
            className="fixed inset-0 z-40 bg-white/98 dark:bg-navy-950/98 backdrop-blur-xl pt-24 px-6 pb-8 overflow-y-auto flex flex-col justify-between xl:hidden"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-gray-100 dark:border-navy-800 flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                  {t('Navigation', 'ಮೆನು')}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  BEDF Official Platform
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-navy-50 dark:bg-navy-900 text-navy-950 dark:text-white font-bold border border-navy-100 dark:border-navy-800'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-900/50'
                        }`}
                      >
                        <span>{t(link.label, link.label_kn)}</span>
                        <ChevronRight className="w-4 h-4 text-gold-500" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Bottom Contacts */}
            <div className="pt-6 border-t border-gray-100 dark:border-navy-800 space-y-3">
              <a
                href="tel:+919019088160"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-50 dark:bg-navy-900 text-navy-950 dark:text-white font-bold text-sm border border-gray-200 dark:border-navy-800"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+91 901 908 8160</span>
              </a>

              <a
                href="https://wa.me/919019088160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
              >
                <span>{t('Chat on WhatsApp', 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ')}</span>
              </a>

              <Link
                href="/join"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black text-sm shadow-md transition-all"
              >
                <span>{t('Join BEDF Network', 'ಬಿಇಡಿಎಫ್ ಜಾಲಕ್ಕೆ ಸೇರಿ')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
