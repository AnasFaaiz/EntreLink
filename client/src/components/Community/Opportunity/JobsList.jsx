import React, { useState, useEffect } from 'react';

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
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [newOpportunity, setNewOpportunity] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    category: 'job',
    description: ''
  });

  // Add after state declarations
useEffect(() => {
  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Simulating API call - replace with actual API call
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to load opportunities');
      console.error('Error loading jobs:', err);
    } finally {
      setIsLoading(false);
    } 
  };

      fetchJobs();
    }, []);

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmissionStatus('submitting');
      setNotificationMessage('Creating opportunity...');

      const opportunity = {
        id: Date.now(),
        ...newOpportunity,
        createdAt: new Date().toISOString(),
      };

      await new Promise(resolve => setTimeout(resolve, 1000));

    setJobs(prevJobs => [...prevJobs, opportunity]);
    setSubmissionStatus('success');
    setNotificationMessage('Opportunity created successfully!');

    setTimeout(() => {
      setShowCreateDialog(false);
      setSubmissionStatus(null);
      setNotificationMessage('');
      // Reset form
      setNewOpportunity({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        experience: '',
        salary: '',
        category: 'job',
        description: ''
      });
    }, 1500);
  } catch (err) {
    console.error('Error creating opportunity:', err);
    setSubmissionStatus('error');
    setNotificationMessage('Failed to create opportunity. Please try again.');
  }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === 'all' || job.category === filter;
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
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
          <button style={styles.createButton} onClick={() => setShowCreateDialog(true)}>+ Create</button>
          
          {showCreateDialog && (
            <div style={styles.overlay}>
              <div style={styles.dialog}>
                <h2 style={styles.dialogTitle}>Create New Opportunity</h2>
                {submissionStatus && (
                  <div style={{
                    ...styles.notification,
                    ...(submissionStatus === 'success' ? styles.successNotification : 
                      submissionStatus === 'error' ? styles.errorNotification :
                      styles.loadingNotification)
                  }}>
                    <p>{notificationMessage}</p>
                  </div>
                )}

                <form onSubmit={handleCreateSubmit}>
                  <div style={styles.formGroup}>
                    <label>Title</label>
                    <input
                      type="text"
                      value={newOpportunity.title}
                      onChange={(e) => setNewOpportunity({...newOpportunity, title: e.target.value})}
                      required
                      style={styles.input}
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label>Company</label>
                    <input
                      type="text"
                      value={newOpportunity.company}
                      onChange={(e) => setNewOpportunity({...newOpportunity, company: e.target.value})}
                      required
                      style={styles.input}
                      placeholder="Your company name"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label>Location</label>
                    <input
                      type="text"
                      value={newOpportunity.location}
                      onChange={(e) => setNewOpportunity({...newOpportunity, location: e.target.value})}
                      required
                      style={styles.input}
                      placeholder="e.g. Remote, Bangalore"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label>Category</label>
                    <select
                      value={newOpportunity.category}
                      onChange={(e) => setNewOpportunity({...newOpportunity, category: e.target.value})}
                      style={styles.select}
                    >
                      <option value="job">Job</option>
                      <option value="internship">Internship</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label>Type</label>
                    <select
                      value={newOpportunity.type}
                      onChange={(e) => setNewOpportunity({...newOpportunity, type: e.target.value})}
                      style={styles.select}
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label>Experience Required</label>
                    <input
                      type="text"
                      value={newOpportunity.experience}
                      onChange={(e) => setNewOpportunity({...newOpportunity, experience: e.target.value})}
                      style={styles.input}
                      placeholder="e.g. 2-3 years"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label>Salary/Stipend</label>
                    <input
                      type="text"
                      value={newOpportunity.salary}
                      onChange={(e) => setNewOpportunity({...newOpportunity, salary: e.target.value})}
                      style={styles.input}
                      placeholder="e.g. ₹10-15 LPA or ₹20,000/month"
                    />
                  </div>

                  <div style={styles.buttonGroup}>
                    <button 
                      type="submit" 
                      style={{
                        ...styles.submitButton,
                        opacity: submissionStatus === 'submitting' ? 0.7 : 1,
                        cursor: submissionStatus === 'submitting' ? 'not-allowed' : 'pointer'
                      }}
                      disabled={submissionStatus === 'submitting'}
                    >
                      {submissionStatus === 'submitting' ? 'Creating...' : 'Create Opportunity'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateDialog(false)}
                      style={styles.cancelButton}
                      disabled={submissionStatus === 'submitting'}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </header>

      <div style={styles.content}>
      {isLoading && (
        <div style={styles.loadingState}>
          <p>Loading opportunities...</p>
        </div>
      )}

      {error && (
        <div style={styles.errorState}>
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div style={styles.jobList}>
          {filteredJobs.length === 0 ? (
            <div style={styles.emptyState}>
              <p>No opportunities found matching your criteria.</p>
            </div>
          ) : (
            filteredJobs.map(job => (
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
            ))
          )}
        </div>
      )}
    </div>
  </section>
);
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: ' #1E1E1E',
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
  content: {
    flex: 1,
    width: '100%',
  },
  loadingState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#E0E0E0',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    margin: '1rem 0',
  },
  errorState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#ff4444',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    margin: '1rem 0',
  },

  emptyState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#E0E0E0',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    margin: '1rem 0',
  },
  notification: {
    padding: '12px 16px',
    marginBottom: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  },
  
  successNotification: {
    backgroundColor: '#004040',
    color: '#E0E0E0',
    border: '1px solid #008080',
  },
  
  errorNotification: {
    backgroundColor: '#400000',
    color: '#ff4444',
    border: '1px solid #ff4444',
  },
  
  loadingNotification: {
    backgroundColor: '#2C2C2C',
    color: '#E0E0E0',
    border: '1px solid #008080',
  },
  
  title: {
    fontSize: '24px',
    color: ' #008080',
    margin: '0',
  },
  filters: {
    display: 'flex',
    gap: '15px',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '2px solid #008080',
    backgroundColor: ' #2C2C2C',
    color: ' #E0E0E0',
    width: '200px',
  },
  filterSelect: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '2px solid #008080',
    backgroundColor: ' #2C2C2C',
    color: ' #E0E0E0',
    cursor: 'pointer',
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  dialog: {
    backgroundColor: '#1E1E1E',
    padding: '30px',
    borderRadius: '15px',
    width: '500px',
    maxWidth: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    color: '#E0E0E0',
  },
  dialogTitle: {
    color: '#008080',
    marginBottom: '25px',
    textAlign: 'center',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    backgroundColor: '#2C2C2C',
    border: '2px solid #008080',
    borderRadius: '8px',
    color: '#E0E0E0',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    backgroundColor: '#2C2C2C',
    border: '2px solid #008080',
    borderRadius: '8px',
    color: '#E0E0E0',
    fontSize: '16px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '30px',
  },
  submitButton: {
    backgroundColor: '#008080',
    color: '#E0E0E0',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  cancelButton: {
    backgroundColor: '#2C2C2C',
    color: '#E0E0E0',
    border: '1px solid #008080',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
  },

  jobList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  jobCard: {
    backgroundColor: ' #2c2c2c',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,128,128,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(218, 165, 32, 0.4)', // Gold shadow on hover
    }
  },
  jobHeader: {
    marginBottom: '12px',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#008080',
    marginBottom: '4px',
  },
  companyName: {
    color: '#E0E0E0',
    fontSize: '14px',
  },
  jobDetails: {
    display: 'flex',
    gap: '12px',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#004040',
    color: '#E0E0E0',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '12px',
  },
  location: {
    color: '#E0E0E0',
    fontSize: '14px',
  },
  salary: {
    color: '#DAA520',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardFooter: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
  },
  applyButton: {
    backgroundColor: '#008080',
    color: ' #E0E0E0',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    flex: '1',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#DAA520', // Secondary gold
    }
  },
  saveButton: {
    backgroundColor: ' #2c2c2c',
    color: '#e0e0e0',
    border: '1px solid #008080',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#DAA520', // Secondary gold
      color: '#DAA520', // Secondary gold
    }
  },
  createButton: {
    backgroundColor: '#008080',
    color: '#E0E0E0',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#DAA520',
      transform: 'translateY(-1px)',
      boxShadow: '0 2px 4px rgba(218, 165, 32, 0.4)',
    }
  },
};

export default JobsList;