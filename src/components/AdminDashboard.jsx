import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Layers,
  BarChart3,
  Megaphone,
  ChevronLeft,
  ChevronDown,
  Search,
  Plus,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Building,
  MapPin,
  Calendar,
  Download,
  Eye,
  Edit2,
  Trash2,
  X,
  Check,
  Menu,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import SmitLogo from './SmitLogo';

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

  // 2. STUDENTS DATA (Including Batch 20 students from Teacher Portal)
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

  const navItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Instructors', icon: GraduationCap },
    { name: 'Students Directory', icon: Users },
    { name: 'Batches & Courses', icon: Layers },
    { name: 'Attendance & Analytics', icon: BarChart3 },
    { name: 'Announcements', icon: Megaphone },
  ];

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
      <div className="bg-white border-b border-[#edf0f5] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-500 shadow-2xs">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <SmitLogo className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" variant="badge" />
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 shrink-0 animate-pulse"></span>
            <span className="font-semibold text-slate-900 truncate">Admin Portal</span>
            <span className="text-slate-400 hidden sm:inline truncate">• Central Directorate</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={onBack}
            className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition font-medium whitespace-nowrap"
          >
            ← Portals
          </button>
          {onSwitchPortal && (
            <>
              <button
                onClick={() => onSwitchPortal('student')}
                className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition font-medium whitespace-nowrap"
              >
                Student
              </button>
              <button
                onClick={() => onSwitchPortal('teacher')}
                className="text-xs px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-medium whitespace-nowrap"
              >
                Teacher
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex grow relative">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* LEFT SIDEBAR */}
        <aside
          className={`fixed lg:sticky top-0 h-screen z-50 lg:z-10 bg-white border-r border-[#edf0f5] flex flex-col justify-between transition-all duration-300 shadow-2xs max-w-[85vw] ${
            sidebarCollapsed ? 'w-20' : 'w-64'
          } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          {/* Top Logo & Toggle */}
          <div>
            <div className="h-20 px-4 flex items-center justify-between border-b border-[#edf0f5]">
              {!sidebarCollapsed && (
                <div className="flex items-center gap-2.5">
                  <SmitLogo className="h-10 w-10" variant="badge" />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-slate-900 text-sm leading-tight tracking-tight">SMIT</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">Central Admin</span>
                  </div>
                </div>
              )}
              {sidebarCollapsed && (
                <div className="mx-auto">
                  <SmitLogo className="h-8 w-8" variant="badge" />
                </div>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:flex w-7 h-7 rounded-lg bg-[#f4f6fb] text-slate-500 hover:text-slate-800 items-center justify-center border border-[#e2e8f0] transition"
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <ChevronLeft
                  className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="p-3 space-y-1.5 mt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#ecfdf5] text-emerald-700 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        isActive ? 'text-emerald-600' : 'text-slate-400'
                      }`}
                    />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User Profile at bottom */}
          <div className="p-3 border-t border-[#edf0f5]">
            <div
              className={`flex items-center ${
                sidebarCollapsed ? 'justify-center' : 'justify-between'
              } p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]`}
            >
              {!sidebarCollapsed && (
                <div className="truncate pr-2">
                  <div className="text-xs font-semibold text-slate-900 tracking-wide truncate">
                    Muhammad Danish
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold truncate">
                    Director Academics • SMIT
                  </div>
                </div>
              )}
              {/* Profile Avatar */}
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  MD
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="grow flex flex-col min-w-0">
          {/* Header Bar */}
          <header className="h-16 px-3 sm:px-6 lg:px-8 border-b border-[#edf0f5] flex items-center justify-between bg-white/90 backdrop-blur sticky top-0 z-20 shadow-2xs gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 text-sm min-w-0">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 shrink-0"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap min-w-0">
                <span
                  className="hover:text-slate-900 cursor-pointer font-medium"
                  onClick={() => setActiveTab('Overview')}
                >
                  Admin Center
                </span>
                <span className="text-slate-300 font-bold">&gt;</span>
                <span className="text-slate-700 font-medium truncate max-w-[120px] sm:max-w-none">
                  Saylani IT
                </span>
                <span className="text-slate-300 font-bold">&gt;</span>
                <span className="text-emerald-600 font-semibold">{activeTab}</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setAddNoticeOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition shadow-2xs"
              >
                <Megaphone className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Post Notice</span>
                <span className="sm:hidden">Notice</span>
              </button>
            </div>
          </header>

          {/* PAGE CONTENTS */}
          <main className="p-3.5 sm:p-6 lg:p-8 grow space-y-6 max-w-7xl w-full mx-auto">
            {/* 1. OVERVIEW VIEW */}
            {activeTab === 'Overview' && (
              <div className="space-y-6">
                {/* 4 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total Students */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 tracking-tight">4,820</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        Total Enrolled Students
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +14% from last intake
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Total Instructors */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 tracking-tight">84</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        Certified Instructors
                      </div>
                      <div className="text-[11px] text-slate-500 mt-2">
                        6 Active Departments
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Active Batches */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 tracking-tight">32</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        Active Running Batches
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-2">
                        Incl. Batch 20 (WMA)
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Average Attendance */}
                  <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 tracking-tight">88.4%</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        Avg Institute Attendance
                      </div>
                      <div className="text-[11px] text-emerald-600 font-semibold mt-2">
                        High standing across campuses
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Middle Grid: Campus Distribution + Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Campuses Overview */}
                  <div className="lg:col-span-8 bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Campus Enrollment Breakdown</h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Active students distribution across Saylani technology campuses
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                        Karachi & Hyderabad
                      </span>
                    </div>

                    <div className="space-y-4 pt-2">
                      {[
                        { name: 'Zaitoon Ashraf IT Park', city: 'Karachi', students: 1420, capacity: 1600, percent: 88, color: 'bg-emerald-600' },
                        { name: 'Gulshan Campus (Saylani Center)', city: 'Karachi', students: 1250, capacity: 1400, percent: 89, color: 'bg-blue-600' },
                        { name: 'Numish Campus', city: 'Karachi', students: 840, capacity: 1000, percent: 84, color: 'bg-emerald-600' },
                        { name: 'Bahadurabad Head Office', city: 'Karachi', students: 760, capacity: 850, percent: 89, color: 'bg-amber-600' },
                        { name: 'Latifabad Center', city: 'Hyderabad', students: 550, capacity: 700, percent: 78, color: 'bg-rose-600' },
                      ].map((camp) => (
                        <div key={camp.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-medium">
                            <div className="flex items-center gap-2">
                              <Building className="w-3.5 h-3.5 text-slate-400" />
                              <span className="text-slate-900 font-semibold">{camp.name}</span>
                              <span className="text-slate-400 text-[11px]">({camp.city})</span>
                            </div>
                            <span className="text-slate-600">
                              <b className="text-slate-900">{camp.students}</b> / {camp.capacity} ({camp.percent}%)
                            </span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${camp.color} rounded-full transition-all duration-500`}
                              style={{ width: `${camp.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Quick Action Hub & Live Notices */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Quick Administrative Actions */}
                    <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-4">Quick Management</h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => setAddInstructorOpen(true)}
                          className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-left transition flex flex-col gap-2 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                            <Plus className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Add Instructor</div>
                            <div className="text-[10px] text-slate-500">Register new teacher</div>
                          </div>
                        </button>

                        <button
                          onClick={() => setAddStudentOpen(true)}
                          className="p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-left transition flex flex-col gap-2 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                            <Plus className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Enroll Student</div>
                            <div className="text-[10px] text-slate-500">Assign roll number</div>
                          </div>
                        </button>

                        <button
                          onClick={() => setAddBatchOpen(true)}
                          className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-left transition flex flex-col gap-2 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">New Batch</div>
                            <div className="text-[10px] text-slate-500">Launch course intake</div>
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            triggerToast('Institute summary report downloaded in CSV format.');
                          }}
                          className="p-3 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 text-left transition flex flex-col gap-2 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition">
                            <Download className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Export CSV</div>
                            <div className="text-[10px] text-slate-500">Download data sheets</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Notice Board Preview */}
                    <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6 grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <Megaphone className="w-4 h-4 text-emerald-600" />
                            Active Bulletins
                          </h4>
                          <button
                            onClick={() => setActiveTab('Announcements')}
                            className="text-xs text-emerald-600 hover:underline font-medium"
                          >
                            View All
                          </button>
                        </div>
                        <div className="space-y-2.5">
                          {announcements.slice(0, 2).map((notice) => (
                            <div
                              key={notice.id}
                              className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                            >
                              <div className="font-semibold text-slate-900 line-clamp-1">{notice.title}</div>
                              <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-2">
                                <span>{notice.date}</span>
                                <span>•</span>
                                <span className="text-emerald-600 font-medium">{notice.audience}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Recent Batches Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Ongoing Academic Batches</h3>
                      <p className="text-xs text-slate-500">Live progress of active course cohorts</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('Batches & Courses')}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-800"
                    >
                      Manage All Batches &rarr;
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold">Batch</th>
                          <th className="py-3 px-4 font-semibold">Course Title</th>
                          <th className="py-3 px-4 font-semibold">Instructor</th>
                          <th className="py-3 px-4 font-semibold">Campus</th>
                          <th className="py-3 px-4 font-semibold text-center">Strength</th>
                          <th className="py-3 px-4 font-semibold">Progress</th>
                          <th className="py-3 px-4 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {batches.map((b) => (
                          <tr key={b.id} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                            <td className="py-3.5 px-4 font-bold text-slate-900">{b.batchNo}</td>
                            <td className="py-3.5 px-4 font-medium text-slate-900">{b.title}</td>
                            <td className="py-3.5 px-4 text-slate-600">{b.instructor}</td>
                            <td className="py-3.5 px-4 text-slate-600 text-xs">{b.campus}</td>
                            <td className="py-3.5 px-4 text-center font-semibold text-slate-900">
                              {b.enrolled}/{b.capacity}
                            </td>
                            <td className="py-3.5 px-4 min-w-[140px]">
                              <div className="flex items-center gap-2">
                                <div className="h-2 grow bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-emerald-600 rounded-full"
                                    style={{ width: `${b.completion}%` }}
                                  />
                                </div>
                                <span className="text-[11px] font-bold text-slate-700">{b.completion}%</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                                  b.status === 'Completed'
                                    ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                    : 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                }`}
                              >
                                {b.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. INSTRUCTORS MANAGEMENT */}
            {activeTab === 'Instructors' && (
              <div className="space-y-6">
                {/* Search & Actions Bar */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search instructor by name..."
                        value={searchInstructor}
                        onChange={(e) => setSearchInstructor(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <select
                      value={deptFilter}
                      onChange={(e) => setDeptFilter(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600"
                    >
                      <option value="All">All Departments</option>
                      <option value="Web & Mobile Dev">Web & Mobile Dev</option>
                      <option value="AI & Data Science">AI & Data Science</option>
                      <option value="Cloud Native">Cloud Native</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="UI/UX & Graphics">UI/UX & Graphics</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setAddInstructorOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Instructor</span>
                  </button>
                </div>

                {/* Instructors Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold min-w-[200px]">Instructor Name</th>
                          <th className="py-3 px-4 font-semibold min-w-[150px]">Department</th>
                          <th className="py-3 px-4 font-semibold min-w-[180px]">Course Spec</th>
                          <th className="py-3 px-4 font-semibold min-w-[160px]">Assigned Batches</th>
                          <th className="py-3 px-4 font-semibold min-w-[160px]">Campus</th>
                          <th className="py-3 px-4 font-semibold text-center">Students</th>
                          <th className="py-3 px-4 font-semibold">Status</th>
                          <th className="py-3 px-4 font-semibold text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {instructors
                          .filter(
                            (ins) =>
                              ins.name.toLowerCase().includes(searchInstructor.toLowerCase()) &&
                              (deptFilter === 'All' || ins.department === deptFilter)
                          )
                          .map((ins) => (
                            <tr key={ins.id} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                              <td className="py-4 px-4 font-semibold text-slate-900">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                                    {ins.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="font-semibold text-slate-900">{ins.name}</div>
                                    <div className="text-[11px] text-slate-400 font-normal">{ins.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 font-medium text-slate-800">{ins.department}</td>
                              <td className="py-4 px-4 text-slate-600 text-xs">{ins.course}</td>
                              <td className="py-4 px-4">
                                <div className="flex flex-wrap gap-1">
                                  {ins.batches.map((b) => (
                                    <span
                                      key={b}
                                      className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    >
                                      {b}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="py-4 px-4 text-xs text-slate-600">{ins.campus}</td>
                              <td className="py-4 px-4 text-center font-bold text-slate-900">{ins.studentsCount}</td>
                              <td className="py-4 px-4">
                                <span
                                  className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                                    ins.status === 'Active'
                                      ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                      : 'border-amber-200 text-amber-700 bg-amber-50'
                                  }`}
                                >
                                  {ins.status}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-center">
                                <button
                                  onClick={() => {
                                    setInstructors(
                                      instructors.map((i) =>
                                        i.id === ins.id
                                          ? { ...i, status: i.status === 'Active' ? 'On Leave' : 'Active' }
                                          : i
                                      )
                                    );
                                    triggerToast(`Status changed for ${ins.name}`);
                                  }}
                                  className="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                                >
                                  Toggle Status
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 3. STUDENTS DIRECTORY */}
            {activeTab === 'Students Directory' && (
              <div className="space-y-6">
                {/* Search & Filter Controls */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by student name or roll..."
                        value={searchStudent}
                        onChange={(e) => setSearchStudent(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <select
                      value={batchFilter}
                      onChange={(e) => setBatchFilter(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600"
                    >
                      <option value="All">All Batches</option>
                      <option value="Batch 20">Batch 20 (WMA)</option>
                      <option value="Batch 19">Batch 19 (MERN)</option>
                      <option value="Batch 11">Batch 11 (Python AI)</option>
                      <option value="Batch 15">Batch 15 (Flutter)</option>
                    </select>

                    <select
                      value={studentStatusFilter}
                      onChange={(e) => setStudentStatusFilter(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 bg-white focus:outline-none focus:border-emerald-600"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setAddStudentOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Enroll Student</span>
                  </button>
                </div>

                {/* Students Table */}
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold min-w-[200px]">Student Name</th>
                          <th className="py-3 px-4 font-semibold min-w-[120px]">Roll Number</th>
                          <th className="py-3 px-4 font-semibold min-w-[110px]">Batch</th>
                          <th className="py-3 px-4 font-semibold min-w-[180px]">Course</th>
                          <th className="py-3 px-4 font-semibold min-w-[160px]">Campus</th>
                          <th className="py-3 px-4 font-semibold text-center">Attendance</th>
                          <th className="py-3 px-4 font-semibold">Fee Status</th>
                          <th className="py-3 px-4 font-semibold">Status</th>
                          <th className="py-3 px-4 font-semibold text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {studentsList
                          .filter(
                            (s) =>
                              (s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                                s.roll.includes(searchStudent)) &&
                              (batchFilter === 'All' || s.batch === batchFilter) &&
                              (studentStatusFilter === 'All' || s.status === studentStatusFilter)
                          )
                          .map((st) => (
                            <tr key={st.roll} className="text-slate-700 hover:bg-[#fcfdfd] transition">
                              <td className="py-4 px-4 font-semibold text-slate-900">
                                <div className="flex items-center gap-3">
                                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs overflow-hidden">
                                    <img
                                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${st.name}&backgroundColor=e2e8f0`}
                                      alt={st.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span>{st.name}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4 font-mono text-slate-600">{st.roll}</td>
                              <td className="py-4 px-4 font-semibold text-emerald-700">{st.batch}</td>
                              <td className="py-4 px-4 text-xs text-slate-600">{st.course}</td>
                              <td className="py-4 px-4 text-xs text-slate-600">{st.campus}</td>
                              <td className="py-4 px-4 text-center font-bold text-slate-900">{st.attendance}</td>
                              <td className="py-4 px-4">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                    st.fees === 'PAID'
                                      ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                      : 'border-amber-200 text-amber-700 bg-amber-50'
                                  }`}
                                >
                                  {st.fees}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                                    st.status === 'Active'
                                      ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                      : 'border-red-200 text-red-700 bg-red-50'
                                  }`}
                                >
                                  {st.status}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-center">
                                <button
                                  onClick={() => {
                                    setStudentsList(
                                      studentsList.map((s) =>
                                        s.roll === st.roll
                                          ? { ...s, status: s.status === 'Active' ? 'Suspended' : 'Active' }
                                          : s
                                      )
                                    );
                                    triggerToast(`Status toggled for ${st.name}`);
                                  }}
                                  className="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                                >
                                  {st.status === 'Active' ? 'Suspend' : 'Activate'}
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 4. BATCHES & COURSES */}
            {activeTab === 'Batches & Courses' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Institute Batch Management</h3>
                    <p className="text-xs text-slate-500">Configure schedules, assigned teachers, and capacities</p>
                  </div>
                  <button
                    onClick={() => setAddBatchOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
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
                          onClick={() => {
                            setBatchFilter(batch.batchNo);
                            setActiveTab('Students Directory');
                          }}
                          className="text-emerald-600 hover:text-emerald-800 font-semibold"
                        >
                          View Students &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. ATTENDANCE & ANALYTICS */}
            {activeTab === 'Attendance & Analytics' && (
              <div className="space-y-6">
                <div className="bg-white border border-[#edf0f5] shadow-2xs rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Institute-Wide Attendance Analytics</h3>
                      <p className="text-xs text-slate-500">Real-time attendance health metrics across batches</p>
                    </div>
                    <button
                      onClick={() => {
                        triggerToast('Attendance Master CSV exported successfully.');
                      }}
                      className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Master Sheet</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <div className="text-xs font-semibold text-emerald-800">Highest Attended Cohort</div>
                      <div className="text-xl font-bold text-emerald-950 mt-1">Batch 11 (Python AI)</div>
                      <div className="text-xs text-emerald-700 mt-1">93.5% average attendance</div>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <div className="text-xs font-semibold text-emerald-800">Flagship Technology Cohort</div>
                      <div className="text-xl font-bold text-emerald-950 mt-1">Batch 20 (Modern Web)</div>
                      <div className="text-xs text-emerald-700 mt-1">88.4% average attendance</div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                      <div className="text-xs font-semibold text-blue-800">Total Classes Conducted (Sep)</div>
                      <div className="text-xl font-bold text-blue-950 mt-1">428 Sessions</div>
                      <div className="text-xs text-blue-700 mt-1">Across 5 campuses</div>
                    </div>
                  </div>

                  {/* Cohort Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#edf0f5] bg-[#fafbfd]">
                          <th className="py-3 px-4 font-semibold">Cohort</th>
                          <th className="py-3 px-4 font-semibold">Course</th>
                          <th className="py-3 px-4 font-semibold">Instructor</th>
                          <th className="py-3 px-4 font-semibold text-center">Avg Attendance</th>
                          <th className="py-3 px-4 font-semibold">Attendance Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f1f3f7]">
                        {[
                          { batch: 'Batch 11', course: 'Python, AI & Agentic Workflows', instructor: 'Ali Mughal', pct: '93.5%', status: 'Excellent' },
                          { batch: 'Batch 20', course: 'Modern Web App Development', instructor: 'S Muzammil Javed', pct: '88.4%', status: 'Good' },
                          { batch: 'Batch 19', course: 'Full Stack MERN Architecture', instructor: 'Ishaq Bhojani', pct: '86.1%', status: 'Good' },
                          { batch: 'Batch 15', course: 'Flutter & Mobile App Development', instructor: 'Ghous Ahmed', pct: '79.2%', status: 'Average' },
                          { batch: 'Batch 09', course: 'Figma, UI/UX & Product Design', instructor: 'Hira Khan', pct: '91.0%', status: 'Excellent' },
                        ].map((row) => (
                          <tr key={row.batch} className="hover:bg-[#fcfdfd] transition">
                            <td className="py-3.5 px-4 font-bold text-slate-900">{row.batch}</td>
                            <td className="py-3.5 px-4 text-slate-800">{row.course}</td>
                            <td className="py-3.5 px-4 text-slate-600">{row.instructor}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-slate-900">{row.pct}</td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                                  row.status === 'Excellent'
                                    ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                                    : 'border-blue-200 text-blue-700 bg-blue-50'
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 6. ANNOUNCEMENTS */}
            {activeTab === 'Announcements' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Official Notice Board & Bulletins</h3>
                    <p className="text-xs text-slate-500">Publish alerts to Student and Teacher portals in real time</p>
                  </div>
                  <button
                    onClick={() => setAddNoticeOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
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
                          Audience: <b className="text-slate-800">{item.audience}</b> • Posted by: <span className="text-emerald-600 font-medium">{item.author}</span>
                        </div>
                        <button
                          onClick={() => {
                            setAnnouncements(announcements.filter((a) => a.id !== item.id));
                            triggerToast('Notice removed.');
                          }}
                          className="text-slate-400 hover:text-red-600 transition"
                          title="Delete notice"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* MODAL: ADD INSTRUCTOR */}
      {addInstructorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Register New Instructor</h3>
              <button onClick={() => setAddInstructorOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddInstructor} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sir Muhammad Hamza"
                  value={newInstructor.name}
                  onChange={(e) => setNewInstructor({ ...newInstructor, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. hamza@saylani.org"
                  value={newInstructor.email}
                  onChange={(e) => setNewInstructor({ ...newInstructor, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                <select
                  value={newInstructor.department}
                  onChange={(e) => setNewInstructor({ ...newInstructor, department: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  onChange={(e) => setNewInstructor({ ...newInstructor, campus: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
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
              <button onClick={() => setAddStudentOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Roll Number *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Assigned Batch</label>
                <select
                  value={newStudent.batch}
                  onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
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
              <button onClick={() => setAddBatchOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddBatch} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Course Title *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Batch Identifier *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Assigned Lead Instructor</label>
                <select
                  value={newBatch.instructor}
                  onChange={(e) => setNewBatch({ ...newBatch, instructor: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
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
              <button onClick={() => setAddNoticeOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNotice} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Headline / Title *</label>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Audience</label>
                <select
                  value={newNotice.audience}
                  onChange={(e) => setNewNotice({ ...newNotice, audience: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
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
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-600 text-xs"
                >
                  <option value="Notice">General Notice</option>
                  <option value="Event">Event / Hackathon</option>
                  <option value="Exam">Exam / Assessment</option>
                  <option value="Holiday">Official Holiday</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Message *</label>
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
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
                >
                  Publish Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
