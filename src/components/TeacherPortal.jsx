import React, { useState } from 'react';
import TeacherTopBanner from './teacher/TeacherTopBanner';
import TeacherSidebar from './teacher/TeacherSidebar';
import TeacherHeader from './teacher/TeacherHeader';
import TeacherAssignmentsTab from './teacher/TeacherAssignmentsTab';
import TeacherCourseProgressTab from './teacher/TeacherCourseProgressTab';
import TeacherQuizzesTab from './teacher/TeacherQuizzesTab';
import TeacherStudentsTab from './teacher/TeacherStudentsTab';
import TeacherAttendanceTab from './teacher/TeacherAttendanceTab';
import TeacherModals from './teacher/TeacherModals';

export default function TeacherPortal({ onBack, onSwitchPortal }) {
  const [activeTab, setActiveTab] = useState('Assignments');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchStudent, setSearchStudent] = useState('');
  const [studentFilter, setStudentFilter] = useState('All');
  const [selectedDate, setSelectedDate] = useState('Tue Sep 15 2026');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [newAssignmentOpen, setNewAssignmentOpen] = useState(false);

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

  // Assignments List (13 items)
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

  // Quizzes list
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

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentData.name.trim() || !newStudentData.roll.trim()) return;
    const added = {
      roll: newStudentData.roll.trim(),
      name: newStudentData.name.trim(),
      email:
        newStudentData.email.trim() ||
        `${newStudentData.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      status: 'ENROLLED',
      attendance: 'NOT MARKED',
    };
    setStudents((prev) => [added, ...prev]);
    setNewStudentData({ name: '', roll: '', email: '' });
    setAddStudentOpen(false);
  };

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

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title) return;
    const item = {
      id: Date.now(),
      title:
        newAssignment.title.length > 20
          ? newAssignment.title.slice(0, 18) + '...'
          : newAssignment.title,
      fullTitle: newAssignment.title,
      description: newAssignment.description || 'Assignment details and specifications...',
      topics: newAssignment.topics ? newAssignment.topics.split(',').map((t) => t.trim()) : [],
      topicCount: null,
      dueDate: newAssignment.dueDate,
      isHackathon: newAssignment.isHackathon,
    };
    setAssignments([item, ...assignments]);
    setNewAssignmentOpen(false);
    setNewAssignment({
      title: '',
      description: '',
      topics: '',
      dueDate: 'Sep 25, 2026',
      isHackathon: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#fbfcfd] text-[#1e293b] font-sans flex flex-col antialiased">
      {/* Top Banner with Portal Switcher */}
      <TeacherTopBanner onBack={onBack} onSwitchPortal={onSwitchPortal} />

      <div className="flex grow">
        {/* Modular Left Slim Sidebar */}
        <TeacherSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        {/* Main Body Area */}
        <div className="grow flex flex-col min-w-0 bg-white">
          <TeacherHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenFeedback={() => {
              setFeedbackSent(false);
              setFeedbackOpen(true);
            }}
            onOpenNewAssignment={() => setNewAssignmentOpen(true)}
          />

          {/* Dynamic Tab Contents */}
          <div className="p-3.5 sm:p-6 grow max-w-7xl w-full mx-auto">
            {activeTab === 'Assignments' && (
              <TeacherAssignmentsTab
                assignments={assignments}
                assignmentPage={assignmentPage}
                setAssignmentPage={setAssignmentPage}
              />
            )}

            {activeTab === 'Course Progress' && <TeacherCourseProgressTab />}

            {activeTab === 'Quizzes' && <TeacherQuizzesTab quizzes={quizzes} />}

            {activeTab === 'Students' && (
              <TeacherStudentsTab
                students={students}
                searchStudent={searchStudent}
                setSearchStudent={setSearchStudent}
                studentFilter={studentFilter}
                setStudentFilter={setStudentFilter}
                studentPage={studentPage}
                setStudentPage={setStudentPage}
              />
            )}

            {activeTab === 'Attendance' && (
              <TeacherAttendanceTab
                students={students}
                selectedDate={selectedDate}
                presentCount={presentCount}
                absentCount={absentCount}
                leaveCount={leaveCount}
                attendanceSearch={attendanceSearch}
                setAttendanceSearch={setAttendanceSearch}
                attendancePageSize={attendancePageSize}
                setAttendancePageSize={setAttendancePageSize}
                attendancePage={attendancePage}
                setAttendancePage={setAttendancePage}
                markAll={markAll}
                cycleAttendance={cycleAttendance}
                onOpenAddStudent={() => setAddStudentOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Modular Popups / Modals */}
      <TeacherModals
        newAssignmentOpen={newAssignmentOpen}
        setNewAssignmentOpen={setNewAssignmentOpen}
        newAssignment={newAssignment}
        setNewAssignment={setNewAssignment}
        handleCreateAssignment={handleCreateAssignment}
        feedbackOpen={feedbackOpen}
        setFeedbackOpen={setFeedbackOpen}
        feedbackSent={feedbackSent}
        setFeedbackSent={setFeedbackSent}
        addStudentOpen={addStudentOpen}
        setAddStudentOpen={setAddStudentOpen}
        newStudentData={newStudentData}
        setNewStudentData={setNewStudentData}
        handleAddStudent={handleAddStudent}
      />
    </div>
  );
}
