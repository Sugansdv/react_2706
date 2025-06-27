import React from 'react';
import { Link } from 'react-router-dom';

const polls = [
  { id: 1, question: 'What is your favorite programming language?', options: ['JavaScript', 'Python', 'Java', 'C++'] },
  { id: 2, question: 'Which frontend framework do you prefer?', options: ['React', 'Vue', 'Angular', 'Svelte'] },
];

const PollList = () => (
  <div>
    <h2 className="mb-4">📝 Available Polls</h2>
    {polls.map((poll) => (
      <div key={poll.id} className="card mb-3">
        <div className="card-body">
          <h5>{poll.question}</h5>
          <Link className="btn btn-primary me-2" to={`/vote/${poll.id}`}>Vote</Link>
          <Link className="btn btn-outline-secondary" to={`/results/${poll.id}`}>Results</Link>
        </div>
      </div>
    ))}
  </div>
);

export default PollList;
