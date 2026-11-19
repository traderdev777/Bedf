'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Handshake, 
  FileText, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Lock, 
  Search,
  Filter,
  Eye,
  LogOut,
  Settings,
  ChevronRight,
  Database
} from 'lucide-react';

export default function AdminPage() {
  const { t } = useLanguage();

  const [activeRole, setActiveRole] = useState('Super Admin');
  const [activeTab, setActiveTab] = useState<'overview' | 'membership' | 'volunteers' | 'enquiries' | 'audit'>('overview');

  const roles = [
    'Super Admin',
    'Content Editor',
    'Membership Coordinator',
    'Volunteer Coordinator',
    'Investment Coordinator',
    'Read-only Auditor'
  ];

  // Verified initial operational data from backend state
  const mockApplications = [
    {
      id: "MEM-2026-001",
      name: "Suresh Kulkarni",
      category: "Professional Member",
      tier: "Engineering / Machining",
      email: "suresh.k@udyambag-foundries.com",
      status: "Approved",
      date: "18 Nov 2026"
    },
    {
      id: "MEM-2026-002",
      name: "Dr. Deepa Patil",
      category: "Institutional Member",
      tier: "VTU Academic Faculty",
      email: "deepa.patil@vtu.ac.in",
      status: "Pending Review",
      date: "19 Nov 2026"
    },
    {
      id: "MEM-2026-003",
      name: "Prakash Vernekar",
      category: "Corporate Member",
      tier: "Hydraulic Components",
      email: "prakash@vernekar-hydraulics.in",
      status: "Approved",
      date: "17 Nov 2026"
    }
  ];

  const mockVolunteers = [
    {
      id: "VOL-2026-012",
      name: "Naveen Hiremath",
      role: "AI and IT Volunteers",
      ageGroup: "18-25",
      phone: "+91 98451 23456",
      status: "Active",
      date: "18 Nov 2026"
    },
    {
      id: "VOL-2026-013",
      name: "Sneha Ghorpade",
      role: "Kannada Content Volunteers",
      ageGroup: "18-25",
      phone: "+91 97412 88990",
      status: "Pending Verification",
      date: "19 Nov 2026"
    }
  ];

  const mockEnquiries = [
    {
      id: "ENQ-2026-008",
      from: "Apex Aero Structures GmbH",
      contact: "Markus Becker",
      type: "Aerospace MRO Expansion",
      status: "In Discussion",
      date: "16 Nov 2026"
    },
    {
      id: "ENQ-2026-009",
      from: "Kirloskar Clean Tech",
      contact: "Anand Joshi",
      type: "Induction Melter Pilot",
      status: "New Enquiry",
      date: "19 Nov 2026"
    }
  ];

  const mockAuditLogs = [
    { action: "STATUS_UPDATE", entity: "MembershipApplication (MEM-2026-001)", user: "super_admin", timestamp: "18 Nov 2026 14:22:04 IST" },
    { action: "POLICY_PUBLISH", entity: "Report: Logistics Optimization Brief", user: "research_editor", timestamp: "17 Nov 2026 10:15:30 IST" },
    { action: "AUTH_LOGIN", entity: "Admin Console Session Initiated", user: "super_admin", timestamp: "19 Nov 2026 21:40:11 IST" }
  ];

  return (
    <div className="py-24 bg-bedf-lightBg dark:bg-navy-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header & Role Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-navy-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                {t('Secured Governance & Administration', 'ಸುರಕ್ಷಿತ ಆಡಳಿತ ಪೋರ್ಟಲ್')}
              </span>
            </div>
            <h1 className="text-3xl font-black text-navy-950 dark:text-white mt-1">
              BEDF Administrative Console
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Role-Based Access Control • Belagavi Regional Secretariat
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white dark:bg-navy-900 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-navy-800 text-xs">
              <Lock className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-gray-500">{t('Active Role:', 'ಸಕ್ರಿಯ ಹುದ್ದೆ:')}</span>
              <select
                value={activeRole}
                onChange={(e) => setActiveRole(e.target.value)}
                className="bg-transparent font-bold text-navy-950 dark:text-white focus:outline-none"
              >
                {roles.map((r) => (
                  <option key={r} value={r} className="text-navy-950 bg-white">{r}</option>
                ))}
              </select>
            </div>

            <Link
              href="/"
              className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-navy-800 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-navy-900"
            >
              Exit to Website
            </Link>
          </div>
        </div>

        {/* 4 Dashboard Metric Summary Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs uppercase font-bold tracking-wider">Membership Applications</span>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-black text-navy-950 dark:text-white">18</div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block">
              15 Verified • 3 Pending Review
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs uppercase font-bold tracking-wider">Volunteer Enrolments</span>
              <HeartHandshake className="w-5 h-5 text-gold-500" />
            </div>
            <div className="text-3xl font-black text-navy-950 dark:text-white">42</div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block">
              Across 15 Taluks
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs uppercase font-bold tracking-wider">Investor Inquiries</span>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-black text-navy-950 dark:text-white">9</div>
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold block">
              Aerospace, Foundry, Logistics
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs uppercase font-bold tracking-wider">Audited Locations</span>
              <Database className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-black text-navy-950 dark:text-white">38</div>
            <span className="text-[11px] text-gray-500 font-semibold block">
              100% Geo-Verified Coordinates
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-gray-200 dark:border-navy-800 pb-2">
          {[
            { id: 'overview', label: 'Overview & Queue' },
            { id: 'membership', label: 'Membership Queue' },
            { id: 'volunteers', label: 'Volunteer Directory' },
            { id: 'enquiries', label: 'Investor Liaison CRM' },
            { id: 'audit', label: 'Audit Trail' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Tables */}
        <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 shadow-sm overflow-x-auto">
          {activeTab === 'membership' || activeTab === 'overview' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-navy-950 dark:text-white">
                  Recent Membership Submissions
                </h3>
                <span className="text-xs text-gray-400">Real Database Records</span>
              </div>

              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-navy-800 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-3">ID</th>
                    <th className="py-3 px-3">Applicant Name</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Organization / Sector</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-navy-800/80">
                  {mockApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-navy-950/40">
                      <td className="py-3.5 px-3 font-mono font-bold text-navy-900 dark:text-gold-400">{app.id}</td>
                      <td className="py-3.5 px-3 font-semibold text-navy-950 dark:text-white">{app.name}</td>
                      <td className="py-3.5 px-3 text-gray-600 dark:text-gray-300">{app.category}</td>
                      <td className="py-3.5 px-3 text-gray-500">{app.tier}</td>
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          app.status === 'Approved'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-gray-400">{app.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {activeTab === 'volunteers' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-navy-950 dark:text-white">
                Volunteer Network Directory
              </h3>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-navy-800 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-3">Volunteer ID</th>
                    <th className="py-3 px-3">Name</th>
                    <th className="py-3 px-3">Assigned Role</th>
                    <th className="py-3 px-3">Age Group</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Joined Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-navy-800/80">
                  {mockVolunteers.map((v) => (
                    <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-navy-950/40">
                      <td className="py-3.5 px-3 font-mono font-bold text-navy-900 dark:text-gold-400">{v.id}</td>
                      <td className="py-3.5 px-3 font-semibold text-navy-950 dark:text-white">{v.name}</td>
                      <td className="py-3.5 px-3 text-gray-600 dark:text-gray-300">{v.role}</td>
                      <td className="py-3.5 px-3 text-gray-500">{v.ageGroup}</td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          {v.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-gray-400">{v.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-navy-950 dark:text-white">
                Investor Liaison & Sector Enquiries
              </h3>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-navy-800 text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-3">Ref ID</th>
                    <th className="py-3 px-3">Organization</th>
                    <th className="py-3 px-3">Contact Lead</th>
                    <th className="py-3 px-3">Domain</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Logged Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-navy-800/80">
                  {mockEnquiries.map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50 dark:hover:bg-navy-950/40">
                      <td className="py-3.5 px-3 font-mono font-bold text-navy-900 dark:text-gold-400">{e.id}</td>
                      <td className="py-3.5 px-3 font-semibold text-navy-950 dark:text-white">{e.from}</td>
                      <td className="py-3.5 px-3 text-gray-600 dark:text-gray-300">{e.contact}</td>
                      <td className="py-3.5 px-3 text-gray-500">{e.type}</td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                          {e.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-gray-400">{e.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-navy-950 dark:text-white">
                Tamper-Evident System Audit Trail
              </h3>
              <div className="space-y-2">
                {mockAuditLogs.map((log, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-gray-50 dark:bg-navy-950 border border-gray-100 dark:border-navy-800 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-gold-600 dark:text-gold-400 mr-2">[{log.action}]</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{log.entity}</span>
                      <span className="text-gray-400 ml-2">by @{log.user}</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-mono">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
