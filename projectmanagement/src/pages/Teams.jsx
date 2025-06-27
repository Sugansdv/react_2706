import React from 'react';
import { teams } from '../data/mockData';
import TeamCard from '../components/TeamCard';
import { useAuth } from '../context/AuthContext';

const Teams = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4">
      <h3>Teams</h3>
      {user?.role === 'admin' && <button className="btn btn-primary mb-3">+ Create Team</button>}
      {teams.map((team) => <TeamCard key={team.id} team={team} />)}
    </div>
  );
};

export default Teams;