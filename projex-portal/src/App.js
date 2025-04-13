import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentLogin from './components/login/StudentLogin';
import ProfessorLogin from './components/login/ProfessorLogin';
import Signup from './components/signup/Signup';
import Start from './components/start_page/start';
import CommentSection from './components/comment';
import StudentDashboard from "./pages/student/StudentDashboard"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/professor-login" element={<ProfessorLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comments" element={<CommentSection />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
