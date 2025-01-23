import React, { useState } from "react";
import Navbar from "./Navbar";
import GroupCard from "./Community/GroupCard";
import Category from "./Community/Category";
import SquadCircle from "./Community/SquadCircle";

const Community = () => {
  const groupData = {
    name: "Tech Innovators",
    tags: ["Technology", "Startups", "Innovation"],
    keywords: ["AI", "Blockchain", "Web Development"],
    memberCount: 120,
    activityLevel: "High",
  };

  return (
    <div className="container" style={styles.container}>
      <Navbar />
      <div style={styles.mainContent}>
        <div style={styles.leftColumn}>
          <Category />
        </div>
        
        <div style={styles.rightColumn}>
          <div style={styles.squadsSection}>
          <div style={styles.createSquadSection}>
            <button style={styles.sbutton}>Create Squad</button>
          </div>
            <h4 style={styles.sectionTitle}>My Squads</h4>
            <div style={styles.mysquads}>
              <SquadCircle name="Tech" profilePic="../images/EntreLink.png" />
              <SquadCircle name="Design" profilePic="../images/EntreLink.png" />
              <SquadCircle name="Marketing" profilePic="../images/EntreLink.png" />
            </div>
          </div>

          <div style={styles.exploreSection}>
            <h4 style={styles.sectionTitle}>Explore Squads</h4>
            <div style={styles.groupCardsContainer}>
              <GroupCard group={groupData} />
              <GroupCard group={groupData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
    marginTop: "65px",
    gap: "20px",
  },
  leftColumn: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  createSquadSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  rightColumn: {
    flex: "2",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  sbutton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#008080',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  sectionTitle: {
    fontSize: "17px",
    color: "#008080",
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif",
    textTransform: "uppercase",
    marginBottom: "15px",
    position: "relative",
    paddingBottom: "10px",
    borderBottom: "2px solid #008080",
  },
  mysquads: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  squadsSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  exploreSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  groupCardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
};

export default Community;