import React, { useState } from 'react';

const ChatBox = ({ withUser }) => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setChatLog([...chatLog, { sender: 'me', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-header">Chat with {withUser}</div>
      <div className="card-body" style={{ height: '200px', overflowY: 'auto' }}>
        {chatLog.map((msg, idx) => (
          <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <div className="card-footer">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
