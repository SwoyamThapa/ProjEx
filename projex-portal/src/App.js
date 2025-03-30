import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/start_page/start';
import StudentLogin from './components/login/StudentLogin';
import ProfessorLogin from './components/login/ProfessorLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/professor-login" element={<ProfessorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
