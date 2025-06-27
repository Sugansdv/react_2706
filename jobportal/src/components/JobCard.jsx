import React from 'react';

const JobCard = ({ job, onView }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5>{job.title}</h5>
      <p><strong>{job.company_name}</strong> – {job.category}</p>
      <p><em>{job.candidate_required_location}</em></p>
      <button className="btn btn-primary" onClick={() => onView(job)}>View Details</button>
    </div>
  </div>
);

export default JobCard;