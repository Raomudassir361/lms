import React from 'react';
import { X } from 'lucide-react';

export default function AdminModals({
  instructors,
  addInstructorOpen,
  setAddInstructorOpen,
  newInstructor,
  setNewInstructor,
  handleAddInstructor,
  addStudentOpen,
  setAddStudentOpen,
  newStudent,
  setNewStudent,
  handleAddStudent,
  addBatchOpen,
  setAddBatchOpen,
  newBatch,
  setNewBatch,
  handleAddBatch,
  addNoticeOpen,
  setAddNoticeOpen,
  newNotice,
  setNewNotice,
  handleAddNotice
}) {
  return (
    <>
      {/* MODAL: ADD INSTRUCTOR */}
      {addInstructorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Register New Instructor</h3>
              <button
                onClick={() => setAddInstructorOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddInstructor} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sir Muhammad Hamza"
                  value={newInstructor.name}
                  onChange={(e) =>
                    setNewInstructor({ ...newInstructor, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. hamza@saylani.org"
                  value={newInstructor.email}
                  onChange={(e) =>
                    setNewInstructor({ ...newInstructor, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Department
                </label>
                <select
                  value={newInstructor.department}
                  onChange={(e) =>
                    setNewInstructor({ ...newInstructor, department: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Web & Mobile Dev">Web & Mobile Dev</option>
                  <option value="AI & Data Science">AI & Data Science</option>
                  <option value="Cloud Native">Cloud Native</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="UI/UX & Graphics">UI/UX & Graphics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Campus</label>
                <select
                  value={newInstructor.campus}
                  onChange={(e) =>
                    setNewInstructor({ ...newInstructor, campus: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Zaitoon Ashraf IT Park">Zaitoon Ashraf IT Park</option>
                  <option value="Gulshan Campus">Gulshan Campus</option>
                  <option value="Numish Campus">Numish Campus</option>
                  <option value="Bahadurabad Head Office">Bahadurabad Head Office</option>
                  <option value="Latifabad Center, Hyderabad">Latifabad Center, Hyderabad</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setAddInstructorOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer"
                >
                  Register Instructor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD STUDENT */}
      {addStudentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Enroll New Student</h3>
              <button
                onClick={() => setAddStudentOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Zeeshan"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Roll Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 774161"
                  value={newStudent.roll}
                  onChange={(e) => setNewStudent({ ...newStudent, roll: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Assigned Batch
                </label>
                <select
                  value={newStudent.batch}
                  onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Batch 20">Batch 20 (Modern Web App Dev)</option>
                  <option value="Batch 19">Batch 19 (Full Stack MERN)</option>
                  <option value="Batch 11">Batch 11 (Python AI)</option>
                  <option value="Batch 15">Batch 15 (Flutter Mobile)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Campus</label>
                <select
                  value={newStudent.campus}
                  onChange={(e) => setNewStudent({ ...newStudent, campus: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Zaitoon Ashraf IT Park">Zaitoon Ashraf IT Park</option>
                  <option value="Gulshan Campus">Gulshan Campus</option>
                  <option value="Numish Campus">Numish Campus</option>
                  <option value="Bahadurabad Head Office">Bahadurabad Head Office</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setAddStudentOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer"
                >
                  Enroll Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD BATCH */}
      {addBatchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Create New Cohort / Batch</h3>
              <button
                onClick={() => setAddBatchOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddBatch} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Course Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next.js & Generative AI"
                  value={newBatch.title}
                  onChange={(e) => setNewBatch({ ...newBatch, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Batch Identifier *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Batch 21"
                  value={newBatch.batchNo}
                  onChange={(e) => setNewBatch({ ...newBatch, batchNo: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Assigned Lead Instructor
                </label>
                <select
                  value={newBatch.instructor}
                  onChange={(e) => setNewBatch({ ...newBatch, instructor: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  {instructors.map((ins) => (
                    <option key={ins.id} value={ins.name}>
                      {ins.name} ({ins.department})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Campus</label>
                <select
                  value={newBatch.campus}
                  onChange={(e) => setNewBatch({ ...newBatch, campus: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Zaitoon Ashraf IT Park">Zaitoon Ashraf IT Park</option>
                  <option value="Gulshan Campus">Gulshan Campus</option>
                  <option value="Numish Campus">Numish Campus</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setAddBatchOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer"
                >
                  Launch Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD NOTICE */}
      {addNoticeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Post Announcement Bulletin</h3>
              <button
                onClick={() => setAddNoticeOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNotice} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Headline / Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule Update for Sunday Classes"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Audience
                </label>
                <select
                  value={newNotice.audience}
                  onChange={(e) => setNewNotice({ ...newNotice, audience: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="All (Students & Teachers)">All (Students & Teachers)</option>
                  <option value="Students Only">Students Only</option>
                  <option value="Teachers Only">Teachers Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                <select
                  value={newNotice.category}
                  onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs cursor-pointer"
                >
                  <option value="Notice">General Notice</option>
                  <option value="Event">Event / Hackathon</option>
                  <option value="Exam">Exam / Assessment</option>
                  <option value="Holiday">Official Holiday</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Detailed Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write announcement details..."
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setAddNoticeOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer"
                >
                  Publish Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
