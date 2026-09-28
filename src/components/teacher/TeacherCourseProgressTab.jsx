import React, { useState } from 'react';
import { Check, CheckCircle2, Clock, ChevronDown } from 'lucide-react';

export default function TeacherCourseProgressTab() {
  const [onlyMyProgress, setOnlyMyProgress] = useState(true);
  const [expandedModule, setExpandedModule] = useState({ 'Front-End Development': true });

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl">
      {/* Compare Progress Card */}
      <div className="bg-white border border-[#edf0f5] rounded-xl p-5 shadow-2xs">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
          COMPARE PROGRESS
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-4">
          Course Progress Overview
        </h3>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOnlyMyProgress(!onlyMyProgress)}
            className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 font-medium py-1 px-2 rounded-md hover:bg-slate-50 transition cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center ${
                onlyMyProgress ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
              }`}
            >
              {onlyMyProgress && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            <span>Only My Progress</span>
          </button>
        </div>
      </div>

      {/* MY PROGRESS Card */}
      <div className="bg-white border border-[#edf0f5] rounded-xl p-6 shadow-2xs space-y-5">
        {/* Instructor and Batch header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
              MY PROGRESS
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base font-bold text-slate-900">
                S Muzammil Javed - Zaitoon Ashraf IT Park
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                Batch 20
              </span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Mon 01:00 PM - 03:00 PM | Wed 01:00 PM - 03:00 PM | Fri 01:00 PM - 03:00 PM
            </div>
          </div>

          <div className="self-start sm:self-auto">
            <span className="px-3 py-1 rounded-md bg-[#eaf4fe] text-blue-600 text-xs font-semibold">
              Topics: 56/81
            </span>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
            <span>Overall progress</span>
            <span className="font-bold text-slate-900">69%</span>
          </div>
          <div className="h-2 w-full bg-[#f1f3f7] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2563eb] rounded-full transition-all duration-700"
              style={{ width: '69%' }}
            />
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-3 pt-3">
          {/* 1. Web Designing */}
          <div className="border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between hover:bg-[#fafbfd] transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Web Designing</div>
                <div className="text-xs text-slate-400">Topics: 20/20</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-[11px] font-bold text-blue-600">
                100%
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* 2. Front-End Development */}
          <div className="border border-[#edf0f5] rounded-xl p-4 space-y-3">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() =>
                setExpandedModule((prev) => ({
                  ...prev,
                  'Front-End Development': !prev['Front-End Development'],
                }))
              }
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Front-End Development
                  </div>
                  <div className="text-xs text-slate-400">Topics: 26/31</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-[11px] font-bold text-blue-600">
                  84%
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    expandedModule['Front-End Development'] ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>

            {/* Sub-topics breakdown if expanded */}
            {expandedModule['Front-End Development'] && (
              <div className="pl-11 pr-2 pt-2 space-y-2 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between text-slate-600 py-1">
                  <span>• HTML5 Semantics & Forms</span>
                  <span className="text-emerald-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 py-1">
                  <span>• CSS3 Flexbox & Grid Systems</span>
                  <span className="text-emerald-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 py-1">
                  <span>• JavaScript ES6+, DOM & Async</span>
                  <span className="text-emerald-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 py-1">
                  <span>• React Hooks & State Architecture</span>
                  <span className="text-amber-500 font-semibold">In Progress (5 topics left)</span>
                </div>
              </div>
            )}
          </div>

          {/* 3. Modern Front-End Development */}
          <div className="border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between hover:bg-[#fafbfd] transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Modern Front-End Development
                </div>
                <div className="text-xs text-slate-400">Topics: 10/14</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-[11px] font-bold text-blue-600">
                71%
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* 4. Back-End Development */}
          <div className="border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between hover:bg-[#fafbfd] transition">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Back-End Development
                </div>
                <div className="text-xs text-slate-400">Topics: 0/16</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-400 pr-2">0</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
