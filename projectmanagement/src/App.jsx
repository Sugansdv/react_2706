import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import ProjectBoard from './pages/ProjectBoard';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/projects" element={<ProjectBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;