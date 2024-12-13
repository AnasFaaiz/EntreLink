import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);  // Manage search bar visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);  // Toggle search visibility
  };

  return (
    <nav style={styles.navbar}>
    <div style={styles.logo}>
      <img
        src="./images/EntreLink.png"
        alt="LOGO"
        style={styles.profileImage}
      />
    </div>
    <div style={styles.searchContainer}>
      {/* Conditionally render Search Bar */}
      {searchVisible && (
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchBar}
        />
      )}
  
      {/* Search Button */}
      <button onClick={toggleSearch} style={styles.searchButton}>
        {searchVisible ? "X" : "🔍"}
      </button>
    </div>
    <ul style={styles.navLinks}>
      <li>
        <Link to="/Events" style={styles.link}>Events</Link>
      </li>
      <li>
        <Link to="/Articles" style={styles.link}>Articles</Link>
      </li>
      <li>
        <Link to="/Community" style={styles.link}>Community</Link>
      </li>
      <li>
        <Link to="/Connections" style={styles.link}>Connections</Link>
      </li>
    </ul>
  
    
  
    <div style={styles.profile}>
      <div onClick={toggleDropdown} style={styles.profileIcon}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          style={styles.profileImage}
        />
      </div>
      {dropdownOpen && (
        <ul style={styles.dropdownMenu}>
          <li>
            <Link to="/profile" style={styles.dropdownLink}>Profile</Link>
          </li>
          <li>
            <Link to="/my_mentor" style={styles.dropdownLink}>Mentor</Link>
          </li>
          <li>
            <Link to="/settings" style={styles.dropdownLink}>Settings</Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              style={styles.logoutButton}
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  </nav>
  );
};

const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#000",
      margin: 10,
      color: "white",
      position: "fixed",
      top: 0,
      width: "98%",
      boxSizing: "border-box",
      borderRadius: "10px",
    },
    logo: {
      position: "relative",
      cursor: "pointer",
      margin: 5,
    },
    navLinks: {
      listStyleType: "none",
      display: "flex",
      gap: "1.5rem",
      padding: "5px",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginLeft: "auto", // Space between search bar and button
    },
    searchButton: {
      backgroundColor: "#333",
      color: "white",
      border: "none",
      padding: "0.3rem 0.8rem", // Reduced padding for a smaller button
      cursor: "pointer",
      fontSize: "1.2rem",
      marginRight: "20px",
      borderRadius: "30px", // Adjust font size for smaller appearance
    },
    searchBar: {
        minWidth: "400px", // Guarantees minimum size
        padding: "0.5rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
      },
      
    profile: {
      position: "relative",
      cursor: "pointer",
      margin: "5px",
      display: "flex",
      alignItems: "center",
    },
    profileIcon: {
      display: "inline-block",
    },
    profileImage: {
      borderRadius: "50%",
      width: "40px",
      height: "40px",
    },
    dropdownMenu: {
      position: "absolute",
      right: 10,
      top: "50px",
      backgroundColor: "#333",
      borderRadius: "5px",
      listStyleType: "none",
      padding: "0.5rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    dropdownLink: {
      textDecoration: "none",
      color: "white",
      display: "block",
      padding: "0.5rem 1rem",
    },
    logoutButton: {
      background: "none",
      border: "none",
      color: "white",
      padding: "0.5rem 1rem",
      textAlign: "left",
      cursor: "pointer",
      width: "100%",
    },
  };
  

export default Navbar;
