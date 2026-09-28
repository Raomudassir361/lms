import React, { useState } from 'react';
import {
  Clock,
  GraduationCap,
  Calendar,
  Hash,
  Award,
  MapPin,
  Crosshair,
  Copy,
  Check
} from 'lucide-react';

export default function StudentDashboardTab() {
  const [scheduleTab, setScheduleTab] = useState('Quizzes');
  const [copiedVoucher, setCopiedVoucher] = useState(false);

  const handleCopyVoucher = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedVoucher(true);
    setTimeout(() => setCopiedVoucher(false), 2000);
  };

  const scheduleDays = [
    { day: 'Sun', date: '06', active: false },
    { day: 'Mon', date: '07', active: true },
    { day: 'Tue', date: '08', active: false },
    { day: 'Wed', date: '09', active: true },
    { day: 'Thu', date: '10', active: false },
    { day: 'Fri', date: '11', active: true },
    { day: 'Sat', date: '12', active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Top Section: Stat cards + Class Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Stat Cards & Active Course */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Attendance Card */}
            <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 relative flex flex-col justify-between min-h-[140px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">
                    92/110
                  </div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">
                    Attendance
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Assignment Card */}
            <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 relative flex flex-col justify-between min-h-[140px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">
                    8/13
                  </div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">
                    Assignment
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Active Course Card */}
          <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-5">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Active Course
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Modern Web Application Development
              </h2>
              <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-md border border-blue-200 text-blue-700 bg-blue-50">
                ENROLLED
              </span>
            </div>

            {/* Schedule Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                Mon 01:00 PM – 03:00 PM
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                Wed 01:00 PM – 03:00 PM
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 text-xs text-slate-700 font-medium">
                Fri 01:00 PM – 03:00 PM
              </span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-700">Progress</span>
                <span className="text-slate-500 font-semibold">73% Completed</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: '73%' }}
                />
              </div>
            </div>

            {/* Course Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-3 text-xs text-slate-600 border-t border-[#edf0f5]">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-slate-400" />
                <span>
                  Batch: <b className="text-slate-900">20</b>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-slate-400" />
                <span>
                  Roll: <b className="text-slate-900 font-mono">773556</b>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>
                  Campus: <b className="text-slate-900">Zaitoon Ashraf IT Park</b>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-slate-400" />
                <span>
                  City: <b className="text-slate-900">Karachi</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Class Schedule Widget */}
        <div className="lg:col-span-5 bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 mb-5">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Class Schedule</h3>
            </div>

            {/* 7 Days of Week buttons */}
            <div className="grid grid-cols-7 gap-1.5 text-center mb-6">
              {scheduleDays.map((d) => (
                <div
                  key={d.day}
                  className={`py-2 px-1 rounded-xl text-xs flex flex-col items-center justify-center transition ${
                    d.active
                      ? 'bg-emerald-500 text-white font-bold shadow-xs'
                      : 'bg-slate-50 text-slate-600 border border-slate-100 font-medium'
                  }`}
                >
                  <span className="text-[10px] uppercase opacity-90">{d.day}</span>
                  <span className="text-sm font-bold">{d.date}</span>
                </div>
              ))}
            </div>

            {/* Segmented Filter Pills */}
            <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-medium mb-8 border border-slate-200/60">
              {['Assignments', 'Quizzes', 'Events'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setScheduleTab(tab)}
                  className={`grow py-1.5 px-3 rounded-lg transition text-center cursor-pointer ${
                    scheduleTab === tab
                      ? 'bg-white text-slate-900 font-bold shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Tab Content / Empty state */}
          <div className="py-12 text-center text-slate-400 text-sm font-medium">
            {scheduleTab === 'Quizzes' && 'No upcoming quizzes'}
            {scheduleTab === 'Assignments' && 'All weekly assignments submitted'}
            {scheduleTab === 'Events' && 'No upcoming events scheduled'}
          </div>
        </div>
      </div>

      {/* Bottom Section: Fee Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Fee Record</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold">Month</th>
                <th className="py-3 px-4 font-semibold">Amount</th>
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Due date</th>
                <th className="py-3 px-4 font-semibold">Voucher ID</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              <tr className="text-slate-700 hover:bg-[#fcfdfd] transition">
                <td className="py-4 px-4 font-medium text-slate-900">Sep 2026</td>
                <td className="py-4 px-4 font-semibold text-slate-900">Rs: 1000 /-</td>
                <td className="py-4 px-4 text-slate-500">Monthly</td>
                <td className="py-4 px-4 text-slate-600">08-Sep-2026</td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handleCopyVoucher('202609773556')}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 group font-mono cursor-pointer"
                  >
                    <span>202609773556</span>
                    {copiedVoucher ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                    )}
                  </button>
                </td>
                <td className="py-4 px-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md border border-emerald-200 text-emerald-700 bg-emerald-50">
                    PAID
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
