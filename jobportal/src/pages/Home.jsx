// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import JobCard from '../components/JobCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs({ limit: 10 })
      .then(setJobs)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="container mt-4">Loading jobs...</p>;

  return (
    <div className="container mt-4">
      <h3>Latest Remote Jobs</h3>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onView={() => navigate(`/jobs/${job.id}`, { state: { job } })}
        />
      ))}
    </div>
  );
};

export default Home;
