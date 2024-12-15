import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "./Navbar"; // Ensure Navbar is correctly imported

const Community = () => {
  const [collapsed, setCollapsed] = useState(false); // State to toggle menu collapse

  const toggleMenu = () => {
    setCollapsed(!collapsed); // Toggle between expanded and collapsed
  };

  return (
    <div>
      <Navbar />
      {/* Menu Bar */}
      <div style={{ ...styles.menuBar, width: collapsed ? "60px" : "250px" }}>
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

          {/* <li style={styles.menuItem}>
            {!collapsed && <span style={styles.icon}>📞</span>}
            <Link to="/contact" style={{ ...styles.link, display: collapsed ? "none" : "block" }}>Contact</Link>
          </li> */}
        </ul>
      </div>
      
    </div>
  );
};

const styles = {
  menuBar: {
    position: "fixed", // Fixes it to the left side
    top: 65,
    left: 0,
    height: "100%", // Full viewport height
    backgroundColor: "#333", // Background color
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
};

export default Community;
