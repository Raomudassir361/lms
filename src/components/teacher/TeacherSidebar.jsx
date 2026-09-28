import React from 'react';
import { ChevronRight, LayoutGrid, Calendar, CalendarCheck } from 'lucide-react';

export default function TeacherSidebar({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed
}) {
  return (
    <aside
      className={`bg-white border-r border-[#eceef2] hidden md:flex flex-col items-center py-5 transition-all duration-200 shrink-0 ${
        sidebarCollapsed ? 'w-14' : 'w-14'
      }`}
    >
      {/* Chevron Collapse Toggle at top */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center mb-6 transition cursor-pointer"
        title="Toggle Sidebar"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Nav Icons */}
      <div className="flex flex-col gap-5 text-slate-400">
        <button
          onClick={() => setActiveTab('Assignments')}
          className={`p-2 rounded-lg transition cursor-pointer ${
            activeTab === 'Assignments' || activeTab === 'Course Progress'
              ? 'text-blue-600 bg-blue-50'
              : 'hover:text-slate-700 hover:bg-slate-100'
          }`}
          title="Dashboard"
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab('Attendance')}
          className={`p-2 rounded-lg transition cursor-pointer ${
            activeTab === 'Attendance'
              ? 'text-blue-600 bg-blue-50'
              : 'hover:text-slate-700 hover:bg-slate-100'
          }`}
          title="Attendance & Schedule"
        >
          <Calendar className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTab('Students')}
          className={`p-2 rounded-lg transition cursor-pointer ${
            activeTab === 'Students'
              ? 'text-blue-600 bg-blue-50'
              : 'hover:text-slate-700 hover:bg-slate-100'
          }`}
          title="Enrolled Students"
        >
          <CalendarCheck className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
