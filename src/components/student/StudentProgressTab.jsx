import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function StudentProgressTab() {
  const [expandedModules, setExpandedModules] = useState({
    'Front-End Development': true,
  });

  const toggleModule = (name) => {
    setExpandedModules((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="space-y-6">
      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">81</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Total Topics</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">56</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Completed Topics
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
            <GraduationCap className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
          <div>
            <div className="text-3xl font-bold text-slate-900">25</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Pending Topics</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Modules Accordion List */}
      <div className="space-y-4">
        {/* Module 1: Web Designing */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Web Designing</h4>
                <span className="text-xs text-blue-600 underline cursor-pointer">
                  Topics: 20/20
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                100%
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Module 2: Front-End Development (Expanded) */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleModule('Front-End Development')}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Front-End Development</h4>
                <span className="text-xs text-slate-500">Topics: 26/31</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                84%
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  expandedModules['Front-End Development'] ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>

          {/* Sub-topics list */}
          {expandedModules['Front-End Development'] && (
            <div className="pt-4 border-t border-[#edf0f5] space-y-3">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Topics in Front-End Development:
              </h5>

              {/* Topic item 1 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      JavaScript Introduction
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Completed: Feb 22, 2026
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-100 ml-6 text-xs text-blue-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span className="font-medium">JavaScript Assignment – 25 Questions</span>
                </div>
              </div>

              {/* Topic item 2 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      JavaScript Chapter 1 – 10
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Completed: Mar 3, 2026
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50/80 p-3 rounded-lg border border-blue-100 ml-6 text-xs text-blue-700 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="font-medium">JavaScript Assignment – 25 Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="font-medium">Budgetting App</span>
                  </div>
                </div>
              </div>

              {/* Topic item 3 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      JavaScript Chapter 11 – 20
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Completed: Apr 6, 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Module 3: Modern Front-End Development */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Modern Front-End Development
                </h4>
                <span className="text-xs text-slate-500">Topics: 10/14</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-blue-600 bg-blue-50/50">
                71%
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Module 4: Back-End Development */}
        <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Back-End Development</h4>
                <span className="text-xs text-slate-500">Topics: 0/16</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-400 mr-2">0%</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
