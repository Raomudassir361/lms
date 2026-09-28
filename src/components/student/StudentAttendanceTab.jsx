import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronDown
} from 'lucide-react';

export default function StudentAttendanceTab() {
  const attendanceLogs = [
    { classNo: 1, date: 'Wed, Sep 2, 2026', status: 'PRESENT' },
    { classNo: 2, date: 'Fri, Sep 4, 2026', status: 'PRESENT' },
    { classNo: 3, date: 'Mon, Sep 7, 2026', status: 'PRESENT' },
    { classNo: 4, date: 'Wed, Sep 9, 2026', status: 'PRESENT' },
    { classNo: 5, date: 'Fri, Sep 11, 2026', status: 'PRESENT' },
  ];

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">110</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Total Classes</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-200/60">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">92</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Present</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">6</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Leave</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">12</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Absent</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
            <XCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Attendance Overview Bar */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900">Attendance Overview</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Your attendance is in great standing (84%). Keep it up!
            </p>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-emerald-600">84%</span>
        </div>

        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: '84%' }} />
        </div>
      </div>

      {/* Attendance Table with Filter */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold text-slate-900">Class Attendance Log</h4>
          <button className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer">
            <span>Sep 2026</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold w-24">Class</th>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold w-32">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {attendanceLogs.map((row) => (
                <tr key={row.classNo} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                  <td className="py-4 px-4 font-semibold text-slate-900">#{row.classNo}</td>
                  <td className="py-4 px-4 text-slate-600">{row.date}</td>
                  <td className="py-4 px-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
