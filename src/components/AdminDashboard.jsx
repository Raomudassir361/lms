import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AdminTopBanner from './admin/AdminTopBanner';
import AdminSidebar from './admin/AdminSidebar';
import AdminHeader from './admin/AdminHeader';
import AdminOverviewTab from './admin/AdminOverviewTab';
import AdminInstructorsTab from './admin/AdminInstructorsTab';
import AdminStudentsTab from './admin/AdminStudentsTab';
import AdminBatchesTab from './admin/AdminBatchesTab';
import AdminAnalyticsTab from './admin/AdminAnalyticsTab';
import AdminAnnouncementsTab from './admin/AdminAnnouncementsTab';
import AdminModals from './admin/AdminModals';

export default function AdminDashboard({ onBack, onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search & Filter States
  const [searchInstructor, setSearchInstructor] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [searchStudent, setSearchStudent] = useState('');
  const [batchFilter, setBatchFilter] = useState('All');
  const [studentStatusFilter, setStudentStatusFilter] = useState('All');

  // Modals
  const [addInstructorOpen, setAddInstructorOpen] = useState(false);
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [addBatchOpen, setAddBatchOpen] = useState(false);
  const [addNoticeOpen, setAddNoticeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // 1. INSTRUCTORS DATA
  const [instructors, setInstructors] = useState([
    {
      id: 'INS-101',
      name: 'S Muzammil Javed',
      email: 'muzammil.javed@saylani.org',
      phone: '+92 300 1234567',
      department: 'Web & Mobile Dev',
      course: 'Modern Web App Development',
      batches: ['Batch 20', 'Batch 17'],
      campus: 'Zaitoon Ashraf IT Park',
      studentsCount: 114,
      status: 'Active',
      joinDate: 'Jan 2023',
    },
    {
      id: 'INS-102',
      name: 'Ali Mughal',
      email: 'ali.mughal@saylani.org',
      phone: '+92 301 2345678',
      department: 'AI & Data Science',
      course: 'Python, AI & Agentic Workflows',
      batches: ['Batch 11', 'Batch 12'],
      campus: 'Gulshan Campus',
      studentsCount: 95,
      status: 'Active',
      joinDate: 'Mar 2022',
    },
    {
      id: 'INS-103',
      name: 'Inzamam Malik',
      email: 'inzamam.malik@saylani.org',
      phone: '+92 302 3456789',
      department: 'Cloud Native',
      course: 'Docker, K8s & Cloud Architecture',
      batches: ['Batch 08'],
      campus: 'Bahadurabad Head Office',
      studentsCount: 45,
      status: 'Active',
      joinDate: 'Aug 2021',
    },
    {
      id: 'INS-104',
      name: 'Ghous Ahmed',
      email: 'ghous.ahmed@saylani.org',
      phone: '+92 303 4567890',
      department: 'Mobile Development',
      course: 'Flutter & React Native',
      batches: ['Batch 15', 'Batch 16'],
      campus: 'Numish Campus',
      studentsCount: 88,
      status: 'Active',
      joinDate: 'Nov 2022',
    },
    {
      id: 'INS-105',
      name: 'Hira Khan',
      email: 'hira.khan@saylani.org',
      phone: '+92 304 5678901',
      department: 'UI/UX & Graphics',
      course: 'Figma, UI/UX & Digital Media',
      batches: ['Batch 09'],
      campus: 'Zaitoon Ashraf IT Park',
      studentsCount: 52,
      status: 'On Leave',
      joinDate: 'Feb 2024',
    },
    {
      id: 'INS-106',
      name: 'Ishaq Bhojani',
      email: 'ishaq.bhojani@saylani.org',
      phone: '+92 305 6789012',
      department: 'Web & Mobile Dev',
      course: 'Full Stack MERN Architecture',
      batches: ['Batch 19'],
      campus: 'Gulshan Campus',
      studentsCount: 62,
      status: 'Active',
      joinDate: 'May 2023',
    },
  ]);

  // 2. STUDENTS DATA
  const [studentsList, setStudentsList] = useState([
    { roll: '773556', name: 'Rao Mudassir', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '84%', fees: 'PAID', status: 'Active' },
    { roll: '773557', name: 'Abdul Wadood', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '91%', fees: 'PAID', status: 'Active' },
    { roll: '773558', name: 'Muhammad Ali', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '88%', fees: 'PAID', status: 'Active' },
    { roll: '773559', name: 'Hamza Sheikh', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '94%', fees: 'PAID', status: 'Active' },
    { roll: '773560', name: 'Bilal Khan', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '79%', fees: 'PAID', status: 'Active' },
    { roll: '773561', name: 'Syed Usman', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '86%', fees: 'PAID', status: 'Active' },
    { roll: '773562', name: 'Areeba Fatima', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '96%', fees: 'PAID', status: 'Active' },
    { roll: '773563', name: 'Muhammad Huzaifa', batch: 'Batch 20', course: 'Modern Web App Development', campus: 'Zaitoon Ashraf IT Park', attendance: '89%', fees: 'PAID', status: 'Active' },
    { roll: '772101', name: 'Zohaib Hassan', batch: 'Batch 19', course: 'Full Stack MERN Architecture', campus: 'Gulshan Campus', attendance: '92%', fees: 'PAID', status: 'Active' },
    { roll: '772102', name: 'Sana Tariq', batch: 'Batch 19', course: 'Full Stack MERN Architecture', campus: 'Gulshan Campus', attendance: '85%', fees: 'PAID', status: 'Active' },
    { roll: '771501', name: 'Farhan Akram', batch: 'Batch 11', course: 'Python, AI & Agentic Workflows', campus: 'Gulshan Campus', attendance: '97%', fees: 'PAID', status: 'Active' },
    { roll: '771502', name: 'Nimra Siddiqui', batch: 'Batch 11', course: 'Python, AI & Agentic Workflows', campus: 'Gulshan Campus', attendance: '90%', fees: 'PAID', status: 'Active' },
    { roll: '770901', name: 'Daniyal Qureshi', batch: 'Batch 15', course: 'Flutter & React Native', campus: 'Numish Campus', attendance: '76%', fees: 'PENDING', status: 'Active' },
    { roll: '770902', name: 'Kashif Mehmood', batch: 'Batch 15', course: 'Flutter & React Native', campus: 'Numish Campus', attendance: '62%', fees: 'PAID', status: 'Suspended' },
  ]);

  // 3. BATCHES DATA
  const [batches, setBatches] = useState([
    {
      id: 'B-20',
      title: 'Modern Web App Development',
      batchNo: 'Batch 20',
      instructor: 'S Muzammil Javed',
      campus: 'Zaitoon Ashraf IT Park',
      timing: 'Mon, Wed, Fri (01:00 PM - 03:00 PM)',
      enrolled: 57,
      capacity: 60,
      completion: 69,
      status: 'In Progress',
    },
    {
      id: 'B-11',
      title: 'Python, AI & Agentic Workflows',
      batchNo: 'Batch 11',
      instructor: 'Ali Mughal',
      campus: 'Gulshan Campus',
      timing: 'Tue, Thu, Sat (03:00 PM - 05:00 PM)',
      enrolled: 48,
      capacity: 50,
      completion: 82,
      status: 'In Progress',
    },
    {
      id: 'B-15',
      title: 'Flutter & Mobile App Development',
      batchNo: 'Batch 15',
      instructor: 'Ghous Ahmed',
      campus: 'Numish Campus',
      timing: 'Mon, Wed, Fri (09:00 AM - 11:00 AM)',
      enrolled: 44,
      capacity: 45,
      completion: 45,
      status: 'In Progress',
    },
    {
      id: 'B-19',
      title: 'Full Stack MERN Architecture',
      batchNo: 'Batch 19',
      instructor: 'Ishaq Bhojani',
      campus: 'Gulshan Campus',
      timing: 'Tue, Thu, Sat (11:00 AM - 01:00 PM)',
      enrolled: 62,
      capacity: 65,
      completion: 90,
      status: 'In Progress',
    },
    {
      id: 'B-09',
      title: 'Figma, UI/UX & Product Design',
      batchNo: 'Batch 09',
      instructor: 'Hira Khan',
      campus: 'Zaitoon Ashraf IT Park',
      timing: 'Sunday Only (10:00 AM - 02:00 PM)',
      enrolled: 52,
      capacity: 55,
      completion: 100,
      status: 'Completed',
    },
  ]);

  // 4. ANNOUNCEMENTS DATA
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'SMIT Grand Annual Hackathon 2026 Announced',
      audience: 'All (Students & Teachers)',
      date: 'Sep 15, 2026',
      category: 'Event',
      content:
        'Registrations for the upcoming 36-hour hackathon across all Karachi campuses are now officially open. Teams of up to 4 members may register online.',
      author: 'Academic Directorate',
    },
    {
      id: 2,
      title: 'Mid-term Assessment Cycle for Batch 20 & 19',
      audience: 'Teachers Only',
      date: 'Sep 10, 2026',
      category: 'Exam',
      content:
        'All instructors are requested to submit quiz results and assignment grading by Saturday, 20th September to finalize the portal progress tracker.',
      author: 'Examination Cell',
    },
    {
      id: 3,
      title: 'Campus Closed on 12th Rabi-ul-Awwal',
      audience: 'All (Students & Teachers)',
      date: 'Sep 05, 2026',
      category: 'Holiday',
      content:
        'All SMIT campuses (Zaitoon Ashraf, Gulshan, Numish, Hyderabad) will remain closed on Wednesday in observance of 12th Rabi-ul-Awwal.',
      author: 'Administration',
    },
  ]);

  // Form states for modals
  const [newInstructor, setNewInstructor] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Web & Mobile Dev',
    course: '',
    campus: 'Zaitoon Ashraf IT Park',
  });

  const [newStudent, setNewStudent] = useState({
    name: '',
    roll: '',
    batch: 'Batch 20',
    course: 'Modern Web App Development',
    campus: 'Zaitoon Ashraf IT Park',
  });

  const [newBatch, setNewBatch] = useState({
    title: '',
    batchNo: '',
    instructor: 'S Muzammil Javed',
    campus: 'Zaitoon Ashraf IT Park',
    timing: 'Mon, Wed, Fri (01:00 PM - 03:00 PM)',
    capacity: 60,
  });

  const [newNotice, setNewNotice] = useState({
    title: '',
    audience: 'All (Students & Teachers)',
    category: 'Notice',
    content: '',
  });

  // Handlers
  const handleAddInstructor = (e) => {
    e.preventDefault();
    if (!newInstructor.name || !newInstructor.email) return;
    const item = {
      id: `INS-${100 + instructors.length + 1}`,
      name: newInstructor.name,
      email: newInstructor.email,
      phone: newInstructor.phone || '+92 300 0000000',
      department: newInstructor.department,
      course: newInstructor.course || 'Modern Web Development',
      batches: ['Batch 21'],
      campus: newInstructor.campus,
      studentsCount: 40,
      status: 'Active',
      joinDate: 'Sep 2026',
    };
    setInstructors([item, ...instructors]);
    setAddInstructorOpen(false);
    setNewInstructor({
      name: '',
      email: '',
      phone: '',
      department: 'Web & Mobile Dev',
      course: '',
      campus: 'Zaitoon Ashraf IT Park',
    });
    triggerToast('New Instructor registered successfully!');
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.roll) return;
    const item = {
      roll: newStudent.roll,
      name: newStudent.name,
      batch: newStudent.batch,
      course: newStudent.course,
      campus: newStudent.campus,
      attendance: '100%',
      fees: 'PAID',
      status: 'Active',
    };
    setStudentsList([item, ...studentsList]);
    setAddStudentOpen(false);
    setNewStudent({
      name: '',
      roll: '',
      batch: 'Batch 20',
      course: 'Modern Web App Development',
      campus: 'Zaitoon Ashraf IT Park',
    });
    triggerToast(`Student ${item.name} (${item.roll}) enrolled in ${item.batch}!`);
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    if (!newBatch.title || !newBatch.batchNo) return;
    const item = {
      id: `B-${batches.length + 20}`,
      title: newBatch.title,
      batchNo: newBatch.batchNo,
      instructor: newBatch.instructor,
      campus: newBatch.campus,
      timing: newBatch.timing,
      enrolled: 0,
      capacity: Number(newBatch.capacity) || 60,
      completion: 0,
      status: 'In Progress',
    };
    setBatches([item, ...batches]);
    setAddBatchOpen(false);
    setNewBatch({
      title: '',
      batchNo: '',
      instructor: 'S Muzammil Javed',
      campus: 'Zaitoon Ashraf IT Park',
      timing: 'Mon, Wed, Fri (01:00 PM - 03:00 PM)',
      capacity: 60,
    });
    triggerToast(`New batch ${item.batchNo} created successfully!`);
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;
    const item = {
      id: Date.now(),
      title: newNotice.title,
      audience: newNotice.audience,
      date: 'Sep 17, 2026',
      category: newNotice.category,
      content: newNotice.content,
      author: 'Academic Directorate',
    };
    setAnnouncements([item, ...announcements]);
    setAddNoticeOpen(false);
    setNewNotice({
      title: '',
      audience: 'All (Students & Teachers)',
      category: 'Notice',
      content: '',
    });
    triggerToast('Announcement published across designated portals!');
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800 font-sans flex flex-col antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 border border-slate-700 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner with easy portal switcher */}
      <AdminTopBanner onBack={onBack} onSwitchPortal={onSwitchPortal} />

      <div className="flex grow relative">
        {/* Left Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main Content Area */}
        <div className="grow flex flex-col min-w-0">
          {/* Header Bar */}
          <AdminHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            onOpenAddNotice={() => setAddNoticeOpen(true)}
          />

          {/* Dynamic Page Views */}
          <main className="p-3.5 sm:p-6 lg:p-8 grow space-y-6 max-w-7xl w-full mx-auto">
            {activeTab === 'Overview' && (
              <AdminOverviewTab
                batches={batches}
                announcements={announcements}
                onOpenAddInstructor={() => setAddInstructorOpen(true)}
                onOpenAddStudent={() => setAddStudentOpen(true)}
                onOpenAddBatch={() => setAddBatchOpen(true)}
                onExportCSV={() => triggerToast('Institute summary report downloaded in CSV format.')}
                onGoToBatches={() => setActiveTab('Batches & Courses')}
                onGoToAnnouncements={() => setActiveTab('Announcements')}
              />
            )}

            {activeTab === 'Instructors' && (
              <AdminInstructorsTab
                instructors={instructors}
                setInstructors={setInstructors}
                searchInstructor={searchInstructor}
                setSearchInstructor={setSearchInstructor}
                deptFilter={deptFilter}
                setDeptFilter={setDeptFilter}
                onOpenAddInstructor={() => setAddInstructorOpen(true)}
                triggerToast={triggerToast}
              />
            )}

            {activeTab === 'Students Directory' && (
              <AdminStudentsTab
                studentsList={studentsList}
                setStudentsList={setStudentsList}
                searchStudent={searchStudent}
                setSearchStudent={setSearchStudent}
                batchFilter={batchFilter}
                setBatchFilter={setBatchFilter}
                studentStatusFilter={studentStatusFilter}
                setStudentStatusFilter={setStudentStatusFilter}
                onOpenAddStudent={() => setAddStudentOpen(true)}
                triggerToast={triggerToast}
              />
            )}

            {activeTab === 'Batches & Courses' && (
              <AdminBatchesTab
                batches={batches}
                onOpenAddBatch={() => setAddBatchOpen(true)}
                onViewBatchStudents={(batchNo) => {
                  setBatchFilter(batchNo);
                  setActiveTab('Students Directory');
                }}
              />
            )}

            {activeTab === 'Attendance & Analytics' && (
              <AdminAnalyticsTab
                onDownloadMasterSheet={() =>
                  triggerToast('Attendance Master CSV exported successfully.')
                }
              />
            )}

            {activeTab === 'Announcements' && (
              <AdminAnnouncementsTab
                announcements={announcements}
                onOpenAddNotice={() => setAddNoticeOpen(true)}
                onDeleteNotice={(id) => {
                  setAnnouncements(announcements.filter((a) => a.id !== id));
                  triggerToast('Notice removed.');
                }}
              />
            )}
          </main>
        </div>
      </div>

      {/* Admin Modals */}
      <AdminModals
        instructors={instructors}
        addInstructorOpen={addInstructorOpen}
        setAddInstructorOpen={setAddInstructorOpen}
        newInstructor={newInstructor}
        setNewInstructor={setNewInstructor}
        handleAddInstructor={handleAddInstructor}
        addStudentOpen={addStudentOpen}
        setAddStudentOpen={setAddStudentOpen}
        newStudent={newStudent}
        setNewStudent={setNewStudent}
        handleAddStudent={handleAddStudent}
        addBatchOpen={addBatchOpen}
        setAddBatchOpen={setAddBatchOpen}
        newBatch={newBatch}
        setNewBatch={setNewBatch}
        handleAddBatch={handleAddBatch}
        addNoticeOpen={addNoticeOpen}
        setAddNoticeOpen={setAddNoticeOpen}
        newNotice={newNotice}
        setNewNotice={setNewNotice}
        handleAddNotice={handleAddNotice}
      />
    </div>
  );
}
