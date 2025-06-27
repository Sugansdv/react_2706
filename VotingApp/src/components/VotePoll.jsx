import React, { useState } from 'react';

const pollData = {
  1: { question: 'What is your favorite programming language?', options: ['JavaScript', 'Python', 'Java', 'C++'] },
  2: { question: 'Which frontend framework do you prefer?', options: ['React', 'Vue', 'Angular', 'Svelte'] },
};

const VotePoll = ({ pollId }) => {
  const poll = pollData[pollId];
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleVote = () => {
    let votes = JSON.parse(localStorage.getItem('votes') || '{}');
    if (!votes[pollId]) votes[pollId] = {};
    votes[pollId][selected] = (votes[pollId][selected] || 0) + 1;
    localStorage.setItem('votes', JSON.stringify(votes));
    setSubmitted(true);
  };

  return (
    <div>
      <h3 className="mb-4">{poll.question}</h3>
      {poll.options.map((option, idx) => (
        <div className="form-check mb-2" key={idx}>
          <input
            type="radio"
            className="form-check-input"
            name="option"
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
            disabled={submitted}
          />
          <label className="form-check-label">{option}</label>
        </div>
      ))}
      {!submitted ? (
        <button className="btn btn-success mt-3" disabled={!selected} onClick={handleVote}>Submit Vote</button>
      ) : (
        <div className="alert alert-success mt-3"> Vote submitted successfully!</div>
      )}
    </div>
  );
};

export default VotePoll;
