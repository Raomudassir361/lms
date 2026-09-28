import React from "react";
import SmitLogo from "./SmitLogo";

export default function Navbar({ activePortal, setActivePortal }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-center gap-2">
        {/* Brand with Official SMIT Logo properly adjusted */}
        <button
          onClick={() => setActivePortal("selection")}
          className="flex items-center gap-2.5 sm:gap-3 text-left py-1 hover:opacity-90 transition group focus:outline-none shrink-0"
          title="Return to SMIT Portal Selection"
        >
          <SmitLogo className="h-9 w-9 sm:h-11 sm:w-11" variant="badge" />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition leading-tight">
                SMIT
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Portal
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none hidden md:block mt-0.5">
              Saylani Mass IT Training
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
