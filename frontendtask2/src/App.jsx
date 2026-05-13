import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './landing';
import LoginForm from './components/LoginForm';

/**
 * Main App Component
 * Clean routing structure - handles navigation between landing page and authentication
 */
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing page route - default route */}
          <Route path="/" element={<Landing />} />
          
          {/* Authentication page route - login/signup forms */}
          <Route path="/auth" element={<LoginForm />} />
          
          {/* Catch all route - redirect to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}