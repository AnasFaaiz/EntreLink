import React from 'react';
import { Link } from 'react-router-dom';
import { startupFields } from '../Events/CategoryBox';
import { useState } from 'react';

const Category = () => {
  const [selectedFields, setSelectedFields] = useState({});

  const handleCheckboxChange = (field) => {
    setSelectedFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="container" style={styles.cont}>
      <div className="menu" style={styles.menu}>
        <Link to="/EntreLink/Community" style={{...styles.button, marginTop: '5px', marginLeft: '3.5px'}}>Squads</Link>
        <Link to="/EntreLink/Discussion" style={{...styles.button, marginTop: '5px'}}>Discussion</Link>
        <Link to="/EntreLink/Challenges" style={styles.button}>Challenges</Link>
        <Link to="/EntreLink/Opportunity" style={styles.button}>Opportunity</Link>
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
    border: "1px solid black",
    backgroundColor: "#1E1E1E",
    borderRadius: "10px",
 },
 menu: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", 
  gridTemplateRows: "repeat(2, 1fr)",    
  gap: "10px",                           
  padding: "15px",
  backgroundColor: "#1E1E1E",
},
button: {
  padding: '12px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: '#E0E0E0',
  border: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  textDecoration: 'none',
  color: '#1E1E1E',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#CCCCCC',
  }
},
 hr: {
    width: "90%",
    margin: "3px auto",
    border: "1px solid #E0E0E0",
    borderRadius: "50px",
 },
 catTitle: {
  fontSize: "15px",
  position: "relative",
  margin: "10px",
  color: "#E0E0E0",
  
 },
 verticalLine: {
  position: "absolute",
  top: "12%",
  left: "14%",
  height: "11%",
  backgroundColor: "#E0E0E0",
  border: "0.2px solid #E0E0E0",
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
  color: '#E0E0E0',
  borderRadius: '6px',
  fontSize: '13px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#444444',
    transform: 'translateY(-2px)',
  }
},

checkbox: {
  marginRight: '10px',
  cursor: 'pointer',
  accentColor: '#E0E0E0',
  width: '16px',
  height: '16px'
},

categoryLabel: {
  cursor: 'pointer',
  flex: 1,
  userSelect: 'none'
}

};

export default Category;