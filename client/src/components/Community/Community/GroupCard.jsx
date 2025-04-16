import React from "react";
import PropTypes from 'prop-types';

const GroupCard = ({ group, isJoined, onJoin }) => {
  // Destructure group properties
  const { name, description, tags, keywords, memberCount, activityLevel } = group;

  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "technology": return "#4CAF50";
      case "startups": return "#2196F3"; 
      case "innovation": return "#FF5722";
      case "education": return "#FFC107"; 
      default: return "#008080"; 
    }
  };

  const styles = {
    card: {
      border: "1px solid #008080",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      backgroundColor: "#1E1E1E",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    header: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#E0E0E0",
    },
    description: {
      color: "#B0B0B0",
      fontSize: "14px",
      marginTop: "8px",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    tag: {
      fontSize: "12px",
      padding: "4px 12px",
      borderRadius: "4px",
      color: "#FFFFFF",
      fontWeight: "500",
    },
    stats: {
      display: "flex",
      gap: "20px",
      color: "#B0B0B0",
      fontSize: "14px",
    },
    joinButton: {
      padding: '8px 16px',
      backgroundColor: '#008080',
      color: '#E0E0E0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#006666',
      },
    },
    joinedButton: {
      padding: '8px 16px',
      backgroundColor: '#2C2C2C',
      color: '#008080',
      border: '2px solid #008080',
      borderRadius: '4px',
      cursor: 'default',
      fontSize: '14px',
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerContainer}>
        <div>
          <div style={styles.header}>{name}</div>
          <div style={styles.description}>{description}</div>
        </div>
        <button
          style={isJoined ? styles.joinedButton : styles.joinButton}
          onClick={onJoin}
          disabled={isJoined}
        >
          {isJoined ? 'Joined' : 'Join Squad'}
        </button>
      </div>

      <div style={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} style={{ ...styles.tag, backgroundColor: getTagColor(tag) }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={styles.stats}>
        <div>👥 {memberCount} member{memberCount !== 1 ? 's' : ''}</div>
        <div>📈 {activityLevel} activity</div>
      </div>
    </div>
  );
};

GroupCard.propTypes = {
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.arrayOf(PropTypes.string),
    memberCount: PropTypes.number,
    activityLevel: PropTypes.string,
    privacy: PropTypes.string,
    profilePic: PropTypes.string,
  }).isRequired,
  isJoined: PropTypes.bool,
  onJoin: PropTypes.func,
};

GroupCard.defaultProps = {
  isJoined: false,
  onJoin: () => {},
};

export default GroupCard;