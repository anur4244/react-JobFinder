import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  useEffect(() => {
    const search = keyword.toLowerCase();
    const result = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search)
    );
    setFilteredJobs(result);
  }, [keyword, jobs]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4 flex justify-center items-center gap-2">
        🌍 <span>Job Finder</span>
      </h1>

      <div className="max-w-xl mx-auto">
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {job.type}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
