import React from 'react';
import {
  LayoutGrid,
  BookOpen,
  CalendarCheck,
  FileText,
  CheckSquare,
  ChevronLeft,
  X
} from 'lucide-react';

/**
 * Authentic SMIT Brand Logo matching user screenshot
 */
function SmitBrandLogo({ collapsed = false }) {
  if (collapsed) {
    return (
      <svg
        viewBox="0 0 130 65"
        className="h-8 w-auto block select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SMIT"
      >
        {/* Blue Graduation Cap */}
        <polygon points="32,5 12,13 32,21 52,13" fill="#00a2e8" />
        <path d="M 20,16 C 20,22 44,22 44,16" fill="#0077b6" />
        <path d="M 32,13 Q 48,15 52,24" stroke="#00a2e8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="52" cy="24" r="1.5" fill="#00a2e8" />

        {/* Green Arch */}
        <path d="M 11,23 C 8,14 18,8 30,9 C 21,11 15,15 15,24 Z" fill="#76ba27" />

        {/* SM */}
        <text
          x="14"
          y="48"
          fill="#00a2e8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="32"
          letterSpacing="-1.5"
        >
          SM
        </text>

        {/* Stylized I */}
        <circle cx="68" cy="20" r="4.5" fill="#76ba27" />
        <path
          d="M 66,28 C 63,34 71,38 68,48"
          stroke="#76ba27"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* T */}
        <text
          x="77"
          y="48"
          fill="#00a2e8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="32"
          letterSpacing="-1.5"
        >
          T
        </text>
      </svg>
    );
  }

  return (
    <div className="flex flex-col items-start select-none">
      <svg
        viewBox="0 0 160 84"
        className="h-13 w-auto block select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SMIT - Saylani Mass IT Training"
      >
        {/* 1. Light Blue Cap over S and M */}
        <polygon points="44,7 18,16 44,25 70,16" fill="#00a2e8" />
        <path d="M 28,20 C 28,27 60,27 60,20" fill="#0077b6" />
        <path d="M 44,16 Q 66,18 71,29" stroke="#00a2e8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="71" cy="29" r="1.8" fill="#00a2e8" />

        {/* 2. Green Crescent Arch over S */}
        <path d="M 17,30 C 12,18 25,11 42,12 C 30,14 22,20 21,31 Z" fill="#76ba27" />

        {/* 3. SM Letters */}
        <text
          x="18"
          y="58"
          fill="#00a2e8"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="38"
          letterSpacing="-1.5"
        >
          SM
        </text>

        {/* 4. Stylized green 'I' (Round head dot + wavy organic figure) */}
        <circle cx="86" cy="23" r="5.5" fill="#76ba27" />
        <path
          d="M 83,33 C 80,39 89,44 86,57"
          stroke="#76ba27"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 5. Blue 'T' */}
        <text
          x="97"
          y="58"
          fill="#00a2e8"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="38"
          letterSpacing="-1.5"
        >
          T
        </text>

        {/* 6. Arched subtitle: SAYLANI MASS IT TRAINING */}
        <path id="smitCurveStudent" d="M 10,74 Q 80,68 150,74" fill="transparent" />
        <text
          fill="#334155"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="8.5"
          letterSpacing="0.8"
        >
          <textPath href="#smitCurveStudent" startOffset="50%" textAnchor="middle">
            SAYLANI MASS IT TRAINING
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function StudentSidebar({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  // Navigation items without Payment as requested:
  // Dashboard, Progress, Attendance, Assignment, Quiz
  const navItems = [
    { name: 'Dashboard', icon: LayoutGrid },
    { name: 'Progress', icon: BookOpen },
    { name: 'Attendance', icon: CalendarCheck },
    { name: 'Assignment', icon: FileText },
    { name: 'Quiz', icon: CheckSquare },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR - Built like AdminSidebar with collapsible open/close */}
      <aside
        className={`fixed lg:sticky top-0 h-screen z-50 lg:z-10 bg-white border-r border-[#edf0f5] flex flex-col justify-between transition-all duration-300 shadow-2xs max-w-[85vw] ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Top Header with SMIT Logo & Open/Close Collapse Toggle */}
        <div>
          <div className="h-20 px-4 flex items-center justify-between border-b border-[#edf0f5]">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-1">
                <SmitBrandLogo collapsed={false} />
              </div>
            )}
            {sidebarCollapsed && (
              <div className="mx-auto">
                <SmitBrandLogo collapsed={true} />
              </div>
            )}

            {/* Collapse toggle button: opens & closes exactly like Admin navbar */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex w-7 h-7 rounded-lg bg-[#f4f6fb] text-slate-500 hover:text-slate-800 items-center justify-center border border-[#e2e8f0] transition cursor-pointer"
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label="Toggle sidebar width"
            >
              <ChevronLeft
                className={`w-4 h-4 transition-transform duration-200 ${
                  sidebarCollapsed ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mobile close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Close sidebar"
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
                  className={`w-full flex items-center ${
                    sidebarCollapsed ? 'justify-center px-2 py-3' : 'gap-3.5 px-4 py-3'
                  } rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#181d27] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  title={item.name}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                  {!sidebarCollapsed && (
                    <span className="text-[13.5px] tracking-tight">{item.name}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile at bottom - styled like Admin profile card */}
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
                <div className="text-[10px] text-blue-600 font-semibold truncate">
                  Roll: 773556 • Batch 20
                </div>
              </div>
            )}

            {/* Circular Avatar Photo */}
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                alt="Rao Mudassir"
                className="w-9 h-9 rounded-full object-cover border border-slate-200 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
