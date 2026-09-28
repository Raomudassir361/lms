import React, { useState } from 'react';
import StudentTopBanner from './student/StudentTopBanner';
import StudentSidebar from './student/StudentSidebar';
import StudentHeader from './student/StudentHeader';
import StudentDashboardTab from './student/StudentDashboardTab';
import StudentAttendanceTab from './student/StudentAttendanceTab';
import StudentAssignmentTab from './student/StudentAssignmentTab';
import StudentQuizTab from './student/StudentQuizTab';
import StudentProgressTab from './student/StudentProgressTab';
import StudentFeedbackModal from './student/StudentFeedbackModal';

export default function StudentPortal({ onBack, onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 font-sans flex flex-col antialiased">
      {/* Top Banner with easy portal switcher */}
      <StudentTopBanner
        onBack={onBack}
        onSwitchPortal={onSwitchPortal}
      />

      <div className="flex grow relative">
        {/* Modular Left Sidebar - Open/Close toggle like Admin */}
        <StudentSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Modular Main Content Area */}
        <div className="grow flex flex-col min-w-0">
          {/* Header Bar */}
          <StudentHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            onOpenFeedback={() => setFeedbackOpen(true)}
          />

          {/* Dynamic Tab Views (Without Payment) */}
          <main className="p-3.5 sm:p-6 lg:p-8 grow space-y-6 max-w-7xl w-full mx-auto">
            {activeTab === 'Dashboard' && <StudentDashboardTab />}
            {activeTab === 'Progress' && <StudentProgressTab />}
            {activeTab === 'Attendance' && <StudentAttendanceTab />}
            {activeTab === 'Assignment' && <StudentAssignmentTab />}
            {activeTab === 'Quiz' && <StudentQuizTab />}
          </main>
        </div>
      </div>

      {/* Modular Feedback Modal */}
      <StudentFeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </div>
  );
}
