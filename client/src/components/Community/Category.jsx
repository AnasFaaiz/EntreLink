import React from 'react';
import BackGround from '../Background';

const Category = () => {
  
  return (
    <div className="container" style={styles.cont}>
      <div className="menu" style={styles.menu}>
        <button style={{...styles.button,marginTop: '5px',marginLeft: '3.5px'}}>Squads</button>
        <button style={{...styles.button,marginTop: '5px'}}>Discussion</button>
        <hr style={{...styles.hr, width: '88%'}} />
        <hr style={styles.verticalLine} />
        <button style={styles.button}>Challenges</button>
        <button style={styles.button}>Opportunity</button>
      </div>

      <hr style={styles.hr} />

      <div className="categories" style={styles.cat}>
        <label style={styles.catTitle}>Categories</label>
      </div>
    </div>
  );
};

const styles = {
 cont: {
    width: "35%",
    border: "1px solid black",
    backgroundColor: "#66b2b2",
    borderRadius: "10px",
    margin: "10px",
 },
 menu: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    margin: "8px",
    backgroundColor: "#66b2b2",
    marginBottom: "7%",
    // border: "1px solid black",
 },
 button: {
    flex: '1 1 48%',
    padding: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#66b2b2',
    border: 'none',
 },
 hr: {
    width: "90%",
    margin: "2px auto",
    border: "0.2px solid black",
    borderRadius: "50px",
 },
 catTitle: {
  fontSize: "15px",
  position: "relative",
  margin: "10px",
  
 },
 verticalLine: {
  position: "absolute",
  top: "10px",
  left: "19%",
  height: "9%",
  backgroundColor: "black",
  border: "0.2px solid black",
},
};

export default Category;