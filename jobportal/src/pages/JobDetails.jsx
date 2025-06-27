// src/pages/JobDetails.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { state } = useLocation();
  const job = state?.job;
  const nav = useNavigate();

  if (!job) return <p className="container mt-4">No job data available.</p>;

  return (
    <div className="container mt-4">
      <button className="btn btn-link" onClick={() => nav(-1)}>← Back</button>
      <h3>{job.title}</h3>
      <p><strong>{job.company_name}</strong></p>
      <p><em>{job.candidate_required_location}</em></p>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <a className="btn btn-success mt-3" href={job.url} target="_blank">Apply on Remotive</a>
    </div>
  );
};

export default JobDetails;
