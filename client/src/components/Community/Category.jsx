import React from 'react';
import { Link } from 'react-router-dom';
import { startupFields } from '../Events/CategoryBox';
import { useState } from 'react';
import colorPalette from '../colorPalette';

const Category = () => {
  const [selectedFields, setSelectedFields] = useState({});
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleCheckboxChange = (field) => {
    setSelectedFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="container" style={styles.cont}>
      <div className="menu" style={styles.menu}>
        <Link to="/EntreLink/Community" 
          style={{...styles.button, marginTop: '5px', 
                marginLeft: '3.5px', 
                backgroundColor: hoveredButton === 'squads' ? colorPalette.accent.gold : colorPalette.accent.teal 
                }}
                onMouseEnter={() => setHoveredButton('squads')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                  Squads
        </Link>
        <Link to="/EntreLink/Discussion" 
          style={{...styles.button,
             marginTop: '5px', 
             backgroundColor: hoveredButton === 'discussion' ? colorPalette.accent.gold : colorPalette.accent.teal
             }}
             onMouseEnter={() => setHoveredButton('discussion')}
              onMouseLeave={() => setHoveredButton(null)}
             > Discussion
        </Link>
        <Link to="/EntreLink/Challenges" 
          style={{...styles.button,
              backgroundColor: hoveredButton === 'challenges' ? colorPalette.accent.gold : colorPalette.accent.teal
            }}
            onMouseEnter={() => setHoveredButton('challenges')}
            onMouseLeave={() => setHoveredButton(null)}
            >
              Challenges
        </Link>
        <Link to="/EntreLink/Opportunity" 
          style={{...styles.button,
            backgroundColor: hoveredButton === 'opportunity' ? colorPalette.accent.gold : colorPalette.accent.teal
          }}
          onMouseEnter={() => setHoveredButton('opportunity')}
          onMouseLeave={() => setHoveredButton(null)}
          >
            Opportunity
        </Link>
      </div>

      <hr style={{...styles.hr,border: '3px solid #E0E0E0'}} />

      <div className="categories" style={styles.cat}>
        <label style={styles.catTitle}>Categories</label>
         <div style={styles.categoryList}>
          {startupFields.map((field, index) => (
            <div key={index} style={styles.categoryItem}>
              <input
                type="checkbox"
                id={`field-${index}`}
                checked={selectedFields[field] || false}
                onChange={() => handleCheckboxChange(field)}
                style={styles.checkbox}
              />
              <label 
                htmlFor={`field-${index}`}
                style={styles.categoryLabel}
              >
                {field}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
 cont: {
    width: "23vw",
    border: `1px solid ${colorPalette.primary.main}`,
    backgroundColor: colorPalette.background.main,
    borderRadius: "10px",
 },
 menu: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", 
  gridTemplateRows: "repeat(2, 1fr)",    
  gap: "10px",                           
  padding: "15px",
  backgroundColor: colorPalette.background.main,
  borderRadius: "inherit",
},
button: {
  padding: '12px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: colorPalette.accent.teal,
  border: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  textDecoration: 'none',
  color: colorPalette.text.light,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: colorPalette.accent.gold,
    boxShadow: `0px 0px 10px ${colorPalette.utility.highlight}`,
  }
},
 hr: {
    width: "90%",
    margin: "3px auto",
    border: `1px solid ${colorPalette.primary.main}`,
    borderRadius: "50px",
 },
 catTitle: {
  fontSize: "15px",
  position: "relative",
  margin: "10px",
  color: colorPalette.accent.gold,
  
 },
 verticalLine: {
  position: "absolute",
  top: "12%",
  left: "14%",
  height: "11%",
  backgroundColor: colorPalette.primary.main,
  border: `0.2px solid ${colorPalette.primary.main}`,
},


categoryList: {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '10px',
  maxHeight: '300px',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
},

categoryItem: {
  display: 'flex',
  alignItems: 'center',
  color: colorPalette.text.light,
  borderRadius: '6px',
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: colorPalette.background.dark,
    transform: 'translateY(-2px)',
    boxShadow: `0px 0px 8px ${colorPalette.utility.shadow}`,
  }
},

checkbox: {
  marginRight: '10px',
  cursor: 'pointer',
  accentColor: colorPalette.accent.teal,
  width: '16px',
  height: '16px'
},

categoryLabel: {
  cursor: 'pointer',
  flex: 1,
  userSelect: 'none',
  color: colorPalette.text.light,
}

};

export default Category;