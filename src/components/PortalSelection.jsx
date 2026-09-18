import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PortalSelection({ onSelectPortal }) {
  const options = [
    {
      id: 'student',
      title: 'Student Portal',
      subtitle: 'طالب علم پورٹل',
      desc: 'View your courses, attendance, and grades.',
      icon: GraduationCap,
      color: 'bg-blue-600',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
      borderHover: 'hover:border-blue-400',
    },
    {
      id: 'teacher',
      title: 'Teacher Portal',
      subtitle: 'استاد پورٹل',
      desc: 'Manage your classes, students, and timetable.',
      icon: BookOpen,
      color: 'bg-emerald-600',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      borderHover: 'hover:border-emerald-400',
    },
    {
      id: 'admin',
      title: 'Admin Portal',
      subtitle: 'ایڈمن پورٹل',
      desc: 'Campus overview, instructors, batches, and student directory.',
      icon: ShieldCheck,
      color: 'bg-emerald-600',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      borderHover: 'hover:border-emerald-400',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2 text-center leading-tight">
          Saylani Mass IT Training Center
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 mb-2">
          Select Portal
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto text-center leading-relaxed">
          Please select one option to continue: Student, Teacher, or Admin
        </p>
      </div>

      {/* 3 Main Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <div
              key={opt.id}
              className={`bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-2xs transition-all duration-200 ${opt.borderHover} hover:shadow-md`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${opt.color} text-white flex items-center justify-center mb-4 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">{opt.title}</h2>
                <div className="text-xs font-medium text-slate-500 mb-2.5">{opt.subtitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{opt.desc}</p>
              </div>

              <button
                onClick={() => onSelectPortal(opt.id)}
                className={`w-full py-2.5 sm:py-3 px-4 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition ${opt.btnColor} shadow-xs active:scale-[0.98]`}
              >
                <span>Open {opt.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
