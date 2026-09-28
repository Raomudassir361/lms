import React from 'react';
import { Menu, Megaphone } from 'lucide-react';

export default function AdminHeader({
  activeTab,
  setActiveTab,
  onOpenMobileMenu,
  onOpenAddNotice
}) {
  return (
    <header className="h-16 px-3 sm:px-6 lg:px-8 border-b border-[#edf0f5] flex items-center justify-between bg-white/90 backdrop-blur sticky top-0 z-20 shadow-2xs gap-2">
      <div className="flex items-center gap-2.5 sm:gap-3 text-sm min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 shrink-0 cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
          <span
            className="hover:text-slate-900 cursor-pointer font-medium"
            onClick={() => setActiveTab('Overview')}
          >
            Admin Center
          </span>
          <span className="text-slate-300 font-bold">&gt;</span>
          <span className="text-slate-700 font-medium truncate max-w-[120px] sm:max-w-none">
            Saylani IT
          </span>
          <span className="text-slate-300 font-bold">&gt;</span>
          <span className="text-emerald-600 font-semibold">{activeTab}</span>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenAddNotice}
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition shadow-2xs cursor-pointer"
        >
          <Megaphone className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden sm:inline">Post Notice</span>
          <span className="sm:hidden">Notice</span>
        </button>
      </div>
    </header>
  );
}
