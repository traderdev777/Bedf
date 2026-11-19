'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1 & 2: Brand Identity & Vision */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="full" isDark={true} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t(
                'Belagavi Economic Development Foundation (BEDF) is an independent, citizen-led regional platform uniting industry, technology, innovation, and talent to build Belagavi and empower North Karnataka.',
                'ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ (BEDF) ಒಂದು ಸ್ವತಂತ್ರ ನಾಗರಿಕ ನೇತೃತ್ವದ ವೇದಿಕೆಯಾಗಿದ್ದು, ಕೈಗಾರಿಕೆ, ತಂತ್ರಜ್ಞಾನ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಪ್ರತಿಭೆಯನ್ನು ಒಗ್ಗೂಡಿಸಿ ಉತ್ತರ ಕರ್ನಾಟಕದ ಸಬಲೀಕರಣಕ್ಕೆ ಶ್ರಮಿಸುತ್ತದೆ.'
              )}
            </p>

            {/* Direct Official Contact Card */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-gray-400">
                    {t('Official Contact', 'ಅಧಿಕೃತ ಸಂಪರ್ಕ')}
                  </span>
                  <a
                    href="tel:+919019088160"
                    className="font-bold text-white hover:text-gold-400 transition-colors"
                  >
                    +91 901 908 8160
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-gray-400">
                    {t('WhatsApp Direct', 'ವಾಟ್ಸಾಪ್ ನೇರ ಸಂಪರ್ಕ')}
                  </span>
                  <a
                    href="https://wa.me/919019088160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>+91 901 908 8160</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-gray-400">
                    {t('Official Email', 'ಅಧಿಕೃತ ಇಮೇಲ್')}
                  </span>
                  <a
                    href="mailto:contact@bedf.org"
                    className="font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    contact@bedf.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Focus Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('Focus Areas', 'ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/focus-areas#ai-tech" className="hover:text-white transition-colors">
                  {t('AI & Technology', 'ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ & ಐಟಿ')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#aerospace-aeronautical" className="hover:text-white transition-colors">
                  {t('Aerospace & Aeronautical', 'ಏರೋಸ್ಪೇಸ್ & ಏವಿಯೇಷನ್')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#defence-technology" className="hover:text-white transition-colors">
                  {t('Defence & Advanced Tech', 'ರಕ್ಷಣಾ ತಂತ್ರಜ್ಞಾನ')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#advanced-manufacturing" className="hover:text-white transition-colors">
                  {t('Advanced Manufacturing', 'ಸುಧಾರಿತ ಉತ್ಪಾದನೆ')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#startups-entrepreneurship" className="hover:text-white transition-colors">
                  {t('Startups & MSMEs', 'ಸ್ಟಾರ್ಟಪ್ ಮತ್ತು ಎಂಎಸ್‌ಎಂಇ')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#education-research" className="hover:text-white transition-colors">
                  {t('Education & Research (VTU)', 'ಶಿಕ್ಷಣ & ಸಂಶೋಧನೆ')}
                </Link>
              </li>
              <li>
                <Link href="/focus-areas#trade-investment" className="hover:text-white transition-colors">
                  {t('Trade, Logistics & Exports', 'ವ್ಯಾಪಾರ & ರಫ್ತು')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Portals */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('Explore Belagavi', 'ಬೆಳಗಾವಿ ದರ್ಶನ')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/discover-belagavi" className="hover:text-white transition-colors">
                  {t('Regional Profile & Taluks', 'ಪ್ರಾದೇಶಿಕ ಚಿತ್ರಣ & ತಾಲೂಕುಗಳು')}
                </Link>
              </li>
              <li>
                <Link href="/#belagavi-map" className="hover:text-white transition-colors">
                  {t('Interactive District Map', 'ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ')}
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-white transition-colors">
                  {t('Action Initiatives', 'ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು')}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  {t('Economic Research & Data', 'ಆರ್ಥಿಕ ಸಂಶೋಧನೆ ಮತ್ತು ವರದಿಗಳು')}
                </Link>
              </li>
              <li>
                <Link href="/about#transparency" className="hover:text-white transition-colors">
                  {t('Governance & Transparency', 'ಆಡಳಿತ ಮತ್ತು ಪಾರದರ್ಶಕತೆ')}
                </Link>
              </li>
              <li>
                <Link href="/credits" className="hover:text-white transition-colors">
                  {t('Photographer & Asset Credits', 'ಚಿತ್ರ ಮತ್ತು ಆಸ್ತಿ ಕೃತಜ್ಞತೆಗಳು')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Join & Engage */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t('Participate', 'ಭಾಗವಹಿಸಿ')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/join?tab=membership" className="hover:text-white transition-colors">
                  {t('Become a Member', 'ಸದಸ್ಯರಾಗಿ')}
                </Link>
              </li>
              <li>
                <Link href="/join?tab=volunteer" className="hover:text-white transition-colors">
                  {t('Volunteer Network', 'ಸ್ವಯಂಸೇವಕರಾಗಿ')}
                </Link>
              </li>
              <li>
                <Link href="/join?tab=partner" className="hover:text-white transition-colors">
                  {t('Institutional Partnerships', 'ಸಂಸ್ಥಾಗತ ಪಾಲುದಾರಿಕೆ')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t('Investment Enquiry', 'ಹೂಡಿಕೆ ವಿಚಾರಣೆ')}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-xs text-gold-500 hover:text-gold-400 inline-flex items-center gap-1 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('Admin Governance Portal', 'ಆಡಳಿತ ಪೋರ್ಟಲ್')}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Institutional Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-xs text-gray-400 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-gray-300">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>{t('Institutional Clarification & Disclaimer', 'ಸಂಸ್ಥಾಗತ ಸ್ಪಷ್ಟೀಕರಣ ಮತ್ತು ಹಕ್ಕುತ್ಯಾಗ')}</span>
          </div>
          <p>
            {t(
              'Belagavi Economic Development Foundation (BEDF) is an independent, non-governmental, citizen-led regional platform. BEDF does not directly allot industrial land, grant statutory government licences, or guarantee state subsidies or commercial profits. All figures and geographical locations displayed on this website are sourced from published authoritative records (Census 2011, KIADB, AAI, VTU, Karnataka Gazette).',
              'ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ (BEDF) ಒಂದು ಸ್ವತಂತ್ರ, ಸರಕಾರೇತರ ನಾಗರಿಕ ನೇತೃತ್ವದ ಪ್ರಾದೇಶಿಕ ವೇದಿಕೆಯಾಗಿದೆ. BEDF ನೇರವಾಗಿ ಕೈಗಾರಿಕಾ ಭೂಮಿ ಮಂಜೂರು ಮಾಡುವುದಿಲ್ಲ, ಶಾಸನಬದ್ಧ ಪರವಾನಗಿಗಳನ್ನು ನೀಡುವುದಿಲ್ಲ ಅಥವಾ ಸರಕಾರಿ ಸಬ್ಸಿಡಿಗಳನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಅಂಕಿಅಂಶಗಳು ಅಧಿಕೃತ ಸರಕಾರಿ ದಾಖಲೆಗಳಿಂದ ಪಡೆದ ಮಾಹಿತಿಯಾಗಿದೆ.'
            )}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Belagavi Economic Development Foundation (BEDF). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-gray-400">
              Belagavi: 15.8497° N, 74.4977° E • Elev: 762m
            </span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              {t('Privacy Policy', 'ಗೌಪ್ಯತೆ ನೀತಿ')}
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              {t('Terms & Disclaimer', 'ಷರತ್ತುಗಳು')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

