import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import GroupCard from "./Community/GroupCard";
import Category from "./Community/Category";

const Community = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const groupData = {
    name: "Tech Innovators",
    tags: ["Technology", "Startups", "Innovation"],
    keywords: ["AI", "Blockchain", "Web Development"],
    memberCount: 120,
    activityLevel: "High",
  };

  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        <Category />
       
      <div className="SquadContainer" style={styles.SquadContainer}>
        <div className="SquadButton" style={styles.SquadButton}>
          <button style={styles.Sbutton}>Create Squad</button>
        </div>
        <div style={styles.gridContainer}>
        <h4 style={{ ...styles.categories, marginTop: "5px", position: "relative" }}>
           My Squads:
          <span style={{
            position: "absolute", 
            bottom: "0", 
            left: "0", 
            width: "100%", 
            height: "2px", 
            backgroundColor: "#008080",
            transform: "scaleX(1.5)", 
            transformOrigin: "bottom left"
          }} />
        </h4>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <GroupCard group={groupData} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <GroupCard group={groupData} />
          </div>
         
          <h4 style={{ ...styles.categories, marginTop: "40px", position: "relative" }}>
           Explore Squads:
          <span style={{
            position: "absolute", 
            bottom: "0", 
            left: "0", 
            width: "100%", 
            height: "2px", 
            backgroundColor: "#008080",
            transform: "scaleX(1.5)", 
            transformOrigin: "bottom left"
          }} />
        </h4>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <GroupCard group={groupData} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <GroupCard group={groupData} />
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: "flex",
    position: "relative",
    minHeight: "calc(100vh - 65px)",
    marginTop: "65px",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    top: "0",
    left: "3px",
    zIndex: 100,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "10px",
    backgroundColor: "#66B2B2",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    // width: "35%",
    position: "fixed",
    top: "58px",
    left: "10px",
  },
  // toggleButton: {
  //   fontSize: "24px",
  //   cursor: "pointer",
  //   margin: "3px",
  //   backgroundColor: "transparent",
  //   border: "none",
  //   color: "#008080",
  // },
  
  SquadButton: {
    position: "fixed",  
    top: "75px",       
    right: "20px",      
    fontSize: "13px",     
      
  },
  Sbutton: {
    display: 'flex',
    alignItems: 'center',
    // padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#008080', // Teal green hex code
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  }, 
  categories: {
    fontSize: "17px",
    color: "#008080", // Matches the theme
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif", // Clean and professional font
    textTransform: "uppercase", // Optional for a bold look
    margin: "5px",
    padding: "0",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    padding: "10px",
  },
};

export default Community;