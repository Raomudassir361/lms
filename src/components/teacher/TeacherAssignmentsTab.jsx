import React from 'react';
import { Eye, Edit2 } from 'lucide-react';

export default function TeacherAssignmentsTab({
  assignments,
  assignmentPage,
  setAssignmentPage
}) {
  const displayedAssignments =
    assignmentPage === 1 ? assignments.slice(0, 10) : assignments.slice(10, 20);

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
              <th className="py-3 px-4 min-w-[170px]">Title</th>
              <th className="py-3 px-4 min-w-[280px]">Description</th>
              <th className="py-3 px-4 min-w-[200px]">Topics</th>
              <th className="py-3 px-4 min-w-[120px]">Due Date</th>
              <th className="py-3 px-4 min-w-[90px] text-right sm:text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f7]">
            {displayedAssignments.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-[#fcfdfd] transition ${
                  row.isHackathon ? 'bg-[#faf7fd]' : ''
                }`}
              >
                {/* Title Column */}
                <td className="py-3.5 px-4 font-normal text-slate-800 align-top">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-slate-900" title={row.fullTitle}>
                      {row.title}
                    </span>
                    {row.isHackathon && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f3e8ff] text-[#7e22ce] uppercase tracking-wide">
                        HACKATHON
                      </span>
                    )}
                  </div>
                </td>

                {/* Description Column */}
                <td className="py-3.5 px-4 text-slate-600 align-top max-w-[340px] leading-relaxed">
                  {row.description}
                </td>

                {/* Topics Column */}
                <td className="py-3.5 px-4 align-top">
                  {row.topics.length === 0 ? (
                    <span className="text-slate-400 text-xs">No topics</span>
                  ) : (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {row.topics.map((top, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#eaf4fe] text-[#0284c7] text-[11px] font-medium"
                        >
                          {top}
                        </span>
                      ))}
                      {row.topicCount && (
                        <span className="text-[11px] font-medium text-blue-500">
                          {row.topicCount}
                        </span>
                      )}
                    </div>
                  )}
                </td>

                {/* Due Date Column */}
                <td className="py-3.5 px-4 text-slate-600 align-top whitespace-nowrap">
                  {row.dueDate}
                </td>

                {/* Actions Column */}
                <td className="py-3.5 px-4 align-top">
                  <div className="flex items-center gap-3 text-slate-400">
                    <button
                      className="hover:text-slate-700 transition cursor-pointer"
                      title="View Submissions"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="hover:text-slate-700 transition cursor-pointer"
                      title="Edit Assignment"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Showing records) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
        <span>
          Showing {assignmentPage === 1 ? '1-10' : '11-13'} of {assignments.length} records
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAssignmentPage(1)}
            disabled={assignmentPage === 1}
            className="px-2.5 py-1 rounded text-slate-500 hover:text-slate-800 disabled:opacity-40 transition cursor-pointer"
          >
            &lt; Previous
          </button>
          <button
            onClick={() => setAssignmentPage(1)}
            className={`w-7 h-7 rounded flex items-center justify-center font-medium cursor-pointer ${
              assignmentPage === 1
                ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setAssignmentPage(2)}
            className={`w-7 h-7 rounded flex items-center justify-center font-medium cursor-pointer ${
              assignmentPage === 2
                ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            2
          </button>
          <button
            onClick={() => setAssignmentPage(2)}
            disabled={assignmentPage === 2}
            className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 transition cursor-pointer"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
