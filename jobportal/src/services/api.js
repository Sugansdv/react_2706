import axios from 'axios';

const API = axios.create({
  baseURL: 'https://remotive.com/api/remote-jobs',
});

export const fetchJobs = (params = {}) => API.get('', { params })
  .then(res => res.data.jobs);