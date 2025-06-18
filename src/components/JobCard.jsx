import React from 'react';

export default function JobCard({ job }) {
  return (
    <div className="card">
      <h2>{job.title}</h2>
      <p>Company: <strong>{job.company}</strong></p>
      <p>Location: {job.location}</p>
      <p>Type: {job.type}</p>
    </div>
  );
}
