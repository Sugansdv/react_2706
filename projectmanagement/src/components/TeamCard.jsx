import React from 'react';

const TeamCard = ({ team }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{team.name}</h5>
      <p className="card-text">Members: {team.members.join(', ')}</p>
      <p className="card-text">Projects: {team.projects.join(', ')}</p>
    </div>
  </div>
);

export default TeamCard;