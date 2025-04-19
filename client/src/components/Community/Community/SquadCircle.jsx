import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const SquadCircle = ({ name, profilePic,code,  onClick,  }) => {
  const [isHovered, setIsHovered] = useState(false); 
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDotsClick = (e) => {
    e.stopPropagation(); // Prevent parent onClick from firing
    setShowMenu(!showMenu);
  };

  return (
    <div 
      style={{
        ...styles.container,
        ...(isHovered ? styles.containerHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={styles.imageContainer}>
        <img src={profilePic} alt={name} style={styles.image} />
        {isHovered && (
          <div 
            style={styles.overlay}
            onClick={handleDotsClick}
          >
            <div style={styles.dots}>•••</div>
          </div>
        )}
        {showMenu && (
          <div ref={menuRef} style={styles.menu}>
            <button style={styles.menuItem} onClick={(e) => {
              e.stopPropagation();
              console.log('View Squad');
              setShowMenu(false);
            }}>View Squad</button>
            <button style={styles.menuItem} onClick={(e) => {
              e.stopPropagation();
              console.log('Leave Squad');
              setShowMenu(false);
            }}>Leave Squad</button>
            <button style={styles.menuItem} onClick={(e) => {
              e.stopPropagation();
              console.log('Copy Code');
              navigator.clipboard.writeText(code);
              setShowMenu(false);
            }}>Copy Code</button>
          </div>
        )}
      </div>
      <div style={styles.textContainer}>
        <span style={styles.name}>{name}</span>
        <span style={styles.code}>{code}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
  containerHover: {
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
    transform: 'translateY(-2px)',
  },
  imageContainer: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    // filter: 'blur(0.5px)',
    transition: 'filter 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    ':hover': {
      opacity: 1,
    }
  },
  dots: {
    color: '#E0E0E0',
    fontSize: '24px',
    letterSpacing: '2px',
    userSelect: 'none',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  name: {
    color: '#E0E0E0',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
  },
  code: {
    color: '#008080',
    fontSize: '11px',
    fontFamily: 'monospace',
    letterSpacing: '0.5px',
  },
  menu: {
    position: 'absolute',
    top: '90px',
    right: '-20px',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    padding: '8px 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    minWidth: '120px',
    border: '1px solid #008080',
  },
  menuItem: {
    display: 'block',
    width: '100%',
    padding: '8px 16px',
    border: 'none',
    background: 'none',
    color: '#E0E0E0',
    fontSize: '14px',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 128, 128, 0.2)',
    }
  },
};

SquadCircle.propTypes = {
  name: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
  code: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onLeave: PropTypes.func,
};

SquadCircle.defaultProps = {
  profilePic: './images/EntreLink.png',
  onClick: () => {},
};

export default SquadCircle;