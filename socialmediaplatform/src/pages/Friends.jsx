import React from 'react';
import { useAuth } from '../context/AuthContext';
import FriendCard from '../components/FriendCard';

const Friends = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4">
      <h3>👥 Friends</h3>
      {user?.friends?.map((f, i) => <FriendCard key={i} name={f} />)}
    </div>
  );
};

export default Friends;