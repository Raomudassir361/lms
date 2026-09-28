import React from 'react';
import { Download } from 'lucide-react';

export default function AdminAnalyticsTab({ onDownloadMasterSheet }) {
  const analyticsRows = [
    { batch: 'Batch 11', course: 'Python, AI & Agentic Workflows', instructor: 'Ali Mughal', pct: '93.5%', status: 'Excellent' },
    { batch: 'Batch 20', course: 'Modern Web App Development', instructor: 'S Muzammil Javed', pct: '88.4%', status: 'Good' },
    { batch: 'Batch 19', course: 'Full Stack MERN Architecture', instructor: 'Ishaq Bhojani', pct: '86.1%', status: 'Good' },
    { batch: 'Batch 15', course: 'Flutter & Mobile App Development', instructor: 'Ghous Ahmed', pct: '79.2%', status: 'Average' },
    { batch: 'Batch 09', course: 'Figma, UI/UX & Product Design', instructor: 'Hira Khan', pct: '91.0%', status: 'Excellent' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Institute-Wide Attendance Analytics</h3>
            <p className="text-xs text-slate-500">Real-time attendance health metrics across batches</p>
          </div>
          <button
            onClick={onDownloadMasterSheet}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Master Sheet</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <div className="text-xs font-semibold text-emerald-800">Highest Attended Cohort</div>
            <div className="text-xl font-bold text-emerald-950 mt-1">Batch 11 (Python AI)</div>
            <div className="text-xs text-emerald-700 mt-1">93.5% average attendance</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <div className="text-xs font-semibold text-emerald-800">Flagship Technology Cohort</div>
            <div className="text-xl font-bold text-emerald-950 mt-1">Batch 20 (Modern Web)</div>
            <div className="text-xs text-emerald-700 mt-1">88.4% average attendance</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
            <div className="text-xs font-semibold text-blue-800">Total Classes Conducted (Sep)</div>
            <div className="text-xl font-bold text-blue-950 mt-1">428 Sessions</div>
            <div className="text-xs text-blue-700 mt-1">Across 5 campuses</div>
          </div>
        </div>

        {/* Cohort Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold">Cohort</th>
                <th className="py-3 px-4 font-semibold">Course</th>
                <th className="py-3 px-4 font-semibold">Instructor</th>
                <th className="py-3 px-4 font-semibold text-center">Avg Attendance</th>
                <th className="py-3 px-4 font-semibold">Attendance Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {analyticsRows.map((row) => (
                <tr key={row.batch} className="hover:bg-[#fcfdfd] transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{row.batch}</td>
                  <td className="py-3.5 px-4 text-slate-800">{row.course}</td>
                  <td className="py-3.5 px-4 text-slate-600">{row.instructor}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-slate-900">{row.pct}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                        row.status === 'Excellent'
                          ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                          : 'border-blue-200 text-blue-700 bg-blue-50'
                      }`}
                    >
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
