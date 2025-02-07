import React, { useState } from 'react';

const PersonCard = ({ name, role, startupName, profilePic, tag,onConnect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeColor = (tag) => {
    switch (tag) {
      case "Founder": return "#DAA520";  
      case "Mentor": return "#0047AB";   
      case "EDC": return "	#800080";
      case "Student": return "#FF4500";
      case "Investor": return "#008000";
      default: return "#666";            
    }
  };

  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#0e0d3e',
      color: '#E0E0E0',
      width: '200px',
      textAlign: 'center',
      transition: "all 0.3s ease",
      boxShadow: "0px 4px 8px rgba(218, 165, 32, 0.2)",
      transform: isHovered ? "translateY(-5px)" : "translateY(0)",
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
      top: '10px',
      right: '10px',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '12px',
      backgroundColor: getBadgeColor(tag),
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    role: {
      fontSize: '16px',
      color: '#A0A0A0',
    },
    startupName: {
      fontSize: '14px',
      color: '#C0C0C0',
    },
    connectButton: {
      backgroundColor: '#008B8B',
      color: '#0D1117',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: "0px 0px 12px rgba(218, 165, 32, 0.4)",
    },
    connectButtonHover: {
      backgroundColor: '#DAA520',
      color: "#121829",
      boxShadow: "0px 0px 16px rgba(218, 165, 32, 0.8)",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.profileContainer}>
        <img src={profilePic} alt={name} style={styles.profilePic} />
        <div style={{ ...styles.tag, backgroundColor: getBadgeColor(tag) }}>
          {tag}
        </div>
      </div>
      <h3 style={styles.name}>{name}</h3>
      <div style={styles.roleContainer}>
        <p style={styles.role}>{role} • <span style={styles.startupName}>{startupName}</span></p>
      </div>
      <button 
        style={isHovered ? { ...styles.connectButton, ...styles.connectButtonHover } : styles.connectButton} 
        onClick={onConnect}
      >
      Connect
      </button>
    </div>
  );
};

export default PersonCard;