import React from 'react';
import {
  MessageSquare,
  Plus,
  Users,
  CalendarCheck,
  FileText,
  CheckSquare,
  CheckCheck
} from 'lucide-react';

export default function TeacherHeader({
  activeTab,
  setActiveTab,
  onOpenFeedback,
  onOpenNewAssignment
}) {
  const navTabs = [
    { id: 'Students', label: 'Students', icon: Users },
    { id: 'Attendance', label: 'Attendance', icon: CalendarCheck },
    { id: 'Assignments', label: 'Assignments', icon: FileText },
    { id: 'Quizzes', label: 'Quizzes', icon: CheckSquare },
    { id: 'Course Progress', label: 'Course Progress', icon: CheckCheck },
  ];

  return (
    <>
      {/* Breadcrumbs & Feedback Header */}
      <div className="px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between border-b border-[#f1f3f7]">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
          <span
            className="hover:text-slate-600 cursor-pointer font-medium"
            onClick={() => setActiveTab('Assignments')}
          >
            Dashboard
          </span>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-600 font-medium truncate">
            Modern Web Application Development
          </span>
        </div>

        <button
          onClick={onOpenFeedback}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-2xs shrink-0 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
          <span>Feedback</span>
        </button>
      </div>

      {/* Title Bar + Action Button */}
      <div className="px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Modern Web Application Development
        </h1>

        {activeTab === 'Assignments' && (
          <button
            onClick={onOpenNewAssignment}
            className="self-start sm:self-auto flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-semibold shadow-xs transition active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Assignment</span>
          </button>
        )}
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="px-4 sm:px-6 border-b border-[#eceef2] overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium whitespace-nowrap">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-3 pt-1 border-b-2 transition relative cursor-pointer ${
                  isActive
                    ? 'border-blue-600 text-blue-600 font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
