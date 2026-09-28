import React from 'react';
import SmitLogo from '../SmitLogo';

export default function TeacherTopBanner({ onBack, onSwitchPortal }) {
  return (
    <div className="bg-white border-b border-[#e2e8f0] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-600 shadow-2xs">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <SmitLogo className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" variant="badge" />
        <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
          <span className="font-semibold text-slate-800 truncate">Faculty Portal</span>
          <span className="text-slate-400 hidden lg:inline">•</span>
          <span className="text-slate-500 hidden lg:inline truncate">S Muzammil Javed</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
        <button
          onClick={onBack}
          className="px-2 sm:px-2.5 py-1 rounded bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-medium transition text-xs whitespace-nowrap cursor-pointer"
        >
          ← Portals
        </button>
        {onSwitchPortal && (
          <>
            <button
              onClick={() => onSwitchPortal('student')}
              className="px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-medium transition text-xs whitespace-nowrap cursor-pointer"
            >
              Student
            </button>
            <button
              onClick={() => onSwitchPortal('admin')}
              className="px-2 sm:px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-medium transition text-xs whitespace-nowrap cursor-pointer"
            >
              Admin
            </button>
          </>
        )}
      </div>
    </div>
  );
}
