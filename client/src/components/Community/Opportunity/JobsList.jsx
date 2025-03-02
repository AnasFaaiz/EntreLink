import React, { useState } from 'react';

// Sample job data - replace with your actual data
const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹8-12 LPA",
    category: "job"
  },
  {
    id: 2,
    title: "Product Management Intern",
    company: "StartupX",
    location: "Remote",
    type: "Internship",
    duration: "6 months",
    stipend: "₹20,000/month",
    category: "internship"
  }
];

const JobsList = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobListings.filter(job => {
    const matchesFilter = filter === 'all' || job.category === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Opportunities</h1>
        <div style={styles.filters}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">All Opportunities</option>
            <option value="job">Jobs</option>
            <option value="internship">Internships</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>
      </header>

      <div style={styles.jobList}>
        {filteredJobs.map(job => (
          <article key={job.id} style={styles.jobCard}>
            <div style={styles.jobHeader}>
              <h2 style={styles.jobTitle}>{job.title}</h2>
              <span style={styles.companyName}>{job.company}</span>
            </div>
            
            <div style={styles.jobDetails}>
              <span style={styles.tag}>{job.type}</span>
              <span style={styles.location}>{job.location}</span>
              {job.salary && <span style={styles.salary}>{job.salary}</span>}
              {job.stipend && <span style={styles.salary}>{job.stipend}</span>}
            </div>

            <div style={styles.cardFooter}>
              <button style={styles.applyButton}>Apply Now</button>
              <button style={styles.saveButton}>Save</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    minHeight: '80vh',
    minWidth: '68vw', 
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    margin: '0',
  },
  filters: {
    display: 'flex',
    gap: '15px',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    width: '200px',
  },
  filterSelect: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  jobList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  jobHeader: {
    marginBottom: '12px',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '4px',
  },
  companyName: {
    color: '#666',
    fontSize: '14px',
  },
  jobDetails: {
    display: 'flex',
    gap: '12px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e3f2fd',
    color: '#1e88e5',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '12px',
  },
  location: {
    color: '#888',
    fontSize: '14px',
  },
  salary: {
    color: '#2e7d32',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardFooter: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
  },
  applyButton: {
    backgroundColor: '#1e88e5',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    flex: '1',
  },
  saveButton: {
    backgroundColor: 'transparent',
    color: '#666',
    border: '1px solid #ddd',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
};

export default JobsList;