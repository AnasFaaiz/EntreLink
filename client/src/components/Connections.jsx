import React from 'react';
import Navbar from './Navbar';
import PersonCard from './Connections/PersonCard';

const Connections = () => {
  const recommendingPeoples = [
    { name: 'Alice Johnson', role: 'CEO', startupName: 'Tech Innovators', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
    { name: 'Bob Smith', role: 'CTO', startupName: 'AI Solutions', profilePic: 'https://via.placeholder.com/80', tag: 'Student' },
    { name: 'Charlie Davis', role: 'Founder', startupName: 'Innovation Labs', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
    { name: 'Emma Wilson', role: 'Product Manager', startupName: 'Tech Ventures', profilePic: 'https://via.placeholder.com/80', tag: 'Mentor' },
  ];

  const mentors = [
    { name: 'Charlie Brown', role: 'Mentor', startupName: 'Startup Hub', profilePic: 'https://via.placeholder.com/80', tag: 'Mentor' },
    { name: 'Diana Prince', role: 'Advisor', startupName: 'Business Growth', profilePic: 'https://via.placeholder.com/80', tag: 'Mentor' },
  ];

  const nearbyPeoples = [
    { name: 'Eve Adams', role: 'Founder', startupName: 'HealthTech', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
    { name: 'Frank Wright', role: 'Co-Founder', startupName: 'EduTech', profilePic: 'https://via.placeholder.com/80', tag: 'Student' },
  ];

  const explorePeoples = [
    { name: 'Grace Lee', role: 'Investor', startupName: 'Venture Capital', profilePic: 'https://via.placeholder.com/80', tag: 'Mentor' },
    { name: 'Henry Ford', role: 'Entrepreneur', startupName: 'Auto Innovations', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
  ];

  return (
    <div style={styles.pageWrapper}>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.searchSection}>
          <input 
            type="text" 
            placeholder="Search connections..." 
            style={styles.searchInput} 
          />
          <button style={styles.filterButton}>Filters</button>
        </div>

        {[
          { title: 'Recommending Peoples', data: recommendingPeoples },
          { title: 'Mentors', data: mentors },
          { title: 'Nearby Peoples', data: nearbyPeoples },
          { title: 'Explore Peoples', data: explorePeoples }
        ].map(({ title, data }) => (
          <div key={title} style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>{title}</h2>
              <a href="#" style={styles.seeAllLink}>See All</a>
            </div>
            <div style={styles.gridContainer}>
              {data.map((person, index) => (
                <PersonCard key={index} {...person} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    marginTop: '6%',
    width: '100vw',
    
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  searchInput: {
    flex: 1,
    padding: '12px 20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    marginRight: '15px',
  },
  filterButton: {
    padding: '12px 20px',
    borderRadius: '8px',
    backgroundColor: '#008080',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    marginBottom: '25px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#008080',
    margin: 0,
  },
  seeAllLink: {
    color: '#008080',
    textDecoration: 'none',
    fontWeight: '600',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
};

export default Connections;