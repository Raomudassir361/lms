import React from 'react';
import { Search, Plus } from 'lucide-react';

export default function AdminInstructorsTab({
  instructors,
  setInstructors,
  searchInstructor,
  setSearchInstructor,
  deptFilter,
  setDeptFilter,
  onOpenAddInstructor,
  triggerToast
}) {
  return (
    <div className="space-y-6">
      {/* Search & Actions Bar */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search instructor by name..."
              value={searchInstructor}
              onChange={(e) => setSearchInstructor(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
            />
          </div>

          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600 cursor-pointer"
          >
            <option value="All">All Departments</option>
            <option value="Web & Mobile Dev">Web & Mobile Dev</option>
            <option value="AI & Data Science">AI & Data Science</option>
            <option value="Cloud Native">Cloud Native</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="UI/UX & Graphics">UI/UX & Graphics</option>
          </select>
        </div>

        <button
          onClick={onOpenAddInstructor}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Instructor</span>
        </button>
      </div>

      {/* Instructors Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold min-w-[200px]">Instructor Name</th>
                <th className="py-3 px-4 font-semibold min-w-[150px]">Department</th>
                <th className="py-3 px-4 font-semibold min-w-[180px]">Course Spec</th>
                <th className="py-3 px-4 font-semibold min-w-[160px]">Assigned Batches</th>
                <th className="py-3 px-4 font-semibold min-w-[160px]">Campus</th>
                <th className="py-3 px-4 font-semibold text-center">Students</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {instructors
                .filter(
                  (ins) =>
                    ins.name.toLowerCase().includes(searchInstructor.toLowerCase()) &&
                    (deptFilter === 'All' || ins.department === deptFilter)
                )
                .map((ins) => (
                  <tr key={ins.id} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                          {ins.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{ins.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{ins.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-800">{ins.department}</td>
                    <td className="py-4 px-4 text-slate-600 text-xs">{ins.course}</td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {ins.batches.map((b) => (
                          <span
                            key={b}
                            className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600">{ins.campus}</td>
                    <td className="py-4 px-4 text-center font-bold text-slate-900">{ins.studentsCount}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                          ins.status === 'Active'
                            ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                            : 'border-amber-200 text-amber-700 bg-amber-50'
                        }`}
                      >
                        {ins.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => {
                          setInstructors(
                            instructors.map((i) =>
                              i.id === ins.id
                                ? { ...i, status: i.status === 'Active' ? 'On Leave' : 'Active' }
                                : i
                            )
                          );
                          triggerToast(`Status changed for ${ins.name}`);
                        }}
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition cursor-pointer"
                      >
                        Toggle Status
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
