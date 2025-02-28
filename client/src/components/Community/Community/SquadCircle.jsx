import React from 'react';

const SquadCircle = () => {
  return (
    <div style={styles.container}>
      <img src='./images/EntreLink.png' alt="name" style={styles.circle} />
      <p style={styles.name}>Tech</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '15%',
    
  },
  circle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid black',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#E0E0E0',
    textAlign: 'center',
  },
};

export default SquadCircle;