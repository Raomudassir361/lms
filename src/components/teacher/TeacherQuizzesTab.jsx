import React from 'react';
import { Eye, Copy, PieChart } from 'lucide-react';

export default function TeacherQuizzesTab({ quizzes }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
              <th className="py-3 px-4 min-w-[150px]">Quiz</th>
              <th className="py-3 px-4 min-w-[320px]">Course(s)</th>
              <th className="py-3 px-4 min-w-[110px]">Date</th>
              <th className="py-3 px-4 min-w-[110px]">Expiry</th>
              <th className="py-3 px-4 min-w-[90px]">Status</th>
              <th className="py-3 px-4 min-w-[90px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f3f7]">
            {quizzes.map((quiz, idx) => (
              <tr key={idx} className="hover:bg-[#fcfdfd] transition">
                <td className="py-3.5 px-4 font-medium text-slate-900 align-top">
                  {quiz.title}
                </td>
                <td className="py-3.5 px-4 text-slate-600 align-top leading-relaxed text-xs">
                  {quiz.courses}
                </td>
                <td className="py-3.5 px-4 text-slate-600 align-top whitespace-nowrap text-xs">
                  {quiz.date}
                </td>
                <td className="py-3.5 px-4 text-slate-600 align-top whitespace-nowrap text-xs">
                  {quiz.expiry}
                </td>
                <td className="py-3.5 px-4 align-top">
                  <span className="text-[11px] font-bold text-emerald-600 tracking-wide">
                    {quiz.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 align-top">
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <button className="hover:text-slate-700 cursor-pointer" title="View Quiz Details">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-slate-700 cursor-pointer" title="Copy / Duplicate">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button className="hover:text-slate-700 cursor-pointer" title="View Quiz Stats / Pie">
                      <PieChart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
