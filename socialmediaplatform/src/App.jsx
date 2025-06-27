import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;