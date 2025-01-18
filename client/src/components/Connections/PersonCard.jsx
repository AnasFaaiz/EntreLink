import React from 'react';

const PersonCard = ({ name, role, startupName, profilePic, tag }) => {
  return (
    <div style={styles.card}>
      <div style={styles.profileContainer}>
        <img src={profilePic} alt={name} style={styles.profilePic} />
        <div style={styles.tag}>{tag}</div>
      </div>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.role}>{role}</p>
      <p style={styles.startupName}>{startupName}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    width: '200px', // Smaller width for the card
    textAlign: 'center',
  },
  profileContainer: {
    position: 'relative',
    marginBottom: '10px',
  },
  profilePic: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  tag: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#008080', // Teal green hex code
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  role: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  startupName: {
    fontSize: '14px',
    color: '#555',
  },
};

export default PersonCard;