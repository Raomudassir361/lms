import React from 'react';
import { Search, ChevronDown, Eye } from 'lucide-react';

export default function TeacherStudentsTab({
  students,
  searchStudent,
  setSearchStudent,
  studentFilter,
  setStudentFilter,
  studentPage,
  setStudentPage
}) {
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
      s.roll.includes(searchStudent) ||
      s.email.toLowerCase().includes(searchStudent.toLowerCase())
  );
  const totalStudentPages = Math.max(1, Math.ceil(filtered.length / 10));
  const currentStPage = Math.min(studentPage, totalStudentPages);
  const startStIndex = (currentStPage - 1) * 10;
  const displayedStudents = filtered.slice(startStIndex, startStIndex + 10);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Search & Filter Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pb-1">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchStudent}
            onChange={(e) => {
              setSearchStudent(e.target.value);
              setStudentPage(1);
            }}
            placeholder="Search by name, email or roll no..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-[#e2e8f0] rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <button className="flex items-center justify-between gap-3 px-3 py-2 bg-white border border-[#e2e8f0] rounded-lg text-xs sm:text-sm text-slate-700 hover:bg-slate-50 min-w-[90px] cursor-pointer">
            <span>{studentFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
              <th className="py-3 px-4 min-w-[200px]">Name</th>
              <th className="py-3 px-4 min-w-[130px]">Roll Number</th>
              <th className="py-3 px-4 min-w-[220px]">Email</th>
              <th className="py-3 px-4 min-w-[110px]">Status</th>
              <th className="py-3 px-4 min-w-[80px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f7]">
            {displayedStudents.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-slate-400">
                  No students found matching "{searchStudent}"
                </td>
              </tr>
            ) : (
              displayedStudents.map((st) => (
                <tr key={st.roll} className="hover:bg-[#fcfdfd] transition">
                  <td className="py-3.5 px-4 font-medium text-slate-900">
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
                  <td className="py-3.5 px-4 text-slate-600 font-mono">{st.roll}</td>
                  <td className="py-3.5 px-4 text-slate-600">{st.email}</td>
                  <td className="py-3.5 px-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#eaf4fe] text-[#0284c7]">
                      {st.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <button className="text-slate-400 hover:text-slate-700 transition cursor-pointer" title="View Student">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
        <span>
          Showing {filtered.length === 0 ? 0 : startStIndex + 1}-{Math.min(startStIndex + 10, filtered.length)} of {filtered.length} records
        </span>
        {totalStudentPages > 1 && (
          <div className="flex items-center gap-1.5">
            <button
              disabled={currentStPage === 1}
              onClick={() => setStudentPage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded text-slate-500 hover:text-slate-900 disabled:opacity-40 transition cursor-pointer"
            >
              &lt; Previous
            </button>
            {Array.from({ length: totalStudentPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                onClick={() => setStudentPage(pg)}
                className={`w-7 h-7 rounded font-medium transition cursor-pointer ${
                  currentStPage === pg
                    ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {pg}
              </button>
            ))}
            <button
              disabled={currentStPage === totalStudentPages}
              onClick={() => setStudentPage((p) => Math.min(totalStudentPages, p + 1))}
              className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 transition cursor-pointer"
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
