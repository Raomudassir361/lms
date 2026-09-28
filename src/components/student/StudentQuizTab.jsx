import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function StudentQuizTab() {
  const quizzes = [
    {
      title: 'Javascript (Quiz-4)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      percent: '88%',
      status: 'PASSED',
    },
    {
      title: 'Javascript (Quiz-3)',
      module: 'Modern Front-End Development',
      questions: 40, 
      attempts: '1 / 3',
      percent: '65%',
      status: 'FAILED',
    },
    {
      title: 'Javascript (Quiz-2)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      percent: '75%',
      status: 'PASSED',
    },
    {
      title: 'Javascript (Quiz-1)',
      module: 'Modern Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      percent: '90%',
      status: 'PASSED',
    },
    {
      title: 'CSS Quiz',
      module: 'Front-End Development',
      questions: 40,
      attempts: '1 / 3',
      percent: '75%',
      status: 'PASSED',
    },
    {
      title: 'HTML Quiz',
      module: 'Web Designing',
      questions: 40,
      attempts: '1 / 3',
      percent: '83%',
      status: 'PASSED',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Important Information Banner */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-800">
        <div className="flex items-center gap-2 text-base font-bold text-amber-900 mb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h4 className="font-bold">Important Quiz Information</h4>
        </div>
        <ul className="list-disc list-inside space-y-1 text-amber-900/90 ml-1">
          <li>Once started, quizzes must be completed in one session.</li>
          <li>Switching tabs or leaving the window will be recorded.</li>
          <li>Ensure you have a stable internet connection before beginning.</li>
          <li>The quiz will open in fullscreen mode.</li>
        </ul>
      </div>

      {/* Quizzes Table */}
      <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                <th className="py-3 px-4 font-semibold min-w-[160px]">Title</th>
                <th className="py-3 px-4 font-semibold min-w-[200px]">Module</th>
                <th className="py-3 px-4 font-semibold text-center">Questions</th>
                <th className="py-3 px-4 font-semibold text-center">Attempts</th>
                <th className="py-3 px-4 font-semibold text-center">Percentage</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Note</th>
                <th className="py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f3f7]">
              {quizzes.map((quiz, idx) => (
                <tr key={idx} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                  <td className="py-4 px-4 font-semibold text-slate-900">{quiz.title}</td>
                  <td className="py-4 px-4 text-slate-600">{quiz.module}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                      {quiz.questions}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                      {quiz.attempts}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-slate-900">
                    {quiz.percent}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                        quiz.status === 'PASSED'
                          ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                          : 'border-red-200 text-red-700 bg-red-50'
                      }`}
                    >
                      {quiz.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">—</td>
                  <td className="py-4 px-4">
                    <button
                      disabled
                      className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-semibold cursor-not-allowed"
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center text-xs text-slate-500 mt-6 pt-4 border-t border-[#edf0f5]">
          Contact your instructor if you have any issues accessing your quizzes.
        </div>
      </div>
    </div>
  );
}
