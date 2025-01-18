import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import PersonCard from './Connections/PersonCard';

const Connections = () => {
  const recommendingPeoples = [
    { name: 'Alice Johnson', role: 'CEO', startupName: 'Tech Innovators', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
    { name: 'Bob Smith', role: 'CTO', startupName: 'AI Solutions', profilePic: 'https://via.placeholder.com/80', tag: 'Student' },
    { name: 'Alice Johnson', role: 'CEO', startupName: 'Tech Innovators', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
    { name: 'Alice Johnson', role: 'CEO', startupName: 'Tech Innovators', profilePic: 'https://via.placeholder.com/80', tag: 'EDC' },
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
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.pageTitle}></h1>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recommending Peoples</h2>
          <div style={styles.gridContainer}>
            {recommendingPeoples.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Mentors</h2>
          <div style={styles.gridContainer}>
            {mentors.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Nearby Peoples</h2>
          <div style={styles.gridContainer}>
            {nearbyPeoples.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Explore Peoples</h2>
          <div style={styles.gridContainer}>
            {explorePeoples.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '400px', // Adjust the height as needed
    overflowY: 'auto',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#008080', // Teal green hex code
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(90vw, 1fr))',
    gap: '20px',
  },
};

export default Connections;