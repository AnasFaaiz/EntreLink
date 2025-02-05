import React from "react";

const GroupCard = ({ group }) => {
  // Destructure group properties
  const { name, tags, keywords, memberCount, activityLevel } = group;

  // Function to get background color for tags
  const getTagColor = (tag) => {
    switch (tag) {
      case "Technology": return "#4CAF50";
      case "Startups": return "#2196F3"; 
      case "Innovation": return "#FF5722";
      case "education": return "#FFC107"; 
      default: return "#E0E0E0"; 
    }
  };

  // Styles
  const styles = {
    card: {
      border: "0.5px dotted black",
      borderRadius: "10px",
      boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
      padding: "13px",
      margin: "5px",
      maxWidth: "300px",
      backgroundColor: "rgba(18, 24, 41, 0.8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    header: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#E0E0E0",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "5px",
      marginBottom: "10px",
    },
    tag: {
      fontSize: "12px",
      padding: "5px 10px",
      borderRadius: "5px",
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    stats: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "15px",
    },
    button: {
      padding: "10px 15px",
      fontSize: "14px",
      fontWeight: "bold",
      backgroundColor: "#DAA520",
      color: "#001F3F",
      border: "none",
      borderRadius: "100px",
      cursor: "pointer",
      textAlign: "center",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#006666",
    },
  };

  return (
    <div style={styles.card}>
      {/* Group Name and Join Button */}
      <div style={styles.headerContainer}>
        <div style={styles.header}>{name}</div>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Join
        </button>
      </div>

      {/* Tags and Keywords */}
      <div style={styles.tags}>
        {tags.map((tag, index) => (
          <div key={index} style={{ ...styles.tag, backgroundColor: getTagColor(tag) }}>
            {tag}
          </div>
        ))}
      </div>

      {/* Member Count and Activity Level */}
      <div style={styles.stats}>
        <div>👥 Members: {memberCount}</div>
        <div>📈 Activity: {activityLevel}</div>
      </div>
    </div>
  );
};

export default GroupCard;