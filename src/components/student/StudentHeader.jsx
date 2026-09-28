import React from 'react';
import { Menu, MessageSquare } from 'lucide-react';

export default function StudentHeader({
  activeTab,
  setActiveTab,
  onOpenMobileMenu,
  onOpenFeedback
}) {
  return (
    <header className="h-16 px-3 sm:px-6 lg:px-8 border-b border-[#edf0f5] flex items-center justify-between bg-white/90 backdrop-blur sticky top-0 z-20 shadow-2xs gap-2">
      <div className="flex items-center gap-2.5 sm:gap-3 text-sm min-w-0">
        {/* Mobile Hamburger Button matching AdminHeader */}
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 shrink-0 cursor-pointer active:scale-95 transition"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Responsive Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
          <span
            className="hover:text-slate-900 cursor-pointer font-medium"
            onClick={() => setActiveTab('Dashboard')}
          >
            Student Portal
          </span>
          <span className="text-slate-300 font-bold">&gt;</span>
          <span className="text-slate-700 font-medium truncate max-w-[140px] sm:max-w-none">
            Saylani IT
          </span>
          <span className="text-slate-300 font-bold">&gt;</span>
          <span className="text-blue-600 font-semibold">{activeTab}</span>
        </div>
      </div>

      {/* Quick Feedback Button */}
      <button
        onClick={onOpenFeedback}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition shadow-2xs shrink-0 cursor-pointer active:scale-95"
      >
        <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
        <span>Feedback</span>
      </button>
    </header>
  );
}
