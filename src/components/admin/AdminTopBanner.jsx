import React from 'react';
import SmitLogo from '../SmitLogo';

export default function AdminTopBanner({ onBack, onSwitchPortal }) {
  return (
    <div className="bg-white border-b border-[#edf0f5] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-500 shadow-2xs">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <SmitLogo className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" variant="badge" />
        <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 shrink-0 animate-pulse"></span>
          <span className="font-semibold text-slate-900 truncate">Admin Portal</span>
          <span className="text-slate-400 hidden sm:inline truncate">• Central Directorate</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
        <button
          onClick={onBack}
          className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition font-medium whitespace-nowrap cursor-pointer"
        >
          ← Portals
        </button>
        {onSwitchPortal && (
          <>
            <button
              onClick={() => onSwitchPortal('student')}
              className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-medium whitespace-nowrap cursor-pointer"
            >
              Student
            </button>
            <button
              onClick={() => onSwitchPortal('teacher')}
              className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-medium whitespace-nowrap cursor-pointer"
            >
              Teacher
            </button>
          </>
        )}
      </div>
    </div>
  );
}
