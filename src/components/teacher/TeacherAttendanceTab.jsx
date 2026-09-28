import React from 'react';
import {
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Plus
} from 'lucide-react';

export default function TeacherAttendanceTab({
  students,
  selectedDate,
  presentCount,
  absentCount,
  leaveCount,
  attendanceSearch,
  setAttendanceSearch,
  attendancePageSize,
  setAttendancePageSize,
  attendancePage,
  setAttendancePage,
  markAll,
  cycleAttendance,
  onOpenAddStudent
}) {
  const filtered = students.filter(
    (st) =>
      st.name.toLowerCase().includes(attendanceSearch.toLowerCase()) ||
      st.roll.includes(attendanceSearch)
  );
  const pageSize = attendancePageSize === 'All' ? filtered.length || 1 : attendancePageSize;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(attendancePage, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const displayedStudents =
    attendancePageSize === 'All' ? filtered : filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Date Picker top right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-500 font-medium">
          Mark attendance for current class session
        </div>
        <div className="flex flex-col sm:items-end">
          <span className="text-xs text-slate-500 font-semibold mb-1">Select a Date</span>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-[#e2e8f0] rounded-lg bg-white text-xs font-semibold text-slate-800 shadow-2xs">
            <span>{selectedDate}</span>
          </div>
        </div>
      </div>

      {/* 4 Attendance Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
          <div>
            <div className="text-2xl font-bold text-slate-900">{students.length}</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Total Students</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-200">
            <Calendar className="w-4 h-4" />
          </div>
        </div>

        {/* Present */}
        <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
          <div>
            <div className="text-2xl font-bold text-slate-900">{presentCount}</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Present</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-200">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        {/* Absent */}
        <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
          <div>
            <div className="text-2xl font-bold text-slate-900">{absentCount}</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Absent</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center border border-red-200">
            <XCircle className="w-4 h-4" />
          </div>
        </div>

        {/* Leave */}
        <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
          <div>
            <div className="text-2xl font-bold text-slate-900">{leaveCount}</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Leave</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
            <Clock className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Search, Rows selector and Quick actions for teacher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs pt-1">
        <div className="flex items-center gap-2 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search student by name or roll #..."
              value={attendanceSearch}
              onChange={(e) => {
                setAttendanceSearch(e.target.value);
                setAttendancePage(1);
              }}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-blue-500 text-slate-800"
            />
          </div>
          {attendanceSearch && (
            <button
              onClick={() => setAttendanceSearch('')}
              className="text-slate-400 hover:text-slate-600 text-xs px-1 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center flex-wrap gap-2 justify-end">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Rows:</span>
            <select
              value={attendancePageSize}
              onChange={(e) => {
                const val = e.target.value === 'All' ? 'All' : Number(e.target.value);
                setAttendancePageSize(val);
                setAttendancePage(1);
              }}
              className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium focus:outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value="All">All ({students.length})</option>
            </select>
          </div>

          <button
            onClick={() => markAll('PRESENT')}
            className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-medium transition cursor-pointer"
          >
            Mark All Present
          </button>
          <button
            onClick={() => markAll('NOT MARKED')}
            className="px-2.5 py-1 rounded bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 font-medium transition cursor-pointer"
          >
            Reset Status
          </button>
          <button
            onClick={onOpenAddStudent}
            className="px-2.5 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 font-medium transition flex items-center gap-1 shadow-2xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Student
          </button>
        </div>
      </div>

      {/* Attendance Marking Table */}
      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
              <th className="py-3 px-4 min-w-[70px]">#</th>
              <th className="py-3 px-4 min-w-[130px]">Roll #</th>
              <th className="py-3 px-4 min-w-[240px]">Full Name</th>
              <th className="py-3 px-4 min-w-[140px]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f7]">
            {displayedStudents.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-slate-400">
                  No students found matching "{attendanceSearch}"
                </td>
              </tr>
            ) : (
              displayedStudents.map((st, idx) => (
                <tr key={st.roll} className="hover:bg-[#fcfdfd] transition">
                  <td className="py-3.5 px-4 font-normal text-slate-400 text-xs">
                    {startIndex + idx + 1}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600 font-medium">{st.roll}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-900">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-[10px]">
                        {st.name.charAt(0)}
                      </div>
                      <span>{st.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => cycleAttendance(st.roll)}
                      title="Click to cycle status (Present / Absent / Leave / Not Marked)"
                      className={`px-3 py-1 rounded text-xs font-semibold tracking-wide border transition cursor-pointer ${
                        st.attendance === 'NOT MARKED'
                          ? 'bg-[#f8fafc] text-slate-600 border-[#e2e8f0] hover:bg-slate-100'
                          : st.attendance === 'PRESENT'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : st.attendance === 'ABSENT'
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {st.attendance}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Attendance Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
        <span>
          Showing {filtered.length === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + displayedStudents.length, filtered.length)} of {filtered.length} students
          {filtered.length !== students.length && ` (filtered from ${students.length})`}
        </span>
        {attendancePageSize !== 'All' && totalPages > 1 && (
          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage === 1}
              onClick={() => setAttendancePage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded text-slate-500 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-500 transition cursor-pointer"
            >
              &lt; Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
              if (
                pg === 1 ||
                pg === totalPages ||
                (pg >= currentPage - 1 && pg <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pg}
                    onClick={() => setAttendancePage(pg)}
                    className={`w-7 h-7 rounded font-medium transition cursor-pointer ${
                      currentPage === pg
                        ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {pg}
                  </button>
                );
              } else if (pg === currentPage - 2 || pg === currentPage + 2) {
                return (
                  <span key={pg} className="text-slate-400 px-1">
                    ...
                  </span>
                );
              }
              return null;
            })}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setAttendancePage((p) => Math.min(totalPages, p + 1))}
              className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-600 transition cursor-pointer"
            >
              Next &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
