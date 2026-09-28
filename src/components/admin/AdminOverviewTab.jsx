import React from 'react';
import {
  Users,
  GraduationCap,
  Layers,
  BarChart3,
  TrendingUp,
  Building,
  Plus,
  Download,
  Megaphone
} from 'lucide-react';

export default function AdminOverviewTab({
  batches,
  announcements,
  onOpenAddInstructor,
  onOpenAddStudent,
  onOpenAddBatch,
  onExportCSV,
  onGoToBatches,
  onGoToAnnouncements
}) {
  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">4,820</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Total Enrolled Students
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +14% from last intake
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* Total Instructors */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">84</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Certified Instructors
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              6 Active Departments
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <GraduationCap className="w-5 h-5" />
          </div>
        </div>

        {/* Active Batches */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">32</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Active Running Batches
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-2">
              Incl. Batch 20 (WMA)
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        {/* Average Attendance */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">88.4%</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Avg Institute Attendance
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-2">
              High standing across campuses
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <BarChart3 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Middle Grid: Campus Distribution + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Campuses Overview */}
        <div className="lg:col-span-8 bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Campus Enrollment Breakdown</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Active students distribution across Saylani technology campuses
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              Karachi & Hyderabad
            </span>
          </div>

          <div className="space-y-4 pt-2">
            {[
              { name: 'Zaitoon Ashraf IT Park', city: 'Karachi', students: 1420, capacity: 1600, percent: 88, color: 'bg-emerald-600' },
              { name: 'Gulshan Campus (Saylani Center)', city: 'Karachi', students: 1250, capacity: 1400, percent: 89, color: 'bg-blue-600' },
              { name: 'Numish Campus', city: 'Karachi', students: 840, capacity: 1000, percent: 84, color: 'bg-emerald-600' },
              { name: 'Bahadurabad Head Office', city: 'Karachi', students: 760, capacity: 850, percent: 89, color: 'bg-amber-600' },
              { name: 'Latifabad Center', city: 'Hyderabad', students: 550, capacity: 700, percent: 78, color: 'bg-rose-600' },
            ].map((camp) => (
              <div key={camp.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-900 font-semibold">{camp.name}</span>
                    <span className="text-slate-400 text-[11px]">({camp.city})</span>
                  </div>
                  <span className="text-slate-600">
                    <b className="text-slate-900">{camp.students}</b> / {camp.capacity} ({camp.percent}%)
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${camp.color} rounded-full transition-all duration-500`}
                    style={{ width: `${camp.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Action Hub & Live Notices */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Quick Administrative Actions */}
          <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
            <h3 className="text-base font-bold text-slate-900 mb-4">Quick Management</h3>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={onOpenAddInstructor}
                className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-left transition flex flex-col gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Add Instructor</div>
                  <div className="text-[10px] text-slate-500">Register new teacher</div>
                </div>
              </button>

              <button
                onClick={onOpenAddStudent}
                className="p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-left transition flex flex-col gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Enroll Student</div>
                  <div className="text-[10px] text-slate-500">Assign roll number</div>
                </div>
              </button>

              <button
                onClick={onOpenAddBatch}
                className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-left transition flex flex-col gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">New Batch</div>
                  <div className="text-[10px] text-slate-500">Launch course intake</div>
                </div>
              </button>

              <button
                onClick={onExportCSV}
                className="p-3 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 text-left transition flex flex-col gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Export CSV</div>
                  <div className="text-[10px] text-slate-500">Download data sheets</div>
                </div>
              </button>
            </div>
          </div>

          {/* Notice Board Preview */}
          <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 grow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-emerald-600" />
                  Active Bulletins
                </h4>
                <button
                  onClick={onGoToAnnouncements}
                  className="text-xs text-emerald-600 hover:underline font-medium cursor-pointer"
                >
                  View All
                </button>
              </div>
              <div className="space-y-2.5">
                {announcements.slice(0, 2).map((notice) => (
                  <div
                    key={notice.id}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                  >
                    <div className="font-semibold text-slate-900 line-clamp-1">{notice.title}</div>
                    <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-2">
                      <span>{notice.date}</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-medium">{notice.audience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Recent Batches Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Ongoing Academic Batches</h3>
            <p className="text-xs text-slate-500">Live progress of active course cohorts</p>
          </div>
          <button
            onClick={onGoToBatches}
            className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 cursor-pointer"
          >
            Manage All Batches &rarr;
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold">Batch</th>
                <th className="py-3 px-4 font-semibold">Course Title</th>
                <th className="py-3 px-4 font-semibold">Instructor</th>
                <th className="py-3 px-4 font-semibold">Campus</th>
                <th className="py-3 px-4 font-semibold text-center">Strength</th>
                <th className="py-3 px-4 font-semibold">Progress</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {batches.map((b) => (
                <tr key={b.id} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{b.batchNo}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-900">{b.title}</td>
                  <td className="py-3.5 px-4 text-slate-600">{b.instructor}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs">{b.campus}</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-slate-900">
                    {b.enrolled}/{b.capacity}
                  </td>
                  <td className="py-3.5 px-4 min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="h-2 grow bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full"
                          style={{ width: `${b.completion}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700">{b.completion}%</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                        b.status === 'Completed'
                          ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                          : 'border-emerald-200 text-emerald-700 bg-emerald-50'
                      }`}
                    >
                      {b.status}
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
