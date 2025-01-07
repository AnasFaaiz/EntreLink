import React from 'react';
import BackGround from '../Background';

const Category = () => {
  return (
    <div className="container" style={styles.cont}>
      <div className="menu" style={styles.menu}>
        <button style={styles.button}>Squads</button>
        <button style={styles.button}>Discussion</button>
        <hr styles={styles.hr} />
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
    border: "1px solid black",
 },
 button: {
    flex: '1 1 45%',
    // padding: '10px 20px',
    fontSize: '13px',
    cursor: 'pointer',
    backgroundColor: '#66b2b2',
 },
 hr: {
    width: "90%",
    margin: "5px auto",
    border: "0.2px solid black",
    borderRadius: "50px",
 },
 catTitle: {
  fontSize: "15px",
  position: "relative",
  margin: "10px",
  
 }
};

export default Category;