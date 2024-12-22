import React from "react";

const GroupCard = ({ group }) => {
  // Destructure group properties
  const { name, tags, keywords, memberCount, activityLevel } = group;

  // Styles
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "13px",
      margin: "10px",
      maxWidth: "300px",
      backgroundColor: "#ffffff",
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
      backgroundColor: "#f0f8f8",
      borderRadius: "5px",
      color: "#008080",
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
      backgroundColor: "#008080",
      color: "white",
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
          <div key={index} style={styles.tag}>
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
