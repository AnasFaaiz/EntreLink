import React from 'react';
import Navbar from '../Navbar';
import Category from './Category';

const Discussion = ({ categories }) => {
  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        {/* Top Row Container */}
        <Category categories={categories} />
        <h1>Challenges</h1>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minHeight: "calc(100vh - 65px)",
    marginTop: "65px",
    padding: "20px",
  },
};

export default Discussion;