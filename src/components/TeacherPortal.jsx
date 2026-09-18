import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  Calendar,
  CalendarCheck,
  CheckSquare,
  Users,
  FileText,
  CheckCheck,
  MessageSquare,
  Search,
  ChevronDown,
  Eye,
  Edit2,
  Plus,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Copy,
  PieChart,
  X,
  Check,
  SlidersHorizontal,
  ChevronUp,
  FileSpreadsheet,
  Layers,
  ArrowLeft
} from 'lucide-react';
import SmitLogo from './SmitLogo';

export default function TeacherPortal({ onBack, onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('Assignments');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchStudent, setSearchStudent] = useState('');
  const [studentFilter, setStudentFilter] = useState('All');
  const [selectedDate, setSelectedDate] = useState('Tue Sep 15 2026');
  const [onlyMyProgress, setOnlyMyProgress] = useState(true);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [newAssignmentOpen, setNewAssignmentOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState({ 'Front-End Development': true });

  // Pagination states
  const [assignmentPage, setAssignmentPage] = useState(1);
  const [studentPage, setStudentPage] = useState(1);
  const [attendancePage, setAttendancePage] = useState(1);
  const [attendancePageSize, setAttendancePageSize] = useState(25);
  const [attendanceSearch, setAttendanceSearch] = useState('');
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [newStudentData, setNewStudentData] = useState({ name: '', roll: '', email: '' });

  // New assignment form state
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    topics: '',
    dueDate: 'Sep 25, 2026',
    isHackathon: false,
  });

  // Assignments List (10 from screenshot + page 2)
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Admin panel (E co...',
      fullTitle: 'Admin panel (E commerce Dashboard)',
      description: 'Create the provided UI design in React or nextjs...',
      topics: ['NextJS', 'ReactJS Introducti...'],
      topicCount: '+5',
      dueDate: 'Sep 10, 2026',
      isHackathon: false,
    },
    {
      id: 2,
      title: 'QUICKSERVE WMA (B...',
      fullTitle: 'QUICKSERVE WMA (Batch-20)',
      description: 'Challenge: Build a modern service-booking web application that...',
      topics: [],
      topicCount: null,
      dueDate: 'Aug 30, 2026',
      isHackathon: true,
    },
    {
      id: 3,
      title: 'E-Commerce Websi...',
      fullTitle: 'E-Commerce Website (React js)',
      description: 'React.js frontend Create all required e-commerce...',
      topics: ['ReactJS Introducti...', 'Components, Props...'],
      topicCount: '+2',
      dueDate: 'Aug 17, 2026',
      isHackathon: false,
    },
    {
      id: 4,
      title: 'Furniture E-Comme...',
      fullTitle: 'Furniture E-Commerce Website',
      description: 'Follow the Figma design. ( https://www.figma.com/design/X...',
      topics: ['JavaScript Book Co...', 'Github'],
      topicCount: '+3',
      dueDate: 'Aug 10, 2026',
      isHackathon: false,
    },
    {
      id: 5,
      title: 'MaintainIQ (Batch-2...',
      fullTitle: 'MaintainIQ (Batch-20)',
      description: 'MaintainIQ ...',
      topics: [],
      topicCount: null,
      dueDate: 'Jul 12, 2026',
      isHackathon: true,
    },
    {
      id: 6,
      title: 'JavaScript Assignm...',
      fullTitle: 'JavaScript Assignment – 25 Questions',
      description: 'Complete all 25 JavaScript questions available at the link...',
      topics: ['JavaScript Introdu...', 'JavaScript Chapter...'],
      topicCount: '+6',
      dueDate: 'Jul 10, 2026',
      isHackathon: false,
    },
    {
      id: 7,
      title: 'Budgetting App',
      fullTitle: 'Budgetting App',
      description: 'Develop a fully responsive and functional Budgeting Web...',
      topics: ['JavaScript Chapter...', 'JavaScript Chapter...'],
      topicCount: '+10',
      dueDate: 'Jun 1, 2026',
      isHackathon: false,
    },
    {
      id: 8,
      title: 'Amazon Clone',
      fullTitle: 'Amazon Clone',
      description: 'Create a fully responsive landing page inspired by the official...',
      topics: ['HTML Text', 'HTML Images'],
      topicCount: '+13',
      dueDate: 'May 24, 2026',
      isHackathon: false,
    },
    {
      id: 9,
      title: 'NASA Landing Page',
      fullTitle: 'NASA Landing Page',
      description: 'Create a fully responsive landing page inspired by the official NASA...',
      topics: ['Media queries', 'HTML Text'],
      topicCount: '+7',
      dueDate: 'May 1, 2026',
      isHackathon: false,
    },
    {
      id: 10,
      title: 'Helplytics AI - Com...',
      fullTitle: 'Helplytics AI - Hackathon',
      description: 'SMIT GRAND CODING NIGHT - April 2026...',
      topics: [],
      topicCount: null,
      dueDate: 'Apr 19, 2026',
      isHackathon: true,
    },
    {
      id: 11,
      title: 'Portfolio Website',
      fullTitle: 'Portfolio Website (HTML / CSS)',
      description: 'Create a modern personal developer portfolio with CSS Flexbox...',
      topics: ['HTML Text', 'CSS Layouts'],
      topicCount: '+4',
      dueDate: 'Apr 02, 2026',
      isHackathon: false,
    },
    {
      id: 12,
      title: 'Weather App',
      fullTitle: 'Weather API Application',
      description: 'Fetch real-time weather using OpenWeather API in pure JavaScript...',
      topics: ['Async/Await', 'Fetch API'],
      topicCount: '+2',
      dueDate: 'Mar 15, 2026',
      isHackathon: false,
    },
    {
      id: 13,
      title: 'Interactive Quiz App',
      fullTitle: 'Interactive Quiz App',
      description: 'Build an interactive multiple-choice quiz engine with timer...',
      topics: ['DOM Manipulation', 'Event Listeners'],
      topicCount: '+3',
      dueDate: 'Feb 28, 2026',
      isHackathon: false,
    },
  ]);

  // Students Sample List (57 Students for Batch 20)
  const [students, setStudents] = useState([
    { roll: '773556', name: 'Rao Mudassir', email: 'raomudassir1915068@gmail.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '407504', name: 'Abdul Wadood', email: 'abdul.wadood@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773512', name: 'Muhammad Ali', email: 'm.ali@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773489', name: 'Hamza Sheikh', email: 'hamza.s@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773501', name: 'Bilal Khan', email: 'bilal.k@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773522', name: 'Syed Usman', email: 'usman.syed@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773540', name: 'Areeba Fatima', email: 'areeba.f@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773566', name: 'Zeeshan Ahmed', email: 'zeeshan.a@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773580', name: 'Daniyal Raza', email: 'daniyal.r@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773595', name: 'Shahzaib Noor', email: 'shahzaib.n@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773602', name: 'Muhammad Huzaifa', email: 'huzaifa.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773618', name: 'Syed Faraz Hussain', email: 'faraz.hussain@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773629', name: 'Muhammad Anas', email: 'anas.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773635', name: 'Taha Siddiqui', email: 'taha.siddiqui@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773644', name: 'Usama Bin Tariq', email: 'usama.tariq@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773651', name: 'Owais Raza', email: 'owais.raza@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773663', name: 'Fatima Zahra', email: 'fatima.zahra@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773677', name: 'Maryam Nawaz', email: 'maryam.nawaz@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773689', name: 'Hafiz Ahmed', email: 'hafiz.ahmed@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773702', name: 'Sameer Khan', email: 'sameer.k@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773715', name: 'Arsalan Baig', email: 'arsalan.baig@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773728', name: 'Kashif Mehmood', email: 'kashif.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773739', name: 'Saad Ur Rehman', email: 'saad.rehman@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773750', name: 'Hassan Abdullah', email: 'hassan.a@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773762', name: 'Zubair Qureshi', email: 'zubair.q@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773774', name: 'Noman Aslam', email: 'noman.aslam@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773788', name: 'Waleed Mustafa', email: 'waleed.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773799', name: 'Faizan Shabbir', email: 'faizan.s@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773810', name: 'Adeel Murtaza', email: 'adeel.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773825', name: 'Talha Junaid', email: 'talha.j@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773837', name: 'Mubashir Alam', email: 'mubashir.alam@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773849', name: 'Sufyan Ali', email: 'sufyan.ali@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773860', name: 'Haris Memon', email: 'haris.memon@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773872', name: 'Umair Rajput', email: 'umair.rajput@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773885', name: 'Shahmeer Farooq', email: 'shahmeer.f@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773896', name: 'Ibrahim Khalil', email: 'ibrahim.k@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773908', name: 'Rayyan Siddique', email: 'rayyan.s@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773920', name: 'Danish Warsi', email: 'danish.w@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773934', name: 'Junaid Akram', email: 'junaid.akram@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773945', name: 'Ammar Yasir', email: 'ammar.yasir@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773956', name: 'Fahad Mehmood', email: 'fahad.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773968', name: 'Salman Ghani', email: 'salman.ghani@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773980', name: 'Moiz ur Rehman', email: 'moiz.rehman@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '773992', name: 'Ebad ur Rahman', email: 'ebad.rahman@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774005', name: 'Rehan Qadri', email: 'rehan.qadri@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774018', name: 'Suleman Mansoor', email: 'suleman.m@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774029', name: 'Waqas Rasheed', email: 'waqas.r@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774042', name: 'Asadullah Tariq', email: 'asadullah.t@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774055', name: 'Muzammil Altaf', email: 'muzammil.a@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774068', name: 'Rohail Anjum', email: 'rohail.a@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774079', name: 'Shahrukh Nadeem', email: 'shahrukh.n@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774092', name: 'Basit Ali', email: 'basit.ali@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774105', name: 'Qasim Zia', email: 'qasim.zia@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774118', name: 'Burhanuddin', email: 'burhanuddin@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774130', name: 'Yousuf Haroon', email: 'yousuf.h@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774142', name: 'Ahsan Mumtaz', email: 'ahsan.mumtaz@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
    { roll: '774155', name: 'Kamran Haider', email: 'kamran.haider@example.com', status: 'ENROLLED', attendance: 'NOT MARKED' },
  ]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentData.name.trim() || !newStudentData.roll.trim()) return;
    const added = {
      roll: newStudentData.roll.trim(),
      name: newStudentData.name.trim(),
      email: newStudentData.email.trim() || `${newStudentData.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      status: 'ENROLLED',
      attendance: 'NOT MARKED',
    };
    setStudents((prev) => [added, ...prev]);
    setNewStudentData({ name: '', roll: '', email: '' });
    setAddStudentOpen(false);
  };

  // Toggle Attendance
  const cycleAttendance = (roll) => {
    setStudents((prev) =>
      prev.map((st) => {
        if (st.roll === roll) {
          const next =
            st.attendance === 'NOT MARKED'
              ? 'PRESENT'
              : st.attendance === 'PRESENT'
              ? 'ABSENT'
              : st.attendance === 'ABSENT'
              ? 'LEAVE'
              : 'PRESENT';
          return { ...st, attendance: next };
        }
        return st;
      })
    );
  };

  const markAll = (status) => {
    setStudents((prev) => prev.map((st) => ({ ...st, attendance: status })));
  };

  const presentCount = students.filter((s) => s.attendance === 'PRESENT').length;
  const absentCount = students.filter((s) => s.attendance === 'ABSENT').length;
  const leaveCount = students.filter((s) => s.attendance === 'LEAVE').length;

  // Quizzes list from screenshot
  const quizzes = [
    {
      title: 'Javascript (Quiz-4)',
      courses: 'Modern Web Application Development, Web and Mobile App Development',
      date: 'Jun 24, 2026',
      expiry: 'Jun 24, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'Javascript (Quiz-3)',
      courses: 'Modern Web Application Development, Web and Mobile App Development',
      date: 'Jun 3, 2026',
      expiry: 'Jun 3, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'Javascript (Quiz-2)',
      courses: 'Modern Web Application Development, Web and Mobile App Development',
      date: 'May 18, 2026',
      expiry: 'May 18, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'Javascript (Quiz-1)',
      courses:
        'Modern Web Application Development, Web and Mobile App Development, JavaScript Crash Course, Full Stack Foundations for Teens',
      date: 'Apr 17, 2026',
      expiry: 'Apr 17, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'CSS Quiz',
      courses:
        'Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development',
      date: 'Mar 27, 2026',
      expiry: 'Mar 27, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'HTML Quiz',
      courses:
        'Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development, Mobile App Development (React Native)',
      date: 'Jan 7, 2026',
      expiry: 'Jan 7, 2026',
      status: 'ACTIVE',
    },
    {
      title: 'HTML Quiz',
      courses:
        'Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development, Mobile App Development (React Native)',
      date: 'Jan 5, 2026',
      expiry: 'Jan 5, 2026',
      status: 'ACTIVE',
    },
  ];

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title) return;
    const item = {
      id: Date.now(),
      title: newAssignment.title.length > 20 ? newAssignment.title.slice(0, 18) + '...' : newAssignment.title,
      fullTitle: newAssignment.title,
      description: newAssignment.description || 'Assignment details and specifications...',
      topics: newAssignment.topics ? newAssignment.topics.split(',').map((t) => t.trim()) : [],
      topicCount: null,
      dueDate: newAssignment.dueDate,
      isHackathon: newAssignment.isHackathon,
    };
    setAssignments([item, ...assignments]);
    setNewAssignmentOpen(false);
    setNewAssignment({ title: '', description: '', topics: '', dueDate: 'Sep 25, 2026', isHackathon: false });
  };

  const navTabs = [
    { id: 'Students', label: 'Students', icon: Users },
    { id: 'Attendance', label: 'Attendance', icon: CalendarCheck },
    { id: 'Assignments', label: 'Assignments', icon: FileText },
    { id: 'Quizzes', label: 'Quizzes', icon: CheckSquare },
    { id: 'Course Progress', label: 'Course Progress', icon: CheckCheck },
  ];

  return (
    <div className="min-h-screen bg-[#fbfcfd] text-[#1e293b] font-sans flex flex-col antialiased">
      {/* Top Banner with Portal Switcher */}
      <div className="bg-white border-b border-[#e2e8f0] px-3 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-600 shadow-2xs">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <SmitLogo className="h-7 w-7 sm:h-9 sm:w-9 shrink-0" variant="badge" />
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
            <span className="font-semibold text-slate-800 truncate">Faculty Portal</span>
            <span className="text-slate-400 hidden lg:inline">•</span>
            <span className="text-slate-500 hidden lg:inline truncate">S Muzammil Javed</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={onBack}
            className="px-2 sm:px-2.5 py-1 rounded bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 font-medium transition text-xs whitespace-nowrap"
          >
            ← Portals
          </button>
          {onSwitchPortal && (
            <>
              <button
                onClick={() => onSwitchPortal('student')}
                className="px-2 sm:px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-medium transition text-xs whitespace-nowrap"
              >
                Student
              </button>
              <button
                onClick={() => onSwitchPortal('admin')}
                className="px-2 sm:px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-medium transition text-xs whitespace-nowrap"
              >
                Admin
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex grow">
        {/* SLIM LEFT SIDEBAR - hidden on mobile, visible on tablet/desktop */}
        <aside
          className={`bg-white border-r border-[#eceef2] hidden md:flex flex-col items-center py-5 transition-all duration-200 shrink-0 ${
            sidebarCollapsed ? 'w-14' : 'w-14'
          }`}
        >
          {/* Chevron Collapse Toggle at top */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center mb-6 transition"
            title="Toggle Sidebar"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Nav Icons */}
          <div className="flex flex-col gap-5 text-slate-400">
            <button
              onClick={() => setActiveTab('Assignments')}
              className={`p-2 rounded-lg transition ${
                activeTab === 'Assignments' || activeTab === 'Course Progress'
                  ? 'text-blue-600 bg-blue-50'
                  : 'hover:text-slate-700 hover:bg-slate-100'
              }`}
              title="Dashboard"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('Attendance')}
              className={`p-2 rounded-lg transition ${
                activeTab === 'Attendance'
                  ? 'text-blue-600 bg-blue-50'
                  : 'hover:text-slate-700 hover:bg-slate-100'
              }`}
              title="Attendance & Schedule"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('Students')}
              className={`p-2 rounded-lg transition ${
                activeTab === 'Students'
                  ? 'text-blue-600 bg-blue-50'
                  : 'hover:text-slate-700 hover:bg-slate-100'
              }`}
              title="Enrolled Students"
            >
              <CalendarCheck className="w-5 h-5" />
            </button>
          </div>
        </aside>

        {/* MAIN BODY AREA */}
        <div className="grow flex flex-col min-w-0 bg-white">
          {/* Breadcrumbs & Feedback Header */}
          <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-[#f1f3f7]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span className="hover:text-slate-600 cursor-pointer">Dashboard</span>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-600 font-medium">Modern Web Application Development</span>
            </div>

            <button
              onClick={() => {
                setFeedbackSent(false);
                setFeedbackOpen(true);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Feedback</span>
            </button>
          </div>

          {/* Title Bar + Action Button */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Modern Web Application Development
            </h1>

            {activeTab === 'Assignments' && (
              <button
                onClick={() => setNewAssignmentOpen(true)}
                className="self-start sm:self-auto flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-semibold shadow-xs transition active:scale-[0.98]"
              >
                <Plus className="w-4 h-4" />
                <span>New Assignment</span>
              </button>
            )}
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="px-4 sm:px-6 border-b border-[#eceef2] overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium whitespace-nowrap">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-3 pt-1 border-b-2 transition relative ${
                      isActive
                        ? 'border-blue-600 text-blue-600 font-semibold'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB CONTENTS */}
          <div className="p-3.5 sm:p-6 grow max-w-7xl w-full mx-auto">
            {/* ========================================================= */}
            {/* 1. ASSIGNMENTS TAB (WhatsApp Image 2026-09-17 at 9.09.44 PM) */}
            {/* ========================================================= */}
            {activeTab === 'Assignments' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
                        <th className="py-3 px-4 min-w-[170px]">Title</th>
                        <th className="py-3 px-4 min-w-[280px]">Description</th>
                        <th className="py-3 px-4 min-w-[200px]">Topics</th>
                        <th className="py-3 px-4 min-w-[120px]">Due Date</th>
                        <th className="py-3 px-4 min-w-[90px] text-right sm:text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f3f7]">
                      {assignments.slice(0, 10).map((row) => (
                        <tr
                          key={row.id}
                          className={`hover:bg-[#fcfdfd] transition ${
                            row.isHackathon ? 'bg-[#faf7fd]' : ''
                          }`}
                        >
                          {/* Title Column */}
                          <td className="py-3.5 px-4 font-normal text-slate-800 align-top">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-medium text-slate-900" title={row.fullTitle}>
                                {row.title}
                              </span>
                              {row.isHackathon && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f3e8ff] text-[#7e22ce] uppercase tracking-wide">
                                  HACKATHON
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Description Column */}
                          <td className="py-3.5 px-4 text-slate-600 align-top max-w-[340px] leading-relaxed">
                            {row.description}
                          </td>

                          {/* Topics Column */}
                          <td className="py-3.5 px-4 align-top">
                            {row.topics.length === 0 ? (
                              <span className="text-slate-400 text-xs">No topics</span>
                            ) : (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {row.topics.map((top, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-0.5 rounded-md bg-[#eaf4fe] text-[#0284c7] text-[11px] font-medium"
                                  >
                                    {top}
                                  </span>
                                ))}
                                {row.topicCount && (
                                  <span className="text-[11px] font-medium text-blue-500">
                                    {row.topicCount}
                                  </span>
                                )}
                              </div>
                            )}
                          </td>

                          {/* Due Date Column */}
                          <td className="py-3.5 px-4 text-slate-600 align-top whitespace-nowrap">
                            {row.dueDate}
                          </td>

                          {/* Actions Column */}
                          <td className="py-3.5 px-4 align-top">
                            <div className="flex items-center gap-3 text-slate-400">
                              <button
                                className="hover:text-slate-700 transition"
                                title="View Submissions"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                className="hover:text-slate-700 transition"
                                title="Edit Assignment"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination (Showing 1-10 of 13 records) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
                  <span>Showing 1-10 of 13 records</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setAssignmentPage(1)}
                      className="px-2.5 py-1 rounded text-slate-400 hover:text-slate-700 transition"
                    >
                      &lt; Previous
                    </button>
                    <button
                      onClick={() => setAssignmentPage(1)}
                      className={`w-7 h-7 rounded flex items-center justify-center font-medium ${
                        assignmentPage === 1 ? 'border border-blue-500 text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setAssignmentPage(2)}
                      className={`w-7 h-7 rounded flex items-center justify-center font-medium ${
                        assignmentPage === 2 ? 'border border-blue-500 text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      2
                    </button>
                    <button
                      onClick={() => setAssignmentPage(2)}
                      className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 transition"
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* 2. COURSE PROGRESS TAB (WhatsApp Image 2026-09-17 at 9.09.43 PM (2)) */}
            {/* ========================================================= */}
            {activeTab === 'Course Progress' && (
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
                      className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 font-medium py-1 px-2 rounded-md hover:bg-slate-50 transition"
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
            )}

            {/* ========================================================= */}
            {/* 3. QUIZZES TAB (WhatsApp Image 2026-09-17 at 9.09.43 PM (1)) */}
            {/* ========================================================= */}
            {activeTab === 'Quizzes' && (
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
                              <button className="hover:text-slate-700" title="View Quiz Details">
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button className="hover:text-slate-700" title="Copy / Duplicate">
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button className="hover:text-slate-700" title="View Quiz Stats / Pie">
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
            )}

            {/* ========================================================= */}
            {/* 4. STUDENTS TAB (WhatsApp Image 2026-09-17 at 9.09.43 PM) */}
            {/* ========================================================= */}
            {activeTab === 'Students' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Search & Filter Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pb-1">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchStudent}
                      onChange={(e) => setSearchStudent(e.target.value)}
                      placeholder="Search by name, email or roll no..."
                      className="w-full pl-9 pr-3 py-2 bg-white border border-[#e2e8f0] rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <button className="flex items-center justify-between gap-3 px-3 py-2 bg-white border border-[#e2e8f0] rounded-lg text-xs sm:text-sm text-slate-700 hover:bg-slate-50 min-w-[90px]">
                      <span>{studentFilter}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Students Table */}
                {/* Student Table & Pagination */}
                {(() => {
                  const filtered = students.filter(
                    (s) =>
                      s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                      s.roll.includes(searchStudent) ||
                      s.email.toLowerCase().includes(searchStudent.toLowerCase())
                  );
                  const totalStudentPages = Math.max(1, Math.ceil(filtered.length / 10));
                  const currentStPage = Math.min(studentPage, totalStudentPages);
                  const startStIndex = (currentStPage - 1) * 10;
                  const displayedStudents = filtered.slice(startStIndex, startStIndex + 10);

                  return (
                    <>
                      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
                              <th className="py-3 px-4 min-w-[200px]">Name</th>
                              <th className="py-3 px-4 min-w-[130px]">Roll Number</th>
                              <th className="py-3 px-4 min-w-[220px]">Email</th>
                              <th className="py-3 px-4 min-w-[110px]">Status</th>
                              <th className="py-3 px-4 min-w-[80px]">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f1f3f7]">
                            {displayedStudents.length === 0 ? (
                              <tr>
                                <td colSpan={5} className="text-center py-8 text-slate-400">
                                  No students found matching "{searchStudent}"
                                </td>
                              </tr>
                            ) : (
                              displayedStudents.map((st) => (
                                <tr key={st.roll} className="hover:bg-[#fcfdfd] transition">
                                  <td className="py-3.5 px-4 font-medium text-slate-900">
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
                                  <td className="py-3.5 px-4 text-slate-600 font-mono">{st.roll}</td>
                                  <td className="py-3.5 px-4 text-slate-600">{st.email}</td>
                                  <td className="py-3.5 px-4">
                                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#eaf4fe] text-[#0284c7]">
                                      {st.status}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <button className="text-slate-400 hover:text-slate-700 transition" title="View Student">
                                      <Eye className="w-4 h-4" />
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
                        <span>
                          Showing {filtered.length === 0 ? 0 : startStIndex + 1}-{Math.min(startStIndex + 10, filtered.length)} of {filtered.length} records
                        </span>
                        {totalStudentPages > 1 && (
                          <div className="flex items-center gap-1.5">
                            <button
                              disabled={currentStPage === 1}
                              onClick={() => setStudentPage((p) => Math.max(1, p - 1))}
                              className="px-2.5 py-1 rounded text-slate-500 hover:text-slate-900 disabled:opacity-40 transition"
                            >
                              &lt; Previous
                            </button>
                            {Array.from({ length: totalStudentPages }, (_, i) => i + 1).map((pg) => (
                              <button
                                key={pg}
                                onClick={() => setStudentPage(pg)}
                                className={`w-7 h-7 rounded font-medium transition ${
                                  currentStPage === pg
                                    ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                                    : 'text-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                {pg}
                              </button>
                            ))}
                            <button
                              disabled={currentStPage === totalStudentPages}
                              onClick={() => setStudentPage((p) => Math.min(totalStudentPages, p + 1))}
                              className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 transition"
                            >
                              Next &gt;
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* ========================================================= */}
            {/* 5. ATTENDANCE TAB (WhatsApp Image 2026-09-17 at 9.09.42 PM) */}
            {/* ========================================================= */}
            {activeTab === 'Attendance' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Date Picker top right */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    Mark attendance for current class session
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-xs text-slate-500 font-semibold mb-1">Select a Date</span>
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-[#e2e8f0] rounded-lg bg-white text-xs font-semibold text-slate-800 shadow-2xs">
                      <span>{selectedDate}</span>
                    </div>
                  </div>
                </div>

                {/* 4 Attendance Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total Students */}
                  <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{students.length}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">Total Students</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-200">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Present */}
                  <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{presentCount}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">Present</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Absent */}
                  <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{absentCount}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">Absent</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center border border-red-200">
                      <XCircle className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Leave */}
                  <div className="bg-white border border-[#edf0f5] rounded-xl p-4 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{leaveCount}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">Leave</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Search, Rows selector and Quick actions for teacher */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs pt-1">
                  <div className="flex items-center gap-2 flex-1 max-w-sm">
                    <div className="relative w-full">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search student by name or roll #..."
                        value={attendanceSearch}
                        onChange={(e) => {
                          setAttendanceSearch(e.target.value);
                          setAttendancePage(1);
                        }}
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-blue-500 text-slate-800"
                      />
                    </div>
                    {attendanceSearch && (
                      <button
                        onClick={() => setAttendanceSearch('')}
                        className="text-slate-400 hover:text-slate-600 text-xs px-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="flex items-center flex-wrap gap-2 justify-end">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span>Rows:</span>
                      <select
                        value={attendancePageSize}
                        onChange={(e) => {
                          const val = e.target.value === 'All' ? 'All' : Number(e.target.value);
                          setAttendancePageSize(val);
                          setAttendancePage(1);
                        }}
                        className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium focus:outline-none"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value="All">All ({students.length})</option>
                      </select>
                    </div>

                    <button
                      onClick={() => markAll('PRESENT')}
                      className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-medium transition"
                    >
                      Mark All Present
                    </button>
                    <button
                      onClick={() => markAll('NOT MARKED')}
                      className="px-2.5 py-1 rounded bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 font-medium transition"
                    >
                      Reset Status
                    </button>
                    <button
                      onClick={() => setAddStudentOpen(true)}
                      className="px-2.5 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 font-medium transition flex items-center gap-1 shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Student
                    </button>
                  </div>
                </div>

                {/* Attendance Marking Table & Dynamic Pagination */}
                {(() => {
                  const filtered = students.filter(
                    (st) =>
                      st.name.toLowerCase().includes(attendanceSearch.toLowerCase()) ||
                      st.roll.includes(attendanceSearch)
                  );
                  const pageSize = attendancePageSize === 'All' ? filtered.length || 1 : attendancePageSize;
                  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
                  const currentPage = Math.min(attendancePage, totalPages);
                  const startIndex = (currentPage - 1) * pageSize;
                  const displayedStudents = attendancePageSize === 'All' ? filtered : filtered.slice(startIndex, startIndex + pageSize);

                  return (
                    <>
                      <div className="overflow-x-auto border border-[#edf0f5] rounded-xl">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-[#edf0f5] text-slate-500 font-medium bg-[#fafbfd]">
                              <th className="py-3 px-4 min-w-[70px]">#</th>
                              <th className="py-3 px-4 min-w-[130px]">Roll #</th>
                              <th className="py-3 px-4 min-w-[240px]">Full Name</th>
                              <th className="py-3 px-4 min-w-[140px]">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f1f3f7]">
                            {displayedStudents.length === 0 ? (
                              <tr>
                                <td colSpan={4} className="text-center py-8 text-slate-400">
                                  No students found matching "{attendanceSearch}"
                                </td>
                              </tr>
                            ) : (
                              displayedStudents.map((st, idx) => (
                                <tr key={st.roll} className="hover:bg-[#fcfdfd] transition">
                                  <td className="py-3.5 px-4 font-normal text-slate-400 text-xs">
                                    {startIndex + idx + 1}
                                  </td>
                                  <td className="py-3.5 px-4 font-mono text-slate-600 font-medium">{st.roll}</td>
                                  <td className="py-3.5 px-4 font-medium text-slate-900">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-[10px]">
                                        {st.name.charAt(0)}
                                      </div>
                                      <span>{st.name}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-4">
                                    <button
                                      onClick={() => cycleAttendance(st.roll)}
                                      title="Click to cycle status (Present / Absent / Leave / Not Marked)"
                                      className={`px-3 py-1 rounded text-xs font-semibold tracking-wide border transition ${
                                        st.attendance === 'NOT MARKED'
                                          ? 'bg-[#f8fafc] text-slate-600 border-[#e2e8f0] hover:bg-slate-100'
                                          : st.attendance === 'PRESENT'
                                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                          : st.attendance === 'ABSENT'
                                          ? 'bg-red-50 text-red-700 border-red-200'
                                          : 'bg-amber-50 text-amber-700 border-amber-200'
                                      }`}
                                    >
                                      {st.attendance}
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Attendance Pagination */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs text-slate-500">
                        <span>
                          Showing {filtered.length === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + displayedStudents.length, filtered.length)} of {filtered.length} students
                          {filtered.length !== students.length && ` (filtered from ${students.length})`}
                        </span>
                        {attendancePageSize !== 'All' && totalPages > 1 && (
                          <div className="flex items-center gap-1.5">
                            <button
                              disabled={currentPage === 1}
                              onClick={() => setAttendancePage((p) => Math.max(1, p - 1))}
                              className="px-2.5 py-1 rounded text-slate-500 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-500 transition"
                            >
                              &lt; Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
                              if (
                                pg === 1 ||
                                pg === totalPages ||
                                (pg >= currentPage - 1 && pg <= currentPage + 1)
                              ) {
                                return (
                                  <button
                                    key={pg}
                                    onClick={() => setAttendancePage(pg)}
                                    className={`w-7 h-7 rounded font-medium transition ${
                                      currentPage === pg
                                        ? 'border border-blue-500 text-blue-600 bg-blue-50/50'
                                        : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                  >
                                    {pg}
                                  </button>
                                );
                              } else if (pg === currentPage - 2 || pg === currentPage + 2) {
                                return (
                                  <span key={pg} className="text-slate-400 px-1">
                                    ...
                                  </span>
                                );
                              }
                              return null;
                            })}
                            <button
                              disabled={currentPage === totalPages}
                              onClick={() => setAttendancePage((p) => Math.min(totalPages, p + 1))}
                              className="px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-600 transition"
                            >
                              Next &gt;
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NEW ASSIGNMENT MODAL */}
      {newAssignmentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-lg w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Create New Assignment</h3>
              <button
                onClick={() => setNewAssignmentOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAssignment} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Assignment Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next.js Full Stack Authentication"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description / Specification
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the tasks, requirements and submission link..."
                  value={newAssignment.description}
                  onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Topics (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="NextJS, Prisma, Auth"
                    value={newAssignment.topics}
                    onChange={(e) => setNewAssignment({ ...newAssignment, topics: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={newAssignment.dueDate}
                    onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hackathonCheck"
                  checked={newAssignment.isHackathon}
                  onChange={(e) =>
                    setNewAssignment({ ...newAssignment, isHackathon: e.target.checked })
                  }
                  className="w-4 h-4 text-purple-600 rounded"
                />
                <label htmlFor="hackathonCheck" className="text-xs text-slate-700 font-medium">
                  Mark as Hackathon Challenge
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setNewAssignmentOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
                >
                  Publish Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FEEDBACK MODAL */}
      {feedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Faculty Feedback</h3>
              <button
                onClick={() => setFeedbackOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedbackSent ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Feedback Submitted</h4>
                <p className="text-xs text-slate-500">Thank you for sharing your thoughts!</p>
                <button
                  onClick={() => setFeedbackOpen(false)}
                  className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-600">
                  Have comments or system improvements regarding courses, batch 20, or attendance?
                </p>
                <textarea
                  rows={4}
                  placeholder="Type your feedback here..."
                  className="w-full p-3 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-600"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setFeedbackOpen(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setFeedbackSent(true)}
                    className="px-4 py-1.5 text-xs bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Send Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ADD STUDENT MODAL */}
      {addStudentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Add Student to Batch 20</h3>
              <button
                onClick={() => setAddStudentOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Zeeshan"
                  value={newStudentData.name}
                  onChange={(e) =>
                    setNewStudentData({ ...newStudentData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Roll Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 774160"
                  value={newStudentData.roll}
                  onChange={(e) =>
                    setNewStudentData({ ...newStudentData, roll: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. student@example.com"
                  value={newStudentData.email}
                  onChange={(e) =>
                    setNewStudentData({ ...newStudentData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setAddStudentOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
