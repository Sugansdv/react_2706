import React from 'react';

const FriendCard = ({ name }) => (
  <div className="card mb-2">
    <div className="card-body">
      <p className="card-text">👤 {name}</p>
    </div>
  </div>
);

export default FriendCard;