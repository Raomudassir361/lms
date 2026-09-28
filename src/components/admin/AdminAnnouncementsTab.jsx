import React from 'react';
import { Plus, Calendar, Trash2 } from 'lucide-react';

export default function AdminAnnouncementsTab({
  announcements,
  onOpenAddNotice,
  onDeleteNotice
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Official Notice Board & Bulletins</h3>
          <p className="text-xs text-slate-500">Publish alerts to Student and Teacher portals in real time</p>
        </div>
        <button
          onClick={onOpenAddNotice}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Notice</span>
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
              </div>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.content}</p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
              <div>
                Audience: <b className="text-slate-800">{item.audience}</b> • Posted by:{' '}
                <span className="text-emerald-600 font-medium">{item.author}</span>
              </div>
              <button
                onClick={() => onDeleteNotice(item.id)}
                className="text-slate-400 hover:text-red-600 transition cursor-pointer"
                title="Delete notice"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
