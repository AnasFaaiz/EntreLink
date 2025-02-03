import React from 'react';
import BackGround from '../Background';
import { Link } from 'react-router-dom';

const Category = () => {
  
  return (
    <div className="container" style={styles.cont}>
      <div className="menu" style={styles.menu}>
        <Link to="/squads" style={{...styles.button, marginTop: '5px', marginLeft: '3.5px'}}>Squads</Link>
        <Link to="/discussion" style={{...styles.button, marginTop: '5px'}}>Discussion</Link>
        {/* <hr style={{...styles.hr, width: '88%'}} />
        <hr style={styles.verticalLine} /> */}
        <Link to="/challenges" style={styles.button}>Challenges</Link>
        <Link to="/opportunity" style={styles.button}>Opportunity</Link>
      </div>

      <hr style={{...styles.hr,border: '3px solid #E0E0E0'}} />

      <div className="categories" style={styles.cat}>
        <label style={styles.catTitle}>Categories</label>
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
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    margin: "8px",
    backgroundColor: "#1E1E1E",
    marginBottom: "7%",
    // border: "1px solid black",
 },
 button: {
    flex: '1 1 48%',
    padding: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '##E0E0E0',
    border: 'none',
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
};

export default Category;