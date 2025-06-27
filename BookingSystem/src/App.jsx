import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import BookNow from './pages/BookNow';
import MyAppointments from './pages/MyAppointments';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/my-bookings" element={<MyAppointments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
