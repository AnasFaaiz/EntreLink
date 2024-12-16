import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "./Navbar"; // Ensure Navbar is correctly imported

const Community = () => {
  const [collapsed, setCollapsed] = useState(false); // State to toggle menu collapse

  const toggleMenu = () => {
    setCollapsed(!collapsed); // Toggle between expanded and collapsed
  };

  return (
    <div style={styles.container}>
      <Navbar />
      {/* Menu Bar */}
      <div style={{ ...styles.menuBar, width: collapsed ? "60px" : "200px" }}>
        <button onClick={toggleMenu} style={styles.toggleButton}>
          {collapsed ? ">" : "<"} {/* Change icon based on state */}
        </button>
        <ul style={styles.menuList}>
          <li style={styles.menuItem}>
            {!collapsed && <span style={styles.icon}>📚</span>} {/* Forum Icon */}
            <Link to="/forums" style={{ ...styles.link, display: collapsed ? "none" : "block" }}>Forums</Link>
          </li>
          {/* Forum Categories */}
          {!collapsed && (
            <>
              <li style={styles.menuItem}>
                <Link to="/forums/business" style={styles.link}>Business</Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/forums/marketing" style={styles.link}>Marketing</Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/forums/fundraising" style={styles.link}>Fundraising</Link>
              </li>
            </>
          )}
          <li style={styles.menuItem}>
            {!collapsed && <span style={styles.icon}>👥</span>} {/* Groups Icon */}
            <Link to="/groups" style={{ ...styles.link, display: collapsed ? "none" : "block" }}>Groups</Link>
          </li>
          {/* Groups */}
          {!collapsed && (
            <>
              <li style={styles.menuItem}>
                <Link to="/groups/startups" style={styles.link}>Tech Startups</Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/groups/investors" style={styles.link}>Investors</Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/groups/entrepreneurs" style={styles.link}>Entrepreneurs</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Top Groups Box (Right Side) */}
      <div style={styles.rightBox}>
        <h3 style={styles.rightBoxTitle}>Top Groups</h3>
        <ul style={styles.rightBoxList}>
          <li style={styles.rightBoxItem}><h4>Tech Startups</h4></li>
          <li style={styles.rightBoxItem}><h4>Investors</h4></li>
          <li style={styles.rightBoxItem}><h4>Shareholders</h4></li>
          <li style={styles.rightBoxItem}><h4>Tech-Researchers</h4></li>
          <li style={styles.rightBoxItem}><h4>Tech-Researchers</h4></li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh", // Full viewport height
  },
  menuBar: {
    position: "fixed", // Fixes it to the left side
    top: 65,
    left: 0,
    height: "100%", // Full viewport height
    backgroundColor: "#333", 
    width: "200px", // Background color
    padding: "1rem", // Padding inside the menu
    boxSizing: "border-box",
    borderRadius: "0 5px 5px 0",
    transition: "width 0.3s ease", // Smooth transition when collapsing
  },
  toggleButton: {
    backgroundColor: "#444",
    color: "white",
    border: "none",
    padding: "0.5rem",
    marginBottom: "1rem",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "1em",
    position: "absolute", // Makes the button positionable within the menu bar
    right: "10px", // Adjusts position to the right side
    top: "10px",
  },
  menuList: {
    listStyleType: "none", // Remove bullet points
    padding: 0, // Remove padding
    margin: 0,
    color: "white", // Remove margin
  },
  menuItem: {
    marginBottom: "1rem", // Spacing between menu items
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none", // Remove underline
    color: "white", // Link color
    fontSize: "1rem", // Font size
    marginLeft: "0.5rem",
    transition: "opacity 0.3s ease", // Smooth transition when showing/hiding
  },
  icon: {
    fontSize: "1.5rem",
    color: "white",
  },
  rightBox: {
    position: "fixed", // Keeps it fixed on the right side
    top: "65px", // Starts below the navbar
    right: "0", // Fixes it to the right
    width: "250px", // Width of the right box
    backgroundColor: "#5b5858", // Light background
    padding: "1rem", // Padding for content
    boxSizing: "border-box",
    borderRadius: "5px",
    margin: "5px",
    boxShadow: "-2px 0px 10px rgba(0,0,0,0.1)", // Adds a shadow for separation
    overflowY: "auto", // Scroll if content overflows
    height: "50%", // Takes full height
  },
  rightBoxTitle: {
    fontSize: "1.2rem",
    marginBottom: "0", // Remove margin to move it closer to the top
    color: "white",
    position: "sticky", // Sticky positioning
    top: "0", // Move it towards the very top
    backgroundColor: "#5b5858", // Background color for visibility
    zIndex: 10, // Ensures it stays above the scrolling list
    // padding: "10px 0", // Adds some padding for spacing, adjust as needed
  },
  
  rightBoxList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    maxHeight: "calc(100vh - 120px)", // Ensures the list area takes the remaining space minus the title
    overflowY: "auto", // Makes the list scrollable
  },
  rightBoxItem: {
    marginBottom: "1rem",
    color: "silver",
  },
};

export default Community;
