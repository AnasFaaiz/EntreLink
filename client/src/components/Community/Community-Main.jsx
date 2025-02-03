import React, { useState } from "react";
import Navbar from "../Navbar";
import GroupCard from "./GroupCard";
import Category from "./Category";
import SquadCircle from "./SquadCircle";
// import /images/EntreLink.png from "./images/EntreLink.png";

const Community = () => {
  const [isHovered, setIsHovered] = useState(false);
  const groupData = {
    name: "Tech Innovators",
    tags: ["Technology", "Startups", "Innovation"],
    keywords: ["AI", "Blockchain", "Web Development"],
    memberCount: 120,
    activityLevel: "High",
  };
  const styles = {
    container: {
      width: '98.7vw',  // Full viewport width
      maxWidth: '100%', // Ensures it doesn't exceed screen width
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor: 'black',
      margin: 0,
      padding: 0,
    },
    mainContent: {
      display: "flex",
      flexDirection: "row",
      width: '100%',
      maxWidth: "1200px", // Maintains max-width for content
      padding: "20px",
      marginTop: "4%",
      margin: "5",
    },
    leftColumn: {
      flex: "0.8",
      display: "flex",
    },
    rightColumn: {
      flex: "2.3",
      backgroundColor: "#1E1E1E",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    createSquadSection: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    sbutton: {
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: isHovered ? '#DAA520' : '#008B8B',
      fontWeight: 'bold',
      color: '#001F3F',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: isHovered ? '0px 0px 16px rgba(218, 165, 32, 0.8)': '0px 0px 10px rgba(218, 165, 32, 0.4)',
      transition: 'background-color 0.3s ease',
    },
    sectionTitle: {
      fontSize: "17px",
      color: "#DAA520",
      fontWeight: "bold",
      fontFamily: "'Roboto', sans-serif",
      textTransform: "uppercase",
      position: "relative",
      borderBottom: "2px solid #DAA520",
      margin : "0",
      marginBottom: "15px",
      width: "70%",
    },
    mysquads: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      color: "#E0E0E0",
    },
    squadsSection: {
      display: "flex",
      flexDirection: "column",
      
    },
    exploreSection: {
      display: "flex",
      flexDirection: "column",
    },
    groupCardsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
    },
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
            <h4 style={styles.sectionTitle}>My Squads</h4>
            <button style={styles.sbutton} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Create Squad</button>
            </div>
            
            <div style={styles.mysquads}>
              <SquadCircle name="Tech" profilePic="./images/EntreLink.png" />
              <SquadCircle name="Design" profilePic="./images/EntreLink.png" />
              <SquadCircle name="Marketing" profilePic="./images/EntreLink.png" />
              <SquadCircle name="Marketing" profilePic="./images/EntreLink.png" />
              <SquadCircle name="Marketing" profilePic="./images/EntreLink.png" />
            </div>
          </div>
          
          <div style={styles.exploreSection}>
            <h4 style={styles.sectionTitle}>Explore Squads</h4>
            <div style={styles.groupCardsContainer}>
              <GroupCard group={groupData} />
              <GroupCard group={groupData} />
              <GroupCard group={groupData} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Community;