'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

function ContactFormInner() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get('subject') || '';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: defaultSubject ? 'Investment Enquiry' : 'General Enquiry',
    message: defaultSubject ? `Regarding: ${defaultSubject}\n\n` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      await fetch(`${apiUrl}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      setSubmitted(true);
    } catch (err) {
      localStorage.setItem(`bedf_enquiry_${Date.now()}`, JSON.stringify(formState));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
            {t('Message Sent Successfully', 'ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ')}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            {t(
              'Thank you for reaching out to BEDF. Our team will review your enquiry and respond promptly.',
              'ಬಿಇಡಿಎಫ್ ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಮ್ಮ ತಂಡವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲಿದೆ.'
            )}
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline"
            >
              {t('Send another message', 'ಮತ್ತೊಂದು ಸಂದೇಶ ಕಳುಹಿಸಿ')}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-gray-100 dark:border-navy-800 pb-4">
            <h3 className="text-xl font-bold text-navy-950 dark:text-white">
              {t('Send an Official Enquiry', 'ವಿಚಾರಣಾ ಸಂದೇಶ ಕಳುಹಿಸಿ')}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {t('Fill out the form below and our team will get in touch.', 'ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t('Your Full Name *', 'ನಿಮ್ಮ ಹೆಸರು *')}
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Rajesh Vernekar"
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
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="rajesh@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t('Contact Number *', 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ *')}
              </label>
              <input
                type="tel"
                required
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t('Enquiry Category *', 'ವಿಚಾರಣಾ ವಿಭಾಗ *')}
              </label>
              <select
                value={formState.enquiryType}
                onChange={(e) => setFormState({ ...formState, enquiryType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="Investment Enquiry">Investment & Business Enquiry</option>
                <option value="Aerospace SEZ Partnership">Aerospace & Defence Collaboration</option>
                <option value="Institutional Research">University / Research Liaison</option>
                <option value="Membership & Volunteering">Membership & Volunteering Query</option>
                <option value="Media & Press">Media & Public Relations</option>
                <option value="General Enquiry">General Regional Enquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {t('Organisation / Institution (Optional)', 'ಸಂಸ್ಥೆ / ಉದ್ಯಮ (ಐಚ್ಛಿಕ)')}
            </label>
            <input
              type="text"
              value={formState.organization}
              onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
              placeholder="Company, university, or firm"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {t('Your Message / Detailed Requirements *', 'ನಿಮ್ಮ ಸಂದೇಶ / ವಿವರಗಳು *')}
            </label>
            <textarea
              rows={4}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell us about your proposal, query or the specific location/sector you are exploring..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{t('Submitting Message...', 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...')}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t('Dispatch Enquiry to BEDF', 'ಸಂದೇಶ ಕಳುಹಿಸಿ')}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Logo variant="horizontal" className="mb-2" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 dark:bg-navy-900 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('Foundation Liaison Desk', 'ಸಂಪರ್ಕ ಕೇಂದ್ರ')}</span>
          </div>

          <h1 className="text-h2-fluid font-display font-black text-navy-950 dark:text-white">
            {t('Connect With BEDF', 'ಬಿಇಡಿಎಫ್ ಸಂಪರ್ಕಿಸಿ')}
          </h1>

          <p className="font-sans text-lead-fluid text-gray-600 dark:text-gray-300">
            {t(
              'For investment enquiries, partnerships, membership, volunteering, research and regional development initiatives, contact our team.',
              'ಹೂಡಿಕೆ ವಿಚಾರಣೆಗಳು, ಪಾಲುದಾರಿಕೆ, ಸದಸ್ಯತ್ವ, ಸ್ವಯಂಸೇವಕ ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಸಂಶೋಧನಾ ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
                {t('Official Hotline', 'ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ')}
              </span>

              <div>
                <a
                  href="tel:+919019088160"
                  className="text-2xl sm:text-3xl font-extrabold text-white hover:text-gold-400 transition-colors block"
                >
                  +91 901 908 8160
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  {t('Direct telephone line for regional enquiries and investor liaison', 'ಪ್ರಾದೇಶಿಕ ವಿಚಾರಣೆಗಳಿಗೆ ನೇರ ದೂರವಾಣಿ ಸಂಖ್ಯೆ')}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919019088160"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('Click to Call +91 901 908 8160', 'ಕರೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ')}</span>
                </a>

                <a
                  href="https://wa.me/919019088160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Chat Directly on WhatsApp', 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ')}</span>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-gray-400 tracking-wider">
                    {t('Official Email', 'ಅಧಿಕೃತ ಇಮೇಲ್')}
                  </span>
                  <a
                    href="mailto:contact@bedf.org"
                    className="font-bold text-sm text-navy-950 dark:text-white hover:text-gold-500 transition-colors"
                  >
                    contact@bedf.org
                  </a>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {t('General communications & submissions', 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆಗಳು ಮತ್ತು ದಾಖಲೆಗಳು')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100 dark:border-navy-800">
                <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-gray-400 tracking-wider">
                    {t('Registered Secretariat', 'ನೋಂದಾಯಿತ ಕಾರ್ಯಾಲಯ')}
                  </span>
                  <p className="font-bold text-sm text-navy-950 dark:text-white">
                    Belagavi, Karnataka 590001, India
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Geographic Center: 15.8497° N, 74.4977° E
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-navy-900/60 border border-gray-200 dark:border-navy-800 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>
                {t(
                  'BEDF facilitates voluntary investor dialogue and ecosystem briefings. We do not provide statutory government land allotment or licensing.',
                  'ಬಿಇಡಿಎಫ್ ಸ್ವಯಂಪ್ರೇರಿತ ಹೂಡಿಕೆ ಸಂವಾದ ಮತ್ತು ಮಾಹಿತಿ ಒದಗಿಸುತ್ತದೆ. ಸರಕಾರಿ ಭೂಮಿ ಹಂಚಿಕೆ ಮಾಡುವುದಿಲ್ಲ.'
                )}
              </span>
            </div>
          </div>

          {/* Suspense Wrapped Contact Form */}
          <Suspense fallback={<div className="p-8 text-center text-sm text-gray-400">Loading form...</div>}>
            <ContactFormInner />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
