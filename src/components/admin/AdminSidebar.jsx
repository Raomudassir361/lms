import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Layers,
  BarChart3,
  Megaphone,
  ChevronLeft,
  X
} from 'lucide-react';
import SmitLogo from '../SmitLogo';

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const navItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Instructors', icon: GraduationCap },
    { name: 'Students Directory', icon: Users },
    { name: 'Batches & Courses', icon: Layers },
    { name: 'Attendance & Analytics', icon: BarChart3 },
    { name: 'Announcements', icon: Megaphone },
  ];

  return (
    <>
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
                  <span className="text-[10px] text-emerald-700 font-semibold">Central Admin</span>
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
              className="hidden lg:flex w-7 h-7 rounded-lg bg-[#f4f6fb] text-slate-500 hover:text-slate-800 items-center justify-center border border-[#e2e8f0] transition cursor-pointer"
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <ChevronLeft
                className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
              />
            </button>
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
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ecfdf5] text-emerald-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive ? 'text-emerald-600' : 'text-slate-400'
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
                  Muhammad Danish
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold truncate">
                  Director Academics • SMIT
                </div>
              </div>
            )}
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                MD
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
