import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote/:pollId" element={<Vote />} />
          <Route path="/results/:pollId" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
