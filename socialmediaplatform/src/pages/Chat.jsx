import React from 'react';
import ChatBox from '../components/ChatBox';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const friend = user.friends?.[0] || 'alice';

  return (
    <div className="container mt-4">
      <h3>💬 Chat</h3>
      <ChatBox withUser={friend} />
    </div>
  );
};

export default Chat;
