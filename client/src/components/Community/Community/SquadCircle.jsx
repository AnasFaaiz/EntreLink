import React from 'react';
import PropTypes from 'prop-types';

const SquadCircle = ({ name, profilePic, onClick }) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <img 
        src={profilePic || './images/EntreLink.png'} 
        alt={name} 
        style={styles.circle} 
      />
      <p style={styles.name}>{name}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '120px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  circle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    border: '2px solid #008080',
    transition: 'border-color 0.2s ease',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#E0E0E0',
    textAlign: 'center',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

SquadCircle.propTypes = {
  name: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
  onClick: PropTypes.func,
};

SquadCircle.defaultProps = {
  profilePic: './images/EntreLink.png',
  onClick: () => {},
};

export default SquadCircle;