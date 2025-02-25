import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); // Manage search bar visibility
  const navigate = useNavigate(); // Initialize navigate

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle search visibility
  };

  const handleLogoClick = () => {
    navigate("/EntreLink/homepage"); // Navigate to /homepage
  };

  return (
    <nav style={styles.navbar}>
      <style>
        {`
          @keyframes bulbFlicker {
            0% { opacity: 0; transform: scale(0.9); }
            20% { opacity: 1; transform: scale(1); }
            40% { opacity: 0.8; transform: scale(0.95); }
            60% { opacity: 1; transform: scale(1); }
            80% { opacity: 0.9; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }
          }

          .link-underline::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, rgb(79, 98, 125), rgb(85, 223, 200));
            bottom: -5px;
            left: 0;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
          }

          .link-underline:hover::after {
            transform: scaleX(1);
          }
        `}
      </style>
      <div style={styles.container}>
        <div 
          style={styles.logoContainer}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('.underline').style.transform = 'scaleX(1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.underline').style.transform = 'scaleX(0)';
          }}
          onClick={handleLogoClick}
        >
          <span style={styles.logo}>
            EntreLink
          </span>
          <div className="underline" style={styles.underline}></div>
        </div>
      </div>
      <div style={styles.searchContainer}>
        {/* Conditionally render Search Bar */}
        {searchVisible && (
          <input
            type="text"
            placeholder="Search Entrepreneurs, Events, and more..."
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
          <Link to="/EntreLink/Events" style={styles.link} className="link-underline">
            <div>Events</div>
          </Link>
        </li>
        <li>
          <Link to="/EntreLink/Discover" style={styles.link} className="link-underline">
            <div>Discover</div>
            <div className="dropdown" style={styles.dropdown}>
              <Link to="/EntreLink/More1" style={styles.link}>More Link 1</Link>
              <Link to="/EntreLink/More2" style={styles.link}>More Link 2</Link>
              <Link to="/EntreLink/More3" style={styles.link}>More Link 3</Link>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/EntreLink/Community" style={styles.link} className="link-underline">
            <div>Community</div>
          </Link>
        </li>
        <li>
          <Link to="/EntreLink/Connections" style={styles.link} className="link-underline">
            <div>Connections</div>
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
              <Link to="/EntreLink/profile" style={styles.dropdownLink}>Profile</Link>
            </li>
            <li>
              <Link to="/EntreLink/my_mentor" style={styles.dropdownLink}>Mentor</Link>
            </li>
            <li>
              <Link to="/EntreLink/settings" style={styles.dropdownLink}>Settings</Link>
            </li>
            <li>
              <button
                onClick={() => navigate("/EntreLink/")}
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
    backgroundColor: "transparent", 
    color: "white",
    position: "fixed",
    top: 0,
    width: "100%",
    boxSizing: "border-box",
    height: "55px",
    zIndex: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  logoContainer: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: "20px",
  },
  logo: {
    fontSize: '2.3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right,rgb(85, 223, 200), rgb(79, 98, 125))', // Updated text gradient
    WebkitBackgroundClip: 'text', // Clip gradient to text
    WebkitTextFillColor: 'transparent', // Makes the gradient visible
    display: 'inline-block',
    transition: 'transform 0.3s ease',
    animation: 'bulbFlicker 2s ease-in-out 1', // Flicker for 3 iterations
  },
  underline: {
    position: 'absolute',
    bottom: '7px',
    left: '2px',
    width: '100%',
    height: '2px',
    background: 'linear-gradient(to right,rgb(79, 98, 125), rgb(85, 223, 200))', // Matches the text gradient
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
    borderRadius: '100px',  // Large border-radius for more pronounced curve
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional for a subtle shadow effect
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
    padding: "1px",
    alignItems: "center",
    margin: "0",
  },

  link: {
    fontSize: '1rem',
    color: 'black',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  linkHover: {
    backgroundColor: "#f0f0f0",
    color: "black",
    display: 'block',
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginLeft: "auto",
  },
  searchButton: {
    backgroundColor: "#e2f9e2",
    color: "black",
    border: "none",
    padding: "0.05rem 0.05rem",
    cursor: "pointer",
    fontSize: "1.4rem",
    marginRight: "20px",
    borderRadius: "30px",
  },
  searchBar: {
    minWidth: "400px",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    color: "black",
  },
  profile: {
    position: "relative",
    cursor: "pointer",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  profileIcon: {
    display: "flex",
    justifyContent: "center",
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
  dropdown: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#004d40',
    padding: '10px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
};

export default Navbar;