import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mt-4">
      <h3>👤 Profile</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Friends:</strong> {user.friends?.join(', ') || 'No friends yet'}</p>
    </div>
  );
};

export default Profile;
