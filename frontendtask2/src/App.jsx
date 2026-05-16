import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Attendance from './pages/Attendance';
import AttendanceHistory from './pages/AttendanceHistory';
import Settings from './pages/Settings';

/**
 * Main App Component
 * Clean routing structure - handles navigation between all pages
 */
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing page route - default route */}
          <Route path="/" element={<Landing />} />
          
          {/* Login / Auth routes */}
          <Route path="/login" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Dashboard and main app routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/attendance-history" element={<AttendanceHistory />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Catch all route - redirect to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}