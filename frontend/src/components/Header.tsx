'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > 120 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

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
    { href: '/insights', label: 'Insights', label_kn: 'ಸಂಶೋಧನೆ ಮತ್ತು ವರದಿ' },
    { href: '/join', label: 'Join BEDF', label_kn: 'ಸೇರ್ಪಡೆ' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-navy-800/80 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo isDark={theme === 'dark'} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-navy-900 dark:text-white bg-navy-50 dark:bg-navy-800/80 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-navy-900/60'
                    }`}
                  >
                    {t(link.label, link.label_kn)}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-200 hover:border-gold-500 transition-colors shadow-sm"
                title="Switch Language"
                aria-label="Toggle Kannada or English"
              >
                <Globe className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
              </button>

              {/* Theme Switch */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:text-gold-500 hover:border-gold-500 transition-colors shadow-sm"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold-400" />
                ) : (
                  <Moon className="w-4 h-4 text-navy-800" />
                )}
              </button>

              {/* Official Contact Phone */}
              <a
                href="tel:+919019088160"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-navy-900 dark:text-gray-200 hover:text-gold-600 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-navy-800 rounded-full"
                title="Official BEDF Hotline"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>+91 901 908 8160</span>
              </a>

              {/* Join Button */}
              <Link
                href="/join"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-navy-900 dark:bg-gold-500 dark:text-navy-950 rounded-full hover:bg-gold-600 dark:hover:bg-gold-400 transition-all duration-200 shadow-sm"
              >
                <span>{t('Join Us', 'ಸೇರಿ')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions & Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 text-[11px] font-bold rounded-full border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-800 dark:text-gray-200"
              >
                {language === 'en' ? 'ಕನ್ನಡ' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-navy-800" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-900 transition-colors"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-navy-950 pt-24 px-6 pb-8 overflow-y-auto flex flex-col justify-between lg:hidden transition-all duration-300">
          <div className="space-y-4">
            <div className="pb-3 border-b border-gray-100 dark:border-navy-800">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                {t('Navigation', 'ಮೆನು')}
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-900/50'
                    }`}
                  >
                    <span>{t(link.label, link.label_kn)}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Contacts */}
          <div className="pt-6 border-t border-gray-100 dark:border-navy-800 space-y-3">
            <a
              href="tel:+919019088160"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>+91 901 908 8160</span>
            </a>

            <a
              href="https://wa.me/919019088160"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <span>{t('Chat on WhatsApp', 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ')}</span>
            </a>

            <Link
              href="/join"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm shadow-md"
            >
              <span>{t('Join BEDF Network', 'ಬಿಇಡಿಎಫ್ ಜಾಲಕ್ಕೆ ಸೇರಿ')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
