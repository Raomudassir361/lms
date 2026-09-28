import React from 'react';
import {
  FileText,
  Edit2,
  Clock,
  Eye,
  Upload
} from 'lucide-react';

export default function StudentAssignmentTab() {
  const assignments = [
    {
      name: 'Admin panel (E commerce Dashboad)',
      topics: '7 Topics',
      due: 'September 10, 2026',
      status: 'APPROVED',
      statusColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      isHackathon: false,
      closed: false,
    },
    {
      name: 'QUICKSERVE WMA (Batch-20)',
      topics: 'No topics',
      due: 'August 30, 2026',
      status: 'NOT SUBMITTED',
      statusColor: 'border-slate-200 text-slate-600 bg-slate-100',
      isHackathon: true,
      closed: true,
    },
    {
      name: 'E-Commerce Website (React js)',
      topics: '4 Topics',
      due: 'August 17, 2026',
      status: 'APPROVED',
      statusColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      isHackathon: false,
      closed: false,
    },
    {
      name: 'Furniture E-Commerce Website',
      topics: '5 Topics',
      due: 'August 10, 2026',
      status: 'LATE SUBMITTED',
      statusColor: 'border-amber-200 text-amber-700 bg-amber-50',
      isHackathon: false,
      closed: false,
    },
    {
      name: 'MaintainIQ (Batch-20)',
      topics: 'No topics',
      due: 'July 12, 2026',
      status: 'SUBMITTED',
      statusColor: 'border-blue-200 text-blue-700 bg-blue-50',
      isHackathon: true,
      closed: true,
    },
    {
      name: 'JavaScript Assignment – 25 Questions',
      topics: '8 Topics',
      due: 'July 10, 2026',
      status: 'SUBMITTED',
      statusColor: 'border-blue-200 text-blue-700 bg-blue-50',
      isHackathon: false,
      closed: false,
    },
    {
      name: 'Budgetting App',
      topics: '12 Topics',
      due: 'June 1, 2026',
      status: 'APPROVED',
      statusColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      isHackathon: false,
      closed: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">16</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Assigned</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <FileText className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">14</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Submitted</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Edit2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">2</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Pending</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Assignments Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold min-w-[220px]">Assignment</th>
                <th className="py-3 px-4 font-semibold min-w-[100px]">Topics</th>
                <th className="py-3 px-4 font-semibold min-w-[140px]">Due Date</th>
                <th className="py-3 px-4 font-semibold min-w-[130px]">Status</th>
                <th className="py-3 px-4 font-semibold min-w-[140px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {assignments.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-[#fcfdfd] transition ${
                    row.isHackathon ? 'bg-purple-50/20' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-semibold text-slate-900 flex items-center gap-2">
                    <span>{row.name}</span>
                    {row.isHackathon && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                        HACKATHON
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-xs">
                    {row.topics === 'No topics' ? (
                      <span className="text-slate-400">No topics</span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                        {row.topics}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-slate-600">{row.due}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${row.statusColor}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {row.closed ? (
                      <div className="flex items-center gap-2">
                        <button className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer">
                          <Eye className="w-4 h-4" />
                        </button>
                        <span className="text-xs italic text-red-500 font-medium">
                          Submissions closed
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-slate-400">
                        <button className="hover:text-blue-600 transition cursor-pointer" title="View details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-600 transition cursor-pointer" title="Upload files">
                          <Upload className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-600 transition cursor-pointer" title="Edit submission">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
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
