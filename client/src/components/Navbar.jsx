import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();  // Get navigate function

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate("/login");  
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
      <ul style={styles.navLinks}>
      <li>
          <Link to="/Events" style={styles.link}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/Articles" style={styles.link}>
            Articles
          </Link>
        </li>
        <li>
          <Link to="/Community" style={styles.link}>
            Community
          </Link>
        </li>
        <li>
          <Link to="/connections" style={styles.link}>
            Connections
          </Link>
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
              <Link to="/profile" style={styles.dropdownLink}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/my_mentor" style={styles.dropdownLink}>
                Mentor
              </Link>
            </li>
            <li>
              <Link to="/settings" style={styles.dropdownLink}>
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}  // Call the handleLogout function
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
    listStyleType: "none", // Removes default list styling
    display: "flex",       // Displays items in a row
    gap: "1.5rem",         // Adds spacing between items
    margin: 0,             // Ensures no unwanted margin
    padding: "5px",            // Removes default padding
    alignItems: "center",
    position: "relative",
    marginLeft: "auto",
    
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
  },
  profile: {
    position: "relative",
    cursor: "pointer",
    margin: "5px", // Centers horizontally using margin auto
    display: "flex",    // Ensures alignment with flexbox // Centers content horizontally
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
