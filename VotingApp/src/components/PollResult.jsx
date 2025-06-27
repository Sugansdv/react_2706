import React from 'react';

const pollData = {
  1: { question: 'What is your favorite programming language?', options: ['JavaScript', 'Python', 'Java', 'C++'] },
  2: { question: 'Which frontend framework do you prefer?', options: ['React', 'Vue', 'Angular', 'Svelte'] },
};

const PollResult = ({ pollId }) => {
  const poll = pollData[pollId];
  const votes = JSON.parse(localStorage.getItem('votes') || '{}')[pollId] || {};

  const totalVotes = Object.values(votes).reduce((acc, val) => acc + val, 0);

  return (
    <div>
      <h3 className="mb-4">{poll.question}</h3>
      {poll.options.map((option, idx) => {
        const count = votes[option] || 0;
        const percent = totalVotes ? ((count / totalVotes) * 100).toFixed(1) : 0;
        return (
          <div className="mb-2" key={idx}>
            <strong>{option}</strong>: {count} votes ({percent}%)
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${percent}%` }}
                aria-valuenow={percent}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {percent}%
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PollResult;
