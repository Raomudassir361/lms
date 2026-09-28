import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PortalSelection from './components/PortalSelection';
import StudentPortal from './components/StudentPortal';
import TeacherPortal from './components/TeacherPortal';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  // Default to the first page (Portal Selection) so it immediately opens on the first screen
  const [activePortal, setActivePortal] = useState('selection');

  if (activePortal === 'teacher') {
    return (
      <TeacherPortal
        onBack={() => setActivePortal('selection')}
        onSwitchPortal={setActivePortal}
      />
    );
  }

  if (activePortal === 'student') {
    return (
      <StudentPortal
        onBack={() => setActivePortal('selection')}
        onSwitchPortal={setActivePortal}
      />
    );
  }

  if (activePortal === 'admin') {
    return (
      <AdminDashboard
        onBack={() => setActivePortal('selection')}
        onSwitchPortal={setActivePortal}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar activePortal={activePortal} setActivePortal={setActivePortal} />

      <main className="grow p-4 sm:p-6">
        <PortalSelection onSelectPortal={setActivePortal} />
      </main>
    </div>
  );
}
