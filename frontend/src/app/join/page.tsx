'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { 
  Users, 
  HeartHandshake, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Phone,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

function JoinContent() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as 'membership' | 'volunteer' | 'partner') || 'membership';

  const [activeTab, setActiveTab] = useState<'membership' | 'volunteer' | 'partner'>(initialTab);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync tab with query param
  useEffect(() => {
    const tabParam = searchParams.get('tab') as 'membership' | 'volunteer' | 'partner';
    if (tabParam && (tabParam === 'membership' || tabParam === 'volunteer' || tabParam === 'partner')) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Form States
  // 1. Membership Form
  const [membershipForm, setMembershipForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Belagavi',
    district: 'Belagavi',
    profession: '',
    organization: '',
    category: 'Professional Member',
    areasOfInterest: 'Aerospace & Precision Engineering',
    introduction: '',
    consent: false
  });

  // 2. Volunteer Form
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    ageGroup: '18-25',
    email: '',
    phone: '',
    city: 'Belagavi',
    district: 'Belagavi',
    education: '',
    occupation: '',
    skills: '',
    preferredRole: 'AI and IT Volunteers',
    availability: 'Weekends (4-8 hrs)',
    preferredLanguage: 'Kannada & English',
    motivation: '',
    consent: false,
    guardianConsent: false
  });

  // 3. Partnership Form
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    orgType: 'Industry / Corporate',
    collaborationScope: '',
    message: ''
  });

  const membershipCategories = [
    'Individual Member',
    'Professional Member',
    'Business Member',
    'Corporate Member',
    'Institutional Member',
    'Patron Member',
    'Honorary Member'
  ];

  const volunteerCategories = [
    'Youth Volunteers',
    'Technology Volunteers',
    'AI and IT Volunteers',
    'Research Volunteers',
    'Industry Volunteers',
    'Education Volunteers',
    'Social Media Volunteers',
    'Event Volunteers',
    'Kannada Content Volunteers',
    'Business Outreach Volunteers',
    'District Coordinators'
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let endpoint = '/api/v1/membership/applications';
    let payload: any = membershipForm;

    if (activeTab === 'volunteer') {
      endpoint = '/api/v1/volunteer/applications';
      payload = volunteerForm;
    } else if (activeTab === 'partner') {
      endpoint = '/api/v1/partnership/applications';
      payload = partnerForm;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const res = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmittedStatus('success');
      } else {
        localStorage.setItem(`bedf_application_${Date.now()}`, JSON.stringify({ type: activeTab, payload }));
        setSubmittedStatus('fallback');
      }
    } catch (err) {
      localStorage.setItem(`bedf_application_${Date.now()}`, JSON.stringify({ type: activeTab, payload }));
      setSubmittedStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto flex flex-col items-center">
        <Logo variant="horizontal" className="mb-2" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('Engage with BEDF', 'ಬಿಇಡಿಎಫ್ ಜತೆಗೆ ಕೈಜೋಡಿಸಿ')}</span>
        </div>

        <h1 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
          {t(
            "Your Contribution Can Shape Belagavi's Future.",
            'ನಿಮ್ಮ ಕೊಡುಗೆ ಬೆಳಗಾವಿಯ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಬಲ್ಲದು.'
          )}
        </h1>

        <p className="font-sans text-lead-fluid text-gray-600 dark:text-gray-300">
          {t(
            'Select your participation category below to join our network of regional champions, volunteers, and institutional partners.',
            'ನಮ್ಮ ಪ್ರಾದೇಶಿಕ ನಾಯಕರು, ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಪಾಲುದಾರರ ಜಾಲಕ್ಕೆ ಸೇರಲು ಸೂಕ್ತ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.'
          )}
        </p>
      </div>

      {/* 3 Main Tab Switchers */}
      <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm">
        <button
          onClick={() => { setActiveTab('membership'); setSubmittedStatus(null); }}
          className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'membership'
              ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-navy-950 dark:hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{t('Membership', 'ಸದಸ್ಯತ್ವ')}</span>
        </button>

        <button
          onClick={() => { setActiveTab('volunteer'); setSubmittedStatus(null); }}
          className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'volunteer'
              ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-navy-950 dark:hover:text-white'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>{t('Volunteer Network', 'ಸ್ವಯಂಸೇವಕ')}</span>
        </button>

        <button
          onClick={() => { setActiveTab('partner'); setSubmittedStatus(null); }}
          className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'partner'
              ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-navy-950 dark:hover:text-white'
          }`}
        >
          <Handshake className="w-4 h-4" />
          <span>{t('Partnerships', 'ಪಾಲುದಾರಿಕೆ')}</span>
        </button>
      </div>

      {/* Success / Fallback Message Screen */}
      {submittedStatus ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 text-center space-y-4 shadow-xl animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
            {t('Application Submitted Successfully!', 'ಅರ್ಜಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!')}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            {submittedStatus === 'success'
              ? t(
                  'Your application has been logged into the BEDF administrative database. A member of our coordination committee will contact you shortly.',
                  'ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಬಿಇಡಿಎಫ್ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ದಾಖಲಿಸಲಾಗಿದೆ. ನಮ್ಮ ಸಮನ್ವಯ ಸಮಿತಿಯು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲಿದೆ.'
                )
              : t(
                  'Your application has been stored locally. You can also send your details directly to our official WhatsApp helpline.',
                  'ನಿಮ್ಮ ಅರ್ಜಿಯ ವಿವರಗಳನ್ನು ದಾಖಲಿಸಿಕೊಳ್ಳಲಾಗಿದೆ. ನೀವು ನೇರವಾಗಿ ನಮ್ಮ ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಸಹಾಯವಾಣಿಗೂ ಕಳುಹಿಸಬಹುದು.'
                )}
          </p>

          {/* Digital Credential Preview */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-navy-900 dark:to-navy-950 border-2 border-gold-400/40 shadow-lg max-w-md mx-auto text-center space-y-3 relative overflow-hidden">
            <div className="flex justify-center">
              <Logo variant="horizontal" />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-gold-600 dark:text-gold-400 block">
              Provisional Digital Registration
            </span>
            <h4 className="text-lg font-black text-navy-950 dark:text-white">
              {activeTab === 'membership'
                ? (membershipForm.fullName || 'Member Candidate')
                : activeTab === 'volunteer'
                ? (volunteerForm.fullName || 'Volunteer Candidate')
                : (partnerForm.orgName || 'Partner Candidate')}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {activeTab === 'membership'
                ? membershipForm.category
                : activeTab === 'volunteer'
                ? volunteerForm.preferredRole
                : partnerForm.collaborationScope || 'Institutional Collaboration'}
            </p>
            <div className="text-[10px] text-gray-400 border-t border-gray-100 dark:border-navy-800 pt-2 flex items-center justify-between">
              <span>Ref: BEDF-REG-{Date.now().toString().slice(-6)}</span>
              <span>Belagavi, Karnataka</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919019088160?text=${encodeURIComponent(
                `Hello BEDF, I have submitted my ${activeTab} application via the portal. Looking forward to connecting!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('Confirm on WhatsApp Hotline (+91 901 908 8160)', 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸಿ')}</span>
            </a>

            <button
              onClick={() => setSubmittedStatus(null)}
              className="text-xs text-gray-500 hover:underline"
            >
              {t('Submit another application', 'ಮತ್ತೊಂದು ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಿ')}
            </button>
          </div>
        </div>
      ) : (
        /* Form Container */
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-xl">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* TAB 1: MEMBERSHIP APPLICATION */}
            {activeTab === 'membership' && (
              <>
                <div className="border-b border-gray-100 dark:border-navy-800 pb-4">
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white">
                    {t('BEDF Membership Application', 'ಬಿಇಡಿಎಫ್ ಸದಸ್ಯತ್ವ ಅರ್ಜಿ')}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {t('Connect with leaders across regional industries and institutions.', 'ಕೈಗಾರಿಕಾ ಮತ್ತು ಸಂಸ್ಥಾಗತ ನಾಯಕರ ಜತೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Full Name *', 'ಪೂರ್ಣ ಹೆಸರು *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={membershipForm.fullName}
                      onChange={(e) => setMembershipForm({ ...membershipForm, fullName: e.target.value })}
                      placeholder="e.g. Anand Kulkarni"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Email Address *', 'ಇಮೇಲ್ ವಿಳಾಸ *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={membershipForm.email}
                      onChange={(e) => setMembershipForm({ ...membershipForm, email: e.target.value })}
                      placeholder="anand@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Mobile Number *', 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={membershipForm.phone}
                      onChange={(e) => setMembershipForm({ ...membershipForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Membership Tier *', 'ಸದಸ್ಯತ್ವ ವರ್ಗ *')}
                    </label>
                    <select
                      value={membershipForm.category}
                      onChange={(e) => setMembershipForm({ ...membershipForm, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      {membershipCategories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Profession / Role', 'ವೃತ್ತಿ / ಹುದ್ದೆ')}
                    </label>
                    <input
                      type="text"
                      value={membershipForm.profession}
                      onChange={(e) => setMembershipForm({ ...membershipForm, profession: e.target.value })}
                      placeholder="e.g. Managing Director / Senior Architect"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Organisation / Enterprise', 'ಸಂಸ್ಥೆ / ಉದ್ಯಮ')}
                    </label>
                    <input
                      type="text"
                      value={membershipForm.organization}
                      onChange={(e) => setMembershipForm({ ...membershipForm, organization: e.target.value })}
                      placeholder="Company or institution name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('Brief Introduction & Regional Interests', 'ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ ಮತ್ತು ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರ')}
                  </label>
                  <textarea
                    rows={3}
                    value={membershipForm.introduction}
                    onChange={(e) => setMembershipForm({ ...membershipForm, introduction: e.target.value })}
                    placeholder="Share how you wish to engage with BEDF initiatives..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="m-consent"
                    required
                    checked={membershipForm.consent}
                    onChange={(e) => setMembershipForm({ ...membershipForm, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-gold-500 border-gray-300 focus:ring-gold-500"
                  />
                  <label htmlFor="m-consent" className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                    {t(
                      'I agree to adhere to BEDF constitution, ethical guidelines, and regional development principles.',
                      'ನಾನು ಬಿಇಡಿಎಫ್ ನಿಯಮಾವಳಿ ಮತ್ತು ನೈತಿಕ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಪಾಲಿಸಲು ಒಪ್ಪುತ್ತೇನೆ.'
                    )}
                  </label>
                </div>
              </>
            )}

            {/* TAB 2: VOLUNTEER NETWORK APPLICATION */}
            {activeTab === 'volunteer' && (
              <>
                <div className="border-b border-gray-100 dark:border-navy-800 pb-4">
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white">
                    {t('Volunteer Network Enrolment', 'ಸ್ವಯಂಸೇವಕ ನೋಂದಣಿ')}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {t('Contribute your talent to youth skilling, research, and grassroots drives.', 'ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಸಂಶೋಧನಾ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನಿಮ್ಮ ಸೇವೆಯನ್ನು ಮುಡಿಪಾಗಿಡಿ.')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Full Name *', 'ಪೂರ್ಣ ಹೆಸರು *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.fullName}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Age Group *', 'ವಯೋಮಾನ *')}
                    </label>
                    <select
                      value={volunteerForm.ageGroup}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, ageGroup: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="Under 18">Under 18 (Requires Guardian Consent)</option>
                      <option value="18-25">18 - 25 Years (Youth / Student)</option>
                      <option value="26-35">26 - 35 Years (Early Professional)</option>
                      <option value="36-50">36 - 50 Years (Mid Professional)</option>
                      <option value="50+">50+ Years (Senior / Veteran Advisor)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Email Address *', 'ಇಮೇಲ್ ವಿಳಾಸ *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="volunteer@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Mobile Number *', 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Preferred Volunteer Category *', 'ಆಸಕ್ತಿಯ ಸ್ವಯಂಸೇವಕ ವಿಭಾಗ *')}
                    </label>
                    <select
                      value={volunteerForm.preferredRole}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, preferredRole: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      {volunteerCategories.map((vc) => (
                        <option key={vc} value={vc}>{vc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Availability', 'ಲಭ್ಯತೆ')}
                    </label>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="Weekends (4-8 hrs)">Weekends (4 - 8 hrs / week)</option>
                      <option value="Flexible Evenings">Flexible Evenings</option>
                      <option value="Event Based">Event & Campaign Based</option>
                      <option value="Full Time Internship">Student Skilling Internship</option>
                    </select>
                  </div>
                </div>

                {volunteerForm.ageGroup === 'Under 18' && (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{t('Under-18 Guardian Consent Required', '18 ವರ್ಷದೊಳಗಿನವರಿಗೆ ಪಾಲಕರ ಒಪ್ಪಿಗೆ ಅಗತ್ಯ')}</span>
                    </div>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400">
                      {t(
                        'For applicants under 18 years of age, volunteer participation must be supervised and have parental/guardian approval in accordance with BEDF Child Safeguarding Policy.',
                        '18 ವರ್ಷದೊಳಗಿನ ಯುವಜನರು ಪಾಲಕರ ಅನುಮತಿಯೊಂದಿಗೆ ಮಾತ್ರ ಸ್ವಯಂಸೇವಕ ಕಾರ್ಯಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು.'
                      )}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="guardian-consent"
                        required
                        checked={volunteerForm.guardianConsent}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, guardianConsent: e.target.checked })}
                        className="w-4 h-4 rounded text-gold-500 border-amber-400 focus:ring-gold-500"
                      />
                      <label htmlFor="guardian-consent" className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                        {t('I confirm I have parental / guardian consent for supervised volunteer work.', 'ನಾನು ಪಾಲಕರ ಅನುಮತಿಯನ್ನು ಹೊಂದಿದ್ದೇನೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತೇನೆ.')}
                      </label>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('Skills & Motivation', 'ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಪ್ರೇರಣೆ')}
                  </label>
                  <textarea
                    rows={3}
                    value={volunteerForm.motivation}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                    placeholder="Briefly describe your background, tech/creative skills, and why you wish to volunteer..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="v-consent"
                    required
                    checked={volunteerForm.consent}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-gold-500 border-gray-300 focus:ring-gold-500"
                  />
                  <label htmlFor="v-consent" className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                    {t('I agree to the volunteer code of conduct and dedication to regional civic empowerment.', 'ನಾನು ಸ್ವಯಂಸೇವಕರ ನೀತಿ ಸಂಹಿತೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಅಭಿವೃದ್ಧಿ ನಿಯಮಗಳಿಗೆ ಬದ್ಧವಾಗಿರಲು ಒಪ್ಪುತ್ತೇನೆ.')}
                  </label>
                </div>
              </>
            )}

            {/* TAB 3: PARTNERSHIP APPLICATION */}
            {activeTab === 'partner' && (
              <>
                <div className="border-b border-gray-100 dark:border-navy-800 pb-4">
                  <h3 className="text-xl font-bold text-navy-950 dark:text-white">
                    {t('Institutional Partnership Expression of Interest', 'ಸಂಸ್ಥಾಗತ ಪಾಲುದಾರಿಕೆ ಆಸಕ್ತಿ')}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {t('Collaborate across industries, colleges, chambers, and global networks.', 'ಕೈಗಾರಿಕೆಗಳು, ಕಾಲೇಜುಗಳು ಮತ್ತು ಜಾಗತಿಕ ವೇದಿಕೆಗಳೊಂದಿಗೆ ಸಹಯೋಗ.')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Organisation Name *', 'ಸಂಸ್ಥೆಯ ಹೆಸರು *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.orgName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                      placeholder="Company, University or Association name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Contact Person & Title *', 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ ಮತ್ತು ಹುದ್ದೆ *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactPerson}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Patil, Director"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Official Email *', 'ಅಧಿಕೃತ ಇಮೇಲ್ *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="contact@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {t('Phone Number *', 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('Organisation Type *', 'ಸಂಸ್ಥೆಯ ಸ್ವರೂಪ *')}
                  </label>
                  <select
                    value={partnerForm.orgType}
                    onChange={(e) => setPartnerForm({ ...partnerForm, orgType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="Industry / Corporate">Aerospace / Manufacturing / Tech Corporate</option>
                    <option value="University / College">Engineering College / University / Research Institute</option>
                    <option value="Trade Chamber">Chamber of Commerce / Industry Association</option>
                    <option value="Incubator / VC">Startup Incubator / Venture Capital Syndicate</option>
                    <option value="Diaspora / International">Diaspora Professional Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {t('Proposed Scope of Collaboration *', 'ಪ್ರಸ್ತಾವಿತ ಸಹಯೋಗದ ವ್ಯಾಪ್ತಿ *')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    placeholder="Detail your proposed joint initiatives, student skilling programmes, research testbeds, or investment delegations..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-black text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t('Submitting Application...', 'ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...')}</span>
                ) : (
                  <>
                    <span>{t('Submit Application to BEDF', 'ಬಿಇಡಿಎಫ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Security & Regulatory Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              <span>
                {t(
                  'Your data is processed securely in accordance with BEDF Privacy Guidelines.',
                  'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಬಿಇಡಿಎಫ್ ಗೌಪ್ಯತೆ ನಿಯಮಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ರಕ್ಷಿಸಲಾಗುತ್ತದೆ.'
                )}
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default function JoinPage() {
  return (
    <div className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <Suspense fallback={<div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-400">Loading portal...</div>}>
        <JoinContent />
      </Suspense>
    </div>
  );
}
