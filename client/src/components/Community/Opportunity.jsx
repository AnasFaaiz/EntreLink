import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

const Opportunity = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      name: "Business",
      subcategories: ["Startups", "Marketing", "Finance"],
    },
    {
      name: "Technology",
      subcategories: ["Web Development", "AI/ML", "Mobile Apps"],
    },
    {
      name: "Industry",
      subcategories: ["Healthcare", "Education", "E-commerce"],
    },
    {
      name: "Stage",
      subcategories: ["Idea Stage", "Early Stage", "Growth Stage"],
    },
  ];

  const toggleRow = () => {
    setIsVisible(!isVisible);
  };

  const boxItemStyle = (isHovered) => ({
    flex: "1",
    textAlign: "center",
    padding: "3px 2px",
    color: isHovered ? "white" : "black",
    backgroundColor: isHovered ? "#008080" : "#ffffff",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    fontWeight: "500",
    margin: "5px",
  });

  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        <h1>Opportunity</h1>
        {/* Top Row Container */}
        <div style={styles.rowContainer}>
          <span style={styles.toggleButton} onClick={toggleRow}>
            {isVisible ? <FaBars /> : <FaTimes />}
          </span>

          {!isVisible && (
            <div className="row" style={styles.row}>
              <Link to="/Community" style={{ textDecoration: 'none' }}>
              <div
                style={boxItemStyle(hoveredItem === "groups")}
                onMouseEnter={() => setHoveredItem("groups")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Groups
              </div>
              </Link>

              <Link to="/Community/Discussion" >
              <div
                style={boxItemStyle(hoveredItem === "discussions")}
                onMouseEnter={() => setHoveredItem("discussions")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Discussions
              </div>
              </Link>

              <Link to="/Community/Opportunity" >
              <div
                style={boxItemStyle(hoveredItem === "Opportunity")}
                onMouseEnter={() => setHoveredItem("Opportunity")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Opportunity
              </div>
              </Link>

              <Link to="/Community/Challenges">
              <div
                style={boxItemStyle(hoveredItem === "Challenges")}
                onMouseEnter={() => setHoveredItem("Challenges")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Challenges
              </div>
              </Link>
            </div>
          )}
        </div>

        {/* Side Categories */}
        <div style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={styles.categoryWrapper}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div style={styles.categoryHeader}>
                <span>{category.name}</span>
                <AiFillCaretRight 
                  style={{
                    transform: hoveredCategory === index ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              {hoveredCategory === index && (
                <div style={styles.subcategoriesContainer}>
                  {category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} style={styles.subcategory}>
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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
    zIndex: 1000,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "10px",
    backgroundColor: "#66B2B2",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    // width: "35%",
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
    color: "#008080",
  },
  categoriesContainer: {
    width: "250px",
    backgroundColor: "#66B2B2",
    borderRadius: "10px",
    padding: "15px",
    margin: "58px 10px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  categoryWrapper: {
    marginBottom: "10px",
    position: "relative",
  },
  categoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    '&:hover': {
      backgroundColor: "#e0e0e0",
    },
  },
  subcategoriesContainer: {
    position: "absolute",
    left: "100%",
    top: "0",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "200px",
    zIndex: 1001,
  },
  subcategory: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    '&:hover': {
      backgroundColor: "#f5f5f5",
    },
  },
};

export default Opportunity;