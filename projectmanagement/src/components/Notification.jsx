import React from 'react';

const Notification = ({ message }) => (
  <div className="alert alert-info mt-3" role="alert">
    🔔 {message}
  </div>
);

export default Notification;