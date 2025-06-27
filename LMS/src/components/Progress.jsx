import React from 'react';

const progressData = [
  { course: 'React Basics', status: 'Completed' },
  { course: 'JavaScript Essentials', status: 'In Progress' },
];

const Progress = () => {
  return (
    <div>
      <h2 className="mb-4">📈 Your Progress</h2>
      <ul className="list-group">
        {progressData.map((item, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            {item.course}
            <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
