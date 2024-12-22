import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";

const Community = () => {
  // State to toggle visibility of the row
  const [isVisible, setIsVisible] = useState(true);

  // State to track which item is hovered
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to toggle visibility
  const toggleRow = () => {
    setIsVisible(!isVisible); // Toggle the visibility
  };

  // Style for the box item
  const boxItemStyle = (isHovered) => ({
    flex: "1",
    textAlign: "center",
    padding: "3px 2px",
    color: isHovered ? "white" : "black", // Change text color when hovered
    backgroundColor: isHovered ? "#007BFF" : "#ffffff", // Change background color on hover
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    fontWeight: "500",
    margin: "5px",
  });

  return (
    <div className="container" style={{ backgroundColor: "#a9fba6" }}>
      <Navbar />
      <div style={styles.rowContainer}>
        {/* Toggle Button */}
        <span style={styles.toggleButton} onClick={toggleRow}>
          {isVisible ? <FaTimes /> : <FaBars />} {/* Show "Close" or "Open" icon */}
        </span>

        {/* Row of items (visible when isVisible is true) */}
        {isVisible && (
          <div className="row" style={styles.row}>
            <div
              style={boxItemStyle(hoveredItem === "groups")}
              onMouseEnter={() => setHoveredItem("groups")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Groups
            </div>
            <div
              style={boxItemStyle(hoveredItem === "discussions")}
              onMouseEnter={() => setHoveredItem("discussions")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Discussions
            </div>
            <div
              style={boxItemStyle(hoveredItem === "trending")}
              onMouseEnter={() => setHoveredItem("trending")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Trending
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
//  For backgroundColor Please go to App.css (root)
  rowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    top: "65px",
    left: "3px",
    zIndex: 1000,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    width: "30%",
    position: "fixed",
    top: "63px",
    left: "40px",
  },
  toggleButton: {
    fontSize: "24px",
    cursor: "pointer",
    margin: "10px",
    backgroundColor: "transparent",
    border: "none",
    color: "#007BFF",
  },
};

export default Community;
