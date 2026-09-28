import React from 'react';
import { Search, Plus } from 'lucide-react';

export default function AdminStudentsTab({
  studentsList,
  setStudentsList,
  searchStudent,
  setSearchStudent,
  batchFilter,
  setBatchFilter,
  studentStatusFilter,
  setStudentStatusFilter,
  onOpenAddStudent,
  triggerToast
}) {
  return (
    <div className="space-y-6">
      {/* Search & Filter Controls */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by student name or roll..."
              value={searchStudent}
              onChange={(e) => setSearchStudent(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
            />
          </div>

          <select
            value={batchFilter}
            onChange={(e) => setBatchFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Batches</option>
            <option value="Batch 20">Batch 20 (WMA)</option>
            <option value="Batch 19">Batch 19 (MERN)</option>
            <option value="Batch 11">Batch 11 (Python AI)</option>
            <option value="Batch 15">Batch 15 (Flutter)</option>
          </select>

          <select
            value={studentStatusFilter}
            onChange={(e) => setStudentStatusFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>

        <button
          onClick={onOpenAddStudent}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Enroll Student</span>
        </button>
      </div>

      {/* Students Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold min-w-[200px]">Student Name</th>
                <th className="py-3 px-4 font-semibold min-w-[120px]">Roll Number</th>
                <th className="py-3 px-4 font-semibold min-w-[110px]">Batch</th>
                <th className="py-3 px-4 font-semibold min-w-[180px]">Course</th>
                <th className="py-3 px-4 font-semibold min-w-[160px]">Campus</th>
                <th className="py-3 px-4 font-semibold text-center">Attendance</th>
                <th className="py-3 px-4 font-semibold">Fee Status</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {studentsList
                .filter(
                  (s) =>
                    (s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                      s.roll.includes(searchStudent)) &&
                    (batchFilter === 'All' || s.batch === batchFilter) &&
                    (studentStatusFilter === 'All' || s.status === studentStatusFilter)
                )
                .map((st) => (
                  <tr key={st.roll} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs overflow-hidden">
                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${st.name}&backgroundColor=e2e8f0`}
                            alt={st.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{st.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-600">{st.roll}</td>
                    <td className="py-4 px-4 font-semibold text-emerald-700">{st.batch}</td>
                    <td className="py-4 px-4 text-xs text-slate-600">{st.course}</td>
                    <td className="py-4 px-4 text-xs text-slate-600">{st.campus}</td>
                    <td className="py-4 px-4 text-center font-bold text-slate-900">{st.attendance}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          st.fees === 'PAID'
                            ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                            : 'border-amber-200 text-amber-700 bg-amber-50'
                        }`}
                      >
                        {st.fees}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                          st.status === 'Active'
                            ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                            : 'border-red-200 text-red-700 bg-red-50'
                        }`}
                      >
                        {st.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => {
                          setStudentsList(
                            studentsList.map((s) =>
                              s.roll === st.roll
                                ? { ...s, status: s.status === 'Active' ? 'Suspended' : 'Active' }
                                : s
                            )
                          );
                          triggerToast(`Status toggled for ${st.name}`);
                        }}
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition cursor-pointer"
                      >
                        {st.status === 'Active' ? 'Suspend' : 'Activate'}
                      </button>
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
