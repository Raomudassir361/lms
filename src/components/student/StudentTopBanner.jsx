import React from 'react';

export default function StudentTopBanner({ onBack, onSwitchPortal }) {
  return (
    <div className="bg-white border-b border-[#edf0f5] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-500 shadow-2xs z-30">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 animate-pulse"></span>
        <span className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight truncate">
          Student Portal
        </span>
        <span className="text-slate-400 hidden sm:inline">• Batch 20 (WMA)</span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
        <button
          onClick={onBack}
          className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition font-medium whitespace-nowrap cursor-pointer active:scale-95"
        >
          ← Portals
        </button>
        {onSwitchPortal && (
          <>
            <button
              onClick={() => onSwitchPortal('teacher')}
              className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-medium whitespace-nowrap cursor-pointer active:scale-95"
            >
              Teacher
            </button>
            <button
              onClick={() => onSwitchPortal('admin')}
              className="text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-medium whitespace-nowrap cursor-pointer active:scale-95"
            >
              Admin
            </button>
          </>
        )}
      </div>
    </div>
  );
}
