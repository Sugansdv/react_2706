import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quiz/:courseId" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
