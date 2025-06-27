import React from 'react';
import { useAuth } from '../context/AuthContext';
import Notification from '../components/Notification';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4">
      <h2>Welcome, {user?.username || 'Guest'} 👋</h2>
      <Notification message="New task assigned to you!" />
    </div>
  );
};

export default Dashboard;