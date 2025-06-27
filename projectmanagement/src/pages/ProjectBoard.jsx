import React from 'react';
import { projects } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const ProjectBoard = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-4">
      <h3>Projects</h3>
      {user?.role === 'admin' && <button className="btn btn-success mb-3">+ Add Project</button>}
      <div className="row">
        {projects.map((proj) => (
          <div className="col-md-4 mb-3" key={proj.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{proj.name}</h5>
                <p>Status: {proj.status}</p>
                <p>Assigned to: {proj.assignedTo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;