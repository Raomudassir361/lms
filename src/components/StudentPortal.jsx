import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  CheckSquare,
  ChevronLeft,
  ChevronDown,
  Clock,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Hash,
  Award,
  MapPin,
  Crosshair,
  Copy,
  Check,
  Eye,
  Upload,
  Edit2,
  AlertTriangle,
  MessageSquare,
  X,
  Menu
} from 'lucide-react';
import SmitLogo from './SmitLogo';

export default function StudentPortal({ onBack, onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scheduleTab, setScheduleTab] = useState('Quizzes');
  const [copiedVoucher, setCopiedVoucher] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  // Expandable modules for Progress page
  const [expandedModules, setExpandedModules] = useState({
    'Front-End Development': true,
  });

  const toggleModule = (name) => {
    setExpandedModules((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleCopyVoucher = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedVoucher(true);
    setTimeout(() => setCopiedVoucher(false), 2000);
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Progress', icon: BookOpen },
    { name: 'Attendance', icon: Calendar },
    { name: 'Assignment', icon: FileText },
    { name: 'Quiz', icon: CheckSquare },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 font-sans flex flex-col antialiased">
      {/* Top Banner with easy portal switcher */}
      <div className="bg-white border-b border-[#edf0f5] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-500 shadow-2xs">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <SmitLogo className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" variant="badge" />
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 shrink-0 animate-pulse"></span>
            <span className="font-semibold text-slate-900 truncate">Student Portal</span>
            <span className="text-slate-400 hidden sm:inline">• Batch 20 (WMA)</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={onBack}
            className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition font-medium whitespace-nowrap"
          >
            ← Portals
          </button>
          {onSwitchPortal && (
            <>
              <button
                onClick={() => onSwitchPortal('teacher')}
                className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-medium whitespace-nowrap"
              >
                Teacher
              </button>
              <button
                onClick={() => onSwitchPortal('admin')}
                className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-medium whitespace-nowrap"
              >
                Admin
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex grow relative">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* LEFT SIDEBAR */}
        <aside
          className={`fixed lg:sticky top-0 h-screen z-50 lg:z-10 bg-white border-r border-[#edf0f5] flex flex-col justify-between transition-all duration-300 shadow-2xs max-w-[85vw] ${
            sidebarCollapsed ? 'w-20' : 'w-64'
          } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          {/* Top Logo & Toggle */}
          <div>
            <div className="h-20 px-4 flex items-center justify-between border-b border-[#edf0f5]">
              {!sidebarCollapsed && (
                <div className="flex items-center gap-2.5">
                  <SmitLogo className="h-10 w-10" variant="badge" />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-slate-900 text-sm leading-tight tracking-tight">SMIT</span>
                    <span className="text-[10px] text-slate-500 font-medium">Student Portal</span>
                  </div>
                </div>
              )}
              {sidebarCollapsed && (
                <div className="mx-auto">
                  <SmitLogo className="h-8 w-8" variant="badge" />
                </div>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:flex w-7 h-7 rounded-lg bg-[#f4f6fb] text-slate-500 hover:text-slate-800 items-center justify-center border border-[#e2e8f0] transition"
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <ChevronLeft
                  className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="p-3 space-y-1.5 mt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#eef4ff] text-[#2563eb] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        isActive ? 'text-[#2563eb]' : 'text-slate-400'
                      }`}
                    />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User Profile at bottom */}
          <div className="p-3 border-t border-[#edf0f5]">
            <div
              className={`flex items-center ${
                sidebarCollapsed ? 'justify-center' : 'justify-between'
              } p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]`}
            >
              {!sidebarCollapsed && (
                <div className="truncate pr-2">
                  <div className="text-xs font-semibold text-slate-900 tracking-wide truncate">
                    Rao Mudassir
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono truncate">Roll: 773556</div>
                </div>
              )}
              {/* Profile Avatar */}
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  alt="Rao Mudassir"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="grow flex flex-col min-w-0">
          {/* Header Bar */}
          <header className="h-16 px-3 sm:px-6 lg:px-8 border-b border-[#edf0f5] flex items-center justify-between bg-white/90 backdrop-blur sticky top-0 z-20 shadow-2xs gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 text-sm min-w-0">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 shrink-0"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
                <span
                  className="hover:text-slate-900 cursor-pointer font-medium"
                  onClick={() => setActiveTab('Dashboard')}
                >
                  Home
                </span>
                <span className="text-slate-300 font-bold">&gt;</span>
                <span className="text-slate-700 font-medium truncate max-w-[140px] sm:max-w-none">
                  Modern Web App Development
                </span>
                {activeTab !== 'Dashboard' && (
                  <>
                    <span className="text-slate-300 font-bold">&gt;</span>
                    <span className="text-blue-600 font-semibold">{activeTab}</span>
                  </>
                )}
              </div>
            </div>

            {/* Feedback Button */}
            <button
              onClick={() => {
                setFeedbackSent(false);
                setFeedbackOpen(true);
              }}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Feedback</span>
            </button>
          </header>

          {/* PAGE CONTENTS */}
          <main className="p-3.5 sm:p-6 lg:p-8 grow space-y-6 max-w-7xl w-full mx-auto">
            {/* 1. DASHBOARD VIEW */}
            {activeTab === 'Dashboard' && (
              <div className="space-y-6">
                {/* Top Section: Stat cards + Class Schedule */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Stat Cards */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Attendance Card */}
                      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 relative flex flex-col justify-between min-h-[140px]">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-3xl font-bold text-slate-900 tracking-tight">
                              92/110
                            </div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">
                              Attendance
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Assignment Card */}
                      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 relative flex flex-col justify-between min-h-[140px]">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-3xl font-bold text-slate-900 tracking-tight">
                              8/13
                            </div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">
                              Assignment
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Active Course Card */}
                    <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-5">
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Active Course
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          Modern Web Application Development
                        </h2>
                        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-md border border-blue-200 text-blue-700 bg-blue-50">
                          ENROLLED
                        </span>
                      </div>

                      {/* Schedule Badges */}
                      <div className="flex flex-wrap gap-2.5">
                        <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                          Mon 01:00 PM – 03:00 PM
                        </span>
                        <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                          Wed 01:00 PM – 03:00 PM
                        </span>
                        <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                          Fri 01:00 PM – 03:00 PM
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-700">Progress</span>
                          <span className="text-slate-500 font-semibold">73% Completed</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                            style={{ width: '73%' }}
                          />
                        </div>
                      </div>

                      {/* Course Metadata Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-3 text-xs text-slate-600 border-t border-[#edf0f5]">
                        <div className="flex items-center gap-2">
                          <Hash className="w-4 h-4 text-slate-400" />
                          <span>
                            Batch: <b className="text-slate-900">20</b>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-slate-400" />
                          <span>
                            Roll: <b className="text-slate-900 font-mono">773556</b>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span>
                            Campus: <b className="text-slate-900">Zaitoon Ashraf IT Park</b>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Crosshair className="w-4 h-4 text-slate-400" />
                          <span>
                            City: <b className="text-slate-900">Karachi</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Class Schedule Widget */}
                  <div className="lg:col-span-5 bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-base font-bold text-slate-900 mb-5">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <h3>Class Schedule</h3>
                      </div>

                      {/* 7 Days of Week buttons */}
                      <div className="grid grid-cols-7 gap-1.5 text-center mb-6">
                        {[
                          { day: 'Sun', date: '06', active: false },
                          { day: 'Mon', date: '07', active: true },
                          { day: 'Tue', date: '08', active: false },
                          { day: 'Wed', date: '09', active: true },
                          { day: 'Thu', date: '10', active: false },
                          { day: 'Fri', date: '11', active: true },
                          { day: 'Sat', date: '12', active: false },
                        ].map((d) => (
                          <div
                            key={d.day}
                            className={`py-2 px-1 rounded-xl text-xs flex flex-col items-center justify-center transition ${
                              d.active
                                ? 'bg-emerald-500 text-white font-bold shadow-xs'
                                : 'bg-slate-50 text-slate-600 border border-slate-100 font-medium'
                            }`}
                          >
                            <span className="text-[10px] uppercase opacity-90">{d.day}</span>
                            <span className="text-sm font-bold">{d.date}</span>
                          </div>
                        ))}
                      </div>

                      {/* Segmented Filter Pills */}
                      <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-medium mb-8 border border-slate-200/60">
                        {['Assignments', 'Quizzes', 'Events'].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setScheduleTab(tab)}
                            className={`grow py-1.5 px-3 rounded-lg transition text-center ${
                              scheduleTab === tab
                                ? 'bg-white text-slate-900 font-bold shadow-xs'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Schedule Tab Content / Empty state */}
                    <div className="py-12 text-center text-slate-400 text-sm font-medium">
                      {scheduleTab === 'Quizzes' && 'No upcoming quizzes'}
                      {scheduleTab === 'Assignments' && 'All weekly assignments submitted'}
                      {scheduleTab === 'Events' && 'No upcoming events scheduled'}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Fee Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Fee Record</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold">Month</th>
                          <th className="py-3 px-4 font-semibold">Amount</th>
                          <th className="py-3 px-4 font-semibold">Type</th>
                          <th className="py-3 px-4 font-semibold">Due date</th>
                          <th className="py-3 px-4 font-semibold">Voucher ID</th>
                          <th className="py-3 px-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        <tr className="text-slate-700 hover:bg-[#fcfdfd] transition">
                          <td className="py-4 px-4 font-medium text-slate-900">Sep 2026</td>
                          <td className="py-4 px-4 font-semibold text-slate-900">Rs: 1000 /-</td>
                          <td className="py-4 px-4 text-slate-500">Monthly</td>
                          <td className="py-4 px-4 text-slate-600">08-Sep-2026</td>
                          <td className="py-4 px-4">
                            <button
                              onClick={() => handleCopyVoucher('202609773556')}
                              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 group font-mono"
                            >
                              <span>202609773556</span>
                              {copiedVoucher ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                              )}
                            </button>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50">
                              PAID
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ATTENDANCE VIEW */}
            {activeTab === 'Attendance' && (
              <div className="space-y-6">
                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">110</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Total Classes</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-200/60">
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">92</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Present</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">6</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Leave</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">12</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Absent</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <XCircle className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Attendance Overview Bar */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Attendance Overview</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Your attendance is in great standing (84%). Keep it up!
                      </p>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-emerald-600">84%</span>
                  </div>

                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: '84%' }} />
                  </div>
                </div>

                {/* Attendance Table with Filter */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-900">Class Attendance Log</h4>
                    <button className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition">
                      <span>Sep 2026</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold w-24">Class</th>
                          <th className="py-3 px-4 font-semibold">Date</th>
                          <th className="py-3 px-4 font-semibold w-32">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {[
                          { classNo: 1, date: 'Wed, Sep 2, 2026', status: 'PRESENT' },
                          { classNo: 2, date: 'Fri, Sep 4, 2026', status: 'PRESENT' },
                          { classNo: 3, date: 'Mon, Sep 7, 2026', status: 'PRESENT' },
                          { classNo: 4, date: 'Wed, Sep 9, 2026', status: 'PRESENT' },
                          { classNo: 5, date: 'Fri, Sep 11, 2026', status: 'PRESENT' },
                        ].map((row) => (
                          <tr key={row.classNo} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                            <td className="py-4 px-4 font-semibold text-slate-900">#{row.classNo}</td>
                            <td className="py-4 px-4 text-slate-600">{row.date}</td>
                            <td className="py-4 px-4">
                              <span className="text-[11px] font-bold px-3 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ASSIGNMENT VIEW */}
            {activeTab === 'Assignment' && (
              <div className="space-y-6">
                {/* 3 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">16</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Assigned</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">14</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Submitted</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <Edit2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">2</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Pending</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Assignments Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold min-w-[220px]">Assignment</th>
                          <th className="py-3 px-4 font-semibold min-w-[100px]">Topics</th>
                          <th className="py-3 px-4 font-semibold min-w-[140px]">Due Date</th>
                          <th className="py-3 px-4 font-semibold min-w-[130px]">Status</th>
                          <th className="py-3 px-4 font-semibold min-w-[140px]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {[
                          {
                            name: 'Admin panel (E commerce Dashboad)',
                            topics: '7 Topics',
                            due: 'September 10, 2026',
                            status: 'APPROVED',
                            statusColor:
                              'border-emerald-200 text-emerald-700 bg-emerald-50',
                            isHackathon: false,
                            closed: false,
                          },
                          {
                            name: 'QUICKSERVE WMA (Batch-20)',
                            topics: 'No topics',
                            due: 'August 30, 2026',
                            status: 'NOT SUBMITTED',
                            statusColor:
                              'border-slate-200 text-slate-600 bg-slate-100',
                            isHackathon: true,
                            closed: true,
                          },
                          {
                            name: 'E-Commerce Website (React js)',
                            topics: '4 Topics',
                            due: 'August 17, 2026',
                            status: 'APPROVED',
                            statusColor:
                              'border-emerald-200 text-emerald-700 bg-emerald-50',
                            isHackathon: false,
                            closed: false,
                          },
                          {
                            name: 'Furniture E-Commerce Website',
                            topics: '5 Topics',
                            due: 'August 10, 2026',
                            status: 'LATE SUBMITTED',
                            statusColor:
                              'border-amber-200 text-amber-700 bg-amber-50',
                            isHackathon: false,
                            closed: false,
                          },
                          {
                            name: 'MaintainIQ (Batch-20)',
                            topics: 'No topics',
                            due: 'July 12, 2026',
                            status: 'SUBMITTED',
                            statusColor:
                              'border-blue-200 text-blue-700 bg-blue-50',
                            isHackathon: true,
                            closed: true,
                          },
                          {
                            name: 'JavaScript Assignment – 25 Questions',
                            topics: '8 Topics',
                            due: 'July 10, 2026',
                            status: 'SUBMITTED',
                            statusColor:
                              'border-blue-200 text-blue-700 bg-blue-50',
                            isHackathon: false,
                            closed: false,
                          },
                          {
                            name: 'Budgetting App',
                            topics: '12 Topics',
                            due: 'June 1, 2026',
                            status: 'APPROVED',
                            statusColor:
                              'border-emerald-200 text-emerald-700 bg-emerald-50',
                            isHackathon: false,
                            closed: false,
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-[#fcfdfd] transition ${
                              row.isHackathon ? 'bg-purple-50/20' : ''
                            }`}
                          >
                            <td className="py-4 px-4 font-semibold text-slate-900 flex items-center gap-2">
                              <span>{row.name}</span>
                              {row.isHackathon && (
                                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                                  HACKATHON
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-xs">
                              {row.topics === 'No topics' ? (
                                <span className="text-slate-400">No topics</span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                                  {row.topics}
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-slate-600">{row.due}</td>
                            <td className="py-4 px-4">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${row.statusColor}`}
                              >
                                {row.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              {row.closed ? (
                                <div className="flex items-center gap-2">
                                  <button className="text-slate-400 hover:text-slate-700 p-1">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <span className="text-xs italic text-red-500 font-medium">
                                    Submissions closed
                                  </span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-3 text-slate-400">
                                  <button className="hover:text-blue-600 transition" title="View details">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                  <button className="hover:text-blue-600 transition" title="Upload files">
                                    <Upload className="w-4 h-4" />
                                  </button>
                                  <button className="hover:text-blue-600 transition" title="Edit submission">
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 4. QUIZ VIEW */}
            {activeTab === 'Quiz' && (
              <div className="space-y-6">
                {/* Important Information Banner */}
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-center gap-2 text-base font-bold text-amber-900 mb-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <h4>Important Quiz Information</h4>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-amber-900/90 ml-1">
                    <li>Once started, quizzes must be completed in one session.</li>
                    <li>Switching tabs or leaving the window will be recorded.</li>
                    <li>Ensure you have a stable internet connection before beginning.</li>
                    <li>The quiz will open in fullscreen mode.</li>
                  </ul>
                </div>

                {/* Quizzes Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold min-w-[160px]">Title</th>
                          <th className="py-3 px-4 font-semibold min-w-[200px]">Module</th>
                          <th className="py-3 px-4 font-semibold text-center">Questions</th>
                          <th className="py-3 px-4 font-semibold text-center">Attempts</th>
                          <th className="py-3 px-4 font-semibold text-center">Percentage</th>
                          <th className="py-3 px-4 font-semibold">Status</th>
                          <th className="py-3 px-4 font-semibold text-center">Note</th>
                          <th className="py-3 px-4 font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {[
                          {
                            title: 'Javascript (Quiz-4)',
                            module: 'Modern Front-End Development',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '88%',
                            status: 'PASSED',
                          },
                          {
                            title: 'Javascript (Quiz-3)',
                            module: 'Modern Front-End Development',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '65%',
                            status: 'FAILED',
                          },
                          {
                            title: 'Javascript (Quiz-2)',
                            module: 'Modern Front-End Development',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '75%',
                            status: 'PASSED',
                          },
                          {
                            title: 'Javascript (Quiz-1)',
                            module: 'Modern Front-End Development',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '90%',
                            status: 'PASSED',
                          },
                          {
                            title: 'CSS Quiz',
                            module: 'Front-End Development',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '75%',
                            status: 'PASSED',
                          },
                          {
                            title: 'HTML Quiz',
                            module: 'Web Designing',
                            questions: 40,
                            attempts: '1 / 3',
                            percent: '83%',
                            status: 'PASSED',
                          },
                        ].map((quiz, idx) => (
                          <tr key={idx} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                            <td className="py-4 px-4 font-semibold text-slate-900">{quiz.title}</td>
                            <td className="py-4 px-4 text-slate-600">{quiz.module}</td>
                            <td className="py-4 px-4 text-center">
                              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                                {quiz.questions}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                                {quiz.attempts}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center font-bold text-slate-900">
                              {quiz.percent}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                                  quiz.status === 'PASSED'
                                    ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                    : 'border-red-200 text-red-700 bg-red-50'
                                }`}
                              >
                                {quiz.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-center text-slate-400">—</td>
                            <td className="py-4 px-4">
                              <button
                                disabled
                                className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-semibold cursor-not-allowed"
                              >
                                Completed
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center text-xs text-slate-500 mt-6 pt-4 border-t border-[#edf0f5]">
                    Contact your instructor if you have any issues accessing your quizzes.
                  </div>
                </div>
              </div>
            )}

            {/* 5. PROGRESS VIEW */}
            {activeTab === 'Progress' && (
              <div className="space-y-6">
                {/* 3 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">81</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Total Topics</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">56</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        Completed Topics
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900">25</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Pending Topics</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Modules Accordion List */}
                <div className="space-y-4">
                  {/* Module 1: Web Designing */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">Web Designing</h4>
                          <span className="text-xs text-blue-600 underline cursor-pointer">
                            Topics: 20/20
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Circular Progress Badge */}
                        <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                          100%
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Module 2: Front-End Development (Expanded) */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 space-y-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleModule('Front-End Development')}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">Front-End Development</h4>
                          <span className="text-xs text-slate-500">Topics: 26/31</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                          84%
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            expandedModules['Front-End Development'] ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Sub-topics list */}
                    {expandedModules['Front-End Development'] && (
                      <div className="pt-4 border-t border-[#edf0f5] space-y-3">
                        <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Topics in Front-End Development:
                        </h5>

                        {/* Topic item 1 */}
                        <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4 space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                JavaScript Introduction
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Completed: Feb 22, 2026
                              </div>
                            </div>
                          </div>
                          <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-100 ml-6 text-xs text-blue-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span className="font-medium">JavaScript Assignment – 25 Questions</span>
                          </div>
                        </div>

                        {/* Topic item 2 */}
                        <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4 space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                JavaScript Chapter 1 – 10
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Completed: Mar 3, 2026
                              </div>
                            </div>
                          </div>
                          <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-100 ml-6 text-xs text-blue-700 space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                              <span className="font-medium">JavaScript Assignment – 25 Questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                              <span className="font-medium">Budgetting App</span>
                            </div>
                          </div>
                        </div>

                        {/* Topic item 3 */}
                        <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                JavaScript Chapter 11 – 20
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Completed: Apr 6, 2026
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Module 3: Modern Front-End Development */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">
                            Modern Front-End Development
                          </h4>
                          <span className="text-xs text-slate-500">Topics: 10/14</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                          71%
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Module 4: Back-End Development */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">Back-End Development</h4>
                          <span className="text-xs text-slate-500">Topics: 0/16</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-slate-400 mr-2">0%</span>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* FEEDBACK MODAL */}
      {feedbackOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Submit Feedback
              </h3>
              <button
                onClick={() => setFeedbackOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedbackSent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-slate-900 font-bold text-base">Thank You!</h4>
                <p className="text-xs text-slate-500">
                  Your feedback has been submitted to the SMIT Academic Department.
                </p>
                <button
                  onClick={() => setFeedbackOpen(false)}
                  className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-500">
                  Share your experience, report an issue with courses, attendance, or quizzes.
                </p>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Write your feedback here..."
                  className="w-full h-28 bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setFeedbackOpen(false)}
                    className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (feedbackText.trim()) {
                        setFeedbackSent(true);
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
                  >
                    Send Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
