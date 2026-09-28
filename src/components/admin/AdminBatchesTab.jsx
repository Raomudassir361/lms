import React from 'react';
import { Plus, GraduationCap, Building, Clock } from 'lucide-react';

export default function AdminBatchesTab({
  batches,
  onOpenAddBatch,
  onViewBatchStudents
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Institute Batch Management</h3>
          <p className="text-xs text-slate-500">Configure schedules, assigned teachers, and capacities</p>
        </div>
        <button
          onClick={onOpenAddBatch}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Batch</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {batch.batchNo}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                    batch.status === 'Completed'
                      ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                      : 'border-blue-200 text-blue-700 bg-blue-50'
                  }`}
                >
                  {batch.status}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">{batch.title}</h4>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  Instructor: <b className="text-slate-700">{batch.instructor}</b>
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{batch.campus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{batch.timing}</span>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500">Syllabus Progress</span>
                  <span className="text-slate-900 font-bold">{batch.completion}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${batch.completion}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">
                Enrolled: <b className="text-slate-900">{batch.enrolled}</b> / {batch.capacity}
              </span>
              <button
                onClick={() => onViewBatchStudents(batch.batchNo)}
                className="text-emerald-600 hover:text-emerald-800 font-semibold cursor-pointer"
              >
                View Students &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
