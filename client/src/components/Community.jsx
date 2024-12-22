import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "./Navbar"; // Ensure Navbar is correctly imported

const Community = () => {
  const [collapsed, setCollapsed] = useState(false); // State to toggle menu collapse
  const [hoverIndex, setHoverIndex] = useState(null); // State to track hovered rightBoxItem

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
            <Link
              to="/forums"
              style={{ ...styles.link, display: collapsed ? "none" : "block" }}
            >
              Forums
            </Link>
          </li>
          {/* Forum Categories */}
          {!collapsed && (
            <>
              <li style={styles.menuItem}>
                <Link to="/forums/business" style={styles.link}>
                  Business
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/forums/marketing" style={styles.link}>
                  Marketing
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/forums/fundraising" style={styles.link}>
                  Fundraising
                </Link>
              </li>
            </>
          )}
          <li style={styles.menuItem}>
            {!collapsed && <span style={styles.icon}>👥</span>} {/* Groups Icon */}
            <Link
              to="/groups"
              style={{ ...styles.link, display: collapsed ? "none" : "block" }}
            >
              Groups
            </Link>
          </li>
          {/* Groups */}
          {!collapsed && (
            <>
              <li style={styles.menuItem}>
                <Link to="/groups/startups" style={styles.link}>
                  Tech Startups
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/groups/investors" style={styles.link}>
                  Investors
                </Link>
              </li>
              <li style={styles.menuItem}>
                <Link to="/groups/entrepreneurs" style={styles.link}>
                  Entrepreneurs
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Top Groups Box (Right Side) */}
      <div style={styles.rightBox}>
        <h3 style={styles.rightBoxTitle}>Active Groups</h3>
        <ul style={styles.rightBoxList}>
          {["Tech Startups", "Investors", "Shareholders", "Tech-Researchers","Researchers"].map(
            (group, index) => (
              <li
                key={index}
                style={styles.rightBoxItem}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <h4 style={{ margin: 0 }}>{group}</h4>
                <span
                  style={{
                    ...styles.rightBoxItemUnderline,
                    ...(hoverIndex === index
                      ? styles.rightBoxItemUnderlineExpanded
                      : {}),
                  }}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  menuBar: {
    position: "fixed",
    top: 65,
    left: 0,
    height: "100%",
    backgroundColor: "#333",
    width: "200px",
    // padding: "1rem",
    boxSizing: "border-box",
    borderRadius: "0 5px 5px 0",
    transition: "width 0.3s ease",
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
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  menuList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    color: "white",
  },
  menuItem: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    marginLeft: "0.5rem",
    transition: "opacity 0.3s ease",
  },
  icon: {
    fontSize: "1.5rem",
    color: "white",
  },
  rightBox: {
    position: "fixed",
    top: "65px",
    right: "0",
    width: "250px",
    backgroundColor: "#5b5858",
    padding: "1rem",
    boxSizing: "border-box",
    borderRadius: "15px",
    margin: "5px",
    boxShadow: "-2px 0px 10px rgba(0,0,0,0.1)",
    overflowY: "auto",
    height: "50%",
  },
  rightBoxTitle: {
    fontSize: "1.15rem",
    marginBottom: "20",
    color: "#20B2AA",
    position: "sticky",
    top: "0",
    backgroundColor: "#5b5858",
    zIndex: 10,
    marginTop: "2px",
    border: "1px solid white", 
    borderRadius: "10px", 
    padding: "0.2rem",
    width: "60%",
  },
  rightBoxList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    overflowY: "auto",
  },
  rightBoxItem: {
    position: "relative",
    marginBottom: "1rem",
    color: "white",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  rightBoxItemUnderline: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: "white",
    transition: "width 0.3s ease, left 0.3s ease",
  },
  rightBoxItemUnderlineExpanded: {
    width: "100%",
    left: 0,
  },
};

export default Community;
